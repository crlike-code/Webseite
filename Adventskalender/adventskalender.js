document.addEventListener("DOMContentLoaded", () => {
  const kalender = document.querySelector('.kalender');
  const currentDate = new Date();

  const raetsel = [
    { frage: "Ein unsichtbarer Dirigent, der die Welt in seinem Rhythmus tanzen lässt, spürbar, doch ungreifbar. Was könnte es sein? ", loesung: "Gravitation" },
    { frage: "Vier rollen um die Wette, wer wird wohl am schnellsten sein? Doch so gern ich es auch hätte, niemand kann der Sieger sein", loesung: "Wagenrad" },
    { frage: "Kaltes mach ich warm, heißes mach ich kalt; reich hat mich und arm, wer lang mich hat, wird alt", loesung: "Atem" },
    { frage: "Immer ist es nah, niemals ist es da. Wenn du denkst, du sei’st daran, nimmt es andern Namen an", loesung: "Morgen" },
    { frage: "Muss Tag und Nacht auf Wache stehen, hat keine Füße und muss doch gehen, hat keine Hände und muss doch schlagen. Wer kann mir dieses Rätsel sagen?", loesung: "Uhr" },
    { frage: "Ich bin ein kleines zittrig Ding auf unbequemem Sitze, doch geb ich manchen guten Wink mit meiner Nasenspitze. Was kann das sein?", loesung: "Kompassnadel" },
    { frage: "Wer es macht, der sagt es nicht. Wer es sagt, der macht es nicht. Wer es nimmt, der kennt es nicht. Wer es kennt, der nimmt es nicht.", loesung: "Falschgeld" },
    { frage: "Erst weiß wie Schnee, dann grün wie Klee, dann rot wie Blut. Schmeckt allen gut.", loesung: "Kirsche" },
    { frage: "In Zeitungen mag leicht es jeder missen, gebraten aber ist’s ein Leckerbissen.", loesung: "Ente" },
    { frage: "Ein schlafender Bote aus einer anderen Welt, der in Stille spricht und nur in Träumen gehört werden kann. Was ist es?", loesung: "Unterbewusstsein" },
    { frage: "Du bewegst dich hurtig fort und gelangst doch kaum vom Ort. Wer trägt dich in solcher Weise auf der leicht beschwingten Reise?", loesung: "Schaukel" },
    { frage: "Je mehr es bekommt, desto hungriger wird es – hat es alles gefressen, so stirbt es.", loesung: "Feuer" },
    { frage: "Je mehr man davon isst, desto mehr bleibt übrig.", loesung: "Nüsse" },
    { frage: "Was ist voll so schwer, als wäre es leer? Was ist gefüllt, nicht halb so schwer, als wäre es leer?", loesung: "Luftballon" },
    { frage: "Es ist kein Haus, doch baut man es, man isst es nicht, doch kaut man es, wenn man’s nicht kaut, verbrennt man es, Ihr kennt es; sagt: Wie nennt man es?", loesung: "Tabak" },
    { frage: "Ich bin gewaltig, breit und schwer, ohne Füße kriech ich auf dem Bauch einher und laufe dennoch so geschwind wie der Wind.", loesung: "Schiff" },
    { frage: "Ich bin ein scheues Ding und rede freiwillig auch nicht einen Laut; doch Antwort steh ich, all und jede, dem, der sein Fragwort mir vertraut.", loesung: "Echo" },
    { frage: "Ich hab keine Hände und kann doch tragen, hab keine Flinte und kann doch jagen; kann klettern und schwere Lasten heben und bin doch ein zartes, hinfälliges Leben.", loesung: "Wind" },
    { frage: "Ich habe Städte, aber keine Häuser. Ich habe Berge, aber keine Bäume. Ich habe Wasser, aber keinen Fisch. Was bin ich?", loesung: "Landkarte" },
    { frage: "Der es macht, der will es nicht, der es trägt, behält es nicht der es kauft, der braucht es nicht der es hat, der weiß es nicht", loesung: "Sarg" },
    { frage: "Ein Wächter der Weisheit, still und geduldig, birgt er Schätze, die nur durch das Öffnen seiner Tore offenbart werden. Was ist es?", loesung: "Buch" },
    { frage: "Ein ewiger Reisender, der keine Spuren hinterlässt, teilt die Zeit, doch bleibt unberührt von ihr. Was mag es sein? ", loesung: "Licht" },
    { frage: "Ein einsamer Reisender, der ohne Beine wandert, sich windet und schlängelt, stets vorwärts, nie rückwärts. Was mag es sein? ", loesung: "Fluss" },
    { frage: "Ein unsichtbarer Tänzer, der sich in der Wärme bewegt und im Kältehauch verschwindet, ein Spiel mit Licht und Schatten. Was ist es? ", loesung: "Dampf" },
    
  ];

  for (let i = 1; i <= 24; i++) {
    const tuerchen = document.createElement('div');
    tuerchen.className = 'tuerchen';
    tuerchen.setAttribute('data-day', i);
    
    const unlockDate = new Date(2023, 9, i); // Dezember ist Monat 11 (0-basiert in JavaScript)
    if (currentDate >= unlockDate && raetsel[i - 1]) {
      tuerchen.addEventListener('click', () => openDoor(tuerchen, raetsel[i - 1]));
    } else {
      tuerchen.classList.add('locked');
      if (!raetsel[i - 1]) {
        tuerchen.addEventListener('click', () => alert('Es gibt heute kein Rätsel.'));
      } else {
        tuerchen.addEventListener('click', () => alert('Dieses Türchen ist noch verschlossen.'));
      }
    }

    kalender.appendChild(tuerchen);
  }
});

