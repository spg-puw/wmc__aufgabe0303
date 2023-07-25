# Aufgabe WebChat

## Aufgabe

Baue einen WebChat - wie dieser umgesetzt wird kannst du selber entscheiden!

Vorgaben: nodejs (mit express, websocket) serverseitig und clientseitig ausschließlich vanilla JS!

Hier ein paar Ideen/Anmerkungen:

* du kannst die Nachrichten in-memory (array) speichern oder z.B. in eine JSON oder CSV Datei speichern
* die Nachrichten können beispielsweise über einen Endpoint abgerufen werden - der Client fragt dann regelmäßig die Nachrichten ab (polling);<br>
eine elegantere Methode wären beispielsweise WebSockets (siehe [hier](https://github.com/spg-puw/websocket_demo)); dabei bleiben Client und Server miteinander verbunden
* Sicherheit: wenn der Chat nicht gut programmiert wurde, werden HTML-Tags nicht gefilter und man kann z.B. ein `<img ...>` oder `<script>...</script>` in einer Nachricht verstecken, was zu unerwünschten Problemen führen kann und Angriffe ermöglicht

## Setup

Abhängigkeiten installieren:

```sh
npm install
```

Das Programm selber kann mit folgendem Befehl gestartet werden:

```sh
# normal starten
npm run start

# mit nodemon starten
npm run dev
```
