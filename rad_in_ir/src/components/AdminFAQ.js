import { Button, Jumbotron, CardGroup, Card, Modal, Form, Row, Col, Container, Tab, ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import bgimage from '../Photography/Buildings/TheJames2.jpg';
import icon from '../Icons/BlockO-Scarlet.png'
import tace_icon from './Education/EducationPhotos/tace_icon.svg';
import catheter_icon from './Education/EducationPhotos/catheter_icon.png';
import heart_icon from './Education/EducationPhotos/heart_icon.png';
import lungs_icon from './Education/EducationPhotos/lungs_icon.png';
import React, { Component } from 'react';

class AdminFAQ extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            faqs: [],
            categories: [],
            tempFAQs: [],
            showHideCat: false,
            showHideFAQ: false,
            question: '',
            answer: ' ',
            categoryName: ' ',
            buttonPressed: false
        };
        this.questionHandler = this.questionHandler.bind(this);
        this.answerHandler = this.answerHandler.bind(this);
        this.categoryNameHandler = this.categoryNameHandler.bind(this);
        this.handleCategorySubmit = this.handleCategorySubmit.bind(this);
        this.handleFAQSubmit = this.handleFAQSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleFAQS = this.handleFAQS.bind(this);
    }

    componentDidMount() {
        const { error, isLoaded, faqs, categories, tempFAQs } = this.state;
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

    handleCategoryShowHide() {
        this.setState({ showHideCat: !this.state.showHideCat })

    }

    handleFAQShowHide() {
        this.setState({showHideFAQ: !this.state.showHideFAQ })
    }

    categoryNameHandler(event) {
        this.setState({
            categoryName: event.target.value
        })
    }

    questionHandler(event) {
        this.setState({
            question: event.target.value
        })
    }

    answerHandler(event) {
        this.setState({
            answer: event.target.value
        })
    }

    handleFAQS(name) {
        const { faqs, tempFAQs } = this.state;
        const tfaqs = [];
        for (var i = 0; i < faqs.length; i++) {
            if (faqs[i].name == name) {
                tfaqs.push(faqs[i]);
            }
            this.setState({ 
                tempFAQs: tfaqs,
                categoryName: name
            })
        }
    }

    deleteFaq(id) {
        fetch(window.apilink + '/server/deletefaq/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(this.componentDidMount)
    }

    deleteCategory(id) {
        fetch(window.apilink + '/server/deletecategory/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(this.componentDidMount)
    }

    handleFAQSubmit(event) {
        if (this.state.question.length > 0 && this.state.answer.length > 0) {
            fetch(window.apilink + '/server/addfaq', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.categoryName,
                    question: this.state.question,
                    answer: this.state.answer
                })
            }).then(this.componentDidMount)
        }
    }

    handleCategorySubmit(event) {
        if (this.state.categoryName.length > 0) {
            fetch(window.apilink + '/server/addcategory', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.categoryName
                })
            }).then(this.componentDidMount)
        }
    }

    handleCancel(event) {
        this.setState({
            question: ' ',
            answer: ' '
        })
    }

    render() {
        const { error, isLoaded, faqs, categories, tempFAQs } = this.state;
        return (
            <div className="App">
                <Jumbotron className="jumbotron-special roboto white-text" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: `cover`, backgroundPosition: `center top`, height: `10%` }}>
                    <h1 style={{ paddingTop: `10%` }}>FAQ</h1>
                    <p style={{ fontSize: `1.5em` }}>View Frequently Asked Questions Below.</p>
                </Jumbotron>

                <Container fluid>
                    <Row style={{ marginTop: `30px`, marginLeft: `10px`, marginRight: `10px`, marginBottom: `40px` }}>
                        <Col sm>
                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#0">
                                <Row>
                                    <Col sm={4}>
                                        <ListGroup style={{ marginBottom: `10px` }}>
                                        {categories.map((category, index) =>
                                        <ListGroup.Item onClick={() => this.handleFAQS(category.name)} action href={"#" + index}>
                                            <Row>
                                                <Col sm={2}>
                                                    <Button variant="danger" style={{ paddingLeft: `10px`, paddingRight: `10px`}} onClick={() => this.deleteCategory(category.id)}>x</Button>
                                                </Col>
                                                <Col sm={10}>
                                                    {category.name}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                            )}
                                        </ListGroup>
                                    </Col>
                                    <Col sm={8}>
                                        <Tab.Content>
                                            {faqs.map((faq, index) =>
                                                <Tab.Pane eventKey={"#" + index}>
                                                    <CardGroup className="roboto">
                                                        <Col>
                                                            {tempFAQs.map((tfaq, index) =>
                                                                <Card>
                                                                    <Button variant="danger" style={{ paddingLeft: `10px`, paddingRight: `10px`}} onClick={() => this.deleteFaq(tfaq.id)}>x</Button>
                                                                    <Card.Body style={{ marginLeft: 0, marginRight: 0 }}>
                                                                        <Card.Text style={{ fontWeight: 'bold', fontSize: '25px', marginBottom: '20px', marginLeft: '5 px', textAlign: 'left', }}>{tfaq.question}</Card.Text>
                                                                        <Card.Text style={{ fontWeight: '500', fontSize: '25px', marginBottom: '20px', marginLeft: '5 px', textAlign: 'left' }}>{tfaq.answer}</Card.Text>
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
                    <Row>
                        <Col sm={4}>
                            <Button variant="success" style={{ paddingLeft: `40px`, paddingRight: `40px` }} onClick={() => this.handleCategoryShowHide()}>Add New Category</Button>

                        </Col>
                        <Col sm={8}>
                            <Button variant="success" style={{ paddingLeft: `40px`, paddingRight: `40px` }} onClick={() => this.handleFAQShowHide()}>Add New FAQ</Button>

                        </Col>
                    </Row>
                </Container>

                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.showHideCat}
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add New Category
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.handleCategorySubmit}>
                        <Modal.Body>
                            <Form.Group controlId="formQuestion">
                                <Form.Label>Category</Form.Label>
                                <Form.Control type="text" placeholder="Enter Category Name" onChange={this.categoryNameHandler} />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.handleCategoryShowHide()} variant="warning">Cancel</Button>
                            <Button onClick={() => this.handleCategoryShowHide()} variant="success" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
                
                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.showHideFAQ}
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add New FAQ
                        </Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={this.handleFAQSubmit}>
                        <Modal.Body>
                            <Form.Group controlId="formQuestion">
                                <Form.Label>Question</Form.Label>
                                <Form.Control type="text" placeholder="Enter FAQ" onChange={this.questionHandler} />
                            </Form.Group>
                            <Form.Group controlId="formAnswer">
                                <Form.Label>Answer</Form.Label>
                                <Form.Control type="text" placeholder="Enter FAQ answer" onChange={this.answerHandler} />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.handleFAQShowHide()} variant="warning">Cancel</Button>
                            <Button onClick={() => this.handleFAQShowHide()} variant="success" type="submit">Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        );
    }
}
export default AdminFAQ;