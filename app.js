const grid = document.querySelector('#apps-grid');
document.querySelector('#year').textContent = new Date().getFullYear();
const appleIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 12.54c.03 3.16 2.77 4.21 2.8 4.23-.02.08-.44 1.53-1.44 3.03-.86 1.3-1.75 2.59-3.16 2.62-1.39.03-1.83-.85-3.41-.85-1.58 0-2.07.82-3.39.88-1.36.05-2.4-1.4-3.27-2.69-1.78-2.62-3.14-7.39-1.31-10.62a5.06 5.06 0 0 1 4.25-2.6c1.33-.03 2.59.92 3.4.92.82 0 2.35-1.14 3.96-.97.67.03 2.54.27 3.74 2.02-.1.06-2.23 1.3-2.2 4.03ZM14.9 4.8A5.06 5.06 0 0 0 16.06 1c-1.2.05-2.64.8-3.5 1.79a4.82 4.82 0 0 0-1.19 3.69c1.33.1 2.68-.67 3.53-1.68Z"/></svg>';
const playIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.5 2.8a1.2 1.2 0 0 0-.5 1v16.4a1.2 1.2 0 0 0 .5 1l10-9.2-10-9.2Zm11 8.4 3.1-2.8-11-6.2 7.9 9Zm0 1.6-7.9 9 11-6.2-3.1-2.8Zm4.1-3.9-3.2 3.1 3.2 3.1 2-1.2c1.1-.7 1.1-1.6 0-2.3l-2-1.2Z"/></svg>';
function storeButton(url,kind){return url?`<a class="store-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="View on ${kind==='ios'?'App Store':'Google Play'}">${kind==='ios'?appleIcon:playIcon} ${kind==='ios'?'App Store':'Google Play'} ↗</a>`:''}
function render(apps) {
 grid.replaceChildren();
 apps.forEach(app => {
  const card = document.createElement('article');
  card.className = `app-card ${app.featured ? 'featured' : ''}`;
  card.dataset.app = app.id;
  const visual = document.createElement('div');
  visual.className = 'app-visual';
  const placeholder = document.createElement('span');
  placeholder.className = 'banner-placeholder';
  placeholder.textContent = 'Banner artwork pending';
  visual.append(placeholder);
  if (app.bannerAvailable) {
   const banner = document.createElement('img');
   banner.className = 'app-banner';
   banner.src = app.banner;
   banner.alt = `${app.name} editorial artwork`;
   banner.width = 1600;
   banner.height = 1000;
   banner.loading = 'lazy';
   banner.addEventListener('load', () => { placeholder.hidden = true; }, { once: true });
   banner.addEventListener('error', () => { banner.remove(); placeholder.hidden = false; }, { once: true });
   visual.append(banner);
  }
  const body = document.createElement('div');
  body.className = 'app-body';
  const fallback = document.createElement('span');
  fallback.className = 'app-icon fallback-icon';
  fallback.textContent = app.symbol;
  fallback.setAttribute('role', 'img');
  fallback.setAttribute('aria-label', `${app.name} temporary icon`);
  body.append(fallback);
  if (app.iconAvailable) {
   const icon = document.createElement('img');
   icon.className = 'app-icon';
   icon.alt = `${app.name} app icon`;
   icon.width = 56;
   icon.height = 56;
   icon.loading = 'lazy';
   icon.addEventListener('error', () => icon.replaceWith(fallback), { once: true });
   icon.src = app.icon;
   fallback.replaceWith(icon);
  }
  for (const [tag, className, value] of [
   ['span', 'app-category', app.category],
   ['h3', '', app.name],
   ['p', '', app.description]
  ]) {
   const element = document.createElement(tag);
   element.className = className;
   element.textContent = value;
   body.append(element);
  }
  const actions = document.createElement('div');
  actions.className = 'app-actions';
  actions.innerHTML = storeButton(app.appStoreUrl, 'ios') + storeButton(app.googlePlayUrl, 'android');
  actions.querySelectorAll('a').forEach(link => {
   link.setAttribute('aria-label', `${app.name} — ${link.getAttribute('aria-label')}`);
  });
  body.append(actions);
  card.append(visual, body);
  grid.append(card);
 });
}
fetch('data/apps.json').then(r=>{if(!r.ok)throw Error('Cannot load apps.json');return r.json()}).then(render).catch(()=>{grid.innerHTML='<p>Unable to load app collection. Run this project with a local web server (see README).</p>'});
