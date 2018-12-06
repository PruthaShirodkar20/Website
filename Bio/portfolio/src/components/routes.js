import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AcademicDetails from './academic-details';
import AboutMe from './aboutme';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';



const RouteData= () =>
(
	<Switch>
		
		<Route exact path = "/" component ={AboutMe}/>
		<Route path = "/resume" component ={Resume}/>
		<Route path = "/contact" component ={Contact}/>
		<Route path = "/projects" component ={Projects}/>
	</Switch>
)
export default RouteData;