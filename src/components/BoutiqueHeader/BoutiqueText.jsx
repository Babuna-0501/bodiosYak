import * as React from "react";
import { motion } from "framer-motion";

function BoutiqueText({ text, isFirst }) {
  const Element = isFirst ? "h1" : "div";

  return (
    <motion.div
      initial={{ x: 0 }}
      whileHover={{ x: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full flex justify-center"
    >
      <Element
        className={`${!isFirst ? "mt-5" : ""} max-md:max-w-full max-md:text-4xl text-center`}
      >
        {text}
      </Element>
    </motion.div>
  );
}

export default BoutiqueText;
