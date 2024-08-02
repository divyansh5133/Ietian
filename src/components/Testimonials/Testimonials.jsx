import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'

const Testimonials = () => {
    const slider =  useRef();
    let tx = 0;
    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    return (
      <div className="testimonials">
        <img
          onClick={slideForward}
          className="next-btn"
          src={next_icon}
          alt="Next Icon"
        />
        <img
          onClick={slideBackward}
          className="back-btn"
          src={back_icon}
          alt="Back Icon"
        />
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="User 1" />
                  <div>
                    <h3>Utkarsh Shrivastava</h3>
                    <span>Jabalpur,M.P.</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at DAVV University was one of the best
                  decisions I have ever made. The supportive community,
                  state-of-the-art facilities, and commitment to academic
                  excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="User 2" />
                  <div>
                    <h3>Anuj Patel</h3>
                    <span>Raisen,M.P.</span>
                  </div>
                </div>
                <p>
                  Enrolling at DAVV University has been a game-changer for me. The
                  experienced faculty, innovative curriculum, and vibrant campus
                  life have all contributed to an enriching educational journey.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="User 3" />
                  <div>
                    <h3>Sajal Jain</h3>
                    <span>Sagar,M.P.</span>
                  </div>
                </div>
                <p>
                  Attending DAVV University has been a transformative experience. The
                  personalized support from professors, extensive resources, and
                  hands-on learning opportunities have made a significant impact
                  on my academic and personal growth.
                </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="User 4" />
                  <div>
                    <h3>Prakhar Saxena</h3>
                    <span>Bhopal,M.P.</span>
                  </div>
                </div>
                <p>
                  Studying at DAVV University has surpassed all my expectations. The
                  collaborative environment, advanced learning tools, and
                  unwavering focus on student success have made it an ideal
                  place for my academic pursuits.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Testimonials;