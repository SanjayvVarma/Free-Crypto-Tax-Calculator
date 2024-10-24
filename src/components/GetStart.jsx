import React from "react";
import img from "../assets/3D.png";

const GetStart = () => {
    return (
        <div className="get-start">

            <div>
                <h3 className="get-start-title">Get Started with KoinX for FREE</h3>
            </div>
            <div>
                <h5 className="get-start-subtitle">
                    With our range of features that you can equip for free, KoinX allows
                    you to be more educated and aware of your tax reports.
                </h5>
            </div>
            <div>
                <img
                    src={img} 
                    alt="get-started"
                    className="get-started-img"
                />
            </div>
            <div>
                <button className="get-started-btn"  >
                    <p>
                        Get Started for FREE{" "}
                        <span>&#8594;</span>
                    </p>
                </button>
            </div>
        </div>

    );
};

export default GetStart;