import React from "react";
import { QuestionArray } from "../../arrays/questionsArray";
import { useState } from "react";

const QuestionSection = () => {
  const [visibleAccordionId, setVisibleAccordionId] = useState(null);

  return (
    <div className="flex flex-col bg-[#2e3034] py-20 w-3/4 shadow-lg mx-auto items-center gap-2 mt-10">
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-white text-5xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="text-center mb-10">
          <p className="text-white text-xl font-semibold">
            Any questions you have we are here to answer.
          </p>
        </div>
      </div>
      {QuestionArray.map((Question) => (
        <div key={Question.id} className="w-3/5 bg-white px-8 py-8 rounded-lg">
          <div
            onClick={() =>
              setVisibleAccordionId(
                visibleAccordionId === Question.id ? null : Question.id
              )
            }
          >
            <h3 className="text-[1.3125rem] font-bold">{Question.qtitle}</h3>
          </div>
          <div
            className={`${visibleAccordionId === Question.id ? "" : "hidden"}`}
          >
            <p>{Question.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionSection;
