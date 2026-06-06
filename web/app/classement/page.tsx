"use client";
import { useState } from "react";
import Link from "next/link";

const groupes = [
  {
    nom: "Groupe A",
    equipes: [
      { pos: 1, flag: "🇸🇳", pays: "Sénégal", j: 3, v: 3, n: 0, d: 0, bp: 7, bc: 1, pts: 9, diff: "+6", tendance: "↑" },
      { pos: 2, flag: "🇳🇱", pays: "Pays-Bas", j: 3, v: 2, n: 0, d: 1, bp: 5, bc: 3, pts: 6, diff: "+2", tendance: "→" },
      { pos: 3, flag: "🇪🇨", pays: "Équateur", j: 3, v: 1, n: 0, d: 2, bp: 2, bc: 4, pts: 3, diff: "-2", tendance: "↓" },
      { pos: 4, flag: "🇶🇦", pays: "Qatar", j: 3, v: 0, n: 0, d: 3, bp: 1, bc: 7, pts: 0, diff: "-6", tendance: "↓" },
    ]
  },
  {
    nom: "Groupe B",
    equipes: [
      { pos: 1, flag: "🇲🇦", pays: "Maroc", j: 3, v: 2, n: 1, d: 0, bp: 4, bc: 1, pts: 7, diff: "+3", tendance: "↑" },
      { pos: 2, flag: "🇭🇷", pays: "Croatie", j: 3, v: 1, n: 2, d: 0, bp: 3, bc: 2, pts: 5, diff: "+1", tendance: "→" },
      { pos: 3, flag: "🇧🇪", pays: "Belgique", j: 3, v: 1, n: 1, d: 1, bp: 3, bc: 3, pts: 4, diff: "0", tendance: "→" },
      { pos: 4, flag: "🇨🇦", pays: "Canada", j: 3, v: 0, n: 0, d: 3, bp: 1, bc: 5, pts: 0, diff: "-4", tendance: "↓" },
    ]
  },
  {
    nom: "Groupe C",
    equipes: [
      { pos: 1, flag: "🇨🇮", pays: "Côte d'Ivoire", j: 3, v: 2, n: 1, d: 0, bp: 5, bc: 2, pts: 7, diff: "+3", tendance: "↑" },
      { pos: 2, flag: "🇦🇷", pays: "Argentine", j: 3, v: 2, n: 0, d: 1, bp: 6, bc: 3, pts: 6, diff: "+3", tendance: "→" },
      { pos: 3, flag: "🇵🇱", pays: "Pologne", j: 3, v: 1, n: 0, d: 2, bp: 2, bc: 4, pts: 3, diff: "-2", tendance: "↓" },
      { pos: 4, flag: "🇸🇦", pays: "Arabie Saoudite", j: 3, v: 0, n: 1, d: 2, bp: 1, bc: 5, pts: 1, diff: "-4", tendance: "↓" },
    ]
  },
  {
    nom: "Groupe D",
    equipes: [
      { pos: 1, flag: "🇫🇷", pays: "France", j: 3, v: 3, n: 0, d: 0, bp: 8, bc: 2, pts: 9, diff: "+6", tendance: "↑" },
      { pos: 2, flag: "🇳🇬", pays: "Nigeria", j: 3, v: 2, n: 0, d: 1, bp: 5, bc: 3, pts: 6, diff: "+2", tendance: "↑" },
      { pos: 3, flag: "🇩🇰", pays: "Danemark", j: 3, v: 1, n: 0, d: 2, bp: 3, bc: 5, pts: 3, diff: "-2", tendance: "↓" },
      { pos: 4, flag: "🇹🇳", pays: "Tunisie", j: 3, v: 0, n: 0, d: 3, bp: 1, bc: 7, pts: 0, diff: "-6", tendance: "↓" },
    ]
  },
  {
    nom: "Groupe E",
    equipes: [
      { pos: 1, flag: "🇧🇷", pays: "Brésil", j: 3, v: 3, n: 0, d: 0, bp: 9, bc: 1, pts: 9, diff: "+8", tendance: "↑" },
      { pos: 2, flag: "🇨🇲", pays: "Cameroun", j: 3, v: 1, n: 1, d: 1, bp: 3, bc: 4, pts: 4, diff: "-1", tendance: "→" },
      { pos: 3, flag: "🇷🇸", pays: "Serbie", j: 3, v: 1, n: 0, d: 2, bp: 4, bc: 5, pts: 3, diff: "-1", tendance: "↓" },
      { pos: 4, flag: "🇬🇭", pays: "Ghana", j: 3, v: 1, n: 1, d: 1, bp: 3, bc: 4, pts: 4, diff: "-1", tendance: "→" },
    ]
  },
  {
    nom: "Groupe F",
    equipes: [
      { pos: 1, flag: "🇵🇹", pays: "Portugal", j: 3, v: 3, n: 0, d: 0, bp: 7, bc: 1, pts: 9, diff: "+6", tendance: "↑" },
      { pos: 2, flag: "🇪🇬", pays: "Égypte", j: 3, v: 2, n: 0, d: 1, bp: 6, bc: 3, pts: 6, diff: "+3", tendance: "↑" },
      { pos: 3, flag: "🇺🇾", pays: "Uruguay", j: 3, v: 1, n: 0, d: 2, bp: 3, bc: 5, pts: 3, diff: "-2", tendance: "↓" },
      { pos: 4, flag: "🇰🇷", pays: "Corée du Sud", j: 3, v: 0, n: 0, d: 3, bp: 1, bc: 8, pts: 0, diff: "-7", tendance: "↓" },
    ]
  },
];

