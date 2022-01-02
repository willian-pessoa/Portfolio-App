import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {useState, useEffect} from "react";
import {
    featuredPortfolio,
    webPortfolio,
    jsPortfolio,
    dataPortfolio,
    backendPortfolio
} from "../../data.js"

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([])

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web app",
            title: "Web App"
        },
        {
            id: "java alg",
            title: "JavaScript"
        },
        {
            id: "data",
            title: "D3.js"
        },
        {
            id: "back end",
            title: "Back End Dev."
        },
    ]

    useEffect(() => {

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web app":
                setData(webPortfolio);
                break;
            case "java alg":
                setData(jsPortfolio);
                break;
            case "data":
                setData(dataPortfolio);
                break;
            case "back end":
                setData(backendPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }

    }, [selected])

    return (
        <div className='portfolio' id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item)=> (
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">

                {data.map((item)=>(
                <div className="item">
                    <img src={item.img} alt={item.title}/>
                    <h3><a href={item.url} target="_blank">{item.title}</a></h3>
                </div>
                ))}
            </div>
        </div>
    )
}
