'use client'

import React, { useState, FormEvent } from 'react'
import axios from 'axios';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';

const SubscriptionForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'success' | 'error' | 'loading' | 'idle'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await axios.post('@/app/api/newsletter/subscribe', { email });
            setStatus('success');
            setMessage(response.data.message);
            setEmail('');
        } catch (error) {
            setStatus('error');
            if (axios.isAxiosError(error)) { 
                setMessage(error.response?.data.error || 'An error occured.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex items-center gap-2'>
                <Input
                type='email'
                placeholder='Enter e-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading'}
                className='text-sm' 
                />
                <Button type='submit' variant={'outline'} disabled={status === 'loading'}>
                    {status === 'loading' ? 'Subscribinging...' : 'Subscribe'}
                </Button>
            </div>
            <div className='flex gap-2 mt-4'>
                <Checkbox id='toggleAge' required />
                <Label htmlFor="toggleAge"
                className='font-normal'>By subscribing to the newsletter, you agree that you are at least 16 years of age.</Label>
            </div>

            {status === 'success' && <p>{message}</p>}
            {status === 'error' && <p>{message}</p>}
        </form>
    );
};

export default SubscriptionForm;