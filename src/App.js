import React from 'react'
//tools
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//component
import { Dashboard } from './Components/Content/Dashboard'
import { TopNav } from './Components/Layout/TopNav'
import { SideNav } from './Components/Layout/SideNav'
import { Footer } from './Components/Layout/Footer'
//reactstrap
import { Jumbotron, Container, Row, Col, Card, CardBody } from 'reactstrap'
//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faBars, faCameraRetro, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faGithub, faGoogle,  faFacebook,  faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';  
const API_KEY = "a9f020ade0a6ba6d2ba84ba91345fb4e73fa64ad1c0b6221233b55c6f12c3b29"
library.add(faDownload, faBars, faCameraRetro,faAngleDoubleRight,  faGithubAlt, faGithub, faGoogle,  faFacebook,  faTwitter, faInstagram )

class App extends React.Component{
  state = {
    loading: false
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        loading: !this.state.loading
      })
    }, 3000)
  }

  render(){
    const { loading } = this.state
    if(loading){
      return(
        <BrowserRouter>
          <div className='App'>
            <TopNav />
            <SideNav />
            <div className='backgroundSearch'>
              <div className='backgroundImage'>
              </div>
            </div>
            <div className='Content'>
              <Switch>
                <Route path='/' component={Dashboard} exact />
              </Switch>
            </div>
            <Footer />
          </div>

        </BrowserRouter>
      )
    }else{
      return(
        <div className='Loading'>
          <div className='Spinner'>

          </div>
        </div>
      )
    }
    
  }
}

export default App