export default {
  ports: {
    0: {
      name: "WAN port",
      connectionIcon: "internetTunnel",
      deviceIcons: [
        {
          type: "meshExit"
        }
      ]
    },
    1: {
      name: "port 1",
      connectionIcon: "nanoStation",
      deviceIcons: [
        {
          type: "client",
          network: "Public",
          number: 2
        }
      ]
    },
    2: {
      name: "port 2",
      connectionIcon: "nanoBeam",
      deviceIcons: [
        {
          type: "localmesh",
          internet: true
        }
      ]
    },
    3: {
      name: "port 3",
      connectionIcon: "publicEthernet",
      deviceIcons: [
        {
          type: "unknownDevice",
          number: 1
        }
      ]
    },
    4: {
      name: "port 4",
      connectionIcon: "privateEthernet",
      deviceIcons: [
        {
          type: "client",
          network: "Private",
          number: 1
        }
      ]
    }
  },
  radios: {
    0: {
      name: "2.4ghz radio", 
      deviceIcons: [
        {
          type: "client",
          network: "public",
          number: 3
        },
        {
          type: "localmesh",
          internet: false
        }
      ]
    },
    1: {
      name: "5ghz radio",
      deviceIcons: []
    }
  }
}
