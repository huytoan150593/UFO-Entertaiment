import React from "react";
import "./CreateTeam.css";
import { talents } from "../../constains/talent";

const CreateTeam = () => {
    const handlePrev = () => {
        const element = document.querySelector(".talen-wrap");
        element.classList.add("prev");
        element.classList.remove("next");
    };
    const handleNext = () => {
        const element = document.querySelector(".talen-wrap");
        element.classList.add("next");
        element.classList.remove("prev");
    };
    return (
        <div id="create-team">
            <div className="create-team-navi">
                <button onClick={handlePrev}> &#8656; </button>
                <button onClick={handleNext}> &#8658; </button>
            </div>
            <div className="talen-wrap">
                {talents.map((talent, index) => (
                    <div key={index} className="talent">
                        <div className="talent-image">
                            <img src="/assets/talent/hao-sq.jpg" alt="" />
                        </div>
                        <div className="talent-info">
                            <h1>{talent.name}</h1>
                            <p>{talent.birthday}</p>
                            <p> {talent.position}</p>
                            <p>{talent.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreateTeam;
