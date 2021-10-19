import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <div className=" pt-2 footer-container">

                <div className="row w-75 p-3 mx-auto footer-detaill">
                    <div className=" pt-3 ps-3 pe-3  col-lg-5 col-md-5 col-12 col-sm-12">
                        <h3 className="">Admiric Health Care</h3>
                        <p><small className="visits"> Admiric premier multi-modality diagnostic imaging and laboratory center providing patients and physicians with superb and impeccable diagnostic services – all in a unique atmosphere that emphasizes patient comfort.</small></p>

                    </div>
                    <div className="  p-3 col-lg-3 col-md-3 col-12 col-sm-12">
                        <h3>CORPORATE OFFICE</h3>
                        <h5>Admiric Health Care</h5>
                        <p>House- 1 & 3 , Road-2, Block-B, UTTARA-10, Dhaka-1216</p>
                        <p>Hotline : 02-9013802, 02-9013804, 01900445812, 01900445811.</p>
                    </div>

                    <div className=" p-3 col-lg-4 col-md-4 col-12 col-sm-12">
                        <h3>OTHER BRANCHES</h3>
                        <p>Branch 2 : 21 Darus Salam Road, Mirpur-1, Dhaka.
                            Hotline: 02- 9016682, 01915 448500, 01769 969858.</p>
                        <p>Branch 3 : Hospital Gait, Ghatail, Tangail
                            Hotline: 01769 969869, 01769 969845</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;