import { motion, Animate, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { useState } from "react";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import moment from "moment";

const Slider = ({ stateNews }) => {
  const [page, setPage] = useState(0);

  const imageIndex = wrap(0, 10, page);
  const paginate = (newDirection) => {
    setPage(page + newDirection);
  };

  console.log(stateNews);
  return (
    <div className="slider">
      <div className="slider-container">
        <div className="slider-image">
          <AnimatePresence initial={false}>
            <motion.img
              key={page}
              src={
                stateNews?.articles[imageIndex]?.urlToImage === null
                  ? "https://cdn1.vectorstock.com/i/thumb-large/50/20/no-photo-or-blank-image-icon-loading-images-or-vector-37375020.jpg"
                  : stateNews?.articles[imageIndex]?.urlToImage
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 300 },
                opacity: { duration: 1 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
            ></motion.img>
          </AnimatePresence>
        </div>
        <div className="slider-buttons">
          <motion.div
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
          >
            <FaChevronCircleLeft />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
          >
            <FaChevronCircleRight />
          </motion.div>
        </div>
        <div className="slider-info-container">
          <h3>{stateNews?.articles[imageIndex]?.title}</h3>
          <span>
            {stateNews?.articles[imageIndex]?.author === null
              ? "unknown"
              : stateNews?.articles[imageIndex]?.author}
          </span>{" "}
          <span className="slider-info-separation">| </span>
          <span>
            {moment().format(
              "MMM Do YY",
              stateNews?.articles[imageIndex]?.publishedAt
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
