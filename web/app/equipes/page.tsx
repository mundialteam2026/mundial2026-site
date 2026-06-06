"use client";
import { useState } from "react";
import Link from "next/link";

const equipes = [
  {
    id: 1, nom: "Côte d'Ivoire", flag: "🇨🇮", code: "CIV",
    couleur: "#F77F00", groupe: "C",
    forme: ["V", "V", "N"],
    stats: { j: 3, v: 2, n: 1, d: 0, bp: 5, bc: 2, pts: 7 },
    prochainMatch: "vs Brésil — 25 Juin",
    joueurs: [
      { nom: "S. Haller", poste: "AT", buts: 4, passes: 2 },
      { nom: "F. Kessié", poste: "MIL", buts: 1, passes: 2 },
      { nom: "S. Aurier", poste: "DEF", buts: 0, passes: 1 },
      { nom: "Y. Konaté", poste: "DEF", buts: 0, passes: 0 },
    ]
  },
  {
    id: 2, nom: "Sénégal", flag: "🇸🇳", code: "SEN",
    couleur: "#16A34A", groupe: "A",
    forme: ["V", "V", "V"],
    stats: { j: 3, v: 3, n: 0, d: 0, bp: 7, bc: 1, pts: 9 },
    prochainMatch: "vs France — 26 Juin",
    joueurs: [
      { nom: "S. Mané", poste: "AT", buts: 3, passes: 1 },
      { nom: "K. Koulibaly", poste: "DEF", buts: 0, passes: 1 },
      { nom: "I. Gueye", poste: "MIL", buts: 1, passes: 2 },
      { nom: "E. Mendy", poste: "GK", buts: 0, passes: 0 },
    ]
  },
  {
    id: 3, nom: "Maroc", flag: "🇲🇦", code: "MAR",
    couleur: "#E63946", groupe: "B",
    forme: ["V", "N", "V"],
    stats: { j: 3, v: 2, n: 1, d: 0, bp: 4, bc: 1, pts: 7 },
    prochainMatch: "vs Espagne — 27 Juin",
    joueurs: [
      { nom: "H. Ziyech", poste: "MIL", buts: 2, passes: 4 },
      { nom: "A. Hakimi", poste: "DEF", buts: 1, passes: 2 },
      { nom: "Y. En-Nesyri", poste: "AT", buts: 2, passes: 0 },
      { nom: "B. Bounou", poste: "GK", buts: 0, passes: 0 },
    ]
  },
  {
    id: 4, nom: "Nigeria", flag: "🇳🇬", code: "NGA",
    couleur: "#16A34A", groupe: "D",
    forme: ["V", "D", "V"],
    stats: { j: 3, v: 2, n: 0, d: 1, bp: 5, bc: 3, pts: 6 },
    prochainMatch: "vs Argentine — 28 Juin",
    joueurs: [
      { nom: "V. Osimhen", poste: "AT", buts: 3, passes: 0 },
      { nom: "A. Iheanacho", poste: "AT", buts: 1, passes: 1 },
      { nom: "W. Ndidi", poste: "MIL", buts: 0, passes: 2 },
      { nom: "C. Bassey", poste: "DEF", buts: 0, passes: 0 },
    ]
  },
  {
    id: 5, nom: "Égypte", flag: "🇪🇬", code: "EGY",
    couleur: "#E63946", groupe: "F",
    forme: ["V", "V", "D"],
    stats: { j: 3, v: 2, n: 0, d: 1, bp: 6, bc: 3, pts: 6 },
    prochainMatch: "vs Allemagne — 29 Juin",
    joueurs: [
      { nom: "M. Salah", poste: "AT", buts: 5, passes: 3 },
      { nom: "T. Mohamed", poste: "MIL", buts: 0, passes: 2 },
      { nom: "A. Hegazi", poste: "DEF", buts: 1, passes: 0 },
      { nom: "G. El-Shenawy", poste: "GK", buts: 0, passes: 0 },
    ]
  },
  {
    id: 6, nom: "Ghana", flag: "🇬🇭", code: "GHA",
    couleur: "#FBBF24", groupe: "E",
    forme: ["N", "V", "D"],
    stats: { j: 3, v: 1, n: 1, d: 1, bp: 3, bc: 4, pts: 4 },
    prochainMatch: "vs Portugal — 30 Juin",
    joueurs: [
      { nom: "T. Partey", poste: "MIL", buts: 0, passes: 2 },
      { nom: "J. Ayew", poste: "AT", buts: 1, passes: 1 },
      { nom: "A. Djiku", poste: "DEF", buts: 0, passes: 0 },
      { nom: "L. Bati", poste: "GK", buts: 0, passes: 0 },
    ]
  },
];

