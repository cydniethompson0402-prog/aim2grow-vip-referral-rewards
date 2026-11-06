// ============================================================
// Aim2Grow VIP Referral Rewards — Interactive features
// ============================================================

(function () {
  'use strict';

  // --- Dynamic footer year ---
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Toast notification helper ---
  const toastEl = document.getElementById('toast');
  let toastTimer = null;
  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove('show');
    }, 2800);
  }

  // --- Copy-to-clipboard buttons ---
  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const text = btn.getAttribute('data-copy');
      if (!text) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(onCopied, onCopyFail);
      } else {
        legacyCopy(text) ? onCopied() : onCopyFail();
      }

      function onCopied() {
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        btn.disabled = true;
        showToast('Message copied — ready to send!');
        setTimeout(function () {
          btn.textContent = original;
          btn.disabled = false;
        }, 2200);
      }

      function onCopyFail() {
        showToast('Could not copy automatically — please copy manually.');
      }
    });
  });

  function legacyCopy(text) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch (e) {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }

  // --- Interactive Referral Tracker ---
  const payingInput = document.getElementById('payingInput');
  const freeInput = document.getElementById('freeInput');
  const trainingsEarnedEl = document.getElementById('trainingsEarned');
  const progressDetailEl = document.getElementById('progressDetail');
  const pbarPaying = document.getElementById('pbarPaying');
  const pbarFree = document.getElementById('pbarFree');
  const pbarPayingLabel = document.getElementById('pbarPayingLabel');
  const pbarFreeLabel = document.getElementById('pbarFreeLabel');

  function updateTracker() {
    if (!payingInput || !freeInput) return;

    const paying = Math.max(0, parseInt(payingInput.value, 10) || 0);
    const free = Math.max(0, parseInt(freeInput.value, 10) || 0);

    const fromPaying = Math.floor(paying / 5);
    const fromFree = Math.floor(free / 15);
    const total = fromPaying + fromFree;

    trainingsEarnedEl.textContent = total;

    const nextPaying = 5 - (paying % 5);
    const nextFree = 15 - (free % 15);

    let detail = '';
    if (paying === 0 && free === 0) {
      detail = 'Add your referrals above to see how close you are to your next free training.';
    } else if (total === 0) {
      detail = `You're ${nextPaying} paying member${nextPaying === 1 ? '' : 's'} — or ${nextFree} free community member${nextFree === 1 ? '' : 's'} — away from your first free training!`;
    } else {
      detail = `Brilliant — you've earned ${total} free training${total === 1 ? '' : 's'}! Keep going: ${nextPaying} more paying member${nextPaying === 1 ? '' : 's'} (or ${nextFree} more free members) unlocks your next one.`;
    }
    progressDetailEl.textContent = detail;

    const payingRemainder = paying % 5;
    const payingPct = Math.min(100, (payingRemainder / 5) * 100);
    pbarPaying.style.width = (payingRemainder === 0 && paying > 0) ? '100%' : (paying === 0 ? '0%' : payingPct + '%');
    const payingStatus = (payingRemainder === 0 && paying > 0) ? 'milestone reached!' : (nextPaying + ' to go');
    pbarPayingLabel.textContent = `${paying} total (${payingStatus})`;

    const freeRemainder = free % 15;
    const freePct = Math.min(100, (freeRemainder / 15) * 100);
    pbarFree.style.width = (freeRemainder === 0 && free > 0) ? '100%' : (free === 0 ? '0%' : freePct + '%');
    const freeStatus = (freeRemainder === 0 && free > 0) ? 'milestone reached!' : (nextFree + ' to go');
    pbarFreeLabel.textContent = `${free} total (${freeStatus})`;
  }

  if (payingInput && freeInput) {
    ['input', 'change'].forEach(function (evt) {
      payingInput.addEventListener(evt, updateTracker);
      freeInput.addEventListener(evt, updateTracker);
    });
    updateTracker();
  }
})();
