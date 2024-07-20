// components/Question.tsx
import React from 'react';
import ImageData, { StaticImageData }  from 'next/image';

interface QuestionProps {
  question: string;
  options: string[] | StaticImageData[];
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  currentAnswer: string | StaticImageData;
}

const Question: React.FC<QuestionProps> = ({ question, options, handleClick, currentAnswer }) => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">{question}</h2>
    {options.map((option:string | StaticImageData, index) => (
      <label key={index} className="block mb-2">
        {/* <input
          type="radio"
          name="answer"
          value={option}
          onChange={handleChange}
          checked={currentAnswer === option}
          className="mr-2"
        /> */}
        <div>
        {typeof option === 'string'? <div onClick={handleClick}>{option}</div> : <ImageData  className='w-auto h-auto md:w-48 md:h-48 lg:w-64 lg:h-64' src={option} onClick={handleClick}alt='photos of black hair' priority={false} /> }
        </div>
       
      </label>
    ))}
  </div>
);

export default Question;
