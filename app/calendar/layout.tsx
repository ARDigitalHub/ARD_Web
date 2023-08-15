'use client';
import React from 'react'
import Nav from '../../components/Nav'

function CalenderLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
    <Nav/>
    <div>{children}</div>
    </>
    
  )
}

export default CalenderLayout