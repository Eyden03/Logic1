(() => {
  const normalize = value => String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const original = banks.original;

  const additions = [
    {
      topic: 'Univocal, Equivocal, Analogous',
      match: text => text.includes('light') && text.includes('physics') && text.includes('poetry'),
      question: '“The word “light” in physics and “light in poetry” is an example of a univocal, equivocal, or analogous term.',
      options: ['Univocal term', 'Analogous term', 'Equivocal term'],
      answer: 2,
      explanation: 'The two uses of “light” are treated by the course as having different meanings.'
    },
    {
      topic: 'Univocal, Equivocal, Analogous',
      match: text => text.includes('medicine') && text.includes('heal') && text.includes('science'),
      question: '“Medicine to heal and “medicine as a science” is an example of a univocal, equivocal, or analogous term.',
      options: ['Equivocal term', 'Univocal term', 'Analogous term'],
      answer: 2,
      explanation: 'The meanings are different but related: medicine can refer to something used for healing and to the science or field concerned with healing.'
    },
    {
      topic: 'Univocal, Equivocal, Analogous',
      match: text => text.includes('book') && text.includes('reading material') && text.includes('record'),
      question: '“Book as reading material and “book as a record” is an example of a univocal, equivocal, or analogous term.',
      options: ['Analogous term', 'Univocal term', 'Equivocal term'],
      answer: 2,
      explanation: 'Following the classification pattern used in the course, these are treated as distinct meanings of the same word.'
    },
    {
      topic: 'Foundations of Logic & Epistemology',
      match: text => text.includes('verbal expression') && text.includes('truth value'),
      question: 'It refers to a verbal expression or statement which has truth value and can either be true or false.',
      options: ['Conclusion', 'Premise', 'Terms', 'Propositions'],
      answer: 3,
      explanation: 'A proposition is a statement that has a truth value and can be either true or false.'
    },
    {
      topic: 'Univocal, Equivocal, Analogous',
      match: text => text.includes('crown of a king') && text.includes('crown of a tree'),
      question: '“Crown of a king and “crown of a tree” is an example of a univocal, equivocal, or analogous term.',
      options: ['Equivocal term', 'Analogous term', 'Univocal term'],
      answer: 1,
      explanation: 'The meanings are related by similarity because “crown” can refer to an upper or top part.'
    },
    {
      topic: 'Univocal, Equivocal, Analogous',
      match: text => text.includes('justice in law') && text.includes('justice in morality'),
      question: '“Justice in law and “justice in morality” is an example of a univocal, equivocal, or analogous term.',
      options: ['Equivocal term', 'Univocal term', 'Analogous term'],
      answer: 2,
      explanation: 'The uses differ in context but remain related through the concept of justice.'
    }
  ];

  const corrections = [
    {
      match: text => text.includes('king as ruler') && text.includes('king in chess'),
      answer: 'equivocal term',
      explanation: 'Equivocal term. This answer was explicitly confirmed by the LMS.'
    },
    {
      match: text => text.includes('sound as noise') && text.includes('sound as healthy'),
      answer: 'analogous term',
      explanation: 'Analogous term. The LMS explicitly marked Analogous as correct and Equivocal as incorrect.'
    },
    {
      match: text => text.includes('patriotism is an example'),
      answer: 'abstract term',
      explanation: 'Patriotism refers to an intangible idea or quality.'
    }
  ];

  const updateMatches = (matcher, update) => {
    const matches = original.filter(item => matcher(normalize(item.question)));
    matches.forEach(item => {
      Object.assign(item, update(item));
    });
    return matches;
  };

  additions.forEach(item => {
    const matches = updateMatches(item.match, () => item);
    if (!matches.length) original.push({
      topic: item.topic,
      question: item.question,
      options: item.options.slice(),
      answer: item.answer,
      explanation: item.explanation
    });

    let kept = false;
    banks.original = banks.original.filter(question => {
      if (!item.match(normalize(question.question))) return true;
      if (!kept) {
        kept = true;
        return true;
      }
      return false;
    });
  });

  corrections.forEach(item => {
    const matches = banks.original.filter(question => item.match(normalize(question.question)));
    matches.forEach(question => {
      const answerIndex = question.options.findIndex(option => normalize(option) === item.answer);
      if (answerIndex !== -1) question.answer = answerIndex;
      question.explanation = item.explanation;
    });
  });

  fill();
  filter();
})();
