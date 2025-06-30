import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

type Data = { message: string };

const EmailSchema = z
.string()
.email({ message: 'Please enter a valid email address' });

async function sendWelcomeEmail(email: string, apiKey: string, templateId: number) {
    const url = `https://api.brevo.com/v3/smtp/email`;
    const data = {
        to: [{ email }],
        templateId,
    };

    const options = {
        headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey,
        },
    };

    try {
        const response = await axios.post(url, data, options);
        if (response.status === 201) {
            return true;
        } else {
            console.error('Unexpected response status from Brevo API:', response.status );
            return false;
        }
    } catch (error) {
        console.error('Error sending welcome email:', error);
        return false;
    }
}

export const newSubscriberHandler = async (
        req: NextApiRequest,
        res: NextApiResponse<Data>
    ) => {
        try {
            if (req.method !== 'POST') {
                return res.status(405).json({ message: 'Method not allowed' });
            }

            const { email } = req.body;
            
            const emailValidation = EmailSchema.safeParse(email);
            if (!emailValidation.success) {
                return res.status(400).json({ 
                    message: emailValidation.error.errors[0]?.message || 'Invalid email address' 
                });
            }

            const validatedEmail = emailValidation.data;

            const API_KEY = process.env.BREVO_API_KEY;
            const TEMPLATE_ID = parseInt(process.env.BREVO_WELCOME_EMAIL_TEMPLATE_ID || '0', 10);

            if (!API_KEY) {
                console.error('BREVO_API_KEY is not set');
                return res.status(500).json({ message: 'Server configuration error' });
            }

            if (TEMPLATE_ID === 0) {
                console.warn('BREVO_WELCOME_EMAIL_TEMPLATE_ID is not set. Skipping welcome email.');
                return res.status(200).json({ message: 'Subscribed (Welcome email skipped - template ID not set)' });
            }

            const emailSent = await sendWelcomeEmail(validatedEmail, API_KEY, TEMPLATE_ID);

            if (emailSent) {
                console.log('Welcome email sent successfully!');
                return res.status(200).json({ message: 'Welcome email sent!' });
            } else {
                console.error('Failed to send welcome email');
                return res.status(200).json({ message: 'Subscribed (Welcome email failed to send)'})
            }
        } catch (error) {
            console.error('Error in new subscriber handler:', error);
            return res.status(500).json({ message: 'Internal server error'});
        }
    };

    export default newSubscriberHandler;