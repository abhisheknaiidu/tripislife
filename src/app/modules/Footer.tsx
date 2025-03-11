import Link from 'next/link';

type FooterLink = {
  title: string;
  href: string;
};

export function Footer({ data }: { data: { links: FooterLink[] } }) {
  return (
    <footer className="bg-[#FFF6EB] py-[130px] max-w-[1260px] mx-auto px-4 border-[#1C1D1B] border-t">
      <div className="mx-auto">
        <nav className="mb-16">
          <ul className="space-y-4">
            {data?.links.map((link) => (
              <li key={link.href} className="border-b border-neutral-300">
                <Link 
                  href={link.href}
                  className="block py-2 text-[#294023] text-[36px] leading-[48px] font-medium transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
  
      </div>
      <div className="text-[#294023] text-left font-black  text-[250px] leading-[300px] font-circular">
          trip is life
        </div>
    </footer>
  );
}