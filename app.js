// ===== Anime YouTube Channels Database =====

const channelsData = [
  // Active Channels

  { name: "Billelarts", year_start: 2026, url: "https://www.youtube.com/@Billelarts", status: "مستمرة", image: "images/Billelarts.jpg" },
  { name: "Koe", year_start: 2023, url: "https://www.youtube.com/@Koe_i", status: "مستمرة", notes: "Man effect", image: "images/Ozeka.jpg" },
  { name: "القيصر", year_start: 2024, url: "https://www.youtube.com/@ddpo-7", status: "مستمرة", notes: "الفاروق Effect", image: "images/القيصر.jpg" },
  { name: "Shinify", year_start: 2019, url: "https://www.youtube.com/@shinify0", status: "مستمرة", notes: "الفاروق Effect", image: "images/Shinify.jpg" },
  { name: "الموقر", year_start: 2025, url: "https://www.youtube.com/@HonorableAR", status: "مستمرة", notes: "الفاروق Effect", image: "images/الموقر.jpg" },
  { name: "ODACCHI", year_start: 2019, url: "https://www.youtube.com/@ODACCHII", status: "مستمرة", image: "images/ODACCHI.jpg" },
  { name: "Trafi", year_start: 2018, url: "https://www.youtube.com/@trafi0", status: "مستمرة", image: "images/Trafi.jpg" },
  { name: "Mody", year_start: 2023, url: "https://youtube.com/@imody_777", status: "مستمرة", image: "images/Mody.jpg" },
  { name: "MoazTalks", year_start: 2025, url: "https://youtube.com/@moazfaroukyt", status: "مستمرة", notes: "الفاروق Effect", image: "images/MoazTalks.jpg" },
  { name: "AtyG", year_start: 2024, url: "https://youtube.com/@atyganime", status: "مستمرة", notes: "Ro3b effect", image: "images/AtyG.jpg" },
  { name: "Mad Critical", year_start: 2022, url: "https://www.youtube.com/@SoulaimaneYuan", status: "مستمرة", notes: "الفاروق Effect", image: "images/Mad Critical.jpg" },
  { name: "Onagy", year_start: 2023, url: "https://youtube.com/@ionagyi", status: "مستمرة", notes: "شرح المانجا بطريقة مرعبة نوعا ما", image: "images/Onagy.jpg" },
  { name: "IVEn", year_start: 2019, url: "https://youtube.com/@djeziri", status: "مستمرة", notes: "فلسفه", image: "images/IVEn.jpg" },
  { name: "Story to be told", year_start: 2022, url: "https://www.youtube.com/@storytobetold99", status: "مستمرة", notes: "تأدية صوتية فاخرة", image: "images/Story to be told.jpg" },
  { name: "Batman", year_start: 2019, url: "https://youtube.com/@battman-extra", status: "مستمرة", image: "images/Batman.jpg" },
  //{ name: "Kaizen", year_start: 2020, year_end: 2024, url: "https://youtube.com/@kaizennosekai", status: "متوقفة", notes: " الله يرحمه", image: "images/Kaizen.jpg" },
  { name: "Man", year_start: 2021, url: "https://youtube.com/@mann...", status: "مستمرة", image: "images/Man.jpg" },
  { name: "Safah9", year_start: 2015, url: "https://youtube.com/@safah9", status: "مستمرة", image: "images/safah9.jpg" },
  { name: "EriiTo", year_start: 2016, url: "https://youtube.com/@eriito", status: "مستمرة", image: "images/EriiTo.jpg" },
  { name: "Azam Senpai", year_start: 2023, url: "https://youtube.com/@azamsenpai", status: "مستمرة", image: "images/Azam Senpai.jpg" },
  { name: "Raiden Anime", year_start: 2025, url: "https://www.youtube.com/@Raiden_Anime", status: "مستمرة", notes: "الافضل", image: "images/Raiden Anime.jpg" },
  { name: "Planet B-612", year_start: 2015, url: "https://www.youtube.com/@PlanetB612", status: "مستمرة", notes: "مؤسس الحنكة", image: "images/Planet B-612.jpg" },
  { name: "AI Show", year_start: 2014, url: "https://www.youtube.com/@AiSHOWoo", status: "مستمرة", image: "images/AI Show.jpg" },
  { name: "Fahad Storm", year_start: 2020, url: "https://www.youtube.com/@fahadstorm", status: "مستمرة", notes: "انميات الطفولة", image: "images/Fahad Storm.jpg" },
  { name: "Anas Alhajj", year_start: 2021, url: "https://www.youtube.com/@anasalhajj", status: "مستمرة", image: "images/Anas Alhajj.jpg" },
  { name: "CUJO كوجو", year_start: 2025, url: "https://www.youtube.com/@Cu9jo", status: "مستمرة", notes: "Man effect على خفيف", image: "images/CUJO كوجو.jpg" },


  // Stopped Channels
  { name: "FunStation", year_start: 2019, year_end: 2025, url: "https://youtube.com/@funstation1996", status: "متوقفة", image: "images/FunStation.jpg" },
  { name: "Shamsimaru", year_start: 2021, year_end: 2024, url: "https://youtube.com/@shamsimaru", status: "متوقفة", image: "images/Shamsimaru.jpg" },
  { name: "DaiAnime", year_start: 2017, year_end: 2023, url: "https://youtube.com/@daianime", status: "متوقفة", image: "images/DaiAnime.jpg" },
  { name: "Bta3 Anime", year_start: 2022, year_end: 2025, url: "https://www.youtube.com/@Bta3AnimeOfficial", status: "متوقفة", image: "images/Bta3 Anime.jpg" },
  { name: "AKATSUKI", year_start: 2017, year_end: 2023, url: "https://www.youtube.com/@AKATSUKIPAIN", status: "متوقفة", image: "images/AKATSUKI.jpg" },
  { name: "BessiMan", year_start: 2015, year_end: 2017, url: "https://www.youtube.com/@bsmanime", status: "متوقفة", image: "images/BessiMan.jpg" },
  { name: "zSAUD", year_start: 2016, year_end: 2021, url: "https://www.youtube.com/@zSAUD", status: "متوقفة", image: "images/zSAUD.jpg" },
  { name: "Foxomar", year_start: 2016, year_end: 2025, url: "https://www.youtube.com/@Foxomar1", status: "متوقفة", image: "images/Foxomar.jpg" },
  { name: "otakuman", year_start: 2015, year_end: 2021, url: "https://www.youtube.com/@f3aris", status: "متوقفة", image: "images/otakuman.jpg" },
  { name: "Neet+", year_start: 2015, year_end: 2023, url: "https://youtube.com/@neetplus", status: "متوقفة", notes: "فيديو الاعتزال: youtu.be/6F1OckLWx3U", image: "images/Neet+.jpg" },
  { name: "Venox", year_start: 2016, year_end: 2025, url: "https://youtube.com/@venox2", status: "متوقفة", image: "images/Venox.jpg" },
  { name: "Shizakiii", year_start: 2018, year_end: 2023, url: "https://www.youtube.com/@shizakiii-9440", status: "متوقفة", image: "images/Shizakiii.jpg" },
  { name: "Anime Ghost", year_start: 2017, year_end: 2023, url: "https://youtube.com/@son-mohanad", status: "متوقفة", image: "images/Anime Ghost.jpg" },
  { name: "Ultra dragon", year_start: 2017, year_end: 2021, url: "https://youtube.com/@ultradragon", status: "متوقفة", image: "images/Ultra dragon.jpg" },
  { name: "AnimeWave", year_start: 2013, year_end: 2023, url: "https://youtube.com/@animewave", status: "متوقفة", image: "images/AnimeWave.jpg" },
  { name: "Sparrow", year_start: 2020, year_end: 2023, url: "https://youtube.com/@_sparrow", status: "متوقفة", image: "images/Sparrow.jpg" },
  { name: "RootQuest", year_start: 2016, year_end: 2020, url: "https://youtube.com/@rootquest", status: "متوقفة", image: "images/RootQuest.jpg" },
  { name: "ANIEX SENPAI", year_start: 2017, year_end: 2024, url: "https://youtube.com/@anex", status: "متوقفة", image: "images/ANIEX SENPAI.jpg" },
  { name: "Animecm", year_start: 2016, year_end: 2021, url: "https://youtube.com/@animecm", status: "متوقفة", image: "images/Animecm.jpg" },
  { name: "Kazekii", year_start: 2019, year_end: 2022, url: "https://youtube.com/@kazekii2986", status: "متوقفة", image: "images/Kazekii.jpg" },
  { name: "Anime station", year_start: 2014, year_end: 2024, url: "https://youtube.com/@animestationnaif", status: "متوقفة", image: "images/Anime station.jpg" },
  { name: "Hakase Box", year_start: 2013, year_end: 2024, url: "https://youtube.com/@hakaseboxsa", status: "متوقفة", image: "images/Hakase Box.jpg" },
  { name: "WeeklyDonut", year_start: 2015, year_end: 2017, url: "https://youtube.com/@weeklydonut6", status: "متوقفة", notes: "فيديو واحد بس خرافي على وقتها", image: "images/WeeklyDonut.jpg" },
  { name: "Qawaii Anime", year_start: 2018, year_end: 2023, url: "https://youtube.com/@qawaiianime", status: "متوقفة", image: "images/Qawaii Anime.jpg" },
  { name: "كلام انمي", year_start: 2015, year_end: 2023, url: "https://youtube.com/@saeedsamehx", status: "متوقفة", image: "images/كلام انمي.jpg" },
  { name: "Omar Ahmed", year_start: 2019, year_end: 2024, url: "https://www.youtube.com/@oaeg10/videos", status: "متوقفة", notes: "شبه متوقفة مع كم فيديو كل سنة", image: "images/Omar Ahmed.jpg" },
  { name: "Eighty Planet", year_start: 2017, year_end: 2022, url: "https://youtube.com/@eightyplanet", status: "متوقفة", image: "images/Eighty Planet.jpg" },
  { name: "XD-Ban", year_start: 2022, year_end: 2025, url: "https://youtube.com/@xd-ban", status: "متوقفة", notes: "Ro3b effect", image: "images/XD-Ban.jpg" },

  // Deleted Channels
  { name: "Ro3b", year_start: 2019, year_end: 2023, url: "https://www.youtube.com/channel/UCYpC0nU_Ol24jcFCohVU-Tw", status: "محذوفة", notes: "190K مشترك - القناة محذوفة", image: "images/Ro3b.jpg" },
  { name: "Fankatsu", year_start: 2015, year_end: 2021, url: "https://x.com/FankatsuCh", status: "محذوفة", image: "images/Fankatsu.png" },
  { name: "Sekai network", year_start: 2013, year_end: 2023, url: "https://www.youtube.com/user/SekaiNetwork", status: "محذوفة", image: "images/Sekai network.jpg" }
];

