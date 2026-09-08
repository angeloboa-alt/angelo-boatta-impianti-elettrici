import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-white">
      <section className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl sm:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
          Errore 404
        </p>

        <h1 className="mt-4 text-5xl font-black sm:text-6xl">
          Pagina non trovata
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
          La pagina che stai cercando non esiste, è stata spostata oppure
          l’indirizzo inserito non è corretto.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-yellow-400 px-6 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
          >
            Torna alla Home
          </Link>

          <Link
            href="/#contatti"
            className="rounded-xl border border-white/20 px-6 py-4 font-bold transition hover:border-yellow-400 hover:text-yellow-400"
          >
            Vai ai contatti
          </Link>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <p className="font-semibold">A.B Impianti di Boatta Angelo</p>
          <p className="mt-1 text-sm text-slate-400">
            Impianti elettrici civili e industriali
          </p>
        </div>
      </section>
    </main>
  );
}