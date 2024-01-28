'use client';
import Image from 'next/image'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from '../components/Form'
import SideSlide from '../components/SideSlide'
import ClockV1 from '../components/clock/ClockV1'
import Intro from '../components/intro/Intro'
import React from 'react'

interface intProps {
  results: String[];
  openPopup: () => void;
  heading: String;
  details: String;
  curTime: Date;
}
const jsonObjectToType1 = {
  intro: '<>Hi... I am  Hitendra  Patel.</>'
};
const jsonObjectToType2 = {
  job: '{ profession: \"Web Developer.\" }',
  company: '{ working-at: \"Infosys Pvt. Ltd.\" }',
  skills:"{ skills:\"Html5, CSS, JS, React, NextJs, NodeJs, Java\"}"
};
export default function Home() {
  const curTime  =new Date();
  return (
    <React.Fragment>
      <Nav/>
      <div className='inline-block'>
      <ClockV1 time={curTime.getTime() }  />
      <div className='lg:flex sm:block'>
      <Intro  jsonObject={jsonObjectToType1} initialDelay={1000}/>
      <Intro  jsonObject={jsonObjectToType2} initialDelay={7000}/>
      </div>
      </div>
      
    </React.Fragment>
  )
}
