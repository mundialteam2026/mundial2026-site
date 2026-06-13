"use client";
import { useState } from "react";

export default function Home() {
  const [nomRecherche, setNomRecherche] = useState<string>("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  async function handleNom(valeur: string) {
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
        <div className="w-full max-w-md
