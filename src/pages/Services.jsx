import React, {useState} from 'react'
import './servises.css';
import config from './services_config.json'


const Services = () => {
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
    const [hidden, setHidden] = useState(false)
    const currentService = config[currentServiceIndex]

    const handleChangeImage = () => {
        setCurrentServiceIndex(currentServiceIndex => (currentServiceIndex + 1) % config.length)
        setHidden(true)
        setTimeout(() => {
            setHidden(false)
        }, 1)
    }

    return (
        <div className='servises'>
            <div className="sidebar">
                <div>
                    {currentService.subServices.map((subService, index) => <h1>{index + 1}. {subService}</h1>)}
                    <button className='button' onClick={handleChangeImage}>ДАЛЕЕ</button>
                </div>
            </div>
            <div className='main-slide'>
                <img
                    style={{display: hidden ? 'none' : 'block'}}
                    src={currentService.img}
                    alt={'service_image'}
                />
            </div>
        </div>
    )
}

export default Services