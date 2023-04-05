import React from 'react';
import {Card, CardGroup, Col, Row} from 'react-bootstrap';
import '../App.css';
import bgimage from '../Photography/Staff/OHIO_nursing1.png';

class ContactInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            contacts: []
        };
    }

    componentDidMount() {
        fetch(window.apilink + "/server/allcontacts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        contacts: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const {contacts} = this.state;
        return (
            <div>
                <div className="jumbotron-special roboto white-text" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgimage})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center top`,
                    height: `fit-content`
                }}>
                    <h1 style={{paddingTop: `10%`}}>Contact Information</h1>
                    <p style={{fontSize: `1.5em`, paddingBottom: `10%`}}>
                        Contact us with any questions or concerns using the numbers below.
                    </p>
                </div>

                <h3 className="scarlet-text" style={{fontWeight: 'bold', fontSize: '40px', paddingBottom: '1vh'}}>*For
                    general, afterhours, or scheduling inquiries, please call <a className="footer-a"
                                                                                 href="tel:+1-614-293-2773">614-293-2773</a>
                </h3>

                <CardGroup className="roboto">
                    <Row style={{margin: `10px`, width: '100%'}}>
                        {contacts.map((contact, index) =>
                            <Col sm={4} key={index} style={{marginBottom: `20px`}}>
                                <Card style={{height: `100%`}}>
                                    <Card.Img variant="top" src={contact.imageName} style={{
                                        height: '125px',
                                        width: `auto`,
                                        marginTop: `40px`,
                                        display: `block`,
                                        marginLeft: `auto`,
                                        marginRight: `auto`
                                    }}/>
                                    <Card.Body style={{width: '100%'}}>
                                        <Card.Text style={{
                                            fontWeight: '500',
                                            fontSize: '25px',
                                            marginBottom: '0px'
                                        }}>{contact.firstLine}</Card.Text>
                                        <Card.Text style={{
                                            fontWeight: '500',
                                            fontSize: '25px',
                                            marginBottom: '0px'
                                        }}>{contact.secondLine}</Card.Text>
                                        <Card.Text style={{fontWeight: '500', fontSize: '25px'}}><a className="footer-b"
                                                                                                    href={"tel:+1-" + contact.number}>{contact.number}</a></Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </CardGroup>

            </div>
        );
    }
}

export default ContactInformation;
