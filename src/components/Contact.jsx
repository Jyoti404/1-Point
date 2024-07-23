import React, { useState } from 'react';
import './Contact.css'; // Assuming you have the necessary CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        address: '',
        requirements: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return regex.test(email);
    };

    const validatePhone = (phone) => {
        const regex = /^[0-9]{10}$/;
        return regex.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { name, email, phone, requirements } = formData;
    
        if (!name || !email || !phone || !requirements) {
            alert('Please fill in all the required fields.');
            return;
        }
    
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
    
        if (!validatePhone(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5175/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (response.ok) {
                alert('Form submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    address: '',
                    requirements: ''
                });
            } else {
                alert('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        }
    };
    
    return (
        <div>
            <div className="contacter">
                {/* <div className="lefter">
                    <div className="naming">
                        <h2>Point One Control</h2>
                        <h3>The Accuracy Expert</h3>
                    </div>
                    <div className="abouter">
                        <div className="adder">
                            <h2>Address</h2>
                            <p>
                                Reg. billing add.-H.NO.-T1, Tekhnad Village,<br />
                                Near DLF Prime Tower, Okhla Phase, Delhi 110020<br />
                                Mob No : +91-8920266426, +91-8447354268<br />
                                Email: point1control@gmail.com
                            </p>
                        </div>
                        <div className="phoneer">
                            <h3>+91 9051463560</h3>
                            <h3>+91 9219998403</h3>
                        </div>
                    </div>
                </div> */}
                <div className="righter">
                    <div className="containerer">
                        <h1>Contact Us</h1>
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-grouper">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="inputer"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-grouper">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="inputer"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-grouper">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    className="inputer"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-grouper">
                                <label htmlFor="company">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="inputer"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-grouper">
                                <label htmlFor="address">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="inputer"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-grouper">
                                <label htmlFor="requirements">Requirements</label>
                                <textarea
                                    id="requirements"
                                    name="requirements"
                                    rows="4"
                                    className="inputer"
                                    value={formData.requirements}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="submiter-btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="support">
                <h1>Support</h1>
            </div>
            <div className="contactBx">
                <div className="sales">
                    <h2>Sales</h2>
                    <img src="src\components\Images\2818607.png" alt="" />
                    <h4>+91 9051463560</h4>
                    <h4>singh.ujjwalkumar1212@gmail.com</h4>
                </div>
                <div className="services">
                    <h2>Services</h2>
                    <div>
                        <img src="src\components\Images\4230745.png" alt="" />
                    </div>
                    <div>
                        <h4>+91 9051463560</h4>
                    </div>
                    <h4>singh.ujjwalkumar1212@gmail.com</h4>
                </div>
            </div>
            <div className="map-box">
                <div className="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.8010441855495!2d77.28200288104985!3d28.51946631406019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce148a74cd1ef%3A0x525fbd1272878324!2sPOINT1%20CONTROL%20INSTRUMENTS!5e0!3m2!1sen!2sin!4v1694690087944!5m2!1sen!2sin"
                        style={{ filter: 'drop-shadow(4px 4px 5px black)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
