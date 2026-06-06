"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const user = {
  prenom: "Jean-Martial",
  nom: "Konan",
  email: "jeanmartial@gmail.com",
  pays: "Côte d'Ivoire",
  flag: "🇨🇮",
  avatar: "JM",
  membre: "Juin 2026",
};

const favoris = [
  { id: 1, nom: "Sébastien Haller", pays: "Côte d'Ivoire", flag: "🇨🇮", poste: "Attaquant", buts: 4, passes: 2, cartons: 1, photo: "SH" },
  { id: 2, nom: "Mohamed Salah", pays: "Égypte", flag: "🇪🇬", poste: "Attaquant", buts: 5, passes: 3, cartons: 0, photo: "MS" },
  { id: 3, nom: "Achraf Hakimi", pays: "Maroc", flag: "🇲🇦", poste: "Défenseur", buts: 1, passes: 2, cartons: 1, photo: "AH" },
];

const alertes = [
  { id: 1, type: "but", message: "⚽ Haller vient de marquer !", temps: "Il y a 5 min", couleur: "text-[#FBBF24]" },
  { id: 2, type: "but", message: "⚽ Salah double la mise !", temps: "Il y a 23 min", couleur: "text-[#FBBF24]" },
  { id: 3, type: "carton", message: "🟨 Hakimi prend un carton jaune", temps: "Il y a 1h", couleur: "text-yellow-400" },
  { id: 4, type: "match", message: "🏁 CIV 2-0 Arabie Saoudite — Terminé", temps: "Il y a 2h", couleur: "text-[#16A34A]" },
];

const matchEquipe = {
  prochain: "vs Brésil — 25 Juin · 15:00",
  stade: "SoFi Stadium",
  forme: ["V", "V", "N"],
  stats: { pts: 7, v: 2, n: 1, d: 0 },
};

