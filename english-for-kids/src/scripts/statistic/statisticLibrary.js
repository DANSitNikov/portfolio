export function takeStatistic() {
  if (!localStorage.getItem('statistic')) {
    const statistic = [
      [
        {
          word: 'cry',
          translation: 'плакать',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'dance',
          translation: 'танцевать',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'dive',
          translation: 'нырять',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'draw',
          translation: 'рисовать',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'fish',
          translation: 'ловить рыбу',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'fly',
          translation: 'летать',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'hug',
          translation: 'обнимать',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'jump',
          translation: 'прыгать',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'open',
          translation: 'открывать',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'play',
          translation: 'играть',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'point',
          translation: 'указывать',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'ride',
          translation: 'ездить',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'run',
          translation: 'бегать',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'sing',
          translation: 'петь',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'skip',
          translation: 'пропускать, прыгать',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'swim',
          translation: 'плавать',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        }
      ],
      [
        {
          word: 'cat',
          translation: 'кот',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'chick',
          translation: 'цыплёнок',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'chicken',
          translation: 'курица',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'dog',
          translation: 'собака',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'horse',
          translation: 'лошадь',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'pig',
          translation: 'свинья',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'rabbit',
          translation: 'кролик',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'sheep',
          translation: 'овца',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'bird',
          translation: 'птица',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'fish',
          translation: 'рыба',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'frog',
          translation: 'жаба',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'giraffe',
          translation: 'жирафа',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'lion',
          translation: 'лев',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'mouse',
          translation: 'мышь',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'turtle',
          translation: 'черепаха',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'dolphin',
          translation: 'дельфин',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        }
      ],
      [
        {
          word: 'skirt',
          translation: 'юбка',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'pants',
          translation: 'брюки',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'blouse',
          translation: 'блузка',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'dress',
          translation: 'платье',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'boot',
          translation: 'ботинок',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'shirt',
          translation: 'рубашка',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'coat',
          translation: 'пальто',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'shoe',
          translation: 'туфли',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'scarf',
          translation: 'шарф',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'tie',
          translation: 'галстук',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'cap',
          translation: 'кепка',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'glove',
          translation: 'перчатка',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'flip flop',
          translation: 'шлепки',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'glasses',
          translation: 'очки',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 't-shirt',
          translation: 'футболка',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'sock',
          translation: 'носок',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        }
      ],
      [
        {
          word: 'sad',
          translation: 'грустный',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'angry',
          translation: 'сердитый',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'happy',
          translation: 'счастливый',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'tired',
          translation: 'уставший',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'surprised',
          translation: 'удивлённый',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'scared',
          translation: 'испуганный',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'smile',
          translation: 'улыбка',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'laugh',
          translation: 'смех',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'confused',
          translation: 'смущенный',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'afraid',
          translation: 'испуганный',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'bored',
          translation: 'скучно',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'confident',
          translation: 'уверенный',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'curious',
          translation: 'любопытный',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'nervous',
          translation: 'нервный',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'ashamed',
          translation: 'стыдно',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'thoughtful',
          translation: 'задумчивый',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        }
      ],
      [
        {
          word: 'cherry',
          translation: 'вишня',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'butter',
          translation: 'масло',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'cheese',
          translation: 'сыр',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'ice cream',
          translation: 'мороженое',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'pizza',
          translation: 'пицца',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'pineapple',
          translation: 'ананас',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'cake',
          translation: 'торт',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'pear',
          translation: 'груша',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'coconut',
          translation: 'кокос',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'cucumber',
          translation: 'огурец',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'garlic',
          translation: 'чеснок',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'biscuit',
          translation: 'печенье',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'potato',
          translation: 'картошка',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'pea',
          translation: 'горох',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'mango',
          translation: 'манго',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'pepper',
          translation: 'перец',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        }
      ],
      [
        {
          word: 'cold',
          translation: 'холодный',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'dark',
          translation: 'темный',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'big',
          translation: 'большой',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'deep',
          translation: 'глубокий',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'small',
          translation: 'маленький',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'great',
          translation: 'великий',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'modern',
          translation: 'современный',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'empty',
          translation: 'пустой',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'narrow',
          translation: 'узкий',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'sharp',
          translation: 'острый',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'clean',
          translation: 'чистый',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'fast',
          translation: 'быстрый',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'cool',
          translation: 'крутой',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'slow',
          translation: 'медленный',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'bright',
          translation: 'яркий',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        },
        {
          word: 'perfect',
          translation: 'идеально',
          trained: 0,
          correct: 0,
          incorrect: 0,
          '%': 0
        }
      ]
    ];
    localStorage.setItem('statistic', JSON.stringify(statistic));
  }
}