const additionalResources = [
  { title: "فيديو عن حذف قنوات الأنمي 2023", url: "https://youtu.be/85iX4MZ75ew" },
  { title: "قنوات الأنمي العربية 2016", url: "https://animemangacartonn.blogspot.com/2016/02/blog-post_16.html" },
  { title: "محتوى الأنمي سيتغير - أول شهر من 2021", url: "https://youtube.com/playlist?list=PLmHM5mW2JEOg0h2ZQYeWu1ucPcgITG7Qy" }
];

// ===== Color Palette for Avatars =====
const avatarColors = [
  'linear-gradient(135deg, #667eea, #764ba2)',
  'linear-gradient(135deg, #f093fb, #f5576c)',
  'linear-gradient(135deg, #4facfe, #00f2fe)',
  'linear-gradient(135deg, #43e97b, #38f9d7)',
  'linear-gradient(135deg, #fa709a, #fee140)',
  'linear-gradient(135deg, #a18cd1, #fbc2eb)',
  'linear-gradient(135deg, #fccb90, #d57eeb)',
  'linear-gradient(135deg, #e0c3fc, #8ec5fc)',
  'linear-gradient(135deg, #f5576c, #ff6a88)',
  'linear-gradient(135deg, #0ba360, #3cba92)',
  'linear-gradient(135deg, #6a11cb, #2575fc)',
  'linear-gradient(135deg, #ff9a9e, #fad0c4)',
  'linear-gradient(135deg, #a1c4fd, #c2e9fb)',
  'linear-gradient(135deg, #d4fc79, #96e6a1)',
  'linear-gradient(135deg, #84fab0, #8fd3f4)',
  'linear-gradient(135deg, #fbc2eb, #a6c1ee)',
];

