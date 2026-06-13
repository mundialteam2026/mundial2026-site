"use client";
import { useState } from "react";

export default function Home() {
  const [nomRecherche, setNomRecherche] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  async function handleNom(valeur) {
    setNomRecherche(valeur);
    if (valeur.length >= 2) {
      const res = await fetch("http://127.0.0.1:8000/api/joueurs/?nom=" + valeur);
      const data = await res.json();
      setSuggestions(data);
    } else {
      setSuggestions([]);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] font-sans">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <h1 className="text-3xl font-bold tracking-widest text-white">
          STATI<span className="text-[#FBBF24]">X</span>
        </h1>
        <div className="flex gap-6 text-sm text-white/50">
          <span className="cursor-pointer hover:text-white">Joueurs</span>
          <span className="cursor-pointer hover:text-white">Equipes</span>
          <span className="cursor-pointer hover:text-white">Classement</span>
          <span className="cursor-pointer hover:text-white">Matchs</span>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center flex-1 text-center px-8 py-24 gap-6">
        <div className="text-xs tracking-widest text-[#FBBF24] uppercase">
          World Cup 2026
        </div>
        <h2 className="text-5xl font-bold text-white leading-tight">
          Suivez les stats de <br />
          <span className="text-[#FBBF24]">vos joueurs africains</span>
        </h2>
        <p className="text-white/50 max-w-md text-lg">
          Buts, passes decisives, cartons en temps reel durant le mondial 2026.
        </p>
        <div className="w-full max-w-md relative mt-4">
          <input
            type="text"
            value={nomRecherche}
            onChange={(e) => handleNom(e.target.value)}
            placeholder="Rechercher un joueur..."
            className="w-full bg-white/10 text-white rounded-full px-6 py-4 outline-none focus:ring-2 focus:ring-yellow-400 placeholder-white/30"
          />
          {suggestions.length > 0 && (
            <div className="absolute w-full bg-[#1a1a1a] rounded-2xl mt-2 overflow-hidden z-10">
              {suggestions.map(function(joueur, index) {
                return (
                  
                    <a key={index} href={"/joueur/" + joueur.id}
                    className="flex items-center justify-between px-6 py-4 hover:bg-white/10 cursor-pointer border-b border-white/10 last:border-0"
                  >
                    <div className="text-left">
                      <p className="text-white font-bold">{joueur.nom}</p>
                      <p className="text-white/50 text-sm">{joueur.poste} - {joueur.equipe}</p>
                    </div>
                    <span className="text-[#FBBF24] text-sm">{joueur.pays}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>
        <button className="mt-2 bg-[#FBBF24] text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition">
          Decouvrir les joueurs
        </button>
      </main>
    </div>
  );
}
