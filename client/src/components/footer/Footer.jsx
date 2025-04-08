import "./footer.css";
import logo from "../../assets/footer-logo.jpg";
import { Link } from "react-router";
import { Link as Scroll } from "react-scroll";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="footer">
        <div className="lhs-footer">
          <img src={logo} alt="" />
          <p>
            Omojesu Children Global Initiative envisions a world where every
            child, regardless of background, has access to education,
            empowerment, and opportunities to thrive.
          </p>
          <span>
            <a
              href="https://www.facebook.com/profile.php?id=100092351000608&mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/childrenglobalmedia?igsh=eHFkNjRnNzhycWk%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://twitter.com/childrenglo_bal">
              <FaTwitter />
            </a>
            <a href="http://youtube.com/@ChildrenGlobalMedia">
              <FaYoutube />
            </a>
          </span>
        </div>
        <div className="rhs-footer">
          <section>
            <h4>Company</h4>
            <Link className="footer-link" to="/">
              Home
            </Link>
            <Link className="footer-link" to="/about">
              About Us
            </Link>
            <Scroll
              to="services"
              spy={true}
              smooth={true}
              className="footer-link"
            >
              Services
            </Scroll>
            <Scroll
              to="events"
              spy={true}
              smooth={true}
              className="footer-link"
            >
              Events
            </Scroll>
            <Link className="footer-link" to="/contact">
              Contact
            </Link>
          </section>
          <section>
            <h4>Services</h4>
            <span>Charity Programs</span>
            <span>Education Empowerment</span>
            <span>Media Outreach</span>
          </section>
          <section>
            <h4>Quick Links</h4>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </section>
        </div>
      </div>
      <p>
        Copyright {date} - Childrenglobal Developed by BeeTech. All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
