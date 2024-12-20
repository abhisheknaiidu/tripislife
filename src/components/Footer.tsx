import Image from 'next/image';
import Link from 'next/link';

type FooterLink = {
  title: string;
  href: string;
};

export function Footer({ data }: { data: { logo: string; links: FooterLink[] } }) {
  return (
    <footer className="border-t py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          <Image src={data.logo} alt="Trip is Life" width={200} height={50} />
          <nav>
            <ul className="flex gap-6">
              {data.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-black"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
} 