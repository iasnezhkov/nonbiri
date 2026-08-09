(function () {
  var KEY = 'nonbiri-theme';
  var DAY_START = 7;
  var DAY_END = 19;
  var PAST_THE_HOUR_MS = 1000;
  var GLYPH = { auto: '◐', light: '☀', dark: '☾' };
  var NEXT = { auto: 'light', light: 'dark', dark: 'auto' };

  var root = document.documentElement;

  function storedChoice() {
    try {
      var value = localStorage.getItem(KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  }

  var choice = storedChoice();
  var timer = null;

  function byClock() {
    var hour = new Date().getHours();
    return hour >= DAY_START && hour < DAY_END ? 'light' : 'dark';
  }

  function msUntilClockTurns() {
    var now = new Date();
    var hour = now.getHours();
    var next = new Date(now);
    next.setHours(hour < DAY_START ? DAY_START : hour < DAY_END ? DAY_END : DAY_START + 24, 0, 0, 0);
    return next - now + PAST_THE_HOUR_MS;
  }

  function apply() {
    root.setAttribute('data-theme', choice || byClock());
    clearTimeout(timer);
    if (!choice) timer = setTimeout(apply, msUntilClockTurns());
  }

  root.classList.add('has-js');
  apply();

  // Timers do not fire while the machine is asleep, so a tab left open
  // overnight would still be showing the afternoon without this.
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden) apply();
  });

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('[data-theme-switch]');
    if (!button) return;

    var glyph = button.querySelector('[data-theme-glyph]');

    function sync() {
      var mode = choice || 'auto';
      if (glyph) glyph.textContent = GLYPH[mode];
      button.setAttribute('aria-label', button.dataset.label + ': ' + button.dataset[mode]);
    }

    button.addEventListener('click', function () {
      var mode = NEXT[choice || 'auto'];
      choice = mode === 'auto' ? null : mode;
      try {
        if (choice) localStorage.setItem(KEY, choice);
        else localStorage.removeItem(KEY);
      } catch {
        // Storage refused: the choice still applies for this page view.
      }
      apply();
      sync();
    });

    sync();
  });
})();
