import blueEnvelope from "../assets/img/blue-envelope.jpg";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="contact-wrapper">
          <div className="contact-top">
            <div className="c-left">
              <div className="c-left-wrapper">
                <h1>We're here</h1>
                <h4>Our door is alwayes open for a good cup of coffee</h4>
              </div>
            </div>
            <div className="c-right">
              <div className="c-right-wrapper">
                <h2>Let's talk.</h2>
                <p>share your thoughts with us.</p>
                <p>
                  <span>
                    <LocalPhoneIcon />
                  </span>
                  (061)-123-4567
                </p>
              </div>
            </div>
          </div>
          <div className="contact-bottom">
            <h2>Message us</h2>
            <div className="contact-bottom-wrapper">
              <div className="blue-envelope">
                <img src={blueEnvelope} alt="Blue envelope"></img>
              </div>
              <form>
                <input
                  id="e-mail"
                  type="text"
                  placeholder="Enter E-mail Address here"
                  name="e-mail"
                ></input>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter Name here"
                  name="name"
                ></input>
                <textarea
                  id="message"
                  placeholder="Message us !"
                  name="message"
                ></textarea>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
