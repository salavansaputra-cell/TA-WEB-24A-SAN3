import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">

      <div className="container mx-auto px-4 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* About */}
          <div>
            <h2 className="text-lg font-semibold text-white">
              About
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Kyokko Beach is a scenic gateway to Lampung’s stunning coastline.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-lg font-semibold text-white">
              Navigation
            </h2>

            <ul className="mt-4 space-y-3 text-sm text-slate-300">

              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/reservation">Reservasi</Link>
              </li>

              <li>
                <Link href="/info">Info Wisata</Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold text-white">
              Contact
            </h2>

            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>Location: Pesawaran, Lampung</p>
              <p>Email: info@kyokkobeach.com</p>
              <p>Phone: +62 812 3456 7890</p>
            </div>
          </div>

        </div>

      </div>

    </footer>
  );
}