// ===== State =====
let currentFilter = 'all';
let currentSort = 'date-asc';
let searchQuery = '';

// ===== DOM Elements =====
const totalCountEl = document.getElementById('totalCount');
const channelsGridEl = document.getElementById('channelsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.getElementById('searchInput');
const resultsInfoEl = document.getElementById('resultsInfo');
const statTotalEl = document.getElementById('statTotal');
const statActiveEl = document.getElementById('statActive');
const statStoppedEl = document.getElementById('statStopped');
const statDeletedEl = document.getElementById('statDeleted');
const resourcesGridEl = document.getElementById('resourcesGrid');

// Modal elements
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalAvatar = document.getElementById('modalAvatar');
const modalName = document.getElementById('modalName');
const modalStatus = document.getElementById('modalStatus');
const modalYear = document.getElementById('modalYear');
const modalYearRow = document.getElementById('modalYearRow');
const modalNotes = document.getElementById('modalNotes');
const modalNotesRow = document.getElementById('modalNotesRow');
const modalLink = document.getElementById('modalLink');
let modalImageLoader = null;

// ===== Helper: get color for a channel =====
function getAvatarColor(index) {
  return avatarColors[index % avatarColors.length];
}

// ===== Helper: get first letter(s) =====
function getInitials(name) {
  // For short names, use first letter; for multi-word names, use first letters of first two words
  const words = name.trim().split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return name.charAt(0).toUpperCase();
}

// ===== Helper: get status CSS class =====
function getStatusClass(status) {
  if (status === 'مستمرة') return 'active';
  if (status === 'متوقفة') return 'stopped';
  return 'deleted';
}

// ===== Initialize =====
function init() {
  updateStatistics();
  renderResources();
  applyFiltersAndSort();
  attachEventListeners();
  initParticles();
  initScrollReveal();
  initParallax();
}

// ===== Update Statistics (with animated counters) =====
function updateStatistics() {
  const total = channelsData.length;
  const active = channelsData.filter(ch => ch.status === 'مستمرة').length;
  const stopped = channelsData.filter(ch => ch.status === 'متوقفة').length;
  const deleted = channelsData.filter(ch => ch.status === 'محذوفة').length;

  totalCountEl.textContent = `${total} قناة`;

  // Set data-target for counter animation
  statTotalEl.setAttribute('data-target', total);
  statActiveEl.setAttribute('data-target', active);
  statStoppedEl.setAttribute('data-target', stopped);
  statDeletedEl.setAttribute('data-target', deleted);

  // Trigger counter animation when stats section is visible
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('statsSection');
  if (statsSection) statsObserver.observe(statsSection);
}

// ===== Animated Counter =====
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 1200;
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      counter.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  });
}

