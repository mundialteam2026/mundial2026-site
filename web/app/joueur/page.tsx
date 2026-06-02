"use client";

export default function JoueurPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-red-700 py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">🏆 Statistik Mundial 2026</h1>
        <nav className="flex gap-6">
          <a href="/" className="hover:text-yellow-400">Accueil</a>
          <a href="#" className="hover:text-yellow-400">Classement</a>
        </nav>
      </header>

      {/* Profil joueur */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-gray-800 rounded-2xl p-8">
          
          {/* Infos principales */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 bg-red-700 rounded-full flex items-center justify-center text-4xl">
              ⚽
            </div>
            <div>
              <h2 className="text-3xl font-bold">Kylian Mbappé</h2>
              <p className="text-yellow-400 text-lg">🇫🇷 France · Attaquant</p>
              <p className="text-gray-400">Real Madrid</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="bg-gray-700 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-yellow-400">8</p>
              <p className="text-gray-400 mt-1">Buts</p>
            </div>
            <div className="bg-gray-700 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-yellow-400">5</p>
              <p className="text-gray-400 mt-1">Passes</p>
            </div>
            <div className="bg-gray-700 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-yellow-400">2</p>
              <p className="text-gray-400 mt-1">Cartons jaunes</p>
            </div>
            <div className="bg-gray-700 rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-yellow-400">540</p>
              <p className="text-gray-400 mt-1">Minutes</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}