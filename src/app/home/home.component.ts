import { Component } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  

  html_css=[
    {name:"Coca-Cola Landing Page",imgUrl:"assets/project-1.webp", description:"Coca-Cola Landing Page: A visually engaging HTML/CSS project showcasing innovative design and interactivity for a refreshing online experience.", projectUrl:"https://github.com/sahil3754/Coca-Cola-Landing-Page-Frontend-Project-"},
    {name:"Beauty Ui Landing Page",imgUrl:"assets/project-2.webp", description:"Beauty UI Landing Page project combines elegant HTML/CSS design to create a visually stunning and user-friendly web experience.", projectUrl:"https://github.com/sahil3754/Modern-Landing-Page-Frontend-Project-"},
    {name:"Nike Landing Page",imgUrl:"assets/project-3.webp", description:"Immersive Nike Landing Page project showcasing HTML/CSS mastery for an engaging, dynamic, and visually captivating online experience.", projectUrl:"https://github.com/sahil3754/Nike-Landing-Page-Frontend-Project-"},
  ]


  webApp = [

    {name:"YouTube Clone",imgUrl:"assets/webApp-1.webp", description:"Web app replicating YouTube's features for seamless video sharing, streaming, and social interaction, ensuring an immersive user experience.", projectUrl:"https://github.com/sahil3754/YouTube-Clone"},
    {name:"Ecommerce - Shoppers",imgUrl:"assets/webApp-2.webp", description:"Ecommerce - Shoppers: An intuitive web app for seamless online shopping, offering a diverse product range and secure, user-friendly transactions.", projectUrl:"https://github.com/stars/sahil3754/lists/e-commerce-web-application"},

  ]

  pythonProject = [
    {name:"Student Needs", imgUrl:"assets/python-1.webp", description:"Addressing educational requirements, enhancing student experiences, and promoting effective learning through Python-based solutions and innovations.", projectUrl:"https://github.com/sahil3754/Student-Needs-Python-Project-"},
  ]


  certificates = [
    {name:"Java Full Stack Developer", imgUrl:"assets/Certificates/javaFSD.webp", url:"https://olympus1.mygreatlearning.com/certificate/TOZHPJKJ",description:"Java Full Stack Developer program. Demonstrating proficiency in both front-end and back-end technologies, this individual has exhibited a deep understanding of Java programming, web development, databases, and other relevant technologies."},
    {name:"Problem Solving", imgUrl:"assets/Certificates/problem-solving.webp", url:"https://www.hackerrank.com/certificates/e989d45ebba9", description:"Demonstrating a keen ability to analyze complex issues, devise effective solutions, and implement them successfully, This certificate signifies their proficiency in problem-solving and their valuable contribution to their organization."},
    {name:"Python", imgUrl:"assets/Certificates/python.webp", url:"https://www.hackerrank.com/certificates/de2619b21107", description:" successfully demonstrated proficiency in Python programming. This certification acknowledges the completion of a comprehensive program, showcasing adept knowledge and practical skills in Python, including data manipulation, scripting, and application development."},
  ]
  

  clients = [
    {name:"Ashish Kushwaha", projectName:"Loan Angular Application", feedback:"The user interface is incredibly intuitive, making the loan application process smooth and efficient. The layout is clean, the navigation is seamless, and the overall design is both modern and user-friendly."},
    {name:"Rahul Sharma", projectName:"Spring Boot Rest API for Ecommerce", feedback:"Your implementation showcases an impressive level of efficiency, reliability, and scalability. The API design is intuitive and well-structured, making it incredibly easy to integrate and work with."},
    {name:"Jiya Sahu", projectName:"Hospital Management", feedback:"Your attention to detail, responsiveness to our needs, and the user-friendly interface you've created have greatly improved our hospital's operations. Thank you for your dedication and expertise in making this project a success!"},
  ]

  skills = [
        
  ]
  constructor(){
  
  }

  ngOnInit(){
    gsap.to(".htitle h1", {
      transform: "translateX(-100%)",
      // x:"-100",
      // yoyo:true,
      repeat: -1,
      // scale:1,
      duration: 10, ease: 'none',
  
  })
  }
}
