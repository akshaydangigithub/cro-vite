import React from 'react'
import hand from "../../assets/hand.png"
import responsibility from "../../assets/responsibility.png"
import setting from "../../assets/setting.png"
import document from "../../assets/document.png"

const items = [
    {
        title: "Consumer rights & responsibilities",
        image: hand,
        bgColorClass: "",
    },
    {
        title: "Consumer education, Consumer survey",
        image: document,
        bgColorClass: "bg-secondary",
    },
    {
        title: "Awareness for standardisation of products & services",
        image: responsibility,
        bgColorClass: "bg-info",
    },
    {
        title: "Representation in the various department and forum",
        image: setting,
        bgColorClass: "bg-dark",
    },
];

const WorkingFor = () => {
    return (
        <>
            <div className="bg-light py-5 mt-5">
                <div className="container">
                    <div className="row text-center">
                        <h1 className="mb-5 fs-4">WE ARE WORKING FOR</h1>
                        {items.map((item, index) => (
                            <div key={index} className="col-md-3 mb-4">
                                <div className={`image m-auto mb-3 p-3 ${item.bgColorClass}`}>
                                    <img src={item.image} alt="alt" />
                                </div>
                                <h3 className="fs-5 pe-3 ps-3">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default WorkingFor