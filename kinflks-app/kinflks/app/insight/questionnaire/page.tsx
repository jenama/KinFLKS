// components/Questionnaire.tsx
'use client'
import React, { useState } from 'react';
import Question from './question/page';
import questions from './data/page';


const Questionnaire: React.FC = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<any>({});

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setAnswers({
  //     ...answers,
  //     [`${currentCategoryIndex}-${currentQuestionIndex}`]: e.target.value,
  //   });
  // };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions[currentCategoryIndex].questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentCategoryIndex < questions.length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
      setCurrentQuestionIndex(0);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(currentCategoryIndex - 1);
      setCurrentQuestionIndex(questions[currentCategoryIndex - 1].questions.length - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Submitted answers:', answers);
  };

  const handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
    setAnswers({
      ...answers,
      [`${currentCategoryIndex}-${currentQuestionIndex}`]: e.currentTarget,
    });
    console.log('click')
  }

  const currentCategory = questions[currentCategoryIndex];
  const currentQuestion = currentCategory.questions[currentQuestionIndex];

  return (
    <div className="p-4 max-w-xl mx-auto bg-white shadow-md rounded">
      <h1 className="text-3xl font-bold mb-6">{currentCategory.category}</h1>
      <Question
        question={currentQuestion.question}
        options={currentQuestion.options}
        handleClick={handleClick}
        currentAnswer={answers[`${currentCategoryIndex}-${currentQuestionIndex}`] || ''}
      />
      <div className="flex justify-between mt-4">
        {currentCategoryIndex > 0 || currentQuestionIndex > 0 ? (
          <button onClick={prevQuestion} className="bg-gray-500 text-white py-2 px-4 rounded">
            Back
          </button>
        ) : (
          <div></div>
        )}
        {currentCategoryIndex === questions.length - 1 && currentQuestionIndex === currentCategory.questions.length - 1 ? (
          <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded">
            Submit
          </button>
        ) : (
          <button onClick={nextQuestion} className="bg-blue-500 text-white py-2 px-4 rounded">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
