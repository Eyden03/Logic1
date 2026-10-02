(() => {
  const normalize = value => String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const original = banks.original;
  const legacy = [
    {
      topic: 'Univocal, Equivocal, Analogous',
      question: '“The word “light” in physics and “light in poetry” is an example of a univocal, equivocal, or analogous term.',
      options: ['Univocal term', 'Analogous term', 'Equivocal term'],
      answer: 2,
      explanation: 'The two uses of “light” are treated by the course as having different meanings.'
    },
    {
      topic: 'Univocal, Equivocal, Analogous',
      question: '“Medicine to heal and “medicine as a science” is an example of a univocal, equivocal, or analogous term.',
      options: ['Equivocal term', 'Univocal term', 'Analogous term'],
      answer: 2,
      explanation: 'The meanings are different but related: medicine can refer to something used for healing and to the science or field concerned with healing.'
    },
    {
      topic: 'Univocal, Equivocal, Analogous',
      question: '“Book as reading material and “book as a record” is an example of a univocal, equivocal, or analogous term.',
      options: ['Analogous term', 'Univocal term', 'Equivocal term'],
      answer: 2,
      explanation: 'Following the classification pattern used in the course, these are treated as distinct meanings of the same word.'
    },
    {
      topic: 'Foundations of Logic & Epistemology',
      question: 'It refers to a verbal expression or statement which has truth value and can either be true or false.',
      options: ['Conclusion', 'Premise', 'Terms', 'Propositions'],
      answer: 3,
      explanation: 'A proposition is a statement that has a truth value and can be either true or false.'
    },
    {
      topic: 'Univocal, Equivocal, Analogous',
      question: '“Crown of a king and “crown of a tree” is an example of a univocal, equivocal, or analogous term.',
      options: ['Equivocal term', 'Analogous term', 'Univocal term'],
      answer: 1,
      explanation: 'The meanings are related by similarity because “crown” can refer to an upper or top part.'
    },
    {
      topic: 'Univocal, Equivocal, Analogous',
      question: '“Justice in law and “justice in morality” is an example of a univocal, equivocal, or analogous term.',
      options: ['Equivocal term', 'Univocal term', 'Analogous term'],
      answer: 2,
      explanation: 'The uses differ in context but remain related through the concept of justice.'
    }
  ];
  const corrections = [
    ['king as ruler', 'king in chess', 'equivocal term'],
    ['sound as noise', 'sound as healthy', 'analogous term'],
    ['patriotism is an example', 'abstract term']
  ];
  const addModule = question => {
    const modules = question.modules || [question.module || 'Existing Reviewer'];
    if (!modules.includes('Existing Reviewer')) modules.push('Existing Reviewer');
    question.modules = modules;
    delete question.module;
  };
  legacy.forEach(item => {
    const found = original.find(question => normalize(question.question) === normalize(item.question));
    if (found) {
      Object.assign(found, item, { options: item.options.slice() });
      addModule(found);
    }
    else original.push({ ...item, options: item.options.slice(), modules: ['Existing Reviewer'] });
  });
  corrections.forEach(rule => {
    const found = original.filter(question => {
      const text = normalize(question.question);
      return rule.slice(0, -1).every(part => text.includes(part));
    });
    found.forEach(question => {
      const answer = normalize(rule[rule.length - 1]);
      const index = question.options.findIndex(option => normalize(option) === answer);
      if (index >= 0) question.answer = index;
      addModule(question);
    });
  });
  const seen = new Set();
  banks.original = original.filter(question => {
    const key = normalize(question.question);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  fill();
  filter();
})();
