import { useEffect, useState } from "react";
import {questions} from "../data";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";

const shuffleArray=(array)=>{
    array = array || [];
    const newArr = array.sort(()=>Math.random()-0.5)
    return newArr.slice(0,5);
}   

export default function CategoryPage() {
    const {category} = useParams();
    const [questionFiltered,setQuestionFiltered] = useState(questions.filter(q => q.category === category));

    useEffect(()=>{
        const newQuestions = shuffleArray(questionFiltered);
        setQuestionFiltered(newQuestions)
    },[]);

    return (
        <div className="container flex flex-col items-center justify-center gap-10" style={{height:"calc(100vh - 5rem)"}}>
            <Question/>
        </div>
    )
}
