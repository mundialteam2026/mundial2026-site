export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B0B0B] font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <h1 className="text-3xl font-bold tracking-widest text-white">
          STATI<span className="text-[#FBBF24]">X</span>
        </h1>
        <div className="flex gap-6 text-sm text-white/50">
          <span className="cursor-pointer hover:text-white">Joueurs</span>
          <span className="cursor-pointer hover:text-white">Équipes</span>
          <span className="cursor-pointer hover:text-white">Classement</span>
          <span className="cursor-pointer hover:text-white">Matchs</span>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-8 py-24 gap-6">
        <div className="text-xs tracking-widest text-[#FBBF24] uppercase">
          World Cup 2026 — Africa Edition
        </div>
        <h2 className="text-5xl font-bold text-white leading-tight">
          Suis les stats de <br />
          <span className="text-[#FBBF24]">tes joueurs africains</span>
        </h2>
        <p className="text-white/50 max-w-md text-lg">
          Buts, passes décisives, cartons — toutes les statistiques en temps réel pour la Coupe du Monde 2026.
        </p>
        <button className="mt-4 bg-[#FBBF24] text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition">
          Découvrir les joueurs
        </button>
      </main>
    </div>
  );
}