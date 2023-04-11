import React from 'react';
import {Button, Card, CardGroup, Col, Form, Jumbotron, Modal, Row} from 'react-bootstrap';
import '../App.css';
import bgimage from '../Photography/Staff/OHIO_nursing1.png';

class AdminContactInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            contacts: [],
            showHide: false,
            firstLine: '',
            secondLine: '',
            number: '',
            imageName: ''
        };
        this.firstLineHandler = this.firstLineHandler.bind(this);
        this.secondLineHandler = this.secondLineHandler.bind(this);
        this.numberHandler = this.numberHandler.bind(this);
        this.imageNameHandler = this.imageNameHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
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

    handleModalShowHide() {
        this.setState({showHide: !this.state.showHide})

    }

    firstLineHandler(event) {
        this.setState({
            firstLine: event.target.value
        })
    }

    secondLineHandler(event) {
        this.setState({
            secondLine: event.target.value
        })
    }

    numberHandler(event) {
        this.setState({
            number: event.target.value
        })
    }

    imageNameHandler(event) {
        this.uploadImage(event.target.files[0])
    }

    uploadImage(image) {
        console.log("Inside uploadImage")
        let formData = new FormData();
        formData.set('key', '7a915ccfb1a72e2585c196383d4821fb');
        formData.append('image', image);
        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        imageName: result.data.display_url
                    })
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    deleteContact(id) {
        fetch(window.apilink + '/server/deletecontact/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(this.componentDidMount)
    }

    handleSubmit(event) {
        if (this.state.firstLine.length > 0 && this.state.secondLine.length > 0 && this.state.number.length > 0 && this.state.imageName.length > 0) {
            fetch(window.apilink + '/server/addcontact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstLine: this.state.firstLine,
                    secondLine: this.state.secondLine,
                    number: this.state.number,
                    imageName: this.state.imageName
                })
            }).then(this.componentDidMount)
        }
    }

    handleCancel(event) {
        this.setState({
            firstLine: '',
            secondLine: '',
            number: '',
            imageName: ''
        })
    }

    render() {
        const {error, isLoaded, contacts} = this.state;
        return (
            <div>
                <div className="jumbotron-special roboto white-text" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgimage})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center top`,
                    height: `10%`
                }}>
                    <h1 style={{paddingTop: `10%`}}>Contact Information</h1>
                    <p style={{fontSize: `1.5em`, paddingBottom: `10%`}}>
                        Contact us with any questions or concerns using the numbers below.
                    </p>
                </div>

                <h3 class="scarlet-text" style={{fontWeight: 'bold', fontSize: '40px', paddingBottom: '4vh'}}>*For
                    general, afterhours, or scheduling inquiries, please call <a className="footer-a"
                                                                                 href="tel:+1-614-293-2773">614-293-2773</a>
                </h3>

                <CardGroup className="roboto">
                    <Row style={{margin: `10px`, width: '100%'}}>
                        {contacts.map((contact, index) =>
                            <Col key = {index} sm={4} style={{marginBottom: `20px`}}>
                                <Card style={{height: `100%`}}>
                                    <Button variant="danger" style={{paddingLeft: `10px`, paddingRight: `10px`}}
                                            onClick={() => this.deleteContact(contact.id)}>x</Button>
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

                <div style={{paddingTop: '10px'}}>
                    <Button variant="success" style={{paddingLeft: `40px`, paddingRight: `40px`}}
                            onClick={() => this.handleModalShowHide()}>Add New Contact</Button>
                </div>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.showHide}
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add New Contact
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Modal.Body>
                            <Form.Group controlId="formFirstLine">
                                <Form.Label>First Line</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Line Text"
                                              onChange={this.firstLineHandler}/>
                            </Form.Group>
                            <Form.Group controlId="formSecondLine">
                                <Form.Label>Second Line</Form.Label>
                                <Form.Control type="text" placeholder="Enter Second Line Text"
                                              onChange={this.secondLineHandler}/>
                            </Form.Group>
                            <Form.Group controlId="formNumber">
                                <Form.Label>Phone Number (Please enter in xxx-xxx-xxxx format.)</Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone Number xxx-xxx-xxxx"
                                              onChange={this.numberHandler}/>
                            </Form.Group>
                            <Form.Group controlId="formImage">
                                <Form.Label>Image Name</Form.Label>
                                <input type="file" onChange={this.imageNameHandler}
                                       style={{paddingLeft: '40px'}}></input>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.handleModalShowHide()} variant="warning">Cancel</Button>
                            <Button onClick={() => this.handleModalShowHide()} variant="success"
                                    type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default AdminContactInformation;
