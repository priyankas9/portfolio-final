import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import ContactsIcon from '@mui/icons-material/Contacts';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import TypeWriter from "../Typewriter";
const Contact = () => {
  const typeWriter = [" Contact me on any of the platforms"];
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));
    return (
        <>
        
<div class="container mt-4 mb-10 px-6 mx-auto bg-pink-50">

  <section class=" text-gray-800">
  <div class="flex justify-start">
  <div class="text-start lg:max-w-3xl md:max-w-xl">
    <h2 class="text-3xl font-semibold mb-10 px-6 font-serif">Contact</h2>
  </div>
</div>

<h1 class="text-center mb-10 text-lg font-serif font-thin inline-flex ml-96 px-48" >Want to get in touch?<p className="text-orange-600 ml-2"> <TypeWriter data={typeWriter} /></p></h1>
<div class="flex flex-wrap justify-center"> 
  <div class="flex items-center space-x-4">
    <div class="p-4 bg-yellow-800 rounded-md shadow-md w-14 h-14 flex items-center justify-center mr-8 ">
    <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Email</Typography>
            <em>shakyap375@gmail.com</em> 
          </React.Fragment>
        } arrow placement="top"
        >
        <button className="relative">
      
      <MailOutlinedIcon className="text-white hover:animate-spin-slow"/>
      </button>

      </HtmlTooltip>
      
    </div>
    {/* <div class="text-left">
      <p class="font-bold">Email</p>
      <p class="text-gray-500">shakyap375@gmail.com</p>
    </div> */}
  </div>
  <div class="flex items-center space-x-4">
 
    <div class="p-4 bg-yellow-800 rounded-md shadow-md w-14 h-14 flex items-center justify-center mr-8">
    <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Phone Number</Typography>
            <em>9864831412</em> 
          </React.Fragment>
        } arrow placement="top"
      >
        <button className="relative">
  <ContactsIcon className="text-white hover:animate-spin-slow" />
</button>
     
     </HtmlTooltip>
    </div>
    
    {/* <div class="text-left">
      <p class="font-bold">Phone Number</p>
      <p class="text-gray-500">9864831412</p>
    </div>  */}
  </div>
  <div class="flex items-center space-x-4">
    <div class="p-4 bg-yellow-800 rounded-md shadow-md w-14 h-14 flex items-center justify-center mr-8">
    <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Github</Typography>
            <em>priyankas9</em> 
          </React.Fragment>
        }
        arrow placement="top"
      >
        <a href='https://github.com/priyankas9'>
        
      <GitHubIcon className="text-white hover:animate-spin-slow"/>
      </a>
      </HtmlTooltip>
    </div>
    {/* <div class="text-left">
      <p class="font-bold">Github</p>
      <p class="text-gray-500">priyankas9</p>
    </div> */}
  </div>
  <div class="flex items-center space-x-4">
    <div class="p-4 bg-yellow-800 rounded-md shadow-md w-14 h-14 flex items-center justify-center ">
    <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">LinkedIn</Typography>
            <em>Priyanka Shakya</em> 
          </React.Fragment>
        } arrow placement="top"
      >
        <a href='https://www.linkedin.com/in/priyanka-shakya-12a00824b/'>
        <LinkedInIcon className="text-white hover:animate-spin-slow"/>
        </a>
     
      </HtmlTooltip>
    </div>
    {/* <div class="text-left">
      <p class="font-bold">LinkedIn</p>
      <p class="text-gray-500">Priyanka Shakya</p>
    </div> */}
  </div>
</div>



  </section>
 

</div>

        </>
    )
}
export default Contact;