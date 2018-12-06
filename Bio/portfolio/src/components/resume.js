import React, {Component} from 'react';
import profile_image from './profile_image.jpeg'
import {Grid,Cell,List,ListItemContent,ListItem} from 'react-mdl';
import Education from './education-details';
import Experience from './experience';


class Resume extends Component

{
render()
{
	return( 
		<div>
			<Grid>
				<Cell col ={4}>
				<div style ={{textAlign: 'center'}}>
				<img 
					src={profile_image} alt="prutha"
					alt="prutha"
					className="prutha-image"/>
				</div>
				<h2 style={{paddingTop: '2em'}} >Prutha Shirodkar </h2>
				<h4 style={{color:'grey'}}>Software Developer | Full Stack Developer</h4>
				<hr style={{borderTop:'3px solid #833fb2',width :'90%'}}/>
				<p> I am a Computer Science Graduate student . I am studying in UNC at Charlotte. I have a GPA of 3.65 /4 .
					<br></br>
					I am interested in Full Stack development projects . I have worked in Angular5 and Springboot. 
					I have also worked in Reactjs and Nodejs. 
					<br></br>
					I am also interested in seeking Software Development positions and I am proficient in Java and Python.
					<br></br>
					To add to it I have also worked on Data Visualization tools namely Tableau and XLMiner. 
				</p>
				<hr style={{borderTop:'3px solid #833fb2',width:'90%'}}/>
				<h5>Phone Number</h5>
				<p> +1 (704) 361-1270</p>
				<h5>Email ID</h5>
				<p>prutha20@gmail.com</p>
				<h5>Portfolio</h5>
				<p>myportfolio.com</p>
				<hr style={{borderTop:'3px solid #833fb2',width:'90%'}}/>
				
				</Cell>


				<Cell className="resume-right-col" col={8}>
				<div style ={{paddingLeft :'5em'}}>
				<h2 style ={{paddingTop:'2em'}}>EDUCATION </h2>
				<Education startYear ={2017}
				endYear={2018}
				schoolName="UNIVERSITY OF NORTH CAROLINA AT CHARLOTTE"
				schoolDescription="MASTER OF SCIENCE IN COMPUTER SCIENCE"
				/>


				<Education startYear ={2011}
				endYear={2015}
				schoolName="PUNE UNIVERSITY ,INDIA"
				schoolDescription="BACHELOR IN COMPUTER ENGINEERING"
				/>

				<h2 > EXPERIENCE </h2>
				<Experience startYear ={2015}
				endYear={2017}
				companyName="INFOSYS LTD., INDIA"
				jobPosition="SYSTEMS ENGINEER"
				jobDescription="
				•Worked in the Business Intelligence domain on a Database Management Project in the Support and Maintenance team in the Agile Development Environment
				•Worked on a Bank Database project using relational database MySQL and complex queries including triggers, procedures, and joins.
				•Responsibilities included successfully modifying the database structure and received an appreciation mail from the onsite team for the same.	
				•Monitored and debugged CRR, Solar, ESP scheduled jobs using the UNIX command line interface to ensure smooth functioning of the client application and reduced the defect rate by 50%. The job fixation was done using SAS technology.

				
"
				/>


				</div>

				</Cell>
			</Grid>
		</div>
	);


}

}
export default Resume;