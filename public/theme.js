(function () {
  var KEY = 'nonbiri-theme';
  var DAY_START = 7;
  var DAY_END = 19;
  var PAST_THE_HOUR_MS = 1000;

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
    var group = document.querySelector('[data-theme-switch]');
    if (!group) return;

    var buttons = group.querySelectorAll('button[data-theme-value]');

    function syncPressedState() {
      buttons.forEach(function (button) {
        button.setAttribute('aria-pressed', String(button.dataset.themeValue === (choice || 'auto')));
      });
    }

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var value = button.dataset.themeValue;
        choice = value === 'light' || value === 'dark' ? value : null;
        try {
          if (choice) localStorage.setItem(KEY, choice);
          else localStorage.removeItem(KEY);
        } catch {
          // Storage refused: the choice still applies for this page view.
        }
        apply();
        syncPressedState();
      });
    });

    syncPressedState();
  });
})();
