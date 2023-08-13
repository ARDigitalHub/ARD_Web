'use client';
import Image from 'next/image'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from '../components/Form'
import React from 'react'

export default function Home() {
  return (
    <>
      <Nav/>
      <Header/>
      <Form/>
      <Footer/>
    </>
  )
}
