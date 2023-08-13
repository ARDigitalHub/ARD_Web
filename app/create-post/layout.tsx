'use client';
import React from 'react'
import Nav from '../../components/Nav'


export default function  PostLayout({
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
