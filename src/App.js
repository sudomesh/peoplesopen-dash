import React, { Component } from 'react'
import Frontpage from './Frontpage'

class App extends Component {
  render() {
    return (
      <Frontpage {...{ 
        neighbors: [ 
          { name: 'mesh26' },
          { name: 'mesh11' },
          { name: 'sally_b' }
        ],
        internetNeighbor: 'mesh26',
        totalTransfered: '10gb',
        sharing: false
      }} />
    );
  }
}

export default App;
