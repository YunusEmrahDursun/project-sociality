import React from 'react'
import utilStyles from './utils.module.css';
import Top from './top'
import Navbar from '@components/navbar';
import Content from '@components/content';
export default function page() {

  return (
    <div className={utilStyles.container}>
      <Navbar></Navbar>
      <div className={utilStyles.content}>
        <Top/>
        <Content/>
      </div>
    </div>
  )
}