const africains = ["Sénégal", "Maroc", "Côte d'Ivoire", "Nigeria", "Cameroun", "Ghana", "Égypte"];

export default function Classement() {
  const [groupeActif, setGroupeActif] = useState("Tous");
  const [filtreAfrique, setFiltreAfrique] = useState(false);

  const groupesFiltres = groupeActif === "Tous"
    ? groupes
    : groupes.filter(g => g.nom === groupeActif);

  const tendanceColor = (t: string) =>
    t === "↑" ? "text-[#16A34A]" : t === "↓" ? "text-[#E63946]" : "text-white/30";

  const isAfricain = (pays: string) => africains.includes(pays);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#0B0B0B]/90 backdrop-blur border-b border-white/10">
        <Link href="/">
          <img src="/statix_logo_web.svg" alt="STATIX" style={{ height: "40px", width: "auto" }} />
        </Link>
        <div className="hidden md:flex gap-8 text-sm text-white/50">
          <Link href="/joueurs" className="hover:text-[#FBBF24] transition">Joueurs</Link>
          <Link href="/equipes" className="hover:text-[#FBBF24] transition">Équipes</Link>
          <Link href="/classement" className="text-[#FBBF24]">Classement</Link>
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
          Classement <span className="text-[#FBBF24]">des groupes</span>
        </h1>
        <p className="text-white/40 text-lg">Phase de groupes — Coupe du Monde 2026</p>
      </section>

      {/* FILTRES */}
      <section className="px-8 pb-8 max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-3 items-center">
          {["Tous", ...groupes.map(g => g.nom)].map(g => (
            <button
              key={g}
              onClick={() => setGroupeActif(g)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition border
                ${groupeActif === g
                  ? "bg-[#FBBF24] text-black border-[#FBBF24]"
                  : "bg-white/5 text-white/50 border-white/10 hover:border-white/30"}`}
            >
              {g}
            </button>
          ))}
          <button
            onClick={() => setFiltreAfrique(!filtreAfrique)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition border ml-auto
              ${filtreAfrique
                ? "bg-[#16A34A] text-white border-[#16A34A]"
                : "bg-white/5 text-white/50 border-white/10 hover:border-white/30"}`}
          >
            🌍 Afrique uniquement
          </button>
        </div>
      </section>

      {/* TABLEAUX */}
      <section className="px-8 pb-24 max-w-5xl mx-auto flex flex-col gap-8">
        {groupesFiltres.map((groupe) => (
          <div key={groupe.nom} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
              <h2 className="font-black text-lg">{groupe.nom}</h2>
              <span className="text-xs text-white/30 uppercase tracking-widest">Phase de groupes</span>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5 text-white/30 text-xs uppercase">
                  <th className="px-6 py-3 text-left">#</th>
                  <th className="px-6 py-3 text-left">Équipe</th>
                  <th className="px-4 py-3 text-center">J</th>
                  <th className="px-4 py-3 text-center">V</th>
                  <th className="px-4 py-3 text-center">N</th>
                  <th className="px-4 py-3 text-center">D</th>
                  <th className="px-4 py-3 text-center">Diff</th>
                  <th className="px-4 py-3 text-center">Pts</th>
                  <th className="px-4 py-3 text-center">↕</th>
                </tr>
              </thead>
              <tbody>
                {groupe.equipes
                  .filter(e => !filtreAfrique || isAfricain(e.pays))
                  .map((e, i) => (
                    <tr
                      key={i}
                      className={`border-b border-white/5 transition
                        ${isAfricain(e.pays) ? "bg-[#FBBF24]/5 hover:bg-[#FBBF24]/10" : "hover:bg-white/5"}
                        ${e.pos <= 2 ? "border-l-2 border-l-[#16A34A]" : ""}`}
                    >
                      <td className="px-6 py-4 text-white/40 font-bold">{e.pos}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{e.flag}</span>
                          <span className={`font-medium ${isAfricain(e.pays) ? "text-[#FBBF24]" : ""}`}>
                            {e.pays}
                          </span>
                          {isAfricain(e.pays) && (
                            <span className="text-xs bg-[#FBBF24]/20 text-[#FBBF24] px-2 py-0.5 rounded-full">AFR</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center text-white/50">{e.j}</td>
                      <td className="px-4 py-4 text-center text-[#16A34A] font-bold">{e.v}</td>
                      <td className="px-4 py-4 text-center text-white/40">{e.n}</td>
                      <td className="px-4 py-4 text-center text-[#E63946] font-bold">{e.d}</td>
                      <td className="px-4 py-4 text-center text-white/50">{e.diff}</td>
                      <td className="px-4 py-4 text-center font-black text-[#FBBF24] text-lg">{e.pts}</td>
                      <td className={`px-4 py-4 text-center font-bold ${tendanceColor(e.tendance)}`}>{e.tendance}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="px-6 py-3 flex items-center gap-4 text-xs text-white/30 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#16A34A] rounded-full"></div>
                <span>Qualifié pour les huitièmes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#FBBF24]/30 rounded-full"></div>
                <span>Équipe africaine</span>
              </div>
            </div>
          </div>
        ))}
      </section>

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