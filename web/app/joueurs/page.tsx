"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";

const joueurs = [
  { id: 1, nom: "Sébastien Haller", pays: "Côte d'Ivoire", flag: "🇨🇮", poste: "Attaquant", buts: 4, passes: 2, cartons: 1, minutes: 382, tirs: 14, photo: "SH", club: "Dortmund" },
  { id: 2, nom: "Sadio Mané", pays: "Sénégal", flag: "🇸🇳", poste: "Attaquant", buts: 3, passes: 1, cartons: 0, minutes: 360, tirs: 11, photo: "SM", club: "Al-Nassr" },
  { id: 3, nom: "Mohamed Salah", pays: "Égypte", flag: "🇪🇬", poste: "Attaquant", buts: 5, passes: 3, cartons: 0, minutes: 390, tirs: 18, photo: "MS", club: "Liverpool" },
  { id: 4, nom: "Victor Osimhen", pays: "Nigeria", flag: "🇳🇬", poste: "Attaquant", buts: 3, passes: 0, cartons: 1, minutes: 310, tirs: 12, photo: "VO", club: "Galatasaray" },
  { id: 5, nom: "Hakim Ziyech", pays: "Maroc", flag: "🇲🇦", poste: "Milieu", buts: 2, passes: 4, cartons: 0, minutes: 370, tirs: 9, photo: "HZ", club: "Galatasaray" },
  { id: 6, nom: "Riyad Mahrez", pays: "Algérie", flag: "🇩🇿", poste: "Milieu", buts: 1, passes: 3, cartons: 0, minutes: 340, tirs: 8, photo: "RM", club: "Al-Ahli" },
  { id: 7, nom: "Thomas Partey", pays: "Ghana", flag: "🇬🇭", poste: "Milieu", buts: 0, passes: 2, cartons: 1, minutes: 360, tirs: 4, photo: "TP", club: "Arsenal" },
  { id: 8, nom: "André Onana", pays: "Cameroun", flag: "🇨🇲", poste: "Gardien", buts: 0, passes: 0, cartons: 0, minutes: 390, tirs: 0, photo: "AO", club: "Man United" },
  { id: 9, nom: "Achraf Hakimi", pays: "Maroc", flag: "🇲🇦", poste: "Défenseur", buts: 1, passes: 2, cartons: 1, minutes: 390, tirs: 5, photo: "AH", club: "PSG" },
  { id: 10, nom: "Kalidou Koulibaly", pays: "Sénégal", flag: "🇸🇳", poste: "Défenseur", buts: 0, passes: 1, cartons: 0, minutes: 390, tirs: 2, photo: "KK", club: "Al-Hilal" },
  { id: 11, nom: "Édouard Mendy", pays: "Sénégal", flag: "🇸🇳", poste: "Gardien", buts: 0, passes: 0, cartons: 0, minutes: 270, tirs: 0, photo: "EM", club: "Al-Ahli" },
  { id: 12, nom: "Franck Kessié", pays: "Côte d'Ivoire", flag: "🇨🇮", poste: "Milieu", buts: 1, passes: 2, cartons: 1, minutes: 350, tirs: 6, photo: "FK", club: "Al-Ahli" },
];

const postes = ["Tous", "Attaquant", "Milieu", "Défenseur", "Gardien"];
const pays = ["Tous", "Côte d'Ivoire", "Sénégal", "Maroc", "Nigeria", "Égypte", "Ghana", "Cameroun", "Algérie"];

function CountUp({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, 16);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <div ref={ref}>{count}</div>;
}

