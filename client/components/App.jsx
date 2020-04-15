import React from 'react';
import StickiesContainer from '../containers/StickiesContainer';
import Welcome from './Welcome';
import TopNav from './TopNav';

export default function App() {
  return (
    <>
      <TopNav />
      <StickiesContainer />
      {/* <Welcome /> */}
    </>
  );
}
