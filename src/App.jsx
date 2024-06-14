import { useState } from "react";
// import Registration from './components/Registration'
import "./App.css";
// import Quiz from "./components/Quiz";
import Question from './Question'
import QuizComponent from "./components/QuizComponent";


function App() {
  
  return (
    <>
     {/* <Registration /> */}
  
     <QuizComponent Question={Question}/>
    </>
  );
}

export default App;
