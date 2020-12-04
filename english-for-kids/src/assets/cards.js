/*
export const arrayOfImages = [];
const allImages = require.context('../assets/images', true, /.*\.jpg$/);
allImages.keys().forEach((key) => {
  arrayOfImages.push(allImages(key));
});
console.log(arrayOfImages);
*/

const cards = [
  [
    {
      word: 'Action (set A)',
      image: 'img/dive.jpg'
    },
    {
      word: 'Action (set B)',
      image: 'img/open.jpg'
    },
    {
      word: 'Animal (set A)',
      image: 'img/cat.jpg'
    },
    {
      word: 'Animal (set B)',
      image: 'img/mouse.jpg'
    },
    {
      word: 'Clothes (set A)',
      image: 'img/shirt.jpg'
    },
    {
      word: 'Clothes (set B)',
      image: 'img/flip-flop.jpg'
    },
    {
      word: 'Emotions (set A)',
      image: 'img/surprised.jpg'
    },
    {
      word: 'Emotions (set B)',
      image: 'img/curious.jpg'
    },
    {
      word: 'Food (set A)',
      image: 'img/pineapple.jpg'
    },
    {
      word: 'Food (set B)',
      image: 'img/cucumber.jpg'
    },
    {
      word: 'Food (set A)',
      image: 'img/great.jpg'
    },
    {
      word: 'Food (set B)',
      image: 'img/cool.jpg'
    }
  ],
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'img/cry.jpg',
      audioSrc: 'audio/cry.mp3'
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'img/dance.jpg',
      audioSrc: 'audio/dance.mp3'
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'img/dive.jpg',
      audioSrc: 'audio/dive.mp3'
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'img/draw.jpg',
      audioSrc: 'audio/draw.mp3'
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'img/fish.jpg',
      audioSrc: 'audio/fish.mp3'
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'img/fly.jpg',
      audioSrc: 'audio/fly.mp3'
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'img/hug.jpg',
      audioSrc: 'audio/hug.mp3'
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'img/jump.jpg',
      audioSrc: 'audio/jump.mp3'
    }
  ],
  [
    {
      word: 'open',
      translation: 'открывать',
      image: 'img/open.jpg',
      audioSrc: 'audio/open.mp3'
    },
    {
      word: 'play',
      translation: 'играть',
      image: 'img/play.jpg',
      audioSrc: 'audio/play.mp3'
    },
    {
      word: 'point',
      translation: 'указывать',
      image: 'img/point.jpg',
      audioSrc: 'audio/point.mp3'
    },
    {
      word: 'ride',
      translation: 'ездить',
      image: 'img/ride.jpg',
      audioSrc: 'audio/ride.mp3'
    },
    {
      word: 'run',
      translation: 'бегать',
      image: 'img/run.jpg',
      audioSrc: 'audio/run.mp3'
    },
    {
      word: 'sing',
      translation: 'петь',
      image: 'img/sing.jpg',
      audioSrc: 'audio/sing.mp3'
    },
    {
      word: 'skip',
      translation: 'пропускать, прыгать',
      image: 'img/skip.jpg',
      audioSrc: 'audio/skip.mp3'
    },
    {
      word: 'swim',
      translation: 'плавать',
      image: 'img/swim.jpg',
      audioSrc: 'audio/swim.mp3'
    }
  ],
  [
    {
      word: 'cat',
      translation: 'кот',
      image: 'img/cat.jpg',
      audioSrc: 'audio/cat.mp3'
    },
    {
      word: 'chick',
      translation: 'цыплёнок',
      image: 'img/chick.jpg',
      audioSrc: 'audio/chick.mp3'
    },
    {
      word: 'chicken',
      translation: 'курица',
      image: 'img/chicken.jpg',
      audioSrc: 'audio/chicken.mp3'
    },
    {
      word: 'dog',
      translation: 'собака',
      image: 'img/dog.jpg',
      audioSrc: 'audio/dog.mp3'
    },
    {
      word: 'horse',
      translation: 'лошадь',
      image: 'img/horse.jpg',
      audioSrc: 'audio/horse.mp3'
    },
    {
      word: 'pig',
      translation: 'свинья',
      image: 'img/pig.jpg',
      audioSrc: 'audio/pig.mp3'
    },
    {
      word: 'rabbit',
      translation: 'кролик',
      image: 'img/rabbit.jpg',
      audioSrc: 'audio/rabbit.mp3'
    },
    {
      word: 'sheep',
      translation: 'овца',
      image: 'img/sheep.jpg',
      audioSrc: 'audio/sheep.mp3'
    }
  ],
  [
    {
      word: 'bird',
      translation: 'птица',
      image: 'img/bird.jpg',
      audioSrc: 'audio/bird.mp3'
    },
    {
      word: 'fish',
      translation: 'рыба',
      image: 'img/fish1.jpg',
      audioSrc: 'audio/fish.mp3'
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'img/frog.jpg',
      audioSrc: 'audio/frog.mp3'
    },
    {
      word: 'giraffe',
      translation: 'жирафа',
      image: 'img/giraffe.jpg',
      audioSrc: 'audio/giraffe.mp3'
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'img/lion.jpg',
      audioSrc: 'audio/lion.mp3'
    },
    {
      word: 'mouse',
      translation: 'мышь',
      image: 'img/mouse.jpg',
      audioSrc: 'audio/mouse.mp3'
    },
    {
      word: 'turtle',
      translation: 'черепаха',
      image: 'img/turtle.jpg',
      audioSrc: 'audio/turtle.mp3'
    },
    {
      word: 'dolphin',
      translation: 'дельфин',
      image: 'img/dolphin.jpg',
      audioSrc: 'audio/dolphin.mp3'
    }
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'img/skirt.jpg',
      audioSrc: 'audio/skirt.mp3'
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'img/pants.jpg',
      audioSrc: 'audio/pants.mp3'
    },
    {
      word: 'blouse',
      translation: 'блузка',
      image: 'img/blouse.jpg',
      audioSrc: 'audio/blouse.mp3'
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'img/dress.jpg',
      audioSrc: 'audio/dress.mp3'
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'img/boot.jpg',
      audioSrc: 'audio/boot.mp3'
    },
    {
      word: 'shirt',
      translation: 'рубашка',
      image: 'img/shirt.jpg',
      audioSrc: 'audio/shirt.mp3'
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'img/coat.jpg',
      audioSrc: 'audio/coat.mp3'
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'img/shoe.jpg',
      audioSrc: 'audio/shoe.mp3'
    }
  ],
  [
    {
      word: 'scarf',
      translation: 'шарф',
      image: 'img/scarf.jpg',
      audioSrc: 'audio/scarf.mp3'
    },
    {
      word: 'tie',
      translation: 'галстук',
      image: 'img/tie.jpg',
      audioSrc: 'audio/tie.mp3'
    },
    {
      word: 'cap',
      translation: 'кепка',
      image: 'img/cap.jpg',
      audioSrc: 'audio/cap.mp3'
    },
    {
      word: 'glove',
      translation: 'перчатка',
      image: 'img/glove.jpg',
      audioSrc: 'audio/glove.mp3'
    },
    {
      word: 'flip-flop',
      translation: 'шлепки',
      image: 'img/flip-flop.jpg',
      audioSrc: 'audio/flip-flop.mp3'
    },
    {
      word: 'glasses',
      translation: 'очки',
      image: 'img/glasses.jpg',
      audioSrc: 'audio/glasses.mp3'
    },
    {
      word: 't-shirt',
      translation: 'футболка',
      image: 'img/t-shirt.jpg',
      audioSrc: 'audio/t-shirt.mp3'
    },
    {
      word: 'sock',
      translation: 'носок',
      image: 'img/sock.jpg',
      audioSrc: 'audio/sock.mp3'
    }
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'img/sad.jpg',
      audioSrc: 'audio/sad.mp3'
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'img/angry.jpg',
      audioSrc: 'audio/angry.mp3'
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'img/happy.jpg',
      audioSrc: 'audio/happy.mp3'
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'img/tired.jpg',
      audioSrc: 'audio/tired.mp3'
    },
    {
      word: 'surprised',
      translation: 'удивлённый',
      image: 'img/surprised.jpg',
      audioSrc: 'audio/surprised.mp3'
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'img/scared.jpg',
      audioSrc: 'audio/scared.mp3'
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'img/smile.jpg',
      audioSrc: 'audio/smile.mp3'
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'img/laugh.jpg',
      audioSrc: 'audio/laugh.mp3'
    }
  ],
  [
    {
      word: 'confused',
      translation: 'смущенный',
      image: 'img/confused.jpg',
      audioSrc: 'audio/confused.mp3'
    },
    {
      word: 'afraid',
      translation: 'испуганный',
      image: 'img/afraid.jpg',
      audioSrc: 'audio/afraid.mp3'
    },
    {
      word: 'bored',
      translation: 'скучно',
      image: 'img/bored.jpg',
      audioSrc: 'audio/bored.mp3'
    },
    {
      word: 'confident',
      translation: 'уверенный',
      image: 'img/confident.jpg',
      audioSrc: 'audio/confident.mp3'
    },
    {
      word: 'curious',
      translation: 'любопытный',
      image: 'img/curious.jpg',
      audioSrc: 'audio/curious.mp3'
    },
    {
      word: 'nervous',
      translation: 'нервный',
      image: 'img/nervous.jpg',
      audioSrc: 'audio/nervous.mp3'
    },
    {
      word: 'ashamed',
      translation: 'стыдно',
      image: 'img/ashamed.jpg',
      audioSrc: 'audio/ashamed.mp3'
    },
    {
      word: 'thoughtful',
      translation: 'задумчивый',
      image: 'img/thoughtful.jpg',
      audioSrc: 'audio/thoughtful.mp3'
    }
  ],
  [
    {
      word: 'cherry',
      translation: 'вишня',
      image: 'img/cherry.jpg',
      audioSrc: 'audio/cherry.mp3'
    },
    {
      word: 'butter',
      translation: 'масло',
      image: 'img/butter.jpg',
      audioSrc: 'audio/butter.mp3'
    },
    {
      word: 'cheese',
      translation: 'сыр',
      image: 'img/cheese.jpg',
      audioSrc: 'audio/cheese.mp3'
    },
    {
      word: 'ice cream',
      translation: 'мороженое',
      image: 'img/ice-cream.jpg',
      audioSrc: 'audio/icecream.mp3'
    },
    {
      word: 'pizza',
      translation: 'пицца',
      image: 'img/pizza.jpg',
      audioSrc: 'audio/pizza.mp3'
    },
    {
      word: 'pineapple',
      translation: 'ананас',
      image: 'img/pineapple.jpg',
      audioSrc: 'audio/pineapple.mp3'
    },
    {
      word: 'cake',
      translation: 'торт',
      image: 'img/cake.jpg',
      audioSrc: 'audio/cake.mp3'
    },
    {
      word: 'pear',
      translation: 'груша',
      image: 'img/pear.jpg',
      audioSrc: 'audio/pear.mp3'
    }
  ],
  [
    {
      word: 'coconut',
      translation: 'кокос',
      image: 'img/coconut.jpg',
      audioSrc: 'audio/coconut.mp3'
    },
    {
      word: 'cucumber',
      translation: 'огурец',
      image: 'img/cucumber.jpg',
      audioSrc: 'audio/cucumber.mp3'
    },
    {
      word: 'garlic',
      translation: 'чеснок',
      image: 'img/garlic.jpg',
      audioSrc: 'audio/garlic.mp3'
    },
    {
      word: 'biscuit',
      translation: 'печенье',
      image: 'img/biscuit.jpg',
      audioSrc: 'audio/biscuit.mp3'
    },
    {
      word: 'potato',
      translation: 'картошка',
      image: 'img/potato.jpg',
      audioSrc: 'audio/potato.mp3'
    },
    {
      word: 'pea',
      translation: 'горох',
      image: 'img/pea.jpg',
      audioSrc: 'audio/pea.mp3'
    },
    {
      word: 'mango',
      translation: 'манго',
      image: 'img/mango.jpg',
      audioSrc: 'audio/mango.mp3'
    },
    {
      word: 'pepper',
      translation: 'перец',
      image: 'img/pepper.jpg',
      audioSrc: 'audio/pepper.mp3'
    }
  ],
  [
    {
      word: 'cold',
      translation: 'холодный',
      image: 'img/cold.jpg',
      audioSrc: 'audio/cold.mp3'
    },
    {
      word: 'dark',
      translation: 'темный',
      image: 'img/dark.jpg',
      audioSrc: 'audio/dark.mp3'
    },
    {
      word: 'big',
      translation: 'большой',
      image: 'img/big.jpg',
      audioSrc: 'audio/big.mp3'
    },
    {
      word: 'deep',
      translation: 'глубокий',
      image: 'img/deep.jpg',
      audioSrc: 'audio/deep.mp3'
    },
    {
      word: 'small',
      translation: 'маленький',
      image: 'img/small.jpg',
      audioSrc: 'audio/small.mp3'
    },
    {
      word: 'great',
      translation: 'великий',
      image: 'img/great.jpg',
      audioSrc: 'audio/great.mp3'
    },
    {
      word: 'modern',
      translation: 'современный',
      image: 'img/modern.jpg',
      audioSrc: 'audio/modern.mp3'
    },
    {
      word: 'empty',
      translation: 'пустой',
      image: 'img/empty.jpg',
      audioSrc: 'audio/empty.mp3'
    }
  ],
  [
    {
      word: 'narrow',
      translation: 'узкий',
      image: 'img/narrow.jpg',
      audioSrc: 'audio/narrow.mp3'
    },
    {
      word: 'sharp',
      translation: 'острый',
      image: 'img/sharp.jpg',
      audioSrc: 'audio/sharp.mp3'
    },
    {
      word: 'clean',
      translation: 'чистый',
      image: 'img/clean.jpg',
      audioSrc: 'audio/clean.mp3'
    },
    {
      word: 'fast',
      translation: 'быстрый',
      image: 'img/fast.jpg',
      audioSrc: 'audio/fast.mp3'
    },
    {
      word: 'cool',
      translation: 'крутой',
      image: 'img/cool.jpg',
      audioSrc: 'audio/cool.mp3'
    },
    {
      word: 'slow',
      translation: 'медленный',
      image: 'img/slow.jpg',
      audioSrc: 'audio/slow.mp3'
    },
    {
      word: 'bright',
      translation: 'яркий',
      image: 'img/bright.jpg',
      audioSrc: 'audio/bright.mp3'
    },
    {
      word: 'perfect',
      translation: 'идеально',
      image: 'img/perfect.jpg',
      audioSrc: 'audio/perfect.mp3'
    }
  ]
];

export default cards;
