import React, { useEffect, useState } from 'react';
import Special from '../Special/Special';

const Specialist = () => {
    const [specialist, setspecialist] = useState([])
    useEffect(() => {
        fetch("specialist.json")
            .then(res => res.json())
            .then(data => setspecialist(data));
    }, [])
    return (
        <div className="mt-5">
            <h2><span>Our Specialist</span></h2>
            <div className="">
                <div className="row row-cols-md-4 row-cols-sm-2 row-cols-1 g-3 services mb-5">
                    {

                        specialist.map(special => <Special
                            key={special.id}
                            special={special}
                        ></Special>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Specialist;