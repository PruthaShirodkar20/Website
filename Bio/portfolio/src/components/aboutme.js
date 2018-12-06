import React ,{ Component}from 'react';

import profile_image from './profile_image.jpeg';
import {Grid,Cell} from 'react-mdl';




class AboutMe extends Component {
  render() {
    return (
    <div style ={{width:'100%',margin :'auto'}}>
			<Grid className="headerStyle">
			<Cell col={12}>
			<img 
				src={profile_image} alt="prutha"
				alt="prutha"
				className="prutha-image"/>
			< div className="position-data">
				<h1> Full Stack Web Developer | Software Developer </h1>
				<p className="position-data-content">HTML/CSS |BOOTSTRAP| REACTJS |ANGULAR5 |SPRINGBOOT| JAVA 8| PYTHON</p>
			
			<div className="social-media-links">
			<a href ="https://www.linkedin.com/in/pruthashirodkar/" rel="noopener noreferrer" target="_blank">
				<i className="fa fa-linkedin-square" aria-hidden="true" />
			</a>
			<a href ="https://github.com/PruthaShirodkar20" rel="noopener noreferrer" target="_blank">
				<i className="fa fa-github-square" aria-hidden="true" />
			</a>
			<a href ="https://www.youtube.com/watch?v=AJ35wacwNJU&feature=youtu.be" rel="noopener noreferrer" target="_blank">
				<i className="fa fa-youtube-square" aria-hidden="true" />
			</a>
			</div>	

			</div>
			</Cell>
			</Grid>
		</div>
    );
  }
}

export default AboutMe;