// ===== Render Channels as Circles =====
function renderChannels(channels) {
  if (channels.length === 0) {
    channelsGridEl.innerHTML = '<div class="empty-state">لا توجد قنوات تطابق البحث</div>';
    return;
  }

  channelsGridEl.innerHTML = channels.map((channel, index) => {
    const statusClass = getStatusClass(channel.status);
    const color = getAvatarColor(index);
    const initials = getInitials(channel.name);
    const dataIdx = channelsData.indexOf(channel);

    // If channel has an image, show it; otherwise show initials with gradient bg
    const avatarContent = channel.image
      ? `<img src="${channel.image}" alt="${channel.name}" onerror="this.remove(); this.parentElement.textContent='${initials}'; this.parentElement.style.background='${color}';">`
      : initials;

    // If image exists, don't set gradient bg (image covers it). Otherwise use gradient.
    const avatarStyle = channel.image ? '' : `style="background: ${color}"`;

    return `
      <div class="channel-circle" data-index="${dataIdx}" title="${channel.name}">
        <div class="channel-circle__avatar status--${statusClass}" ${avatarStyle}>
          ${avatarContent}
        </div>
        <span class="channel-circle__name">${channel.name}</span>
      </div>
    `;
  }).join('');

  // Attach click events to circles
  channelsGridEl.querySelectorAll('.channel-circle').forEach(circle => {
    circle.addEventListener('click', () => {
      const idx = parseInt(circle.dataset.index);
      openModal(channelsData[idx], idx);
    });
  });
}

