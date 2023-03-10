import Head from 'next/head';
import Image from 'next/image';
import { get } from '@vercel/edge-config';
import { interpolateAs } from 'next/dist/shared/lib/router/router';
import { redirect } from 'next/navigation';

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center p-1 rounded-md hover:shadow-xl  transition-shadow duration-300 w-full mb-3 bg-white hover:bg-opacity-60 hover:text-blue-500 md:max-w-3xl"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex w-full text-center">
        <div className="w-10 h-10">
          {image && (
            <Image
              alt={title}
              src={image}
              width={40}
              height={40}
              className="rounded-md self-start"
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}
function Socials({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center p-1 rounded-md"
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex w-full text-center">
        <div className="w-6 h-6 ">
          {image && (
            <Image
              alt={title}
              src={image}
              width={24}
              height={24}
              className="rounded-md "
            />
          )}
        </div>
      </div>
    </a>
  );
}

interface Data {
  name: string;
  avatar: string;
  links: Link[];
  socials: Socials[];
}
interface Link {
  href: string;
  title: string;
  image?: string;
}
interface Socials {
  href: string;
  title: string;
  image?: string;
}
export default async function Home() {
  const data = await get('linktree');

  if (!data) {
    redirect('https://luisdourado.com');
  }

  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-16 px-8">
      <Image
        alt={data.name}
        src={data.avatar}
        width={120}
        height={120}
        className="rounded-full mt-10"
      />
      <h1 className="mt-4 text-2xl mb-8 font-bold text-white">{data.name}</h1>
      {data.links.map((link: Link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex gap-1 items-center mt-8">
        {data.socials.map((social: Socials) => (
          <Socials key={social.href} {...social} />
        ))}
      </div>
    </div>
  );
}
