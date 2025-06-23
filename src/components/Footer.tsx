import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import Divider from './Divider';

export default function Footer() {
  return (
    <div className='relative bottom-0 w-full bg-gray-100 p-5 text-sm'>
        <p>Subscribe to our newsletter for tasty Handmade discounts, news and much more!</p>

        <div className='flex gap-3 my-3'>
            <form>
                <div className='flex items-center gap-2'>
                    <Input type="email" id='email-id' placeholder="Enter e-mail" 
                    className='text-sm'/>
                    <Button type="submit" variant="outline"
                    className=''>Subscribe</Button>
                </div>
                <div className='flex gap-2 mt-4'>
                    <Checkbox id='toggleAge' />
                    <Label htmlFor="toggleAge"
                    className='font-normal'>By subscribing to the newsletter, you agree that you are at least 16 years of age.</Label>
                </div>
            </form>
        </div>

        <Divider />

        <div className='grid grid-cols-3 gap-3'>
            <div>
                <h1 className='font-semibold mb-2'>Contact</h1>

                <p className='mb-2'>Eventyrgata 73, 0550 Oslo</p>
                <p>+47 987 65 432</p>
            </div>
            <div>
                <h1 className='font-semibold mb-2'>Career</h1>
                <p>Open Positions</p>
            </div>
             <div>
                <h1 className='font-semibold mb-2'>Support</h1>
                <ul>
                    <li>FAQ</li>
                    <li>Shipping</li>
                </ul>
            </div>
        </div>

        <Divider />
        <Link href={'https://github.com/heikkuj'}><p className='text-gray-400 text-xs underline'>©2025 heikkuj @ GitHub</p></Link>

    </div>
  )
}
