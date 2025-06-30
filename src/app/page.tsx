'use client'

import Navigation from '@/components/Navigation';
import Footer from "@/components/Footer";
import CircularText from '@/components/CircularText';
import HeroImg from '@/components/HeroImg';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className='p-3'>
        <CircularText
        text="HANDMADE*BAKERIES*"
        onHover='slowDown'
        spinDuration={20}
        className='custom-class' />
      </div>
      <Navigation />
      <HeroImg />

      <div>
        <Card className='
        mx-5 sm:mx-10 md:mx-15 
        my-8 sm:my-10 
        text-sm sm:text-2xl md:text-2xl lg:text-2xl
        text-center  bg-gray-50 md:bg-blue-600 lg:bg-fuchsia-300'>
          <CardHeader>
            <CardTitle>Our specialities</CardTitle>
          </CardHeader>
          <CardContent className='grid grid-cols-2 gap-3 sm:gap-6'>

            <Card>
              <CardHeader>
                <CardTitle>Macrons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='relative place-self-center max-w-[120%] max-h-[100%]
                w-30 h-30 
                sm:w-56 sm:h-56'>
                  <Image 
                  src={'/pastel/macron-mix.jpg'} 
                  fill
                  alt='Macrons'
                  className='rounded-md object-cover' />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Donuts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='relative place-self-center max-w-[120%] max-h-[100%]
                w-30 h-30 
                sm:w-56 sm:h-56'>
                  <Image 
                  src={'/pastel/donut.jpg'} 
                  fill
                  alt='Donuts' 
                  className='rounded-md object-cover'/>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cakes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='relative place-self-center max-w-[120%] max-h-[100%]
                w-30 h-30 
                sm:w-56 sm:h-56'>
                  <Image 
                  src={'/pastel/cake.jpg'}
                  fill 
                  alt='Cakes' 
                  className='rounded-md'/>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Drinks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='relative place-self-center max-w-[120%] max-h-[100%]
                w-30 h-30 
                sm:w-56 sm:h-56'>
                  <Image 
                  src={'/pastel/drink.jpg'} 
                  fill
                  alt='Drinks'
                  className='rounded-md' />
                </div>
              </CardContent>
            </Card>

          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}