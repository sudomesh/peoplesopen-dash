
export default function buildConfigDiagram (routerInfo) {
    const diagram = {
        radios: buildRadiosDiagram(routerInfo),
        ports: buildPortsDiagram(routerInfo)
    }
}

function buildPortsDiagram (routerInfo) {
 return {}
}

function buildRadiosDiagram (routerInfo) {
    const { stations } = routerInfo
    const radios = {
        0: {
            name: "2.4ghz radio",
            deviceIcons: []
        },
        1: {
            name: "5ghz radio",
            deviceIcons: []
        }
    }

    if (stations.open2) {
        radios[0].deviceIcons.push({
            type: "client",
            network: "public",
            number: Object.keys(stations.open2).length
        })
    }
    if (stations.priv2) {
        radios[0].deviceIcons.push({
            type: "client",
            network: "private",
            number: Object.keys(stations.priv2).length
        })
    }
    if (stations.mesh2) {
        radios[0].deviceIcons.push({
            type: "localmesh",
            internet: true
        })
    }

    if (stations.open5) {
        radios[1].deviceIcons.push({
            type: "client",
            network: "public",
            number: Object.keys(stations.open5).length
        })
    }
    if (stations.priv5) {
        radios[1].deviceIcons.push({
            type: "client",
            network: "private",
            number: Object.keys(stations.priv5).length
        })
    }
    if (stations.mesh5) {
        radios[1].deviceIcons.push({
            type: "localmesh",
            internet: true
        })
    }
}
