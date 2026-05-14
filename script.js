// ============ DATA ============
const TOURIST_DATA = {
  telangana: {
    hyderabad: [
      { name: "Jubilee Hills", desc: "Upscale neighborhood famed for its scenic roads, cafes and celebrity homes.",
        img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80" },
      { name: "KBR Park", desc: "A lush urban national park, perfect for morning walks and birdwatching.",
        img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80" },
      { name: "Peddamma Temple", desc: "A serene temple devoted to Goddess Peddamma, a spiritual landmark of Jubilee Hills.",
        img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80" },
      { name: "Banjara Hills", desc: "A posh district known for fine dining, boutiques and panoramic city views.",
        img: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80" },
      { name: "City Center Mall", desc: "A vibrant shopping hub with international brands, food courts and entertainment.",
        img: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80" },
      { name: "GVK One", desc: "An iconic luxury mall offering retail, cinema and gourmet experiences.",
        img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80" }
    ]
  },
  andhra: {
    visakhapatnam: [
      { name: "Vizag", desc: "A coastal city of golden beaches, lush hills and bustling harbors.",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" },
      { name: "RK Beach", desc: "Ramakrishna Beach — a vibrant promenade beloved for sunsets and street food.",
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80" },
      { name: "Kailasagiri", desc: "A hilltop park offering breathtaking views of the city and Bay of Bengal.",
        img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80" }
    ],
    tirupati: [
      { name: "Tirupati", desc: "A holy city at the foothills of Tirumala, drawing pilgrims worldwide.",
        img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80" },
      { name: "Tirumala Temple", desc: "The world-renowned shrine of Lord Venkateswara perched in the Tirumala Hills.",
        img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80" },
      { name: "Zoo Park", desc: "Sri Venkateswara Zoological Park — one of India's largest, home to diverse wildlife.",
        img: "https://images.unsplash.com/photo-1474314243412-cd4a89e0d1f9?auto=format&fit=crop&w=800&q=80" }
    ]
  }
};

const DISTRICTS = {
  telangana: [{ value: "hyderabad", label: "Hyderabad" }],
  andhra: [
    { value: "visakhapatnam", label: "Visakhapatnam" },
    { value: "tirupati", label: "Tirupati" }
  ]
};

// ============ NAVIGATION ============
const PROTECTED_PAGES = ["home", "explore", "about", "rating", "thanks"];

function showPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const target = document.getElementById("page-" + page);
  if (!target) return;

  // Auth gate
  if (PROTECTED_PAGES.includes(page) && !localStorage.getItem("ie_session")) {
    document.getElementById("page-login").classList.add("active");
    toggleChrome(false);
    return;
  }

  target.classList.add("active");
  toggleChrome(PROTECTED_PAGES.includes(page));
  window.scrollTo({ top: 0, behavior: "smooth" });
  document.getElementById("navLinks")?.classList.remove("open");
  document.querySelector(".nav-links")?.classList.remove("open");
}

function toggleChrome(show) {
  document.getElementById("navbar").classList.toggle("hidden", !show);
  document.getElementById("footer").classList.toggle("hidden", !show);
}

// ============ AUTH ============
function getUsers() {
  return JSON.parse(localStorage.getItem("ie_users") || "[]");
}
function saveUsers(users) {
  localStorage.setItem("ie_users", JSON.stringify(users));
}

document.addEventListener("DOMContentLoaded", () => {
  // Loader
  setTimeout(() => document.getElementById("loader").classList.add("hide"), 800);

  // If logged in, jump to home
  if (localStorage.getItem("ie_session")) {
    showPage("home");
  } else {
    showPage("login");
  }

  // Page-link delegation
  document.body.addEventListener("click", e => {
    const link = e.target.closest("[data-page]");
    if (link) {
      e.preventDefault();
      showPage(link.dataset.page);
    }
  });

  // Hamburger
  document.getElementById("hamburger").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("open");
  });

  // Logout
  document.getElementById("logoutBtn").addEventListener("click", e => {
    e.preventDefault();
    localStorage.removeItem("ie_session");
    showPage("login");
  });

  // Signup
  document.getElementById("signupForm").addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("signupEmail").value.trim().toLowerCase();
    const pwd = document.getElementById("signupPassword").value;
    const msg = document.getElementById("signupMsg");
    const users = getUsers();
    if (users.some(u => u.email === email)) {
      msg.textContent = "Account already exists. Please log in.";
      msg.className = "form-msg error";
      return;
    }
    users.push({ email, password: pwd });
    saveUsers(users);
    msg.textContent = "Account created! Redirecting to login...";
    msg.className = "form-msg success";
    setTimeout(() => {
      document.getElementById("signupForm").reset();
      msg.textContent = "";
      showPage("login");
    }, 1200);
  });

  // Login
  document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const pwd = document.getElementById("loginPassword").value;
    const msg = document.getElementById("loginMsg");
    const user = getUsers().find(u => u.email === email && u.password === pwd);
    if (!user) {
      msg.textContent = "Invalid credentials. Try again or sign up.";
      msg.className = "form-msg error";
      return;
    }
    localStorage.setItem("ie_session", email);
    msg.textContent = "Welcome back! Loading your journey...";
    msg.className = "form-msg success";
    setTimeout(() => {
      document.getElementById("loginForm").reset();
      msg.textContent = "";
      showPage("home");
    }, 800);
  });

  // State / district selectors
  const stateSel = document.getElementById("stateSelect");
  const distSel = document.getElementById("districtSelect");
  const grid = document.getElementById("placesGrid");

  stateSel.addEventListener("change", () => {
    const state = stateSel.value;
    distSel.innerHTML = '<option value="">-- Select District --</option>';
    grid.innerHTML = "";
    if (!state) { distSel.disabled = true; return; }
    DISTRICTS[state].forEach(d => {
      const opt = document.createElement("option");
      opt.value = d.value; opt.textContent = d.label;
      distSel.appendChild(opt);
    });
    distSel.disabled = false;
  });

  distSel.addEventListener("change", () => {
    const state = stateSel.value;
    const dist = distSel.value;
    grid.innerHTML = "";
    if (!state || !dist) return;
    const places = TOURIST_DATA[state]?.[dist] || [];
    places.forEach((p, i) => {
      const card = document.createElement("div");
      card.className = "place-card";
      card.style.animationDelay = (i * 0.08) + "s";
      card.innerHTML = `
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        <div class="place-info">
          <h3><i class="fa-solid fa-location-dot"></i> ${p.name}</h3>
          <p>${p.desc}</p>
        </div>`;
      grid.appendChild(card);
    });
  });

  // Rating
  const stars = document.querySelectorAll("#stars i");
  const ratingMsg = document.getElementById("ratingMsg");
  const messages = {
    1: "We're sorry to hear that. We'll do better!",
    2: "Thanks — we'll keep improving.",
    3: "Glad you enjoyed it! There's more to explore.",
    4: "Wonderful! Thank you for the kind rating.",
    5: "🌟 Incredible! Thank you for making our day!"
  };
  stars.forEach(star => {
    star.addEventListener("mouseover", () => paintStars(star.dataset.val, false));
    star.addEventListener("mouseout", () => paintStars(getCurrentRating(), true));
    star.addEventListener("click", () => {
      const v = star.dataset.val;
      localStorage.setItem("ie_rating", v);
      paintStars(v, true);
      ratingMsg.textContent = messages[v];
    });
  });
  function getCurrentRating() { return localStorage.getItem("ie_rating") || 0; }
  function paintStars(v, persistent) {
    stars.forEach(s => {
      const filled = +s.dataset.val <= +v;
      s.classList.toggle("active", filled);
      s.className = (filled ? "fa-solid" : "fa-regular") + " fa-star" + (filled ? " active" : "");
      s.dataset.val = s.dataset.val; // keep
    });
  }
  // Restore previous rating
  const saved = getCurrentRating();
  if (saved) { paintStars(saved, true); ratingMsg.textContent = messages[saved]; }
});
