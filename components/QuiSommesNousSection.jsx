/**
 * QuiSommesNousSection
 * Contenus dans data/content.js → equipe (prénoms et textes à compléter).
 */
import Image from "next/image";
import { equipe } from "@/data/content";

export default function QuiSommesNousSection() {
  return (
    <>
      <section className="bg-creme px-6 sm:px-10 lg:px-16 pt-16 pb-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-label text-xs tracking-[0.3em] uppercase text-choco-cl mb-4">
            Madeleine &amp; Léon
          </p>
          <h1
            className="font-display fraunces-soft italic font-black text-choco leading-[0.9]"
            style={{ fontSize: "clamp(3.2rem, 9vw, 7rem)" }}
          >
            Qui sommes-nous
          </h1>
          <p className="font-display fraunces-mid text-lg sm:text-xl text-choco/80 leading-relaxed mt-8 max-w-2xl">
            {equipe.intro}
          </p>

          <div className="mt-16 flex flex-col gap-16">
            {equipe.membres.map((m) => (
              <article
                key={m.prenom}
                className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 md:gap-12 items-center"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden md:-rotate-2 shadow-xl">
                  <Image
                    src={m.photo}
                    alt={m.photoAlt}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: m.photoPosition }}
                  />
                </div>
                <div>
                  <p className="font-label text-xs tracking-[0.25em] uppercase text-choco-cl mb-3">
                    {m.role}
                  </p>
                  <h2
                    className="font-display fraunces-soft italic font-black text-choco leading-none"
                    style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
                  >
                    {m.prenom}
                  </h2>
                  <p className="font-display fraunces-mid text-lg text-choco/80 leading-relaxed mt-6">
                    {m.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-choco px-6 sm:px-10 lg:px-16 py-20">
        <ul className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-4">
          {equipe.valeurs.map((v, i) => (
            <li key={v.titre} className="rounded-3xl border border-creme/15 p-7">
              <span className="font-label text-xs tracking-[0.25em] text-beurre">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display fraunces-soft italic font-bold text-3xl text-creme mt-5">
                {v.titre}
              </h3>
              <p className="font-display fraunces-mid text-creme/75 leading-relaxed mt-3">
                {v.texte}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
