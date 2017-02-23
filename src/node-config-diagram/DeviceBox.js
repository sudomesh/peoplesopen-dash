import React from 'react'

import client from './device-icons/client.svg'
import localmesh from './device-icons/localmesh.svg'
import localmeshNoInternet from './device-icons/localmeshNoInternet.svg'
import meshExit from './device-icons/meshExit.svg'
import unknownDevice from './device-icons/unknownDevice.svg'

import { labelText } from './styles.js'

let icons = {
    meshExit: {
        file: meshExit,
        title: "Mesh Exit Server"
    },
    unknownDevice: {
        file: unknownDevice,
        title: "Unknown Device"
    },
}

function renderIcon (icon) {
    if (icon.type === "localmesh") {
        if (icon.internet) {
            return {
                file: localmesh,
                title: "Local Mesh"
            }
        } else {
            return {
                file: localmeshNoInternet,
                title: "Local Mesh, no Internet"
            }
        }
    }

    if (icon.type === "client") {
        return {
            file: client,
            title: `${icon.number} ${icon.network} Clients`
        }
    }
    
    else {
        return icons[icon.type]
    } 
}

export function DeviceBox ({ deviceIcons }) {
    return (
        <div style={{
            width: 200,
            textAlign: "center",
        }}>
        {
            deviceIcons.map((deviceIcon, i) => {
                let icon = renderIcon(deviceIcon)

                return <div key={i} style={{
                    width: 100,
                    height: 100,
                    display: "inline-block",
                    position: "relative"
                }}>
                    <img style={{ position: "absolute", top: 0, left: 0 }} src={icon.file} />
                    <div style={{ position: "absolute", top: 65, left: 0, ...labelText }}>{ icon.title }</div>
                </div>
            })
        }
        </div>
    )
}