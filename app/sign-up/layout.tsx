'use client';
import React from 'react'
import Nav from '../../components/Nav'

function SignIn({
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

export default SignIn