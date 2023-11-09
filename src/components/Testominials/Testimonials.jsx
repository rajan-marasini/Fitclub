import React, { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { testimonialsData } from "../../data/testimonialsData";
import "./Testimonials.css";

const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLenght = testimonialsData.length;

    return (
        <div className="Testimonials">
            <div className="left-t">
                <span>Testimonials</span>
                <span className="stroke-text">What they</span>
                <span>say about us</span>
                <span>{testimonialsData[selected].review}</span>
                <span>
                    <span style={{ color: "var(--orange)" }}>
                        {testimonialsData[selected].name}
                    </span>{" "}
                    -<span>{testimonialsData[selected].status}</span>
                </span>
            </div>
            <div className="right-t">
                <div />
                <div />
                <img src={testimonialsData[selected].image} alt="" />

                <div className="arrows">
                    <img
                        src={leftArrow}
                        alt=""
                        onClick={() => {
                            selected == 0
                                ? setSelected(tLenght - 1)
                                : setSelected((prev) => prev - 1);
                        }}
                    />
                    <img
                        src={rightArrow}
                        alt=""
                        onClick={() => {
                            selected == tLenght - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
