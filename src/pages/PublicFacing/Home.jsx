import React from 'react';
import { Helmet } from "react-helmet";
import HeroSection from '../../components/Public/Hero';
import ServiceCard from '../../components/Public/ServiceCard';
import TestimonialCard from '../../components/Public/Testimonial';
import CTA from '../../components/Public/CTA'
import SomeWorks from '../../components/Public/Works';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Kelvin Ndoma | Digital Marketing & Web Development Services</title>
        <meta
          name="description"
          content="Kelvin Ndoma offers expert digital marketing strategies, web development solutions, and SEO services. Helping businesses grow online with impactful strategies and stunning websites."
        />
        <meta name="keywords" content="digital marketing, web development, SEO, SEO optimization, PPC advertising, content marketing, responsive web designs, e-commerce development, creative branding, Kelvin Ndoma" />
        <meta name="author" content="Kelvin Ndoma" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kelvin Ndoma | Digital Marketing & Web Development Services" />
        <meta property="og:description" content="Kelvin Ndoma offers expert digital marketing strategies, web development solutions, and SEO services. Helping businesses grow online with impactful strategies and stunning websites." />
        <meta property="og:image" content="path_to_your_hero_image.jpg" />
        <meta property="og:url" content="https://www.growwithkelvin.com/" />
        <meta property="og:site_name" content="Kelvin Ndoma" />
      </Helmet>

      <HeroSection />
      <TestimonialCard />
      <ServiceCard />
      <SomeWorks/>
    </>
  );
};

export default Home;