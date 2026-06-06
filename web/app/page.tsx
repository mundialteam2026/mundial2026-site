import Link from "next/link";

export default function Home() {
  const joueurs = [
    { nom: "S. Haller", pays: "🇨🇮", buts: 4, passes: 2, flag: "CIV" },
    { nom: "S. Mané", pays: "🇸🇳", buts: 3, passes: 1, flag: "SEN" },
    { nom: "M. Salah", pays: "🇪🇬", buts: 5, passes: 3, flag: "EGY" },
    { nom: "V. Osimhen", pays: "🇳🇬", buts: 3, passes: 0, flag: "NGA" },
    { nom: "H. Ziyech", pays: "🇲🇦", buts: 2, passes: 4, flag: "MAR" },
    { nom: "T. Traoré", pays: "🇧🇫", buts: 1, passes: 3, flag: "BFA" },
  ];

  const scores = [
    { dom: "🇨🇮 Côte d'Ivoire", sc: "2 - 1", ext: "Maroc 🇲🇦", statut: "FT" },
    { dom: "🇸🇳 Sénégal", sc: "1 - 1", ext: "Nigeria 🇳🇬", statut: "LIVE" },
    { dom: "🇪🇬 Égypte", sc: "3 - 0", ext: "Ghana 🇬🇭", statut: "FT" },
  ];

  const classement = [
    { pos: 1, pays: "🇸🇳 Sénégal", pts: 9, j: 3 },
    { pos: 2, pays: "🇨🇮 Côte d'Ivoire", pts: 6, j: 3 },
    { pos: 3, pays: "🇲🇦 Maroc", pts: 6, j: 3 },
    { pos: 4, pays: "🇪🇬 Égypte", pts: 4, j: 3 },
    { pos: 5, pays: "🇳🇬 Nigeria", pts: 3, j: 3 },
  ];

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
        <div className="flex gap-3">
          <Link href="/inscription" className="text-white/50 text-sm font-bold px-5 py-2 rounded-full border border-white/10 hover:border-white/30 transition">
            S'inscrire
          </Link>
          <Link href="/login" className="bg-[#FBBF24] text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-yellow-300 transition">
            Connexion
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-8 text-center flex flex-col items-center gap-6">
        <span className="text-xs tracking-widest text-[#FBBF24] uppercase border border-[#FBBF24]/30 px-4 py-1 rounded-full">
          🏆 World Cup 2026
        </span>
        <h2 className="text-6xl font-black leading-tight max-w-3xl">
          Les stats de tes <br />
          <span className="text-[#FBBF24]">talents africains</span>
        </h2>
        <p className="text-white/50 max-w-lg text-lg leading-relaxed">
          Buts, passes décisives, cartons — toutes les statistiques en temps réel pour la Coupe du Monde 2026.
        </p>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 w-full max-w-md mt-2">
          <span className="text-white/30">🔍</span>
          <input
            type="text"
            placeholder="Rechercher un joueur..."
            className="bg-transparent outline-none text-white placeholder-white/30 w-full text-sm"
          />
          <button className="bg-[#FBBF24] text-black text-xs font-bold px-4 py-1.5 rounded-full hover:bg-yellow-300 transition">
            Chercher
          </button>
        </div>
      </section>

      {/* SCORES LIVE */}
      <section className="px-8 pb-16 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold">Scores récents</h3>
          <Link href="/matchs" className="text-xs text-white/40 hover:text-[#FBBF24] transition">Voir tous les matchs →</Link>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {scores.map((s, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-3">
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${s.statut === "LIVE" ? "bg-[#16A34A] text-white animate-pulse" : "bg-white/10 text-white/50"}`}>
                {s.statut}
              </span>
              <div className="flex items-center justify-between w-full text-sm">
                <span className="text-white/80">{s.dom}</span>
                <span className="text-[#FBBF24] font-black text-lg">{s.sc}</span>
                <span className="text-white/80">{s.ext}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* JOUEURS EN VEDETTE */}
      <section className="px-8 pb-16 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold">⭐ Joueurs en vedette</h3>
          <Link href="/joueurs" className="text-xs text-white/40 hover:text-[#FBBF24] transition">Voir tous les joueurs →</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {joueurs.map((j, i) => (
            <Link href="/joueurs" key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#FBBF24]/50 transition cursor-pointer hover:-translate-y-1 block" style={{transition:"all 0.3s ease"}}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">
                  {j.pays}
                </div>
                <div>
                  <div className="font-bold text-sm">{j.nom}</div>
                  <div className="text-xs text-white/40">{j.flag}</div>
                </div>
              </div>
              <div className="flex justify-between text-center">
                <div>
                  <div className="text-[#FBBF24] font-black text-xl">{j.buts}</div>
                  <div className="text-xs text-white/40">Buts</div>
                </div>
                <div>
                  <div className="text-[#16A34A] font-black text-xl">{j.passes}</div>
                  <div className="text-xs text-white/40">Passes</div>
                </div>
                <div>
                  <div className="text-[#E63946] font-black text-xl">0</div>
                  <div className="text-xs text-white/40">Cartons</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CLASSEMENT */}
      <section className="px-8 pb-24 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold">🏅 Classement Afrique</h3>
          <Link href="/classement" className="text-xs text-white/40 hover:text-[#FBBF24] transition">Voir le classement complet →</Link>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 text-white/40 text-xs uppercase">
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Pays</th>
                <th className="px-6 py-3 text-center">Matchs</th>
                <th className="px-6 py-3 text-center">Points</th>
              </tr>
            </thead>
            <tbody>
              {classement.map((c, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition">
                  <td className="px-6 py-4 text-white/40">{c.pos}</td>
                  <td className="px-6 py-4 font-medium">{c.pays}</td>
                  <td className="px-6 py-4 text-center text-white/50">{c.j}</td>
                  <td className="px-6 py-4 text-center font-black text-[#FBBF24]">{c.pts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 mt-8">
        <div className="max-w-5xl mx-auto px-8 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <img src="/statix_logo_web.svg" alt="STATIX" style={{ height: "36px", width: "auto" }} />
            </Link>
            <p className="text-white/30 text-xs leading-relaxed">
              La plateforme de référence pour suivre les statistiques des joueurs africains à la Coupe du Monde 2026.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white/60 text-xs uppercase tracking-widest mb-2">Liens rapides</h4>
            <Link href="/joueurs" className="text-white/30 text-sm hover:text-[#FBBF24] transition">Joueurs</Link>
            <Link href="/equipes" className="text-white/30 text-sm hover:text-[#FBBF24] transition">Équipes</Link>
            <Link href="/classement" className="text-white/30 text-sm hover:text-[#FBBF24] transition">Classement</Link>
            <Link href="/matchs" className="text-white/30 text-sm hover:text-[#FBBF24] transition">Matchs</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-white/60 text-xs uppercase tracking-widest mb-2">Mon compte</h4>
            <Link href="/login" className="text-white/30 text-sm hover:text-[#FBBF24] transition">Connexion</Link>
            <Link href="/inscription" className="text-white/30 text-sm hover:text-[#FBBF24] transition">Inscription</Link>
          </div>
        </div>
        <div className="border-t border-white/5 px-8 py-4 flex items-center justify-between text-white/20 text-xs max-w-5xl mx-auto">
          <span>© 2026 STATIX — Tous droits réservés</span>
          <span>Données fournies par API-Football</span>
        </div>
      </footer>

    </div>
  );
}