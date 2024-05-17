import PicOne from '@/public/Images/blackhair1.jpeg';
import PicTwo from '@/public/Images/blackhair2.jpeg';
import PicThree from '@/public/Images/gettyimages1.jpeg';

const hairAndScalpData = [
    {
        id: 1,
        type: "multiple choice",
        question: "Select the picture that best describes your hair texture.",
        answers: {id:1, options:[PicOne, PicTwo, PicThree]}
    },
    {
        id: 2,
        type: "multiple choice",
        question: "How porous is your hair?",
        answers: {id:2, options:['Very', 'porous', 'a little', 'not at all']}
    },
    {
        id: 3,
        type: "multiple choice",
        question: "Select the picture that best describes your hair density.",
        answers: {id:3, options:['low', 'meduim', 'high']}
    },
    {
        id: 4,
        type: "multiple choice",
        question: "Has your hair undergone any textural treatment?",
        answers: {id:4, options:['YES', 'NO', 'NOT SURE']}
    },
    {
        id: 5,
        type: "multiple choice",
        question: "How often do you dye your hair?",
        answers: {id:5, options:['multiple times a year', 'once a year', 'once or twice', 'never']}
    },
    {
        id: 6,
        type: "multiple choice",
        question: "What is your current hair concern?",
        answers: {id:6, options:['DRYNESS', 'BREAKAGE', 'LENGTH RETENTION', 'HEALTH']}
    },
    {
        id: 7,
        type: "multiple choice",
        question: "Are you prone to flakiness?",
        answers: {id:7, options:['YES', 'NO', 'NOT SURE']}
    },
    {
        id: 8,
        type: "multiple choice",
        question: "Do you have a sensitive scalp?",
        answers: {id:8, options:['YES', 'NO', 'NOT SURE']}
    },
    {
        id: 9,
        type: "multiple choice",
        question: "Is your scalp oily or dry?",
        answers: {id:9, options:['a little oily', 'very oily', 'a little oily', 'very oily', 'a little oily and a little dry', 'a little oily and very dry', 'very oily and a little dry']}
    },
    {
        id: 10,
        type: "multiple choice",
        question: "What is your current scalp concern?",
        answers: {id:10, options:['FLAKES', 'TOO DRY', 'TOO OILY', 'ITCHYNESS']}
    }
]

export default hairAndScalpData;