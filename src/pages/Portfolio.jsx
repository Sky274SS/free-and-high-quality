import React, {useState,useEffect} from 'react'
import './portfolio.css';
import config from './portfolio_config.json'
import Carousel from "../components/Сarousel";

const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false)

    // const defaultPortfolioElements =
    //    [{
    //        id: "",
    //        name: "",
    //        cover: "",
    //        images: [],
    //    }]
    //
    // const [portfolioElements,setPortfolioElements]=useState(defaultPortfolioElements)
    // useEffect(()=>{
    //     fetch(`portfolio_config.json`)
    //         .then((response) => response.json())
    //         .then((portfolioElements) => {
    //             setPortfolioElements(portfolioElements);
    //         })
    //         .catch((e)=>{
    //             console.error(e);
    //             setPortfolioElements(null);
    //         })
    // })
    const portfolioElements=config

    const isOpenChange = ()=>{
        setIsOpen(!isOpen)
    }
    const [currentImage,setCurrentImage]=useState(0)
    return (
        <div className='area'>
            {portfolioElements.map((element,index) => {
                return (
                    <div key={index}>
                        <img src={element.cover} alt="portfolio_image" className='img1'
                        onClick={()=>{
                            isOpenChange()
                            setCurrentImage(index)
                        }}/>
                        <h1 className='h1'>{element.name}</h1>
                    </div>
                )
            })}
            <Carousel images={portfolioElements[currentImage].images} isOpen={isOpen} isOpenChange={isOpenChange}/>
        </div>
    )
}

export default Portfolio