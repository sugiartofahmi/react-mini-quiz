import MainLayout from "../../layout/MainLayout";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Questions from "../../helper/Questions";
import { useState } from "react";
import Button from "../../components/Button";
const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(Questions);
  const [time, setTime] = useState(5000);
  const submitAnswer = (isCorrect) => {
    isCorrect && setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    nextQuestion < questions.length
      ? setCurrentQuestion(nextQuestion)
      : setShowScore(true);
    clearTimeout(timeout);
  };
  const timeout = setTimeout(submitAnswer, time);
  console.log(timeout);

  const resetButton = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
  };
  return (
    <>
      <MainLayout>
        <Navbar />
        <div className="flex justify-center items-center w-full h-full text-[#F2E7D5]">
          <Card>
            {showScore ? (
              <div className="flex flex-col gap-y-5 w-full h-full justify-center items-center">
                <h1 className="text-2xl text-center leading-tight font-medium mb-2">
                  Your Score Is {score} Out Of {questions.length}
                </h1>
                <Button onClick={resetButton} text="reset" />
              </div>
            ) : (
              <>
                <div className="w-3/5">
                  <h5 className="text-2xl leading-tight font-medium mb-2">
                    Question <span> </span>
                    <span className=" text-base">
                      {currentQuestion + 1}/{questions.length}
                    </span>
                  </h5>
                  <p className="text-lg mb-4">
                    {questions[currentQuestion].questionText}
                  </p>
                </div>
                <div className="w-2/5 flex flex-col gap-y-5 justify-center ">
                  {questions[currentQuestion].answerOptions.map((el, i) => (
                    <Button
                      key={i}
                      text={el.answerText}
                      onClick={() => submitAnswer(el.isCorrect)}
                    />
                  ))}
                </div>
              </>
            )}
          </Card>
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
