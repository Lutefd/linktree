import Head from 'next/head';
import Image from 'next/image';
import data from '../data.json';

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
