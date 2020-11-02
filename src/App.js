import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import HomePage from './pages/HomePage'
import ArtPage from './pages/ArtPage'
import QuotePage from './pages/QuotePage'

function App() {
  return (
    <ReactFullpage
      scrollingSpeed={500}
      scrollBar={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <HomePage />
            <div className="section">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}

export default App;
