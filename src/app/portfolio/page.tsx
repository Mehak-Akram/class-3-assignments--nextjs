import Image from "next/image";
import img1 from "../../../image/img1.jpg";
import img4 from "../../../image/img4.jpeg";
import img3 from "../../../image/img3.png";

let Portfolio = () => {
  return (
    <div>
      <div className="Portfolio" id="Portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
          </div>

          <div className="portfolio-heading">
            <h2>My Latest Projects :</h2>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-item-inner ">
              <h2 className="project-name">cli-Todo-List</h2>
              <div className="portfolio-img">
                <Image src={img4} alt="Todo-list"></Image>
                <a href="https://github.com/Mehak-Akram/Todo-list.git">
                  <button className="btn">Github Link</button>
                </a>
              </div>
            </div>
            <div className="portfolio-item-inner ">
              <h2 className="project-name">cli-countdown-timer</h2>
              <div className="portfolio-img">
                <Image src={img1} alt="countdown-timer"></Image>
                <a href="https://github.com/Mehak-Akram/cli-countdown-timer.git">
                  <button className="btn">Github Link</button>
                </a>
              </div>
            </div>
            <div className="portfolio-item-inner ">
              <h2 className="project-name">currency-convertor</h2>
              <div className="portfolio-img">
                <Image src={img3} alt="currency-convertor"></Image>
                <a href="https://github.com/Mehak-Akram/currency-convertor-2.git">
                  <button className="btn">Github Link</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
