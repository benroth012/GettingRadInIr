import {Button, Card, CardGroup, Col, Container, Jumbotron, ListGroup, Row, Tab} from 'react-bootstrap';
import bgimage from '../Photography/Buildings/TheJames2.jpg';
import React from 'react';

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            buttonPressed: false,
            pdfs: [],
            pdfTitles: [],
            pdfLinks: [],
        };

        this.handleButton = this.handleButton.bind(this);
        this.handlePDFs = this.handlePDFs.bind(this);
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
                    console.log(result)
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
        fetch(window.apilink + "/server/allpdfs")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        pdfs: result
                    });
                },
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
            this.setState({pdfLinks: []});
            this.setState({pdfTitles: []});
        }
    }

    handlePDFs(name) {
        this.setState({buttonPressed: !this.state.buttonPressed});
        const {pdfs} = this.state;
        const tempTitles = [];
        const tempLinks = [];
        if (!this.buttonPressed) {
            for (var i = 0; i < pdfs.length; i++) {
                if (pdfs[i].name == name) {
                    tempTitles.push(pdfs[i].title);
                    tempLinks.push(pdfs[i].link);
                }
            }
            this.setState({pdfLinks: tempLinks});
            this.setState({pdfTitles: tempTitles});
        }
    }

    normalView() {
        const {error, isLoaded, items, buttonPressed} = this.state;

        return (

            <div className="App">

                <div className="jumbotron-special roboto white-text" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgimage})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center top`,
                    height: 'fit-content'
                }}>
                    <h1 style={{paddingTop: `10%`}}>Patient Education</h1>
                    <p style={{fontSize: `1.5em`, paddingBottom: `10%`}}>Please select your procedure below.</p>
                </div>

                <CardGroup className="roboto">
                    <Container fluid>
                        <Row style={{margin: `10px`}}>
                            {items.map((item, index) =>
                                <Col key={index} sm={4} style={{marginBottom: `20px`}}>
                                    <Card style={{height: `100%`}}>
                                        <Card.Img variant="top" src={item.icon} style={{
                                            width: 'auto',
                                            maxWidth: '90%',
                                            objectFit: 'contain',
                                            marginTop: `20px`,
                                            display: 'block',
                                            marginLeft: `auto`,
                                            marginRight: `auto`,
                                            marginBottom: 'auto',
                                            height: '520px'
                                        }}/>
                                        <Card.Body>
                                            <Card.Title style={{fontWeight: `500`}}>{item.name}</Card.Title>
                                        </Card.Body>
                                        <Button onClick={() => this.handlePDFs(item.name)} variant="primary"
                                                className="App-button" style={{
                                            paddingLeft: `50px`,
                                            paddingRight: `50px`,
                                            height: '10vh',
                                            marginBottom: '10px'
                                        }}>Learn More</Button>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </CardGroup>

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
                                <Row id = "EducationLayout">
                                    <Col sm={4} id = "DocumentMenu">
                                        <ListGroup style={{marginBottom: `10px`}}>
                                            {pdfTitles.map((title, index) =>
                                                <ListGroup.Item key = {index} action href={"#" + index}>
                                                    {title}
                                                </ListGroup.Item>
                                            )}
                                        </ListGroup>
                                    </Col>
                                    <Col id = "DocumentDisplay">
                                        <Tab.Content>
                                            {pdfLinks.map((link, index) =>
                                                <Tab.Pane key={index} eventKey={"#" + index}>
                                                    <iframe id = "iframe"
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
        const {error, isLoaded, items, buttonPressed, pdfLinks} = this.state;
        if (buttonPressed) {
            return this.otherView();
        } else {
            return this.normalView();
        }

    }
}

export default Education;