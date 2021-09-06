import React from 'react'
import Header from './header'
import CSS from 'csstype';

const MainContainer:CSS.Properties = {
    display:'flex',
    flexDirection:'column',


}

export default function Layout({children}:{children: React.ReactNode}){

  return (
      <div style={MainContainer}>
          <Header/>
          <div style={{display:'flex', flexDirection:'column', margin:'0 auto'}}>
          {children}
          </div>
      </div>
  )

}