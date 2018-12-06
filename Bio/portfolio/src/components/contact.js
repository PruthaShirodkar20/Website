import React, {Component} from 'react';
import {Grid,Cell,List,ListItemContent,ListItem} from 'react-mdl';
import {Form,FormGroup,Input,Label,Button} from 'reactstrap';
import profile_image from './profile_image.jpeg';
import axios from 'axios';


class Contact extends Component
{
constructor(props){
	super(props)
	this.state={
		name:'',
		email:'',
		message:''
	};
	this.handleChange=this.handleChange.bind(this);
	this.handleSubmit=this.handleSubmit.bind(this);
}

handleChange = e => {
	this.setState({[e.target.name]:e.target.value})
}
async handleSubmit(e)
{
	e.preventDefault()
	alert('Message sent');
	const{name,email,message} =this.state
	const form =await axios.post('/api/form' ,
	{
		name,
		email,
		message
	}

	)		
}

render()
{
	return( 
		<div className="contact-list">
			<Grid className="contact-list-grid">
				<Cell col={6}>
					<h3>CONTACT DETAILS</h3>
					<img src={profile_image} 
					 alt="prutha"
					 style={{height:'200px',width:'200px'}}
				   	 className="prutha-image"/>
				   	 	<div className="contact-details-list">
				   	 		<List>
				   	 			 <ListItem>
				   	 			 <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
				   	 			 	<i className="fa fa-phone-square" aria-hidden="true"/>
				   	 			 	     (704) 361-1270
				   	 			 </ListItemContent>
				   	 			 </ListItem>

				   	 			 <ListItem>
				   	 			 <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
				   	 			 	<i className="fa fa-envelope" aria-hidden="true"/>
				   	 			 	     prutha20@gmail.com
				   	 			 </ListItemContent>
				   	 			 </ListItem>

				   	 			 <ListItem>
				   	 			 <ListItemContent style={{fontSize:'20px',fontFamily:'Anton'}}>
				   	 			 	<i className="fa fa-skype" aria-hidden="true"/>
				   	 			 	     prutha20
				   	 			 </ListItemContent>
				   	 			 </ListItem>
				   	 			</List>
				   	 	</div>
				</Cell>


				<Cell col={6}>
				<Form style ={{width :'400px'}}onSubmit={this.handleSubmit}>
				<FormGroup>
				<h3> FEEL FREE TO CONNECT ! </h3>
				<br></br>
				<br></br>
				<Label for ="name">NAME     : </Label>
				<Input type="text" name="name" onChange={this.handleChange} />
				<br></br>
				<br></br>

				<Label for ="email">EMAIL ID: </Label>
				<Input type="email" name="email" onChange={this.handleChange} />
				<br></br>
				<br></br>

				<Label for ="message"> MESSAGE : </Label>
				<Input type="textarea" name="message" onChange={this.handleChange} />
				<br></br>
				<br></br>

				<Button> Submit </Button>
				</FormGroup>
				</Form>
				</Cell>
			</Grid>
		</div>
	);


}

}
export default Contact;