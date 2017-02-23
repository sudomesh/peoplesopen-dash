import React from 'react'
import { Router } from './router.js'
import { ConnectionBox } from './ConnectionBox.js'
import { DeviceBox } from './DeviceBox.js'

import { labelText } from './styles.js'

function App({ ports, radios }) {
  return (
    <div style={{
      width: 1000,
      position: "relative"
    }}>
      <Router ports={ports} />
      
      { radios[0] &&
      <div style={{
        position: "absolute",
        top: 0
      }}>
          <DeviceBox 
            { ...radios[0] }
          ></DeviceBox>
      </div>
      }
      <div style={{ ...labelText, position: "absolute", width: 200, top: 200, left: 0}}>{`Connected over ${radios[0].name}`}</div>
      
      { radios[1] &&
      <div style={{
        position: "absolute",
        top: 0,
        left: 800,
      }}>
          <DeviceBox 
            { ...radios[1] }
          ></DeviceBox>
      </div>
      }
      <div style={{ ...labelText, position: "absolute", width: 200, top: 200, left: 0}}>{`Connected over ${radios[0].name}`}</div>

      { ports[0] &&
      <div style={{
        position: "absolute",
        top: 300,
        left: 0,
      }}>
        <ConnectionBox
          { ...ports[0] }
        ></ConnectionBox>
      </div>
      }

      { ports[1] &&
      <div style={{
        position: "absolute",
        top: 300,
        left: 200,
      }}>
        <ConnectionBox
          { ...ports[1] }
        ></ConnectionBox>
      </div>
      }

      { ports[2] &&
      <div style={{
        position: "absolute",
        top: 300,
        left: 400,
      }}>
        <ConnectionBox
          { ...ports[2] }
        ></ConnectionBox>
      </div>
      }

      { ports[3] &&
      <div style={{
        position: "absolute",
        top: 300,
        left: 600,
      }}>
        <ConnectionBox
          { ...ports[3] }
        ></ConnectionBox>
      </div>
      }
      
      { ports[4] &&
      <div style={{
        position: "absolute",
        top: 300,
        left: 800,
      }}>
        <ConnectionBox
          { ...ports[4] }
        ></ConnectionBox>
      </div>
      }

    </div>
  )
}

export default App
