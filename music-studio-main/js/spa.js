// ============================================
//  WOKL MUSIC STUDIO — SPA Router & Components
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const spaRoot = document.getElementById('spa-root');
  if (!spaRoot) return;

  let currentCategory = 'All';

  // ── Toast Notification System ──
  const showToast = (message) => {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast show';
    toast.innerHTML = `<span style="color: var(--accent-gold); margin-right: 8px;">✓</span> ${message}`;
    container.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.remove('show');
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  // ── Components ──

  const renderCatalog = () => {
    const categories = ['All', 'Guitar', 'Keyboard & Piano', 'Drums & Percussion', 'Studio Equipment', 'DJ Setup'];
    const filtered = currentCategory === 'All' 
      ? instrumentsData 
      : instrumentsData.filter(i => i.category === currentCategory);

    let html = `
      <div class="page-hero" style="padding-bottom: 40px;">
        <span class="section-label">✦ Our Setup</span>
        <h1>Rent Professional<br /><span class="gradient-text">Music Instruments</span></h1>
        <p>Choose from a wide range of studio-quality instruments and gear.</p>
      </div>
      <section style="padding: 40px 24px 80px; background: var(--bg-secondary);">
        <div style="max-width: 1280px; margin: 0 auto;">
          <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-bottom: 48px;">
            ${categories.map(cat => `
              <button class="filter-btn ${currentCategory === cat ? 'active' : ''}" data-cat="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>
          
          <div class="grid-3 fade-in" id="catalog-grid">
            ${filtered.map(inst => `
              <div class="card card-hover" style="padding: 0; display: flex; flex-direction: column;">
                <div style="position: relative; width: 100%; height: 240px; overflow: hidden; border-radius: 24px 24px 0 0;">
                  <img src="${inst.image}" alt="${inst.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" class="inst-card-img" />
                  <div style="position: absolute; top: 16px; right: 16px; background: rgba(7,7,15,0.85); backdrop-filter: blur(4px); padding: 6px 12px; border-radius: 8px; font-family: var(--font-heading); font-weight: 700; font-size: 0.9rem; color: var(--accent-gold);">
                    ₹${inst.price}/${inst.priceUnit}
                  </div>
                </div>
                <div style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
                  <div style="font-size: 0.75rem; color: var(--accent-purple-light); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-bottom: 8px;">${inst.category}</div>
                  <h3 style="font-size: 1.2rem; margin-bottom: 12px;">${inst.name}</h3>
                  <p style="font-size: 0.9rem; margin-bottom: 24px; flex-grow: 1; color: var(--text-muted);">${inst.shortDesc}</p>
                  
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <a href="#/equipment/${inst.slug}" class="btn btn-outline spa-link" style="justify-content: center; padding: 10px;">View Details</a>
                    <button class="btn btn-primary rent-btn" data-id="${inst.id}" data-name="${inst.name}" style="justify-content: center; padding: 10px;">
                      <span class="btn-text">Rent Now</span>
                      <div class="btn-loader" style="display:none;"></div>
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          ${filtered.length === 0 ? `<div style="text-align: center; padding: 60px 0; color: var(--text-muted);">No instruments found in this category.</div>` : ''}
        </div>
      </section>
      
      <!-- Existing equipment overview section to maintain original content -->
      <section style="padding: 96px 24px;">
        <div style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center;">
          <div style="position: relative; height: 500px; border-radius: 20px; overflow: hidden;">
            <img src="images/mixing_console.png" alt="Studio Mixing Console" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; inset: 0; background: linear-gradient(135deg,rgba(139,92,246,0.2),transparent);"></div>
          </div>
          <div>
            <span class="section-label">✦ The Studio</span>
            <h2 style="margin-bottom: 18px;">A <span class="gradient-text">Professional-Grade</span> Environment</h2>
            <p style="margin-bottom: 16px;">Our main recording room is a 1,200 sq ft acoustic masterpiece — fully treated with Rockwool panels, bass traps, and diffusers for a neutral, accurate monitoring environment.</p>
            <p style="margin-bottom: 16px;">The live room can accommodate full bands with up to 6 musicians simultaneously. Isolation booths are available for vocal tracking and instrument separation.</p>
            <p>Every session is run through our professional signal chain — ensuring your recordings are industry-ready from the moment you hit record.</p>
          </div>
        </div>
      </section>
    `;
    
    spaRoot.innerHTML = html;
    attachCatalogListeners();
  };

  const renderDetail = (slug) => {
    const instrument = getInstrumentBySlug(slug);
    if (!instrument) {
      spaRoot.innerHTML = `
        <div style="padding: 160px 24px; text-align: center; min-height: 60vh;">
          <h2>Instrument Not Found</h2>
          <a href="#/" class="btn btn-primary spa-link" style="margin-top: 24px;">Back to Equipment</a>
        </div>
      `;
      attachCatalogListeners();
      return;
    }

    const related = getRelatedInstruments(slug, instrument.category);

    let html = `
      <div class="page-hero" style="padding-bottom: 40px;">
        <span class="section-label">✦ Equipment Details</span>
        <h1>${instrument.name}</h1>
      </div>

      <section style="padding: 40px 24px 96px;">
        <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;" class="detail-grid">
          
          <div style="position: relative; width: 100%; height: 600px; border-radius: 24px; overflow: hidden; border: 1px solid var(--border-subtle);">
            <img src="${instrument.image}" alt="${instrument.name}" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(7,7,15,0.4), transparent);"></div>
          </div>

          <div>
            <a href="#/" style="display: inline-flex; align-items: center; gap: 8px; color: var(--text-muted); font-size: 0.9rem; margin-bottom: 24px; transition: color 0.2s;" class="spa-link back-link">
              <span>←</span> Back to Equipment
            </a>
            
            <div style="font-size: 0.85rem; color: var(--accent-purple-light); text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-bottom: 12px;">${instrument.category}</div>
            <h2 style="font-size: 2.5rem; margin-bottom: 16px;">${instrument.name}</h2>
            
            <div style="display: flex; align-items: flex-end; gap: 8px; margin-bottom: 32px;">
              <div style="font-family: var(--font-heading); font-size: 2.8rem; font-weight: 800; color: var(--text-primary); line-height: 1;">₹${instrument.price}</div>
              <div style="font-size: 1.1rem; color: var(--text-muted); padding-bottom: 6px;">/ ${instrument.priceUnit}</div>
            </div>
            
            <p style="font-size: 1.05rem; line-height: 1.8; margin-bottom: 32px; color: var(--text-secondary);">
              ${instrument.description}
            </p>

            <h4 style="font-size: 1.1rem; margin-bottom: 16px;">Key Features</h4>
            <ul style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 48px;">
              ${instrument.features.map(f => `
                <li style="display: flex; align-items: center; gap: 12px; font-size: 0.95rem;">
                  <span style="color: var(--accent-gold);">✓</span> ${f}
                </li>
              `).join('')}
            </ul>

            <button class="btn btn-primary rent-btn" data-id="${instrument.id}" data-name="${instrument.name}" style="width: 100%; justify-content: center; padding: 16px; font-size: 1.1rem;">
              <span class="btn-text">Rent This Instrument Now</span>
              <div class="btn-loader" style="display:none;"></div>
            </button>
          </div>
        </div>
      </section>

      ${related.length > 0 ? `
        <section style="padding: 80px 24px; background: var(--bg-secondary);">
          <div style="max-width: 1280px; margin: 0 auto;">
            <div class="section-header">
              <h2><span class="gradient-text">Related</span> Equipment</h2>
            </div>
            <div class="grid-3">
              ${related.map(inst => `
                <div class="card card-hover" style="padding: 0; display: flex; flex-direction: column;">
                  <div style="position: relative; width: 100%; height: 200px; overflow: hidden; border-radius: 24px 24px 0 0;">
                    <img src="${inst.image}" alt="${inst.name}" style="width: 100%; height: 100%; object-fit: cover;" class="inst-card-img" />
                    <div style="position: absolute; top: 16px; right: 16px; background: rgba(7,7,15,0.85); backdrop-filter: blur(4px); padding: 4px 10px; border-radius: 6px; font-family: var(--font-heading); font-weight: 700; font-size: 0.8rem; color: var(--accent-gold);">
                      ₹${inst.price}/${inst.priceUnit}
                    </div>
                  </div>
                  <div style="padding: 20px; display: flex; flex-direction: column; flex-grow: 1;">
                    <h3 style="font-size: 1.1rem; margin-bottom: 8px;">${inst.name}</h3>
                    <p style="font-size: 0.85rem; margin-bottom: 20px; flex-grow: 1; color: var(--text-muted);">${inst.shortDesc}</p>
                    <a href="#/equipment/${inst.slug}" class="btn btn-outline spa-link" style="justify-content: center; padding: 8px; font-size: 0.85rem;">View Details</a>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      ` : ''}
    `;

    spaRoot.innerHTML = html;
    attachCatalogListeners();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── Event Listeners ──

  const attachCatalogListeners = () => {
    // Category Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        currentCategory = e.target.dataset.cat;
        spaRoot.classList.add('page-exit');
        setTimeout(() => {
          renderCatalog();
          spaRoot.classList.remove('page-exit');
        }, 200);
      });
    });

    // SPA Links
    document.querySelectorAll('.spa-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const hash = link.getAttribute('href');
        window.history.pushState(null, '', hash);
        handleRoute();
      });
    });

    // Rent Buttons (with loading animation)
    document.querySelectorAll('.rent-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget;
        const instName = targetBtn.dataset.name;
        
        targetBtn.disabled = true;
        targetBtn.querySelector('.btn-text').style.display = 'none';
        targetBtn.querySelector('.btn-loader').style.display = 'block';

        // Simulate API/Loading
        setTimeout(() => {
          targetBtn.disabled = false;
          targetBtn.querySelector('.btn-text').style.display = 'block';
          targetBtn.querySelector('.btn-loader').style.display = 'none';
          
          showToast(`Successfully initiated rental for ${instName}!`);
          
          // Open WhatsApp
          const msg = `Hi Wokl! I'd like to rent the ${instName}.`;
          window.open(`https://wa.me/919876543210?text=${encodeURIComponent(msg)}`, '_blank');
        }, 800);
      });
    });
  };

  // ── Router ──
  const handleRoute = () => {
    const hash = window.location.hash || '#/';
    spaRoot.classList.add('page-exit');
    
    setTimeout(() => {
      if (hash.startsWith('#/equipment/')) {
        const slug = hash.replace('#/equipment/', '');
        renderDetail(slug);
      } else {
        renderCatalog();
      }
      spaRoot.classList.remove('page-exit');
    }, 250); // Match CSS transition duration
  };

  window.addEventListener('popstate', handleRoute);
  
  // Initial render
  handleRoute();
});
