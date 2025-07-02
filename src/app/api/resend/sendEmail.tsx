import React from 'react'
import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate';

export default async function sendEmail() {
    const RESEND_KEY = process.env.RESEND_API_KEY;
    const resend = new Resend(RESEND_KEY);

    await resend.emails.send({
        from: 'example',
        to: '',
        replyTo: '',
        subject: 'abc',
        react: <EmailTemplate />,
    });
};
