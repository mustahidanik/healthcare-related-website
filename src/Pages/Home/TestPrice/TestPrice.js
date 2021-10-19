import React from 'react';

const TestPrice = () => {
    return (
        <div>
            <h2><span>Test Prices</span></h2>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col" className="table-dark">Serial No</th>
                        <th scope="col" className="table-dark">Test Name</th>
                        <th scope="col" className="table-dark">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="table-dark">1</th>
                        <td className="table-dark">CT scan</td>
                        <td className="table-dark">15000</td>
                    </tr>
                    <tr>
                        <th scope="row" className="table-dark">2</th>
                        <td className="table-dark">Electrocardiogram (ECG)</td>
                        <td className="table-dark">5000</td>
                    </tr>
                    <tr>
                        <th scope="row" className="table-dark">3</th>
                        <td className="table-dark">MRI scan</td>
                        <td className="table-dark">10000</td>
                    </tr>
                    <tr>
                        <th scope="row" className="table-dark">4</th>
                        <td className="table-dark">Biopsy</td>
                        <td className="table-dark">6000</td>
                    </tr>
                    <tr>
                        <th scope="row" className="table-dark">5</th>
                        <td className="table-dark">Ultrasound</td>
                        <td className="table-dark">2000</td>
                    </tr>
                    <tr>
                        <th scope="row" className="table-dark">6</th>
                        <td className="table-dark">X-rays</td>
                        <td className="table-dark">1000</td>
                    </tr>
                    <tr>
                        <th scope="row" className="table-dark">7</th>
                        <td className="table-dark">Eye tests</td>
                        <td className="table-dark">500</td>
                    </tr>
                    <tr>
                        <th scope="row" className="table-dark">8</th>
                        <td className="table-dark">Hearing test</td>
                        <td className="table-dark">1500</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TestPrice;