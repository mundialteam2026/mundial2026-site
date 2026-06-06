"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const matchs = [
  {
    id: 1, statut: "LIVE", minute: "67",
    domicile: { nom: "Sénégal", flag: "🇸🇳", score: 2 },
    exterieur: { nom: "Nigeria", flag: "🇳🇬", score: 1 },
    groupe: "Groupe D", stade: "MetLife Stadium", africain: true,
    evenements: ["⚽ 23' Mané", "⚽ 45' Osimhen", "⚽ 61' Diatta"],
  },
  {
    id: 2, statut: "LIVE", minute: "34",
    domicile: { nom: "Maroc", flag: "🇲🇦", score: 1 },
    exterieur: { nom: "Croatie", flag: "🇭🇷", score: 0 },
    groupe: "Groupe B", stade: "Rose Bowl", africain: true,
    evenements: ["⚽ 18' Ziyech"],
  },
  {
    id: 3, statut: "FT",
    domicile: { nom: "Côte d'Ivoire", flag: "🇨🇮", score: 2 },
    exterieur: { nom: "Arabie Saoudite", flag: "🇸🇦", score: 0 },
    groupe: "Groupe C", stade: "SoFi Stadium", africain: true,
    evenements: ["⚽ 12' Haller", "⚽ 78' Kessié"],
  },
  {
    id: 4, statut: "FT",
    domicile: { nom: "Égypte", flag: "🇪🇬", score: 3 },
    exterieur: { nom: "Corée du Sud", flag: "🇰🇷", score: 0 },
    groupe: "Groupe F", stade: "AT&T Stadium", africain: true,
    evenements: ["⚽ 8' Salah", "⚽ 55' Salah", "⚽ 89' Trezeguet"],
  },
  {
    id: 5, statut: "FT",
    domicile: { nom: "France", flag: "🇫🇷", score: 2 },
    exterieur: { nom: "Ghana", flag: "🇬🇭", score: 1 },
    groupe: "Groupe D", stade: "Levi's Stadium", africain: true,
    evenements: ["⚽ 34' Mbappé", "⚽ 56' Ayew", "⚽ 71' Griezmann"],
  },
  {
    id: 6, statut: "FT",
    domicile: { nom: "Brésil", flag: "🇧🇷", score: 1 },
    exterieur: { nom: "Cameroun", flag: "🇨🇲", score: 1 },
    groupe: "Groupe E", stade: "Arrowhead Stadium", africain: true,
    evenements: ["⚽ 45' Vinicius", "⚽ 67' Aboubakar"],
  },
  {
    id: 7, statut: "A VENIR", heure: "18:00",
    domicile: { nom: "Sénégal", flag: "🇸🇳", score: null },
    exterieur: { nom: "France", flag: "🇫🇷", score: null },
    groupe: "Groupe A", stade: "MetLife Stadium", africain: true,
    date: "26 Juin 2026", evenements: [],
  },
  {
    id: 8, statut: "A VENIR", heure: "21:00",
    domicile: { nom: "Maroc", flag: "🇲🇦", score: null },
    exterieur: { nom: "Espagne", flag: "🇪🇸", score: null },
    groupe: "Groupe B", stade: "Rose Bowl", africain: true,
    date: "27 Juin 2026", evenements: [],
  },
  {
    id: 9, statut: "A VENIR", heure: "15:00",
    domicile: { nom: "Côte d'Ivoire", flag: "🇨🇮", score: null },
    exterieur: { nom: "Brésil", flag: "🇧🇷", score: null },
    groupe: "Groupe C", stade: "SoFi Stadium", africain: true,
    date: "25 Juin 2026", evenements: [],
  },
  {
    id: 10, statut: "A VENIR", heure: "18:00",
    domicile: { nom: "Nigeria", flag: "🇳🇬", score: null },
    exterieur: { nom: "Argentine", flag: "🇦🇷", score: null },
    groupe: "Groupe D", stade: "AT&T Stadium", africain: true,
    date: "28 Juin 2026", evenements: [],
  },
];

const filtres = ["Tous", "En direct", "Terminés", "À venir", "🌍 Afrique"];

