import Image from "next/image";
import { House, Factory, Wrench, Search, Network, Camera } from "lucide-react";

const serviceIcons = [
  House,
  Factory,
  Wrench,
  Search,
  Network,
  Camera,
];

const services = [
  {
    title: "Impianti civili",
    description: "Soluzioni elettriche per abitazioni, ristrutturazioni e nuove costruzioni.",
    image: "/servizio-civile.jpg",
  },
  {
    title: "Impianti industriali",
    description: "Impianti elettrici per attività, laboratori e realtà produttive.",
    image: "/servizio-industriale.jpg",
  },
  {
    title: "Manutenzioni",
    description: "Interventi ordinari e straordinari per mantenere l’impianto efficiente.",
    image: "/servizio-manutenzione.jpg",
  },
  {
    title: "Ricerca guasti",
    description: "Diagnosi e individuazione rapida delle anomalie elettriche.",
    image: "/servizio-ricerca-guasti.jpg",
  },
  {
    title: "Sistemi KNX",
    description: "Automazione, comfort e controllo per edifici intelligenti.",
    image: "/servizio-knx.jpg",
  },
  {
    title: "Videosorveglianza",
    description: "Impianti di videosorveglianza con gestione e controllo da remoto.",
    image: "/servizio-videosorveglianza.jpg",
  },
];

