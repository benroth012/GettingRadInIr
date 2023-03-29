import {Col, Container, ListGroup, ResponsiveEmbed, Row, Tab} from 'react-bootstrap';
import React from 'react';

class Videos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
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

    render() {
        const {error, isLoaded, items} = this.state;
        return (
            <div className="App">
                <Container fluid>
                    <Row style={{marginTop: `30px`, marginLeft: `10px`, marginRight: `10px`, marginBottom: `40px`}}>
                        <Col sm>
                            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#0">
                                <Row>
                                    <Col sm={4}>
                                        <h6>Select your procedure below to view our corresponding educational
                                            video.</h6>
                                        <ListGroup style={{marginBottom: `10px`}}>
                                            {items.map((item, index) =>
                                                <ListGroup.Item action href={"#" + index}>
                                                    {item.name}
                                                </ListGroup.Item>
                                            )}
                                        </ListGroup>
                                    </Col>
                                    <Col sm={8}>                                  
                                        <Tab.Content className='videoContainer'>
                                            {items.map((item, index) =>
                                                <Tab.Pane eventKey={"#" + index} >                                                        
                                                        <iframe src={item.link}
                                                                frameborder='0'
                                                                allow='autoplay; encrypted-media'
                                                                allowfullscreen="0"
                                                                title='video'
                                                                className = 'responsive-iframe'
                                                                
                                                        />
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

export default Videos;