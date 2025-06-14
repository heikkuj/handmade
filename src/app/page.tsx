'use client'

import Image from "next/image";
import Link from "next/link";
import Navigation from '@/components/Navigation';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Footer />
    </div>
  );
}