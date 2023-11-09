import { motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";
import Calories from "../../assets/calories.png";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
    const transtion = { type: "spring", duration: 3 };
    return (
        <div className="hero">
            <div className="blur blur-h"></div>
            <div className="left-h">
                <Header />

                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: "238px" }}
                        whileInView={{ left: "8px" }}
                        transition={{ ...transtion, type: "tween" }}
                    ></motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">shape </span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to shape and build your
                            ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                <div className="figure">
                    <div>
                        <span>
                            +<CountUp start={0} end={140} duration={4} />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            +<CountUp start={0} end={978} duration={4} />
                        </span>
                        <span>memeber joined</span>
                    </div>
                    <div>
                        <span>
                            +<CountUp start={0} end={50} />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>

                <div className="hero-buttons">
                    <button className="btn">Get started</button>
                    <button className="btn">Learn more</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join Now</button>
                <motion.div
                    className="heart-rate"
                    initial={{ right: "-1rem" }}
                    whileInView={{ rigth: "4rem" }}
                    transition={{ ...transtion }}
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate </span>
                    <span>116 bpm</span>
                </motion.div>

                <img src={hero_image} alt="" className="hero-image" />
                <img src={hero_image_back} alt="" className="hero-image-back" />

                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
