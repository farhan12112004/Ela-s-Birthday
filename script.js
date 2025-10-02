// ==== Romantic Text 1 (langsung jalan) ====
const romanticEl1 = document.getElementById("romantic-message-1");
if (romanticEl1) {
  const romanticText1 =
    "On this special day of yours,\n" +
    "I just want you to know that the world feels so much more beautiful\n" +
    "because you are in it.";

  typeText(romanticEl1, romanticText1, 40);
}

// ==== Romantic Text 2 (baru jalan ketika section 2 terlihat) ====
const romanticEl2 = document.getElementById("romantic-message-2");
if (romanticEl2) {
  const romanticText2 =
    "Heyy bub, look at this picture,\n" +
    "your smile is the kind of light that calms my heart even on the darkest days.\n" +
    "There’s a warmth in it that words could never capture,\n" +
    "as if the whole world pauses just to admire its beauty.\n" +
    "Your smile is not just a curve on your lips, but a happiness that spreads,\n" +
    "and a reason for me to always be grateful to have you in my life";

  let alreadyTyped = false;

  // Pakai IntersectionObserver supaya ketahuan kalau section masuk viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !alreadyTyped) {
          typeText(romanticEl2, romanticText2, 40);
          alreadyTyped = true; // biar tidak diulang
          observer.unobserve(entry.target); // stop observe
        }
      });
    },
    { threshold: 0.3 } // minimal 30% terlihat
  );

  observer.observe(romanticEl2);
}

// ==== Fungsi typing ====
function typeText(el, text, speed = 40) {
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
        setTimeout(step, speed * 8);
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
