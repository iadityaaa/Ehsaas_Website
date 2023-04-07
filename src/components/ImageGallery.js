import React, { useState } from "react";
import { IonIcon } from "react-ion-icon";
import "./ImageGallery.css";

//Achievements
import img1 from "../Images/Achievements/2016/IIT Bombay, Nukkad 2nd position_.jpg";
import img3 from "../Images/Achievements/2017/IITB 2017, Nukkad Winners.jpg";
import img4 from "../Images/Achievements/2019/IITB 2019, Nukkad Winners.jpg";
import img6 from "../Images/Achievements/2019/XLRI 2019, winner nukkad_.jpg";
import img8 from "../Images/Achievements/2020/Bitotsav 2020, Stage Play Winners.jpg";

//Nukkad
import img9 from "../Images/Nukkad/20200517_184333.jpg";
import img10 from "../Images/Nukkad/_MG_2512.JPG";
import img11 from "../Images/Nukkad/_MG_2567.JPG";
import img12 from "../Images/Nukkad/_MG_2569.JPG";
import img13 from "../Images/Nukkad/_MG_2591.JPG";
import img14 from "../Images/Nukkad/DSC_6322.JPG.jpg";
import img15 from "../Images/Nukkad/DSC_6323.JPG.jpg";
import img16 from "../Images/Nukkad/DSC_6324.JPG.jpg";

//Play
import img18 from "../Images/Play/_MG_9541.JPG";
import img19 from "../Images/Play/_MG_9549.JPG";
import img20 from "../Images/Play/_MG_9591.JPG.jpeg";
import img21 from "../Images/Play/_MG_9614.jpg";
import img22 from "../Images/Play/_MG_9626-01.jpeg";

//Skit
import img23 from "../Images/Skit/_MG_0500.JPG";
import img24 from "../Images/Skit/_MG_0535.JPG";
import img25 from "../Images/Skit/_MG_0556.JPG";
import img26 from "../Images/Skit/_MG_0585.JPG";
import img27 from "../Images/Skit/_MG_0586.JPG";
import img28 from "../Images/Skit/_MG_0591.JPG";

//Mime
import img29 from "../Images/Mime/_MG_9483.JPG";
import img30 from "../Images/Mime/ANK_0055.JPG";

const ImageGallery = () => {
  const [more, setMore] = useState(false);

  const handleMore = () => {
    setMore(true);
  };

  return (
    <div>
      <div id="image-gallery" className="container-fluid py-5">
        <h3
          className="text-center sm-p-5 "
          style={{ color: "rgb(178, 62, 62)" }}
        >
          <IonIcon
            className="reveal fade-bottom"
            name="radio-outline"
          ></IonIcon>
          <p className="reveal fade-bottom2 " style={{ margin: "0 0 75px 0" }}>
            Gallery
          </p>
        </h3>
        <div>
          <div class="reveal fade-bottom image-row px-2 mt-5">
            <div class="image-column">
              <img src={img1} alt="something" style={{ width: "100%" }} />
              <img src={img16} alt="something" style={{ width: "100%" }} />

              {more && (
                <>
                  <img src={img19} alt="something" style={{ width: "100%" }} />
                  <img src={img10} alt="something" style={{ width: "100%" }} />
                  <img src={img26} alt="something" style={{ width: "100%" }} />
                  <img src={img20} alt="something" style={{ width: "100%" }} />
                </>
              )}
            </div>
            <div class="image-column">
              <img src={img8} alt="something" style={{ width: "100%" }} />
              <img src={img9} alt="something" style={{ width: "100%" }} />

              {more && (
                <>
                  <img src={img23} alt="something" style={{ width: "100%" }} />
                  <img src={img22} alt="something" style={{ width: "100%" }} />
                  <img src={img27} alt="something" style={{ width: "100%" }} />
                  <img src={img28} alt="something" style={{ width: "100%" }} />
                  <img src={img13} alt="something" style={{ width: "100%" }} />
                  <img src={img25} alt="something" style={{ width: "100%" }} />
                </>
              )}
            </div>
            <div class="image-column">
              <img src={img14} alt="something" style={{ width: "100%" }} />
              <img src={img30} alt="something" style={{ width: "100%" }} />

              {more && (
                <>
                  <img src={img3} alt="something" style={{ width: "100%" }} />
                  <img src={img4} alt="something" style={{ width: "100%" }} />
                  <img src={img29} alt="something" style={{ width: "100%" }} />
                  <img src={img15} alt="something" style={{ width: "100%" }} />
                  <img src={img11} alt="something" style={{ width: "100%" }} />
                </>
              )}
            </div>
            <div class="image-column">
              <img src={img6} alt="something" style={{ width: "100%" }} />

              {more && (
                <>
                  <img src={img18} alt="something" style={{ width: "100%" }} />
                  <img src={img12} alt="something" style={{ width: "100%" }} />
                  <img src={img21} alt="something" style={{ width: "100%" }} />
                  <img src={img24} alt="something" style={{ width: "100%" }} />
                </>
              )}
            </div>
            {!more && (
              <button
                className="btn btn-secondary btn-large mx-auto my-5"
                onClick={handleMore}
              >
                Show More
              </button>
            )}
          </div>
        </div>
      </div>

      <section className="lg_team_sec"></section>
    </div>
  );
};

export default ImageGallery;
