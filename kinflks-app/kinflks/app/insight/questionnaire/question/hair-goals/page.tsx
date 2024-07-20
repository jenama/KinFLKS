import React,  { useState, useEffect} from 'react';

interface HairGoalsProps {
    data: any;
    prevStep: () => void;
    handleSubmit: () => void;
}

const HairGoals:React.FC<HairGoalsProps> = ({ data, prevStep, handleSubmit})  => {
    const [questions3, setQuestions3] = useState([])

    useEffect(() => {
       
        const getHairGoals = (data:any) => {
          const thirdQuestions = data[2].link.hairGoals.map((element: any) => {
            return element.question
          })
          setQuestions3(thirdQuestions)
        }
        getHairGoals(data)
    
      }, []);

    const currentSection = data[2].link.hairGoals

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">{data[2].title}</h2>
            <div>
                {currentSection.map((item: any)=>{
                    // console.log('ques', item)
                    return (
                        <div key={item.id}>
                            <h3>{item.question}</h3>
                        </div>
                    )
                })}
                <label className="block mb-2">Question 1</label>
                <div className="flex justify-between">
                    <button onClick={prevStep} className="bg-gray-500 text-white py-2 px-4 rounded">
                        Back
                    </button>
                    <button onClick={handleSubmit} className="bg-green-500 text-white py-2 px-4 rounded">
                    Submit
                    </button>
                </div> 
            </div>
        
        </div>

    )
}
export default HairGoals;


