// golfimprovement.com: seasonal message and the six-pillar self-check.
(function () {
  // Seasonal message. Switch times are midnight US Eastern, written in UTC.
  var SEASONS = [
    { from: null, until: '2026-12-25T05:00:00Z',
      banner: 'The gift for the golfer who has everything: paperback + eBook, $19.99.',
      hero: 'The gift for the golfer who has everything' },
    { from: '2026-12-25T05:00:00Z', until: '2027-02-01T05:00:00Z',
      banner: 'Make 2027 the year your scores finally drop.',
      hero: 'Make 2027 your best year of golf' }
  ];
  var now = Date.now();
  var season = null;
  SEASONS.forEach(function (s) {
    var a = s.from ? Date.parse(s.from) : -Infinity, b = s.until ? Date.parse(s.until) : Infinity;
    if (now >= a && now < b) season = s;
  });
  if (season) {
    document.getElementById('promo-text').textContent = season.banner;
    document.getElementById('promo').hidden = false;
  }

  // Christmas shipping lines. Order-by cutoff: end of December 22, Eastern.
  var CUTOFF = Date.parse('2026-12-23T05:00:00Z');
  var CHRISTMAS = Date.parse('2026-12-26T05:00:00Z');
  var shipPhase = now < CUTOFF ? 'before' : (now < CHRISTMAS ? 'after' : 'always');
  document.querySelectorAll('[data-ship]').forEach(function (el) {
    el.hidden = el.getAttribute('data-ship') !== shipPhase;
  });

  document.querySelectorAll('[data-holiday-faq]').forEach(function (el) { el.hidden = now >= CHRISTMAS; });

  // Self-check result.
  var boxes = document.querySelectorAll('#check input[type="checkbox"]');
  var count = document.getElementById('result-count');
  var text = document.getElementById('result-text');
  function update() {
    var n = 0;
    boxes.forEach(function (b) { if (b.checked) n++; });
    count.textContent = n + ' of 6';
    if (n === 0) {
      text.textContent = 'Check the questions that sound like you, and your result shows up here.';
    } else if (n === 1) {
      text.textContent = 'You\u2019re managing your game well. Work on that one pillar for two weeks, and start tracking your numbers.';
    } else if (n <= 3) {
      text.textContent = 'Pick the one that costs you the most strokes and work only on that for two weeks. The book walks you through each pillar step by step.';
    } else {
      text.textContent = 'Good news: you\u2019ve got easy strokes waiting. Start with putting and blow-up holes, because they pay off fastest. The book gives you the plan.';
    }
  }
  boxes.forEach(function (b) { b.addEventListener('change', update); });
})();
