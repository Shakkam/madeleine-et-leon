/**
 * QuiSommesNousSection
 * Contenus dans data/content.js → equipe .
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

          <div className="mt-16 flow-root">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl mb-10 md:float-left md:w-[40%] md:mr-12 md:mb-8">
              <Image
                src={equipe.recit.photo}
                alt={equipe.recit.photoAlt}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                style={{ objectPosition: equipe.recit.photoPosition }}
              />
            </div>
            <div className="space-y-12">
              {equipe.recit.sections.map((section) => (
                <div key={section.titre} className="space-y-5">
                  <h2 className="font-display fraunces-soft italic font-bold text-3xl sm:text-4xl text-choco leading-tight">
                    {section.titre}
                  </h2>
                  {section.paragraphes.map((para, i) => (
                    <p
                      key={i}
                      className="font-display fraunces-mid text-base sm:text-lg text-choco/80 leading-relaxed whitespace-pre-line"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
              <blockquote className="pl-6 border-l-4 border-beurre space-y-4">
                <p className="font-display fraunces-mid text-base sm:text-lg text-choco/80 leading-relaxed">
                  {equipe.recit.conclusion.texte}
                </p>
                <p className="font-display fraunces-soft italic font-bold text-2xl sm:text-3xl text-choco leading-tight">
                  {equipe.recit.conclusion.lignes.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </p>
                <p className="font-display fraunces-mid text-base sm:text-lg text-choco/80 leading-relaxed">
                  {equipe.recit.conclusion.fin}
                </p>
              </blockquote>
            </div>
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
