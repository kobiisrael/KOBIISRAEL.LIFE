import { Link } from "react-router-dom";
import { NAV_ITEMS } from "@/data/site";
import { HOME } from "@/constants/testIds";

export default function Footer() {
  return (
    <footer
      data-testid={HOME.footer}
      className="border-t border-ki-border bg-ki-bg"
    >
      <div className="container-ki py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="font-serif text-2xl md:text-3xl tracking-tight text-ki-fg">
            Kobi Israel
          </div>
          <p className="mt-4 max-w-md text-sm text-ki-muted leading-relaxed">
            Still &amp; Moving Diaries. Photography, moving images and autobiographical archives of
            masculinity, desire, exile and memory.
          </p>
          <p className="mt-6 text-xs text-ki-muted/80">
            © {new Date().getFullYear()} Kobi Israel. All works reproduced with permission of the artist.
          </p>
        </div>

        <div className="md:col-span-4">
          <div className="overline">Navigate</div>
          <ul className="mt-5 grid grid-cols-2 gap-y-2 gap-x-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.slug}>
                <Link
                  to={item.to}
                  className="text-sm text-ki-fg/75 hover:text-ki-gold transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="overline">Studio</div>
          <p className="mt-5 text-sm text-ki-fg/75 leading-relaxed">
            Contact and social links to be confirmed by the artist.
          </p>
        </div>
      </div>
    </footer>
  );
}
