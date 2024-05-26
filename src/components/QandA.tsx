import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Questions } from "../_mock/Data";
import { questionType } from "../store/Types";

interface answersProps {
  answer: questionType;
}

interface questionProps {
  question: any;
  expanded: any;
  setExpanded: any;
}

const Answer = (props: answersProps) => {
  const { answer } = props;
  console.log(answer);

  return (
    <motion.div
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      className="answer-wrapper"
    >
      <p>{answer.answer}</p>
    </motion.div>
  );
};

const Question = (props: questionProps) => {
  const { question, expanded, setExpanded } = props;
  const isOpen = question.id === expanded;

  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#a9e6c09a" : "#9defbc46" }}
        onClick={() => setExpanded(isOpen ? false : question.id)}
      >
        <div className="header-title">{question.question}</div>

        <i className="fa-solid fa-chevron-down"></i>
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Answer answer={question} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

const QandA = () => {
  const [expanded, setExpanded] = useState<false | number>(1);
  return (
    <div className="question-container container-wrapper">
      {Questions.map((question: questionType) => (
        <Question
          question={question}
          expanded={expanded}
          setExpanded={setExpanded}
          key={question.id}
        />
      ))}
    </div>
  );
};

export default QandA;
