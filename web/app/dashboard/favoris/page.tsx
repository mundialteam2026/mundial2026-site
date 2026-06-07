"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const tousJoueurs = [
  { id: 1, nom: "Sébastien Haller", pays: "Côte d'Ivoire", flag: "🇨🇮", poste: "Attaquant", buts: 4, passes: 2, cartons: 1, photo: "SH" },
  { id: 2, nom: "Sadio Mané", pays: "Sénégal", flag: "🇸🇳", poste: "Attaquant", buts: 3, passes: 1, cartons: 0, photo: "SM" },
  { id: 3, nom: "Mohamed Salah", pays: "Égypte", flag: "🇪🇬", poste: "Attaquant", buts: 5, passes: 3, cartons: 0, photo: "MS" },
  { id: 4, nom: "Victor Osimhen", pays: "Nigeria", flag: "🇳🇬", poste: "Attaquant", buts: 3, passes: 0, cartons: 1, photo: "VO" },
  { id: 5, nom: "Hakim Ziyech", pays: "Maroc", flag: "🇲🇦", poste: "Milieu", buts: 2, passes: 4, cartons: 0, photo: "HZ" },
  { id: 6, nom: "Riyad Mahrez", pays: "Algérie", flag: "🇩🇿", poste: "Milieu", buts: 1, passes: 3, cartons: 0, photo: "RM" },
  { id: 7, nom: "Thomas Partey", pays: "Ghana", flag: "🇬🇭", poste: "Milieu", buts: 0, passes: 2, cartons: 1, photo: "TP" },
  { id: 8, nom: "André Onana", pays: "Cameroun", flag: "🇨🇲", poste: "Gardien", buts: 0, passes: 0, cartons: 0, photo: "AO" },
  { id: 9, nom: "Achraf Hakimi", pays: "Maroc", flag: "🇲🇦", poste: "Défenseur", buts: 1, passes: 2, cartons: 1, photo: "AH" },
  { id: 10, nom: "Kalidou Koulibaly", pays: "Sénégal", flag: "🇸🇳", poste: "Défenseur", buts: 0, passes: 1, cartons: 0, photo: "KK" },
  { id: 11, nom: "Franck Kessié", pays: "Côte d'Ivoire", flag: "🇨🇮", poste: "Milieu", buts: 1, passes: 2, cartons: 1, photo: "FK" },
  { id: 12, nom: "Édouard Mendy", pays: "Sénégal", flag: "🇸🇳", poste: "Gardien", buts: 0, passes: 0, cartons: 0, photo: "EM" },
];

