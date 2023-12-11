document.addEventListener("DOMContentLoaded", () => {
  const kalender = document.querySelector('.kalender');
  const currentDate = new Date();

  const raetsel = [
    { frage: "Ein unsichtbarer Dirigent, der die Welt in seinem Rhythmus tanzen lässt, spürbar, doch ungreifbar. Was könnte es sein? ", loesung: "Gravitation",hinweis:"Grundkraft der Physik" },
    { frage: "Vier rollen um die Wette, wer wird wohl am schnellsten sein? Doch so gern ich es auch hätte, niemand kann der Sieger sein", loesung: "Wagenrad",hinweis:"Alter Begriff (Einzahl)"  },
    { frage: "Kaltes mach ich warm, heißes mach ich kalt; reich hat mich und arm, wer lang mich hat, wird alt", loesung: "Atem",hinweis:"man kann ihn anhalten"  },
    { frage: "Immer ist es nah, niemals ist es da. Wenn du denkst, du sei’st daran, nimmt es andern Namen an", loesung: "Morgen",hinweis:"eine nahe, aber noch nicht eingetretene Zeit (Begriff beschreibt einen zukünftigen Zeitpunkt)"  },
    { frage: "Muss Tag und Nacht auf Wache stehen, hat keine Füße und muss doch gehen, hat keine Hände und muss doch schlagen. Wer kann mir dieses Rätsel sagen?", loesung: "Uhr",hinweis:"Manchmal ein Gegenstand manchmal digital"  },
    { frage: "Ich bin ein kleines zittrig Ding auf unbequemem Sitze, doch geb ich manchen guten Wink mit meiner Nasenspitze. Was kann das sein?", loesung: "Kompassnadel",hinweis:"Nicht der Gegenstand an sich sondern das was (zittrig) mittig darauf sitzt"  },
    { frage: "Wer es macht, der sagt es nicht. Wer es sagt, der macht es nicht. Wer es nimmt, der kennt es nicht. Wer es kennt, der nimmt es nicht.", loesung: "Falschgeld",hinweis:"In einer Bankfiliale würde es auffallen"  },
    { frage: "Erst weiß wie Schnee, dann grün wie Klee, dann rot wie Blut. Schmeckt allen gut.", loesung: "Kirsche" ,hinweis:"klein und fruchtig" },
    { frage: "In Zeitungen mag leicht es jeder missen, gebraten aber ist’s ein Leckerbissen.", loesung: "Ente" ,hinweis:"Alter Begriff für Fakenews" },
    { frage: "Ein schlafender Bote aus einer anderen Welt, der in Stille spricht und nur in Träumen gehört werden kann. Was ist es?", loesung: "Unterbewusstsein",hinweis:"Ein Teil des Geistes, der nicht im direkten Fokus des bewussten Denkens ist" },
    { frage: "Du bewegst dich hurtig fort und gelangst doch kaum vom Ort. Wer trägt dich in solcher Weise auf der leicht beschwingten Reise?", loesung: "Schaukel",hinweis:"Besonders Kinder mögen und benutzen es" },
    { frage: "Je mehr es bekommt, desto hungriger wird es – hat es alles gefressen, so stirbt es.", loesung: "Feuer",hinweis:"je näher du kommst, desto heißer wirds" },
    { frage: "Je mehr man davon isst, desto mehr bleibt übrig.", loesung: "Nüsse",hinweis:"Wächst auf Bäumen oder Sträuchern" },
    { frage: "Was ist voll so schwer, als wäre es leer? Was ist gefüllt, nicht halb so schwer, als wäre es leer?", loesung: "Luftballon",hinweis:"elastischer Gegenstand" },
    { frage: "Es ist kein Haus, doch baut man es, man isst es nicht, doch kaut man es, wenn man’s nicht kaut, verbrennt man es, Ihr kennt es; sagt: Wie nennt man es?", loesung: "Tabak",hinweis:"Man kann es anbauen" },
    { frage: "Ich bin gewaltig, breit und schwer, ohne Füße kriech ich auf dem Bauch einher und laufe dennoch so geschwind wie der Wind.", loesung: "Schiff",hinweis:"Mich gibts in klein aber auch groß, teilweise größer als ein Haus" },
    { frage: "Ich bin ein scheues Ding und rede freiwillig auch nicht einen Laut; doch Antwort steh ich, all und jede, dem, der sein Fragwort mir vertraut.", loesung: "Echo",hinweis:"akustisches Phänomen" },
    { frage: "Ich hab keine Hände und kann doch tragen, hab keine Flinte und kann doch jagen; kann klettern und schwere Lasten heben und bin doch ein zartes, hinfälliges Leben.", loesung: "Wind", hinweis: "natürliches Phänomen" },
    { frage: "Ich habe Städte, aber keine Häuser. Ich habe Berge, aber keine Bäume. Ich habe Wasser, aber keinen Fisch. Was bin ich?", loesung: "Landkarte",hinweis: "wird mittlerweile durch die Erfindung von Smartphones und Apps nicht mehr genutzt" },
    { frage: "Der es macht, der will es nicht, der es trägt, behält es nicht der es kauft, der braucht es nicht der es hat, der weiß es nicht", loesung: "Sarg", hinweis: "Behältnis der anderen Art; Kann aus Holz, Metall oder anderen Materialen gefertigt sein" },
    { frage: "Ein Wächter der Weisheit, still und geduldig, birgt er Schätze, die nur durch das Öffnen seiner Tore offenbart werden. Was ist es?", loesung: "Buch" },
    { frage: "Ein ewiger Reisender, der keine Spuren hinterlässt, teilt die Zeit, doch bleibt unberührt von ihr. Was mag es sein? ", loesung: "Licht" },
    { frage: "Ein einsamer Reisender, der ohne Beine wandert, sich windet und schlängelt, stets vorwärts, nie rückwärts. Was mag es sein? ", loesung: "Fluss" },
    { frage: "Ein unsichtbarer Tänzer, der sich in der Wärme bewegt und im Kältehauch verschwindet, ein Spiel mit Licht und Schatten. Was ist es? ", loesung: "Dampf" },
    
  ];

  for (let i = 1; i <= 24; i++) {
    const tuerchen = document.createElement('div');
    tuerchen.className = 'tuerchen';
    tuerchen.setAttribute('data-day', i);
    
    const unlockDate = new Date(2023, 11, i); // Dezember ist Monat 11 (0-basiert in JavaScript)
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

    // Erstellt Striche für jeden Buchstaben im Lösungswort
    let wordLengthIndicators = '';
    for (let i = 0; i < raetsel.loesung.length; i++) {
      wordLengthIndicators += '<span class="letter-indicator">_</span>';
    }

    // Erstellt das Layout für das Rätsel
    tuerchen.innerHTML = `
      <div class="riddle">${raetsel.frage}</div>
      <div class="word-length-indicators">${wordLengthIndicators}</div>
      <input type="text" class="loesung-input" placeholder="Deine Antwort...">
      <button class="check-answer">Überprüfen</button>
      <button class="hint-button">Hinweis</button>
      <div class="feedback"></div>
    `;

    tuerchen.setAttribute('data-loesung', raetsel.loesung);

    const checkAnswerButton = tuerchen.querySelector('.check-answer');
    const input = tuerchen.querySelector('.loesung-input');
    const hintButton = tuerchen.querySelector('.hint-button');
    const hintModal = document.getElementById('hintModal');
    const hintModalText = document.querySelector('.modal-hint-text');
    const closeHintModalButton = document.getElementById('closeHintModal');

    // Event Listener für das Drücken der Enter-Taste
    input.addEventListener('keypress', function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        checkAnswerButton.click();
      }
    });

    // Event Listener für den Überprüfen-Button
    checkAnswerButton.addEventListener('click', () => checkAnswer(tuerchen));

    // Event Listener für den Hinweis-Button
    hintButton.addEventListener('click', () => {
      hintModalText.textContent = raetsel.hinweis; // Setzt den Hinweistext
      hintModal.style.display = 'block'; // Zeigt das Hinweis-Modal an
    });

    // Event Listener für den Schließen-Button im Hinweis-Modal
    closeHintModalButton.addEventListener('click', () => {
      hintModal.style.display = 'none'; // Schließt das Hinweis-Modal
    });
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

  // Schließt das Modal, wenn die Enter-Taste gedrückt wird
  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 13 && feedbackModal.style.display === "block") {
      feedbackModal.style.display = "none";
    }
  });
}



// Schließt das Modal, wenn außerhalb des Inhalts geklickt wird
window.onclick = function(event) {
  const feedbackModal = document.getElementById('feedbackModal');
  if (event.target == feedbackModal) {
    feedbackModal.style.display = "none";
  }
};

// Schließt das Modal, wenn die Enter-Taste gedrückt wird
window.addEventListener('keydown', function(event) {
  const feedbackModal = document.getElementById('feedbackModal');
  if (event.keyCode === 13 && feedbackModal.style.display === "block") {
    feedbackModal.style.display = "none";
  }
});



  // Event Listener für den "Okay"-Button im Feedback-Fenster
  document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('feedbackModal').style.display = 'none';
  });




