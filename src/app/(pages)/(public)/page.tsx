import Image from 'next/image';
import { Link } from '@nextui-org/react';
import PrimaryHeading from '@/components/ui/PrimaryHeading';
import HeroSection from '@/components/home/HeroSection/HeroSection';
import Footer from '@/components/home/Footer/Footer';
// Futura
export default function Home() {
  return (
    <section className='h-full flex flex-col '>
      <HeroSection />
      <Footer />
    </section>
  );
}
