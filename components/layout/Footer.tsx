import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { mainNav, footerLegalNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/ui/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/80">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            Nous concevons des expériences et des produits digitaux qui
            contribuent à la croissance des entreprises.
          </p>
          <div className="mt-4 flex flex-col gap-2.5 text-sm font-medium text-white">
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-2.5 hover:text-orange"
            >
              <MailIcon className="h-4 w-4 shrink-0 text-orange" />
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="group inline-flex items-center gap-2.5 hover:text-orange"
            >
              <PhoneIcon className="h-4 w-4 shrink-0 text-orange" />
              {siteConfig.phone}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Navigation
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/services/sites-web" className="hover:text-orange">
                Sites web
              </Link>
            </li>
            <li>
              <Link href="/services/applications-web" className="hover:text-orange">
                Applications web
              </Link>
            </li>
            <li>
              <Link href="/services/applications-mobiles" className="hover:text-orange">
                Applications mobiles
              </Link>
            </li>
            <li>
              <Link href="/services/ui-ux-design" className="hover:text-orange">
                UI/UX Design
              </Link>
            </li>
            <li>
              <Link href="/services/solutions-sur-mesure" className="hover:text-orange">
                Solutions sur mesure
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Légal
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {footerLegalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-white/50 sm:flex-row">
          <p>© {year} ZahDigit. Tous droits réservés.</p>
          <p className="inline-flex items-center gap-1.5">
            <MapPinIcon className="h-3.5 w-3.5 shrink-0 text-orange" />
            Abidjan, Côte d&apos;Ivoire
          </p>
        </Container>
      </div>
    </footer>
  );
}
