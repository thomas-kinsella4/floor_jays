import React, { useState, useEffect } from "react";
// import cowfeet from "../assets/cowbackground.png";

function Process() {
    // const [toggleExpand, setToggleExpand] = useState();

    // function handleDivClick(e) {
    //     let oldSelection = toggleExpand; 
    //     let newSelection = e.currentTarget;

    //     if(e.currentTarget.className === "processCard"){
    //         newSelection.className = "on"
    //         if(oldSelection != undefined){
    //             oldSelection.className = "processCard"
    //         }
    //         setToggleExpand(newSelection);
    //     }
    //     else{
    //         newSelection.className = "processCard"
    //         setToggleExpand(newSelection)
    //     }
    // };

    return (
        <>
        <a className='anchor' id='process-section'></a>
        {/* <h1 id="process-header">Our Process</h1> */}
            <div className='content' id='process-content'>
            <div data-aos="flip-left" className="process-card-left">
                    <div className="inner-process-card">
                        <h1>Contact Us</h1>
                        <p>Give us a call or send us an email via our online form and we'll promptly be in touch to assist you.</p>
                    </div>
                </div>
                <div data-aos="flip-right" className="process-card-right">
                    <div className="inner-process-card">
                        <h1>Measure</h1>
                        <p>Once we've discussed your flooring vision, we'll schedule your measure with you to further discuss the specifics of your project.</p>
                    </div>
                </div>
                <div data-aos="flip-left" className="process-card-left">
                    <div className="inner-process-card">
                        <h1>Schedule</h1>
                        <p>After understanding your wants and needs we'll schedule your installation.</p>
                    </div>
                </div>
                <div data-aos="flip-right" className="process-card-right">
                    <div className="inner-process-card">
                        <h1>Install</h1>
                        <p>Sit back and relax while we transform your home by installing the floor of your dreams.</p>
                    </div>
                </div>
                <div data-aos="flip-left" className="process-card-left">
                    <div className="inner-process-card"> 
                        <h1>Maintain</h1>
                        <p>We guarantee our work is completed with the utmost professionalism and expertise so we are always there for you if any issues arise after the completion of your installation.</p>
                    </div>
                </div>
            </div>
    </>
    )
}

export default Process;