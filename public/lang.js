(function () {
  var KEY = 'nonbiri-lang';
  var root = document.documentElement;

  var current = root.lang === 'ja' ? 'ja' : 'en';
  var altHref = root.getAttribute('data-alt-href');
  var altLang = root.getAttribute('data-alt-lang');

  function storedChoice() {
    try {
      var value = localStorage.getItem(KEY);
      return value === 'en' || value === 'ja' ? value : null;
    } catch {
      return null;
    }
  }

  var wanted = storedChoice();

  if (wanted && wanted !== current && altHref && altLang === wanted) {
    // replace, not assign: the page being left was served by default rather
    // than chosen, so Back would land on it and bounce forward again.
    location.replace(altHref);
    return;
  }

  // Every link that changes language, not just the masthead switch: one that
  // does not record the choice is undone by the redirect above on arrival.
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[data-lang-value]').forEach(function (link) {
      link.addEventListener('click', function () {
        try {
          localStorage.setItem(KEY, link.dataset.langValue);
        } catch {
          // Storage refused: the link still navigates, it is just not remembered.
        }
      });
    });
  });
})();
