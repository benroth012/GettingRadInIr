import {Button, Card, Form, Jumbotron} from 'react-bootstrap';
import bgimage from '../Photography/Buildings/TheJames2.jpg';
import React from 'react';
import { useNavigate } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'radiniradmin',
            password: 'Venacava123!',
            typedusername: '',
            typedpassword: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myUsernameHandler = this.myUsernameHandler.bind(this);
        this.myPasswordHandler = this.myPasswordHandler.bind(this);
    }

    handleSubmit(event) {

        if (this.state.typedusername === this.state.username && this.state.typedpassword === this.state.password) {
            this.props.navigate('/adminhome=4YTiwH60TL')
        }
    }

    myUsernameHandler(event) {
        this.setState({
            typedusername: event.target.value
        })
    }

    myPasswordHandler(event) {
        this.setState({
            typedpassword: event.target.value
        })
    }

    render() {
        const {typedpassword, typedusername} = this.state;
        return (
            <div className="App">
                <div className="jumbotron-special roboto white-text" style={{
                    backgroundImage: `url(${bgimage})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center center`,
                    height: `fit-content`
                }}>
                    <h1 style={{paddingTop: `10%`}}>Welcome to Interventional Radiology</h1>
                    <p style={{fontSize: `1.5em`, paddingBottom: `10%`}}>
                        Admins may log in below.
                    </p>
                </div>
                <Card className="App-card">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Enter Admin Username</Form.Label>
                            <Form.Control type="email" placeholder="Username" onChange={this.myUsernameHandler}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Enter Admin Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.myPasswordHandler}/>
                        </Form.Group>
                        <Button className="App-button" onClick={() => this.handleSubmit()}>Admin Home</Button>
                    </Form>
                    <a href="/" className="footer-a">Return to Patient Home</a>
                </Card>
            </div>
        );
    }
}

export default function LoginWithNavigate () {
    const navigate = useNavigate()
    return <Login navigate={navigate} />
}