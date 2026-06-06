import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white font-sans flex items-center justify-center px-8">
      <div className="text-center max-w-lg">

        {/* LOGO */}
        <Link href="/">
          <img
            src="/statix_logo_web.svg"
            alt="STATIX"
            style={{ height: "48px", width: "auto" }}
            className="mx-auto mb-12"
          />
        </Link>

        {/* BALLON */}
        <div className="text-8xl mb-6 animate-bounce">⚽</div>

        {/* TEXTE */}
        <div className="text-[#FBBF24] font-black text-8xl mb-4">404</div>
        <h1 className="text-2xl font-black mb-3">Page introuvable</h1>
        <p className="text-white/40 text-lg mb-10">
          Ce ballon est sorti du terrain. <br />
          La page que tu cherches n'existe pas.
        </p>

        {/* BOUTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#FBBF24] text-black font-black px-8 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/joueurs"
            className="bg-white/5 border border-white/10 text-white/70 font-bold px-8 py-3 rounded-full hover:border-white/30 transition"
          >
            Voir les joueurs
          </Link>
        </div>

        {/* LIENS RAPIDES */}
        <div className="flex items-center justify-center gap-6 mt-12 text-sm text-white/30">
          <Link href="/matchs" className="hover:text-[#FBBF24] transition">Matchs</Link>
          <Link href="/equipes" className="hover:text-[#FBBF24] transition">Équipes</Link>
          <Link href="/classement" className="hover:text-[#FBBF24] transition">Classement</Link>
        </div>

      </div>
    </div>
  );
}