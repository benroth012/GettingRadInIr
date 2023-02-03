import React from "react";
import {Button, Card, CardGroup, Jumbotron} from 'react-bootstrap';
import video from '../Icons/video.svg'
import document from '../Icons/document.svg'
import person from '../Icons/person.svg'
import {Link} from "react-router-dom";
import bgimage from '../Photography/darkened2.png';


class AdminHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cards: [],
            icons: [document, video, person]
        };
    }

    componentDidMount() {
        fetch(window.apilink + "/server/allcards")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        cards: result
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
        const {error, isLoaded, cards, icons} = this.state;
        return (
            <div>
                <div>
                    <Jumbotron className="jumbotron-special roboto white-text" style={{
                        backgroundImage: `url(${bgimage})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center top`,
                        height: `10%`
                    }}>
                        <h1 style={{paddingTop: `14%`}}>Welcome to Interventional Radiology</h1>
                        <p style={{fontSize: `1.5em`}}>
                            We're here and ready to provide you care.
                        </p>
                        <p style={{marginBottom: `0px`}}>
                            <Link to="/admincontactinformation=5UnAc6yzMP">
                                <Button variant="primary" className="App-button"
                                        style={{paddingLeft: `50px`, paddingRight: `50px`, marginTop: `0px`}}>CONTACT
                                    US</Button>
                            </Link>
                        </p>
                    </Jumbotron>
                    <CardGroup className="roboto">
                        {cards.map((card, index) =>
                            <Card>
                                <Card.Img variant="top" src={icons[index]} style={{
                                    width: `25%`,
                                    marginTop: `40px`,
                                    display: `block`,
                                    marginLeft: `auto`,
                                    marginRight: `auto`
                                }}/>
                                <Card.Body>
                                    <Card.Title style={{fontWeight: `500`}}>{card.title}</Card.Title>
                                    <Card.Text style={{fontWeight: `100`}}>{card.description}</Card.Text>
                                </Card.Body>
                                <div style={{textAlign: `center`}}>
                                    <Button className="Secondary-button"
                                            href={window.currentlink + "/admin" + card.link + card.adminKey}
                                            style={{width: `50%`}}>{card.button_text}</Button>
                                </div>
                            </Card>
                        )}
                    </CardGroup>
                </div>
            </div>
        );
    }
}

export default AdminHome;