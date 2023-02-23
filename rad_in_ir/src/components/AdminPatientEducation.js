import {Button, Card, CardGroup, Col, Container, Form, Jumbotron, ListGroup, Modal, Row, Tab} from 'react-bootstrap';
import bgimage from '../Photography/Buildings/TheJames2.jpg';
import React from 'react';

class AdminPatientEducation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            showHide: false,
            name: '',
            iconLink: '',
            fileLink: '',
            buttonPressed: false,
            pdfLink: ''
        };
        this.nameHandler = this.nameHandler.bind(this);
        this.iconHandler = this.iconHandler.bind(this);
        this.fileHandler = this.fileHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleButton = this.handleButton.bind(this);
        this.handlePDF = this.handlePDF.bind(this);

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        fetch(window.apilink + "/server/alleducation")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
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

    handleButton() {
        this.setState({buttonPressed: !this.state.buttonPressed});
        if (this.buttonPressed) {
            this.setState({pdfLink: ''});
        }
    }

    handlePDF(link) {
        this.setState({buttonPressed: !this.state.buttonPressed});
        if (!this.buttonPressed) {
            this.setState({pdfLink: link});
        }
    }

    handleModalShowHide() {
        this.setState({showHide: !this.state.showHide})

    }

    nameHandler(event) {
        this.setState({
            name: event.target.value
        })
    }

    fileHandler(event) {
        this.uploadFile(event.target.files[0])
    }

    uploadFile(file) {
        console.log("Inside uploadFile")
        fetch('https://www.filestackapi.com/api/store/S3?key=AOpYaOkvRmOnk4bbdoHRQz', {
            method: 'POST',
            body: file
        })
            .then(response => response.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        fileLink: result.url
                    })
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    iconHandler(event) {
        this.uploadIcon(event.target.files[0])
    }

    uploadIcon(image) {
        console.log("Inside uploadIcon")
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
                        iconLink: result.data.display_url
                    })
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    deleteEducation(id) {
        fetch(window.apilink + '/server/deleteeducation/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(this.componentDidMount)
    }

    handleSubmit(event) {
        if (this.state.name.length > 0 && this.state.fileLink.length > 0 && this.state.iconLink.length > 0) {
            fetch(window.apilink + '/server/addeducation', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    link: this.state.fileLink,
                    icon: this.state.iconLink
                })
            }).then(this.componentDidMount)
        }
    }

    handleCancel(event) {
        this.setState({
            name: '',
            fileLink: '',
            iconLink: ''
        })
    }

    normalView() {
        const {error, isLoaded, items} = this.state;
        return (
            <div className="App">
                <Jumbotron className="jumbotron-special roboto white-text" style={{
                    backgroundImage: `url(${bgimage})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center top`,
                    height: `10%`
                }}>
                    <h1 style={{paddingTop: `10%`}}>Patient Education</h1>
                    <p style={{fontSize: `1.5em`}}>Please select your procedure below.</p>
                </Jumbotron>

                <CardGroup className="roboto">
                    <Container fluid>
                        <Row style={{margin: `10px`}}>
                            {items.map((item, index) =>
                                <Col sm={4} style={{marginBottom: `20px`}}>
                                    <Card style={{height: `100%`}}>
                                        <Card.Header style={{textAlign: `right`}}><Button variant="danger" style={{
                                            paddingLeft: `10px`,
                                            paddingRight: `10px`
                                        }} onClick={() => this.deleteEducation(item.id)}>x</Button></Card.Header>
                                        <Card.Img variant="top" src={item.icon} style={{
                                            width: 'auto',
                                            maxWidth: '90%',
                                            objectFit: 'contain',
                                            marginTop: `40px`,
                                            display: 'block',
                                            marginLeft: `auto`,
                                            marginRight: `auto`,
                                            height: '520px'
                                        }}/>
                                        <Card.Body>
                                            <Card.Title style={{fontWeight: `500`}}>{item.name}</Card.Title>
                                        </Card.Body>
                                        <Button onClick={() => this.handlePDFs(item.name)} variant="primary"
                                                className="App-button" style={{
                                            paddingLeft: `50px`,
                                            paddingRight: `50px`,
                                            height: '20%',
                                            marginBottom: '5px'
                                        }}>Learn More</Button>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </CardGroup>

                <div style={{paddingTop: '10px'}}>
                    <Button variant="success" style={{paddingLeft: `40px`, paddingRight: `40px`}}
                            onClick={() => this.handleModalShowHide()}>Add New Card</Button>
                </div>
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.showHide}
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add New Card
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.handleSubmit}>
                        <Modal.Body>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name of card" onChange={this.nameHandler}/>
                            </Form.Group>
                            <Form.Group controlId="formIcon">
                                <Form.Label>Icon Link</Form.Label>
                                <input type="file" onChange={this.iconHandler} style={{paddingLeft: '40px'}}></input>
                            </Form.Group>
                            <Form.Group controlId="formFile">
                                <Form.Label>PDF Link</Form.Label>
                                <input type="file" onChange={this.fileHandler} style={{paddingLeft: '40px'}}></input>
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

    otherView() {
        const {error, isLoaded, items, buttonPressed, pdfLinks, pdfTitles} = this.state;
        return (
            <div className='App'>
                <Container fluid>
                    <Row style={{marginTop: `30px`, marginLeft: `10px`, marginRight: `10px`, marginBottom: `40px`}}>
                        <Col sm>
                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#0">
                                <Row>
                                    <Col sm={4}>
                                        <ListGroup style={{marginBottom: `10px`}}>
                                            {pdfTitles.map((title, index) =>
                                                <ListGroup.Item action href={"#" + index}>
                                                    {title}
                                                </ListGroup.Item>
                                            )}
                                        </ListGroup>
                                    </Col>
                                    <Col sm={8}>
                                        <Tab.Content>
                                            {pdfLinks.map((link, index) =>
                                                <Tab.Pane eventKey={"#" + index}>
                                                    <iframe
                                                        src={'https://drive.google.com/viewerng/viewer?url=' + link + '?pid=explorer&efh=false&a=v&chrome=false&embedded=true'}
                                                        width="90%" height="1400px"/>
                                                </Tab.Pane>
                                            )}
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    render() {
        const {error, isLoaded, items, buttonPressed, pdfLink} = this.state;
        if (buttonPressed) {
            return this.otherView();
        } else {
            return this.normalView();
        }
    }

}

export default AdminPatientEducation;