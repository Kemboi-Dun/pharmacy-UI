import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlavorCard from "./ContentPlaceholder";
// import "../styles/test.scss";
import { Flavours } from "../_mock/Data";
import { flavorType } from "../store/Types";

interface accordionProps {
  falvour: any;
  expanded: any;
  setExpanded: any;
}

const Accordion = (props: accordionProps) => {
  const { falvour, expanded, setExpanded } = props;
  const isOpen = falvour.id === expanded;

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <>
      <motion.header
        initial={false}
        // animate={{ backgroundColor: isOpen ? "#FF0088" : "#5986e1",}}
        onClick={() => setExpanded(isOpen ? false : falvour.id)}
      
      >
        <div className="header-title">

        {falvour.header}
        </div>
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
            <FlavorCard falvour={falvour} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
const Flavour = () => {
  // This approach is if you only want max one section open at a time. If you want multiple
  // sections to potentially be open simultaneously, they can all be given their own `useState`.
  const [expanded, setExpanded] = useState<false | number>(1);
  // const accordionIds = [0, 1, 2];
  return (
    <div className="flavour-container">
      {Flavours.map((falvour: flavorType) => (
        <Accordion
          falvour={falvour}
          expanded={expanded}
          setExpanded={setExpanded}
          key={falvour.id}
        />
      ))}
    </div>
  );
};

export default Flavour;
