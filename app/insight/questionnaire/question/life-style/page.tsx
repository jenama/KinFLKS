import React,  { useState, useEffect} from 'react';

interface LifeStyleProps {
    data: any;
    nextStep: () => void;
    prevStep: () => void;
}

const LifeStyle:React.FC<LifeStyleProps> = ({ data, nextStep, prevStep })  => {
    const [questions2, setQuestions2] = useState([])
    
    useEffect(() => {
      
        const getLifestyle = (data: any) => {
          const secondQuestions = data[1].link.lifestyle.map((element: any) => {
            return element.question
          })
          setQuestions2(secondQuestions)
        }
        
        getLifestyle(data)
    }, []);


    const currentSection = data[1].link.lifestyle
  return (
    <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{data[1].title}</h2>
        <div>
            {currentSection.map((item: any)=>{
                // console.log('ques', item)
                return (
                    <div key={item.id}>
                        <h3>{item.question}</h3>
                    </div>
                )
            })}
              
        </div>
        <div className="flex justify-between">
            <button onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded">
            Back
            </button>
            <button onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded">
            Next
            </button>
        </div>
       
     </div>

  )
}
export default LifeStyle;