export default function Dashboard() {
  const [onglet, setOnglet] = useState("apercu");
  const [menuOuvert, setMenuOuvert] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Ferme le menu si on clique ailleurs
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOuvert(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
          <Link href="/equipes" className="hover:text-[#FBBF24] transition">Équipes</Link>
          <Link href="/classement" className="hover:text-[#FBBF24] transition">Classement</Link>
          <Link href="/matchs" className="hover:text-[#FBBF24] transition">Matchs</Link>
        </div>

        {/* AVATAR + MENU DÉROULANT */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOuvert(!menuOuvert)}
            className="w-9 h-9 rounded-full bg-[#FBBF24] flex items-center justify-center text-black font-black text-sm cursor-pointer hover:bg-yellow-300 transition"
          >
            {user.avatar}
          </button>

          {menuOuvert && (
            <div className="absolute right-0 top-12 w-52 bg-[#111827] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50">
              {/* Info user */}
              <div className="px-4 py-3 border-b border-white/10">
                <div className="font-bold text-sm">{user.prenom} {user.nom}</div>
                <div className="text-white/30 text-xs">{user.email}</div>
              </div>
              {/* Liens */}
              <div className="py-2">
                <Link
                  href="/dashboard"
                  onClick={() => setMenuOuvert(false)}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white transition"
                >
                  <span>🏠</span> Dashboard
                </Link>
                <Link
                  href="/dashboard/profil"
                  onClick={() => setMenuOuvert(false)}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white transition"
                >
                  <span>👤</span> Mon profil
                </Link>
                <Link
                  href="/dashboard/favoris"
                  onClick={() => setMenuOuvert(false)}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-white/70 hover:bg-white/5 hover:text-white transition"
                >
                  <span>❤️</span> Mes favoris
                </Link>
              </div>
              {/* Déconnexion */}
              <div className="border-t border-white/10 py-2">
                <Link
                  href="/login"
                  onClick={() => setMenuOuvert(false)}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-[#E63946] hover:bg-[#E63946]/10 transition"
                >
                  <span>🚪</span> Se déconnecter
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="pt-24 px-8 max-w-6xl mx-auto pb-24">

        {/* HEADER DASHBOARD */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-white/40 text-sm mb-1">Bonjour 👋</p>
            <h1 className="text-4xl font-black">{user.prenom} <span className="text-[#FBBF24]">{user.nom}</span></h1>
            <p className="text-white/40 text-sm mt-1">{user.flag} Supporter {user.pays} · Membre depuis {user.membre}</p>
          </div>
          <div className="flex gap-3">
            <Link href="/dashboard/profil" className="bg-white/5 border border-white/10 text-white/70 text-sm font-bold px-5 py-2 rounded-full hover:border-white/30 transition">
              ✏️ Mon profil
            </Link>
            <Link href="/dashboard/favoris" className="bg-[#FBBF24] text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-yellow-300 transition">
              ❤️ Mes favoris
            </Link>
          </div>
        </div>

        {/* ONGLETS */}
        <div className="flex gap-2 mb-8 border-b border-white/10 pb-4">
          {[
            { id: "apercu", label: "🏠 Aperçu" },
            { id: "favoris", label: "❤️ Favoris" },
            { id: "alertes", label: "🔔 Alertes" },
            { id: "equipe", label: "🌍 Mon équipe" },
          ].map(o => (
            <button
              key={o.id}
              onClick={() => setOnglet(o.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${onglet === o.id
                  ? "bg-[#FBBF24] text-black"
                  : "text-white/40 hover:text-white"}`}
            >
              {o.label}
            </button>
          ))}
        </div>

        {/* APERÇU */}
        {onglet === "apercu" && (
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Joueurs suivis", val: favoris.length, color: "text-[#FBBF24]", icon: "⭐" },
                { label: "Buts de mes favoris", val: favoris.reduce((a, j) => a + j.buts, 0), color: "text-[#FBBF24]", icon: "⚽" },
                { label: "Passes déc.", val: favoris.reduce((a, j) => a + j.passes, 0), color: "text-[#16A34A]", icon: "🅰️" },
                { label: "Alertes aujourd'hui", val: alertes.length, color: "text-white", icon: "🔔" },
              ].map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <div className={`text-3xl font-black ${s.color}`}>{s.val}</div>
                  <div className="text-white/30 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-black">❤️ Mes favoris</h2>
                  <Link href="/dashboard/favoris" className="text-xs text-[#FBBF24] hover:underline">Gérer →</Link>
                </div>
                <div className="flex flex-col gap-3">
                  {favoris.map(j => (
                    <div key={j.id} className="flex items-center justify-between bg-black/30 rounded-xl px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs font-black text-white/40">
                          {j.photo}
                        </div>
                        <div>
                          <div className="text-sm font-bold">{j.nom}</div>
                          <div className="text-xs text-white/30">{j.flag} {j.poste}</div>
                        </div>
                      </div>
                      <div className="flex gap-3 text-xs">
                        <span className="text-[#FBBF24] font-black">{j.buts}⚽</span>
                        <span className="text-[#16A34A] font-black">{j.passes}🅰️</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-black">🔔 Alertes récentes</h2>
                  <button onClick={() => setOnglet("alertes")} className="text-xs text-[#FBBF24] hover:underline">Voir tout →</button>
                </div>
                <div className="flex flex-col gap-3">
                  {alertes.slice(0, 3).map(a => (
                    <div key={a.id} className="flex items-start justify-between bg-black/30 rounded-xl px-4 py-3">
                      <div className={`text-sm ${a.couleur}`}>{a.message}</div>
                      <div className="text-xs text-white/20 ml-2 shrink-0">{a.temps}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FBBF24]/10 to-transparent border border-[#FBBF24]/20 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{user.flag}</div>
                  <div>
                    <div className="text-xs text-[#FBBF24] uppercase tracking-widest mb-1">Mon équipe</div>
                    <div className="font-black text-xl">{user.pays}</div>
                    <div className="text-white/40 text-sm">⚽ {matchEquipe.prochain}</div>
                  </div>
                </div>
                <div className="flex gap-4 text-center">
                  {[
                    { val: matchEquipe.stats.pts, label: "Pts", color: "text-[#FBBF24]" },
                    { val: matchEquipe.stats.v, label: "V", color: "text-[#16A34A]" },
                    { val: matchEquipe.stats.n, label: "N", color: "text-white/40" },
                    { val: matchEquipe.stats.d, label: "D", color: "text-[#E63946]" },
                  ].map((s, i) => (
                    <div key={i} className="bg-black/30 rounded-xl px-4 py-3">
                      <div className={`font-black text-2xl ${s.color}`}>{s.val}</div>
                      <div className="text-white/30 text-xs">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FAVORIS */}
        {onglet === "favoris" && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="font-black text-xl">❤️ Mes joueurs favoris</h2>
              <Link href="/joueurs" className="bg-[#FBBF24] text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-yellow-300 transition">
                + Ajouter un joueur
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {favoris.map(j => (
                <div key={j.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#FBBF24]/50 transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center font-black text-white/30">
                      {j.photo}
                    </div>
                    <div>
                      <div className="font-black">{j.nom}</div>
                      <div className="text-white/40 text-xs">{j.flag} {j.poste}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center mb-4">
                    <div className="bg-black/30 rounded-xl p-2">
                      <div className="text-[#FBBF24] font-black text-xl">{j.buts}</div>
                      <div className="text-white/30 text-xs">Buts</div>
                    </div>
                    <div className="bg-black/30 rounded-xl p-2">
                      <div className="text-[#16A34A] font-black text-xl">{j.passes}</div>
                      <div className="text-white/30 text-xs">Passes</div>
                    </div>
                    <div className="bg-black/30 rounded-xl p-2">
                      <div className="text-[#E63946] font-black text-xl">{j.cartons}</div>
                      <div className="text-white/30 text-xs">Cartons</div>
                    </div>
                  </div>
                  <button className="w-full text-xs text-[#E63946] border border-[#E63946]/20 rounded-xl py-2 hover:bg-[#E63946]/10 transition">
                    ✕ Retirer des favoris
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ALERTES */}
        {onglet === "alertes" && (
          <div className="flex flex-col gap-3">
            <h2 className="font-black text-xl mb-2">🔔 Toutes mes alertes</h2>
            {alertes.map(a => (
              <div key={a.id} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between hover:border-white/20 transition">
                <div className={`font-medium ${a.couleur}`}>{a.message}</div>
                <div className="text-xs text-white/20">{a.temps}</div>
              </div>
            ))}
          </div>
        )}

        {/* MON ÉQUIPE */}
        {onglet === "equipe" && (
          <div className="flex flex-col gap-6">
            <h2 className="font-black text-xl">🌍 Mon équipe — {user.pays}</h2>
            <div className="bg-gradient-to-br from-[#FBBF24]/10 to-transparent border border-[#FBBF24]/20 rounded-2xl p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="text-7xl">{user.flag}</div>
                <div>
                  <div className="font-black text-3xl">{user.pays}</div>
                  <div className="text-white/40 mt-1">📍 {matchEquipe.prochain}</div>
                  <div className="text-white/30 text-sm">{matchEquipe.stade}</div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center mb-8">
                {[
                  { val: matchEquipe.stats.pts, label: "Points", color: "text-[#FBBF24]" },
                  { val: matchEquipe.stats.v, label: "Victoires", color: "text-[#16A34A]" },
                  { val: matchEquipe.stats.n, label: "Nuls", color: "text-white/40" },
                  { val: matchEquipe.stats.d, label: "Défaites", color: "text-[#E63946]" },
                ].map((s, i) => (
                  <div key={i} className="bg-black/30 rounded-2xl p-4">
                    <div className={`font-black text-3xl ${s.color}`}>{s.val}</div>
                    <div className="text-white/30 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-white/30 text-sm">Forme récente</span>
                {matchEquipe.forme.map((r, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${formeColor(r)} flex items-center justify-center text-xs font-black`}>
                    {r}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-8 py-8 flex items-center justify-between">
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