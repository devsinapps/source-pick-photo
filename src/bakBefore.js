import React, { Component } from 'react';
import Loading from './Assets/Images/Loading.png'
import { Container, Row, Col,FormGroup, Card, CardBody, CardTitle, CardImg, CardSubtitle, CardText,CardColumns, Button, NavLink, Popover, PopoverHeader, PopoverBody, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const API_KEY = "a9f020ade0a6ba6d2ba84ba91345fb4e73fa64ad1c0b6221233b55c6f12c3b29";
const SEC_KEY = "a58a8b865b6c650eb94003187fae318d94b86e2c538e0c800670f0a7228c11cf";
const API_URL = "https://cors-anywhere.herokuapp.com/";

export class App extends Component {

    state = {
     imgs: [],
     randomImgs: [],
     nullAlert: ''
   }
  

  getPhotos = async (e) => {
    e.preventDefault();
    const keySearch = this.keySearch.value;
    const api_call = await fetch(`${API_URL}https://api.unsplash.com/search/photos?per_page=20&query=${keySearch}&client_id=${API_KEY}`);
    const data = await api_call.json();
    console.log(data.results);

    this.setState({
      imgs: data.results,
      nullAlert: keySearch
    })

    this.addForm.reset();
  }

  componentDidMount(){
    setTimeout(() => {
      fetch(`https://api.unsplash.com/photos?per_page=30&client_id=${API_KEY}`)
      .then(response => response.json())
      .then(data => this.setState({
        randomImgs: data
      }))
    },1000)
    
  }

  render() {
    const { imgs, randomImgs } = this.state
    const unsplash = " on unsplash";
    let getPhotos = imgs.map((img) => {
      return(
      <div key={img.id}>
        <Card className='mb-3'>
          <CardImg top src={img.urls.small} />
          <CardBody>
            <CardTitle> 
              { img.description === null ? `${this.state.nullAlert}` : `${img.description.substring(0,15)}...`}
            </CardTitle>
            <CardText> Photo by : {img.user.name + unsplash} </CardText>

            <NavLink href={img.urls.full} target="__blank"> 
              <FontAwesomeIcon icon="download" /> Download ...
            </NavLink>
          </CardBody>
        </Card>
      </div>
    );
    })
    
    const randomText = "Photo of the Day";
    
    let randomPhotos = 
   
    randomImgs.map((randomImg) => {
      return(
        <div key={randomImg.id}>
          <Card className='mb-3'>
          <CardImg top src={randomImg.urls.small} />
            <CardBody>
              <CardTitle> 
                {randomImg.description == null ? randomText : `${randomImg.description.substring(0,15)}...`}
              </CardTitle>
              <CardText> Photo by : {randomImg.user.name && `${randomImg.user.name + unsplash}`  } </CardText>
              <NavLink href={randomImg.urls.full} target="__blank"> 
                <FontAwesomeIcon icon="download" /> Download ...
              </NavLink>
            </CardBody>
          </Card>
        </div>
      );
    })


    let animation = 
    <div className='bagAnimation'>
        <Row>
          <Col lg='3' className='mx-auto'>
            <Card className='text-center'>
              <img src={Loading} />
            </Card>
          </Col>
        </Row>
    </div>

    const testing = 
    <CardColumns>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
      </Card>
      <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
      </Card>
      <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </CardColumns>

    
    return (
    
      <div id='wrap'>
        {this.state.randomImgs.length === 0 ? animation : 
        <div>
        <section className='pickphotos'>
          <Container>
            <Row className='mb-3'>
              <Col lg='8' className='mx-auto'>
                <div className='headingTitle'>
                  <h1> <FontAwesomeIcon icon="camera" /> PickPhotos <Badge pill>from unsplash.com</Badge> </h1>
                </div>
                <Card>
                  <CardBody>
                    <form onSubmit={(e) => (this.getPhotos(e))} className='form' ref={(input) => (this.addForm) = input }>
                    <Row form>
                      <Col md='10'>
                        <FormGroup>
                          <input type='teks' ref={(input) => (this.keySearch) = input } className='form-control' placeholder="Search Free Photos..."/>
                        </FormGroup>
                      </Col>
                      <Col md='2'>
                        <FormGroup>
                        <Button block> <FontAwesomeIcon icon="search" /> </Button>
                        </FormGroup>
                      </Col>
                    </Row>
                    </form>
                  </CardBody>
                </Card>
              
              </Col>
            </Row>
            <Row className='mb-3'>
              <Col lg='12' className='mx-auto'>
                <CardColumns>
                { this.state.imgs.length === 0 ? randomPhotos : getPhotos }
                </CardColumns>
              </Col>
          </Row>
          </Container>
        </section>
        <footer className="footer">
          <Container fluid>
            <Row>
              <Col lg='6' md='6' sm='6'>
                <Card>
                  <CardBody>
                      <i> Copyright © </i>
                      <a href="https://portofolio-sandy.firebaseapp.com/" target="__blank"> sandy kurniawan </a>
                  </CardBody>
                </Card>
              </Col>
              <Col lg='6' md='6' sm='6'>
                <Card>
                  <CardBody>
                    <i> Powered: </i>
                      <a href="https://unsplash.com/" target="__blank"> unsplash.com </a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </footer>
        </div>
        }  
      </div>

    );
  }
}

