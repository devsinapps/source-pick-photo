import React from 'react'
//assets
import loadingLogo from './../../Assets/Images/Loading.png'
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//reactstrap
import { Container, Row, Col, Card, CardBody, CardImg, CardTitle, CardText, CardFooter,Form, FormGroup, Input, Button, CardColumns } from 'reactstrap'
//variable
const API_KEY = "a9f020ade0a6ba6d2ba84ba91345fb4e73fa64ad1c0b6221233b55c6f12c3b29"
export class Dashboard extends React.Component{
	state = {
		randomImgs: [],
		getPhoto: null,
		numberPage: 1,
		keyword: '',
		search: '',
		loadingTime: false
	}

	//Get Random Photo
	componentDidMount(){
		fetch(`https://api.unsplash.com/photos?per_page=30&client_id=${API_KEY}`)
		.then(response => response.json())
		.then(data => 
				setTimeout(()=>{
					this.setState({
					randomImgs: data,
					loadingTime: !this.state.loadingTime
					})
				}, 2000)
			)
	}


	//Get Seacth Photo By Keyword
	getPhoto = async (e) => {
		e.preventDefault();
		let { numberPage, keyword } = this.state
		const keySearch = e.target.keyword.value
		const api_call = await fetch(`https://api.unsplash.com/search/collections?per_page=20&page=${numberPage}&query=${keySearch}&client_id=${API_KEY}`);
		const data = await api_call.json();
		setTimeout(()=>{
			this.setState({
				getPhoto: data.results,
				keyword: keySearch,
				numberPage: 1,
				search: '',
				loadingTime: !this.state.loadingTime
			})
		},2000)
		this.setState({
			loadingTime: !this.state.loadingTime
		})

	}

		//Next Photo Search
		nextPhoto = async (e) => {
			let { numberPage, keyword } = this.state
			const updatePage = numberPage += 1;
			const api_call = await fetch(`https://api.unsplash.com/search/collections?per_page=20&page=${updatePage}&query=${keyword}&client_id=${API_KEY}`)
			const data = await api_call.json();
			setTimeout(()=>{
				this.setState({
					getPhoto: data.results,
					numberPage: updatePage,
					loadingTime: !this.state.loadingTime
				})
			}, 3000)
			
			this.setState({
				loadingTime: !this.state.loadingTime
			})
		}


	//For Button
	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	render(){
		const { randomImgs, getPhoto, search, loadingTime, keyword } = this.state
		const enabled = search.length > 0;
		const viewPhoto = getPhoto === null ? 
		<div>
			<Col lg='12'>
				<CardColumns>
					<div className='RandomImgs'>
						{randomImgs.map((random)=>{
							const desc = random.description === null ? "photo of the day" : `${random.description.substring(0,25)}...` ;
							return(
									<Card className='mb-3'>
										<CardImg top src={random.urls.small} />
										<CardBody>
											<CardText> {desc} </CardText>
											<small> 
												<FontAwesomeIcon icon='camera-retro' /> 
												{random.user.first_name + random.user.last_name} 
											</small>
										</CardBody>
										<CardFooter>
											<a href={random.links.download} target="__blank">
												<Button block> <FontAwesomeIcon icon="download" /> </Button>
											</a>
										</CardFooter>
									</Card>
								)
							
							
						})}
					</div>
				</CardColumns>
			</Col>
		</div>
			:
		<div>
			<Col lg='12'>
				<CardColumns>
					<div className="RequestImgs">
						{getPhoto.map((photo)=>{
							const desc = photo.description === null ? keyword : `${photo.description.substring(0,15)}...` ;
							return(
									<Card className='mb-3'>
										<CardImg top src={photo.cover_photo.urls.small} />
										<CardBody>
											<CardText> {desc} </CardText>
											<small> 
												<FontAwesomeIcon icon='camera-retro' /> 
												{photo.user.first_name + photo.user.last_name} 
											</small>
										</CardBody>
										<CardFooter>		
											<a href={photo.cover_photo.links.download}>
												<Button block> 
													<FontAwesomeIcon icon="download" />
												</Button>
											</a>
										</CardFooter>
									</Card>
								)
							
						})}
					</div>
				</CardColumns>
			</Col>
			<Col lg='12'>
				<Card>
					<CardBody className='text-center'>
						<Button onClick={this.nextPhoto}>
							<FontAwesomeIcon icon='angle-double-right' />
						</Button>
					</CardBody>
				</Card>
			</Col>
		</div>
			;

		const checkView = loadingTime === true ? 
			viewPhoto 
			: 
			<div className='Loading'>
	          <div className='Spinner'>

	          </div>
	        </div>
			;


 		return(
			<div className='Dashboard'>
				<Container>
					<Row>
						<Col lg='6' md="8" sm='8' xs='12' className='mx-auto'>
							<Card className='mb-3'>
								<CardBody>
									<Form onSubmit={this.getPhoto} >
										<Row form>
											<Col md='9' sm='8'>
													<FormGroup>
														<Input type='text' value={search} name="keyword" id="search" onChange={this.onChange}/>
													</FormGroup>
												</Col>
											<Col md='3' sm='4'>
												<FormGroup>
													<Button block disabled={!enabled}> Search </Button>
												</FormGroup>
											</Col>
										</Row>
									</Form>
								</CardBody>
							</Card>
						</Col>
					</Row>
					<Row>
						{checkView}
					</Row>
				</Container>		
			</div>
			)
		
	}
}
