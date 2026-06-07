import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-6">

        {/* LOGO */}
        <div className="flex flex-col items-center gap-3">
          <Link href="/">
            <img
              src="/statix_logo_web.svg"
              alt="STATIX"
              style={{ height: "40px", width: "auto" }}
            />
          </Link>
          <p className="text-white/40 text-sm">
            Connecte-toi pour suivre tes joueurs favoris
          </p>
        </div>

        {/* BADGE */}
        <div className="flex items-center justify-center">
          <span className="text-xs tracking-widest text-[#FBBF24] uppercase border border-[#FBBF24]/30 px-4 py-1 rounded-full">
            🏆 World Cup 2026
          </span>
        </div>

        {/* FORMULAIRE */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-white/50 text-xs uppercase tracking-widest">Email</label>
            <input type="email" placeholder="tonemail@gmail.com"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:border-[#FBBF24]/50 transition text-sm" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white/50 text-xs uppercase tracking-widest">Mot de passe</label>
            <input type="password" placeholder="••••••••"
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:border-[#FBBF24]/50 transition text-sm" />
          </div>
          <div className="text-right">
            <Link href="/mot-de-passe-oublie" className="text-xs text-[#FBBF24]/70 hover:text-[#FBBF24] transition">
              Mot de passe oublié ?
            </Link>
          </div>
          <button className="w-full bg-[#FBBF24] text-black font-black py-3 rounded-xl hover:bg-yellow-300 transition text-sm tracking-widest uppercase mt-2">
            Se connecter
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-white/20 text-xs">ou</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <p className="text-center text-white/40 text-sm">
          Pas encore de compte ?{" "}
          <Link href="/inscription" className="text-[#FBBF24] hover:underline">S'inscrire</Link>
        </p>

      </div>
    </div>
  );
}