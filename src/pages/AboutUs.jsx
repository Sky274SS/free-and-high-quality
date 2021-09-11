import React, {useEffect, useState} from 'react'
import './AboutUs.css';
import config from './about.json'

const AboutUs = () => {


    const defaultActionElements =
        [{
            image: "",
            title: "",
        }]
    const defaultAdvantageElements =
        [{
            img: "",
            title: "",
            description: "",
        }]

    const [action, setAction] = useState(defaultActionElements)
    const [advantage, setAdvantage] = useState(defaultAdvantageElements)
    useEffect(() => {
        fetch('http://localhost:8000/api/action/')
            .then((response) => response.json())
            .then((actionElements) => {
                setAction(actionElements)
            })
            .catch((e) => {
                console.error(e);
                setAction(null);
            })
    }, [])
    useEffect(() => {
        fetch('https://otdelka-krd.ru/api/advantage/')
            .then((response) => response.json())
            .then((advantageElements) => {
                setAdvantage(advantageElements)
            })
            .catch((e) => {
                console.error(e);
                setAdvantage(null);
            })
    }, [])

    // console.log(aboutElements[0].action[0].image)
    return (
        <div className='about-container'>
            <div className='about'>
                О КОМПАНИИ
            </div>
            <div className="about-company">РЕМОНТ КВАРТИР ПОД КЛЮЧ ОТ ЭКОНОМ ДО ЭЛИТНЫХ</div>

            <div className='about-header'>наши преимущества</div>
            <div className="about-advantage">
                {advantage.map((element, index) => {
                    return (
                        <div key={index} className="about-advantage-container">
                            <div className="about-advantage-info">
                                <h1>{element.title}</h1>
                                <p>{element.description}</p>
                            </div>
                            <img src={element.img} alt="img" className="about-advantage-image"/>
                        </div>
                    )
                })}
            </div>

            <div className='about-header'>Как проходит ремонт?</div>
            <div className="about-repair">
                {action.map((element, index) => {
                    return (
                        <div className="about_action" key={index}>
                            <img src={element.image} alt="action_image"/>
                            <h1>{element.title}</h1>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default AboutUs
