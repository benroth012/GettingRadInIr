import React from "react";
import {Button, Card, CardGroup, Jumbotron} from 'react-bootstrap';
import video from '../Icons/video.svg'
import document from '../Icons/document.svg'
import person from '../Icons/person.svg'
import {Link} from "react-router-dom";
import bgimage from '../Photography/darkened2.png';
import { NavigationBar } from "./NavigationBar";


class PatientHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            cards: [],
            banners: [],
            icons: [document, video, person]
        };
    }

    componentDidMount() {
        Promise.all([
            fetch(window.apilink + '/server/allcards'),
            fetch(window.apilink + '/server/allbanners')
        ])
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
            .then(([data1, data2]) => this.setState({
                cards: data1,
                banners: data2
            }));
    }

    render() {
        const {error, isLoaded, cards, banners, icons} = this.state;
        return (
            <div>
                <div>
                    <div className="jumbotron-special roboto white-text" style={{
                        backgroundImage: `url(${bgimage})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center top`,
                        height: `fit-content`
                    }}>
                        <h1 style={{paddingTop: `10%`}}>Welcome to Interventional Radiology</h1>
                        <p style={{fontSize: `1.5em`}}>
                            We're here and ready to provide you care.
                        </p>
                        <p style={{marginBottom: `0px`, paddingBottom: `10%`}}>
                            <Link to="/contactinformation">
                                <Button variant="primary" className="App-button"
                                        style={{paddingLeft: `50px`, paddingRight: `50px`, marginTop: `0px`}}>CONTACT
                                    US</Button>
                            </Link>
                        </p>
                    </div>
                    <CardGroup className="roboto">
                        {cards.map((card, index) =>
                            <Card key={index}>
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
                                    <Button className="Secondary-button" href={window.currentlink + "/" + card.link}
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

export default PatientHome;