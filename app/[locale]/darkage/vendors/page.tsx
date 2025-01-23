import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dark Age',
  description: 'Upcomming Event - Dark Age',
};

export default function DarkAge() {
  return (
    <div>
      <h1>Dark Age</h1>
      <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
    </div>
  );
}
