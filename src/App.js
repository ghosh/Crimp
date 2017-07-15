import React, { Component } from 'react';
import styled from 'styled-components';

class App extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {

    const Titlebar = styled.section`
      height: 22px;
      -webkit-app-region: drag;
    `;
    // color: #4b4669;
    const Title = styled.p`
      padding-top: 5px;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.3);
      margin: 0;
      text-align: center;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -webkit-font-smoothing: antialiased;
    `;

    return (
      <div className="App">
        <Titlebar>
          <Title>
            Convert images to webp
          </Title>
        </Titlebar>
      </div>
    );
  }
}

export default App;
