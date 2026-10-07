import { liens, infos } from "@/data/content";

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-noir text-creme/50 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">

        {/* Identité */}
        <div>
          <p className="font-display fraunces-soft italic font-black text-creme text-2xl leading-none">
            {infos.nom}
          </p>
          <p className="font-label text-xs tracking-widest uppercase text-creme/35 mt-2">
            Pâtisserie artisanale · {infos.region} · {infos.fondation}
          </p>
        </div>

        {/* Liens */}
        <nav aria-label="Liens footer">
          <ul className="flex items-center gap-6">
            <li>
              <a
                href={liens.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-creme/50 hover:text-beurre transition-colors"
                aria-label="Instagram Madeleine & Léon"
              >
                <InstagramIcon />
                <span className="font-label text-xs tracking-wider">Instagram</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        id="mentions-legales"
        className="max-w-5xl mx-auto mt-10 pt-8 border-t border-creme/10 font-label text-xs text-creme/25 leading-loose"
      >
        <p>
          <strong className="text-creme/40">Mentions légales</strong> —{" "}
          {infos.nom}, entrepreneur individuel · SIRET {infos.siret} ·{" "}
          {infos.activite} · Hébergeur : Vercel Inc., 440 N Barranca Ave #4133,
          Covina, CA 91723, États-Unis.
        </p>
        <p className="mt-2">
          &copy; {year} {infos.nom}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
