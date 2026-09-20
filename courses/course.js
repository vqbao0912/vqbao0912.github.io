// Every translated element stores its Vietnamese text in data-vi.
// English remains in the HTML so course content is readable without JavaScript.
const courseTranslations = Array.from(document.querySelectorAll('[data-vi]'), element => ({
  element, en: element.textContent, vi: element.dataset.vi
}));
const languageButtons = document.querySelectorAll('[data-language]');
const englishTitle = document.title;
const titleElement = document.querySelector('h1');
const englishDescription = document.querySelector('meta[name="description"]').content;
function setCourseLanguage(language, remember = false) {
  const vi = language === 'vi';
  document.documentElement.lang = vi ? 'vi' : 'en';
  courseTranslations.forEach(item => { item.element.textContent = vi ? item.vi : item.en; });
  document.title = vi ? titleElement.textContent + ' · Vương Quốc Bảo' : englishTitle;
  document.querySelector('meta[name="description"]').content = vi
    ? titleElement.textContent + ': giới thiệu môn học, tài liệu tham khảo và bài giảng của Vương Quốc Bảo.'
    : englishDescription;
  languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === document.documentElement.lang)));
  if (remember) {
    try { localStorage.setItem('vqbao-language', document.documentElement.lang); }
    catch (_) { /* Language switching works even when storage is disabled. */ }
  }
}
languageButtons.forEach(button => button.addEventListener('click', () => setCourseLanguage(button.dataset.language, true)));
let preferred = 'en';
try { preferred = localStorage.getItem('vqbao-language') === 'vi' ? 'vi' : 'en'; }
catch (_) { /* Use English by default. */ }
setCourseLanguage(preferred);
document.querySelector('.language-switch').hidden = false;
document.querySelector('#year').textContent = new Date().getFullYear();
// Refresh the language when returning through the browser's back/forward cache.
window.addEventListener('pageshow', event => {
  if (!event.persisted) return;
  try { setCourseLanguage(localStorage.getItem('vqbao-language') === 'vi' ? 'vi' : 'en'); }
  catch (_) { /* Keep the language already displayed. */ }
});
