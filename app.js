(() => {
  "use strict";

  const STORE = "deepavaliKondaattam";
  const defaultData = {
    articles: [],
    recipes: [
      { id: "adhirasam", name: "Adhirasam", category: "Sweets", image: "photo-1601050690117-94f5f6fa8bd7", time: "45 min", servings: 12, description: "A beloved jaggery and rice-flour sweet, crisp outside and soft within.", ingredients: ["2 cups rice flour", "1 cup jaggery", "1 tsp cardamom", "Oil for frying"], steps: "Dissolve jaggery into a thick syrup. Mix into rice flour with cardamom and rest the dough. Shape into discs and fry gently until golden." },
      { id: "murukku", name: "Murukku", category: "Savouries", image: "photo-1626132647523-66f5bf380027", time: "50 min", servings: 20, description: "Crispy, savoury spirals seasoned with sesame and cumin.", ingredients: ["2 cups rice flour", "½ cup urad dal flour", "1 tbsp sesame seeds", "Butter and salt"], steps: "Combine flours, sesame, salt and butter with water. Press into spirals and fry over medium heat until crisp." },
      { id: "laddu", name: "Laddu", category: "Sweets", image: "photo-1563805042-7684c019e1cb", time: "35 min", servings: 16, description: "Golden gram-flour balls with fragrant cardamom and roasted nuts.", ingredients: ["2 cups besan", "1 cup sugar", "¼ cup ghee", "Cardamom and cashews"], steps: "Roast besan in ghee until aromatic. Stir in sugar and cardamom, cool slightly, then shape into laddus." },
      { id: "mysore-pak", name: "Mysore Pak", category: "Sweets", image: "photo-1601050690597-df0568f70950", time: "30 min", servings: 12, description: "A rich, melt-in-the-mouth South Indian classic made with ghee.", ingredients: ["1 cup besan", "1½ cups sugar", "1 cup ghee", "½ cup water"], steps: "Make a one-string sugar syrup. Add sifted besan and warm ghee gradually, stirring until porous. Set in a greased tray and slice." },
      { id: "seedai", name: "Seedai", category: "Savouries", image: "photo-1604908176997-125f25cc6f3d", time: "60 min", servings: 30, description: "Crunchy rice-flour bites, a traditional festive snack.", ingredients: ["2 cups rice flour", "¼ cup roasted gram flour", "1 tbsp sesame", "Butter and salt"], steps: "Mix the flours, sesame, salt and butter. Roll into tiny balls, dry briefly, and fry in small batches until golden." },
      { id: "mixture", name: "Mixture", category: "Savouries", image: "photo-1565299624946-b28f40a0ae38", time: "40 min", servings: 10, description: "A lively mix of crunchy sev, boondi, nuts and curry leaves.", ingredients: ["2 cups besan", "1 cup rice flakes", "½ cup peanuts", "Curry leaves and chilli"], steps: "Prepare and fry sev and boondi. Fry peanuts, flakes and curry leaves separately. Toss everything with salt and spice." },
      { id: "gulab-jamun", name: "Gulab Jamun", category: "Sweets", image: "photo-1567188040759-fb8a883dc6d8", time: "45 min", servings: 15, description: "Soft milk dumplings soaked in rose and cardamom syrup.", ingredients: ["1 cup milk powder", "¼ cup flour", "2 tbsp ghee", "Sugar syrup and rose water"], steps: "Make a soft dough with milk powder, flour and ghee. Roll smooth balls and fry on low heat. Soak in warm rose-cardamom syrup." }
    ],
    products: [
      { id: "saree", name: "Kanchipuram silk saree", category: "Silk Sarees", price: "₹8,500", image: "photo-1610030469983-98e550d6193c", description: "Handloom-inspired silk in festive jewel tones.", link: "https://www.amazon.in/s?k=kanchipuram+silk+saree" },
      { id: "pavadai", name: "Pattu pavadai set", category: "Pattu Pavadai", price: "₹2,400", image: "photo-1591348278863-a8fb3887e2aa", description: "A bright traditional celebration outfit for little ones.", link: "https://www.amazon.in/s?k=pattu+pavadai+kids" },
      { id: "veshti", name: "Veshti & shirt set", category: "Men's Veshti & Shirts", price: "₹1,650", image: "photo-1603252110481-7ba873bf42ab", description: "A timeless festive pairing in soft cotton.", link: "https://www.amazon.in/s?k=veshti+shirt+set" },
      { id: "kids-wear", name: "Festive kidswear", category: "Kids Wear", price: "₹1,450", image: "photo-1591348278863-a8fb3887e2aa", description: "Colourful occasion wear for little festival explorers.", link: "https://www.amazon.in/s?k=indian+festive+wear+kids" },
      { id: "jewellery", name: "Temple jewellery", category: "Jewellery", price: "₹1,200", image: "photo-1617038220319-276d3cfab638", description: "Ornate gold-tone accents for the festive season.", link: "https://www.amazon.in/s?k=temple+jewellery" },
      { id: "accessories", name: "Festive hair accessories", category: "Traditional Accessories", price: "₹650", image: "photo-1535632066927-ab7c9ab60908", description: "A finishing touch inspired by traditional celebration style.", link: "https://www.amazon.in/s?k=traditional+indian+hair+accessories" }
    ],
    greetings: [
      { id: "wish-1", name: "Light, laughter and love", description: "May your home shine with happiness and your heart glow with hope. இனிய தீபாவளி நல்வாழ்த்துக்கள்!" },
      { id: "wish-2", name: "A sweet new beginning", description: "Wishing you a bright year filled with sweet moments, good health and togetherness." },
      { id: "wish-3", name: "ஒளி நிறைந்த தீபாவளி", description: "அன்பும் மகிழ்ச்சியும் உங்கள் இல்லத்தில் என்றும் நிறைந்திருக்கட்டும். இனிய தீபாவளி வாழ்த்துகள்!" }
    ],
    events: [],
    feedback: [],
    users: []
  };
  const page = document.body.dataset.page || "home";
  const app = document.getElementById("app");
  let toastTimer;

  function readData() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE) || "null");
      if (!saved || typeof saved !== "object") return structuredClone(defaultData);
      return Object.fromEntries(Object.keys(defaultData).map(key => [key, Array.isArray(saved[key]) ? saved[key] : structuredClone(defaultData[key])]));
    } catch (error) {
      console.error("Could not read festival content from local storage.", error);
      return structuredClone(defaultData);
    }
  }
  let data = readData();
  function saveData() {
    try { localStorage.setItem(STORE, JSON.stringify(data)); }
    catch (error) { notify("Could not save your changes. Check browser storage settings."); console.error("Could not save festival content.", error); }
  }
  function esc(value = "") {
    return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  }
  function imageUrl(id) {
    const value = String(id || "").trim();
    if (/^https:\/\/images\.unsplash\.com\//i.test(value)) return value;
    if (/^https?:\/\//i.test(value)) return value;
    return `https://images.unsplash.com/${encodeURIComponent(value || "photo-1606293926075-69a00dbfde81")}?auto=format&fit=crop&w=900&q=80`;
  }
  function notify(message) {
    let node = document.querySelector(".toast");
    if (!node) { node = document.createElement("div"); node.className = "toast"; document.body.append(node); }
    node.textContent = message;
    node.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove("show"), 2800);
  }
  const links = [["Home", "index.html", "home"], ["Stories", "history.html", "history"], ["Recipes", "recipes.html", "recipes"], ["Festive edit", "fashion.html", "fashion"], ["Pooja", "pooja.html", "pooja"], ["Wishes", "greetings.html", "greetings"], ["Celebrate safely", "safety.html", "safety"]];

  function shell(content) {
    const active = page;
    if (!document.getElementById("font-awesome")) {
      const icons = document.createElement("link");
      icons.id = "font-awesome";
      icons.rel = "stylesheet";
      icons.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
      document.head.append(icons);
    }
    app.innerHTML = `<div class="topline">A celebration of light, love & Tamil tradition</div>
      <header class="nav-wrap"><nav class="navbar" aria-label="Main navigation">
        <a class="brand" href="index.html"><span class="brand-mark">✦</span><span><strong>DEEPAVALI KONDAATTAM</strong><small>தமிழர் திருநாள் · FESTIVAL OF LIGHTS</small></span></a>
        <div class="navlinks" id="navlinks">${links.map(([label, href, id]) => `<a class="${active === id ? "active" : ""}" href="${href}">${label}</a>`).join("")}</div>
        <div class="nav-actions"><button class="icon-button" id="music-toggle" aria-label="Toggle festival music"><i class="fa-solid fa-music" aria-hidden="true"></i></button><button class="icon-button" id="language-toggle" aria-label="Switch language">அ / A</button><button class="icon-button" id="theme-toggle" aria-label="Toggle colour theme">◐</button><a class="button small login-link" href="login.html">Sign in</a><button class="menu-button" id="menu-toggle" aria-label="Open menu">☰</button></div>
      </nav></header>
      <main>${content}</main>
      <footer class="footer"><div class="container"><div class="footer-main"><a class="brand" href="index.html"><span class="brand-mark">✦</span><span><strong>DEEPAVALI KONDAATTAM</strong><small>ROOTED IN TRADITION · MADE FOR EVERYONE</small></span></a><div class="footer-links"><a href="history.html">Our stories</a><a href="recipes.html">Recipes</a><a href="contact.html">Contact</a><a href="admin.html">Content studio</a></div></div><div class="copyright">© ${new Date().getFullYear()} Deepavali Kondaattam · Made with warmth and light.</div></div></footer>
      <button class="backtop" id="backtop" aria-label="Back to top">↑</button>`;
    wireCommon();
  }
  function wireCommon() {
    if (document.cookie.split("; ").includes("dk_theme=light")) document.body.classList.add("light");
    document.getElementById("menu-toggle").addEventListener("click", () => document.getElementById("navlinks").classList.toggle("open"));
    document.getElementById("theme-toggle").addEventListener("click", () => {
      document.body.classList.toggle("light");
      const theme = document.body.classList.contains("light") ? "light" : "dark";
      document.cookie = `dk_theme=${theme}; max-age=31536000; path=/; SameSite=Lax`;
    });
    document.getElementById("backtop").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    document.getElementById("language-toggle").addEventListener("click", event => {
      const tamil = document.documentElement.lang !== "ta";
      document.documentElement.lang = tamil ? "ta" : "en";
      event.currentTarget.textContent = tamil ? "A / அ" : "அ / A";
      document.querySelectorAll("[data-ta][data-en]").forEach(node => { node.textContent = tamil ? node.dataset.ta : node.dataset.en; });
      notify(tamil ? "தமிழில் பார்க்கிறீர்கள்" : "Showing English");
    });
    let audioContext = null, musicTimer = null, noteIndex = 0;
    document.getElementById("music-toggle").addEventListener("click", async event => {
      if (musicTimer) {
        clearInterval(musicTimer); musicTimer = null;
        if (audioContext && audioContext.state !== "closed") await audioContext.close();
        audioContext = null; event.currentTarget.setAttribute("aria-label", "Turn festival music on"); notify("Festival music off."); return;
      }
      const AudioContextType = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextType) { notify("Audio is not supported in this browser."); return; }
      audioContext = new AudioContextType();
      if (audioContext.state === "suspended") await audioContext.resume();
      const melody = [523.25, 659.25, 783.99, 659.25, 587.33, 783.99];
      const playNote = () => {
        if (!audioContext || audioContext.state === "closed") return;
        const oscillator = audioContext.createOscillator(), gain = audioContext.createGain();
        oscillator.type = "sine"; oscillator.frequency.value = melody[noteIndex++ % melody.length];
        gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.045, audioContext.currentTime + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.5);
        oscillator.connect(gain); gain.connect(audioContext.destination);
        oscillator.start(); oscillator.stop(audioContext.currentTime + 0.52);
      };
      playNote(); musicTimer = setInterval(playNote, 650);
      event.currentTarget.setAttribute("aria-label", "Turn festival music off"); notify("Festival music on.");
    });
    if (!sessionStorage.getItem("dkSeenCookie") && !document.cookie.includes("dk_consent=accepted")) {
      const banner = document.createElement("aside");
      banner.className = "cookie-banner";
      banner.innerHTML = `<strong>Your festival, your preferences</strong><p>We use local storage and cookies to remember settings and demo content on this device.</p><button class="button small" id="cookie-ok">Got it</button> <button class="button small secondary" id="cookie-no">Not now</button>`;
      document.body.append(banner);
      banner.querySelector("#cookie-ok").addEventListener("click", () => { document.cookie = "dk_consent=accepted; max-age=31536000; path=/; SameSite=Lax"; sessionStorage.setItem("dkSeenCookie", "1"); banner.remove(); });
      banner.querySelector("#cookie-no").addEventListener("click", () => { sessionStorage.setItem("dkSeenCookie", "1"); banner.remove(); });
    }
  }
  function pageHero(eyebrow, title, description) {
    return `<section class="page-hero"><div class="container page-heading"><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${description}</p></div></section>`;
  }
  function card(item, type) {
    return `<article class="card"><img class="card-image" src="${esc(imageUrl(item.image))}" alt="${esc(item.name)}" loading="lazy"><div class="card-body"><span class="tag">${esc(item.category || type)}</span><h3>${esc(item.name)}</h3><p>${esc(item.description || "")}</p>${type === "product" ? `<div class="recipe-meta"><b>${esc(item.price || "Explore")}</b><a class="text-link" href="${esc(item.link || "#")}" target="_blank" rel="noopener noreferrer">Shop options ↗</a></div>` : `<span class="text-link">${esc(item.time || "A festive favourite")} →</span>`}</div></article>`;
  }
  function homePage() {
    const featured = data.recipes.slice(0, 3).map(item => card(item, "recipe")).join("");
    const hero = `<section class="hero"><canvas id="fireworks" aria-hidden="true"></canvas><div class="container hero-content"><div class="eyebrow">A Tamil celebration of light</div><h1 data-ta="இனிய தீபாவளி நல்வாழ்த்துக்கள்!" data-en="Wishing you a joyful Deepavali!">இனிய தீபாவளி நல்வாழ்த்துக்கள்!</h1><p>Gather close, light a diya, share something sweet. Celebrate the stories, flavours and traditions that make this season glow.</p><div class="hero-actions"><a class="button" href="history.html">Explore the festival <span>↗</span></a><a class="button secondary" href="greetings.html">Send a greeting</a></div><div class="hero-countdown">COUNTING DOWN TO DEEPAVALI <div class="countdown" id="countdown"></div></div></div></section>`;
    shell(`${hero}<section class="section"><div class="container"><div class="section-head"><div><div class="eyebrow">Celebrate every little ritual</div><h2>Make room for wonder.</h2><p>From the first lamp at dusk to one more sweet after dinner, find inspiration for your celebration.</p></div><a class="text-link" href="history.html">Discover our stories →</a></div><div class="grid three"><a class="card" href="history.html"><img class="card-image" src="${imageUrl("photo-1606293926075-69a00dbfde81")}" alt="Traditional festive lamps"><div class="card-body"><span class="tag">OUR HERITAGE</span><h3>Stories that shine</h3><p>Explore the meanings and memories behind Deepavali.</p></div></a><a class="card" href="recipes.html"><img class="card-image" src="${imageUrl("photo-1601050690117-94f5f6fa8bd7")}" alt="Festive Indian sweets"><div class="card-body"><span class="tag">FROM OUR KITCHEN</span><h3>Pass the mithai</h3><p>Bring family favourites to your festive table.</p></div></a><a class="card" href="pooja.html"><img class="card-image" src="${imageUrl("photo-1606293926075-69a00dbfde81")}" alt="Lit oil lamp"><div class="card-body"><span class="tag">LIGHT THE EVENING</span><h3>Make it meaningful</h3><p>A gentle guide to pooja traditions and preparation.</p></div></a></div></div></section>
    <section class="section"><div class="container split"><img src="${imageUrl("photo-1606293926075-69a00dbfde81")}" alt="A warm glow of festive lights" loading="lazy"><div><div class="eyebrow">Little joys, shared</div><h2>Tradition feels like home.</h2><p>Deepavali brings together generations through rituals, new clothes, visits with loved ones and the irresistible scent of festive cooking. However you celebrate, may there be a little more light in your home.</p><a class="button" href="pooja.html">Explore the traditions</a></div></div></section>
    <section class="section"><div class="container"><div class="section-head"><div><div class="eyebrow">Made for sharing</div><h2>From the festive kitchen</h2><p>Beloved classics to make, share and enjoy together.</p></div><a class="text-link" href="recipes.html">See all recipes →</a></div><div class="grid three">${featured}</div></div></section>
    ${data.events.length ? `<section class="section"><div class="container"><div class="eyebrow">Around the community</div><h2>Festival happenings</h2><div class="grid three">${data.events.map(item => `<article class="alert-card"><h3>${esc(item.name)}</h3><p>${esc(item.description)}</p><span class="tag">${esc(item.category || "Event")}</span></article>`).join("")}</div></div></section>` : ""}
    <section class="section"><div class="container feature-band split"><div><div class="eyebrow">A brighter celebration</div><h2>Keep the joy. Leave less behind.</h2><p>Choose safer, quieter ways to celebrate and help the air stay clean for everyone.</p><a class="text-link" href="safety.html">Read our safety guide →</a></div><div class="wish-card"><span class="eyebrow">உங்கள் அன்புக்குரியவர்களுக்கு</span><h2>Let your wishes travel with light.</h2><a class="button" href="greetings.html">Create a greeting</a></div></div></section>`);
    startCountdown();
    startFireworks();
  }
  function startCountdown() {
    const dates = ["2026-11-08T00:00:00+05:30", "2027-10-29T00:00:00+05:30", "2028-11-17T00:00:00+05:30", "2029-11-05T00:00:00+05:30", "2030-10-26T00:00:00+05:30"];
    const target = dates.map(date => new Date(date)).find(date => date.getTime() > Date.now()) || new Date("2031-11-14T00:00:00+05:30");
    const update = () => {
      const node = document.getElementById("countdown");
      if (!node) return;
      const remaining = Math.max(0, target - Date.now());
      const units = [["Days", 86400000], ["Hours", 3600000], ["Mins", 60000], ["Secs", 1000]];
      let left = remaining;
      node.innerHTML = units.map(([label, size]) => { const count = Math.floor(left / size); left %= size; return `<div class="time-box"><b>${String(count).padStart(2, "0")}</b><span>${label}</span></div>`; }).join("");
    };
    update();
    setInterval(update, 1000);
  }
  function startFireworks() {
    const canvas = document.getElementById("fireworks");
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w, h, particles = [];
    const resize = () => { w = canvas.width = canvas.clientWidth * devicePixelRatio; h = canvas.height = canvas.clientHeight * devicePixelRatio; };
    resize(); window.addEventListener("resize", resize);
    const burst = () => {
      if (particles.length < 190) {
        const x = Math.random() * w, y = Math.random() * h * .62, color = Math.random() > .5 ? "#f5c46b" : "#e87946";
        for (let i = 0; i < 32; i++) { const angle = Math.PI * 2 * i / 32; const speed = (1 + Math.random() * 2) * devicePixelRatio; particles.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 45 + Math.random() * 30, color }); }
      }
    };
    setInterval(burst, 1550);
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      particles = particles.filter(p => p.life-- > 0);
      particles.forEach(p => { p.x += p.vx; p.y += p.vy; p.vy += .018 * devicePixelRatio; ctx.globalAlpha = Math.min(1, p.life / 35); ctx.fillStyle = p.color; ctx.fillRect(p.x, p.y, 2 * devicePixelRatio, 2 * devicePixelRatio); });
      ctx.globalAlpha = 1; requestAnimationFrame(draw);
    };
    draw();
  }
  function historyPage() {
    const stories = [
      ["The triumph of Narakasura", "Across many South Indian homes, Deepavali begins before sunrise with an oil bath, new clothes and the joyful memory of good overcoming harm. The story of Narakasura is told as a reminder that compassion and courage can dispel darkness.", "photo-1606293926075-69a00dbfde81"],
      ["A homecoming remembered", "The return of Rama, Sita and Lakshmana to Ayodhya is another cherished story associated with Diwali. Lamps welcomed them home, and the light became a symbol of hope, belonging and a new beginning.", "photo-1606293926075-69a00dbfde81"],
      ["Deepavali in Tamil homes", "Families wake early, share nalangu and a warm oil bath, wear new clothes, visit the temple and exchange homemade sweets. Every household has its own treasured order of rituals—and its own favourite snack.", "photo-1601050690117-94f5f6fa8bd7"]
    ];
    shell(`${pageHero("Stories & traditions", "Every lamp carries a story.", "Explore the many meanings of Deepavali, and the Tamil traditions that bring families together year after year.")}<section class="section"><div class="container"><div class="grid three">${stories.map(([title, description, image]) => `<article class="card"><img class="card-image" src="${imageUrl(image)}" alt="${esc(title)}" loading="lazy"><div class="card-body"><span class="tag">FESTIVAL STORY</span><h3>${title}</h3><p>${description}</p></div></article>`).join("")}${data.articles.map(item => `<article class="card"><img class="card-image" src="${esc(imageUrl(item.image))}" alt="${esc(item.name)}" loading="lazy"><div class="card-body"><span class="tag">${esc(item.category || "COMMUNITY STORY")}</span><h3>${esc(item.name)}</h3><p>${esc(item.description)}</p></div></article>`).join("")}</div></div></section><section class="section"><div class="container split"><div><div class="eyebrow">A day of togetherness</div><h2>Our traditions, our way.</h2><p>In Tamil Nadu, Deepavali often begins before dawn. An oil bath, a new outfit, prayers and a table full of sweets and savouries welcome the day. Families visit elders, share food with neighbours and make time for one another.</p><p>Practices vary from home to home. Keep the rituals that feel meaningful to your family, and make space for new memories too.</p></div><img src="${imageUrl("photo-1606293926075-69a00dbfde81")}" alt="A traditional lamp glowing in the evening" loading="lazy"></div></section>`);
  }
  function recipesPage() {
    const recipes = data.recipes;
    shell(`${pageHero("From our festive kitchen", "Recipes made for sharing.", "Seven festive favourites, with ingredients and easy-to-follow steps. Use the serving calculator to scale a recipe for your table.")}<section class="section"><div class="container"><div class="toolbar"><input class="field" id="recipe-search" type="search" placeholder="Search a recipe…"><select class="select" id="recipe-filter" aria-label="Filter by category"><option value="">All recipes</option><option>Sweets</option><option>Savouries</option></select></div><div class="grid three" id="recipe-grid">${recipeCards(recipes)}</div><p id="recipe-empty" hidden>No recipes found. Try another search.</p></div></section>`);
    const search = document.getElementById("recipe-search"), filter = document.getElementById("recipe-filter");
    const refresh = () => { const q = search.value.toLowerCase(), cat = filter.value; const matches = data.recipes.filter(item => `${item.name} ${item.description}`.toLowerCase().includes(q) && (!cat || item.category === cat)); document.getElementById("recipe-grid").innerHTML = recipeCards(matches); document.getElementById("recipe-empty").hidden = matches.length > 0; wireRecipes(); };
    search.addEventListener("input", refresh); filter.addEventListener("change", refresh); wireRecipes();
  }
  function recipeCards(items) {
    return items.map(item => `<article class="card recipe-card" data-id="${esc(item.id)}"><img class="card-image" src="${esc(imageUrl(item.image))}" alt="${esc(item.name)}" loading="lazy"><div class="card-body"><span class="tag">${esc(item.category || "Festival favourite")}</span><h3>${esc(item.name)}</h3><p>${esc(item.description || "")}</p><div class="recipe-meta"><span>◷ ${esc(item.time || "30 min")}</span><span>${Number(item.servings) || 4} servings</span></div>    <button class="text-link recipe-toggle" type="button">View recipe +</button><div class="recipe-detail"><label class="quantity">Servings <input class="field servings" type="number" min="1" max="100" value="${Number(item.servings) || 4}"></label><strong>Ingredients</strong><ul class="ingredient-list" data-base-servings="${Number(item.servings) || 4}">${(item.ingredients || []).map(x => `<li data-ingredient="${esc(x)}">${esc(x)}</li>`).join("")}</ul><strong>Method</strong><p>${esc(item.steps || "Prepare with care and enjoy together.")}</p></div></div></article>`).join("");
  }
  function wireRecipes() {
    document.querySelectorAll(".recipe-toggle").forEach(button => button.addEventListener("click", () => { const card = button.closest(".recipe-card"); card.classList.toggle("open"); button.textContent = card.classList.contains("open") ? "Hide recipe −" : "View recipe +"; }));
    document.querySelectorAll(".servings").forEach(input => input.addEventListener("input", () => {
      const servings = Math.min(100, Math.max(1, Number(input.value) || 1));
      const list = input.closest(".recipe-detail").querySelector(".ingredient-list");
      const ratio = servings / Number(list.dataset.baseServings || 1);
      list.querySelectorAll("li").forEach(item => {
        const original = item.dataset.ingredient;
        const amount = original.match(/^(\d+(?:\.\d+)?|½|¼|¾|⅓|⅔)(.*)$/);
        if (!amount) { item.textContent = original; return; }
        const fraction = { "½": .5, "¼": .25, "¾": .75, "⅓": 1 / 3, "⅔": 2 / 3 };
        const scaled = (fraction[amount[1]] ?? Number(amount[1])) * ratio;
        item.textContent = `${Number(scaled.toFixed(2))}${amount[2]}`;
      });
    }));
  }
  function fashionPage() {
    const categories = [...new Set(data.products.map(item => item.category).filter(Boolean))];
    shell(`${pageHero("The festive edit", "Dress for the light.", "A little inspiration for celebration day, from handloom silks and traditional sets to the details that make an outfit yours.")}<section class="section"><div class="container"><div class="toolbar"><input class="field" id="fashion-search" type="search" placeholder="Search the festive edit…"><select class="select" id="fashion-filter" aria-label="Filter products"><option value="">All categories</option>${categories.map(x => `<option>${esc(x)}</option>`).join("")}</select></div><div class="grid four" id="fashion-grid">${productCards(data.products)}</div><p id="fashion-empty" hidden>No products match your search.</p><p class="copyright">Product imagery and prices are sample content. Shopping links open external retailer searches.</p></div></section>`);
    const search = document.getElementById("fashion-search"), filter = document.getElementById("fashion-filter");
    const refresh = () => { const q = search.value.toLowerCase(), cat = filter.value; const matches = data.products.filter(item => `${item.name} ${item.description}`.toLowerCase().includes(q) && (!cat || item.category === cat)); document.getElementById("fashion-grid").innerHTML = productCards(matches); document.getElementById("fashion-empty").hidden = matches.length > 0; };
    search.addEventListener("input", refresh); filter.addEventListener("change", refresh);
  }
  function productCards(items) {
    return items.map(item => `<article class="card"><img class="card-image" src="${esc(imageUrl(item.image))}" alt="${esc(item.name)}" loading="lazy"><div class="card-body"><span class="tag">${esc(item.category || "Festive edit")}</span><h3>${esc(item.name)}</h3><p>${esc(item.description || "")}</p><div class="recipe-meta"><b>${esc(item.price || "See options")}</b><a class="text-link" href="${esc(safeLink(item.link))}" target="_blank" rel="noopener noreferrer">Shop ↗</a></div></div></article>`).join("");
  }
  function safeLink(value) { try { const url = new URL(value || "#", location.href); return ["http:", "https:"].includes(url.protocol) ? url.href : "#"; } catch { return "#"; } }
  function safetyPage() {
    const tips = [
      ["Choose a safer celebration", "Opt for community displays, lamps, rangoli and time with loved ones. If fireworks are part of your celebration, follow local laws and use only approved products."],
      ["Keep a clear, adult-supervised space", "Celebrate outdoors in an open area, away from vehicles, dry leaves, balconies and power lines. Keep children at a safe distance and under close adult supervision."],
      ["Be prepared", "Keep a bucket of water or sand nearby. Wear close-fitting cotton clothing and closed shoes. Never hold a lit firework or approach one that did not ignite."],
      ["Protect people, pets and the planet", "Avoid loud fireworks near infants, older adults, animals and people sensitive to noise. Prefer low-smoke choices, dispose of waste responsibly and respect local quiet hours."]
    ];
    shell(`${pageHero("A thoughtful Deepavali", "Celebrate with care.", "Safety, fresh air and a little consideration help everyone enjoy the festival. Follow local guidance and use fireworks only where permitted.")}<section class="section"><div class="container grid two">${tips.map(([title, text]) => `<article class="alert-card"><span class="eyebrow">GOOD TO KNOW</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></section><section class="section"><div class="container feature-band"><div class="eyebrow">If someone is burned</div><h2>Cool first. Get medical help.</h2><p>For a minor burn, cool the area under clean, cool running water for 20 minutes. Do not apply ice, oils or creams, and do not burst blisters. Cover loosely with a clean dressing. Seek emergency medical care for serious burns, eye injuries, breathing problems or any urgent concern. Follow your local emergency guidance.</p></div></section><section class="section"><div class="container split"><img src="${imageUrl("photo-1606293926075-69a00dbfde81")}" alt="A calm, lamp-lit celebration" loading="lazy"><div><div class="eyebrow">A little more mindful</div><h2>Less noise. More joy.</h2><p>Air and noise pollution can affect neighbours, animals and people with health conditions. Choose a celebration that makes room for everyone: share sweets, decorate together, light diyas safely and keep the night peaceful.</p><a class="button" href="greetings.html">Share a thoughtful wish</a></div></div></section>`);
  }
  function greetingsPage() {
    const defaultWish = "இனிய தீபாவளி நல்வாழ்த்துக்கள்!";
    shell(`${pageHero("A little note, a lot of love", "Send a little light.", "Choose a wish, add a name and make a simple greeting to share with someone you love.")}<section class="section"><div class="container split"><div class="form-card" style="margin:0"><label class="eyebrow" for="wish-name">WHO IS IT FOR?</label><input id="wish-name" class="field" maxlength="40" placeholder="Enter a name"><label class="eyebrow" for="wish-message">YOUR MESSAGE</label><select class="select field" id="wish-message">${data.greetings.map((item, index) => `<option value="${esc(item.description)}">${esc(item.name || `Wish ${index + 1}`)}</option>`).join("")}<option value="${defaultWish}">Tamil Deepavali greeting</option></select><button class="button" id="make-wish">Preview your greeting</button><div class="hero-actions"><button class="button secondary small" id="copy-wish">Copy message</button><button class="button secondary small" id="share-wish">Share on WhatsApp</button><button class="button secondary small" id="download-wish">Download card</button></div></div><div class="wish-card" id="wish-preview"><span class="eyebrow">WITH LOVE & LIGHT</span><h2 id="wish-preview-title">${defaultWish}</h2><p id="wish-preview-message">May joy find its way to your home and stay all year long.</p><strong id="wish-preview-name"></strong></div></div></section><section class="section"><div class="container"><div class="eyebrow">Wishes for everyone</div><h2>Words to pass along.</h2><div class="grid three">${data.greetings.map(item => `<article class="alert-card"><span class="tag">A FESTIVE WISH</span><h3>${esc(item.name)}</h3><p>${esc(item.description)}</p><button class="text-link use-wish" data-wish="${esc(item.description)}" type="button">Use this wish →</button></article>`).join("")}</div></div></section><canvas id="greeting-canvas" class="sr-only" width="1000" height="600"></canvas>`);
    const name = document.getElementById("wish-name"), message = document.getElementById("wish-message");
    const getMessage = () => `${message.value}${name.value.trim() ? ` — ${name.value.trim()}` : ""}`;
    const update = () => { document.getElementById("wish-preview-title").textContent = name.value.trim() ? `இனிய தீபாவளி, ${name.value.trim()}!` : defaultWish; document.getElementById("wish-preview-message").textContent = message.value; document.getElementById("wish-preview-name").textContent = name.value.trim() ? `With love, ${name.value.trim()}` : ""; };
    document.getElementById("make-wish").addEventListener("click", update);
    name.addEventListener("input", update); message.addEventListener("change", update);
    document.querySelectorAll(".use-wish").forEach(button => button.addEventListener("click", () => { message.value = button.dataset.wish; update(); document.getElementById("wish-preview").scrollIntoView({ behavior: "smooth", block: "center" }); }));
    document.getElementById("copy-wish").addEventListener("click", async () => { try { await navigator.clipboard.writeText(getMessage()); notify("Greeting copied."); } catch { notify("Copy is unavailable in this browser."); } });
    document.getElementById("share-wish").addEventListener("click", () => window.open(`https://wa.me/?text=${encodeURIComponent(getMessage())}`, "_blank", "noopener,noreferrer"));
    document.getElementById("download-wish").addEventListener("click", () => {
      const canvas = document.getElementById("greeting-canvas"), ctx = canvas.getContext("2d");
      if (!ctx) { notify("Could not create the greeting card."); return; }
      const gradient = ctx.createLinearGradient(0, 0, 1000, 600); gradient.addColorStop(0, "#241337"); gradient.addColorStop(1, "#71384d"); ctx.fillStyle = gradient; ctx.fillRect(0, 0, 1000, 600);
      ctx.strokeStyle = "#f5c46b"; ctx.lineWidth = 5; ctx.strokeRect(28, 28, 944, 544);
      ctx.textAlign = "center"; ctx.fillStyle = "#f5c46b"; ctx.font = "42px serif"; ctx.fillText("✦  DEEPAVALI  ✦", 500, 140);
      ctx.fillStyle = "#fff8eb"; ctx.font = 'bold 42px "Noto Sans Tamil", sans-serif'; ctx.fillText(`இனிய தீபாவளி${name.value.trim() ? `, ${name.value.trim()}` : ""}!`, 500, 280, 880);
      ctx.font = "24px sans-serif"; wrapText(ctx, message.value, 500, 355, 780, 38);
      const link = document.createElement("a"); link.download = "deepavali-greeting.png"; link.href = canvas.toDataURL("image/png"); link.click();
    });
  }
  function wrapText(ctx, text, x, y, maxWidth, lineHeight) { const words = String(text).split(/\s+/); let line = "", row = 0; words.forEach(word => { const next = `${line}${word} `; if (ctx.measureText(next).width > maxWidth && line) { ctx.fillText(line.trim(), x, y + row++ * lineHeight); line = `${word} `; } else line = next; }); if (line) ctx.fillText(line.trim(), x, y + row * lineHeight); }
  function poojaPage() {
    shell(`${pageHero("A moment of gratitude", "Welcome light into your home.", "A gentle introduction to Lakshmi Pooja and some of the ways families prepare. Traditions and auspicious timings differ by region and calendar.")}<section class="section"><div class="container split"><div><div class="eyebrow">Lakshmi Pooja</div><h2>Make a little space for stillness.</h2><p>Many families offer prayers to Lakshmi for well-being and abundance during Deepavali. Clean and decorate a space, arrange a lamp and flowers, and gather with family for a moment of gratitude. Follow the customs and guidance of your family or local temple.</p><p>There is no single way to celebrate. Choose what is meaningful and comfortable for your household.</p></div><img src="${imageUrl("photo-1606293926075-69a00dbfde81")}" alt="Traditional diya for prayer" loading="lazy"></div></section><section class="section"><div class="container grid two"><div><div class="eyebrow">A simple sequence</div><h2>Prepare with care.</h2><ol class="steps"><li>Freshen the pooja space and place a clean cloth or tray.</li><li>Arrange the lamp, flowers, fruits and other offerings your family uses.</li><li>Light the lamp safely, away from fabric and decorations.</li><li>Offer prayers together, share a sweet and spend a quiet moment in gratitude.</li></ol></div><div class="feature-band"><div class="eyebrow">A gentle checklist</div><h3>Common pooja items</h3><p>Diya and oil · Flowers · Fruits · Incense, if appropriate · Kumkum and turmeric · Sweets or prasadam · A clean cloth</p><p>Optional items vary by family tradition. Keep flames attended and away from children, pets and anything flammable.</p><div class="tag">TIMINGS ARE REGION-SPECIFIC</div><p class="copyright">For a date-specific muhurat, check a trusted local Tamil panchangam or ask your temple. Auspicious times vary by location and calendar.</p></div></div></section>`);
  }
  function loginPage() {
    const isRegister = page === "register";
    shell(`${pageHero("Your corner of the celebration", isRegister ? "Join the celebration." : "Welcome back.", isRegister ? "Create a local demo profile to keep this experience personal on your device." : "Sign in to your local demo account.")}<section class="container"><form class="form-card" id="account-form"><h1>${isRegister ? "Create your account" : "Sign in"}</h1>${isRegister ? `<label for="account-name">Name</label><input class="field" id="account-name" required maxlength="60" autocomplete="name">` : ""}<label for="account-email">Email</label><input class="field" id="account-email" type="email" required autocomplete="email"><label for="account-password">Password</label><input class="field" id="account-password" type="password" required minlength="6" autocomplete="${isRegister ? "new-password" : "current-password"}"><button class="button" type="submit">${isRegister ? "Create account" : "Sign in"}</button><p class="copyright">Demo accounts are stored only in this browser and are not secure authentication.</p><p>${isRegister ? `Already joined? <a class="text-link" href="login.html">Sign in</a>` : `New here? <a class="text-link" href="register.html">Create an account</a>`}</p></form></section>`);
    document.getElementById("account-form").addEventListener("submit", event => {
      event.preventDefault();
      const email = document.getElementById("account-email").value.trim().toLowerCase(), password = document.getElementById("account-password").value;
      if (email === "admin@deepavali.local" && password === "deepavali2026") { sessionStorage.setItem("dkAdmin", "1"); location.href = "admin.html"; return; }
      if (isRegister) {
        if (data.users.some(user => user.email === email)) { notify("An account with that email already exists."); return; }
        data.users.push({ id: crypto.randomUUID(), name: document.getElementById("account-name").value.trim(), email, password });
        saveData(); sessionStorage.setItem("dkUser", email); notify("Account created on this device."); setTimeout(() => location.href = "index.html", 500);
      } else {
        const user = data.users.find(item => item.email === email && item.password === password);
        if (!user) { notify("Email or password is not correct."); return; }
        sessionStorage.setItem("dkUser", email); notify(`Welcome, ${user.name}!`); setTimeout(() => location.href = "index.html", 500);
      }
    });
  }
  const adminTypes = {
    articles: { label: "Stories", noun: "story", fields: [["name", "Title"], ["category", "Category"], ["description", "Story"], ["image", "Image URL or Unsplash photo ID"]] },
    recipes: { label: "Recipes", noun: "recipe", fields: [["name", "Recipe name"], ["category", "Category (Sweets / Savouries)"], ["description", "Description"], ["image", "Image URL or Unsplash photo ID"], ["time", "Cooking time"], ["servings", "Servings"], ["ingredients", "Ingredients (separate with semicolons)"], ["steps", "Cooking steps"]] },
    products: { label: "Fashion", noun: "product", fields: [["name", "Product name"], ["category", "Category"], ["description", "Description"], ["image", "Image URL or Unsplash photo ID"], ["price", "Price"], ["link", "Shopping URL"]] },
    greetings: { label: "Wishes", noun: "wish", fields: [["name", "Wish title"], ["description", "Wish message"]] },
    events: { label: "Events", noun: "event", fields: [["name", "Event name"], ["category", "Category / date"], ["description", "Details"], ["image", "Image URL or Unsplash photo ID"]] }
  };
  function adminPage() {
    if (!sessionStorage.getItem("dkAdmin")) {
      shell(`${pageHero("For festival editors", "Content studio.", "Sign in as an editor to manage stories, recipes, the festive edit, wishes and community events.")}<section class="container"><form class="form-card" id="admin-login"><h2>Editor sign in</h2><label>Email</label><input class="field" id="admin-email" type="email" required value="admin@deepavali.local"><label>Password</label><input class="field" id="admin-password" type="password" required placeholder="Enter editor password"><button class="button">Open content studio</button><p class="copyright">Demo access: admin@deepavali.local / deepavali2026. This client-side demo is not secure for production.</p></form></section>`);
      document.getElementById("admin-login").addEventListener("submit", event => {
        event.preventDefault();
        if (document.getElementById("admin-email").value.trim().toLowerCase() !== "admin@deepavali.local" || document.getElementById("admin-password").value !== "deepavali2026") { notify("Editor email or password is not correct."); return; }
        sessionStorage.setItem("dkAdmin", "1"); adminPage();
      });
      return;
    }
    shell(`${pageHero("Your local content studio", "Manage the celebration.", "Create and update demo content. Saved changes appear immediately on the matching public page in this browser.")}<section class="container admin-layout"><aside class="admin-tabs">${Object.entries(adminTypes).map(([key, config], index) => `<button type="button" data-tab="${key}" class="${index === 0 ? "active" : ""}">${config.label}</button>`).join("")}<button type="button" data-tab="feedback">Feedback</button><button type="button" id="admin-logout">Sign out</button></aside><div class="admin-panel" id="admin-panel"></div></section>`);
    let activeTab = "articles", editingId = null, query = "";
    const panel = document.getElementById("admin-panel");
    const renderPanel = () => {
      const total = data.articles.length + data.recipes.length + data.products.length + data.greetings.length + data.events.length;
      const stats = `<div class="stats"><div class="stat"><b>${total}</b><span>Content items</span></div><div class="stat"><b>${data.recipes.length}</b><span>Recipes</span></div><div class="stat"><b>${data.products.length}</b><span>Products</span></div><div class="stat"><b>${data.feedback.length}</b><span>Feedback</span></div></div>`;
      if (activeTab === "feedback") {
        panel.innerHTML = `${stats}<div class="section-head"><div><div class="eyebrow">Visitor messages</div><h2>Feedback</h2></div></div>${data.feedback.length ? `<div class="admin-list">${data.feedback.map(item => `<article class="admin-row"><div><strong>${esc(item.name)} · ${esc(item.email)}</strong><p>${esc(item.message)}</p></div><button class="button danger small" data-delete-feedback="${esc(item.id)}">Delete</button></article>`).join("")}</div>` : `<p>No feedback received yet.</p>`}`;
        panel.querySelectorAll("[data-delete-feedback]").forEach(button => button.addEventListener("click", () => { data.feedback = data.feedback.filter(item => item.id !== button.dataset.deleteFeedback); saveData(); renderPanel(); }));
        return;
      }
      const config = adminTypes[activeTab];
      const items = data[activeTab].filter(item => `${item.name} ${item.description || ""} ${item.category || ""}`.toLowerCase().includes(query));
      const editing = data[activeTab].find(item => item.id === editingId);
      panel.innerHTML = `${stats}<div class="section-head"><div><div class="eyebrow">Manage ${config.label.toLowerCase()}</div><h2>${config.label}</h2></div><button class="button small" id="add-item">Add ${config.noun}</button></div><input class="field" id="admin-search" type="search" placeholder="Search ${config.label.toLowerCase()}…" value="${esc(query)}"><form id="content-form" class="admin-form" ${editingId === null ? "hidden" : ""}><h3>${editing ? "Edit item" : `New ${config.noun}`}</h3>${config.fields.map(([key, label]) => {
        const value = editing ? (key === "ingredients" ? (editing.ingredients || []).join("; ") : editing[key] || "") : "";
        if (key === "description" || key === "steps" || key === "ingredients") return `<label class="${key === "steps" || key === "ingredients" ? "wide" : ""}">${label}<textarea class="field" name="${key}" rows="${key === "steps" ? 4 : 2}" ${key === "description" ? "required" : ""}>${esc(value)}</textarea></label>`;
        return `<label>${label}<input class="field" name="${key}" value="${esc(value || (key === "servings" ? "4" : ""))}" ${key === "name" ? "required" : ""} ${key === "servings" ? 'type="number" min="1" max="100"' : ""}></label>`;
      }).join("")}<div class="wide"><button class="button" type="submit">${editing ? "Save changes" : "Create item"}</button> <button class="button secondary" id="cancel-edit" type="button">Cancel</button></div></form><div class="admin-list">${items.length ? items.map(item => `<article class="admin-row"><div><strong>${esc(item.name)}</strong><p>${esc(item.category || item.description || "")}</p></div><div class="admin-row-actions"><button class="button secondary small" data-edit="${esc(item.id)}">Edit</button><button class="button danger small" data-delete="${esc(item.id)}">Delete</button></div></article>`).join("") : "<p>No matching items.</p>"}</div>`;
      document.getElementById("add-item").addEventListener("click", () => { editingId = null; document.getElementById("content-form").hidden = false; document.getElementById("content-form").reset(); });
      document.getElementById("cancel-edit").addEventListener("click", () => { editingId = null; renderPanel(); });
      document.getElementById("admin-search").addEventListener("input", event => { query = event.target.value.toLowerCase(); renderPanel(); const input = document.getElementById("admin-search"); input.focus(); input.setSelectionRange(query.length, query.length); });
      document.getElementById("content-form").addEventListener("submit", event => {
        event.preventDefault();
        const values = Object.fromEntries(new FormData(event.currentTarget).entries());
        if (values.image && !/^https?:\/\//i.test(values.image) && !/^photo-[\w-]+$/.test(values.image)) { notify("Enter a full image URL or Unsplash photo ID."); return; }
        const record = { ...values, id: editingId || crypto.randomUUID() };
        if (activeTab === "recipes") { record.servings = Math.max(1, Number(values.servings) || 4); record.ingredients = (values.ingredients || "").split(";").map(item => item.trim()).filter(Boolean); }
        delete record.ingredientsText;
        const existing = data[activeTab].findIndex(item => item.id === record.id);
        if (existing < 0) data[activeTab].unshift(record); else data[activeTab][existing] = record;
        saveData(); editingId = null; notify(existing < 0 ? "Content added." : "Changes saved."); renderPanel();
      });
      panel.querySelectorAll("[data-edit]").forEach(button => button.addEventListener("click", () => { editingId = button.dataset.edit; renderPanel(); document.getElementById("content-form").hidden = false; document.getElementById("content-form").scrollIntoView({ behavior: "smooth", block: "center" }); }));
      panel.querySelectorAll("[data-delete]").forEach(button => button.addEventListener("click", () => { if (!window.confirm("Delete this content item?")) return; data[activeTab] = data[activeTab].filter(item => item.id !== button.dataset.delete); saveData(); renderPanel(); }));
    };
    document.querySelectorAll("[data-tab]").forEach(button => button.addEventListener("click", () => { activeTab = button.dataset.tab; editingId = null; query = ""; document.querySelectorAll("[data-tab]").forEach(item => item.classList.toggle("active", item === button)); renderPanel(); }));
    document.getElementById("admin-logout").addEventListener("click", () => { sessionStorage.removeItem("dkAdmin"); adminPage(); });
    renderPanel();
  }
  function contactPage() {
    shell(`${pageHero("We'd love to hear from you", "Get in touch.", "Share a memory, suggest a recipe or tell us how you celebrate. Your message stays in this browser demo.")}<section class="container"><form class="form-card" id="feedback-form"><label>Name</label><input class="field" name="name" required maxlength="80"><label>Email</label><input class="field" name="email" type="email" required maxlength="160"><label>Your message</label><textarea class="field" name="message" rows="5" required maxlength="1200"></textarea><button class="button">Send message</button></form></section>`);
    document.getElementById("feedback-form").addEventListener("submit", event => { event.preventDefault(); const values = Object.fromEntries(new FormData(event.currentTarget).entries()); data.feedback.unshift({ ...values, id: crypto.randomUUID(), created: new Date().toISOString() }); saveData(); event.currentTarget.reset(); notify("Thank you. Your message is saved on this device."); });
  }

  if (page === "home") homePage();
  else if (page === "history") historyPage();
  else if (page === "recipes") recipesPage();
  else if (page === "fashion") fashionPage();
  else if (page === "safety") safetyPage();
  else if (page === "greetings") greetingsPage();
  else if (page === "pooja") poojaPage();
  else if (page === "admin") adminPage();
  else if (page === "login" || page === "register") loginPage();
  else if (page === "contact") contactPage();
  else homePage();
})();
