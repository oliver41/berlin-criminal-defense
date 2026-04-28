import type { Locale } from "@/lib/i18n";

export function PrivacyPage({ locale }: { locale: Locale }) {
  return (
    <article className="container-editorial pt-20 md:pt-28 max-w-3xl">
      <p className="eyebrow">{locale === "de" ? "Rechtliches" : "Legal"}</p>
      <h1 className="font-serif text-5xl md:text-6xl mt-4 leading-tight">
        {locale === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
      </h1>

      <div className="mt-12 space-y-10 text-base text-foreground/90 leading-relaxed">
        <section>
          <h2 className="font-serif text-2xl mb-3">
            1. Name und Kontaktdaten des für die Verarbeitung Verantwortlichen sowie des betrieblichen Datenschutzbeauftragten
          </h2>
          <p>Diese Datenschutz-Information gilt für die Datenverarbeitung durch:</p>
          <p className="mt-3">
            Verantwortlicher: Strafrechtskanzlei Nadine Antoinette Kramer (im Folgenden:
            Nadine Kramer),<br />
            Alt-Moabit 110, D-10559 Berlin, Deutschland<br />
            Email: nk.strafrecht@gmail.com<br />
            Telefon: +49 (0)30 – 629 383 59<br />
            Fax: +49 (0)30 – 221 855 77
          </p>
          <p className="mt-3">
            Der/die betriebliche Datenschutzbeauftragte von Nadine Kramer ist unter der o.g.
            Anschrift, zu Hd. Frau Kramer, beziehungsweise unter nk.strafrecht@gmail.com erreichbar.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-3">
            2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung
          </h2>

          <h3 className="font-serif text-xl mt-6 mb-2">a) Beim Besuch der Website</h3>
          <p>
            Beim Aufrufen unserer Website www.rechtsanwaltstrafrechtberlin.de werden durch den
            auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den
            Server unserer Website gesendet. Diese Informationen werden temporär in einem sog.
            Logfile gespeichert. Folgende Informationen werden dabei ohne Ihr Zutun erfasst und
            bis zur automatisierten Löschung gespeichert:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>IP-Adresse des anfragenden Rechners,</li>
            <li>Datum und Uhrzeit des Zugriffs,</li>
            <li>Name und URL der abgerufenen Datei,</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL),</li>
            <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.</li>
          </ul>
          <p className="mt-3">Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website,</li>
            <li>Gewährleistung einer komfortablen Nutzung unserer Website,</li>
            <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
            <li>zu weiteren administrativen Zwecken.</li>
          </ul>
          <p className="mt-3">
            Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1 lit. f DSGVO.
            Unser berechtigtes Interesse folgt aus oben aufgelisteten Zwecken zur Datenerhebung.
            In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck, Rückschlüsse auf Ihre
            Person zu ziehen.
          </p>
          <p className="mt-3">
            Darüber hinaus setzen wir beim Besuch unserer Website Cookies sowie Analysedienste
            ein. Nähere Erläuterungen dazu erhalten Sie unter den Ziff. 4 und 5 dieser
            Datenschutzerklärung.
          </p>

          <h3 className="font-serif text-xl mt-6 mb-2">b) Bei Anmeldung für unseren Newsletter</h3>
          <p>
            Sofern Sie nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrücklich eingewilligt haben,
            verwenden wir Ihre E-Mail-Adresse dafür, Ihnen regelmäßig unseren Newsletter zu
            übersenden. Für den Empfang des Newsletters ist die Angabe einer E-Mail-Adresse
            ausreichend. Die Abmeldung ist jederzeit möglich, zum Beispiel über einen Link am
            Ende eines jeden Newsletters. Alternativ können Sie Ihren Abmeldewunsch gerne auch
            jederzeit an nk.strafrecht@gmail.com per E-Mail senden.
          </p>

          <h3 className="font-serif text-xl mt-6 mb-2">c) Bei Nutzung unseres Kontaktformulars</h3>
          <p>
            Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns über ein auf der
            Website bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer
            gültigen E-Mail-Adresse erforderlich, damit wir wissen, von wem die Anfrage stammt
            und um diese beantworten zu können. Weitere Angaben können freiwillig getätigt werden.
          </p>
          <p className="mt-3">
            Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns erfolgt nach Art. 6
            Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten Einwilligung. Die
            für die Benutzung des Kontaktformulars von uns erhobenen personenbezogenen Daten
            werden nach Erledigung der von Ihnen gestellten Anfrage automatisch gelöscht.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-3">3. Weitergabe von Daten</h2>
          <p>
            Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden
            aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen Daten nur an
            Dritte weiter, wenn:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche Einwilligung dazu erteilt haben,</li>
            <li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer Daten haben,</li>
            <li>für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht, sowie</li>
            <li>dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-3">4. Cookies</h2>
          <p>
            Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien,
            die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät (Laptop, Tablet,
            Smartphone o.ä.) gespeichert werden, wenn Sie unsere Seite besuchen. Cookies richten
            auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige
            Schadsoftware.
          </p>
          <p className="mt-3">
            In dem Cookie werden Informationen abgelegt, die sich jeweils im Zusammenhang mit
            dem spezifisch eingesetzten Endgerät ergeben. Dies bedeutet jedoch nicht, dass wir
            dadurch unmittelbar Kenntnis von Ihrer Identität erhalten.
          </p>
          <p className="mt-3">
            Der Einsatz von Cookies dient einerseits dazu, die Nutzung unseres Angebots für Sie
            angenehmer zu gestalten. So setzen wir sogenannte Session-Cookies ein, um zu erkennen,
            dass Sie einzelne Seiten unserer Website bereits besucht haben. Diese werden nach
            Verlassen unserer Seite automatisch gelöscht.
          </p>
          <p className="mt-3">
            Darüber hinaus setzen wir ebenfalls zur Optimierung der Benutzerfreundlichkeit
            temporäre Cookies ein, die für einen bestimmten festgelegten Zeitraum auf Ihrem
            Endgerät gespeichert werden. Besuchen Sie unsere Seite erneut, um unsere Dienste in
            Anspruch zu nehmen, wird automatisch erkannt, dass Sie bereits bei uns waren und
            welche Eingaben und Einstellungen sie getätigt haben, um diese nicht noch einmal
            eingeben zu müssen.
          </p>
          <p className="mt-3">
            Zum anderen setzten wir Cookies ein, um die Nutzung unserer Website statistisch zu
            erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten (siehe
            Ziff. 5). Diese Cookies ermöglichen es uns, bei einem erneuten Besuch unserer Seite
            automatisch zu erkennen, dass Sie bereits bei uns waren. Diese Cookies werden nach
            einer jeweils definierten Zeit automatisch gelöscht.
          </p>
          <p className="mt-3">
            Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke zur Wahrung
            unserer berechtigten Interessen sowie der Dritter nach Art. 6 Abs. 1 S. 1 lit. f
            DSGVO erforderlich.
          </p>
          <p className="mt-3">
            Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch
            so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets
            ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige
            Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen
            unserer Website nutzen können.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-3">5. Analyse-Tools</h2>
          <h3 className="font-serif text-xl mt-4 mb-2">a) Tracking-Tools</h3>
          <p>
            Die im Folgenden aufgeführten und von uns eingesetzten Tracking-Maßnahmen werden auf
            Grundlage des Art. 6 Abs. 1 S. 1 lit. f DSGVO durchgeführt. Mit den zum Einsatz
            kommenden Tracking-Maßnahmen wollen wir eine bedarfsgerechte Gestaltung und die
            fortlaufende Optimierung unserer Webseite sicherstellen. Zum anderen setzen wir die
            Tracking-Maßnahmen ein, um die Nutzung unserer Webseite statistisch zu erfassen und
            zum Zwecke der Optimierung unseres Angebotes für Sie auszuwerten. Diese Interessen
            sind als berechtigt im Sinne der vorgenannten Vorschrift anzusehen.
          </p>

          <h3 className="font-serif text-xl mt-6 mb-2">i) Google Analytics</h3>
          <p>
            Zum Zwecke der bedarfsgerechten Gestaltung und fortlaufenden Optimierung unserer
            Seiten nutzen wir Google Analytics, ein Webanalysedienst der Google Inc. (1600
            Amphitheatre Parkway, Mountain View, CA 94043, USA; im Folgenden „Google"). In
            diesem Zusammenhang werden pseudonymisierte Nutzungsprofile erstellt und Cookies
            (siehe unter Ziff. 4) verwendet.
          </p>
          <p className="mt-3">
            Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website
            werden an einen Server von Google in den USA übertragen und dort gespeichert. Die
            IP-Adressen werden anonymisiert (IP-Masking). Sie können die Installation der
            Cookies durch eine entsprechende Browser-Einstellung verhindern oder das von Google
            bereitgestellte Browser-Add-on installieren:{" "}
            <a
              className="text-accent hover:underline"
              href="https://tools.google.com/dlpage/gaoptout?hl=de"
              target="_blank"
              rel="noreferrer"
            >
              tools.google.com/dlpage/gaoptout
            </a>
            .
          </p>

          <h3 className="font-serif text-xl mt-6 mb-2">ii) Google Adwords Conversion Tracking</h3>
          <p>
            Um die Nutzung unserer Webseite statistisch zu erfassen und zum Zwecke der
            Optimierung unserer Website für Sie auszuwerten, nutzen wir ferner das Google
            Conversion Tracking. Dabei wird von Google Adwords ein Cookie auf Ihrem Rechner
            gesetzt, sofern Sie über eine Google-Anzeige auf unsere Webseite gelangt sind. Diese
            Cookies verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der persönlichen
            Identifizierung.
          </p>

          <h3 className="font-serif text-xl mt-6 mb-2">iii) Matomo</h3>
          <p>
            Wir verwenden die Open-Source-Software Matomo zur Analyse und statistischen
            Auswertung der Nutzung der Website. Die durch den Cookie erzeugten Informationen
            über die Websitenutzung werden an unsere Server übertragen und in pseudonymen
            Nutzungsprofilen zusammengefasst. Eine Weitergabe der Informationen an Dritte
            erfolgt nicht. Die IP-Adressen werden anonymisiert (IP-Masking).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-3">6. Social Media Plug-ins</h2>
          <p>
            Wir setzen auf unserer Website auf Grundlage des Art. 6 Abs. 1 S. 1 lit. f DSGVO
            Social Plug-ins der sozialen Netzwerke Facebook, Twitter und Instagram ein, um
            unsere Kanzlei hierüber bekannter zu machen. Die Einbindung dieser Plug-ins durch
            uns erfolgt im Wege der sogenannten Zwei-Klick-Methode, um Besucher unserer Webseite
            bestmöglich zu schützen. Weitere Informationen zur Datenverarbeitung durch die
            Anbieter finden Sie in den jeweiligen Datenschutzerklärungen von Facebook, Twitter
            und Instagram.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-3">7. Betroffenenrechte</h2>
          <p>Sie haben das Recht:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht weitere gesetzliche Vorgaben entgegenstehen;</li>
            <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;</li>
            <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li>
            <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen;</li>
            <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-3">8. Widerspruchsrecht</h2>
          <p>
            Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß
            Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21
            DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen,
            soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder
            sich der Widerspruch gegen Direktwerbung richtet.
          </p>
          <p className="mt-3">
            Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine
            E-Mail an nk.strafrecht@gmail.com.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-3">9. Datensicherheit</h2>
          <p>
            Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure
            Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von
            Ihrem Browser unterstützt wird. Wir bedienen uns im Übrigen geeigneter technischer
            und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder
            vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder
            gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden
            entsprechend der technologischen Entwicklung fortlaufend verbessert.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-3">
            10. Aktualität und Änderung dieser Datenschutzerklärung
          </h2>
          <p>Musterdatenschutzerklärung der DAV.</p>
          <p className="mt-3">
            Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2018.
          </p>
        </section>
      </div>
    </article>
  );
}
