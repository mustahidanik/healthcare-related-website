import React, { useEffect, useState } from 'react';
import "./ServiceDetails.css";

const ServiceDetails = () => {

    return (
        <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 ">
            <div className="col card card-resize g-4">
                <img src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1701/wavebreakmediamicro170100405/69181350-patient-undergoing-ct-scan-test-in-the-hospital.jpg" alt="" />
            </div>
            <div className="col card card-resize g-4">
                <img src="https://urgentmednetwork.com/wp-content/uploads/2019/07/Three-Things-an-EKG-Can-Tell.featured.png" alt="" />
            </div>
            <div className="col card card-resize g-4">
                <img src="https://www.physio-pedia.com/images/f/f5/211.jpg" alt="" />
            </div>
            <div className="col card card-resize g-4">
                <img src="https://images.medicinenet.com/images/article/main_image/liver-biopsy.jpg" alt="" />
            </div>
            <div className="col card card-resize g-4">
                <img src="https://images.squarespace-cdn.com/content/v1/55388599e4b098ec0027a49d/1437166421135-OTM8AGTP6SIBGAO8C4QK/4046678_4x3.jpg" alt="" />
            </div>
            <div className="col card card-resize g-4">
                <img src="https://previews.123rf.com/images/leaf/leaf1301/leaf130100221/17213637-young-male-patient-going-through-x-ray-test.jpg" alt="" />
            </div>
            <div className="col card card-resize g-4">
                <img src="http://www.dishaeye.org/blog/wp-content/uploads/2019/05/eye-test-1024x683.jpg" alt="" />
            </div>
            <div className="col card card-resize g-4">
                <img src="https://88ebd614d6d385cab1fa-690979800f2b6f086ae14b7920465b0b.ssl.cf2.rackcdn.com/migrated/sites/doctorshearingservices.net/assets/hearing-exam-2.jpg" alt="" />
            </div>
        </div>
    );
};

export default ServiceDetails;