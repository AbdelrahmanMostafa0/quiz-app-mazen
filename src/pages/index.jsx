import Question from "@/components/Question/Question";
import { quizQuestions } from "@/data/quizQuestions ";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [total, setTotal] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [viewScore, setViewScore] = useState(false);
  const passed = total * 2 > 6;
  const retake = () => {
    router.reload();
  };
  return (
    <div className="container mx-auto px-4 py-10 space-y-10" dir="rtl">
      <h1 className="text-center text-3xl font-bold">
        {" "}
        اسئلة للمازن باشا عن الكومبيوتر 💻
      </h1>
      {viewScore ? (
        <div className="w-full h-[75dvh] grid place-content-center items-center justify-center gap-4   ">
          {passed ? (
            <div className="text-8xl mx-auto">🥳</div>
          ) : (
            <div className="text-8xl mx-auto">😭</div>
          )}
          <p
            className={`text-5xl text-center font-bold ${
              passed ? "text-green-500" : "text-red-500"
            }`}
          >
            {total * 2} / 12
          </p>
          <button
            onClick={retake}
            className="text-xl  py-2 border-b-2 border-black font-bold"
          >
            جرب تانى؟
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full gap-10">
          {quizQuestions.map((q) => {
            return (
              <Question
                answers={q.answers}
                correctAnswer={q.correctAnswer}
                question={q.question}
                setTotal={setTotal}
                setAnswered={setAnswered}
              />
            );
          })}
          {quizQuestions.length === answered && (
            <button
              onClick={() => setViewScore(true)}
              className="max-w-[800px] py-4 px-6 bg-green-600 text-white w-full rounded-lg font-xl font-semibold"
            >
              شوف جبت كام
            </button>
          )}
        </div>
      )}
    </div>
  );
}
