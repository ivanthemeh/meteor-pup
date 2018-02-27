import React from 'react';
import { Button, Col, Grid, Row } from 'react-bootstrap';
import { FormExample } from '../../components/ContactForm/ContactForm';

import './Index.scss';

const Index = () => (
  <div className="Index no-padding">
    <div className="pimg1">
      <div className="overlay"></div>
      <div className="ptext">
        <span className="border">
          <h1>ICON COMMUNICATION SERVICES</h1>
          <h2>Serving Clearwater & Bay Area<br />For Over 30 Years!</h2>
          <Button bsStyle="primary">Read More</Button>
        </span>
      </div>
    </div>
    <section className="section section-light">
      <Grid>
        <Row>
          <Col xs={6}>
            <h1>Over 30 Years of Excellent Service and Support.</h1>
            <h3>We specialize in providing Telecommunications Systems, as well as Voice & Data Cabling for businesses throughout Southwest and Central Florida. We provide services for clients in a variety of industries, from our offices in Sarasota and St.Petersburg.</h3>
            <br /><img src="/img/call-center.jpg" alt="clearwater iconcs callcenter setup" width="100%" />
            <p><br />Diversified Telecom Services sells, services, and maintains key systems, voice/data switches, and peripheral equipment. From our inception, it has been our mission to build our customer base on our reputation for service and our ability to respond to our customers’ service requests.
            Diversified Telecom Services Inc. is a customer-driven and results-oriented telecommunications company. Our experienced staff is ready to assist you with all phases of planning, design, installation and maintenance for data and voice systems.</p>
          </Col>
          <Col xs={6}>
            <h1>Our Solutions</h1>
            <span className="fa-lg"><span className="glyphicon glyphicon-phone-alt fa-4x"></span> <strong>System Installation</strong></span><br />
            We specialize in the installation and maintenence of telephone systems. Our Brands include: Samsung, Star2Star and Nortel
            <h1></h1>
            <span className="fa-lg"><span className="glyphicon glyphicon-globe fa-4x"></span> <strong>Cabling and VoIP Solutions</strong></span><br />
            Advanced Structured Cabling Solutions to fit the needs of small, medium, and large businesses. Also Internet based phone systems - Voice IP (VoIP) options available.
            <h1></h1>
            <span className="fa-lg"><span className="glyphicon glyphicon-move fa-4x"></span> <strong>Consulting Services</strong></span><br />
            Consulting Services include design, implementation, and support for your complete network infrastructure. Together we will setup the perfect system optimized for your unique needs.
            <h1></h1>
            <span className="fa-lg"><span className="glyphicon glyphicon-phone fa-4x"></span> <strong>Customer Service</strong></span><br />
            We make sure our services are available for a broad range of hardware and software products and we work with you to fulfill your businees needs.
            <h1></h1>
          </Col>
          <Col xs={12}>
            <h1></h1>
            <Col xs={3} xsOffset={2}>
            <img src="/img/nortel.png" alt="" style={{width: '60%'}}/>
            </Col>
            <Col xs={3}>
            <img src="/img/samsung.png" alt="" style={{width: '60%'}}/>
            </Col>
            <Col xs={3}>
            <img src="/img/Star2Star.png" alt="" style={{width: '60%'}}/>
            </Col>
          </Col>
        </Row>
      </Grid>
      <h1></h1>
    </section>
    <div className="pimg2">
      <div className="ptext">
        <span className="border">
          <h1 className="text-center">Featured Products</h1>
          <ul className="col-xs-12">
            <li className="col-xs-4 text-center">Samsung iDCS
                <img src="http://www.dtsoffice.com/media/k2/items/cache/fc1da7257992fc36032e11db3df7a664_XL.jpg" alt="" width="100%" />
            </li>
            <li className="col-xs-4 text-center">Samsung iDCS
                <img src="http://www.dtsoffice.com/media/k2/items/cache/fc1da7257992fc36032e11db3df7a664_XL.jpg" alt="" width="100%" />
            </li>
            <li className="col-xs-4 text-center">Star2Star Starbox 2250
                <img src="http://www.dtsoffice.com/media/k2/items/cache/fc1da7257992fc36032e11db3df7a664_XL.jpg" alt="" width="100%" />
            </li>
            <br />
          </ul>
        </span>
      </div>
    </div>
    <section className="section section-dark">
      <h1>Section Two</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptatum aut, esse tenetur iusto vel officia, aperiam officiis excepturi porro, mollitia suscipit. Quibusdam perferendis labore optio, repellat amet facilis in delectus consequuntur aut dignissimos voluptates vel possimus culpa asperiores dolorem? Aliquam, quia, temporibus! Fugiat, molestias, porro assumenda optio, impedit molestiae, esse nulla laborum ipsum sint illo! Est itaque reiciendis et, necessitatibus cumque debitis neque temporibus nulla inventore. Exercitationem cupiditate molestiae sapiente nisi similique sunt ad vel aut quod quas odio non repellat reiciendis, atque distinctio, asperiores numquam. Molestias alias quam eligendi ut temporibus deleniti aut perferendis iure. Et, similique, totam.
      </p>
    </section>
    <div className="pimg3">
      <div className="ptext">
        <span className="border">
          {/* Parallax Website */}
        </span>
      </div>
    </div>
    <section className="section section-light">
      <Col xs={6} xsOffset={3}>
        <h1>Get in touch with us</h1>
        <h3>Find out how we can help you create the best telecommunication network for your business. A Project Consultant will contact you to discuss your project in detail and provide you with a quote.</h3>
        <FormExample />
      </Col>
    </section>
    <div className="pimg2">
      <div className="ptext">
        <span className="border">
           {/* Parallax Website */}
        </span>
      </div>
    </div>
  </div>
);

export default Index;
