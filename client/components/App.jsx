import React from 'react';
import TopNav from './TopNav';
import MainContainer from '../containers/StickiesContainer'

export default function App() {
  return (
    <div className="top-nav">
      <TopNav />
      <MainContainer />
    </div>
  )
}
