import React from "react";
// import ProgressBar from 'react-bootstrap/ProgressBar';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import ContactForm from "../contact/ContactForm";
import campaign3 from "../../../assets/campaign3.jpeg";
import QandA1 from "../../../assets/Q&A1.jpg";
import QandA2 from "../../../assets/Q&A2.jpg";
import campaign2 from "../../../assets/campaign2.png";
import "./event.css";
import "swiper/css/navigation";
import Progress from "../../progressBar/Progress";

const Events = () => {
  return (
    <div className="events">
      <h3>Let's Collaborate</h3>
      <h2>Join Us In Creating Positive Change Through The Power Of Giving</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="third-slide">
            <div className="image-div">
              <img src={campaign3} alt="campaign3" />
            </div>
            <div>
              <h2>Our Values</h2>
              <ul>
                <li>
                  <b>Empowerment: </b>
                  <span>
                    Empowering children and youth to reach their full potential.
                  </span>
                </li>
                <li>
                  <b>Inclusivity: </b>
                  <span>
                  Ensuring equal access and support for all individuals.
                  </span>
                </li>
                <li>
                  <b>Integrity: </b>
                  <span>
                  Upholding transparency and accountability in all our endeavors.
                  </span>
                </li>
                <li>
                  <b> Collaboration: </b>
                  <span>
                  Working with stakeholders to create positive impacts.
                  </span>
                </li>
                <li>
                  <b> Impact: </b>
                  <span>
                  Measuring success by the tangible improvements in children's lives.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="event-slide conversation">
            <div>
              <img src={QandA2} alt="First slide" />
              <span>
                Share on <FaFacebook /> <FaInstagram /> <FaTwitter />{" "}
              </span>
            </div>
            <ContactForm heading="Let's hear from you" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="event-slide">
            <img src={campaign2} alt="First slide" />
            <div className="text">
              <h4>EDUCATION</h4>
              <h3>Helping Hands for the Homeless</h3>
              <p>
                People who are homeless are not social inadequates, they are
                people without homes. We seek for help for the homeless from you
                all as we help non profits access the funding, tools, trainings
                which they need. Help children grow in their relationship with
                Jesus and with one another. One random act of kindness could be
                the difference between life and death. Save a life today!
              </p>
              <p>
                <span>$25 </span>of $2000 goal
              </p>
              <Progress />
              <div className="events-button-group">
                <button className="support-event-button">Donate Now</button>
                <span>
                  Share on <FaFacebook /> <FaInstagram /> <FaTwitter />{" "}
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Events;
