export default function buildConfigDiagram(routerInfo) {
  const diagram = {
    radios: buildRadiosDiagram(routerInfo),
    ports: buildPortsDiagram(routerInfo)
  }

  return diagram
}

function buildPortsDiagram(routerInfo) {
  const ports = {}

  if (routerInfo.ports['Port 3'].link.link === 'up') {
    ports[3] = {
      name: "port 3",
      connectionIcon: "publicEthernet",
      deviceIcons: [{
        type: "unknownDevice",
        number: 1
      }]
    }
  }

  if (routerInfo.ports['Port 2'].link.link === 'up') {
    ports[4] = {
      name: "port 4",
      connectionIcon: "privateEthernet",
      deviceIcons: [{
        type: "unknownDevice",
        number: 1
      }]
    }
  }

  if (routerInfo.l2tp) {
    ports[0] = {
      name: "WAN port",
      connectionIcon: "internetTunnel",
      deviceIcons: [
        {
          type: "meshExit"
        }
      ]
    }
  }

  return ports
}

function buildRadiosDiagram(routerInfo) {
  const {
    wifi
  } = routerInfo
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

  if (wifi.open2) {
    radios[0].deviceIcons.push({
      type: "client",
      network: "public",
      number: Object.keys(wifi.open2).length
    })
  }
  if (wifi.priv2) {
    radios[0].deviceIcons.push({
      type: "client",
      network: "private",
      number: Object.keys(wifi.priv2).length
    })
  }
  if (wifi.mesh2) {
    radios[0].deviceIcons.push({
      type: "localmesh",
      internet: true
    })
  }

  if (wifi.open5) {
    radios[1].deviceIcons.push({
      type: "client",
      network: "public",
      number: Object.keys(wifi.open5).length
    })
  }
  if (wifi.priv5) {
    radios[1].deviceIcons.push({
      type: "client",
      network: "private",
      number: Object.keys(wifi.priv5).length
    })
  }
  if (wifi.mesh5) {
    radios[1].deviceIcons.push({
      type: "localmesh",
      internet: true
    })
  }

  return radios
}