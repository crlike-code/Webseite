document.addEventListener("DOMContentLoaded", () => {
  const kalender = document.querySelector('.kalender');
  const currentDate = new Date();

  const raetsel = [
    { frage: "Ich habe einen Kopf und vier gesunde Beine; und wenn du mich oft siehst, erscheine ich ohne Kopf und ohne Beine. Ein wahrer Knäul: Rührst du mich an, so ist dein Finger übel dran.", loesung: "Igel" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    { frage: "Was lebt an Land und hat 6 Beine?", loesung: "Ameise" },
    // ... Fügen Sie hier 22 weitere Rätsel hinzu, um das Array zu vervollständigen
  ];

  for (let i = 1; i <= 24; i++) {
    const tuerchen = document.createElement('div');
    tuerchen.className = 'tuerchen';
    tuerchen.setAttribute('data-day', i);
    
    const unlockDate = new Date(2023, 10, i); // Dezember ist Monat 11 (0-basiert in JavaScript)
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
  const feedbackText = document.querySelector('.modal-feedback-text');
  const feedbackModal = document.getElementById('feedbackModal');
  
  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    feedbackText.textContent = 'Glückwunsch, die Lösung ist korrekt!';
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

