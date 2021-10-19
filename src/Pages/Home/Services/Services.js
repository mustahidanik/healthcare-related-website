import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch("diagnostic.json")
            .then(res => res.json())
            .then(data => setservices(data));
    }, [])

    return (
        <div className="mt-5">
            <h2><span>Our Services</span></h2>
            <div className="">
                <div className="row row-cols-md-4 row-cols-sm-2 row-cols-1 g-3 services mb-5">
                    {

                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;