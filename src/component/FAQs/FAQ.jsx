import React, { useState } from "react";
import { questions } from "./Content";
import "./FAQ.css";
import MyFAQ from "./MyFAQ";

const FAQ = () => {
  const [data, setData] = useState(questions);
  return (
    <>
    <section className="main-div">
        <h1>FAQs</h1>
      {data.map((curElem) => {
        const { id } = curElem;
        return <MyFAQ key={id} {...curElem} />;
      })}
      </section>
    </>
  );
};

export default FAQ;
