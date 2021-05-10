import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import LandingPageBanner from '../../components/LandingPageBanner'
import Footer from '../../components/Footer';
import UseCase from '../../components/UseCase';
import HowItWorks from '../../components/HowItWorks';
import OurProduct from '../../components/OurProduct';
import OurTeam from '../../components/OurTeam';
import ContactUs from '../../components/ContactUs';
import FAQ from '../../components/FAQ';

class Home extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <LandingPageBanner />
          <UseCase />
          <HowItWorks />
          <OurProduct />
          <OurTeam />
          <FAQ />
          <ContactUs />
          <Footer />
      </div>
    );
  }
}

export default Home;