import React, {useState} from 'react'
import './portfolio.css';
import config from './portfolio_config.json'
import Carousel from "../components/Сarousel";

const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false)
    const portfolioElements = config
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