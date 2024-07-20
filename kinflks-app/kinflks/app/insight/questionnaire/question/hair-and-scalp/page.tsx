import React,  { useState, useEffect} from 'react';
import ImageData, { StaticImageData }  from 'next/image';

interface HairScalpProps {
    data: any;
    nextStep: () => void;
    handleClick:() => void;
}   

const HairAndScalp:React.FC<HairScalpProps> = ({ data, nextStep, handleClick  })  => {
    const [currentStep, setCurrentStep] = useState(0)
    const [questions1, setQuestions1] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState(false)
    
    // useEffect(() => {
        const getHairAndScalp = (data: any) => {
         const firstQuestions =  data[0].link.hairAndScalpData.map((element: any) => {
            return element
          })
          setQuestions1(firstQuestions) 
        }
        getHairAndScalp(data)
    
    //   }, []);
    // const currentSection = data[0].link.hairAndScalpData
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">{data[0].title}</h2>
            <div>
                {questions1.map((item: any)=>{
                    console.log('q1', questions1)
                    return (
                        <div key={item.id}>
                            <h3>{item.question}</h3>
                            <div>
                                {item.answers.options.map((answer: any) => {
                                    return(
                                        <div key={answer.id} >{typeof answer === 'string'? <div onClick={handleClick}>{answer}</div> : <ImageData  onClick={handleClick} className='w-auto h-auto md:w-48 md:h-48 lg:w-64 lg:h-64' src={answer} alt='photos of black hair' priority={false} /> }</div>
                                    )
                                })}

                            </div>
            
                        </div>
                    )
                })}
            </div>
            S
        </div>

    )
}
export default HairAndScalp;


