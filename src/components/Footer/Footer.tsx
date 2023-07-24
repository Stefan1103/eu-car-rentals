import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="eu-car-rental">
            <h3>
              <span>EU-CAR</span> Rentals
            </h3>
            <p>
              We offer a big range of vehicles for all your needs. We have the
              perfect car for you!
            </p>
            <h4>
              <span>
                <LocalPhoneIcon />
              </span>
              (061)-123-4567
            </h4>
            <h4>
              <span>
                <MailIcon />
              </span>
              eu_car_rental@yahoo.com
            </h4>
          </div>
          <div className="company">
            <h3>COMPANY</h3>
            <ul>
              <li>
                <a>Budapest</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>How we work</a>
              </li>
            </ul>
          </div>
          <div className="working-hours">
            <h3>WORKING HOURS</h3>
            <p>Mon-Fri 9:00AM - 21:00PM</p>
            <p>Sat: 9:00AM - 19:00</p>
            <p>Sun: Closed</p>
          </div>
          <div className="subscribtion">
            <h3>SUBSCRIPTION</h3>
            <p>
              Subscribe your email address to get the latest news and deals.
            </p>
            <form>
              <input type="text" placeholder="Enter E-mail Address"></input>
              <button className="btn-booking" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; EU-car-rentals</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
