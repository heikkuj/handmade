'use client'

import Navigation from '@/components/Navigation';
import Footer from "@/components/Footer";
import CircularText from '@/components/CircularText';
import HeroImg from '@/components/HeroImg';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
        <Card className='mx-3 my-8 text-center bg-gray-50'>
          <CardHeader>
            <CardTitle>Our specialities</CardTitle>
          </CardHeader>
          <CardContent className='grid grid-cols-2 gap-3'>

            <Card>
              <CardHeader>
                <CardTitle>Macrons</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                src={'/pastel/macron-mix.jpg'} 
                alt='Macrons'
                width={'fill'}
                height={'30%'}
                className='rounded-md' />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Donuts</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                src={'/pastel/donut.jpg'} 
                alt='Donuts' 
                className='rounded-md'/>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cakes</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                src={'/pastel/cake.jpg'} 
                alt='Cakes' 
                className='rounded-md'/>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Drinks</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                src={'/pastel/drink.jpg'} 
                alt='Drinks'
                className='rounded-md' />
              </CardContent>
            </Card>

          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}