export default function Joueurs() {
  const [recherche, setRecherche] = useState("");
  const [posteFiltre, setPosteFiltre] = useState("Tous");
  const [paysFiltre, setPaysFiltre] = useState("Tous");
  const [joueurSelectionne, setJoueurSelectionne] = useState<typeof joueurs[0] | null>(null);
  const [visible, setVisible] = useState<number[]>([]);

  const top3 = [...joueurs].sort((a, b) => b.buts - a.buts).slice(0, 3);

  const filtrés = joueurs.filter(j => {
    const matchRecherche = j.nom.toLowerCase().includes(recherche.toLowerCase());
    const matchPoste = posteFiltre === "Tous" || j.poste === posteFiltre;
    const matchPays = paysFiltre === "Tous" || j.pays === paysFiltre;
    return matchRecherche && matchPoste && matchPays;
  });

  useEffect(() => {
    filtrés.forEach((j, i) => {
      setTimeout(() => setVisible(v => [...v, j.id]), i * 80);
    });
  }, [posteFiltre, paysFiltre, recherche]);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans">

      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-12 px-8 max-w-5xl mx-auto">
        <div className="mb-2">
          <span className="text-xs tracking-widest text-[#FBBF24] uppercase border border-[#FBBF24]/30 px-4 py-1 rounded-full">
            🏆 World Cup 2026
          </span>
        </div>
        <h1 className="text-5xl font-black mt-4 mb-2">
          Les <span className="text-[#FBBF24]">joueurs</span> africains
        </h1>
        <p className="text-white/40 text-lg">Stats en temps réel — {joueurs.length} joueurs suivis</p>
      </section>

      {/* TOP 3 BUTEURS */}
      <section className="px-8 pb-12 max-w-5xl mx-auto">
        <h2 className="text-sm uppercase tracking-widest text-white/40 mb-6">🥇 Top buteurs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {top3.map((j, i) => (
            <div
              key={j.id}
              onClick={() => setJoueurSelectionne(j)}
              className={`relative rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                ${i === 0 ? "bg-gradient-to-br from-[#FBBF24]/20 to-[#FBBF24]/5 border border-[#FBBF24]/40" :
                  i === 1 ? "bg-gradient-to-br from-white/10 to-white/5 border border-white/20" :
                  "bg-gradient-to-br from-[#CD7F32]/20 to-[#CD7F32]/5 border border-[#CD7F32]/30"}`}
            >
              <div className="absolute top-4 right-4 text-2xl font-black opacity-20">
                {i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-2xl font-black text-white/30 mb-4">
                {j.photo}
              </div>
              <div className="font-black text-lg leading-tight">{j.nom}</div>
              <div className="text-white/40 text-sm mb-4">{j.flag} {j.pays}</div>
              <div className="text-5xl font-black text-[#FBBF24]">
                <CountUp target={j.buts} />
              </div>
              <div className="text-white/40 text-xs uppercase tracking-widest">Buts</div>
            </div>
          ))}
        </div>
      </section>

      {/* FILTRES */}
      <section className="px-8 pb-8 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 flex-1">
            <span className="text-white/30">🔍</span>
            <input
              type="text"
              placeholder="Rechercher un joueur..."
              value={recherche}
              onChange={e => { setRecherche(e.target.value); setVisible([]); }}
              className="bg-transparent outline-none text-white placeholder-white/20 w-full text-sm"
            />
          </div>
          <select
            value={posteFiltre}
            onChange={e => { setPosteFiltre(e.target.value); setVisible([]); }}
            className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white text-sm outline-none"
          >
            {postes.map(p => <option key={p} value={p} className="bg-[#0B0B0B]">{p}</option>)}
          </select>
          <select
            value={paysFiltre}
            onChange={e => { setPaysFiltre(e.target.value); setVisible([]); }}
            className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white text-sm outline-none"
          >
            {pays.map(p => <option key={p} value={p} className="bg-[#0B0B0B]">{p}</option>)}
          </select>
        </div>
      </section>

      {/* GRILLE JOUEURS */}
      <section className="px-8 pb-24 max-w-5xl mx-auto">
        <p className="text-white/30 text-sm mb-6">{filtrés.length} joueur{filtrés.length > 1 ? "s" : ""} trouvé{filtrés.length > 1 ? "s" : ""}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtrés.map((j) => (
            <div
              key={j.id}
              onClick={() => setJoueurSelectionne(j)}
              className={`bg-white/5 border border-white/10 rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-[#FBBF24]/50 hover:shadow-lg hover:shadow-[#FBBF24]/5
                ${visible.includes(j.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transition: "all 0.4s ease" }}
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-lg font-black text-white/30 mb-3">
                {j.photo}
              </div>
              <div className="text-xs text-white/30 mb-1">{j.flag} {j.poste}</div>
              <div className="font-bold text-sm leading-tight mb-3">{j.nom}</div>
              <div className="flex justify-between text-center">
                <div>
                  <div className="text-[#FBBF24] font-black text-lg">{j.buts}</div>
                  <div className="text-white/30 text-xs">Buts</div>
                </div>
                <div>
                  <div className="text-[#16A34A] font-black text-lg">{j.passes}</div>
                  <div className="text-white/30 text-xs">Passes</div>
                </div>
                <div>
                  <div className="text-[#E63946] font-black text-lg">{j.cartons}</div>
                  <div className="text-white/30 text-xs">Cartons</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL FICHE JOUEUR */}
      {joueurSelectionne && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur px-4"
          onClick={() => setJoueurSelectionne(null)}
        >
          <div
            className="bg-[#111827] border border-white/10 rounded-3xl p-8 max-w-md w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setJoueurSelectionne(null)} className="absolute top-4 right-4 text-white/30 hover:text-white text-2xl">✕</button>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center text-3xl font-black text-white/30">
                {joueurSelectionne.photo}
              </div>
              <div>
                <div className="text-xs text-[#16A34A] uppercase tracking-widest mb-1">{joueurSelectionne.poste}</div>
                <div className="text-2xl font-black">{joueurSelectionne.nom}</div>
                <div className="text-white/40 text-sm">{joueurSelectionne.flag} {joueurSelectionne.pays} · {joueurSelectionne.club}</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-black/30 rounded-2xl p-4 text-center">
                <div className="text-[#FBBF24] font-black text-3xl">{joueurSelectionne.buts}</div>
                <div className="text-white/40 text-xs">Buts</div>
              </div>
              <div className="bg-black/30 rounded-2xl p-4 text-center">
                <div className="text-[#16A34A] font-black text-3xl">{joueurSelectionne.passes}</div>
                <div className="text-white/40 text-xs">Passes déc.</div>
              </div>
              <div className="bg-black/30 rounded-2xl p-4 text-center">
                <div className="text-[#E63946] font-black text-3xl">{joueurSelectionne.cartons}</div>
                <div className="text-white/40 text-xs">Cartons</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-black/30 rounded-xl p-3 flex justify-between items-center">
                <span className="text-white/40 text-sm">⏱ Minutes</span>
                <span className="font-bold">{joueurSelectionne.minutes}'</span>
              </div>
              <div className="bg-black/30 rounded-xl p-3 flex justify-between items-center">
                <span className="text-white/40 text-sm">🎯 Tirs</span>
                <span className="font-bold">{joueurSelectionne.tirs}</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-white/30 text-xs mb-2 uppercase tracking-widest">Précision tirs</div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FBBF24] rounded-full transition-all duration-1000"
                  style={{ width: `${joueurSelectionne.tirs > 0 ? (joueurSelectionne.buts / joueurSelectionne.tirs * 100) : 0}%` }}
                />
              </div>
              <div className="text-right text-xs text-white/30 mt-1">
                {joueurSelectionne.tirs > 0 ? Math.round(joueurSelectionne.buts / joueurSelectionne.tirs * 100) : 0}%
              </div>
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