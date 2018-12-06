import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import profile_image from './profile_image.jpeg'

class AcademicDetails extends Component

{
render()
{
	return( 
		<div style ={{width:'100%',margin :'auto'}}>
			<Grid>
			<Cell col={12}>
			<img 
				src={profile_image} alt="prutha"
				alt="prutha"
				className="prutha_image"/>
			
			</Cell>
			</Grid>

		</div>
	);


}

}
export default AcademicDetails;