// ===== Open Modal =====
function openModal(channel, index) {
  const statusClass = getStatusClass(channel.status);
  const color = getAvatarColor(index);
  const initials = getInitials(channel.name);

  // Show lightweight avatar content first, then swap in the image asynchronously.
  modalAvatar.style.background = color;
  modalAvatar.textContent = initials;

  if (channel.image) {
    const image = new Image();
    modalImageLoader = image;
    image.decoding = 'async';
    image.alt = channel.name;

    image.onload = () => {
      if (modalImageLoader !== image) return;
      modalAvatar.style.background = '';
      modalAvatar.replaceChildren(image);
    };

    image.onerror = () => {
      if (modalImageLoader !== image) return;
      modalAvatar.style.background = color;
      modalAvatar.textContent = initials;
    };

    image.src = channel.image;
  }

  // Name
  modalName.textContent = channel.name;

  // Status
  modalStatus.textContent = channel.status;
  modalStatus.className = 'modal__status status--' + statusClass;

  // Year
  if (channel.year_end) {
    modalYear.textContent = `${channel.year_start || '؟'} - ${channel.year_end}`;
  } else if (channel.year_start) {
    modalYear.textContent = `منذ ${channel.year_start}`;
  } else {
    modalYear.textContent = 'غير محدد';
  }
  modalYearRow.classList.remove('hidden');

  // Notes
  if (channel.notes) {
    modalNotes.textContent = channel.notes;
    modalNotesRow.classList.remove('hidden');
  } else {
    modalNotesRow.classList.add('hidden');
  }

  // Link
  modalLink.href = channel.url;

  // Show modal
  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ===== Close Modal =====
function closeModal() {
  modalImageLoader = null;
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// ===== Apply Filters and Sort =====
function applyFiltersAndSort() {
  let filtered = currentFilter === 'all'
    ? [...channelsData]
    : channelsData.filter(ch => ch.status === currentFilter);

  if (searchQuery.trim()) {
    filtered = filtered.filter(ch =>
      ch.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  filtered.sort((a, b) => {
    switch (currentSort) {
      case 'date-asc':
        return (a.year_start || 9999) - (b.year_start || 9999);
      case 'date-desc':
        return (b.year_start || 0) - (a.year_start || 0);
      case 'name-asc':
        return a.name.localeCompare(b.name, 'ar');
      case 'name-desc':
        return b.name.localeCompare(a.name, 'ar');
      default:
        return 0;
    }
  });

  renderChannels(filtered);
  updateResultsInfo(filtered.length);
}

// ===== Update Results Info =====
function updateResultsInfo(count) {
  const statusText = currentFilter === 'all' ? 'جميع القنوات' : currentFilter;
  const searchText = searchQuery ? ` — "${searchQuery}"` : '';
  resultsInfoEl.textContent = `عرض ${count} قناة من ${statusText}${searchText}`;
}

// ===== Render Resources =====
function renderResources() {
  resourcesGridEl.innerHTML = additionalResources.map(resource => `
    <div class="resource-card">
      <a href="${resource.url}" target="_blank">
        <span class="resource-icon">🔗</span>
        <span>${resource.title}</span>
      </a>
    </div>
  `).join('');
}

// ===== Event Listeners =====
function attachEventListeners() {
  // Filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      applyFiltersAndSort();
    });
  });

  // Sort
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    applyFiltersAndSort();
  });

  // Search
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    applyFiltersAndSort();
  });

  // Modal close
  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// ===== Floating Particles Background =====
function initParticles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const particleCount = 60;

  const colors = [
    'rgba(167, 139, 250, 0.3)',
    'rgba(6, 182, 212, 0.25)',
    'rgba(244, 114, 182, 0.2)',
    'rgba(52, 211, 153, 0.2)',
    'rgba(251, 191, 36, 0.15)',
  ];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.pulse += p.pulseSpeed;

      // Wrap around edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      const pulseFactor = 0.5 + Math.sin(p.pulse) * 0.5;
      const size = p.size * (0.8 + pulseFactor * 0.4);

      ctx.beginPath();
      ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Glow effect
      ctx.beginPath();
      ctx.arc(p.x, p.y, size * 3, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 3);
      gradient.addColorStop(0, p.color);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fill();
    });

    // Draw connecting lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(167, 139, 250, ${0.05 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ===== Scroll Reveal =====
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

// ===== Parallax Hero =====
function initParallax() {
  const heroImg = document.getElementById('heroBannerImg');
  if (!heroImg) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = 440;
    if (scrollY < heroHeight) {
      const translateY = scrollY * 0.3;
      heroImg.style.transform = `translateY(${translateY}px) scale(${1 + scrollY * 0.0002})`;
    }
  }, { passive: true });
}



// ===== Start =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}