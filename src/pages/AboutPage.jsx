import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        At <b>Agri-Tech</b>, we’re passionate about connecting farmers, buyers, and the agricultural community. Our mission is simple: Empower farmers by eliminating intermediaries and ensuring that <b>high-quality farm products</b> reach your doorstep directly from the source.
<br />
<br />
<c><b><h4>What Sets Us Apart?</h4></b></c>

<br />
<b>Direct Sourcing:</b> We work directly with farmers, bypassing middlemen. This not only benefits farmers but also ensures that you receive authentic produce.
<br />
<b>Multilingual Support:</b> Our platform is accessible in multiple languages, making it easier for farmers and buyers to communicate and trade seamlessly.
<br />
<b>Quality Assurance:</b> We rigorously inspect and certify every product to maintain the highest standards.
Join us in supporting local farmers and enjoying farm-fresh goodness. Together, let’s cultivate a sustainable future! 🌱
</p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Fruits</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/5418661/pexels-photo-5418661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Vegtables</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Grains</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://media.istockphoto.com/id/1297005217/photo/farmer-pouring-raw-milk-into-container.jpg?s=2048x2048&w=is&k=20&c=RAbcZRk1SeHRhkAhlKufOsUqJ2NUkIr-RXJ7osVO8-s=" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Dairy Products</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage