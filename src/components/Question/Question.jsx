import { useState } from "react";

const Question = ({
  question,
  answers,
  correctAnswer,
  setTotal,
  setAnswered,
}) => {
  const [answer, setAnswer] = useState("");
  const [check, setCheck] = useState(false);
  const selectAnswer = (a) => {
    if (!check) {
      setAnswer(a);
    }
  };
  const checkAnswer = () => {
    setCheck(true);
    setAnswered((prev) => ++prev);
    if (correctAnswer === answer) {
      setTotal((prev) => prev + 1);
    }
  };
  const isCorrect = check && answer === correctAnswer;
  const isFalse = check && answer !== correctAnswer;

  return (
    <div
      className={`max-w-[800px] border-2 border-[#b0bec5] rounded-lg  w-full bg-[#e0f7fa] p-5 py-8  space-y-5 drop-shadow-lg ${
        isCorrect && "border-green-500 border-4"
      } ${isFalse && "border-red-500 border-4"}`}
    >
      <h3 className="text-2xl font-bold text-[#01579b]">{question}</h3>
      <div className="space-y-5">
        {answers.map((a, i) => {
          const selected = a == answer;
          const wrong = selected && check && isFalse;
          const correct =
            check && (isFalse || isCorrect) & (a === correctAnswer);
          return (
            <div
              className="flex items-center gap-4 cursor-pointer"
              key={i}
              onClick={() => selectAnswer(a)}
            >
              <div
                className={`w-6 h-6 border-black border-2 rounded-full ${
                  selected && "bg-blue-500"
                }`}
              />
              <p
                className={`text-lg font-semibold text-[#616161] ${
                  wrong && "text-red-500"
                } ${correct && "text-green-500"}`}
              >
                {a}
              </p>
            </div>
          );
        })}
      </div>
      {answer && !check && (
        <div className="flex items-center justify-end">
          <button
            onClick={checkAnswer}
            className="py-2 px-4 border rounded-xl bg-white font-semibold"
          >
            إكتشف الإجابة الصحيحة 🤔
          </button>
        </div>
      )}

      {/* {isFalse && } */}
    </div>
  );
};
export default Question;
