import Question from '../question';

export function mockup() {
  const question1 = new Question({
    question: 'Quel est le vrai nom de Voldemort ?',
    answers: [
      {
        id: 1,
        label: 'Lucius Malefoy',
      },
      {
        id: 2,
        label: 'Argus Rusard',
      },
      {
        id: 3,
        label: 'Tom Jedusor',
      },
    ],
    id: 1,
    latitude: '50.185940',
    longitude: '4.336060',
    correctAnswer: 3,
    logicalDelete: false,
  });
  const question2 = new Question({
    question: 'Où se trouve l’entrée de la chambre des secrets ?',
    answers: [
      {
        id: 1,
        label: 'Dans les toilettes des filles',
      },
      {
        id: 2,
        label: 'Au 3ème étage de Poudlard',
      },
      {
        id: 3,
        label: 'Dans le dortoir de Serpentard',
      },
    ],
    id: 2,
    correctAnswer: 1,
    logicalDelete: false,
  });
  const question3 = new Question({
    question: 'Comment s’appelle le premier balai de Harry ?',
    answers: [
      {
        id: 1,
        label: 'Vif d’or',
      },
      {
        id: 2,
        label: 'Un éclair de feu',
      },
      {
        id: 3,
        label: 'Nimbus 2000',
      },
    ],
    id: 3,
    correctAnswer: 3,
    logicalDelete: false,
  });
  const question4 = new Question({
    question: 'Comment se nomment les sucreries qui peuvent avoir des goûts très surprenants ?',
    answers: [
      {
        id: 1,
        label: 'Les dragées de Bertie Crochue',
      },
      {
        id: 2,
        label: 'Les chocogrenouilles',
      },
      {
        id: 3,
        label: 'Les gommes limaces',
      },
    ],
    id: 4,
    correctAnswer: 1,
    logicalDelete: false,
  });
  const question5 = new Question({
    question: 'Lequel de ces sorts n’est pas un des sortilèges impardonnables ?',
    answers: [
      {
        id: 1,
        label: 'Imperium',
      },
      {
        id: 2,
        label: 'Avada Kedevra',
      },
      {
        id: 3,
        label: 'Sectum Sempra',
      },
    ],
    id: 5,
    correctAnswer: 3,
    logicalDelete: false,
  });
  const question6 = new Question({
    question: 'Comment sont appelées les personnes nées de sorciers mais sans pouvoir ?',
    answers: [
      {
        id: 1,
        label: 'Les cracmols',
      },
      {
        id: 2,
        label: 'Les moldus',
      },
      {
        id: 3,
        label: 'Les sangs de bourbes',
      },
    ],
    id: 6,
    correctAnswer: 1,
    logicalDelete: false,
  });
  const question7 = new Question({
    question: 'Dans le premier tome, où vont Dudley et ses parents pour l’anniversaire de celui-ci ?',
    answers: [
      {
        id: 1,
        label: 'Au parc d’attraction',
      },
      {
        id: 2,
        label: 'Au zoo',
      },
      {
        id: 3,
        label: 'Au bowling',
      },
    ],
    id: 7,
    correctAnswer: 2,
    logicalDelete: false,
  });
  const question8 = new Question({
    question: 'Quelle matière enseigne Mc Gonagal ?',
    answers: [
      {
        id: 1,
        label: 'Potions',
      },
      {
        id: 2,
        label: 'Métamorphose',
      },
      {
        id: 3,
        label: 'Défense contre les forces du mal',
      },
    ],
    id: 8,
    correctAnswer: 2,
    logicalDelete: false,
  });
  const question9 = new Question({
    question: 'Lors de leur entrée à Poudlard, les apprentis sorciers choisissent un animal de compagnie. Quel est celui de Ron Weasley ?',
    answers: [
      {
        id: 1,
        label: 'Un chat',
      },
      {
        id: 2,
        label: 'Un rat',
      },
      {
        id: 3,
        label: 'Une chouette',
      },
    ],
    id: 9,
    correctAnswer: 2,
    logicalDelete: false,
  });
  const question10 = new Question({
    question: 'Combien d’enfants ont les Weasleys ?',
    answers: [
      {
        id: 1,
        label: '5',
      },
      {
        id: 2,
        label: '6',
      },
      {
        id: 3,
        label: '7',
      },
    ],
    id: 10,
    correctAnswer: 3,
    logicalDelete: false,
  });
  const question11 = new Question({
    question: 'La banque de Gringotts est gardée par des ...',
    answers: [
      {
        id: 1,
        label: 'Gobelins',
      },
      {
        id: 2,
        label: 'Sorciers',
      },
      {
        id: 3,
        label: 'Elfes',
      },
    ],
    id: 11,
    correctAnswer: 1,
    logicalDelete: false,
  });
  const question12 = new Question({
    question: 'Qui tue Sirius Black ?',
    answers: [
      {
        id: 1,
        label: 'Lucius Malefoy',
      },
      {
        id: 2,
        label: 'Voldemort',
      },
      {
        id: 3,
        label: 'Bellatrix Lestrange',
      },
    ],
    id: 12,
    correctAnswer: 3,
    logicalDelete: false,
  });
  const question13 = new Question({
    question: 'Quelle forme prend le patronus d’Harry Potter ?',
    answers: [
      {
        id: 1,
        label: 'Une loutre',
      },
      {
        id: 2,
        label: 'Un cerf',
      },
      {
        id: 3,
        label: 'Une chouette',
      },
    ],
    id: 13,
    correctAnswer: 2,
    logicalDelete: false,
  });
  const question14 = new Question({
    question: 'Un hippogriffe est une créature ...',
    answers: [
      {
        id: 1,
        label: 'Mi-centaure, mi-poulet',
      },
      {
        id: 2,
        label: 'Mi-cheval, mi-aigle',
      },
      {
        id: 3,
        label: 'Mi-loup, mi-hippopotame',
      },
    ],
    id: 14,
    correctAnswer: 2,
    logicalDelete: false,
  });
  const question15 = new Question({
    question: 'Qui n’a jamais été professeur de défense contre les forces du mal ?',
    answers: [
      {
        id: 1,
        label: 'Quirinus Quirrell',
      },
      {
        id: 2,
        label: 'Pomona Chourave',
      },
      {
        id: 3,
        label: 'Gilderoy Lockhart',
      },
    ],
    id: 15,
    correctAnswer: 2,
    logicalDelete: false,
  });
  const question16 = new Question({
    question: 'Quel est le métier des parents d’Hermione Granger ?',
    answers: [
      {
        id: 1,
        label: 'Avocat',
      },
      {
        id: 2,
        label: 'Professeur',
      },
      {
        id: 3,
        label: 'Dentiste',
      },
    ],
    id: 16,
    correctAnswer: 3,
    logicalDelete: false,
  });
  const question17 = new Question({
    question: 'Qui tue Dumbeldore ?',
    answers: [
      {
        id: 1,
        label: 'Severus Rogue',
      },
      {
        id: 2,
        label: 'Drago Malefoy',
      },
      {
        id: 3,
        label: 'Bellatrix Lestrange',
      },
    ],
    id: 17,
    correctAnswer: 1,
    logicalDelete: false,
  });
  const question18 = new Question({
    question: 'Qui a expliqué à Voldemort comment créer un horcruxe ?',
    answers: [
      {
        id: 1,
        label: 'Horace Slughorn',
      },
      {
        id: 2,
        label: 'Albus Dumbeldore',
      },
      {
        id: 3,
        label: 'Severus Rogue',
      },
    ],
    id: 18,
    correctAnswer: 1,
    logicalDelete: false,
  });
  const question19 = new Question({
    question: 'Pour prendre le Poudlard Express, il faut se rendre à la gare de londres sur la voie ?',
    answers: [
      {
        id: 1,
        label: '5 ¼',
      },
      {
        id: 2,
        label: '9 ¾',
      },
      {
        id: 3,
        label: '10 ½',
      },
    ],
    id: 19,
    correctAnswer: 2,
    logicalDelete: false,
  });
  const question20 = new Question({
    question: 'Dans quel film, Harry et Ron rate le Poudlard Express et emprunte la voiture volante pour arrive à Poudlard ?',
    answers: [
      {
        id: 1,
        label: 'Harry Potter et la chambre des secret',
      },
      {
        id: 2,
        label: 'Harry Potter et le prisonnier d’Azkaban',
      },
      {
        id: 3,
        label: 'Harry Potter et l’ordre du Phénix',
      },
    ],
    id: 20,
    correctAnswer: 1,
    logicalDelete: false,
  });
  const question21 = new Question({
    question: 'Horace Slughorn est rattaché à quelle maison ?',
    answers: [
      {
        id: 1,
        label: 'Serpentard',
      },
      {
        id: 2,
        label: 'Griffondor',
      },
      {
        id: 3,
        label: 'Serdaigle',
      },
    ],
    id: 21,
    correctAnswer: 1,
    logicalDelete: false,
  });
  const question22 = new Question({
    question: 'Qui protège le passage menant à la cabane hurlante ?',
    answers: [
      {
        id: 1,
        label: 'Touffu, le chien à 3 têtes',
      },
      {
        id: 2,
        label: 'Le Saule cogneur',
      },
      {
        id: 3,
        label: 'Le basilic',
      },
    ],
    id: 22,
    correctAnswer: 2,
    logicalDelete: false,
  });
  const question23 = new Question({
    question: 'Qui ne fait pas partie de l’ordre du phénix ?',
    answers: [
      {
        id: 1,
        label: 'Dobby',
      },
      {
        id: 2,
        label: 'Severus Rogue',
      },
      {
        id: 3,
        label: 'Albus Dumbeldore',
      },
    ],
    id: 23,
    correctAnswer: 1,
    logicalDelete: false,
  });
  const question24 = new Question({
    question: 'Comment Dobby meurt-il ?',
    answers: [
      {
        id: 1,
        label: 'Avada Kadabra lancé par Voldemort',
      },
      {
        id: 2,
        label: 'Mordu par le serpent Nagini',
      },
      {
        id: 3,
        label: 'Poignardé par Bellatrix Lestrange',
      },
    ],
    id: 24,
    correctAnswer: 3,
    logicalDelete: false,
  });
  const question25 = new Question({
    question: 'Parmi les propositions suivantes, qu’est ce qui n’est pas une des 3 reliques de la mort ?',
    answers: [
      {
        id: 1,
        label: 'La baguette de Sureau',
      },
      {
        id: 2,
        label: 'La carte du Maraudeur',
      },
      {
        id: 3,
        label: 'La cape d’invisibilité',
      },
    ],
    id: 25,
    correctAnswer: 2,
    logicalDelete: false,
  });
  const question26 = new Question({
    question: 'Au quidditch, comment s’appelle la bale qu’i faut attraper pour finir le match ?',
    answers: [
      {
        id: 1,
        label: 'Le cognard',
      },
      {
        id: 2,
        label: 'Le vif d’or',
      },
      {
        id: 3,
        label: 'Le souafle',
      },
    ],
    id: 26,
    correctAnswer: 2,
    logicalDelete: false,
  });
  const question27 = new Question({
    question: 'Quel sort permet d’éloigner un détraqueur ?',
    answers: [
      {
        id: 1,
        label: 'Alohomora',
      },
      {
        id: 2,
        label: 'Ridiculus',
      },
      {
        id: 3,
        label: 'Expecto Patronum',
      },
    ],
    id: 27,
    correctAnswer: 3,
    logicalDelete: false,
  });
  const question28 = new Question({
    question: 'Dans quel livre / film, le cours de défense contre les forces du mal est enseigné par un loup Garou ?',
    answers: [
      {
        id: 1,
        label: 'Harry Potter et la chambre des secrets',
      },
      {
        id: 2,
        label: 'Harry Potter et le prisonnier d’Azkaban',
      },
      {
        id: 3,
        label: 'Harry Potter et l’ordre du Phénix',
      },
    ],
    id: 28,
    correctAnswer: 2,
    logicalDelete: false,
  });
  const question29 = new Question({
    question: 'Qu’est ce que le fourchelang ?',
    answers: [
      {
        id: 1,
        label: 'Une fourchette magique utilisé par les sorciers',
      },
      {
        id: 2,
        label: 'Une langue parlée par les serpents',
      },
      {
        id: 3,
        label: 'Le magasin de farce et attrappes des frères Weasleys',
      },
    ],
    id: 29,
    correctAnswer: 2,
    logicalDelete: false,
  });
  const question30 = new Question({
    question: 'Comment s’appelle le village entourant Poudlard ?',
    answers: [
      {
        id: 1,
        label: 'Godric\'s Hollow',
      },
      {
        id: 2,
        label: 'Terre-en-Landes',
      },
      {
        id: 3,
        label: 'Pré-au-lard',
      },
    ],
    id: 30,
    correctAnswer: 2,
    logicalDelete: false,
  });

  question1.save();
  question2.save();
  question3.save();
  question4.save();
  question5.save();
  question6.save();
  question7.save();
  question8.save();
  question9.save();
  question10.save();
  question11.save();
  question12.save();
  question13.save();
  question14.save();
  question15.save();
  question16.save();
  question17.save();
  question18.save();
  question19.save();
  question20.save();
  question21.save();
  question22.save();
  question23.save();
  question24.save();
  question25.save();
  question26.save();
  question27.save();
  question28.save();
  question29.save();
  question30.save();
}
