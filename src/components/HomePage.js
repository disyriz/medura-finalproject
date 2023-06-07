import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../components/style.css';
import 'bootstrap/dist/css/bootstrap.css';

class HomePage extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#c6c6c6" }}>
     <div className="container-fluid">
     RiseUpCV
       <div className="collapse navbar-collapse" id="navbarNav">
         <ul className="navbar-nav ms-auto">
           <li className="nav-item">
             <a className="nav-link" href="/">
               Login
             </a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/Signup">
               Register
             </a>
           </li>
         </ul>
       </div>
     </div>
   </nav>
     <div className="landing-page">
       <header className="jumbotron">
         <div className="container">
           <h1>Resume and Cover Letter Enhancement: <br /> Maximize Your Professional Potential</h1>
           <p>Join our community and boost your career with our professional resume and cover letter services.</p>
           <a href="/Explore" className="btn btn-primary btn-lg">Explore Now</a>
         </div>
       </header>
       <section className="container">
         <h2>Why Choose Us</h2>
         <p>
         We understand that every individual is unique, and that's why we take
          a personalized approach to our services. When you choose us, you can expect:</p>
       </section>
       <section id="courses" className="container">
         <div className="row">
           <div className="col-md-4">
             <div className="card">
               <img src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-9d3697f/wp-content/themes/thrive-agency/images/web-design-img3.svg" className="card-img-top" alt="Course 1" />
               <div className="card-body">
                 <p className="card-text">Customized solutions tailored to your specific needs</p>
                 <a href="#" className="btn btn-primary">Learn More</a>
               </div>
             </div>
           </div>
           <div className="col-md-4">
             <div className="card">
               <img src="https://digitaltimesavers.com/wp-content/uploads/2021/06/Top-Five-Benefits-of-a-Tailored-Marketing-and-Advertising-Strategy-For-Your-Business-what-is-a-tailored-marketing-strategy-Digital-Time-Savers-1024x569.png" className="card-img-top" alt="Course 2" />
               <div className="card-body">
                 <p className="card-text">Experienced writers with expertise </p>
                 <a href="#" className="btn btn-primary">Learn More</a>
               </div>
             </div>
           </div>
           <div className="col-md-4">
             <div className="card">
               <img src="https://images.template.net/83871/free-digital-marketing-vector-cpm50.jpg" className="card-img-top" alt="Course 3" />
               <div className="card-body">
                 <p className="card-text">A collaborative process to ensure your satisfaction</p>
                 <a href="#" className="btn btn-primary">Learn More</a>
               </div>
             </div>
           </div>
         </div>
       </section>
       <section className="container">
         <h2>About Us</h2>
         <p>
         Welcome to our website! We are dedicated to helping professionals like you maximize their potential by providing
          top-notch resume and cover letter services. Our team of experienced writers will work closely with you to highlight your
           skills, experiences, and accomplishments that are most relevant to your desired job. We understand the importance of a 
           well-structured and tailored resume,
          and we ensure that your application materials stand out from the competition..</p>
       </section>

       <footer className="footer bg-dark text-light py-3 mt-5">
         <Container>
           <Row>
             <Col>
               <p className="text-center">&copy; 2023 Your Website Name. All rights reserved.</p>
             </Col>
           </Row>
         </Container>
       </footer>
     </div>
   </div>
    );
  }
}

export default HomePage;
