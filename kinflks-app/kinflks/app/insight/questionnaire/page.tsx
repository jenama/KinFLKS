import React, { useState, useEffect, FC } from 'react';
import  hairAndScalpData  from './data/hair-and-scalp-data/page'
import ImageData, { StaticImageData }  from 'next/image';


interface props {

}

const QuestionPage : FC <props> = ({  }) => {
  const [questions, setQuestions] = useState([])
  const [currentQuestionIndex , setCurrentQuestionIndex] = useState(0)
  const [selectOption, setSelectOption] = useState('')
  const [selectedAnswer, setSelectedAnswer] = useState(false)
  const [next, setNext]  = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  
  const handleClick = (e:any) => {
   setSelectedAnswer(true)
  }
  const handleChange = (e:any) => {
    setSelectOption(e.target.value)
  }
  useEffect(() => {
    const getQuestion = (hairAndScalpData:any) => {

      setQuestions(hairAndScalpData)

      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
    getQuestion(hairAndScalpData)
  }, [])
  const handleSubmit = (e:any) => {
    e.preventDefault()
  
  }
  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }
  
  const currentQuestion = hairAndScalpData[currentStep]
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className='text-4xl font-bold mb-4'>Questions</h1>
        <h2 className='text-3xl' >Hair and Scalp</h2>
        <div className="mb-4">
          <label className="block text-gray-700">{currentQuestion.question}</label>
          <div  key= {currentQuestion.answers.id} className='grid grid-flow-col grid gap-4'>
            {currentQuestion.answers.options.map((answer:string|StaticImageData) =>{
              return(
                <div className ='shadow-md'>
                  {typeof answer === 'string'? <div onClick={handleClick}>{answer}</div> : <ImageData onClick={handleClick} className='w-auto h-auto md:w-48 md:h-48 lg:w-64 lg:h-64' src={answer} alt='photos of black hair' priority={false} /> }
                </div>
              )
            })}
          </div>
          <div className="flex justify-between">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={handleBack}
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
              >
                Back
              </button>
            )}
            {currentStep < questions.length - 1 && selectedAnswer === true? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Next
              </button>
              ) : currentStep === questions.length -1 ? (
                <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                Submit
              </button>
              ) :
              (<p>Please select an option</p>)
            }
        </div>
  </div>
       
      </form>
    </div>
  )
}
export default QuestionPage;
