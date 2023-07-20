import React, { useState } from "react";
import { faq } from "../../data";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const [selectedQuestion, setselectedQuestion] = useState(1);
  return (
    <section className="faq">
      <div className="faq-wrapper">
        <div className="faq-header">
          <h3>FAQ</h3>
          <h2>Frequently asked questions</h2>
          <p>
            Frequently asked questions about EU-car-rentals,prices and bookings:
            Answers to common concerns and inquiries
          </p>
        </div>
        <div className="faq-main">
          {faq.map((q) => {
            const { id, question, answer } = q;
            return (
              <div key={id} className="faq-main-wrapper">
                <div
                  onClick={() => setselectedQuestion(id)}
                  className={`question ${
                    selectedQuestion === id ? "active-question" : ""
                  }`}
                >
                  <h4>{question}</h4>
                  <span>
                    <ExpandMoreIcon />
                  </span>
                </div>
                <p
                  className={`${
                    selectedQuestion === id ? "active-question" : ""
                  }`}
                >
                  {answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
