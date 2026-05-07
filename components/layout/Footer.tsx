import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold text-white">About</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Kyokko Beach is a scenic gateway to Lampung’s stunning coastline, offering calm waters,
              warm hospitality, and unforgettable seaside moments for families and travelers alike.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Navigation</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="transition hover:text-white">
                  Reservasi
                </Link>
              </li>
              <li>
                <Link href="/info" className="transition hover:text-white">
                  Info Wisata
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>Location: Pesawaran, Lampung</p>
              <p>
                Email: <a href="mailto:info@kyokkobeach.com" className="transition hover:text-white">info@kyokkobeach.com</a>
              </p>
              <p>
                Phone: <a href="tel:+6281234567890" className="transition hover:text-white">+62 812 3456 7890</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          <p>© 2026 Kyokko Beach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}