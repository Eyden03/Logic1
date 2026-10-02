(() => {
  const escapeHTML = value => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  if (!document.getElementById('premise-highlight-style')) {
    const style = document.createElement('style');
    style.id = 'premise-highlight-style';
    style.textContent = '.target em{font-style:italic;background:#fff0a8;padding:2px 4px;border-radius:4px}.highlight-note{font-size:13px;color:#6a5316;margin-top:8px}';
    document.head.appendChild(style);
  }

  const answerIsConclusion = q => /conclusion/i.test(q.options[q.answer] || '');

  function markTarget(text, target) {
    const start = text.indexOf(target);
    if (start < 0) return escapeHTML(text);
    return escapeHTML(text.slice(0, start)) + '<em>' + escapeHTML(target) + '</em>' + escapeHTML(text.slice(start + target.length));
  }

  function premiseHTMLWithHighlight(q) {
    if (q.topic !== 'Premise or Conclusion') return '<h2>' + escapeHTML(q.question) + '</h2>';

    let full = q.question;
    let target = '';
    const marker = 'CLASSIFY:';
    if (full.includes(marker)) {
      const parts = full.split(marker);
      full = parts[0].replace(/^Is the highlighted proposition a Premise or Conclusion\?\s*/i, '').trim();
      target = parts[1].trim().replace(/^['“”"]|['“”"]$/g, '').trim();
    } else {
      full = full.replace(/^Is the highlighted proposition a Premise or Conclusion\?\s*/i, '').trim();
      const indicator = full.match(/\b(?:so|therefore|thus|it follows that)\b\s*/i);
      if (indicator) {
        const before = full.slice(0, indicator.index).trim();
        const after = full.slice(indicator.index + indicator[0].length).trim();
        target = answerIsConclusion(q) ? after : before.split(/(?<=[.!?])\s+/)[0];
      } else {
        const sentences = full.split(/(?<=[.!?])\s+/).filter(Boolean);
        target = answerIsConclusion(q) ? sentences[sentences.length - 1] : sentences[0];
      }
    }

    if (!target || !full.includes(target)) target = full;
    return '<div class="arg"><b>Argument:</b><br>' + markTarget(full, target) + '<div class="highlight-note">The italicized statement is the one being classified.</div></div>';
  }

  premiseHTML = premiseHTMLWithHighlight;
  fill();
  filter();
})();
