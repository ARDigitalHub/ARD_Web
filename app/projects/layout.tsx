'use client';
import React from 'react'
import Nav from '../../components/Nav'

function ProjectsLayout({
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

export default ProjectsLayout