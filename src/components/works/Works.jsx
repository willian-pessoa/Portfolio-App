import "./works.scss"
import {dataWorks} from "../../dataWorks.js"
import { useState } from "react"

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (way) =>{
        if (way === "left"){
            setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : dataWorks.length - 1)
        } else {
            setCurrentSlide(currentSlide < dataWorks.length - 1 ? currentSlide + 1 : 0)
        }

    }

    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {dataWorks.map((item) => (

                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={item.icon} alt="" />
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                                <a href={item.url} target="_blank"><span>Project</span></a>
                            </div>
                        </div>
                        <div className="right">
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                </div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    )
}
