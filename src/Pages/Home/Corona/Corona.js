import React from 'react';
import './Corona.css';
import corona from '../../../images/corona.jpg'

const Corona = () => {
    return (
        <div>
            <div className="pt-5">
                <h2>Coronavirus disease (COVID-19) information centre</h2>
                <p>Latest updates on COVID-19 and tips to protect you and your family</p>
            </div>
            <div>
                <img className="w-100 py-5" src={corona} alt="" />
            </div>
            <div className="w-75 mx-auto ">
                <p>Everyone is talking about coronavirus disease (COVID-19), and everywhere you look there’s information on the virus and how to protect yourself from it. Knowing the facts is key to being properly prepared and protecting yourself and your loved ones.

                    Be sure to get your facts from reliable sources, like UNICEF and the World Health Organization. UNICEF is working with global health experts around the clock to provide accurate information. Information you can trust is grounded in the latest scientific evidence. We’ll continue to provide the latest updates, explainers for parents and teachers, and resources for media as new information becomes available, so check back to stay informed of the best ways to protect yourself and your family.</p>
            </div>
        </div>
    );
};

export default Corona;