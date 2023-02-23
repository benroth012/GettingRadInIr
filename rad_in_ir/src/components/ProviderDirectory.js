import React from 'react';
import {Card, CardGroup, Col, Jumbotron, Row} from 'react-bootstrap';
import '../App.css';
import bgimage from '../Photography/darkened2.png';

class ProviderDirectory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            physicians: [],
            providers: []
        };
    }


    componentDidMount() {
        fetch(window.apilink + "/server/allphysicians")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        physicians: result
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
        fetch(window.apilink + "/server/allproviders")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        providers: result
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
        const {providers, physicians} = this.state;

        return (

            <div>

                <Jumbotron className="jumbotron-special roboto white-text" style={{
                    backgroundImage: `url(${bgimage})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center top`,
                    height: `10%`
                }}>
                    <h1 style={{paddingTop: `10%`}}>Provider Directory</h1>
                    <p style={{fontSize: `1.5em`}}>Below are the names of the Interventional Radiology physicians and
                        advanced practice providers.</p>
                </Jumbotron>

                <h1 class='scarlet-text'>Physicians</h1>

                <CardGroup className="roboto">
                    <Row style={{margin: `10px`, width: '100%'}}>
                        {physicians.map((physician) =>
                            <Col sm={4} style={{marginBottom: `20px`}}>
                                <Card style={{height: `100%`}}>
                                    <a className="footer-a" href={physician.link} target="_blank">
                                        <Card.Img variant="top" src={physician.imageName} style={{
                                            height: '125px',
                                            width: `auto`,
                                            marginTop: `40px`,
                                            display: `block`,
                                            marginLeft: `auto`,
                                            marginRight: `auto`
                                        }}/>
                                        <Card.Body>
                                            <Card.Title style={{
                                                fontWeight: `500`,
                                                fontSize: '25px'
                                            }}>{physician.name}</Card.Title>
                                        </Card.Body>
                                    </a>
                                </Card>
                            </Col>
                        )}
                    </Row>
                </CardGroup>

                <h1 class='scarlet-text'>Advanced Practice Providers</h1>

                <CardGroup className="roboto">
                    <Row style={{margin: '10px', width: '100%'}}>
                        {providers.map((provider) =>
                            <Col sm={4} style={{marginBottom: `20px`}}>
                                <Card style={{height: `100%`}}>
                                    <Card.Img variant="top" src={provider.imageName} style={{
                                        height: '125px',
                                        width: `auto`,
                                        marginTop: `40px`,
                                        display: `block`,
                                        marginLeft: `auto`,
                                        marginRight: `auto`
                                    }}/>
                                    <Card.Body>
                                        <Card.Title
                                            style={{fontWeight: `500`, fontSize: '25px'}}>{provider.name}</Card.Title>
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

export default ProviderDirectory;