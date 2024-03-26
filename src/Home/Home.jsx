import React from 'react';
import { AllNavs } from './AllNavs';
import { Footer } from '../Products/Footer';
import './Home.css';
import Banner from '../image/Banner.png';
import Beer from '../image/Beer.png'
import Wine from '../image/Wine.png'
import whiskey from '../image/whiskey.png'
// import { Beer } from '../Products/Beer';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='Home'>
      <AllNavs />
      <div className='container-fluid back'>
        <div className='row'>
          <div className='col-lg-6 text-center text-lg-left mt-5'>
            <div className="page-title">
              <h1 className="text-black fw-bold font-weight-bold mb-3 mb-md-4">
                Order alcohol for delivery or pickup
              </h1>
            </div>
            <div className="banner-keywords mb-3 mb-md-4">
              <p className="text-black ">
                Get your favorite beer, wine &amp; spirits from nearby liquor stores
              </p>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='banner'>
              <img src={Banner} className="img-fluid" alt="Banner" />
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid p-1'>
        <div className='row p-0 m-0'>
          <div className='col-3 mt-5 p-0'>
            <Link to="/beer" className='product'>
              <img src={Beer} width="370" height="370" className='img-fluid beer' alt='' />
              <p>BEER</p>
            </Link>
          </div>
          <div className='col-3 mt-5 p-0'>
            <Link to="/wine" className='product'>
              <img src={Wine} width="370" height="370" className='img-fluid wine' alt='' />
              <p className='mt-3'>WINE</p>
            </Link>
          </div>
          <div className='col-3 mt-5  p-0'>
            <Link to="/spirits" className='product'>
              <img src={whiskey} width="250" height="250" className='img-fluid whiskey ' alt='' />
              <p>Spirits</p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
