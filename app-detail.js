const detailRoot = document.querySelector('#app-detail-content');
const siteRoot = new URL('./', document.currentScript.src);
const localAsset = path => new URL(path, siteRoot).href;
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const featurePaths = {
 'book-open':'<path d="M12 7C9 4 5 4 2 5v15c3-1 7-1 10 2 3-3 7-3 10-2V5c-3-1-7-1-10 2Z"/><path d="M12 7v15"/>',
 'book-text':'<path d="M4 3h16v19H4zM8 7h8M8 11h8M8 15h5"/>',
 moon:'<path d="M21 13A9 9 0 0 1 11 3 9 9 0 1 0 21 13Z"/>',
 sound:'<path d="M4 10v4m4-8v12m4-15v18m4-15v12m4-8v4"/>',
 heart:'<path d="M20 5c-3-3-6-1-8 1-2-2-5-4-8-1-5 5 8 15 8 15S25 10 20 5Z"/>',
 sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1"/>',
 palette:'<path d="M12 3a9 9 0 1 0 0 18h2a2 2 0 0 0 0-4h-1a2 2 0 0 1 0-4h4c6 0 4-10-5-10Z"/><path d="M7 9h.01M10 6h.01M15 7h.01M6 13h.01"/>',
 bookmark:'<path d="M6 3h12v19l-6-4-6 4Z"/>'
};
const svg = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${featurePaths[name] || featurePaths['book-open']}</svg>`;
function downloadLinks(app, closing = false) {
 return `<div class="app-actions app-detail__actions">${[
  [app.appStoreUrl, closing ? 'Download on the App Store' : 'App Store'],
  [app.googlePlayUrl, closing ? 'Get it on Google Play' : 'Google Play']
 ].filter(([url]) => url).map(([url,label]) => `<a class="store-link" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`).join('')}</div>`;
}
function screenshotFrame(label, pending = 'Screenshot coming soon') {
 return `<div class="app-detail__screen-frame"><div class="app-detail__pending">${escapeHTML(pending)}</div></div><figcaption>${escapeHTML(label)}</figcaption>`;
}
function renderDetail(app) {
 const d = app.detail;
 const shots = d.screenshots.length ? d.screenshots : (d.screenshotSubjects || ['App overview', 'Explore the app', 'App experience']).map(label => ({label}));
 detailRoot.innerHTML = `
 <section class="app-detail__hero" aria-labelledby="app-title">
 ${app.iconAvailable ? `<img class="app-detail__icon" src="${escapeHTML(localAsset(app.icon))}" width="96" height="96" alt="${escapeHTML(app.name)} app icon">` : '<div class="app-detail__icon app-detail__icon-fallback">Icon pending</div>'}
 <h1 id="app-title">${escapeHTML(app.name)}</h1><p class="app-detail__tagline">${escapeHTML(app.tagline)}</p><p class="app-detail__intro">${escapeHTML(app.introduction)}</p>${downloadLinks(app)}</section>
 <section class="app-detail__banner-frame" aria-label="App artwork">${app.bannerAvailable ? `<img class="app-detail__banner" src="${escapeHTML(localAsset(app.banner))}" width="1440" height="900" alt="${escapeHTML(app.name)} editorial artwork">` : '<div class="app-detail__pending">Banner artwork pending</div>'}</section>
 <section class="app-detail__section app-detail__about" aria-labelledby="experience-title"><div class="eyebrow">${escapeHTML(d.eyebrow)}</div><h2 id="experience-title">${escapeHTML(d.headline)}</h2>${d.description.map(p=>`<p>${escapeHTML(p)}</p>`).join('')}</section>
 <section class="app-detail__section" aria-labelledby="features-title"><div class="eyebrow">${escapeHTML(d.featuresEyebrow || 'MADE FOR YOUR EVERYDAY')}</div><h2 id="features-title">${escapeHTML(d.featuresTitle || 'Little details. Better reading.')}</h2><div class="app-detail__features">${d.features.map(f=>`<article class="app-detail__feature">${svg(f.icon)}<h3>${escapeHTML(f.title)}</h3><p>${escapeHTML(f.description)}</p></article>`).join('')}</div></section>
 <section class="app-detail__section" aria-labelledby="screenshots-title"><h2 id="screenshots-title">${escapeHTML(d.screenshotsTitle || 'A closer look')}</h2><p>${escapeHTML(d.screenshotsDescription || `Explore the ${app.name} reading experience.`)}</p><div class="app-detail__screenshots ${d.screenshotLayout === 'landscape' ? 'app-detail__screenshots--landscape' : ''}" tabindex="0" role="region" aria-label="${escapeHTML(d.galleryLabel || 'App screenshots, scroll horizontally')}">${shots.map(s=>`<figure class="app-detail__screenshot">${s.src ? `<div class="app-detail__screen-frame"><img src="${escapeHTML(localAsset(s.src))}" alt="${escapeHTML(s.alt || s.label)}" width="${s.width || 1170}" height="${s.height || 2532}" loading="lazy"></div><figcaption>${escapeHTML(s.label)}</figcaption>` : screenshotFrame(s.label, d.screenshotPending)}</figure>`).join('')}</div></section>
 <section class="app-detail__section app-detail__cta" aria-labelledby="download-title"><h2 id="download-title">${escapeHTML(d.ctaTitle)}</h2><p>${escapeHTML(d.ctaDescription)}</p>${downloadLinks(app,true)}</section>`;
 detailRoot.querySelectorAll('img').forEach(img => {
  const showFallback = () => {
   const fallback = document.createElement('div');
   if (img.classList.contains('app-detail__icon')) {
    fallback.className = 'app-detail__icon app-detail__icon-fallback';
    fallback.textContent = 'Icon pending';
   } else {
    fallback.className = 'app-detail__pending';
    fallback.textContent = img.classList.contains('app-detail__banner') ? 'Banner artwork pending' : 'Screenshot coming soon';
   }
   img.replaceWith(fallback);
  };
  img.addEventListener('error', showFallback, {once:true});
  if (img.complete && img.naturalWidth === 0) showFallback();
 });
 detailRoot.setAttribute('aria-busy','false');
}
document.querySelector('#year').textContent = new Date().getFullYear();
fetch(localAsset('data/apps.json')).then(response => {
 if (!response.ok) throw new Error('App data unavailable');
 return response.json();
}).then(apps => {
 const app = apps.find(app => app.id === document.body.dataset.app && app.detail);
 if (!app) throw new Error('App detail unavailable');
 renderDetail(app);
}).catch(() => {
 detailRoot.innerHTML = '<p role="alert">App details could not be loaded. Please refresh or return to <a href="../../#apps">all apps</a>.</p>';
 detailRoot.setAttribute('aria-busy','false');
});
