import Image from "next/image";

const services = [
  {
    title: "Impianti elettrici civili",
    description:
      "Realizzazione, modifica, ampliamento e manutenzione di impianti elettrici per abitazioni, appartamenti, condomìni, negozi e uffici.",
  },
  {
    title: "Impianti elettrici industriali",
    description:
      "Impianti e manutenzioni per attività artigianali, laboratori, magazzini, capannoni e realtà produttive.",
  },
  {
    title: "Pronto intervento e ricerca guasti",
    description:
      "Assistenza per interruzioni di corrente, differenziali che scattano, cortocircuiti, prese, punti luce e linee non funzionanti.",
  },
  {
    title: "Impianti domotici KNX",
    description:
      "Progettazione, realizzazione, ampliamento, diagnostica e manutenzione di sistemi KNX per illuminazione, tapparelle, scenari e climatizzazione.",
  },
  {
    title: "Videosorveglianza",
    description:
      "Installazione di telecamere interne ed esterne, sistemi di registrazione e gestione remota tramite applicazione.",
  },
  {
    title: "Manutenzione elettrica condomìni",
    description:
      "Manutenzione di illuminazione comune, quadri elettrici, garage, cantine, temporizzatori, citofoni e sistemi di emergenza.",
  },
];

const reasons = [
  {
    number: "01",
    title: "Rapporto diretto",
    description:
      "Seguo personalmente il cliente dalla prima telefonata fino al completamento dell’intervento.",
  },
  {
    number: "02",
    title: "Tariffe chiare",
    description:
      "Le condizioni economiche vengono spiegate telefonicamente prima della conferma dell’uscita.",
  },
  {
    number: "03",
    title: "Ricerca del guasto",
    description:
      "L’intervento parte dalla verifica dell’impianto e dall’individuazione della causa del problema.",
  },
  {
    number: "04",
    title: "Sicurezza prima di tutto",
    description:
      "Quando la riparazione non può essere completata subito, la parte interessata viene messa in sicurezza quando possibile.",
  },
];

const tariffs = [
  {
    title: "Orario ordinario",
    hours: "Lunedì–venerdì, 08:00–17:30",
    firstHour: "100 €",
    nextTime: "30 €",
  },
  {
    title: "Fuori orario e sabato",
    hours: "Lunedì–venerdì, 17:30–22:00 · Sabato, 08:00–22:00",
    firstHour: "115 €",
    nextTime: "35 €",
  },
  {
    title: "Notturno, domeniche e festivi",
    hours: "Tutti i giorni, 22:00–08:00 · Domeniche e festivi",
    firstHour: "140 €",
    nextTime: "40 €",
  },
];

