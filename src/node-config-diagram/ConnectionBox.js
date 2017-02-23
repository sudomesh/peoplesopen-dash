import React from 'react'
import { DeviceBox } from './DeviceBox.js'

import internetTunnel from './connection-icons/internetTunnel.svg'
import publicEthernet from './connection-icons/publicEthernet.svg'
import privateEthernet from './connection-icons/privateEthernet.svg'

// There was some Sketch bug with pngs in svgs, so I exported these three as straight png.
import nanoBridge from './connection-icons/nanoBridge.png'
import nanoBeam from './connection-icons/nanoBeam.png'
import nanoStation from './connection-icons/nanoStation.png'

import { labelText } from './styles.js'

let icons = {
    internetTunnel: {
        file: internetTunnel,
        title: "Internet Tunnel"
    },
    nanoBridge: {
        file: nanoBridge,
        title: "Ubiquiti NanoBridge"
    },
    nanoBeam: {
        file: nanoBeam,
        title: "Ubiquiti NanoBeam"
    },
    nanoStation: {
        file: nanoStation,
        title: "Ubiquiti NanoStation"
    },
    publicEthernet: {
        file: publicEthernet,
        title: "Public Network"
    },
    privateEthernet: {
        file: privateEthernet,
        title: "Private Network"
    },
}

let files = {
    internetTunnel,
    nanoBridge,
    nanoBeam,
    nanoStation,
    publicEthernet,
    privateEthernet,
}

export function ConnectionBox ({ deviceIcons, connectionIcon, name }) {
  return (
      <div style={{ position: "relative" }}>
        <img style={{ position: "absolute" }} src={icons[connectionIcon].file} />
        <div style={{ position: "absolute", top: 140, width: 200, ...labelText, background: "rgba(254,254,254,0.7)" }}>{`Connected over ${icons[connectionIcon].title} on ${name}`}</div>
        <div style={{ position: "absolute", top: 200 }}>
            <DeviceBox deviceIcons={deviceIcons} />
        </div>
      </div>
  )
}
