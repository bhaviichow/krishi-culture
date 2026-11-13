(function () {
  // 1. Custom SVG Icons (Insects, Crop Plants & Fruits)
  const SVG_ART = {
    ladybird: `<svg viewBox="0 0 64 64" class="w-10 h-10 drop-shadow">
      <g class="wing-left"><ellipse cx="24" cy="36" rx="13" ry="18" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/><circle cx="22" cy="30" r="2.5" fill="#1e293b"/><circle cx="20" cy="40" r="2.5" fill="#1e293b"/></g>
      <g class="wing-right"><ellipse cx="40" cy="36" rx="13" ry="18" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/><circle cx="42" cy="30" r="2.5" fill="#1e293b"/><circle cx="44" cy="40" r="2.5" fill="#1e293b"/></g>
      <circle cx="32" cy="18" r="8" fill="#1e293b"/>
      <path d="M28 11 Q22 4 18 7 M36 11 Q42 4 46 7" stroke="#1e293b" stroke-width="2" fill="none" stroke-linecap="round"/>
    </svg>`,

    bee: `<svg viewBox="0 0 64 64" class="w-10 h-10 drop-shadow">
      <ellipse class="wing-flap" cx="24" cy="22" rx="11" ry="6" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
      <ellipse class="wing-flap" cx="40" cy="22" rx="11" ry="6" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1.5"/>
      <ellipse cx="32" cy="36" rx="14" ry="10" fill="#facc15" stroke="#854d0e" stroke-width="2"/>
      <path d="M25 27 V45 M32 26 V46 M39 27 V45" stroke="#1e293b" stroke-width="3"/>
      <circle cx="46" cy="35" r="5" fill="#1e293b"/>
    </svg>`,

    plant: `<svg viewBox="0 0 64 64" class="w-11 h-11 drop-shadow">
      <ellipse cx="32" cy="56" rx="18" ry="4" fill="#78350f" opacity="0.45"/>
      <g class="sway-stem">
        <path d="M32 55 Q31 36 32 18" stroke="#16a34a" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <path d="M32 40 Q16 32 14 22 Q26 22 32 36" fill="#22c55e" stroke="#15803d" stroke-width="1.5"/>
        <path d="M32 32 Q48 24 50 14 Q38 14 32 28" fill="#4ade80" stroke="#15803d" stroke-width="1.5"/>
        <path d="M32 20 Q24 8 32 4 Q40 8 32 20" fill="#86efac" stroke="#15803d" stroke-width="1.5"/>
      </g>
    </svg>`,

    wheat: `<svg viewBox="0 0 64 64" class="w-11 h-11 drop-shadow">
      <g class="sway-stem">
        <path d="M32 58 L32 14" stroke="#eab308" stroke-width="3" stroke-linecap="round"/>
        <ellipse cx="26" cy="22" rx="4" ry="7" transform="rotate(-30 26 22)" fill="#facc15" stroke="#a16207" stroke-width="1.2"/>
        <ellipse cx="38" cy="22" rx="4" ry="7" transform="rotate(30 38 22)" fill="#facc15" stroke="#a16207" stroke-width="1.2"/>
        <ellipse cx="26" cy="33" rx="4" ry="7" transform="rotate(-30 26 33)" fill="#fde047" stroke="#a16207" stroke-width="1.2"/>
        <ellipse cx="38" cy="33" rx="4" ry="7" transform="rotate(30 38 33)" fill="#fde047" stroke="#a16207" stroke-width="1.2"/>
        <ellipse cx="32" cy="12" rx="3.5" ry="7" fill="#fef08a" stroke="#a16207" stroke-width="1.2"/>
      </g>
    </svg>`,

    mango: `<svg viewBox="0 0 64 64" class="w-10 h-10 drop-shadow">
      <g class="fruit-pulse">
        <path d="M32 14 C46 14 52 28 46 42 C41 53 27 56 21 48 C15 40 20 14 32 14 Z" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
        <path d="M32 14 Q36 6 44 8 Q40 16 32 14" fill="#22c55e" stroke="#15803d" stroke-width="1.5"/>
        <circle cx="38" cy="26" r="3" fill="#fef9c3" opacity="0.8"/>
      </g>
    </svg>`,

    tomato: `<svg viewBox="0 0 64 64" class="w-10 h-10 drop-shadow">
      <g class="fruit-pulse">
        <circle cx="32" cy="36" r="18" fill="#ef4444" stroke="#991b1b" stroke-width="2"/>
        <path d="M32 18 L24 12 L29 20 L20 22 L30 23 L32 30 L34 23 L44 22 L35 20 L40 12 Z" fill="#16a34a"/>
        <ellipse cx="25" cy="30" rx="3" ry="5" transform="rotate(-25 25 30)" fill="#fecaca" opacity="0.75"/>
      </g>
    </svg>`
  };

  // 2. CSS Keyframe Animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes swayStem {
      0%, 100% { transform: rotate(-6deg); }
      50% { transform: rotate(6deg); }
    }
    @keyframes insectFly {
      0%, 100% { transform: translate(0px, 0px) rotate(-5deg); }
      33% { transform: translate(10px, -12px) rotate(8deg); }
      66% { transform: translate(-8px, -18px) rotate(-8deg); }
    }
    @keyframes wingFlutter {
      0%, 100% { transform: scaleY(1); }
      50% { transform: scaleY(0.35); }
    }
    @keyframes fruitPulse {
      0%, 100% { transform: scale(1) translateY(0); }
      50% { transform: scale(1.09) translateY(-4px); }
    }
    @keyframes bottleGlow {
      0%, 100% { transform: translateY(0px); filter: drop-shadow(0 4px 6px rgba(21,128,61,0.15)); }
      50% { transform: translateY(-5px); filter: drop-shadow(0 10px 14px rgba(21,128,61,0.32)); }
    }
    .sway-stem { transform-origin: 32px 56px; animation: swayStem 3s ease-in-out infinite; }
    .wing-flap { transform-origin: center; animation: wingFlutter 0.18s linear infinite; }
    .fruit-pulse { transform-origin: center; animation: fruitPulse 2.6s ease-in-out infinite; }
    .svg-float-box {
      position: absolute;
      pointer-events: none;
      opacity: 0.85;
      animation: insectFly 5.5s ease-in-out infinite;
    }
    .svg-plant-box {
      position: absolute;
      pointer-events: none;
      opacity: 0.9;
    }
    .anim-bottle svg { animation: bottleGlow 3.2s ease-in-out infinite; }
  `;
  document.head.appendChild(style);

  // 3. Hero Banner Me Animated SVG Insects, Crop Plants Aur Fruits Lagayein
  const hero = document.querySelector('.hero-banner-bg');
  if (hero) {
    const items = [
      { svg: SVG_ART.ladybird, cls: 'svg-float-box', top: '10%', left: '5%', delay: '0s' },
      { svg: SVG_ART.bee, cls: 'svg-float-box', top: '14%', right: '6%', delay: '1.4s' },
      { svg: SVG_ART.plant, cls: 'svg-plant-box', bottom: '18%', left: '4%', delay: '0.4s' },
      { svg: SVG_ART.wheat, cls: 'svg-plant-box', bottom: '18%', right: '5%', delay: '1s' },
      { svg: SVG_ART.mango, cls: 'svg-float-box', top: '44%', left: '3%', delay: '2s' },
      { svg: SVG_ART.tomato, cls: 'svg-float-box', top: '44%', right: '4%', delay: '2.6s' }
    ];
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = item.cls;
      div.innerHTML = item.svg;
      if (item.top) div.style.top = item.top;
      if (item.bottom) div.style.bottom = item.bottom;
      if (item.left) div.style.left = item.left;
      if (item.right) div.style.right = item.right;
      div.style.animationDelay = item.delay;
      hero.appendChild(div);
    });
  }

  // 4. Crops Bar Ke Gol Icons Ko Animated SVG Se Replace Karein
  const cropMap = {
    'Common': SVG_ART.ladybird,
    'Dhan (Rice)': SVG_ART.wheat,
    'Gehu (Wheat)': SVG_ART.wheat,
    'Makka/Jwar': SVG_ART.plant,
    'Kapas (Cotton)': SVG_ART.plant,
    'Ganna': SVG_ART.plant,
    'Dalhan': SVG_ART.plant,
    'Tilhan': SVG_ART.plant,
    'Sabjiya': SVG_ART.tomato,
    'Bagwani': SVG_ART.mango
  };

  document.querySelectorAll('.crop-tab-btn').forEach(btn => {
    const label = btn.querySelector('span')?.textContent.trim();
    const circle = btn.querySelector('div');
    if (circle && cropMap[label]) {
      circle.innerHTML = cropMap[label];
    }
  });

  // 5. Bio-Culture Bottles Par Smooth SVG Float Lagayein
  const applyBottleAnim = () => {
    document.querySelectorAll('#product-grid > div').forEach(card => {
      const firstBox = card.querySelector('div > div');
      if (firstBox) firstBox.classList.add('anim-bottle');
    });
  };
  applyBottleAnim();
  const grid = document.getElementById('product-grid');
  if (grid) {
    new MutationObserver(applyBottleAnim).observe(grid, { childList: true });
  }
})();
