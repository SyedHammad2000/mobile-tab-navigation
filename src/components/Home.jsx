import React from "react";
import { motion } from "framer-motion";


const Home = () => {
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
        <img
        src="https://images.unsplash.com/photo-1722265733876-45bd4dd9f625?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"

        style={{ width: "100%", height: "381px" }}
        alt=""
      />
    </motion.div>
  );
};

export default Home;
