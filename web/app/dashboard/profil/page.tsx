"use client";
import { useState } from "react";
import Link from "next/link";

export default function Profil() {
  const [form, setForm] = useState({
    prenom: "Jean-Martial",
    nom: "Konan",
    email: "jeanmartial@gmail.com",
    pays: "Côte d'Ivoire",
    pseudo: "jeanmartial26",
  });

  const [sauvegarde, setSauvegarde] = useState(false);

  const pays = [
    "Côte d'Ivoire", "Sénégal", "Maroc", "Nigeria",
    "Égypte", "Ghana", "Cameroun", "Algérie"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSauvegarde(false);
  };

  const handleSave = () => {
    setSauvegarde(true);
    setTimeout(() => setSauvegarde(false), 3000);
  };

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
          <Link href="/matchs" className="hover:text-[#FBBF24] transition">Matchs</Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#FBBF24] flex items-center justify-center text-black font-black text-sm">
            JM
          </div>
        </div>
      </nav>

      <div className="pt-24 px-8 max-w-2xl mx-auto pb-24">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-white/30 mb-8">
          <Link href="/dashboard" className="hover:text-[#FBBF24] transition">Dashboard</Link>
          <span>→</span>
          <span className="text-white">Mon profil</span>
        </div>

        {/* HEADER */}
        <div className="flex items-center gap-6 mb-10">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-[#FBBF24] flex items-center justify-center text-black font-black text-2xl">
              JM
            </div>
            <button className="absolute -bottom-2 -right-2 w-7 h-7 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-xs hover:bg-white/20 transition">
              ✏️
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-black">{form.prenom} {form.nom}</h1>
            <p className="text-white/40 text-sm">@{form.pseudo}</p>
            <p className="text-white/30 text-xs mt-1">Membre depuis Juin 2026</p>
          </div>
        </div>

        {/* FORMULAIRE */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-6">

          <h2 className="font-black text-lg border-b border-white/10 pb-4">
            ✏️ Modifier mes informations
          </h2>

          {/* Prénom + Nom */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs uppercase tracking-widest">Prénom</label>
              <input
                type="text"
                name="prenom"
                value={form.prenom}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#FBBF24]/50 transition text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs uppercase tracking-widest">Nom</label>
              <input
                type="text"
                name="nom"
                value={form.nom}
                onChange={handleChange}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#FBBF24]/50 transition text-sm"
              />
            </div>
          </div>

          {/* Pseudo */}
          <div className="flex flex-col gap-2">
            <label className="text-white/40 text-xs uppercase tracking-widest">Pseudo</label>
            <input
              type="text"
              name="pseudo"
              value={form.pseudo}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#FBBF24]/50 transition text-sm"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-white/40 text-xs uppercase tracking-widest">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#FBBF24]/50 transition text-sm"
            />
          </div>

          {/* Pays favori */}
          <div className="flex flex-col gap-2">
            <label className="text-white/40 text-xs uppercase tracking-widest">Mon pays africain favori</label>
            <select
              name="pays"
              value={form.pays}
              onChange={handleChange}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#FBBF24]/50 transition text-sm"
            >
              {pays.map(p => (
                <option key={p} value={p} className="bg-[#0B0B0B]">{p}</option>
              ))}
            </select>
          </div>

          {/* Bouton sauvegarder */}
          <button
            onClick={handleSave}
            className={`w-full py-3 rounded-xl font-black text-sm tracking-widest uppercase transition
              ${sauvegarde
                ? "bg-[#16A34A] text-white"
                : "bg-[#FBBF24] text-black hover:bg-yellow-300"}`}
          >
            {sauvegarde ? "✅ Sauvegardé !" : "Sauvegarder les modifications"}
          </button>

        </div>

        {/* CHANGER MOT DE PASSE */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-6 mt-6">
          <h2 className="font-black text-lg border-b border-white/10 pb-4">
            🔒 Changer mon mot de passe
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs uppercase tracking-widest">Mot de passe actuel</label>
              <input type="password" placeholder="••••••••"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#FBBF24]/50 transition text-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs uppercase tracking-widest">Nouveau mot de passe</label>
              <input type="password" placeholder="••••••••"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#FBBF24]/50 transition text-sm" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white/40 text-xs uppercase tracking-widest">Confirmer nouveau mot de passe</label>
              <input type="password" placeholder="••••••••"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#FBBF24]/50 transition text-sm" />
            </div>
            <button className="w-full bg-white/5 border border-white/10 text-white/70 py-3 rounded-xl font-black text-sm tracking-widest uppercase hover:border-white/30 transition">
              Changer le mot de passe
            </button>
          </div>
        </div>

        {/* ZONE DANGER */}
        <div className="bg-[#E63946]/5 border border-[#E63946]/20 rounded-2xl p-8 mt-6">
          <h2 className="font-black text-lg text-[#E63946] border-b border-[#E63946]/20 pb-4 mb-6">
            ⚠️ Zone de danger
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-sm">Supprimer mon compte</div>
              <div className="text-white/30 text-xs mt-1">Cette action est irréversible</div>
            </div>
            <button className="bg-[#E63946]/10 border border-[#E63946]/30 text-[#E63946] text-sm font-bold px-5 py-2 rounded-full hover:bg-[#E63946]/20 transition">
              Supprimer
            </button>
          </div>
        </div>

        {/* RETOUR */}
        <div className="mt-8 text-center">
          <Link href="/dashboard" className="text-white/30 text-sm hover:text-[#FBBF24] transition">
            ← Retour au dashboard
          </Link>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-2xl mx-auto px-8 py-8 flex items-center justify-between">
          <Link href="/">
            <img src="/statix_logo_web.svg" alt="STATIX" style={{ height: "32px", width: "auto" }} />
          </Link>
          <span className="text-white/20 text-xs">© 2026 STATIX — Tous droits réservés</span>
        </div>
      </footer>

    </div>
  );
}