import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import '../Components/Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            cFName: "",
            cLName: "",
            cEmail: "",
            cCity: "",
            cMessge: ""
        };
    }

    Chnageinput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    Aboutdata = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8888/Contact", this.state)
            .then((res) => {
                window.alert("Send data");
                console.log(res);
            });
    };

    render() {
        const { cFName, cLName, cEmail, cCity, cMessge } = this.state;
        return (
            <div className='container'>
                <div className='cSub'>
                    <p className='gTitle' style={{ marginRight: '66px' }}>Get In Touch</p>
                    <Row>
                        <Col md={6}>
                            <div className='gmap'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5483350196278!2d73.77001980945563!3d18.54930188247704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf5e718eab57%3A0x654e4ae309741721!2sP%20K%20Biryani%20House!5e0!3m2!1sen!2sin!4v1706461605135!5m2!1sen!2sin" width="600" height="430" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='cForm'>
                                <form>
                                    <div className='cFLName'>
                                        <input
                                            type='text'
                                            name='cFName'
                                            value={cFName}
                                            placeholder='First Name'
                                            onChange={this.Chnageinput}
                                            required
                                        />
                                        &nbsp;
                                        <input
                                            type='text'
                                            name='cLName'
                                            value={cLName}
                                            placeholder='Last Name'
                                            onChange={this.Chnageinput}
                                            required
                                        />
                                    </div>
                                    <br />
                                    <div>
                                        <input
                                            type='email'
                                            name='cEmail'
                                            value={cEmail}
                                            placeholder='name@gail.com'
                                            className='cEmail'
                                            onChange={this.Chnageinput}
                                            required
                                        />
                                    </div>
                                    <br />
                                    <div>
                                        <input
                                            type='text'
                                            name='cCity'
                                            value={cCity}
                                            placeholder='Enter City...'
                                            className='cCity'
                                            onChange={this.Chnageinput}
                                            required
                                        />
                                    </div>
                                    <br />
                                    <div className='ctxt'>
                                        <textarea
                                            type='text'
                                            name='cMessge'
                                            value={cMessge}
                                            placeholder='Enter Message'
                                            cols={49}
                                            rows={6}
                                            onChange={this.Chnageinput}
                                            required
                                        />
                                    </div>
                                    <button type='submit' className='sbtn1' onClick={this.Aboutdata}>Submit</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Contact;
