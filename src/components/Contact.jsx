import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
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

        //   random unsplash image
        src="https://images.unsplash.com/photo-1719937206094-8de79c912f40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8
        
        "
        style={{ width: "100%", height: "381px" }}
        alt="pic"
      />
    </motion.div>
  );
};

export default Contact;
