import PicOne from '@/public/Images/blackhair1.jpeg';
import PicTwo from '@/public/Images/blackhair2.jpeg';
import PicThree from '@/public/Images/gettyimages1.jpeg';


const questions = [
  {
    category: 'Hair and Scalp',
    questions: [
      {
        id: 1,
        type: "multiple choice",
        question: "Select the picture that best describes your hair texture.",
        options: [PicOne, PicTwo, PicThree]
    },
    {
        id: 2,
        type: "multiple choice",
        question: "How porous is your hair?",
        options: ['Very', 'porous', 'a little', 'not at all'] 
    },
    {
        id: 3,
        type: "multiple choice",
        question: "Select the picture that best describes your hair density.",
        options: ['low', 'meduim', 'high'] 
    },
    {
        id: 4,
        type: "multiple choice",
        question: "Has your hair undergone any textural treatment?",
        options: ['YES', 'NO', 'NOT SURE'] 
    },
    {
        id: 5,
        type: "multiple choice",
        question: "How often do you dye your hair?",
        options: ['multiple times a year', 'once a year', 'once or twice', 'never'] 
    },
    {
        id: 6,
        type: "multiple choice",
        question: "What is your current hair concern?",
        options: ['DRYNESS', 'BREAKAGE', 'LENGTH RETENTION', 'HEALTH'] 
    },
    {
        id: 7,
        type: "multiple choice",
        question: "Are you prone to flakiness?",
        options: ['YES', 'NO', 'NOT SURE'] 
    },
    {
        id: 8,
        type: "multiple choice",
        question: "Do you have a sensitive scalp?",
        options: ['YES', 'NO', 'NOT SURE'] 
    },
    {
        id: 9,
        type: "multiple choice",
        question: "Is your scalp oily or dry?",
        options: ['a little oily', 'very oily', 'a little oily', 'very oily', 'a little oily and a little dry', 'a little oily and very dry', 'very oily and a little dry'] 
    },
    {
        id: 10,
        type: "multiple choice",
        question: "What is your current scalp concern?",
        options: ['FLAKES', 'TOO DRY', 'TOO OILY', 'ITCHYNESS'] 
    },
      // Add more questions for this category
    ],
  },
  {
    category: 'Lifestyle',
    questions: [
      {
        id:1,
        type:"multiple choice",
        question:"What is your go-to hairstyles?",
        options:['Braids', 'Afro', ' Wigs/weaves', 'Heat straightens', 'Buns', 'Locs']
      },
      {
        id:2,
        type:"multiple choice",
        question:"How many times a week do you wash your hair?",
        options:['Once a week', 'Once every two weeks', 'More than once a week', 'Once a month']
      },
      {
        id:3,
        type:"multiple choice",
        question:"How often do you exercise? Do you exercise indoors, outdoors, or pool?",
        options:['1-2 times a week', '3-4 times a week', 'More than 4 times a week', 'Never']
      },
      {
        id:4,
        type:"multiple choice",
        question:"",
        options:[]
      },
      {
        id:5,
        type:"multiple choice",
        question:"",
        options:[]
      },
      {
        id:6,
        type:"multiple choice",
        question:"",
        options:[]
      }

    ]  
      
  },
  {
    category: 'Hair Goals',
    questions: [
      { question: 'Select the word that describes your relationship with your hair.', options: ['Gentle', 'Apprehensive', 'Anxiety', 'Demanding', 'Loving', 'Caring'] },
      { question: 'What do you want to achieve with your hair routine?', options: ['Save time and money', 'Learn how to care for my hair', 'Find the best product for my hair', 'Perfectise my wash day routine', 'Heal my relationship with my hair'] },
      // Add more questions for this category
    ],
  },
];



export default questions;