const faqs = [
  {
    q: "Come posso richiedere un intervento?",
    a: "Puoi contattare A.B Impianti telefonicamente, tramite WhatsApp oppure via email descrivendo il problema o il lavoro da eseguire.",
  },
  {
    q: "Effettuate ricerca guasti?",
    a: "Sì. L’intervento può comprendere verifiche su quadri elettrici, differenziali, linee, prese, illuminazione e altre anomalie dell’impianto.",
  },
  {
    q: "Eseguite lavori su impianti esistenti?",
    a: "Sì. A.B Impianti esegue modifiche, ampliamenti, manutenzioni e interventi su impianti esistenti, oltre alla realizzazione di nuovi impianti.",
  },
  {
    q: "Lavorate sia con privati che con attività?",
    a: "Sì. I servizi sono rivolti a privati, condomini, negozi, uffici, attività artigianali e realtà produttive.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="wrap header-inner">
          <a href="#home" className="brand" aria-label="A.B Impianti di Boatta Angelo">
            <div className="brand-logo">
              <Image
                src="/logo-angelo-boatta.png"
                alt="A.B Impianti di Boatta Angelo"
                fill
                priority
                className="object-contain"
                sizes="176px"
              />
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="#servizi">Servizi</a>
            <a href="#knx">KNX</a>
            <a href="#chi-sono">Chi sono</a>
            <a href="#faq">FAQ</a>
            <a href="#contatti">Contatti</a>
          </nav>

          <a className="btn btn-yellow header-cta" href="tel:+393522281087">
            Richiedi un contatto
          </a>

          <details className="mobile-menu">
            <summary>Menu</summary>
            <nav>
              <a href="#servizi">Servizi</a>
              <a href="#knx">KNX</a>
              <a href="#chi-sono">Chi sono</a>
              <a href="#faq">FAQ</a>
              <a href="#contatti">Contatti</a>
            </nav>
          </details>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-image">
          <Image
            src="/hero-quadro-elettrico.jpg"
            alt="Quadro elettrico professionale"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="hero-overlay" />

        <div className="wrap hero-content">
          <div className="hero-copy">
            <p className="eyebrow">ESPERIENZA · QUALITÀ · AFFIDABILITÀ</p>
            <h1>
              Impianti elettrici
              <span>civili e industriali</span>
            </h1>
            <p className="hero-lead">
              Soluzioni affidabili per abitazioni, attività e realtà produttive.
              Installazione, modifica, manutenzione e ricerca guasti.
            </p>

            <div className="hero-actions">
              <a className="btn btn-yellow" href="#contatti">Richiedi un contatto</a>
              <a className="btn btn-outline" href="#servizi">I nostri servizi</a>
            </div>
          </div>
        </div>
      </section>

      <section className="service-strip">
        <div className="wrap service-strip-grid">
          {["Impianti civili","Impianti industriali","Manutenzioni","Ricerca guasti","Sistemi KNX","Videosorveglianza"].map((item, i) => (
            <div className="strip-item" key={item}>
              {(() => {
  const Icon = serviceIcons[i];
  return (
    <span className="strip-icon" aria-hidden="true">
      <Icon size={27} strokeWidth={1.8} />
    </span>
  );
})()}
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="servizi" className="section section-light">
        <div className="wrap">
          <div className="section-head split">
            <div>
              <p className="eyebrow dark">I NOSTRI SERVIZI</p>
              <h2>Soluzioni su misura<br />per ogni esigenza</h2>
            </div>
            <p className="section-intro">
              Dalla realizzazione alla manutenzione, A.B Impianti offre soluzioni
              professionali per privati, attività e realtà produttive.
            </p>
          </div>

          <div className="service-cards">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-photo">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dual-section">
        <div className="dual-panel light-panel">
          <div className="panel-inner">
            <p className="eyebrow dark">PERCHÉ SCEGLIERE A.B IMPIANTI</p>
            <h2>Un partner affidabile<br />per i tuoi impianti</h2>

            <div className="benefits">
              <div><span>01</span><strong>Esperienza sul campo</strong></div>
              <div><span>02</span><strong>Qualità del lavoro</strong></div>
              <div><span>03</span><strong>Soluzioni su misura</strong></div>
              <div><span>04</span><strong>Attenzione alla sicurezza</strong></div>
            </div>
          </div>
        </div>

        <div className="dual-panel dark-panel">
          <div className="panel-inner">
            <p className="eyebrow">COME LAVORIAMO</p>
            <h2>Un metodo chiaro,<br />dal primo contatto al lavoro completato</h2>

            <div className="workflow">
              {[
                ["01","Contatto","Raccogliamo le informazioni sull’esigenza."],
                ["02","Verifica","Valutiamo la soluzione più adatta."],
                ["03","Intervento","Realizziamo il lavoro con cura."],
                ["04","Assistenza","Restiamo un riferimento anche dopo."],
              ].map(([n,t,d]) => (
                <div className="workflow-step" key={n}>
                  <span>{n}</span><strong>{t}</strong><p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="knx" className="knx-section">
        <div className="knx-bg">
          <Image src="/knx-ambiente.jpg" alt="Ambiente con automazione KNX" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="knx-overlay" />
        <div className="wrap knx-grid">
          <div className="knx-copy">
            <p className="eyebrow">KNX PARTNER</p>
            <h2>Edifici più intelligenti,<br />più efficienti, più confortevoli</h2>
            <p>
              Sistemi KNX per la gestione integrata di illuminazione, tapparelle,
              scenari, climatizzazione e altre funzioni dell’edificio.
            </p>
          </div>

          <div className="knx-card">
            <div className="knx-logo">
              <Image src="/logo-knx-partner.jpg" alt="KNX Partner" fill className="object-contain" sizes="220px" />
            </div>
            <ul>
              <li>Automazione su misura</li>
              <li>Comfort e controllo</li>
              <li>Gestione integrata degli impianti</li>
              <li>Soluzioni per nuove costruzioni e ristrutturazioni</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="chi-sono" className="story-section section-light">
        <div className="wrap story-grid">
          <div className="story-copy">
            <p className="eyebrow dark">CHI SONO</p>
            <h2>Angelo Boatta</h2>

            <p>
              Angelo Boatta ha completato i suoi studi presso il <strong>CRST di Palermo</strong>,
              dove ha acquisito le basi tecniche che gli hanno permesso di iniziare il proprio
              percorso nel settore elettrico. Dopo la formazione ha lavorato con diverse aziende,
              maturando fin dai primi anni un’esperienza concreta fatta di cantieri, installazioni,
              manutenzioni e interventi su impianti differenti.
            </p>

            <p>
              Fino al <strong>2007</strong> ha svolto la propria attività professionale in Sicilia,
              collaborando con più realtà del settore. Il confronto con aziende e contesti diversi
              gli ha permesso di sviluppare competenze pratiche, metodo di lavoro e capacità di
              adattamento alle diverse esigenze dei cantieri.
            </p>

            <p>
              Nel <strong>2007 si è trasferito in Trentino</strong>, dove ha continuato a lavorare
              per aziende del settore elettrico, proseguendo il proprio percorso professionale e
              ampliando ulteriormente le competenze maturate negli anni. Ha avuto modo di operare
              sia nell’ambito civile sia in quello industriale, lavorando in abitazioni, attività
              commerciali, laboratori e realtà produttive.
            </p>

            <p>
              Nel corso della sua esperienza si è occupato di nuove installazioni, modifiche e
              ampliamenti di impianti esistenti, manutenzioni, ricerca guasti, quadri elettrici,
              linee di distribuzione, videosorveglianza e sistemi di automazione.
            </p>

            <p>
              Con il tempo ha sviluppato un approccio molto pratico al lavoro: comprendere prima
              di tutto il problema o l’esigenza del cliente, individuarne le cause e valutare la
              soluzione più adatta prima di procedere con l’intervento. Per Angelo un impianto non
              deve semplicemente funzionare, ma deve essere realizzato con attenzione alla
              <strong> sicurezza, all’affidabilità e alla durata nel tempo</strong>.
            </p>

            <p>
              Negli anni ha inoltre approfondito il mondo dei sistemi <strong>KNX</strong>, applicati
              all’automazione degli edifici e alla gestione integrata di funzioni come illuminazione,
              tapparelle, climatizzazione e altri impianti.
            </p>

            <p>
              L’esperienza accumulata lavorando per diverse aziende e in contesti differenti lo ha
              portato infine a creare <strong>A.B Impianti di Boatta Angelo</strong>, mettendo
              direttamente a disposizione dei clienti le competenze maturate sul campo.
            </p>

            <p>
              L’attività nasce con un obiettivo preciso: offrire un servizio professionale, diretto
              e concreto, basato sulla chiarezza, sulla qualità del lavoro e su un rapporto semplice
              con il cliente. Ogni intervento viene valutato in base alle reali necessità, cercando
              di proporre soluzioni adeguate senza complicazioni inutili.
            </p>

            <p>
              Che si tratti di un nuovo impianto, di una ristrutturazione, di una modifica, di una
              manutenzione o di una ricerca guasti, il principio rimane lo stesso:
              <strong> lavorare con precisione, in sicurezza e con attenzione al risultato finale</strong>.
            </p>
          </div>

          <div className="story-image">
            <Image src="/chi-sono-attrezzi.jpg" alt="Attrezzatura professionale da elettricista" fill className="object-cover" sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
        </div>
      </section>

      <section id="faq" className="faq-section">
        <div className="wrap">
          <p className="eyebrow">DOMANDE FREQUENTI</p>
          <h2>FAQ</h2>
          <div className="faq-grid">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq-item">
                <summary>{faq.q}<span>+</span></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="contact-section">
        <div className="wrap contact-grid">
          <div>
            <p className="eyebrow">CONTATTAMI</p>
            <h2>Parliamo del tuo progetto</h2>
            <p className="contact-lead">
              Hai bisogno di un intervento, di una modifica all’impianto o vuoi
              richiedere informazioni? Contattami per valutare la soluzione più adatta.
            </p>

            <div className="contact-actions">
              <a className="btn btn-yellow" href="https://wa.me/393522281087" target="_blank" rel="noreferrer">
                Scrivimi su WhatsApp
              </a>
              <a className="btn btn-outline" href="mailto:angeloboa@gmail.com">
                Richiedi informazioni
              </a>
            </div>
          </div>

          <div className="contact-data">
            <a href="tel:+393522281087"><span>Telefono</span><strong>352 228 1087</strong></a>
            <a href="mailto:angeloboa@gmail.com"><span>Email</span><strong>angeloboa@gmail.com</strong></a>
            <a href="mailto:angelo.boatta@pec.it"><span>PEC</span><strong>angelo.boatta@pec.it</strong></a>
            <div><span>P. IVA</span><strong>02852960224</strong></div>
            <div><span>Sito</span><strong>angeloboattaimpianti.it</strong></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap footer-top">
          <div className="footer-brand">
            <div className="brand-logo footer-logo">
              <Image
                src="/logo-angelo-boatta.png"
                alt="A.B Impianti di Boatta Angelo"
                fill
                className="object-contain"
                sizes="155px"
              />
            </div>
          </div>
          <nav>
            <a href="#servizi">Servizi</a>
            <a href="#knx">KNX</a>
            <a href="#chi-sono">Chi sono</a>
            <a href="#faq">FAQ</a>
            <a href="#contatti">Contatti</a>
          </nav>
        </div>

        <div className="wrap footer-bottom">
          <p>© 2026 A.B Impianti di Boatta Angelo · P. IVA 02852960224</p>

          <div className="footer-legal">
            <a href="/privacy">Privacy</a>
            <a href="/cookie">Cookie</a>
            <span>angeloboattaimpianti.it</span>
          </div>
        </div>
      </footer>

      <div className="mobile-bar">
        <a href="tel:+393522281087">Chiama</a>
        <a href="https://wa.me/393522281087" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </main>
  );
}
