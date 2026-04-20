const sgMail=require('@sendgrid/mail');
sgMail.setApiKey('')

const sendMail=async(email)=>{
    const msg={
        to:email,
        from:'giriraj.thanvi@mindbowser.com',
        subject:'API Testing',
        text:'Api testing',
        html:"<h1>Api Tested</h1>",
    }
    try{
        await sgMail.send(msg);
        console.log('Email sent successfully')
    }
    catch(error)
    {
       console.error(error) 
    }
}

module.exports=sendMail;