export default function Matchs() {
  const [filtre, setFiltre] = useState("Tous");
  const [matchOuvert, setMatchOuvert] = useState<typeof matchs[0] | null>(null);
  const [countdown, setCountdown] = useState({ h: 2, m: 34, s: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 };
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 };
        if (prev.h > 0) return { h: prev.h - 1, m: 59, s: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const matchsFiltres = matchs.filter(m => {
    if (filtre === "En direct") return m.statut === "LIVE";
    if (filtre === "Terminés") return m.statut === "FT";
    if (filtre === "À venir") return m.statut === "A VENIR";
    if (filtre === "🌍 Afrique") return m.africain;
    return true;
  });

  const live = matchs.filter(m => m.statut === "LIVE");
  const avenir = matchs.filter(m => m.statut === "A VENIR");

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
          <Link href="/classement" className="hover:text-[#FBBF24] transition">Classement</Link>
          <Link href="/matchs" className="text-[#FBBF24]">Matchs</Link>
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
          Les <span className="text-[#FBBF24]">matchs</span>
        </h1>
        <p className="text-white/40 text-lg">{live.length} en direct · {avenir.length} à venir</p>
      </section>

      {/* COMPTE À REBOURS */}
      <section className="px-8 pb-10 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#FBBF24]/10 to-transparent border border-[#FBBF24]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#FBBF24] uppercase tracking-widest mb-1">Prochain match africain</div>
            <div className="font-black text-xl">🇨🇮 Côte d'Ivoire vs Brésil 🇧🇷</div>
            <div className="text-white/40 text-sm mt-1">25 Juin 2026 · 15:00 · SoFi Stadium</div>
          </div>
          <div className="flex gap-4 text-center">
            {[
              { val: String(countdown.h).padStart(2, "0"), label: "H" },
              { val: String(countdown.m).padStart(2, "0"), label: "MIN" },
              { val: String(countdown.s).padStart(2, "0"), label: "SEC" },
            ].map((t, i) => (
              <div key={i} className="bg-[#FBBF24] text-black rounded-xl px-4 py-3 min-w-[60px]">
                <div className="font-black text-2xl">{t.val}</div>
                <div className="text-xs font-bold opacity-70">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILTRES */}
      <section className="px-8 pb-8 max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-3">
          {filtres.map(f => (
            <button
              key={f}
              onClick={() => setFiltre(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition border
                ${filtre === f
                  ? "bg-[#FBBF24] text-black border-[#FBBF24]"
                  : "bg-white/5 text-white/50 border-white/10 hover:border-white/30"}`}
            >
              {f === "En direct" && <span className="inline-block w-2 h-2 bg-[#16A34A] rounded-full mr-2 animate-pulse"></span>}
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* MATCHS EN DIRECT */}
      {(filtre === "Tous" || filtre === "En direct") && live.length > 0 && (
        <section className="px-8 pb-10 max-w-5xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse"></span>
            En direct
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {live.map(m => (
              <div
                key={m.id}
                onClick={() => setMatchOuvert(m)}
                className="bg-[#16A34A]/10 border border-[#16A34A]/30 rounded-2xl p-6 cursor-pointer hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs bg-[#16A34A] text-white px-3 py-1 rounded-full font-bold animate-pulse">
                    LIVE {m.minute}'
                  </span>
                  <span className="text-xs text-white/30">{m.groupe}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <div className="text-3xl mb-1">{m.domicile.flag}</div>
                    <div className="font-bold text-sm">{m.domicile.nom}</div>
                  </div>
                  <div className="text-center px-4">
                    <div className="text-4xl font-black text-[#FBBF24]">
                      {m.domicile.score} - {m.exterieur.score}
                    </div>
                  </div>
                  <div className="text-center flex-1">
                    <div className="text-3xl mb-1">{m.exterieur.flag}</div>
                    <div className="font-bold text-sm">{m.exterieur.nom}</div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-white/30 text-center">📍 {m.stade}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* LISTE MATCHS */}
      <section className="px-8 pb-24 max-w-5xl mx-auto">
        {filtre !== "En direct" && (
          <h2 className="text-sm uppercase tracking-widest text-white/40 mb-4">
            {filtre === "Tous" ? "Tous les matchs" : filtre}
          </h2>
        )}
        <div className="flex flex-col gap-3">
          {matchsFiltres
            .filter(m => filtre === "En direct" ? true : m.statut !== "LIVE" || filtre === "Tous")
            .filter(m => !(filtre === "Tous" && m.statut === "LIVE"))
            .map(m => (
              <div
                key={m.id}
                onClick={() => setMatchOuvert(m)}
                className={`border rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:-translate-y-1
                  ${m.statut === "A VENIR"
                    ? "bg-white/5 border-white/10 hover:border-[#FBBF24]/30"
                    : "bg-white/3 border-white/5 hover:border-white/20"}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-3 py-1 rounded-full font-bold
                      ${m.statut === "FT" ? "bg-white/10 text-white/50" : "bg-[#FBBF24]/20 text-[#FBBF24]"}`}>
                      {m.statut === "FT" ? "Terminé" : `${m.heure}`}
                    </span>
                    <span className="text-xs text-white/30">{m.groupe}</span>
                    {m.statut === "A VENIR" && (
                      <span className="text-xs text-white/20">{m.date}</span>
                    )}
                  </div>
                  <span className="text-xs text-white/20">📍 {m.stade}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl">{m.domicile.flag}</span>
                    <span className="font-bold">{m.domicile.nom}</span>
                  </div>
                  <div className="px-6 text-center">
                    {m.statut === "FT" ? (
                      <span className="text-2xl font-black text-[#FBBF24]">
                        {m.domicile.score} - {m.exterieur.score}
                      </span>
                    ) : (
                      <span className="text-white/20 font-bold">vs</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 flex-1 justify-end">
                    <span className="font-bold">{m.exterieur.nom}</span>
                    <span className="text-2xl">{m.exterieur.flag}</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* MODAL MATCH */}
      {matchOuvert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur px-4"
          onClick={() => setMatchOuvert(null)}
        >
          <div
            className="bg-[#111827] border border-white/10 rounded-3xl p-8 max-w-md w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setMatchOuvert(null)} className="absolute top-4 right-4 text-white/30 hover:text-white text-2xl">✕</button>

            <div className="flex items-center justify-between mb-2">
              <span className={`text-xs px-3 py-1 rounded-full font-bold
                ${matchOuvert.statut === "LIVE" ? "bg-[#16A34A] text-white animate-pulse" :
                  matchOuvert.statut === "FT" ? "bg-white/10 text-white/50" : "bg-[#FBBF24]/20 text-[#FBBF24]"}`}>
                {matchOuvert.statut === "LIVE" ? `LIVE ${matchOuvert.minute}'` :
                  matchOuvert.statut === "FT" ? "Terminé" : matchOuvert.heure}
              </span>
              <span className="text-xs text-white/30">{matchOuvert.groupe}</span>
            </div>

            <div className="flex items-center justify-between my-8">
              <div className="text-center flex-1">
                <div className="text-5xl mb-2">{matchOuvert.domicile.flag}</div>
                <div className="font-black">{matchOuvert.domicile.nom}</div>
              </div>
              <div className="text-center px-4">
                {matchOuvert.statut !== "A VENIR" ? (
                  <div className="text-5xl font-black text-[#FBBF24]">
                    {matchOuvert.domicile.score} - {matchOuvert.exterieur.score}
                  </div>
                ) : (
                  <div className="text-2xl font-black text-white/20">VS</div>
                )}
              </div>
              <div className="text-center flex-1">
                <div className="text-5xl mb-2">{matchOuvert.exterieur.flag}</div>
                <div className="font-black">{matchOuvert.exterieur.nom}</div>
              </div>
            </div>

            {matchOuvert.evenements.length > 0 && (
              <div>
                <h3 className="text-xs uppercase tracking-widest text-white/30 mb-3">Événements</h3>
                <div className="flex flex-col gap-2">
                  {matchOuvert.evenements.map((e, i) => (
                    <div key={i} className="bg-black/30 rounded-xl px-4 py-2 text-sm text-white/70">
                      {e}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4 text-center text-xs text-white/20">
              📍 {matchOuvert.stade}
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