import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { userTestimonials } from "../../data";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-wrapper">
        <div className="testimonials-header">
          <h3>Reviewed by people</h3>
          <h2>Client's Testimonials</h2>
          <p>
            Our clients have shared there experiance of our services, and are
            eager to share their perspective. Discover what our clients have to
            say about the treatment and services they got from us.
          </p>
        </div>
        <div className="testimonials-main">
          {userTestimonials.map((userT) => {
            const { comment, id, picture, user } = userT;
            return (
              <>
                <div key={id} className="testimonials-main-wrapper">
                  <div className="testimonials-main-top">
                    {<p>{comment}</p>}
                  </div>
                  <div className="testimonials-main-bottom">
                    <div className="testimonials-user-container">
                      {" "}
                      <div className="icon-container">
                        {" "}
                        <img src={picture} alt="user icon"></img>
                      </div>
                      <h4>{user}</h4>
                    </div>

                    <span>
                      <FormatQuoteIcon />
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
