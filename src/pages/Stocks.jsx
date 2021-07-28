import React from 'react'
import './stocks.css'

const Stocks = () => {
    return (
        <div className='stocks'>
            <div className='about-sold'>Акции и спецпредложения</div>
            <div className="about-sold-info">
                <div>
                    <div className="sold-image newlyweds"/>
                    <p className="sold-p">Молодоженам</p>
                </div>
                <div>
                    <div className="sold-image newcomers"/>
                    <p className="sold-p">Новоселам</p>
                </div>
                <div>
                    <div className="sold-image pensioners"/>
                    <p className="sold-p">Пенсионерам</p>
                </div>
            </div>
        </div>)
}

export default Stocks