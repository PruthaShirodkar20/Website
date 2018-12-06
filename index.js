const express =require('express')
const bodyParser=require('body-parser')
var nodemailer=require('nodemailer')
const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: false }))

app.post('/api/form', (req,res) =>
{
		nodemailer.createTestAccount((err,account) =>
		{

			const htmlEmail =	 `
				<h3>Contact Details</h3>
				<ul>
					<li> Name:  ${req.body.name}</li>
					<li> Email: ${req.body.email}</li>
				</ul>
				<h3>Message</h3>
					<p>${req.body.message}</p> `

			    console.log(req.body)

				let transporter =nodemailer.createTransport({
					host: 'smtp.ethereal.email',
    				port: 587,
    				secure : false,
    				auth: {
        				user: 'zl3x3uihmfpdh35y@ethereal.email',
        				pass: 'r6bufFMd2xdnfBKBst'
					},
					tls: {
						rejectUnauthorized : false
					}

				});

				let mailOptions={

					from :req.body.email,
					to : 'prutha20@gmail.com',
					subject:'New Message',
					text:req.body.message,
					html:htmlEmail

				}

				transporter.sendMail(mailOptions,(err, info) =>{

					if(err)
					{
						return console.log(err)
						
					}
					console.log("Message sent:%s", info.message)
					//console.log("Message URL: %s", nodemailer.getTestMessageURL(info))
					res.send(info)
				})


		})
})

const PORT =process.env.PORT || 3001


app.listen(PORT ,() =>
{
		console.log('Server listening on port',PORT);
})