export default function Equipes() {
  const [equipeSelectionnee, setEquipeSelectionnee] = useState<typeof equipes[0] | null>(null);

  const formeColor = (r: string) =>
    r === "V" ? "bg-[#16A34A]" : r === "N" ? "bg-white/20" : "bg-[#E63946]";

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#0B0B0B]/90 backdrop-blur border-b border-white/10">
        <Link href="/">
          <img src="/statix_logo_web.svg" alt="STATIX" style={{ height: "40px", width: "auto" }} />
        </Link>
        <div className="hidden md:flex gap-8 text-sm text-white/50">
          <Link href="/joueurs" className="hover:text-[#FBBF24] transition">Joueurs</Link>
          <Link href="/equipes" className="text-[#FBBF24]">Équipes</Link>
          <Link href="/classement" className="hover:text-[#FBBF24] transition">Classement</Link>
          <Link href="/matchs" className="hover:text-[#FBBF24] transition">Matchs</Link>
        </div>
        <div className="flex gap-3">
          <Link href="/inscription" className="text-white/50 text-sm font-bold px-5 py-2 rounded-full border border-white/10 hover:border-white/30 transition">S'inscrire</Link>
          <Link href="/login" className="bg-[#FBBF24] text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-yellow-300 transition">Connexion</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-12 px-8 max-w-5xl mx-auto">
        <span className="text-xs tracking-widest text-[#FBBF24] uppercase border border-[#FBBF24]/30 px-4 py-1 rounded-full">
          🏆 World Cup 2026
        </span>
        <h1 className="text-5xl font-black mt-4 mb-2">
          Les <span className="text-[#FBBF24]">équipes</span> africaines
        </h1>
        <p className="text-white/40 text-lg">{equipes.length} nations qualifiées — suivez leur parcours</p>
      </section>

      {/* GRILLE ÉQUIPES */}
      <section className="px-8 pb-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipes.map((e) => (
            <div
              key={e.id}
              onClick={() => setEquipeSelectionnee(e)}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-xl"
            >
              {/* BANDE COULEUR */}
              <div className="h-2" style={{ background: e.couleur }} />

              <div className="p-6">
                {/* HEADER */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="text-5xl">{e.flag}</div>
                    <div>
                      <div className="font-black text-lg">{e.nom}</div>
                      <div className="text-white/40 text-xs">Groupe {e.groupe}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#FBBF24] font-black text-2xl">{e.stats.pts}</div>
                    <div className="text-white/30 text-xs">pts</div>
                  </div>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-4 gap-2 mb-6 text-center">
                  <div className="bg-black/30 rounded-xl p-2">
                    <div className="font-black text-lg">{e.stats.j}</div>
                    <div className="text-white/30 text-xs">J</div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-2">
                    <div className="font-black text-lg text-[#16A34A]">{e.stats.v}</div>
                    <div className="text-white/30 text-xs">V</div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-2">
                    <div className="font-black text-lg text-white/50">{e.stats.n}</div>
                    <div className="text-white/30 text-xs">N</div>
                  </div>
                  <div className="bg-black/30 rounded-xl p-2">
                    <div className="font-black text-lg text-[#E63946]">{e.stats.d}</div>
                    <div className="text-white/30 text-xs">D</div>
                  </div>
                </div>

                {/* BUTS */}
                <div className="flex justify-between text-sm mb-6">
                  <span className="text-white/40">Buts marqués</span>
                  <span className="font-bold text-[#FBBF24]">{e.stats.bp}</span>
                </div>

                {/* FORME */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-white/30 text-xs">Forme</span>
                  {e.forme.map((r, i) => (
                    <div key={i} className={`w-6 h-6 rounded-full ${formeColor(r)} flex items-center justify-center text-xs font-bold`}>
                      {r}
                    </div>
                  ))}
                </div>

                {/* PROCHAIN MATCH */}
                <div className="bg-white/5 rounded-xl px-4 py-2 text-xs text-white/40 flex items-center gap-2">
                  <span>⚽</span>
                  <span>{e.prochainMatch}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL ÉQUIPE */}
      {equipeSelectionnee && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur px-4"
          onClick={() => setEquipeSelectionnee(null)}
        >
          <div
            className="bg-[#111827] border border-white/10 rounded-3xl p-8 max-w-md w-full relative overflow-y-auto max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setEquipeSelectionnee(null)} className="absolute top-4 right-4 text-white/30 hover:text-white text-2xl">✕</button>

            {/* HEADER */}
            <div className="h-1 rounded-full mb-6" style={{ background: equipeSelectionnee.couleur }} />
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">{equipeSelectionnee.flag}</div>
              <div>
                <div className="text-2xl font-black">{equipeSelectionnee.nom}</div>
                <div className="text-white/40 text-sm">Groupe {equipeSelectionnee.groupe}</div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-4 gap-2 mb-6 text-center">
              {[
                { val: equipeSelectionnee.stats.pts, label: "Pts", color: "text-[#FBBF24]" },
                { val: equipeSelectionnee.stats.v, label: "V", color: "text-[#16A34A]" },
                { val: equipeSelectionnee.stats.n, label: "N", color: "text-white/50" },
                { val: equipeSelectionnee.stats.d, label: "D", color: "text-[#E63946]" },
              ].map((s, i) => (
                <div key={i} className="bg-black/30 rounded-xl p-3">
                  <div className={`font-black text-2xl ${s.color}`}>{s.val}</div>
                  <div className="text-white/30 text-xs">{s.label}</div>
                </div>
              ))}
            </div>

            {/* BUTS */}
            <div className="flex justify-between bg-black/30 rounded-xl p-3 mb-6 text-sm">
              <span className="text-white/40">Buts marqués / encaissés</span>
              <span className="font-bold">{equipeSelectionnee.stats.bp} / {equipeSelectionnee.stats.bc}</span>
            </div>

            {/* JOUEURS */}
            <h3 className="text-xs uppercase tracking-widest text-white/40 mb-3">Joueurs clés</h3>
            <div className="flex flex-col gap-2 mb-6">
              {equipeSelectionnee.joueurs.map((j, i) => (
                <div key={i} className="flex items-center justify-between bg-black/30 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="text-xs bg-white/10 px-2 py-0.5 rounded-full text-white/40">{j.poste}</div>
                    <div className="text-sm font-medium">{j.nom}</div>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <span className="text-[#FBBF24] font-bold">{j.buts} ⚽</span>
                    <span className="text-[#16A34A] font-bold">{j.passes} 🅰️</span>
                  </div>
                </div>
              ))}
            </div>

            {/* FORME */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-white/30 text-xs">Forme récente</span>
              {equipeSelectionnee.forme.map((r, i) => (
                <div key={i} className={`w-7 h-7 rounded-full ${formeColor(r)} flex items-center justify-center text-xs font-bold`}>
                  {r}
                </div>
              ))}
            </div>

            {/* PROCHAIN MATCH */}
            <div className="bg-[#FBBF24]/10 border border-[#FBBF24]/20 rounded-xl px-4 py-3 text-sm text-[#FBBF24] flex items-center gap-2">
              <span>⚽</span>
              <span>Prochain : {equipeSelectionnee.prochainMatch}</span>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-8 py-8 flex items-center justify-between">
          <Link href="/">
            <img src="/statix_logo_web.svg" alt="STATIX" style={{ height: "32px", width: "auto" }} />
          </Link>
          <span className="text-white/20 text-xs">© 2026 STATIX — Tous droits réservés</span>
          <span className="text-white/20 text-xs">Données fournies par API-Football</span>
        </div>
      </footer>

    </div>
  );
}