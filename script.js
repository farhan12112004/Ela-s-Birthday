// ==== Kalimat Romantis dengan efek mengetik ====
const romanticEl = document.getElementById("countdown"); // pakai div lama countdown
if (romanticEl) {
  const romanticText =
    "On this special day of yours,\n" +
    "I just want you to know that the world feels so much more beautiful\n" +
    "because you are in it. 💖";

  typeText(romanticEl, romanticText, 28); // speed 28ms per karakter
}

// Fungsi typing text multiline
function typeText(el, text, speed = 35) {
  el.innerHTML = "";
  const caret = document.createElement("span");
  caret.className = "caret";
  el.appendChild(caret);

  let i = 0;
  function step() {
    if (i < text.length) {
      const ch = text[i++];
      if (ch === "\n") {
        caret.insertAdjacentHTML("beforebegin", "<br>");
        setTimeout(step, speed * 6);
      } else {
        caret.insertAdjacentText("beforebegin", ch);
        setTimeout(step, speed);
      }
    } else {
      caret.remove();
    }
  }
  step();
}

// ===== Ucapan penutup berganti =====
const closingEl = document.getElementById("closing-message");
if (closingEl) {
  const closingMessages = [
    "I’m so grateful to have you in my life, you are the most beautiful gift I could ever ask for 💖",
    "On your special day, my only wish is that happiness always follows every step you take 🌸",
    "Thank you for being the reason my days feel brighter and my heart feels complete ❤️",
    "May this year bring you endless love, blessings, and dreams coming true 🎉",
    "Your smile is my greatest peace, may it never fade and always light up the world 🥰",
    "I feel blessed every day just knowing you are mine, you are my sweetest miracle 💕",
    "No words can capture how thankful I am for you, but I promise to love you endlessly 💞",
    "With you, every moment feels like a blessing, may our journey be filled with joy ✨",
    "I pray that life always surrounds you with love, kindness, and endless happiness 🌹",
    "Every day with you is a reason to be grateful, and I hope we’ll share many more tomorrows 🌙",
    "You are the answer to my prayers, and I will always cherish you with all my heart 💍",
    "May your path ahead be filled with light, love, and everything your heart desires 🌟",
  ];

  let msgIndex = 0;
  closingEl.textContent = closingMessages[msgIndex];

  setInterval(() => {
    closingEl.style.opacity = 0;
    setTimeout(() => {
      msgIndex = (msgIndex + 1) % closingMessages.length;
      closingEl.textContent = closingMessages[msgIndex];
      closingEl.style.opacity = 1;
    }, 500);
  }, 8000);
}

// ===== Music Control =====
const musicBtn = document.getElementById("musicBtn");
const musicIcon = document.getElementById("musicIcon");
const musicStatus = document.getElementById("musicStatus");
const audio = document.getElementById("birthdayAudio");

if (musicBtn) {
  musicBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      musicStatus.textContent = "Jeda Musik";
      musicIcon.innerHTML = '<path d="M6 19h4.5V5H6v14zm7.5-14v14l7-7-7-7z"/>';
    } else {
      audio.pause();
      musicStatus.textContent = "Putar Musik";
      musicIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
    }
  });
}
