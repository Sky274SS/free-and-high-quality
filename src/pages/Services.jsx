import React, {useState,useEffect} from 'react'
import './servises.css';
import config from './services_config.json'


const Services = () => {
    const [serviceList,setServiceList]=useState(0)
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
    // const [hidden, setHidden] = useState(false)
    const defaultServices={
        id:'',
        img:''
    }

    const [currentService,setCurrentService]=useState(defaultServices)
    useEffect(() => {
        fetch(`https://otdelka-krd.ru/api/services/`)
            .then((response) => response.json())
            .then((serviceList) => {
                setServiceList(serviceList);
                setCurrentService(serviceList[currentServiceIndex])
            })
            .catch((e) => {
                console.error(e);
                setServiceList(null);
            });
    },[currentServiceIndex]);


    const handleChangeImage = () => {
        setCurrentServiceIndex(currentServiceIndex => (currentServiceIndex + 1) % serviceList.length)
        // setHidden(true)
        // setTimeout(() => {
        //     setHidden(false)
        // }, 1)
    }

    return (
        <div className='servises'>
            <div className='main-slide'>
                <img
                    // style={{display: hidden ? 'none' : 'block'}}
                    src={currentService.img}
                    alt={'service_image'}
                    onClick={handleChangeImage}
                />
            </div>
            <h1 className='services-h1'>Ремонт квартир под ключ от эконом до элитного</h1>
        </div>
    )
}

export default Services