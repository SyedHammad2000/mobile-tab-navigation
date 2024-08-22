import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0,
      transition: { duration: 0.5 }
     }}
      animate={{ opacity: 1 ,
      transition: { duration: 1 }}}
      exit={{ opacity: 0, 
      transition: { duration: 0.5 } }}
    >

      {/* random image of Brad pitt actor  */}
      <img
        src="
        https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"

        style={{ width: "100%", height: "381px" }}
        alt=""
      />
    </motion.div>
  );
};

export default About;
