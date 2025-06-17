'use client'

import Navigation from '@/components/Navigation';
import Footer from "@/components/Footer";
import CircularText from '@/components/CircularText';

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
      <Footer />
    </div>
  );
}