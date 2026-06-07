"use client";
import { useState } from "react";
import Link from "next/link";

export default function MotDePasseOublie() {
  const [email, setEmail] = useState("");
  const [envoye, setEnvoye] = useState(false);

  const handleSubmit = () => {
    if (email) setEnvoye(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-6">

        {/* LOGO */}
        <div className="flex flex-col items-center gap-3">
          <Link href="/">
            <img src="/statix_logo_web.svg" alt="STATIX" style={{ height: "40px", width: "auto" }} />
          </Link>
        </div>

        {/* BADGE */}
        <div className="flex items-center justify-center">
          <span className="text-xs tracking-widest text-[#FBBF24] uppercase border border-[#FBBF24]/30 px-4 py-1 rounded-full">
            🏆 World Cup 2026
          </span>
        </div>

        {!envoye ? (
          <>
            {/* TITRE */}
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h1 className="text-2xl font-black mb-2">Mot de passe oublié ?</h1>
              <p className="text-white/40 text-sm leading-relaxed">
                Entre ton email et on t'envoie un lien pour réinitialiser ton mot de passe.
              </p>
            </div>

            {/* FORMULAIRE */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-white/50 text-xs uppercase tracking-widest">
                  Ton email
                </label>
                <input
                  type="email"
                  placeholder="tonemail@gmail.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none focus:border-[#FBBF24]/50 transition text-sm"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-[#FBBF24] text-black font-black py-3 rounded-xl hover:bg-yellow-300 transition text-sm tracking-widest uppercase"
              >
                Envoyer le lien
              </button>
            </div>
          </>
        ) : (
          /* CONFIRMATION */
          <div className="text-center flex flex-col gap-4">
            <div className="text-6xl">📬</div>
            <h1 className="text-2xl font-black">Email envoyé !</h1>
            <p className="text-white/40 text-sm leading-relaxed">
              Un lien de réinitialisation a été envoyé à <span className="text-[#FBBF24]">{email}</span>.
              <br />Vérifie ta boîte mail.
            </p>
            <div className="bg-[#16A34A]/10 border border-[#16A34A]/20 rounded-xl px-4 py-3 text-sm text-[#16A34A]">
              ✅ Lien envoyé avec succès
            </div>
          </div>
        )}

        {/* SÉPARATEUR */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-white/20 text-xs">ou</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* RETOUR */}
        <p className="text-center text-white/40 text-sm">
          Tu te souviens ?{" "}
          <Link href="/login" className="text-[#FBBF24] hover:underline">
            Se connecter
          </Link>
        </p>

      </div>
    </div>
  );
}