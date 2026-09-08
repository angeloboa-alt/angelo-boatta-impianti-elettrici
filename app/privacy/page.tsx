import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Informativa privacy di A.B Impianti di Boatta Angelo.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <a href="/" className="legal-back">← Torna al sito</a>

        <p className="eyebrow">INFORMATIVA</p>
        <h1>Privacy Policy</h1>

        <p className="legal-updated">
          Ultimo aggiornamento: settembre 2026
        </p>

        <section>
          <h2>Titolare del trattamento</h2>
          <p>
            Il titolare del trattamento dei dati personali è
            <strong> A.B Impianti di Boatta Angelo</strong>.
          </p>
          <p>
            P. IVA: 02852960224<br />
            Email: <a href="mailto:angeloboa@gmail.com">angeloboa@gmail.com</a><br />
            PEC: <a href="mailto:angelo.boatta@pec.it">angelo.boatta@pec.it</a>
          </p>
        </section>

        <section>
          <h2>Dati trattati</h2>
          <p>
            Il sito non prevede attualmente moduli di registrazione o aree
            riservate. I dati personali possono essere forniti volontariamente
            dall’utente contattando A.B Impianti tramite telefono, email,
            PEC o WhatsApp.
          </p>
          <p>
            I dati possono comprendere, ad esempio, nome, recapiti,
            informazioni relative alla richiesta di intervento e ogni altra
            informazione comunicata spontaneamente dall’interessato.
          </p>
        </section>

        <section>
          <h2>Finalità del trattamento</h2>
          <p>
            I dati comunicati vengono utilizzati esclusivamente per gestire
            richieste di informazioni, preventivi, sopralluoghi, interventi,
            rapporti con clienti e adempimenti connessi all’attività
            professionale.
          </p>
        </section>

        <section>
          <h2>Base giuridica</h2>
          <p>
            Il trattamento avviene quando necessario per rispondere a una
            richiesta dell’interessato, per l’esecuzione di misure
            precontrattuali o contrattuali, per adempiere a obblighi di legge
            o, nei casi previsti, sulla base del legittimo interesse del
            titolare.
          </p>
        </section>

        <section>
          <h2>Conservazione dei dati</h2>
          <p>
            I dati vengono conservati per il tempo necessario alla gestione
            della richiesta o del rapporto professionale e, quando previsto,
            per i successivi periodi richiesti dagli obblighi amministrativi,
            fiscali e di legge.
          </p>
        </section>

        <section>
          <h2>Comunicazione dei dati</h2>
          <p>
            I dati possono essere comunicati a soggetti che supportano
            l’attività professionale, amministrativa, fiscale, tecnica o
            informatica, esclusivamente quando necessario e nel rispetto
            della normativa applicabile.
          </p>
        </section>

        <section>
          <h2>WhatsApp e servizi esterni</h2>
          <p>
            Il sito contiene collegamenti che permettono di contattare
            A.B Impianti tramite WhatsApp. Utilizzando tali servizi,
            l’utente interagisce direttamente con piattaforme di terze parti,
            che trattano i dati secondo le proprie informative privacy.
          </p>
        </section>

        <section>
          <h2>Diritti dell’interessato</h2>
          <p>
            Nei casi previsti dalla normativa applicabile, l’interessato può
            richiedere accesso, rettifica, cancellazione, limitazione del
            trattamento, opposizione e portabilità dei propri dati.
          </p>
          <p>
            Le richieste possono essere inviate a
            <a href="mailto:angeloboa@gmail.com"> angeloboa@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2>Modifiche alla presente informativa</h2>
          <p>
            La presente informativa potrà essere aggiornata in caso di
            modifiche ai servizi offerti dal sito o alla normativa applicabile.
          </p>
        </section>
      </div>
    </main>
  );
}
