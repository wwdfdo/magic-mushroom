import React from "react";
import { useState } from "react";

const QsectionAccordion = ({ QuestionArray }) => {
  const [visibleAccordionId, setVisibleAccordionId] = useState(null);
  return (
    <>
      {QuestionArray.map((Question) => (
        <div key={Question.id} className="w-3/5 bg-white px-8 py-8 rounded-lg">
          <div
            className="flex justify-between"
            onClick={() =>
              setVisibleAccordionId(
                visibleAccordionId === Question.id ? null : Question.id
              )
            }
          >
            <h3 className="text-[1.3125rem] font-bold">{Question.qtitle}</h3>
            <span className="text-xl">
              <i
                className={`fa-solid ${
                  visibleAccordionId === Question.id
                    ? "fa-angle-up"
                    : "fa-angle-down"
                } `}
              ></i>
            </span>
          </div>
          <div
            className={`${
              visibleAccordionId === Question.id ? "" : "hidden"
            } mt-8`}
          >
            <p className="text-[#13151cb3] font-bold">{Question.answer}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default QsectionAccordion;
