import React from "react";
import img from "../../public/images/TSF.png";

const AboutPage = () => (
    <div className="page-container">
        <div className="content-container">
            <h2 className="customers-title">This app was created by <span>Abdallah Farag</span> as a task for <span>The Sparks Foundation</span> GRIP Internship, web development track.</h2>
            <div className="img-center">
                <img className="home-img" src={img} />
            </div>
        </div>
    </div>
)

export default AboutPage