export default function Favoris() {
  const [favoris, setFavoris] = useState([1, 3, 9]);
  const [recherche, setRecherche] = useState("");
  const [notification, setNotification] = useState("");

  const joueursFiltres = tousJoueurs.filter(j =>
    j.nom.toLowerCase().includes(recherche.toLowerCase())
  );

  const isFavori = (id: number) => favoris.includes(id);

  const toggleFavori = (id: number, nom: string) => {
    if (isFavori(id)) {
      setFavoris(favoris.filter(f => f !== id));
      setNotification(`❌ ${nom} retiré des favoris`);
    } else {
      setFavoris([...favoris, id]);
      setNotification(`❤️ ${nom} ajouté aux favoris`);
    }
    setTimeout(() => setNotification(""), 2500);
  };

  const mesFavoris = tousJoueurs.filter(j => isFavori(j.id));

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans">

      <Navbar />

      {/* NOTIFICATION */}
      {notification && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-[#111827] border border-white/20 rounded-full px-6 py-3 text-sm font-medium shadow-xl transition-all">
          {notification}
        </div>
      )}

      <div className="pt-24 px-8 max-w-5xl mx-auto pb-24">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-white/30 mb-8">
          <Link href="/dashboard" className="hover:text-[#FBBF24] transition">Dashboard</Link>
          <span>→</span>
          <span className="text-white">Mes favoris</span>
        </div>

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-black mb-2">
            ❤️ Mes <span className="text-[#FBBF24]">favoris</span>
          </h1>
          <p className="text-white/40">{favoris.length} joueur{favoris.length > 1 ? "s" : ""} suivi{favoris.length > 1 ? "s" : ""}</p>
        </div>

        {/* MES FAVORIS */}
        {mesFavoris.length > 0 && (
          <section className="mb-12">
            <h2 className="text-sm uppercase tracking-widest text-white/40 mb-4">Mes joueurs favoris</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {mesFavoris.map(j => (
                <div key={j.id} className="bg-[#FBBF24]/5 border border-[#FBBF24]/20 rounded-2xl p-5 transition hover:-translate-y-1 duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-black text-white/30 text-sm">
                        {j.photo}
                      </div>
                      <div>
                        <div className="font-black text-sm">{j.nom}</div>
                        <div className="text-white/40 text-xs">{j.flag} {j.poste}</div>
                      </div>
                    </div>
                    <button onClick={() => toggleFavori(j.id, j.nom)} className="text-[#E63946] text-lg hover:scale-125 transition-transform">
                      ❤️
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-black/30 rounded-xl p-2">
                      <div className="text-[#FBBF24] font-black">{j.buts}</div>
                      <div className="text-white/30 text-xs">Buts</div>
                    </div>
                    <div className="bg-black/30 rounded-xl p-2">
                      <div className="text-[#16A34A] font-black">{j.passes}</div>
                      <div className="text-white/30 text-xs">Passes</div>
                    </div>
                    <div className="bg-black/30 rounded-xl p-2">
                      <div className="text-[#E63946] font-black">{j.cartons}</div>
                      <div className="text-white/30 text-xs">Cartons</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* AJOUTER DES FAVORIS */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm uppercase tracking-widest text-white/40">Ajouter des joueurs</h2>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <span className="text-white/30">🔍</span>
              <input
                type="text"
                placeholder="Rechercher..."
                value={recherche}
                onChange={e => setRecherche(e.target.value)}
                className="bg-transparent outline-none text-white placeholder-white/20 text-sm w-32"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {joueursFiltres.map(j => (
              <div key={j.id}
                className={`flex items-center justify-between border rounded-2xl px-6 py-4 transition
                  ${isFavori(j.id) ? "bg-[#FBBF24]/5 border-[#FBBF24]/20" : "bg-white/5 border-white/10 hover:border-white/20"}`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center font-black text-white/30 text-sm">
                    {j.photo}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{j.nom}</div>
                    <div className="text-white/30 text-xs">{j.flag} {j.pays} · {j.poste}</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="hidden sm:flex gap-4 text-xs">
                    <span className="text-[#FBBF24] font-black">{j.buts} ⚽</span>
                    <span className="text-[#16A34A] font-black">{j.passes} 🅰️</span>
                  </div>
                  <button onClick={() => toggleFavori(j.id, j.nom)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition
                      ${isFavori(j.id) ? "bg-[#E63946]/10 text-[#E63946] border border-[#E63946]/20 hover:bg-[#E63946]/20" : "bg-[#FBBF24] text-black hover:bg-yellow-300"}`}
                  >
                    {isFavori(j.id) ? "✕ Retirer" : "+ Ajouter"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RETOUR */}
        <div className="mt-10 text-center">
          <Link href="/dashboard" className="text-white/30 text-sm hover:text-[#FBBF24] transition">
            ← Retour au dashboard
          </Link>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-8 py-8 flex items-center justify-between">
          <Link href="/">
            <img src="/statix_logo_web.svg" alt="STATIX" style={{ height: "32px", width: "auto" }} />
          </Link>
          <span className="text-white/20 text-xs">© 2026 STATIX — Tous droits réservés</span>
        </div>
      </footer>

    </div>
  );
}