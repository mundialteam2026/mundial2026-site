"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function JoueurPage() {
  const params = useParams();
  const [joueur, setJoueur] = useState<any>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/joueurs/" + params.id + "/")
      .then((res) => res.json())
      .then((data) => setJoueur(data));
  }, [params.id]);

  if (!joueur) return <p className="text-white p-8">Chargement...</p>;

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <h1 className="text-3xl font-bold tracking-widest text-white">
          STATI<span className="text-[#FBBF24]">X</span>
        </h1>
        <a href="/" className="text-white/50 hover:text-white">Accueil</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white/5 rounded-2xl p-8">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-[#FBBF24] rounded-full flex items-center justify-center text-4xl">
              ⚽
            </div>
            <div>
              <h2 className="text-3xl font-bold">{joueur.nom}</h2>
              <p className="text-[#FBBF24] text-lg">{joueur.pays} - {joueur.poste}</p>
              <p className="text-white/50">{joueur.equipe}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-[#FBBF24]">{joueur.buts}</p>
              <p className="text-white/50 mt-1">Buts</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-[#FBBF24]">{joueur.passes}</p>
              <p className="text-white/50 mt-1">Passes</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-[#FBBF24]">{joueur.cartons_jaunes}</p>
              <p className="text-white/50 mt-1">Cartons jaunes</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-[#FBBF24]">{joueur.minutes_jouees}</p>
              <p className="text-white/50 mt-1">Minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
