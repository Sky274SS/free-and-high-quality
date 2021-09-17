import React, {useState,useEffect} from 'react'
import './servises.css';
import config from './services_config.json'


const Services = () => {
    const defaultServices=[{
        id:'',
        img:''
    }]
    const [serviceList,setServiceList]=useState(defaultServices)


    useEffect(() => {
        fetch(`https://otdelka-krd.ru/api/services/`)
            .then((response) => response.json())
            .then((serviceList) => {
                setServiceList(serviceList);
            })
            .catch((e) => {
                console.error(e);
                setServiceList(null);
            });
    },[]);

    return (
        <div className='services'>
            <div className="services_title">Ремонт квартир под ключ от эконом до элитных</div>
            <div className="service_block">
            {serviceList.map((element) => {
                    return (

                            <img key={element.id}  src={element.img} alt="stock_image" className="service_img"/>

                    )
                })}
                        </div>
        </div>
    )
}

export default Services