import React, {useEffect, useState} from 'react'
import './AboutUs.css';
import config from './about.json'

const AboutUs = () => {


    const defaultAboutElements =
        [{
            action: [],
            advantage: [],
        }]
    const defaultActionElements =
        [{
            image: "",
            title: "",
        }]
    const defaultAdvantageElements =
        ['']

    const [aboutElements, setAboutElements] = useState(defaultAboutElements)
    const [action, setAction] = useState(defaultActionElements)
    const [advantage, setAdvantage] = useState(defaultAdvantageElements)

    useEffect(() => {
        fetch(`http://84.38.183.60:8000/api/about/`)
            .then((response) => response.json())
            .then((aboutElements) => {
                setAboutElements(aboutElements);
                setAction(aboutElements[0].action)
                setAdvantage(aboutElements[0].advantage)
            })
            .catch((e) => {
                console.error(e);
                setAboutElements(null);
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
                        <div key={index}>
                            <h1>{element}</h1>
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
