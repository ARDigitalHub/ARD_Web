'use client';
import React from 'react'
import Nav from '../../components/Nav'
import StoreNav from '../../components/StoreNav'
import type { Metadata } from 'next'

export default function  TeamLayout({
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
