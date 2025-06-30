import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { newSubscriberHandler } from './newSubscriber';

const EmailSchema = z.string().email({ message: 'Please enter a valid e-mail address' });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const emailValidation = EmailSchema.safeParse(req.body.email);
        if (!emailValidation.success) {
            return res.status(400).json({ error: 'Please enter a valid e-mail address' });
        }

        const BREVO_API_KEY = process.env.BREVO_API_KEY;
        const LIST_ID = parseInt(process.env.BREVO_LIST_ID || '', 10) || 0;

        if (!BREVO_API_KEY || !LIST_ID) {
            console.error('Brevo API Key or List ID not configured properly');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        const url = 'https://api.brevo.com/v3/contacts';
        const data = {
            email: emailValidation.data,
            listIds: [LIST_ID],
            updateEnabled: true,
        };

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'api-key': BREVO_API_KEY,
            },
        };

        const response = await axios.post(url, data, options);

        if (response.status === 201) {
            await newSubscriberHandler(req, res);
            return res.status(201).json({ message: 'Successfully subscribed to the newsletter!' })
        } else if (response.status === 204) {
            return res.status(200).json({ message: "You're already subscribed!"});
        } else {
            console.error('Brevo API Error;', response.status, response.data);
            return res.status(500).json({ message: 'An error occured during subscription.'})
        }
    } catch (error) {
        console.error('Error subscribing to Brevo:', error);
        return res.status(500).json({ error: 'An error occured during subscription.' })
    }
};

export default handler;