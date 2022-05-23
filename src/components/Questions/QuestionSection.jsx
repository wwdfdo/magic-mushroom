import React from "react";
import { QuestionArray } from "../../arrays/questionsArray";
import { useState } from "react";
import QsectionTitle from "./QsectionTitle";
import QsectionFooter from "./QsectionFooter";
import QsectionAccordion from "./QsectionAccordion";

const QuestionSection = () => {
  return (
    <div className="flex flex-col bg-[#2e3034] py-20 w-3/4 shadow-lg mx-auto items-center gap-2 mt-10">
      <QsectionTitle />
      <QsectionAccordion QuestionArray={QuestionArray} />
      <QsectionFooter />
    </div>
  );
};

export default QuestionSection;
