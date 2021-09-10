import React,{useState,useEffect} from 'react'
import './stocks.css'
// import config from './stocks_config.json'

const Stocks = () => {

    const defaultStocksElements =
        [{
            id: "",
            name: "",
            info: "",
            images: [],
        }]
    const [stocksElements,setStocksElements]=useState(defaultStocksElements)

    useEffect(()=>{
        fetch(`http://84.38.183.60:8000/api/stocks/`)
            .then((response) => response.json())
            .then((stocksElements) => {
                setStocksElements(stocksElements);
            })
            .catch((e)=>{
                console.error(e);
                setStocksElements(null);
            })
    })


    // const stocksElements = config
    return (
        <div className='stocks'>
            <div className='stocks-sold'>Акции и спецпредложения</div>
            <div className="stocks-sold-info">
                {stocksElements.map((element, index) => {
                    return (
                        <div>
                            <img src={element.image} alt="stock_image" className="sold-image"/>
                            <p className="sold-p">{element.name}</p>
                            <p className="sold-text">{element.info}</p>
                        </div>
                    )
                })}
            </div>
        </div>)
}

export default Stocks