"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const pathname = usePathname();

  const liens = [
    { href: "/joueurs", label: "Joueurs" },
    { href: "/equipes", label: "Équipes" },
    { href: "/classement", label: "Classement" },
    { href: "/matchs", label: "Matchs" },
  ];

  const isActif = (href: string) => pathname === href;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/90 backdrop-blur border-b border-white/10">
        <div className="flex items-center justify-between px-8 py-4 max-w-6xl mx-auto">

          {/* LOGO */}
          <Link href="/" onClick={() => setMenuOuvert(false)}>
            <img src="/statix_logo_web.svg" alt="STATIX" style={{ height: "40px", width: "auto" }} />
          </Link>

          {/* LIENS DESKTOP */}
          <div className="hidden md:flex gap-8 text-sm text-white/50">
            {liens.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`transition hover:text-[#FBBF24] ${isActif(l.href) ? "text-[#FBBF24]" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* BOUTONS DESKTOP */}
          <div className="hidden md:flex gap-3">
            <Link href="/inscription" className="text-white/50 text-sm font-bold px-5 py-2 rounded-full border border-white/10 hover:border-white/30 transition">
              S'inscrire
            </Link>
            <Link href="/login" className="bg-[#FBBF24] text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-yellow-300 transition">
              Connexion
            </Link>
          </div>

          {/* BOUTON HAMBURGER MOBILE */}
          <button
            onClick={() => setMenuOuvert(!menuOuvert)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOuvert ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOuvert ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOuvert ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>

        </div>

        {/* MENU MOBILE */}
        {menuOuvert && (
          <div className="md:hidden bg-[#0B0B0B] border-t border-white/10 px-8 py-6 flex flex-col gap-4">
            {liens.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOuvert(false)}
                className={`text-lg font-bold transition
                  ${isActif(l.href) ? "text-[#FBBF24]" : "text-white/70 hover:text-[#FBBF24]"}`}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
              <Link
                href="/inscription"
                onClick={() => setMenuOuvert(false)}
                className="text-center text-white/70 text-sm font-bold px-5 py-3 rounded-full border border-white/10 hover:border-white/30 transition"
              >
                S'inscrire
              </Link>
              <Link
                href="/login"
                onClick={() => setMenuOuvert(false)}
                className="text-center bg-[#FBBF24] text-black text-sm font-bold px-5 py-3 rounded-full hover:bg-yellow-300 transition"
              >
                Connexion
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}