const faqs = [
  {
    question: "Quando inizia il conteggio del tempo?",
    answer:
      "Il conteggio inizia dal momento dell’arrivo presso il cliente e dall’avvio delle verifiche sull’impianto. Lo spostamento nella normale zona coperta dal servizio è già compreso nella tariffa iniziale.",
  },
  {
    question: "Cosa succede se il guasto non viene risolto subito?",
    answer:
      "La tariffa iniziale resta dovuta perché comprende uscita, verifica, diagnosi e tempo lavorato. Se servono altri controlli, ricambi o un secondo intervento, il cliente viene informato prima di procedere.",
  },
  {
    question: "Cosa succede se il ricambio non è disponibile?",
    answer:
      "Il primo intervento viene conteggiato normalmente. Quando il ricambio sarà disponibile, al rientro per completare lo stesso lavoro non viene applicato un nuovo diritto di chiamata: vengono conteggiati il tempo effettivo di lavoro e i materiali utilizzati.",
  },
  {
    question: "I materiali sono compresi nelle tariffe?",
    answer:
      "No. Ricambi, componenti elettrici e altri materiali vengono conteggiati separatamente.",
  },
  {
    question: "Parcheggi e zone blu sono compresi?",
    answer:
      "No. Eventuali parcheggi a pagamento, zone blu, pedaggi o accessi a pagamento sono a carico del cliente e vengono aggiunti in base al costo effettivamente sostenuto.",
  },
  {
    question: "Il servizio notturno è sempre disponibile?",
    answer:
      "Il servizio notturno, domenicale e festivo viene effettuato su disponibilità e deve essere confermato telefonicamente.",
  },
  {
    question: "Le tariffe valgono anche per i condomìni?",
    answer:
      "Sì, per guasti e interventi occasionali. Per la manutenzione elettrica ordinaria e programmata dei condomìni vengono invece concordate condizioni dedicate con l’amministratore.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 pb-20 text-white md:pb-0">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-5 lg:px-8">
          <a
            href="#home"
            className="flex min-w-0 items-center"
            aria-label="Angelo Boatta Impianti Elettrici"
          >
            <div className="relative h-16 w-48 overflow-hidden sm:h-[72px] sm:w-[280px]">
              <Image
                src="/logo-angelo-boatta.png"
                alt="Angelo Boatta Impianti Elettrici"
                fill
                priority
                sizes="(max-width: 640px) 192px, 280px"
                className="scale-[1.58] object-contain sm:scale-[1.72]"
              />
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-yellow-400" href="#servizi">
              Servizi
            </a>

            <a className="transition hover:text-yellow-400" href="#vantaggi">
              Perché scegliermi
            </a>

            <a className="transition hover:text-yellow-400" href="#tariffe">
              Tariffe
            </a>

            <a className="transition hover:text-yellow-400" href="#faq">
              FAQ
            </a>

            <a className="transition hover:text-yellow-400" href="#chi-sono">
              Chi sono
            </a>

            <a
              className="rounded-lg bg-yellow-400 px-4 py-2 font-bold text-slate-950 transition hover:bg-yellow-300"
              href="#contatti"
            >
              Contatti
            </a>
          </nav>

          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-lg bg-yellow-400 px-4 py-2 text-sm font-bold text-slate-950">
              Menu
            </summary>

            <nav className="absolute right-0 mt-3 flex w-56 flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
              <a
                className="border-b border-white/10 px-5 py-4 text-sm hover:bg-white/5"
                href="#servizi"
              >
                Servizi
              </a>

              <a
                className="border-b border-white/10 px-5 py-4 text-sm hover:bg-white/5"
                href="#vantaggi"
              >
                Perché scegliermi
              </a>

              <a
                className="border-b border-white/10 px-5 py-4 text-sm hover:bg-white/5"
                href="#tariffe"
              >
                Tariffe
              </a>

              <a
                className="border-b border-white/10 px-5 py-4 text-sm hover:bg-white/5"
                href="#faq"
              >
                Domande frequenti
              </a>

              <a
                className="border-b border-white/10 px-5 py-4 text-sm hover:bg-white/5"
                href="#chi-sono"
              >
                Chi sono
              </a>

              <a
                className="border-b border-white/10 px-5 py-4 text-sm hover:bg-white/5"
                href="#zone"
              >
                Zone servite
              </a>

              <a
                className="bg-yellow-400 px-5 py-4 text-sm font-bold text-slate-950"
                href="#contatti"
              >
                Contatti
              </a>
            </nav>
          </details>
        </div>
      </header>

      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.16),transparent_38%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-5 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div className="min-w-0">
            <p className="mb-5 inline-flex max-w-full rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold leading-6 text-yellow-300">
              Pronto intervento elettrico su disponibilità
            </p>

            <h1 className="max-w-4xl text-[2.55rem] font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Impianti elettrici
              <span className="mt-1 block text-yellow-400">
                civili e industriali
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Realizzazione, modifica, ampliamento e manutenzione di impianti
              elettrici. Ricerca guasti e assistenza per abitazioni, condomìni,
              negozi, uffici, attività artigianali e realtà industriali.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contatti"
                className="rounded-xl bg-yellow-400 px-6 py-4 text-center font-bold text-slate-950 transition hover:bg-yellow-300"
              >
                Richiedi un intervento
              </a>

              <a
                href="#tariffe"
                className="rounded-xl border border-white/20 px-6 py-4 text-center font-bold transition hover:border-yellow-400 hover:text-yellow-400"
              >
                Consulta le tariffe
              </a>
            </div>

            <div className="mt-10 grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">
              <p>✓ Tariffe comunicate prima dell’uscita</p>
              <p>✓ Interventi per privati e attività</p>
              <p>✓ Ricerca guasti e messa in sicurezza</p>
              <p>✓ KNX Partner n. 103460</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-3xl border border-yellow-400/20 bg-white/5 p-6 shadow-2xl shadow-yellow-400/5 sm:p-7">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
                Assistenza elettrica
              </p>

              <h2 className="mt-4 text-3xl font-black">Guasto elettrico?</h2>

              <p className="mt-4 leading-7 text-slate-300">
                Assistenza per problemi a quadri elettrici, differenziali,
                linee, prese, illuminazione e anomalie dell’impianto.
              </p>

              <div className="mt-7 space-y-4">
                <div className="rounded-2xl bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">Orario ordinario</p>

                  <p className="mt-1 text-2xl font-black text-yellow-400">
                    100 €
                  </p>

                  <p className="text-sm text-slate-300">
                    Uscita e prima ora
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 p-5">
                  <p className="font-semibold">
                    Il conteggio parte dall’arrivo presso il cliente e
                    dall’inizio delle verifiche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="servizi"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
            Servizi
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Soluzioni elettriche complete
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Interventi su nuovi impianti e impianti esistenti, dalla ricerca
            del guasto fino alla realizzazione e manutenzione.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40"
            >
              <div className="mb-5 h-1 w-14 rounded-full bg-yellow-400" />

              <h3 className="text-xl font-bold">{service.title}</h3>

              <p className="mt-3 leading-7 text-slate-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="vantaggi"
        className="border-y border-white/10 bg-slate-900"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
                Perché scegliermi
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Un servizio diretto, chiaro e concreto
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Ogni intervento viene seguito personalmente, spiegando al
                cliente il problema individuato, le possibili soluzioni e i
                costi previsti.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((reason) => (
                <article
                  key={reason.number}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 p-6"
                >
                  <p className="text-sm font-black tracking-[0.2em] text-yellow-400">
                    {reason.number}
                  </p>

                  <h3 className="mt-4 text-xl font-bold">{reason.title}</h3>

                  <p className="mt-3 leading-7 text-slate-300">
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div className="rounded-3xl bg-white p-6 text-slate-950 sm:p-7">
            <div className="relative h-32 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/logo-knx-partner.jpg"
                alt="Logo ufficiale KNX Partner"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-contain p-2"
              />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              KNX Partner
            </p>

            <p className="mt-2 text-3xl font-black">Partner n. 103460</p>

            <p className="mt-2 font-semibold">Angelo Boatta</p>
          </div>

          <div>
            <h2 className="text-3xl font-black sm:text-4xl">
              Impianti domotici KNX
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Progettazione, realizzazione, ampliamento, diagnostica e
              manutenzione di impianti KNX per la gestione integrata di
              illuminazione, tapparelle, scenari, climatizzazione e altre
              funzioni dell’edificio.
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              La programmazione software e le configurazioni più articolate
              vengono gestite, quando necessario, in collaborazione con un
              partner tecnico specializzato dotato di licenza ETS.
            </p>
          </div>
        </div>
      </section>

      <section
        id="tariffe"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8"
      >
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
            Tariffe
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Costi chiari prima dell’intervento
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Le tariffe vengono spiegate telefonicamente prima della conferma
            dell’uscita.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tariffs.map((tariff, index) => (
            <article
              key={tariff.title}
              className={`rounded-3xl border p-7 ${
                index === 0
                  ? "border-yellow-400 bg-yellow-400 text-slate-950"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <p
                className={`text-sm font-bold uppercase tracking-[0.16em] ${
                  index === 0 ? "text-slate-700" : "text-yellow-400"
                }`}
              >
                {tariff.title}
              </p>

              <p
                className={`mt-3 min-h-12 text-sm leading-6 ${
                  index === 0 ? "text-slate-700" : "text-slate-400"
                }`}
              >
                {tariff.hours}
              </p>

              <div className="mt-7">
                <p
                  className={`text-sm ${
                    index === 0 ? "text-slate-700" : "text-slate-400"
                  }`}
                >
                  Uscita e prima ora
                </p>

                <p className="mt-1 text-4xl font-black">{tariff.firstHour}</p>
              </div>

              <div
                className={`mt-6 border-t pt-6 ${
                  index === 0 ? "border-slate-900/20" : "border-white/10"
                }`}
              >
                <p
                  className={`text-sm ${
                    index === 0 ? "text-slate-700" : "text-slate-400"
                  }`}
                >
                  Ogni mezz’ora successiva
                </p>

                <p className="mt-1 text-2xl font-black">{tariff.nextTime}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-bold">Materiali esclusi</h3>

            <p className="mt-3 leading-7 text-slate-300">
              Ricambi, componenti e materiali vengono conteggiati
              separatamente. Parcheggi a pagamento, zone blu, pedaggi e
              accessi a pagamento sono a carico del cliente.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-xl font-bold">Ricambio non disponibile</h3>

            <p className="mt-3 leading-7 text-slate-300">
              Al rientro per completare lo stesso intervento non viene
              applicato un nuovo diritto di chiamata. Si conteggiano soltanto
              il tempo di lavoro e i materiali utilizzati.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-6">
          <p className="leading-7 text-yellow-100">
            La tariffa iniziale è dovuta anche quando il guasto non può essere
            risolto durante il primo accesso, poiché comprende uscita,
            diagnosi, verifiche e tempo lavorato. Il servizio notturno viene
            effettuato su disponibilità.
          </p>
        </div>
      </section>

      <section id="faq" className="border-y border-white/10 bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-5 sm:py-20 lg:px-8">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
              Domande frequenti
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Informazioni prima dell’intervento
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Le principali condizioni vengono comunque spiegate
              telefonicamente prima della conferma dell’uscita.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-slate-950/60 open:border-yellow-400/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 font-bold">
                  <span>{faq.question}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-yellow-400/40 text-xl text-yellow-400 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="border-t border-white/10 px-6 py-5 leading-7 text-slate-300">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="chi-sono">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-5 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
              Chi sono
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Angelo Boatta
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              Elettricista con esperienza maturata fin da giovane nel settore
              degli impianti elettrici.
            </p>

            <p>
              Seguo direttamente gli interventi, dalla prima verifica fino al
              completamento del lavoro, mantenendo un rapporto chiaro e
              diretto con il cliente.
            </p>

            <p>
              L’attività comprende impianti elettrici civili e industriali,
              manutenzioni, ricerca guasti, domotica KNX e videosorveglianza.
            </p>

            <p className="font-semibold text-white">
              Impresa abilitata ai sensi del D.M. 37/2008 per le lettere A, B
              e G.
            </p>
          </div>
        </div>
      </section>

      <section
        id="zone"
        className="mx-auto max-w-7xl px-4 pb-16 sm:px-5 sm:pb-20 lg:px-8"
      >
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-8 lg:p-12">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
            Zone servite
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Mori, Rovereto e zone limitrofe
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Interventi principalmente a Mori, Rovereto, Ala, Arco, Riva del
            Garda e nei comuni limitrofi. Per località più lontane, eventuali
            costi di trasferta vengono comunicati prima dell’intervento.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-5 lg:px-8">
          <p className="font-bold uppercase tracking-[0.2em] text-yellow-400">
            Hai bisogno di assistenza?
          </p>

          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black sm:text-4xl">
            Hai un guasto o devi modificare un impianto elettrico?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Contattami per descrivere il problema e verificare la disponibilità
            dell’intervento.
          </p>

          <a
            href="#contatti"
            className="mt-8 inline-flex rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-yellow-300"
          >
            Vai ai contatti
          </a>
        </div>
      </section>

      <section id="contatti" className="border-t border-white/10 bg-yellow-400">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 text-slate-950 sm:px-5 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="font-bold uppercase tracking-[0.2em]">Contatti</p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Richiedi un intervento
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8">
              Per guasti e urgenze è preferibile il contatto telefonico. Il
              numero di telefono, WhatsApp e l’indirizzo email aziendale
              verranno inseriti appena definitivi.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <span className="rounded-xl bg-slate-950 px-6 py-4 text-center font-bold text-white">
              Telefono da inserire
            </span>

            <span className="rounded-xl border-2 border-slate-950 px-6 py-4 text-center font-bold">
              WhatsApp da inserire
            </span>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-5 lg:px-8">
          <p>© 2026 Angelo Boatta Impianti Elettrici</p>

          <p>
            Dati aziendali, Partita IVA, privacy e cookie policy da inserire
            all’apertura dell’attività.
          </p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-slate-950/95 p-3 backdrop-blur md:hidden">
        <span className="rounded-xl bg-yellow-400 px-4 py-3 text-center text-sm font-bold text-slate-950 opacity-70">
          Chiama
        </span>

        <span className="rounded-xl border border-yellow-400 px-4 py-3 text-center text-sm font-bold text-yellow-400 opacity-70">
          WhatsApp
        </span>
      </div>
    </main>
  );
}