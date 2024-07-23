import React, { useState, useEffect, useRef } from 'react';
import './HomePage.css';
import Footer from './Footer';

const HomePage = () => {
    const [navActive, setNavActive] = useState(false);
    const arrowContainerRef = useRef(null);
    const sectionsRef = useRef([]);
    const slideIndexRef = useRef(0);

    useEffect(() => {
        const hamburgerClickHandler = () => {
            setNavActive(!navActive);
            document.querySelector('.hamburger')?.classList.toggle('active');
        };

        const roundClickHandler = (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.querySelector('.arrow')?.classList.toggle('bounceAlpha');
        };

        const showSlides = () => {
            const slides = document.getElementsByClassName('slide');
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }

            slideIndexRef.current++;
            if (slideIndexRef.current > slides.length) {
                slideIndexRef.current = 1;
            }

            slides[slideIndexRef.current - 1].style.display = 'block';
            setTimeout(showSlides, 3000);
        };

        const arrowContainerClickHandler = () => {
            const currentSectionIndex = getCurrentSectionIndex();
            const nextSectionIndex = currentSectionIndex < sectionsRef.current.length - 1 ? currentSectionIndex + 1 : 0;
            const nextSection = sectionsRef.current[nextSectionIndex];

            window.scrollTo({
                top: nextSection.offsetTop,
                behavior: 'smooth',
            });

            arrowContainerRef.current?.classList.add('hide');
        };

        const getCurrentSectionIndex = () => {
            let currentIndex = 0;
            const viewportHeight = window.innerHeight;
            const offset = viewportHeight * 0.5;

            for (let i = 0; i < sectionsRef.current.length; i++) {
                if (sectionsRef.current[i].offsetTop - offset <= window.scrollY) {
                    currentIndex = i;
                }
            }

            return currentIndex;
        };

        const handleScroll = () => {
            if (window.scrollY !== 0) {
                arrowContainerRef.current?.classList.add('hide');
            } else {
                arrowContainerRef.current?.classList.remove('hide');
            }
        };

        const hamburgerElement = document.querySelector('.hamburger');
        const roundElement = document.querySelector('.round');

        if (arrowContainerRef.current) {
            arrowContainerRef.current.addEventListener('click', arrowContainerClickHandler);
        }

        hamburgerElement?.addEventListener('click', hamburgerClickHandler);
        roundElement?.addEventListener('click', roundClickHandler);
        window.addEventListener('scroll', handleScroll);

        showSlides(); // Initial call to start slideshow

        // Cleanup function
        return () => {
            hamburgerElement?.removeEventListener('click', hamburgerClickHandler);
            roundElement?.removeEventListener('click', roundClickHandler);
            arrowContainerRef.current?.removeEventListener('click', arrowContainerClickHandler);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navActive]);

    return (
        <>
            <div className="wrapper">
                <div className="first-part">
                    <div className="homepage-content">
                        <div className="semicircle"></div>
                        <div className="slideshow-container">
                            <div className="slide fade">
                                <img src="src/components/Images/hum-sensor.png" alt="Image 1" className="image" />
                                <div className="description">RTD PT-100</div>
                            </div>
                            <div className="slide fade">
                                <img src="src/components/Images/itm2.png" alt="Image 2" className="image" />
                                <div className="description">Thermocouples</div>
                            </div>
                            <div className="slide fade">
                                <img src="src/components/Images/itm1.png" alt="Image 3" className="image" />
                                <div className="description">RTD PT-100-TRANSITION TYPE</div>
                            </div>
                            <div className="slide fade">
                                <img src="src/components/Images/dl.png" alt="Image 4" className="image" />
                                <div className="description">DATALOGGER</div>
                            </div>
                        </div>
                        <div className="wrapper2">
                            <div className="typing-demo">
                                Engineers Designed Products You can Trust...
                            </div>
                        </div>
                        <div className="arrow-container" ref={arrowContainerRef}>
                            <div className="arrow"></div>
                        </div>
                    </div>
                </div>

                <div className="subsequent-components" ref={el => sectionsRef.current[0] = el}>
                    <div className="prime-text">
                        <h1>Prime Electronic Solutions</h1>
                    </div>

                    <div className="box">
                        {/* Card components */}
                        <div className="container-h">
                            <div className="card">
                                <div className="imgBx">
                                    <img src="src/components/Images/TrmoCpl.png" alt="Thermocouple" />
                                </div>
                                <div className="contentBx">
                                    <h2>Thermocouple</h2>
                                    <div className="color">
                                        <p>We offer J-type, K-type, R-type, S-type, and N-type thermocouples. Our thermocouples can be designed in wire type and head type assemblies, including flameproof heads, suitable for temperatures ranging from 0°C to 1600°C.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-h">
                            <div className="card">
                                <div className="imgBx">
                                    <img style={{width: '273px'}} src="src/components/Images/RTD-main.png" alt="Thermocouple" />
                                </div>
                                <div className="contentBx">
                                    <h2>RTD</h2>
                                    <div className="color">
                                        <p>Resistance Temperature Detector (RTD) sensors are available in Pt-100 and Pt-1000 elements. We can design RTD sensors for a range of -100°C to 600°C, available in both simplex and duplex assemblies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-h">
                            <div className="card">
                                <div className="imgBx">
                                    <img style={{width: '253px', transform: 'translate(-50%, -50%) rotate(2deg)', left: '50%'}} src="src/components/Images/thermowell-1.png" alt="Thermocouple" />
                                </div>
                                <div className="contentBx">
                                    <h2>Thermowells</h2>
                                    <div className="color">
                                        <p> Thermowells, also known as protection tubes, are essential for safeguarding the sensors. We offer both fabricated and bar stock thermowells, available in a variety of materials SS-(310/316) Inconel-600, Ceramic tube(610 & 710)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="companies">
                        <div className="img1">
                            <img src="src/components/Images/logopoint.png" alt="Company" />
                        </div>
                        <div className="img1">
                            <img src="src/components/Images/logopoint.png" alt="Company" />
                        </div>
                        <div className="img1">
                            <img src="src/components/Images/logopoint.png" alt="Company" />
                        </div>
                        <div className="img1">
                            <img src="src/components/Images/logopoint.png" alt="Company" />
                        </div>
                        {/* Repeat for other images */}
                    </div>

                    <div className="two-components-container">
                        <div className="two-components">
                            <div className="left">
                                <img src="src/components/Images/SILO.jpg" alt="Silo" />
                            </div>
                            <div className="right">
                                <div className="heading-right">
                                    <h2>Silo-Grains Temperature <br />Monitoring System</h2>
                                </div>
                                <div className="paragraph-right">
                                    <p>Our Silo-Grains Temperature Monitoring System is designed to ensure optimal storage conditions for your grain. This system continuously monitors the temperature inside your silos, helping to prevent spoilage and maintain grain quality. We also design multipoint temperature sensors specifically for silos, providing accurate and reliable readings so you can promptly address any temperature variations in PC software, ensuring your grains remain safe and in prime condition.</p>
                                </div>
                                <div className="btn-pip">
                                    <button>View More</button>
                                </div>
                            </div>
                        </div>

                        <div className="two-components2">
                            <div className="lefty">
                                <div className="heading-lefty">
                                    <h2>IoT Cloud Based <br />Automation & Datalogging</h2>
                                </div>
                                <div className="paragraph-lefty">
                                    <p>Introducing our IoT Cloud-Based Automation & Datalogging solution, designed to streamline your operations with cutting-edge technology. Our product enables seamless integration of IoT devices, providing real-time data collection and automated control.</p>
                                </div>
                                <div className="btn-pip-lefty">
                                    <button>View More</button>
                                </div>
                            </div>
                            <div className="righty">
                                <img src="src/components/Images/IOT.jpg" alt="IoT" />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default HomePage;