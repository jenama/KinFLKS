import React, { useState, useEffect, FC } from 'react';
import ImageData, { StaticImageData }  from 'next/image';
import formData from './data/page';

interface props {

}

const QuestionPage : FC <props> = ({  }) => {
  
  const [questions, setQuestions] = useState([])
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0)
  const [currentQuestionIndex , setCurrentQuestionIndex] = useState(0)
  const [selectOption, setSelectOption] = useState('')
  const [selectedAnswer, setSelectedAnswer] = useState(false)
  const [next, setNext]  = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  

  const handleClick = () => {
   setSelectedAnswer(true)
  }
  
  useEffect(() => {
    const getQuestion = (formData:any) => {
      setQuestions(formData[currentCategoryIndex])
      setCurrentQuestionIndex
    }
    getQuestion(formData)
  }, [])
  const handleSubmit = (e:any) => {
    e.preventDefault()
    setCurrentCategoryIndex(currentCategoryIndex + 1)

  }
   
  const handleNext = () => {
    if (currentStep < formData[currentCategoryIndex].questions.length - 1) {
     setCurrentStep(currentStep + 1)
    }
  }
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className='text-4xl font-bold mb-4'>Questions</h1>
        <h2 className='text-3xl' ></h2>
        <div className="mb-4">
          {formData.map((category) => {
            return(
              <div key ={category.id}>
                <h2 className='text-3xl' >{category.title}</h2>
                <div>{category.questions.map((question: any)=>{
                  return(
                    <div>
                      <label className="block text-gray-700">{question.question}</label>
                      <div className='grid grid-flow-col grid gap-4'>
                        {question.answers.choices.map((answer: string | StaticImageData) => { 
                         return(
                          <div className ='shadow-md'>
                            {typeof answer === 'string'? <div key={question.answers.id} onClick={handleClick}>{answer}</div> : <ImageData key={question.answers.id} onClick={handleClick} className='w-auto h-auto md:w-48 md:h-48 lg:w-64 lg:h-64' src={answer} alt='photos of black hair' priority={false} /> }
                          </div>
                         )
                        })}
                      </div>
                    </div>
                  )
                })}</div>
              </div>
          )
          })}
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
            {currentStep < questions.length - 1 && selectedAnswer? (
              
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
