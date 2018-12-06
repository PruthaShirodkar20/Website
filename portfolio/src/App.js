import React, { Component } from 'react';
import {Layout, Header, Navigation, Drawer,Content} from 'react-mdl';
import './App.css';
import RouteData from './components/routes';
import AcademicDetails from './components/academic-details';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
    <Layout>
        <Header className ="headerStyle" title ={<Link style ={{textDecoration: 'none',color:'white'}}
        to="/">Prutha Shirodkar</Link>} scroll>
            <Navigation>
                               <a href="/projects">Projects</a>
                <a href="/resume">Resume</a>
                <a href="/contact">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Prutha Shirodkar">
            <Navigation>
                
                <a href="/projects">Projects</a>
                <a href="/resume">Resume</a>
                <a href="/contact">Contact</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <RouteData/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
