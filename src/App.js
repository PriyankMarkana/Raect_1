
import './App.css';
import asset0 from './image/asset 0.svg';
import white from './image/white.svg';
import asset2 from './image/asset 10.webp';
import  Android  from './image/_0045_Android.webp';
import  VFX from './image/_0057_4_VFX.webp';
import  laravel from './image/laravel.jpg';
import  app from './image/app.webp';
import  lom from './image/lom.webp';
import  busi from './image/businees.webp';
import  cdmi from './image/asset 29.jpeg';
import  student from './image/happy-students.webp';
import  cav from './image/asset 39.png';
import  nilay from './image/asset 30.jpeg';
import  f1 from './image/f_2.png';
import  f2 from './image/why-choose.png';
import  f3 from './image/full.png';
import  f4 from './image/f_3.png';
import  f5 from './image/f_4.png';
import  f6 from './image/f_5.png';
import  a from './image/asset 40.png';
import  a2 from './image/asset 41.png';
import  a3 from './image/asset 42.png';
import  a4 from './image/asset 43.png';
import  a5 from './image/asset 44.png';
import  a6 from './image/asset 45.png';

import { AiOutlineMail} from "react-icons/ai";
import { FaCertificate,FaGooglePlusG, FaInstagram,FaYoutube,FaWhatsapp,FaChevronDown,FaHandPointRight,FaUniversity  } from "react-icons/fa";
import { FaLinkedin,FaArrowRight } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter} from "react-icons/io";
import { IoStarSharp,IoStarHalf} from "react-icons/io5";
import { PiStudentFill,PiNotePencil,PiChalkboardTeacher,PiEnvelopeOpenFill} from "react-icons/pi";
import { BiSolidQuoteRight } from "react-icons/bi";





