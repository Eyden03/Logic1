(() => {
  const normalize = value => String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const cleanQuestion = value => String(value).replace(/\s*[✓✗]+\s*$/g, '').trim();
  const sourceQuestions = [
  {
    "module": "SA1",
    "question": "Which branch examines “What is art?”",
    "options": [
      "Epistemology",
      "Logic",
      "Aesthetics",
      "Ethics"
    ],
    "answer": 2,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Aesthetics. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "The moral principle of deciding whether an action is right or wrong belongs to:",
    "options": [
      "Logic",
      "Aesthetics",
      "Epistemology",
      "Ethics"
    ],
    "answer": 3,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Ethics. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "“What is truth?” is primarily a question of:",
    "options": [
      "Epistemology",
      "Logic",
      "Metaphysics",
      "Aesthetics"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Epistemology. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "The study of whether taste in art can be judged objectively belongs to:",
    "options": [
      "Logic",
      "Aesthetics",
      "Epistemology",
      "Metaphysics"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Aesthetics. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Which branch of philosophy studies the nature of reality, existence, and being?",
    "options": [
      "Metaphysics",
      "Ethics",
      "Epistemology",
      "Aesthetics"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Metaphysics. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "The branch of philosophy that studies correct reasoning and arguments is:",
    "options": [
      "Epistemology",
      "Ethics",
      "Logic",
      "Aesthetics"
    ],
    "answer": 2,
    "topic": "Arguments",
    "explanation": "Correct answer: Logic. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "“How do we justify our beliefs?” is a question of:",
    "options": [
      "Epistemology",
      "Metaphysics",
      "Logic",
      "Aesthetics"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Epistemology. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "The branch of philosophy that focuses on questions of right and wrong conduct is:",
    "options": [
      "Logic",
      "Metaphysics",
      "Aesthetics",
      "Ethics"
    ],
    "answer": 3,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Ethics. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "The golden rule “Do unto others as you would have them do unto you” belongs to:",
    "options": [
      "Ethics",
      "Logic",
      "Epistemology",
      "Metaphysics"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Ethics. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "The study of deductive and inductive reasoning belongs to:",
    "options": [
      "Ethics",
      "Epistemology",
      "Logic",
      "Metaphysics"
    ],
    "answer": 2,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Logic. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "If a student is punctual, they arrive on time. Alex is punctual. Therefore, he arrives on time. ✓",
    "options": [
      "Most Probably False",
      "Certainly False",
      "Most Probably True",
      "Certainly True"
    ],
    "answer": 3,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Certainly True. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "If you heat water to 100°C, it boils. The water is heated to 100°C. Therefore, it will boil. ✓",
    "options": [
      "Most Probably False",
      "Certainly True",
      "Most Probably True",
      "Certainly False"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Certainly True. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "If a student studies hard, they will pass the exam. Maria studied hard. Therefore, Maria will pass the exam. ✓",
    "options": [
      "Certainly True",
      "Most Probably True",
      "Certainly False",
      "Most Probably False"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Certainly True. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Manny Villar will win the presidential election if and only if Noli de Castro will not run. Noli de Castro runs for the position of president. Therefore, Manny Villar will win the presidential election. ✓",
    "options": [
      "Certainly False",
      "Certainly True",
      "Most Probably True",
      "Most Probably False"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Certainly False. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "If Tom forgets to set his alarm, he will be late for work. Tom forgot to set his alarm. Therefore, he will be late. ✓",
    "options": [
      "Most Probably True",
      "Certainly False",
      "Most Probably False",
      "Certainly True"
    ],
    "answer": 3,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Certainly True. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "It refers to is the study of the methods and principles used to distinguish correct from incorrect reasoning.",
    "options": [
      "Epistemology",
      "Ethics",
      "Logic",
      "Metaphysics"
    ],
    "answer": 2,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Logic. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Identify whether each statement is an argument or not. Write A if it is an argument and NA if it’s not. Witnesses said they heard a loud crack before a balcony gave way at a popular nightspot, dropping dozens of screaming people fourteen feet. At least eighty people were injured at the Diamond Horseshoe casino when they fell onto broken glass and splintered wood. Investigators are waiting for an engineer’s report on the deck’s occupancy load. ✓",
    "options": [
      "NA",
      "A"
    ],
    "answer": 0,
    "topic": "Arguments",
    "explanation": "Correct answer: NA. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Identify whether the statement is a proposition of not. Write P if it is a proposition and NP if it’s not. Wear a face mask every time you go out ✓",
    "options": [
      "P",
      "NP"
    ],
    "answer": 1,
    "topic": "Proposition or Not",
    "explanation": "Correct answer: NP. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "It is considered as the building blocks of knowledge.",
    "options": [
      "Ideas",
      "Language",
      "Terms",
      "Concepts"
    ],
    "answer": 2,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Terms. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Identify whether each statement is an argument or not. Write A if it is an argument and NA if it’s not. Poverty offers numerous benefits to the nonpoor. Antipoverty programs provide jobs for middle-class professionals in social work, penology, and public health. Such workers’ future advancement is tied to the continued growth of bureaucracies’ dependent on the existence of poverty. ✓",
    "options": [
      "NA",
      "A"
    ],
    "answer": 1,
    "topic": "Arguments",
    "explanation": "Correct answer: A. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "It is the branch of philosophy that deals with the nature and extent of human knowledge.",
    "options": [
      "Logic",
      "Ethics",
      "Metaphysics",
      "Epistemology"
    ],
    "answer": 3,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Epistemology. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Identify whether the statement is a proposition of not. Write P if it is a proposition and NP if it’s not. The virus is transferred through droplets. ✓",
    "options": [
      "NP",
      "P"
    ],
    "answer": 1,
    "topic": "Proposition or Not",
    "explanation": "Correct answer: P. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "It refers to a verbal expression or statement which has truth value and can either be true or false.",
    "options": [
      "Conclusion",
      "Premise",
      "Terms",
      "Propositions"
    ],
    "answer": 3,
    "topic": "Proposition or Not",
    "explanation": "Correct answer: Propositions. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Identify whether the statement is a proposition of not. Write P if it is a proposition and NP if it’s not. Everybody has the right to express their ideas and opinions. ✓",
    "options": [
      "NP",
      "P"
    ],
    "answer": 1,
    "topic": "Proposition or Not",
    "explanation": "Correct answer: P. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "It refers to the conscious act of evaluating, judging, and criticizing the worth or value of another person’s action, belief, behavior, intellectual and rational product.",
    "options": [
      "Philosophical Thinking",
      "Logical Thinking",
      "Critical Thinking",
      "Creative Thinking"
    ],
    "answer": 2,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Critical Thinking. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Ethics is the branch of philosophy that studies the principles of human action. It deals with the morality of human actions. It deals with values of good and evil.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: True. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Metaphysics is the branch of philosophy that studies existence as an entity.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: True. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Epistemology is the branch of philosophy that deals with the theory of knowledge.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: True. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "The term 'ethics' comes from the Greek word 'ethos' which means custom or habit.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: True. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Philosophy goes beyond the face value of things and investigates their root causes.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: True. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Rationalism believes that knowledge can be got only",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: True. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Skepticism believes that nothing can be known for certain. For the skeptics, certainty is an illusion.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: True. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Aesthetics and ethics are sometimes grouped together as a branch of philosophy called axiology.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: True. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "The subject of matter of philosophy is reality. Therefore, philosophy investigates the ultimate causes of reality.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: True. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Epistemology studies the nature and extent of human knowledge.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: True. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Concrete or Abstract? clean kitchen",
    "options": [
      "Abstract",
      "Concrete"
    ],
    "answer": 1,
    "topic": "Concrete or Abstract",
    "explanation": "Correct answer: Concrete. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Concrete or Abstract? perfume",
    "options": [
      "Abstract",
      "Concrete"
    ],
    "answer": 1,
    "topic": "Concrete or Abstract",
    "explanation": "Correct answer: Concrete. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Concrete or Abstract? Diligence",
    "options": [
      "Concrete",
      "Abstract"
    ],
    "answer": 1,
    "topic": "Concrete or Abstract",
    "explanation": "Correct answer: Abstract. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Concrete or Abstract? Purity",
    "options": [
      "Abstract",
      "Concrete"
    ],
    "answer": 0,
    "topic": "Concrete or Abstract",
    "explanation": "Correct answer: Abstract. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Concrete or Abstract? Compassion",
    "options": [
      "Abstract",
      "Concrete"
    ],
    "answer": 0,
    "topic": "Concrete or Abstract",
    "explanation": "Correct answer: Abstract. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Concrete or Abstract? Honest man",
    "options": [
      "Concrete",
      "Abstract"
    ],
    "answer": 0,
    "topic": "Concrete or Abstract",
    "explanation": "Correct answer: Concrete. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Concrete or Abstract? Innocence",
    "options": [
      "Abstract",
      "Concrete"
    ],
    "answer": 0,
    "topic": "Concrete or Abstract",
    "explanation": "Correct answer: Abstract. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Concrete or Abstract? Beautiful bride",
    "options": [
      "Concrete",
      "Abstract"
    ],
    "answer": 0,
    "topic": "Concrete or Abstract",
    "explanation": "Correct answer: Concrete. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Concrete or Abstract? AIR",
    "options": [
      "Concrete",
      "Abstract"
    ],
    "answer": 0,
    "topic": "Concrete or Abstract",
    "explanation": "Correct answer: Concrete. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Concrete or Abstract? diligent student",
    "options": [
      "Concrete",
      "Abstract"
    ],
    "answer": 0,
    "topic": "Concrete or Abstract",
    "explanation": "Correct answer: Concrete. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "the bestman",
    "options": [
      "Singular",
      "Universal",
      "Particular"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Singular. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Singular, Particular, Universal Term? Mr. Rodriguez ✓",
    "options": [
      "Singular",
      "Particular",
      "Universal"
    ],
    "answer": 0,
    "topic": "Singular, Particular, Universal",
    "explanation": "Correct answer: Singular. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Singular, Particular, Universal Term? every mammal ✓",
    "options": [
      "Particular",
      "Singular",
      "Universal"
    ],
    "answer": 2,
    "topic": "Singular, Particular, Universal",
    "explanation": "Correct answer: Universal. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Singular, Particular, Universal Term? the philosopher ✓",
    "options": [
      "Universal",
      "Singular",
      "Particular"
    ],
    "answer": 1,
    "topic": "Singular, Particular, Universal",
    "explanation": "Correct answer: Singular. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Some plates",
    "options": [
      "Particular",
      "Universal",
      "Singular"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Particular. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Singular, Particular, Universal Term? Some tigers ✓",
    "options": [
      "Particular",
      "Singular",
      "Universal"
    ],
    "answer": 0,
    "topic": "Singular, Particular, Universal",
    "explanation": "Correct answer: Particular. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Singular, Particular, Universal Term? This apple ✓",
    "options": [
      "Universal",
      "Singular",
      "Particular"
    ],
    "answer": 1,
    "topic": "Singular, Particular, Universal",
    "explanation": "Correct answer: Singular. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Singular, Particular, Universal Term? All microphones ✓",
    "options": [
      "Particular",
      "Singular",
      "Universal"
    ],
    "answer": 2,
    "topic": "Singular, Particular, Universal",
    "explanation": "Correct answer: Universal. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Singular, Particular, Universal Term? Some medical practitioners ✓",
    "options": [
      "Singular",
      "Universal",
      "Particular"
    ],
    "answer": 2,
    "topic": "Singular, Particular, Universal",
    "explanation": "Correct answer: Particular. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Singular, Particular, Universal Term? All laptops ✓",
    "options": [
      "Particular",
      "Universal",
      "Singular"
    ],
    "answer": 1,
    "topic": "Singular, Particular, Universal",
    "explanation": "Correct answer: Universal. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "A knife is sharp. I have a sharp mind.",
    "options": [
      "Equivocal",
      "Analogous",
      "Univocal"
    ],
    "answer": 1,
    "topic": "Univocal, Equivocal, Analogous",
    "explanation": "Correct answer: Analogous. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Cat is an animal. Dog is an animal.",
    "options": [
      "Univocal",
      "Equivocal",
      "Analogous"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Univocal. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Please watch the tower. My watch is broken.",
    "options": [
      "Univocal",
      "Equivocal",
      "Analogous"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Equivocal. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Bark of the dog. Bark of a tree.",
    "options": [
      "Analogous",
      "Univocal",
      "Equivocal"
    ],
    "answer": 2,
    "topic": "Univocal, Equivocal, Analogous",
    "explanation": "Correct answer: Equivocal. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Foot of a mountain. Foot of a man.",
    "options": [
      "Analogous",
      "Univocal",
      "Equivocal"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Analogous. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "What would be the correct logical structure of this proposition? Fathers provide for the family. ✓",
    "options": [
      "Fathers are providers.",
      "Fathers are providing for the family.",
      "Fathers are providing.",
      "Fathers are providing for the whole community."
    ],
    "answer": 0,
    "topic": "Subject–Copula–Predicate",
    "explanation": "Correct answer: Fathers are providers.. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "What would be the correct logical structure of this proposition? Dolphin swims. ✓",
    "options": [
      "Dolphins are swimming.",
      "Dolphins are swimming animals.",
      "Dolphins are swimming in the ocean.",
      "Dolphins are swimming slowly."
    ],
    "answer": 1,
    "topic": "Subject–Copula–Predicate",
    "explanation": "Correct answer: Dolphins are swimming animals.. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "What would be the correct logical structure of this proposition? Sam dances. ✓",
    "options": [
      "Sam is dancing beautifully.",
      "Sam is a dancer.",
      "Sam is dancing.",
      "Sam dances gracefully."
    ],
    "answer": 1,
    "topic": "Subject–Copula–Predicate",
    "explanation": "Correct answer: Sam is a dancer.. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "What would be the correct logical structure of this proposition? Men seek fortune. ✓",
    "options": [
      "Men are seeking fortune.",
      "Men are seeking and finding fortune.",
      "Men are seekers of fortune.",
      "Men are wealth seekers and fortune finders."
    ],
    "answer": 2,
    "topic": "Subject–Copula–Predicate",
    "explanation": "Correct answer: Men are seekers of fortune.. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "What would be the correct logical structure of this proposition? Bats fly. ✓",
    "options": [
      "Bats are fliers.",
      "Bats are flying creatures.",
      "All of the options provided",
      "Bats are flying animals."
    ],
    "answer": 2,
    "topic": "Subject–Copula–Predicate",
    "explanation": "Correct answer: All of the options provided. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "What is your name?",
    "options": [
      "Proposition",
      "Not a proposition"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Not a proposition. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Today is Friday.",
    "options": [
      "Proposition",
      "Not a proposition"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Proposition. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "There is a war happening in Ukraine.",
    "options": [
      "Not a proposition",
      "Proposition"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Proposition. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Congratulations!",
    "options": [
      "Not a proposition",
      "Proposition"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Not a proposition. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "\"Joining us?\"",
    "options": [
      "Not a proposition",
      "Proposition"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Not a proposition. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "This book is easy to read.",
    "options": [
      "Not a proposition",
      "Proposition"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Proposition. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "\"How do you do?\"",
    "options": [
      "Not a proposition",
      "Proposition"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Not a proposition. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "The color of the ocean and the sky is blue.",
    "options": [
      "Proposition",
      "Not a proposition"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Proposition. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Jump and slide.",
    "options": [
      "Not a proposition",
      "Proposition"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Not a proposition. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Is the highlighted proposition a Premise or Conclusion? All physicians are individuals who have earned degrees in political science, and some lawyers are physicians. Therefore, some lawyers are persons who have earned degrees in political science. ✓",
    "options": [
      "Premise",
      "Conclusion"
    ],
    "answer": 0,
    "topic": "Premise or Conclusion",
    "explanation": "Correct answer: Premise. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Is the highlighted proposition a Premise or Conclusion? If it is cloudy, then it is raining. It is not cloudy. So, it is not raining. ✓",
    "options": [
      "Conclusion",
      "Premise"
    ],
    "answer": 1,
    "topic": "Premise or Conclusion",
    "explanation": "Correct answer: Premise. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Is the highlighted proposition a Premise or Conclusion? If dogs have more than five legs, then they have more than four legs. Dogs do not have more than five legs. Therefore, dogs do not have more than four legs. ✓",
    "options": [
      "Conclusion",
      "Premise"
    ],
    "answer": 0,
    "topic": "Premise or Conclusion",
    "explanation": "Correct answer: Conclusion. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Is the highlighted proposition a Premise or Conclusion? Since whales are reptiles, and reptiles can fly. It follows that whales can fly. ✓",
    "options": [
      "Premise",
      "Conclusion"
    ],
    "answer": 0,
    "topic": "Premise or Conclusion",
    "explanation": "Correct answer: Premise. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Is the highlighted proposition a Premise or Conclusion? Someone must have been spying on us last night. Look at these footprints in the mud by the window. ✓",
    "options": [
      "Premise",
      "Conclusion"
    ],
    "answer": 0,
    "topic": "Premise or Conclusion",
    "explanation": "Correct answer: Premise. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Is the highlighted proposition a Premise or Conclusion? We know that the murderer was either Jackson or Harrison. We also know the murdered could not have been Harrison. So, the murder had to be Jackson. ✓",
    "options": [
      "Conclusion",
      "Proposition"
    ],
    "answer": 0,
    "topic": "Premise or Conclusion",
    "explanation": "Correct answer: Conclusion. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Is the highlighted proposition a Premise or Conclusion? This fish looks very similar to a trout or a salmon. Since those fish are tasty, this one must be tasty, too. ✓",
    "options": [
      "Conclusion",
      "Premise"
    ],
    "answer": 1,
    "topic": "Premise or Conclusion",
    "explanation": "Correct answer: Premise. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Is the highlighted proposition a Premise or Conclusion? When I wake up in the morning, the world is pretty much the same as I left it the day before. So, today, it will be pretty much the same as it was yesterday. ✓",
    "options": [
      "Premise",
      "Conclusion"
    ],
    "answer": 1,
    "topic": "Premise or Conclusion",
    "explanation": "Correct answer: Conclusion. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Is the highlighted proposition a Premise or Conclusion? Texans must all wear cowboy boots. I went to Houston last Thursday and everyone I saw on the street had boots on. ✓",
    "options": [
      "Premise",
      "Conclusion"
    ],
    "answer": 1,
    "topic": "Premise or Conclusion",
    "explanation": "Correct answer: Conclusion. Source: SA1."
  },
  {
    "module": "SA1",
    "question": "Is the highlighted proposition a Premise or Conclusion? If the Staples Center is in Los Angeles, then Mt. Kilimanjaro is green. The Staples Center is in Los Angeles. It follows that Mt. Kilimanjaro is green. ✓",
    "options": [
      "Premise",
      "Conclusion"
    ],
    "answer": 1,
    "topic": "Premise or Conclusion",
    "explanation": "Correct answer: Conclusion. Source: SA1."
  },
  {
    "module": "SA2",
    "question": "Determine the fallacy. In her work, an attorney is always free to consult law books, and a physician often looks up cases in his medical texts. So students should be permitted to use textbooks during examinations. ✓",
    "options": [
      "Poisoning the Well (Ad Hominem)",
      "False Analogy (Accident)",
      "Appeal to Inappropriate Authority",
      "Circular Argument (Begging the Question)"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: False Analogy (Accident). Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Determine the fallacy. Why are you so skeptical about ESP? Can you prove that it does not exist? ✓",
    "options": [
      "Complex Question",
      "Appeal to Ignorance",
      "Hypothesis Contrary to Fact",
      "Post Hoc (False Cause)"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Appeal to Ignorance. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Determine the fallacy. \"All homeless people are lazy.\" ✓",
    "options": [
      "Appeal to Ignorance",
      "False Analogy (Accident)",
      "Dicto Simpliciter",
      "Hasty Generalization"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: Dicto Simpliciter. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Determine the fallacy. Opinion poll question: Do you favor more money for welfare programs, or do you feel we should let people starve on the streets? ✓",
    "options": [
      "Equivocation",
      "False Dichotomy",
      "Composition",
      "Division"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: False Dichotomy. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Determine the fallacy. \"We shouldn't even bother to interview that job applicant. He has a beard.\" ✓",
    "options": [
      "Appeal to Inappropriate Authority",
      "Appeal to Ignorance",
      "Hasty Generalization",
      "Poisoning the Well (Ad Hominem)"
    ],
    "answer": 3,
    "topic": "Fallacies",
    "explanation": "Correct answer: Poisoning the Well (Ad Hominem). Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? You should not cut people. Therefore, surgeons should not cut people. ✓",
    "options": [
      "Red Herring",
      "Strawman",
      "Accident",
      "Appeal to People"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: Accident. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? \"You better agree to my proposal, or you cannot see your wife tonight.\" ✓",
    "options": [
      "Appeal to Force",
      "Appeal to People",
      "Appeal to Pity",
      "Red Herring"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: Appeal to Force. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? When your mom gets your phone bill and you have gone over the limit you begin talking to her about how hard your math class is and how well you did on a test today. ✓",
    "options": [
      "Missing the Point",
      "Red Herring",
      "Strawman Fallacy",
      "Accident"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Red Herring. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? A conversation between two basketball players: Zack: I heard that our opponent next week is the best team in our district. Carl: Then, let us not attend the game. We'll lose anyway. ✓",
    "options": [
      "Accident",
      "Missing the Point",
      "Red Herring",
      "Appeal to People"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Missing the Point. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? I should smoke since everybody is doing it. ✓",
    "options": [
      "Appeal to Pity",
      "Appeal to People",
      "Appeal to Force",
      "Red Herring"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Appeal to People. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? Lost: The dog of a lady with a long tail. ✓",
    "options": [
      "Composition",
      "Amphiboly",
      "Division",
      "Equivocation"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Amphiboly. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? All stars are astronomical bodies. Ms. Alma Moreno is a star. Therefore, Ms. Alma Moreno is an astronomical body. ✓",
    "options": [
      "Composition",
      "Division",
      "Amphiboly",
      "Equivocation"
    ],
    "answer": 3,
    "topic": "Fallacies",
    "explanation": "Correct answer: Equivocation. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? Philosophy students make up a good class. Berto is a philosophy student. Therefore, Berto makes up a good class. ✓",
    "options": [
      "Amphiboly",
      "Composition",
      "Equivocation",
      "Division"
    ],
    "answer": 3,
    "topic": "Fallacies",
    "explanation": "Correct answer: Division. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? Jose is an intelligent boy. But Jose studies in Far Eastern University. Therefore, all who study at FEU are intelligent. ✓",
    "options": [
      "Composition",
      "Amphiboly",
      "Equivocation",
      "Division"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: Composition. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? John attacked a man with a knife. ✓",
    "options": [
      "Equivocation",
      "Division",
      "Composition",
      "Amphiboly"
    ],
    "answer": 3,
    "topic": "Fallacies",
    "explanation": "Correct answer: Amphiboly. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? Where did you hide the cookies you stole? ✓",
    "options": [
      "Begging the Question (Circular Argument)",
      "Complex Question",
      "False Dichotomy",
      "Suppressed Evidence"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Complex Question. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? Have you stopped cheating on the exams? ✓",
    "options": [
      "Complex Question",
      "Begging the Question (Circular Argument)",
      "Suppressed Evidence",
      "False Dichotomy"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: Complex Question. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? Man has freewill because he is responsible for his actions. But why is he responsible for his actions? Because he has free will. ✓",
    "options": [
      "Suppressed Evidence",
      "Complex Question",
      "Begging the Question (Circular Argument)",
      "False Dichotomy"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: Begging the Question (Circular Argument). Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? If you are not the solution, then you are part of the problem. ✓",
    "options": [
      "Suppressed Evidence",
      "False Dichotomy",
      "Begging the Question (Circular Argument)",
      "Complex Question"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: False Dichotomy. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? God exists, because the Bible says so and the Bible is the word of God. ✓",
    "options": [
      "Begging the Question (Circular Argument)",
      "Suppressed Evidence",
      "Complex Question",
      "False Dichotomy"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: Begging the Question (Circular Argument). Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? These pills must be safe and effective for reducing because Toni Gonzaga is endorsing it. ✓",
    "options": [
      "Argument from Ignorance",
      "Appeal to Inappropriate Authority",
      "False Cause",
      "Hasty Generalization"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Appeal to Inappropriate Authority. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? “You’re a jinx! Every time you show up our activity does not push through.” ✓",
    "options": [
      "False Cause",
      "Argument from Ignorance",
      "Slippery Slope",
      "Appeal to Inappropriate Authority"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: False Cause. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? You came to the room before me. Therefore, you must be the cause of all the dirt in this room. ✓",
    "options": [
      "Weak Analogy",
      "Appeal to Inappropriate Authority",
      "Slippery Slope",
      "False Cause"
    ],
    "answer": 3,
    "topic": "Fallacies",
    "explanation": "Correct answer: False Cause. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? If one drinks liquor, he will get drunk, if he gets drunk, he will fall asleep, if he falls asleep he will not commit sin, if he does not commit sin, he will got to heaven. Hence, if one drinks liquor, he will go to heaven. ✓",
    "options": [
      "Hasty Generalization",
      "False Cause",
      "Slippery Slope",
      "Appeal to Inappropriate Authority"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: Slippery Slope. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "What is the fallacy being represented in this example? “Soft drinks are delightful refreshments. Therefore, everyone should drink it every day.” ✓",
    "options": [
      "Hasty Generalization",
      "Slippery Slope",
      "Dicto Simpliciter (Unqualified Generalization)",
      "Argument from Ignorance"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: Dicto Simpliciter (Unqualified Generalization). Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "The red herring fallacy is committed when the arguer diverts the attention of the reader or listener by changing the subject to a different but sometimes subtly related one. He or she then finishes by either drawing a conclusion about this different issue or by merely presuming that some conclusion has been established.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: True. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Determine whether the following arguments are inductive or deductive Write I if it is inductive and D if it is deductive. The Broadway Theater marquee says that The Phantom of the Opera is playing nightly. Therefore, it must be that case that Phantom is playing there tonight. ✗",
    "options": [
      "I",
      "D"
    ],
    "answer": 1,
    "topic": "Inductive or Deductive",
    "explanation": "Correct answer: D. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Argument Against the Person (Argumentum ad Hominem) is rejecting an argument by attacking the person who offered it – either in pointing out a character flaw to imputing evil intentions.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "topic": "Arguments",
    "explanation": "Correct answer: True. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "A fallacy is an argument that is psychologically or emotionally persuasive but logically incorrect.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: True. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Informal logic is considered as an attempt to develop a logic that can analyze and assess the \"informal\" reasoning that occurs in natural language contexts in, for example, political debate, legal proceedings, social commentary, and the opinion pieces featured in the mass media (in newspapers, magazines, television, the Internet, and so on).",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: True. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Classify the categorical proposition: Some mayas are not flowers. ✓",
    "options": [
      "I",
      "A",
      "O",
      "E"
    ],
    "answer": 2,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: O. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Classify the categorical proposition: Some rational beings are wise. ✓",
    "options": [
      "E",
      "I",
      "O",
      "A"
    ],
    "answer": 1,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: I. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Classify the categorical proposition: Some men are not Filipinos. ✓",
    "options": [
      "E",
      "O",
      "A",
      "I"
    ],
    "answer": 1,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: O. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Classify the categorical proposition: All objects suitable for boat anchors are objects weighing at least fifteen pounds. ✓",
    "options": [
      "E",
      "O",
      "I",
      "A"
    ],
    "answer": 3,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: A. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Classify the categorical proposition: Some cripples are men. ✓",
    "options": [
      "E",
      "A",
      "O",
      "I"
    ],
    "answer": 3,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: I. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Classify the categorical proposition: Some vines are plants. ✓",
    "options": [
      "E",
      "A",
      "I",
      "O"
    ],
    "answer": 2,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: I. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "No reptiles are warm-blooded animals.",
    "options": [
      "A",
      "O",
      "E",
      "I"
    ],
    "answer": 2,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: E. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Classify the categorical proposition: Not all S is P. ✗",
    "options": [
      "A",
      "I",
      "O",
      "E"
    ],
    "answer": 2,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: O. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Classify the categorical proposition: All graduates of West Point are commissioned officers in the US Army. ✓",
    "options": [
      "E",
      "I",
      "O",
      "A"
    ],
    "answer": 3,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: A. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Classify the categorical proposition: ALL S is P. ✓",
    "options": [
      "O",
      "A",
      "E",
      "I"
    ],
    "answer": 1,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: A. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Classify the categorical proposition: All men are imperfect. ✓",
    "options": [
      "A",
      "O",
      "E",
      "I"
    ],
    "answer": 0,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: A. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Classify the categorical proposition: Some S is not P. ✓",
    "options": [
      "A",
      "I",
      "O",
      "E"
    ],
    "answer": 2,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: O. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Classify the categorical proposition: No organic compounds are metals. ✓",
    "options": [
      "I",
      "O",
      "E",
      "A"
    ],
    "answer": 2,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: E. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Classify the categorical proposition: Every mortal being is finite. ✓",
    "options": [
      "I",
      "O",
      "E",
      "A"
    ],
    "answer": 3,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: A. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Classify the categorical proposition: No citizen is an alien. ✓",
    "options": [
      "E",
      "I",
      "O",
      "A"
    ],
    "answer": 0,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: E. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Classify the categorical proposition: Some saints are reformed criminals. ✓",
    "options": [
      "O",
      "A",
      "E",
      "I"
    ],
    "answer": 3,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: I. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Classify the categorical proposition: All kangaroos are marsupials. ✓",
    "options": [
      "A",
      "O",
      "I",
      "E"
    ],
    "answer": 0,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: A. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Classify the categorical proposition: No fools are sages. ✓",
    "options": [
      "A",
      "I",
      "O",
      "E"
    ],
    "answer": 3,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: E. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Classify the categorical proposition: Some cars are not Fords. ✓",
    "options": [
      "E",
      "A",
      "O",
      "I"
    ],
    "answer": 2,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: O. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Classify the categorical proposition: No Vikings are people who were wimps. ✓",
    "options": [
      "O",
      "A",
      "I",
      "E"
    ],
    "answer": 3,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: E. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Classify the categorical proposition: No snakes are mammals. ✓",
    "options": [
      "O",
      "E",
      "I",
      "A"
    ],
    "answer": 1,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: E. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Classify the categorical proposition: All Shawnees are people who were skillful trackers. ✓",
    "options": [
      "A",
      "O",
      "I",
      "E"
    ],
    "answer": 0,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: A. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Classify the categorical proposition: All patriotic Americans are lovers of justice. ✓",
    "options": [
      "I",
      "A",
      "0",
      "E"
    ],
    "answer": 1,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: A. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Classify the categorical proposition: All college students who listened to Jimi Hendrix are people who opposed the war in Vietnam. ✓",
    "options": [
      "A",
      "I",
      "E",
      "O"
    ],
    "answer": 0,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: A. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Classify the categorical proposition: All people who have committed murder are people who deserve death. ✓",
    "options": [
      "O",
      "A",
      "E",
      "I"
    ],
    "answer": 1,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: A. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Not to obey one's parents is bad.",
    "options": [
      "Negative",
      "Affirmative"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Affirmative. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Not to marry when you are still young is to lose a great opportunity.",
    "options": [
      "Negative",
      "Affirmative"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Affirmative. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "No Asians are Americans.",
    "options": [
      "Affirmative",
      "Negative"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Negative. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Unreliable people are irresponsible.",
    "options": [
      "Negative",
      "Affirmative"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Affirmative. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Many Filipino are fortunate.",
    "options": [
      "Affirmative",
      "Negative"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Affirmative. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Not all that glitters are gold.",
    "options": [
      "Negative",
      "Affirmative"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Affirmative. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Whoever does good is rewarded.",
    "options": [
      "Affirmative",
      "Negative"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Affirmative. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "A plant is not an animal.",
    "options": [
      "Negative",
      "Affirmative"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Negative. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "Computer literates are not numerous.",
    "options": [
      "Affirmative",
      "Negative"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Negative. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "Not all working students are uncompromising.",
    "options": [
      "Affirmative",
      "Negative"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: Affirmative. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If A proposition is false, then E is _____?",
    "options": [
      "False",
      "Doubtful",
      "True"
    ],
    "answer": 1,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: Doubtful. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If I proposition is true, then O is _____?",
    "options": [
      "Doubtful",
      "False",
      "True"
    ],
    "answer": 0,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: Doubtful. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If A proposition is true, then I is ____?",
    "options": [
      "True",
      "Doubtful",
      "False"
    ],
    "answer": 0,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: True. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If O proposition is false, then A is _____?",
    "options": [
      "Doubtful",
      "True",
      "False"
    ],
    "answer": 1,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: True. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If A proposition is false, then O is _____?",
    "options": [
      "True",
      "False",
      "Doubtful"
    ],
    "answer": 0,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: True. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If E proposition is true, then A is _____?",
    "options": [
      "True",
      "False",
      "Doubtful"
    ],
    "answer": 1,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: False. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If I proposition is true, then E is _____?",
    "options": [
      "Doubtful",
      "True",
      "False"
    ],
    "answer": 2,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: False. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If O proposition is false, then E is _____?",
    "options": [
      "False",
      "Doubtful",
      "True"
    ],
    "answer": 0,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: False. Source: SA2."
  },
  {
    "module": "SA2",
    "question": "If E proposition is false, then O is _____?",
    "options": [
      "True",
      "Doubtful",
      "False"
    ],
    "answer": 1,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: Doubtful. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If E proposition is true, then O is _____?",
    "options": [
      "True",
      "Doubtful",
      "False"
    ],
    "answer": 0,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: True. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If O proposition is true, then A is _____?",
    "options": [
      "True",
      "False",
      "Doubtful"
    ],
    "answer": 1,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: False. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If I proposition is true, then A is _____?",
    "options": [
      "True",
      "Doubtful",
      "False"
    ],
    "answer": 1,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: Doubtful. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If A proposition is true, then … then E is ____?",
    "options": [
      "Doubtful",
      "True",
      "False"
    ],
    "answer": 2,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: False. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If O proposition is true, then I is _____?",
    "options": [
      "True",
      "Doubtful",
      "False"
    ],
    "answer": 1,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: Doubtful. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If I proposition is false, then A is _____?",
    "options": [
      "False",
      "True",
      "Doubtful"
    ],
    "answer": 0,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: False. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If I proposition is false, then O is _____?",
    "options": [
      "False",
      "Doubtful",
      "True"
    ],
    "answer": 2,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: True. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If A proposition is false, then I is _____?",
    "options": [
      "False",
      "Doubtful",
      "True"
    ],
    "answer": 1,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: Doubtful. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If E proposition is false, then I is _____?",
    "options": [
      "Doubtful",
      "True",
      "False"
    ],
    "answer": 1,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: True. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If O proposition is true, then E is _____?",
    "options": [
      "True",
      "Doubtful",
      "False"
    ],
    "answer": 1,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: Doubtful. Source: SA2."
  },
  {
    "module": "SA2, Formatives",
    "question": "If E proposition is true, then I is _____?",
    "options": [
      "False",
      "Doubtful",
      "True"
    ],
    "answer": 0,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: False. Source: SA2."
  },
  {
    "module": "Formatives",
    "question": "Informal logic is also known as non-formal logic or critical thinking.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: True. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Ignoratio elenchi means “ignorance of the proof.” The arguer is ignorant of the logical implications of his or her own premises and, as a result, draws a conclusion that misses the point entirely.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: True. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “Many people believe this, so it must be right.” ✓",
    "options": [
      "Missing the Point",
      "Red Herring",
      "Strawman Fallacy",
      "Appeal to People"
    ],
    "answer": 3,
    "topic": "Fallacies",
    "explanation": "Correct answer: Appeal to People. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “A famous singer says this product is good, so it must be true.” ✓",
    "options": [
      "Appeal to Ignorance",
      "H",
      "Appeal to Unqualified Authority"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: Appeal to Unqualified Authority. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “Either you support this law, or you hate freedom.” ✓",
    "options": [
      "Complex Question",
      "Begging the Question",
      "Suppressed Evidence",
      "False Dichotomy"
    ],
    "answer": 3,
    "topic": "Fallacies",
    "explanation": "Correct answer: False Dichotomy. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “The term ‘right’ was used to mean correct and also legal in the same argument.” ✓",
    "options": [
      "Composition",
      "Division",
      "Amphiboly",
      "Equivocation"
    ],
    "answer": 3,
    "topic": "Fallacies",
    "explanation": "Correct answer: Equivocation. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Determine whether the following arguments are inductive or deductive Write I if it is inductive and D if it is deductive. When a cook cannot recall the ingredients in a recipe, it is appropriate that she refresh her memory by consulting the recipe book. Similarly, when a student cannot recall the answers during a final exam, it is appropriate that she refresh her memory by consulting the textbook. ✓",
    "options": [
      "D",
      "I"
    ],
    "answer": 1,
    "topic": "Inductive or Deductive",
    "explanation": "Correct answer: I. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "The truth value of any statement is either true or false.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "topic": "Proposition or Not",
    "explanation": "Correct answer: True. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "If I proposition is false, then E is _____?",
    "options": [
      "False",
      "Doubtful",
      "True"
    ],
    "answer": 2,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: True. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Classify the categorical proposition: Not all S is not P. ✗",
    "options": [
      "I",
      "A",
      "E",
      "O"
    ],
    "answer": 0,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: I. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Classify the categorical proposition: No conclusion is possible. ✓",
    "options": [
      "A",
      "I",
      "E",
      "O"
    ],
    "answer": 2,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: E. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “His argument on economics is wrong because he doesn’t have a degree.” ✓",
    "options": [
      "Strawman Fallacy",
      "Appeal to Pity",
      "Ad Hominem",
      "Appeal to Force"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: Ad Hominem. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “A penguin and an eagle both fly (swim/fly); penguins must behave like eagles.” ✓",
    "options": [
      "False Cause",
      "Slippery Slope",
      "Hasty Generalization",
      "Weak Analogy"
    ],
    "answer": 3,
    "topic": "Fallacies",
    "explanation": "Correct answer: Weak Analogy. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “Have you admitted your mistake yet?” ✓",
    "options": [
      "Suppressed Evidence",
      "Complex Question",
      "False Dichotomy",
      "Begging the Question"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Complex Question. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “The instruction ‘Use your head’ was taken literally.” ✓",
    "options": [
      "Composition",
      "Equivocation",
      "Division",
      "Amphiboly"
    ],
    "answer": 3,
    "topic": "Fallacies",
    "explanation": "Correct answer: Amphiboly. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Copula is the part of proposition that affirms or denies the subject.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "topic": "Proposition or Not",
    "explanation": "Correct answer: True. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Determine whether the following arguments are inductive or deductive Write I if it is inductive and D if it is deductive. Suppose figure A is a triangle having two equal angles. It follows that figure A has two equal sides. ✓",
    "options": [
      "D",
      "B"
    ],
    "answer": 0,
    "topic": "Inductive or Deductive",
    "explanation": "Correct answer: D. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Determine whether the following arguments are inductive or deductive Write I if it is inductive and D if it is deductive. Since Christmas is always on a Thursday, it follows that the day after Christmas is always a Friday. ✓",
    "options": [
      "I",
      "D"
    ],
    "answer": 1,
    "topic": "Inductive or Deductive",
    "explanation": "Correct answer: D. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Classify the categorical proposition: No geniuses are conformists. ✓",
    "options": [
      "O",
      "A",
      "E",
      "I"
    ],
    "answer": 2,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: E. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “You must agree with the proposal; think of all the poor families affected.” ✓",
    "options": [
      "Appeal to Force",
      "Ad Hominem",
      "Appeal to Pity",
      "Red Herring"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: Appeal to Pity. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “A penguin and a duck both swim; penguins must have duck behavior.” ✓",
    "options": [
      "False Cause",
      "Slippery Slope",
      "Weak Analogy",
      "Hasty Generalization"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: Weak Analogy. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “Have you stopped wasting resources at home?” ✓",
    "options": [
      "Suppressed Evidence",
      "Begging the Question",
      "False Dichotomy",
      "Complex Question"
    ],
    "answer": 3,
    "topic": "Fallacies",
    "explanation": "Correct answer: Complex Question. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “The parts of this sculpture are large. Therefore, the sculpture is large.” ✓",
    "options": [
      "Composition",
      "Amphiboly",
      "Equivocation",
      "Division"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: Composition. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Informal logic is commonly regarded as an alternative to formal or mathematical logic.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: True. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Hasty Generalization (Converse Accident) is the fallacy occurs when there is a reasonable likelihood that the sample is not representative of the group. Such a likelihood may arise if the sample is either too small or not randomly selected.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: True. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Informal logic is the study of various types of arguments in their natural setting – ordinary discourse. This logic identifies, interprets, analyzes, and evaluates arguments in various language games without using any of the templates of formal logic.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "topic": "Arguments",
    "explanation": "Correct answer: True. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "If E proposition is false, then A is _____?",
    "options": [
      "False",
      "True",
      "Doubtful"
    ],
    "answer": 2,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: Doubtful. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Classify the categorical proposition: All S is not P. ✗",
    "options": [
      "O",
      "I",
      "A",
      "E"
    ],
    "answer": 3,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: E. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “Everyone is wearing this fashion trend, so it must be popular.” ✓",
    "options": [
      "Appeal to People",
      "Strawman Fallacy",
      "Missing the Point",
      "Red Herring"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: Appeal to People. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “If we allow students to redo homework once, soon they will want to redo every test.” ✓",
    "options": [
      "Slippery Slope",
      "False Cause",
      "Appeal to Ignorance",
      "Hasty Generalization"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: Slippery Slope. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “Have you stopped neglecting your duties?” ✓",
    "options": [
      "Begging the Question",
      "Suppressed Evidence",
      "Complex Question",
      "False Dichotomy"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: Complex Question. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “A feather is light. Therefore, everything on the bird must be light.” ✗",
    "options": [
      "Amphiboly",
      "Composition",
      "Division",
      "Equivocation"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Composition. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Informal logic is a branch of logic whose task it is to develop non-formal standards, criteria, procedures for the analysis, interpretation, evaluation, criticism, and construction of argumentation in everyday discourse.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "topic": "Arguments",
    "explanation": "Correct answer: True. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Appeal to pity is the fallacy in which the argument relies on generosity, altruism, or mercy, rather than on reason.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: True. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Classify the categorical proposition: No people who are considerate of others are reckless drivers who pay no attention to traffic regulations. ✓",
    "options": [
      "A",
      "O",
      "E",
      "I"
    ],
    "answer": 2,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: E. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “You are wrong because you once made a mistake in school.” ✓",
    "options": [
      "Appeal to Force",
      "Ad Hominem",
      "Appeal to Pity",
      "Fallacy of Accident"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Ad Hominem. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “No one can disprove UFO sightings, so they are real.” ✓",
    "options": [
      "False Cause",
      "Appeal to Ignorance",
      "Weak Analogy",
      "Hasty Generalization"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Appeal to Ignorance. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “Have you stopped ignoring safety regulations?” ✓",
    "options": [
      "Complex Question",
      "False Dichotomy",
      "Suppressed Evidence",
      "Begging the Question"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: Complex Question. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “I read ‘Visiting relatives can be annoying’ and thought visiting is annoying.” ✓",
    "options": [
      "Composition",
      "Equivocation",
      "Amphiboly",
      "Division"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: Amphiboly. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Some professional wrestlers are elderly persons who are incapable of doing an honest day’s work.",
    "options": [
      "I",
      "O",
      "E",
      "A"
    ],
    "answer": 0,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: I. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “He is not qualified; he once failed a test.” ✓",
    "options": [
      "Fallacy of Accident",
      "Ad Hominem",
      "Appeal to Force",
      "Appeal to Pity"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Ad Hominem. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “The sign reads ‘Children make excellent pets.’ I thought they were selling children.” ✓",
    "options": [
      "Amphiboly",
      "Composition",
      "Division",
      "Equivocation"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: Amphiboly. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Classify the categorical proposition: Some books are not unreadable. ✓",
    "options": [
      "A",
      "I",
      "E",
      "O"
    ],
    "answer": 3,
    "topic": "Categorical Propositions",
    "explanation": "Correct answer: O. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “If people are allowed to vote once illegally, soon they will manipulate all elections.” ✓",
    "options": [
      "Appeal to Ignorance",
      "Slippery Slope",
      "Weak Analogy",
      "Hasty Generalization"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Slippery Slope. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “Have you stopped ignoring the rules?” ✓",
    "options": [
      "Complex Question",
      "Begging the Question",
      "False Dichotomy",
      "Suppressed Evidence"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: Complex Question. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “He said ‘I shot an elephant in my pajamas.’ I thought he wore pajamas and shot an elephant.” ✓",
    "options": [
      "Division",
      "Equivocation",
      "Amphiboly",
      "Composition"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: Amphiboly. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "The parts of propositions are subject, predicate and copula.",
    "options": [
      "False",
      "True"
    ],
    "answer": 1,
    "topic": "Proposition or Not",
    "explanation": "Correct answer: True. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Determine whether the following arguments are inductive or deductive Write I if it is inductive and D if it is deductive. Since Tom is the brother of Agatha, and Agatha is the mother of Raquel, it follows that Tom is the uncle of Raquel. ✗",
    "options": [
      "D",
      "I"
    ],
    "answer": 0,
    "topic": "Inductive or Deductive",
    "explanation": "Correct answer: D. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “If you don’t agree, you will be in trouble.” ✓",
    "options": [
      "Strawman Fallacy",
      "Appeal to Force",
      "Ad Hominem",
      "Appeal to Pity"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Appeal to Force. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “Five of my classmates failed; everyone must fail.” ✓",
    "options": [
      "Weak Analogy",
      "Hasty Generalization",
      "False Cause",
      "Slippery Slope"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Hasty Generalization. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “The committee is corrupt. Therefore, each member is corrupt.” ✓",
    "options": [
      "Division",
      "Composition",
      "Equivocation",
      "Amphiboly"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: Division. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "The principle of excluded middle states that statements cannot be both true and false at the same time and in the same respect.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "topic": "Foundations of Logic & Epistemology",
    "explanation": "Correct answer: False. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “People who oppose clean energy laws just hate the environment.” ✗",
    "options": [
      "Ad Hominem",
      "Missing the Point",
      "Appeal to People",
      "Strawman Fallacy"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: Ad Hominem. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “A famous athlete says this supplement works, so it must be true.” ✓",
    "options": [
      "Appeal to Ignorance",
      "Appeal to Unqualified Authority",
      "Weak Analogy",
      "Slippery Slope"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Appeal to Unqualified Authority. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “Have you stopped ignoring your responsibilities?” ✓",
    "options": [
      "False Dichotomy",
      "Suppressed Evidence",
      "Complex Question",
      "Begging the Question"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: Complex Question. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Fallacy of Relevance is the most numerous and the most frequently encountered.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "topic": "Fallacies",
    "explanation": "Correct answer: True. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "If A proposition is true, then O is _____?",
    "options": [
      "True",
      "Doubtful",
      "False"
    ],
    "answer": 2,
    "topic": "Square of Opposition",
    "explanation": "Correct answer: False. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “Millions of people believe in this diet, so it must work.” ✓",
    "options": [
      "Missing the Point",
      "Strawman Fallacy",
      "Fallacy of Accident",
      "Appeal to People"
    ],
    "answer": 3,
    "topic": "Fallacies",
    "explanation": "Correct answer: Appeal to People. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “I always drink coffee before exams, and I pass. Coffee causes success.” ✓",
    "options": [
      "Slippery Slope",
      "Weak Analogy",
      "False Cause",
      "Hasty Generalization"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: False Cause. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “The report omitted studies that may challenge its conclusions.” ✓",
    "options": [
      "Complex Question",
      "False Dichotomy",
      "Suppressed Evidence",
      "Begging the Question"
    ],
    "answer": 2,
    "topic": "Fallacies",
    "explanation": "Correct answer: Suppressed Evidence. Source: Formatives."
  },
  {
    "module": "Formatives",
    "question": "Identify the fallacy: “I can’t trust him because he is a ‘cool’ person.” (Cool can mean trendy or calm) ✓",
    "options": [
      "Division",
      "Equivocation",
      "Amphiboly",
      "Composition"
    ],
    "answer": 1,
    "topic": "Fallacies",
    "explanation": "Correct answer: Equivocation. Source: Formatives."
  }
];
  const original = banks.original;
  sourceQuestions.forEach(question => { question.question = cleanQuestion(question.question); });
  original.forEach(question => { question.question = cleanQuestion(question.question); });
  const modulesFor = question => question.modules || [question.module || 'Existing Reviewer'];
  const addModule = (question, moduleName) => {
    const modules = modulesFor(question);
    for (const name of String(moduleName).split(/,\s*/)) if (!modules.includes(name)) modules.push(name);
    question.modules = modules;
    delete question.module;
  };
  sourceQuestions.forEach(source => {
    const key = normalize(source.question);
    const existing = original.find(question => normalize(question.question) === key);
    if (existing) {
      existing.answer = source.answer;
      existing.options = source.options.slice();
      existing.explanation = source.explanation;
      addModule(existing, source.module);
    } else {
      const copy = { ...source, options: source.options.slice(), modules: String(source.module).split(/,\s*/) };
      delete copy.module;
      original.push(copy);
    }
  });
  original.filter(question => normalize(question.question).includes('not all s is not p')).forEach(question => {
    const answer = question.options.findIndex(option => normalize(option) === 'o');
    if (answer >= 0) question.answer = answer;
  });
  original.filter(question => normalize(question.question).endsWith('not all s is p')).forEach(question => {
    const answer = question.options.findIndex(option => normalize(option) === 'i');
    if (answer >= 0) question.answer = answer;
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