function openDoor(tuerchen, raetsel) {
  if (!tuerchen.classList.contains('open') && raetsel) {
    tuerchen.classList.add('open');
    tuerchen.innerHTML += ` <!-- Verwenden Sie +=, um den Inhalt anzuhängen, ohne bestehende Inhalte zu überschreiben -->
      <div class="riddle">${raetsel.frage}</div>
      <input type="text" class="loesung-input" placeholder="Deine Antwort...">
      <button>Überprüfen</button>
      <div class="feedback"></div>
    `;
    tuerchen.setAttribute('data-loesung', raetsel.loesung);
    const button = tuerchen.querySelector('button');
    button.addEventListener('click', () => checkAnswer(tuerchen));
  }
}

function checkAnswer(tuerchen) {
  const input = tuerchen.querySelector('.loesung-input');
  const userAnswer = input.value;
  const correctAnswer = tuerchen.getAttribute('data-loesung');
  const dayNumber = parseInt(tuerchen.getAttribute('data-day'));
  const feedbackText = document.querySelector('.modal-feedback-text');
  const feedbackModal = document.getElementById('feedbackModal');
  
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    // Prüfen, ob es sich um Türchen 12 oder 24 handelt und entsprechendes Feedback geben
    if (dayNumber === 12) {
      feedbackText.textContent = 'Glückwunsch, der Zahlencode lautet: Rätsel: 7 Buchstabe 10 + Rätsel: 8 Buchstabe 3 + Rätsel: 3: Buchstabe 3 + Rätsel: 1 Buchstabe 5            Rätsel:2 Buchstabe:4 + Rätsel:7 Buchstabe:3 + Rätsel:7 Buchstabe 1';
    } else if (dayNumber === 24) {
      feedbackText.textContent = 'Frohe Weihnachten; Das Passwort für den Stick lautet: Rätsel: 16 Buchstabe 2 + Rätsel: 21 Buchstabe 4 + Rätsel: 12: Buchstabe 5 + Rätsel: 22 Buchstabe 2 Rätsel: 7 Buchstabe 4 + Rätsel: 15 Buchstabe 1 + Rätsel: 6: Buchstabe 3 + Rätsel: 24 Buchstabe 2 + Rätsel: 23 Buchstabe 3';
    } else {
      feedbackText.textContent = 'Glückwunsch, die Lösung ist korrekt!';
    }
  } else {
    feedbackText.textContent = 'Versuche es erneut.';
  }
  
  // Zeigt das Modal-Fenster
  feedbackModal.style.display = "block";
}

// Schließt das Modal-Fenster
document.getElementById('closeModal').onclick = function() {
  document.getElementById('feedbackModal').style.display = "none";
}

// Schließt das Modal, wenn außerhalb des Inhalts geklickt wird
window.onclick = function(event) {
  const feedbackModal = document.getElementById('feedbackModal');
  if (event.target == feedbackModal) {
    feedbackModal.style.display = "none";
  }
}