function App() {
  return (
    <div className="Main">
      {/*--------------- top_info start ---------------------*/}
        <div className="top_info">
          <div className="container">
              <div className="d-flex">
                <div className="d-flex">
                  <div className="d-flex left_info">
                  <i className="icon"> <AiOutlineMail></AiOutlineMail></i>
                    <p>info@cdmi.in </p>
                  </div>
                  <div className="d-flex">
                    <FaCertificate className="icon"></FaCertificate>
                    <p> Verify Certificate </p>
                  </div>
                </div>
                <div className="center">
                  <p>HAVE ANY QUESTION ? +91 90333 16003</p>
                </div>
                <div className="d-flex right_info">
                    <i><TiSocialFacebook /></i>
                    <i><IoLogoTwitter /></i>
                    <i><FaGooglePlusG /></i>
                    <i><FaLinkedin /></i>
                    <i><FaInstagram /></i>
                    <i><FaYoutube /></i>
                    <i><FaWhatsapp /></i>
                </div>
              </div>
          </div>
        </div>
      {/*--------------- top_Info End --------------------*/}
      {/*--------------- Nav Start --------------------*/}
      <nav className="nav">
        <div className="container">
          <div className="d-flex">
            <div className="logo">
              <img src={asset0} style={{width:"100%"}}></img>
            </div>
            <ul className="Main_menu">
              <li style={{color:"rgb(255, 188, 6)"}}>HOME</li>
              <li>COURSES</li>
              <li>ACTIVITIES <i><FaChevronDown /></i></li>
              <li>BLOG</li>
              <li>KNOW US <i><FaChevronDown /></i></li>
              <li>GET IN TOUCH</li>
              <li>STUDENT ZONE <i><FaChevronDown /></i></li>
            </ul>
          </div>
        </div>
      </nav>
      {/*--------------- Nav End --------------------*/}

      {/*--------------- Img start --------------------*/}
     <div className="Img">
        <img src={asset2} style={{width:"100%"}}></img>
     </div>
      {/*--------------- Img End --------------------*/}

      {/* ----creative courses start ---------*/}
      <section className='course'>
        <div className='container'>
          <div className="title">
            <div className='flex'>
              <span></span>
              <p>CREATIVE COURSE</p>
            </div>
            <h1>OFFERED COURSES</h1>
          </div>
          <div className="grid">
            <div className='grid_box'>
              <div className="img">
                <img src={Android}></img>
              </div>
              <div className='nm'>Development Courses</div>
              <hr></hr>
              <div className='d-flex'>
                <div className='icons'>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarHalf /></i>
                  </div>
                  <div>
                    <input type='submit' value="Know More..!"></input>
                  </div>
            </div>
            </div>
            <div className='grid_box'>
              <div className="img">
                <img src={VFX}></img>
              </div>
              <div className='nm'>Design Courses</div>
              <hr></hr>
              <div className='d-flex'>
                <div className='icons'>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarHalf /></i>
                  </div>
                  <div>
                    <input type='submit' value="Know More..!"></input>
                  </div>
            </div>
            </div>
            <div className='grid_box'>
              <div className="img">
                <img src={laravel}></img>
              </div>
              <div className='nm'>Programming IT</div>
              <hr></hr>
            <div className='d-flex'>
              <div className='icons'>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarHalf /></i>
                </div>
                <div>
                  <input type='submit' value="Know More..!"></input>
                </div>
            </div>
            </div>
            <div className='grid_box'>
              <div className="img">
                <img src={app}></img>
              </div>
              <div className='nm'>Trendy Courses</div>
              <hr></hr>
              <div className='d-flex'>
                <div className='icons'>
                   <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarHalf /></i>
                  </div>
                  <div>
                    <input type='submit' value="Know More..!"></input>
                  </div>
            </div>
            </div>
            <div className='grid_box'>
              <div className='img'>
                <img src={lom}></img>
              </div>
              <div className='nm'>Civil-Mech. Engineering</div>
              <hr></hr>
              <div className='d-flex'>
                <div className='icons'>
                   <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarHalf /></i>
                  </div>
                  <div>
                    <input type='submit' value="Know More..!"></input>  
                  </div>
            </div>
            </div>
            <div className='grid_box'>
              <div className="img">
                <img src={busi}></img>
              </div>
              <div className='nm'>Business Development</div>
              <hr></hr>
              <div className='d-flex'>
                <div className='icons'>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarSharp /></i>
                    <i><IoStarHalf /></i>
                  </div>
                  <div>
                   <input type='submit' value="Know More..!"></input>  
                  </div>
                </div>
              </div>
          </div>
          <section className='view'>View All Courses <i><FaArrowRight /></i></section>
        </div>
      </section>
      {/* ----creative courses End -----------*/}


      {/* ----About Us Start -----------*/}
        <div className='about'>
          <div className='d-flex'>
            <div className='left_side'>
              <div className='aboutflex'>
                    <span></span>
                    <p>ABOUT US</p>
                  </div>  
                  <h3>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h3>
                  <p className='info'>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat
                      for web design, Game design,Mobile App Development, Game Development ,Video Editing & 
                      All types of IT Courses with 9 years of full-fledged, result-oriented training experience.
                      We stepped in the market in 2014 with the goal to help students, working professionals and other
                      interested candidates get that dream job or open that desired freelance business in some of
                      the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses 
                      and organizations by providing work-ready professionals who can contribute greatly to their 
                      success. Since then, we have worked hard to achieve this goal and dedicated our time and 
                      resources to train students extensively.</p>
                  <section className='view'>Enroll Now..!<i><FaArrowRight /></i></section> 
            </div>
            <div className='right_side'>
                <img src={cdmi}></img>
            </div>
          </div>
        </div>
      {/* ----About Us End -----------*/}

      {/*--------- student start -----------------*/}
      <section className='student'>
        <div className='container'>
          <div className='flex'>
            <div className='std_box'>
              <div className='icon'>
                <i><PiStudentFill /></i>  
              </div>
              <p style={{fontSize :"30px",color:"white",fontWeight:"600"}}>18000+</p>
              <p style={{fontWeight:"700"}}>HAPPY STUDENTS</p>
            </div>
            <div className='std_box'>
              <div className='icon'>
                <i><PiNotePencil /></i>  
              </div>
              <p style={{fontSize :"30px",color:"white",fontWeight:"600"}}>10+</p>
              <p style={{fontWeight:"700"}}>CERTIFICATION APPROVAL</p>
            </div>
            <div className='std_box'>
              <div className='icon'>
                <i><PiChalkboardTeacher /></i>  
              </div>
              <p style={{fontSize :"30px",color:"white",fontWeight:"600"}}>100+</p>
              <p style={{fontWeight:"700"}}>CERTIFIED TEACHERS</p>
            </div>
            <div className='std_box'>
              <div className='icon'>
                <i><PiEnvelopeOpenFill /></i>  
              </div>
              <p style={{fontSize :"30px",color:"white",fontWeight:"600"}}>12000+</p>
              <p style={{fontWeight:"700"}}>STUDENTS PLACED</p>
            </div>
          </div>
        </div>
      </section>
      {/* ----------student end ------------------------*/}

      {/* -----------silder start ----------*/}
      <section className='slider'>
        <div className='container'>
          <div className='d-flex'>
            <div className='left'>
              <div className='flex'>
                <span></span>
                <p>HAPPY STUDENTS</p>
              </div>
              <h1>ALUMNI SPEAK</h1>
              <div className='d-flex'>
                 <i><BiSolidQuoteRight /></i>
                 <div className='d-flex'>
                  <div><input type='submit' value="<"></input></div>
                  <div><input type='submit' value=">"></input></div>
                 </div>
              </div>
              <p className='text'>Trainers are good and very supportive.
                  creative multimedia institute provide lot 
                  of opportunities to get placed.I am happy to
                   joined creative multimedia institute.
              </p>
              <div className='flex1'>
                <div className='circle'>
                  <img src={nilay}></img>
                </div>
                <div className='content'>
                  <h4 style={{color :"#003366"}}>Nilay Rabadiya</h4>
                  <div className='d-flex'>
                    <p style={{color:"rgb(255, 188, 6)",marginRight:"4px"}}>CEO</p>
                    <p>@ Techtical Solution</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='right'>
                <img src={student}></img>
                <img src={cav} className='cav'></img>
            </div>
        </div>
        </div>
      </section>
      {/* -----------silder End ----------*/}

      {/*------- why choose creative start----- */}

      <section className='choose'>
        <div className='container'>
            <div className="title">
              <div className='flex'>
                <span></span>
                <p>READ OUR DIFFERENCE</p>
              </div>
              <h1>WHY CHOOSE CREATIVE</h1>
            </div>
            <div className='grid'>
              <div className='grid_box'>
                <img src={f2} style={{backgroundColor:"#F6475F"}}></img>
                <h2>Industry Experts As Trainers</h2>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
              <div className='grid_box'>
                <img src={f3} style={{backgroundColor:"#FFBC06"}}></img>
                <h2>Latest Curriculum</h2>
                <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
              </div>
              <div className='grid_box'>
                <img src={f1} style={{backgroundColor:"#B3D369"}}></img>
                <h2>Latest Technology</h2>
                <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
              </div>
              <div className='grid_box'>
                <img src={f4} style={{backgroundColor:"#554DA7"}}></img>
                <h2>Interview Assistance</h2>
                <p>We will be provided free upgradation for any newer version of the course you have.</p>
              </div>
              <div className='grid_box'>
                <img src={f5} style={{backgroundColor:"#4382FF"}}></img>
                <h2>Free Upgradation</h2>
                <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
              </div>
              <div className='grid_box'>
                <img src={f6} style={{backgroundColor:"#F94FA4"}}></img>
                <h2>Lifetime Support</h2>
                <p>We will provide you lifetime support on all the courses you learned from us.</p>
              </div>
            </div>
        </div>
      </section>
      {/*------- why choose creative end------- */}

      {/*------ student palcement start----- */}
      <section className='placement'>
        <div className='container'>
            <div className="title">
              <div className='flex'>
                <span></span>
                <p>STUDENT PLACEMENT</p>
              </div>
              <h1>OUR RECRUITMENT PARTNERS</h1>
            </div>
            <div className='flex2'>
              <img src={a}></img>
              <img src={a2}></img>
              <img src={a3}></img>
              <img src={a4}></img>
              <img src={a5}></img>
              <img src={a6}></img>
            </div>
            <h2>Our Demanded Course -</h2>
            <div className='grid'>
              <p>Video editing training institute in varachha</p>
              <p>Illustrator training in katargam</p>
              <p>solidworks training institute in Mota Varachha</p>
              <p>Python Training in Surat</p>
              <p>mechanical engineering training institute in varachha</p>
              <p>It training institute in in katargam</p>
              <p>Web development training institute in katargam</p>
              <p>flutter training institute in surat</p>
              <p>Best animation training course</p>
              <p>Video editing training institute in katargam</p>
              <p>Google sketchup civil training course</p>
            </div>
        </div>
      </section>
      {/*------ student palcement end----- */}

      {/*------ footer start-------------- */}
    <footer>
      <div className='container'>
        <div className='footer'>
            <div className='first'>
              <img src={white}></img>
              <p>Creative Design and Multimedia Institute is leading
                 computer training institute in surat.
                  We offers government approved computer training courses in Surat.
              </p>
              <h3>FOLLOW US ON</h3>
              <div className="flex first_info">
                    <i><TiSocialFacebook /></i>
                    <i><IoLogoTwitter /></i>
                    <i><FaGooglePlusG /></i>
                    <i><FaLinkedin /></i>
                    <i><FaInstagram /></i>
                    <i><FaWhatsapp /></i>
                    <i><FaYoutube /></i>
              </div>
            </div>
            <div className='second'>
                <p>FEATURE LINKS</p>
                <div className='content'>
                  <p><i><FaHandPointRight /></i>About Us</p>
                  <p><i><FaHandPointRight /></i>Blogs</p>
                  <p><i><FaHandPointRight /></i>Join Us</p>
                  <p><i><FaHandPointRight /></i>Company Login</p>
                  <p><i><FaHandPointRight /></i>Certificate Verification</p>
                </div>
            </div>
            <div className='third'>
              <p>CONTACT US</p>
              <p style={{color :"rgb(255, 188, 6)",fontSize:"17px"}}>HEAD OFFICE - YOGICHOWK</p>
              <p className='add'>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
              <div className='flex'>
                <p>Mo:-</p>
                <p style={{color :"rgb(255, 188, 6)"}}>+91 90333 16003</p>
              </div>
              <p style={{color :"rgb(255, 188, 6)",fontSize:"18px"}}>OTHER BRANCHES</p>
              <div className='content'>
                  <p><i><FaUniversity /></i>Katargam</p>
                  <p><i><FaUniversity /></i>Mota Varachha</p>
                  <p><i><FaUniversity /></i>Adajan</p>
                  <p><i><FaUniversity /></i>Navsari</p>
              </div>
            </div>
        </div>
      </div>
    </footer>
    <div className='footer_bottom'>
      <div className='container'>
       <p>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
      </div>
    </div>
      {/*------ footer end---------------- */}


    </div>
  );
}

export default App;
