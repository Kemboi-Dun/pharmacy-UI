import * as React from "react";
import { motion } from "framer-motion";
import { mix } from "@popmotion/popcorn";
import { flavorType } from "../store/Types";

interface flavourCardProps {
  falvour: flavorType;
}

const FlavorCard = (props: flavourCardProps) => {
  const { falvour } = props;
  console.log(falvour);

  return (
    <motion.div
      variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
      transition={{ duration: 0.8 }}
      className="content-placeholder"
    >
      <div className="card-wrapper">
        <div className="card-info">
          <span className="card-info-title">{falvour.title}</span>
          <p>{falvour.description}</p>
          <ul>
            {falvour.benefits?.map((benefit: string, index) => (
              <div key={index}>
                <li >
                  <i className="fa-regular fa-hand-point-right"></i>
                  <p>{benefit}</p>
                </li>
                <hr />
              </div>
            ))}
          </ul>

          <div className="call-to-action-buttons-wrapper">
            <button>Buy now from KES {falvour.price}</button>
            <button>
              <i className="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
        <div className="card-image-wrapper">
          <img src={falvour.productImgURL} alt={falvour.title} />
        </div>
      </div>
    </motion.div>
  );
};
export default FlavorCard;

// export const ContentPlaceholder = () => (
//   <motion.div
//     variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
//     transition={{ duration: 0.8 }}
//     className="content-placeholder"
//   >

//       <FlavorCard falvour={falvour}  key={falvour.header}/>

//   </motion.div>
// );
