import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy di A.B Impianti di Boatta Angelo.",
};

export default function CookiePage() {
  return (
    <main className="legal-page">
      <div className="legal-wrap">
        <a href="/" className="legal-back">← Torna al sito</a>

        <p className="eyebrow">INFORMATIVA</p>
        <h1>Cookie Policy</h1>

        <p className="legal-updated">
          Ultimo aggiornamento: settembre 2026
        </p>

        <section>
          <h2>Cosa sono i cookie</h2>
          <p>
            I cookie sono piccoli file di testo che possono essere memorizzati
            sul dispositivo dell’utente durante la navigazione di un sito web.
            Possono essere utilizzati per consentire il corretto funzionamento
            del sito, migliorarne la sicurezza o memorizzare alcune preferenze.
          </p>
        </section>

        <section>
          <h2>Cookie utilizzati da questo sito</h2>
          <p>
            Il sito di A.B Impianti è attualmente configurato senza sistemi
            pubblicitari, profilazione dell’utente o strumenti di marketing
            comportamentale.
          </p>
          <p>
            Possono tuttavia essere utilizzati cookie o tecnologie strettamente
            tecniche necessari al funzionamento, alla sicurezza, alla
            distribuzione dei contenuti e alla protezione del sito.
          </p>
        </section>

        <section>
          <h2>Cookie di profilazione</h2>
          <p>
            Il sito non utilizza attualmente cookie di profilazione propri
            finalizzati alla creazione di profili commerciali degli utenti.
          </p>
        </section>

        <section>
          <h2>Servizi di terze parti</h2>
          <p>
            Alcuni collegamenti presenti sul sito possono indirizzare verso
            servizi esterni, come WhatsApp. L’eventuale utilizzo di cookie o
            altre tecnologie da parte di tali piattaforme è disciplinato
            direttamente dalle informative dei rispettivi fornitori.
          </p>
        </section>

        <section>
          <h2>Gestione dei cookie</h2>
          <p>
            L’utente può gestire o cancellare i cookie tramite le impostazioni
            del proprio browser. La disattivazione di cookie tecnici essenziali
            potrebbe compromettere alcune funzionalità del sito.
          </p>
        </section>

        <section>
          <h2>Modifiche alla Cookie Policy</h2>
          <p>
            Questa pagina verrà aggiornata qualora vengano introdotti servizi
            aggiuntivi, come strumenti statistici, contenuti incorporati,
            sistemi pubblicitari o altre tecnologie che richiedano nuove
            informazioni o il consenso dell’utente.
          </p>
        </section>

        <section>
          <h2>Contatti</h2>
          <p>
            Per informazioni relative all’utilizzo dei cookie puoi scrivere a
            <a href="mailto:angeloboa@gmail.com"> angeloboa@gmail.com</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
