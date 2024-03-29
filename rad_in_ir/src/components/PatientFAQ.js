import React from 'react';
import {Card, CardGroup, Col, Container, Jumbotron, ListGroup, Row, Tab} from 'react-bootstrap';
import '../App.css';
import bgimage from '../Photography/Staff/OHIO_nursing1.png';

class PatientFAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            faqs: [],
            categories: [],
            tempFAQs: []
        };

        this.handleFAQS = this.handleFAQS.bind(this);
    }

    componentDidMount() {
        const {error, isLoaded, faqs, categories, tempFAQs} = this.state;
        fetch(window.apilink + "/server/allfaqs")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        faqs: result,
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
        fetch(window.apilink + "/server/allcategories")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        categories: result
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
        fetch(window.apilink + "/server/firstfaq")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        tempFAQs: [result]
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

    handleFAQS(name) {
        const {faqs, tempFAQs} = this.state;
        const tfaqs = [];
        for (var i = 0; i < faqs.length; i++) {
            if (faqs[i].name == name) {
                tfaqs.push(faqs[i]);
            }
            this.setState({tempFAQs: tfaqs})
        }
    }

    normalView() {
        const {error, isLoaded, faqs, categories, tempFAQs} = this.state;

        return (
            <div>
                <div className="jumbotron-special roboto white-text" style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgimage})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center top`,
                    height: `fit-content`
                }}>
                    <h1 style={{paddingTop: `10%`}}>FAQ</h1>
                    <p style={{fontSize: `1.5em`, paddingBottom: `10%`}}>View Frequently Asked Questions Below.</p>
                </div>

                <Container fluid>
                    <Row style={{marginTop: `10px`, marginLeft: `10px`, marginRight: `10px`, marginBottom: `40px`}}>
                        <Col sm>
                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#0">
                                <Row>
                                    <Col sm={4}>
                                        <ListGroup style={{marginBottom: `10px`}}>
                                            {categories.map((category, index) =>
                                                <ListGroup.Item key={index} onClick={() => this.handleFAQS(category.name)} action
                                                                href={"#" + index}>
                                                    {category.name}
                                                </ListGroup.Item>
                                            )}
                                        </ListGroup>
                                    </Col>
                                    <Col sm={8}>
                                        <Tab.Content>
                                            {faqs.map((faq, index) =>
                                                <Tab.Pane  key = {index} eventKey={"#" + index}>
                                                    <CardGroup className="roboto">
                                                        <Col>
                                                            {tempFAQs.map((tfaq, index) =>
                                                                <Card key ={index}>
                                                                    <Card.Body style={{marginLeft: 0, marginRight: 0}}>
                                                                        <Card.Text style={{
                                                                            fontWeight: 'bold',
                                                                            fontSize: '25px',
                                                                            marginBottom: '20px',
                                                                            marginLeft: '5 px',
                                                                            textAlign: 'left',
                                                                        }}>{tfaq.question}</Card.Text>
                                                                        <Card.Text style={{
                                                                            fontWeight: '500',
                                                                            fontSize: '25px',
                                                                            marginBottom: '20px',
                                                                            marginLeft: '5 px',
                                                                            textAlign: 'left'
                                                                        }}>{tfaq.answer}</Card.Text>
                                                                    </Card.Body>
                                                                </Card>
                                                            )}
                                                        </Col>
                                                    </CardGroup>
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
        const {error, isLoaded, faqs, categories, currentName, tempFAQs} = this.state;
        return this.normalView();
    }
}

export default PatientFAQ;