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

export default function Home() {
  const curTime  =new Date();
  return (
    <React.Fragment>
      <Nav/>
      <div className='flex'>
      <ClockV1 time={curTime.getTime() }  />
      <Intro/>
      </div>
      
    </React.Fragment>
  )
}
