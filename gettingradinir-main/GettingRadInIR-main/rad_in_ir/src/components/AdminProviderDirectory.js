import React from 'react';
import { Jumbotron, Button, Card, CardGroup, Modal, Form, Row, Col } from 'react-bootstrap';
import '../App.css';
import bgimage from '../Photography/darkened2.png';

//var isMobile = (window.innerWidth < 480)

class AdminProviderDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      physicians: [],
      providers: [],
      showHidePhysician: false,
      showHideProvider: false,
      providerName: '',
      providerImage: '',
      physicianName: '',
      physicianLink: '',
      physicianImage: ''
    };
    this.physicianNameHandler = this.physicianNameHandler.bind(this);
    this.physicianLinkHandler = this.physicianLinkHandler.bind(this);
    this.physicianImageHandler = this.physicianImageHandler.bind(this);
    this.providerNameHandler = this.providerNameHandler.bind(this);
    this.providerImageHandler = this.providerImageHandler.bind(this);
    this.handlePhysicianSubmit = this.handlePhysicianSubmit.bind(this);
    this.handleProviderSubmit = this.handleProviderSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
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

  handlePhysicianModalShowHide() {
    this.setState({ showHidePhysician: !this.state.showHidePhysician })

  }

  handleProviderModalShowHide() {
    this.setState({ showHideProvider: !this.state.showHideProvider })

  }

  physicianNameHandler(event) {
    this.setState({
      physicianName: event.target.value
    })
  }

  physicianLinkHandler(event) {
    this.setState({
      physicianLink: event.target.value
    })
  }

  physicianImageHandler(event) {
    this.uploadPhysicianImage(event.target.files[0])
  }

  providerNameHandler(event) {
    this.setState({
      providerName: event.target.value
    })
  }

  providerImageHandler(event) {
    this.uploadProviderImage(event.target.files[0])
  }

  uploadPhysicianImage(image) {
    console.log("Inside uploadImage")
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
            physicianImage: result.data.display_url
          })
        },
        (error) => {
          console.log(error)
        }
      )
  }

  uploadProviderImage(image) {
    console.log("Inside uploadImage")
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
            providerImage: result.data.display_url
          })
        },
        (error) => {
          console.log(error)
        }
      )
  }

  deletePhysician(id) {
    fetch(window.apilink + '/server/deletephysician/' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(this.componentDidMount)
  }

  deleteProvider(id) {
    fetch(window.apilink + '/server/deleteprovider/' + id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(this.componentDidMount)
  }

  handlePhysicianSubmit(event) {
    if (this.state.physicianName.length > 0 && this.state.physicianLink.length > 0 && this.state.physicianImage.length > 0) {
      fetch(window.apilink + '/server/addphysician', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.physicianName,
          link: this.state.physicianLink,
          imageName: this.state.physicianImage
        })
      }).then(this.componentDidMount)

    }

  }

  handleProviderSubmit(event) {
    if (this.state.providerName.length > 0 && this.state.providerImage.length > 0) {
      fetch(window.apilink + '/server/addprovider', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.providerName,
          imageName: this.state.providerImage
        })
      }).then(this.componentDidMount)
    }
  }

  handlePhysicianCancel(event) {
    this.setState({
      physicianName: '',
      physicianLink: '',
      physicianImage: ''
    })
  }

  handleProviderCancel(event) {
    this.setState({
      providerName: '',
      providerImage: ''
    })
  }

  compareBy = (key) => {  // no need to bind arrow functions
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  };

  sortListPhysicians = (key) => {
    let arrayCopy = [...this.state.physicians];
    console.log(arrayCopy)
    arrayCopy.sort(this.compareBy(key));
    this.setState({ physicians: arrayCopy });
  };

  getImageName = (name) => {
    let imagePath = "";
    imagePath = name.substring(0, name.indexOf(","));
    let replaced = imagePath.split(' ').join('_');
    replaced = imagePath.split('-').join('_');
    return replaced;
  };



  render() {
    const { error, isLoaded, providers, physicians } = this.state;
    let i = 2;
    { (physicians.filter(x => x.name == 'Eric Elliott, DO').length > 0) ? i = 2 : i = 3 }
    return (
      <div>
        <Jumbotron className="jumbotron-special roboto white-text" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: `cover`, backgroundPosition: `center top`, height: `10%` }}>
          <h1 style={{ paddingTop: `10%` }}>Provider Directory</h1>
          <p style={{ fontSize: `1.5em` }}>
            Below are the names of the Interventional Radiology physicians and advanced practice providers.
          </p>
        </Jumbotron>
        <h1 class='scarlet-text'>Physicians</h1>

        <CardGroup className="roboto">
          <Row style={{ margin: `10px`, width: '100%' }}>
            {physicians.map((physician) =>
              <Col sm={4} style={{ marginBottom: `20px` }}>
                <Card style={{ height: `100%` }}>
                  <Button variant="danger" style={{ paddingLeft: `10px`, paddingRight: `10px` }} onClick={() => this.deletePhysician(physician.id)}>x</Button>
                  <a className="footer-a" href={physician.link} target="_blank">
                    <Card.Img variant="top" src={physician.imageName} style={{ height: '125px', width: `auto`, marginTop: `40px`, display: `block`, marginLeft: `auto`, marginRight: `auto` }} />
                    <Card.Body>
                      <Card.Title style={{ fontWeight: `500`, fontSize: '25px' }}>{physician.name}</Card.Title>
                    </Card.Body>
                  </a>
                </Card>
              </Col>
            )}
          </Row>
        </CardGroup>


        <Button variant="success" style={{ paddingLeft: `40px`, paddingRight: `40px` }} onClick={() => this.handlePhysicianModalShowHide()}>Add New Physician</Button>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.showHidePhysician}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Add New Physician
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.handlePhysicianSubmit}>
            <Modal.Body>
              <Form.Group controlId="formName">
                <Form.Label>Physician Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Physician Name" onChange={this.physicianNameHandler} />
                <Form.Text className="text-muted">
                  Include the physician's title
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formLink">
                <Form.Label>Physician Link</Form.Label>
                <Form.Control type="link" placeholder="Enter Physician Link" onChange={this.physicianLinkHandler} />
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Label>Upload Physician Image</Form.Label>
                <input type="file" onChange={this.physicianImageHandler} style={{ paddingLeft: '40px' }}></input>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.handlePhysicianModalShowHide()} variant="warning">Cancel</Button>
              <Button onClick={() => this.handlePhysicianModalShowHide()} variant="success" type="submit">Submit</Button>
            </Modal.Footer>
          </Form>
        </Modal>

        <h1 class='scarlet-text' >Advanced Practice Providers</h1>

        <CardGroup>
          <Row style={{ margin: '10px', width: '100%' }}>
            {providers.map((provider) =>
              <Col sm={4} style={{ marginBottom: `20px` }}>
                <Card style={{ height: `100%` }}>
                  <Button variant="danger" style={{ paddingLeft: `10px`, paddingRight: `10px` }} onClick={() => this.deleteProvider(provider.id)}>x</Button>
                  <Card.Img variant="top" src={provider.imageName} style={{ height: '125px', width: `auto`, marginTop: `40px`, display: `block`, marginLeft: `auto`, marginRight: `auto` }} />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: `500`, fontSize: '25px' }}>{provider.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </CardGroup>


        <Button variant="success" style={{ paddingLeft: `40px`, paddingRight: `40px` }} onClick={() => this.handleProviderModalShowHide()}>Add New Provider</Button>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.showHideProvider}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Add New Provider
            </Modal.Title>
          </Modal.Header>
          <Form onSubmit={this.handleProviderSubmit}>
            <Modal.Body>
              <Form.Group controlId="formName">
                <Form.Label>Provider Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Physician Name" onChange={this.providerNameHandler} />
                <Form.Text className="text-muted">
                  Include the provider's title
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formImage">
                <Form.Label>Upload Provider Image</Form.Label>
                <input type="file" onChange={this.providerImageHandler} style={{ paddingLeft: '40px' }}></input>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => this.handleProviderModalShowHide()} variant="warning">Cancel</Button>
              <Button onClick={() => this.handleProviderModalShowHide()} variant="success" type="submit">Submit</Button>
            </Modal.Footer>
          </Form>
        </Modal>

      </div>
    );
  }

}
export default AdminProviderDirectory;