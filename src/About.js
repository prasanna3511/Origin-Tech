import React from 'react'
import Shubham from './Shubham.jpg'
import anandkakade from './anandkakade.png'
import Randhirpatil from './Randhirpatil.png'
import Sachinkumbhar from './Sachinkumbhar.jpeg'
import Harshalpatil from './Harshalpatil.jpg'
import './About.css'
import linkdin from './linkdin.png'

function About(){
    return(
        <div className='aboutf'>
                
    <div class="about">
        <div class="inner-section">
            <h1>About Us</h1>
            <p class="text"><b>
                Origin Tech is a startup company . Started by Mr. Shubham Omase to make innovative highly reliable and easy to use , electronics & electrical products in different domains for e.g. IOT , healthcare , domestic , industrial , education , agriculture , etc.
                </b>
            </p>
            <div class="skills">
                <button>Contact Us</button>
            </div>
        </div>
    </div>
    <br/>

 
    <div class="wrapper">
        <h1>Our Team</h1>
        <div class="team">
         
          <div class="team_member">
            <div class="team_img">
              <img src={Shubham} alt="Team_image"/>
            </div>
            <b><h3>Mr. Shubham Omase</h3></b>
            <p class="role">Founder & CEO of Origin Tech.</p>
            <p>B.Tech in Elctronics and Telecommunication.</p>
            <p><a href="https://www.linkedin.com/in/shubham-omase-72aa72137/"><img alt="in"src={linkdin} class="linkdin"/></a></p>
          </div>

        
          <div class="team_member">
            <div class="team_img">
              <img src={anandkakade} alt="Team_img"/>
            </div>
            <h3>Dr. Anand Kakade</h3>
            <p class="role">Co-founder & CTO

            </p>
            <p>M.Tech and PhD from "Indian Institute of Technology, Kharagpur</p>
            <p><a href="https://www.linkedin.com/in/dr-anand-kakade-b4a70191/"><img alt="in"src={linkdin} class="linkdin"/></a></p>
            </div>
            
        
    	

      <div class="team1">
      
        <div class="team_member1">
          <div class="team_img1">
            <img src={Randhirpatil} alt="Team_img"/>
          </div>
          <h3>Mr. Randhir Patil</h3>
          <p class="role1">Head Marketing</p>
          <p>M.Tech in Electronics.

          </p>
          <p><a href="https://www.linkedin.com/in/randhir-patil-40003/"><img alt="in"src={linkdin} class="linkdin"/></a></p>
        </div>
      
        <div class="team_member1">
          <div class="team_img1">
            <img src={Sachinkumbhar} alt="Team_img" />
          </div>
          <h3>Mr. Sachin Kumbhar
          </h3>
          <p class="role1">Works in Origin Tech</p>
          <p>M.Tech Electrical Power Syatem from IIT , Kharagpur.</p></div>
         
        <div class="team_member1">
          <div class="team_img1">
            <img src={Harshalpatil} alt="Team_img" />
          </div>
          <h3>Mr. Harshal Patil</h3>
          <p class="role1">Works in Origin Tech</p>
          <p>M.E. in Electronics & Telecommunication.</p>
        </div>
      </div>
    </div>
  </div>
  


   
    <div class="wteam">
      <h4>Web Developers</h4>
    </div>
    <div class="t1">

    <div class="b1">
          <p>Vrushali Patil</p>
          <p><a href="https://www.linkedin.com/in/vrushali-vinayak-patil-0a61631a7/"><img alt="in"src={linkdin} class="linkdin"/></a></p>
      
      </div>

    <div class="b1">

          <p>Prasanna Joshi</p>
          <p><a href="https://www.linkedin.com/in/prasanna-joshi-0783a01b2/"><img alt="in"src={linkdin} class="linkdin"/></a></p>
      
      </div>
     
      


      <div class="b1">
          <p>Shreeya Paranjape</p>
          <p><a href="https://www.linkedin.com/in/shreeya-paranjape-8356091a3/"><img alt="in"src={linkdin} class="linkdin"/></a></p>
      </div>

      <div class="b1">
          <p>Soham Nanaware</p>
          <p><a href="https://www.linkedin.com/in/soham-nanaware-b47bb61b4/"><img alt="in"src={linkdin} class="linkdin"/></a></p>
      </div>

      <div class="b1">
          <p>Samad Pathan</p>
          <p><a href="https://www.linkedin.com/in/samad-pathan-9976271a3/"><img alt="in"src={linkdin} class="linkdin"/></a></p>
      </div>
      </div>

        </div>
    )
}

export default About;