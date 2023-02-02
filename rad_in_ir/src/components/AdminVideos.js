import { Col, Row, Container, ResponsiveEmbed, Tab, ListGroup, Button, Modal, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import bgimage from '../Photography/Buildings/TheJames2.jpg';
import React, { Component } from 'react';

class AdminVideos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            showHideAdd: false,
            showHideEdit: false,
            videoName: '',
            videoLink: '',
            tempName: ' ',
            tempLink: ' '
        };
        this.myNameHandler = this.myNameHandler.bind(this);
        this.myLinkHandler = this.myLinkHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        fetch(window.apilink + "/server/allvideos")
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

    handleShowHideAdd() {
        this.setState({ showHideAdd: !this.state.showHideAdd })
    }

    handleShowHideEdit() {
        this.setState({ showHideEdit: !this.state.showHideEdit })
    }

    myNameHandler(event) {
        this.setState({
            videoName: event.target.value
        })
    }

    myLinkHandler(event) {
        this.setState({
            videoLink: event.target.value
        })
    }

    deleteVideo(id) {
        fetch(window.apilink + '/server/deletevideo/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(this.componentDidMount)
    }

    editVideo(item) {
        this.setState({
            showHideEdit: true,
            tempName: item.name,
            tempLink: item.link,
            videoName: item.name,
            videoLink: item.link
        })
        this.deleteVideo(item.id)
    }

    handleSubmit(event) {
        if (this.state.videoName.length > 0 && this.state.videoLink.length > 0) {
            var videoLinkParts = this.state.videoLink.split("=")
            var tLink = "";
            if(this.state.videoLink.includes("embed")) {tLink = this.state.videoLink}
            else {tLink = 'https://www.youtube.com/embed/' + videoLinkParts[videoLinkParts.length - 1]}
            fetch(window.apilink + '/server/addvideo', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.videoName,
                    link: tLink
                })
            }).then(this.componentDidMount)
        }
    }

    handleCancel(event) {
        this.setState({
            showHideEdit: false,
            videoLink: this.state.tempLink,
            videoName: this.state.tempName
        })
        this.handleSubmit(event)
    }

    render() {
        const { error, isLoaded, items } = this.state;
        return (
            <div className="App">
                <Container fluid>
                    <Row style={{ marginTop: `30px`, marginLeft: `10px`, marginRight: `10px`, marginBottom: `40px` }}>
                        <Col sm>
                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#0">
                                <Row>
                                    <Col sm={4} style={{ marginBottom: `10px` }}>
                                        <h6>Select your procedure below to view our corresponding educational video.</h6>
                                        <ListGroup style={{ marginBottom: `10px` }}>
                                            {items.map((item, index) =>
                                                <ListGroup.Item action href={"#" + index}>
                                                    <Row>
                                                        <Col sm={2}>
                                                            <Button variant="danger" style={{ paddingLeft: `10px`, paddingRight: `10px` }} onClick={() => this.deleteVideo(item.id)}>x</Button>
                                                            <Button variant="secondary" style={{ paddingLeft: `10px`, paddingRight: `10px` }} onClick={() => this.editVideo(item)}>e</Button>
                                                        </Col>
                                                        <Col sm={10}>
                                                            {item.name}
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )}
                                        </ListGroup>



                                        <Button variant="success" style={{ paddingLeft: `40px`, paddingRight: `40px` }} onClick={() => this.handleShowHideAdd()}>Add New Video</Button>
                                        <Modal
                                            size="lg"
                                            aria-labelledby="contained-modal-title-vcenter"
                                            centered
                                            show={this.state.showHideAdd}
                                        >
                                            <Modal.Header>
                                                <Modal.Title id="contained-modal-title-vcenter">
                                                    Add New Video
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Form onSubmit={this.handleSubmit}>
                                                <Modal.Body>
                                                    <Form.Group controlId="formName">
                                                        <Form.Label>Video Title</Form.Label>
                                                        <Form.Control type="name" placeholder="Enter Video Title" onChange={this.myNameHandler} />
                                                    </Form.Group>
                                                    <Form.Group controlId="formLink">
                                                        <Form.Label>Video Link</Form.Label>
                                                        <Form.Control type="link" placeholder="Enter Video Link" onChange={this.myLinkHandler} />
                                                        <Form.Text className="text-muted">
                                                            Must be from YouTube
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button onClick={() => this.handleShowHideAdd()} variant="warning">Cancel</Button>
                                                    <Button onClick={() => this.handleShowHideAdd()} variant="success" type="submit">Submit</Button>
                                                </Modal.Footer>
                                            </Form>
                                        </Modal>



                                        <Modal
                                            size="lg"
                                            aria-labelledby="contained-modal-title-vcenter"
                                            centered
                                            show={this.state.showHideEdit}
                                        >
                                            <Modal.Header>
                                                <Modal.Title id="contained-modal-title-vcenter">
                                                    Add New Video
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Form onSubmit={this.handleSubmit}>
                                                <Modal.Body>
                                                    <Form.Group controlId="formName">
                                                        <Form.Label>Video Title</Form.Label>
                                                        <Form.Control type="name" placeholder={this.state.tempName} onChange={this.myNameHandler} />
                                                    </Form.Group>
                                                    <Form.Group controlId="formLink">
                                                        <Form.Label>Video Link</Form.Label>
                                                        <Form.Control type="link" placeholder={this.state.tempLink} onChange={this.myLinkHandler} />
                                                        <Form.Text className="text-muted">
                                                            Must be from YouTube
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button onClick={() => this.handleCancel()} variant="warning">Cancel</Button>
                                                    <Button onClick={() => this.handleShowHideEdit()} variant="success" type="submit">Submit</Button>
                                                </Modal.Footer>
                                            </Form>
                                        </Modal>
                                    </Col>
                                    <Col sm={8}>
                                        <Tab.Content>
                                            {items.map((item, index) =>
                                                <Tab.Pane eventKey={"#" + index}>
                                                    <ResponsiveEmbed aspectRatio="16by9">
                                                        <iframe src={item.link}
                                                            frameBorder='0'
                                                            allow='autoplay; encrypted-media'
                                                            allowFullScreen="0"
                                                            title='video'
                                                        />
                                                    </ResponsiveEmbed>
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
}

export default AdminVideos;