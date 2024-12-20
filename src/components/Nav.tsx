import Link from 'next/link';

export function Nav() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-8 pt-[60px]">
        <ul className="flex justify-around gap-16 text-white text-[20px] font-area font-semibold tracking-wider">
          <li>
            <Link href="/about" className="hover:opacity-80">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/properties" className="hover:opacity-80">
              PROPERTIES
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:opacity-80">
            <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_7)">
<path d="M109.549 0.582245C108.974 2.65909 108.389 4.73169 107.826 6.81278C98.7179 40.4958 89.6123 74.1788 80.5038 107.862C80.3823 108.311 80.2184 108.749 79.7988 109.187C76.2004 86.3319 72.6005 63.4781 68.9795 40.4831C45.9632 36.7589 22.9936 33.0432 0.0240179 29.326C0.015541 29.2469 0.00706409 29.1692 0 29.0901C0.36592 28.9629 0.726189 28.809 1.10059 28.7101C21.934 23.2057 42.7689 17.7056 63.6037 12.2083C78.3323 8.32167 93.0638 4.44348 107.791 0.552576C108.294 0.419771 108.77 0.188068 109.259 0.00157634C109.83 -0.042221 109.43 0.398578 109.549 0.580832V0.582245Z" fill="white"/>
<path d="M39.9605 83.7432C32.4782 83.8011 25.3251 77.815 25.3096 68.9552C25.2941 60.8146 32.0007 54.3071 40.1654 54.382C48.275 54.4569 54.7655 60.9996 54.7542 69.0866C54.7414 77.2131 48.1125 83.7813 39.9619 83.7418L39.9605 83.7432Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1_7">
<rect width="109.575" height="109.187" fill="white"/>
</clipPath>
</defs>
</svg>

            </Link>
          </li>
          <li>
            <Link href="/store" className="hover:opacity-80">
              STORE
            </Link>
          </li>
          <li>
            <Link href="/more" className="hover:opacity-80">
              MORE
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
} 