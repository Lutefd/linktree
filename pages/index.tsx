import Head from 'next/head';
import Image from 'next/image';
import data from '../data.json';

function LinkCard({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      className="flex items-center p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h2 className="text-xl font-bold">{title}</h2>
    </a>
  );
}
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <Image
        alt={data.name}
        src={data.avatar}
        width={120}
        height={120}
        className="rounded-full mt-10"
      />
      <h1 className="mt-4 text-2xl font-bold">{data.name}</h1>
    </div>
  );
}
