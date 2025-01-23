import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Galactic',
  description: 'Past Event - Galactic',
};

export default function Galactic() {
  return (
    <div>
      <h1>Galactic</h1>
      <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
    </div>
  );
}
