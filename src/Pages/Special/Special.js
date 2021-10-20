import React from 'react';

const Special = ({ special }) => {
    const { name, img, specialist } = special;
    return (
        <div className="col">
            <div className="card special-cart-container">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="p-2">
                    <h2>{name}</h2>
                    <h4>Specialist in: {specialist}</h4>

                </div>

            </div>
        </div>
    );
};

export default Special;