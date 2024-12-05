import React, { useState } from "react";

const MyFAQ = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="main-heading">
      <h3>{question}</h3>
        <p className="plus" onClick={() => setShow(!show)}>{show? "-": "+"}</p>
        {/* <h3>{question}</h3> */}
      </div>
      {show && <p className="answers ">{answer}</p>}
    </>
  );
};

export default MyFAQ;
