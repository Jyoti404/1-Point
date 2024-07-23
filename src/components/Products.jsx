import React, { useEffect, useState } from 'react';
import './ProductPage.css'; // Import your CSS file here
import { TweenMax, Power3, Expo } from 'gsap';

const Products = () => {
    const [category, setCategory] = useState('data-loggers');
    const [productsData, setProductsData] = useState([]);
    const [displayHeader, setDisplayHeader] = useState(false);

    const initialProductsData = {
        'rtd-sensor': [
                { name: 'Transition Type RTD', price: 30, img: 'src/components/Images/IMG_20240227_010648.png' },
                { name: 'Head Type RTD W/P', price: 40, img: 'src/components/Images/datalogger.png' },
                { name: 'Flameproof Head Type RTD', price: 40, img: 'src/components/Images/datalogger.png' },
                { name: 'Surface Type RTD', price: 40, img: 'src/components/Images/datalogger.png' },
                { name: 'Slot Type RTD', price: 40, img: 'src/components/Images/datalogger.png' }

            ],
        'thermo-couples': [
                { name: 'J Type Thermocouple', price: 25, img: 'src/components/Images/hum-sensor.png' },
                { name: 'K Type Thermocouple', price: 25, img: 'src/components/Images/hum-sensor.png' },
                { name: 'R Type Thermocouple', price: 25, img: 'src/components/Images/hum-sensor.png' },
                { name: 'S Type Thermocouple', price: 25, img: 'src/components/Images/hum-sensor.png' },
                { name: 'N Type Thermocouple', price: 35, img: 'src/components/Images/IMG20211230185627.png' }

            ]
            ,'thermowell': [
                { name: 'Febricated Thermowell', price: 20, img: 'IMG20211230185627.png' },
                { name: 'Bar Stoke Thermowell', price: 20, img: 'IMG20211230185627.png' },
                { name: 'Flange Thermowell', price: 20, img: 'IMG20211230185627.png' },
                { name: 'Threaded Thermowell', price: 20, img: 'IMG20211230185627.png' },
                { name: 'Sanitary Thermowell', price: 50, img: 'IMG_20240227_010648.png' }

            ],
      'indicators-controller': [
                { name: 'Temperature Indicator', price: 45, img: 'IMG_20240227_010648.png' },
                { name: 'Universal Indicator', price: 55, img: 'hum-sensor.png' },
                { name: 'Universal PID Controller', price: 55, img: 'hum-sensor.png' },
                { name: 'Temperature / Humidity PID Controller', price: 55, img: 'hum-sensor.png' },
                { name: 'Temperature PID Controller', price: 65, img: 'TrmoCpl.png' }

            ],
      'scanner-datalogger': [
                { name: 'Temperature Scanner', price: 45, img: 'IMG_20240227_010648.png' },
                { name: 'Universal Scanner', price: 55, img: 'hum-sensor.png' },
                { name: 'Universal Datalogger', price: 65, img: 'TrmoCpl.png' },
                { name: 'Expandable Datalogger', price: 65, img: 'TrmoCpl.png' },
                { name: 'Touch Screen Datalogger', price: 65, img: 'TrmoCpl.png' }

            ],
      'humidity-sensor': [
                { name: 'RH-50', price: 45, img: 'IMG_20240227_010648.png' },
                { name: 'RH-50', price: 55, img: 'hum-sensor.png' },
                { name: 'THS Series 100deg C', price: 65, img: 'TrmoCpl.png' },
                { name: 'THS Series 100deg C', price: 65, img: 'TrmoCpl.png' }

            ],
     'spare-parts': [
                { name: 'SSR', price: 45, img: 'IMG_20240227_010648.png' },
                { name: 'Heatsink', price: 55, img: 'hum-sensor.png' },
                { name: 'Thermoistor', price: 65, img: 'TrmoCpl.png' },
                { name: 'Proximity', price: 65, img: 'TrmoCpl.png' },
                { name: 'Float Switch', price: 65, img: 'TrmoCpl.png' },
                { name: 'Level Sensor', price: 65, img: 'TrmoCpl.png' },
                { name: 'Cables and Wires', price: 65, img: 'TrmoCpl.png' }

            ]
      
  };


    useEffect(() => {
        TweenMax.from(".logo", 1, {
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        });

        TweenMax.staggerFrom(".nav-links-desktop ul li", 1, {
            opacity: 0,
            x: -20,
            ease: Power3.easeInOut
        }, 0.08);

        setProductsData(initialProductsData);
    }, []);

    useEffect(() => {
        showCategory(category);
    }, [category]);

    const showCategory = (category) => {
        setCategory(category);
    };

    const hide = () => {
        document.querySelector('.card-hidden').style.display = 'none';
    };

    const show = () => {
        document.querySelector('.card-hidden').style.display = 'flex';
    };

    const add = (content) => {
        setDisplayHeader(true);
        document.getElementById('target-h1').textContent = content;
    };

    return (
        <div>
            <div className="mid">
                <div className="head" style={{ display: displayHeader ? 'flex' : 'none' }}>
                    <h1 id="target-h1"></h1>
                </div>
            </div>
            <section className="container">
                <div className="product-categories">
                    <div className="category-list">
                        <h3 className="product-heading">Product Categories</h3>
                        <hr />
                        <ul>
                            {Object.keys(initialProductsData).map(key => (
                                <li key={key} className="open" onClick={() => { add(key); hide(); showCategory(key); }}>{key.replace('-', ' ')}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="products">
                        <div className="card-hidden">
                            <div className="container-second">
                                <div className="card-3d">
                                    <div className="logo-3d">
                                        <span className="circle circle2"></span>
                                        <span className="circle circle3"></span>
                                        <span className="circle circle4"></span>
                                        <span className="circle circle5">
                                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="glass">
                                        <div className="test">
                                            <div className="test2">
                                                <img src="src\components\Images\itm2.png" alt="" />
                                            </div>
                                            <div className="test3">
                                                <h3><i onClick={() => { add('thermo-couples'); hide(); showCategory('thermo-couples'); }}>RTD Sensors</i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-second">
                                <div className="card-3d">
                                    <div className="logo-3d">
                                        <span className="circle circle2"></span>
                                        <span className="circle circle3"></span>
                                        <span className="circle circle4"></span>
                                        <span className="circle circle5">
                                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="glass">
                                        <div className="test">
                                            <div className="test2">
                                                <img src="src\components\Images\rtd.png" alt="" />
                                            </div>
                                            <div className="test3">
                                                <h3><i onClick={() => { add('thermo-couples'); hide(); showCategory('thermo-couples'); }}>Thermocouples</i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-second">
                                <div className="card-3d">
                                    <div className="logo-3d">
                                        <span className="circle circle2"></span>
                                        <span className="circle circle3"></span>
                                        <span className="circle circle4"></span>
                                        <span className="circle circle5">
                                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="glass">
                                        <div className="test">
                                            <div className="test2">
                                                <img src="src\components\Images\thermowell.png" alt="" />
                                            </div>
                                            <div className="test3">
                                                <h3><i onClick={() => { add('thermo-couples'); hide(); showCategory('thermo-couples'); }}>Thermowells</i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-second">
                                <div className="card-3d">
                                    <div className="logo-3d">
                                        <span className="circle circle2"></span>
                                        <span className="circle circle3"></span>
                                        <span className="circle circle4"></span>
                                        <span className="circle circle5">
                                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="glass">
                                        <div className="test">
                                            <div className="test2">
                                                <img src="src\components\Images\indecator.png" alt="" />
                                            </div>

                                            <div className="test3">
                                                <h3><i onClick={() => { add('thermo-couples'); hide(); showCategory('thermo-couples'); }}>Indicators & Scanners</i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-second">
                                <div className="card-3d">
                                    <div className="logo-3d">
                                        <span className="circle circle2"></span>
                                        <span className="circle circle3"></span>
                                        <span className="circle circle4"></span>
                                        <span className="circle circle5">
                                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="glass">
                                        <div className="test">
                                            <div className="test2">
                                                <img src="src\components\Images\pid.png" alt="" />
                                            </div>
                                            <div className="test3">
                                                <h3><i onClick={() => { add('thermo-couples'); hide(); showCategory('pid-controller'); }}>PID Controllers</i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-second">
                                <div className="card-3d">
                                    <div className="logo-3d">
                                        <span className="circle circle2"></span>
                                        <span className="circle circle3"></span>
                                        <span className="circle circle4"></span>
                                        <span className="circle circle5">
                                            <i className="fa fa-thumb-tack" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div className="glass">
                                        <div className="test">
                                            <div className="test2">
                                                <img src="src\components\Images\itm2.png" alt="" />
                                            </div>
                                            <div className="test3">
                                                <h3><i onClick={() => { add('thermo-couples'); hide(); showCategory('thermo-couples'); }}>RTD Sensors</i></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Add more similar containers for other cards... */}
                        </div>
                        <div id="product-list">
                            {productsData[category]?.map((product, index) => (
                                <div key={index} className="product-item" data-price={product.price} data-name={product.name}>
                                    <img src={product.img} alt={product.name} />
                                    <div className="details">
                                        <h3>{product.name}</h3>
                                    </div>
                                    <div className="button-container">
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
