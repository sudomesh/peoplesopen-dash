export default {
  "routes": {
    "list": [{
        "destination": "default",
        "neighbor": "10.0.0.3",
        "interface": "eth0",
        "protocol": "babel"
      },
      {
        "destination": "10.0.0.1",
        "neighbor": "10.0.0.3",
        "interface": "eth0",
        "protocol": "babel"
      },
      {
        "destination": "10.0.0.2",
        "neighbor": "10.0.0.2",
        "interface": "eth0",
        "protocol": "babel"
      },
      {
        "destination": "10.0.0.3",
        "neighbor": "10.0.0.3",
        "interface": "eth0",
        "protocol": "babel"
      },
      {
        "destination": "10.0.0.5",
        "neighbor": "10.0.0.5",
        "interface": "eth0",
        "protocol": "babel"
      },
      {
        "destination": "10.0.0.6",
        "neighbor": "10.0.0.2",
        "interface": "eth0",
        "protocol": "babel"
      },
      {
        "destination": "10.0.1.0/24",
        "neighbor": "10.0.0.3",
        "interface": "eth0",
        "protocol": "babel"
      },
      {
        "destination": "10.0.1.2",
        "neighbor": "10.0.0.3",
        "interface": "eth0",
        "protocol": "babel"
      }
    ],
    "map": {
      "interfaces": {
        "eth0": {
          "neighbors": {
            "10.0.0.3": {
              "routes": {
                "default": {
                  "destination": "default",
                  "neighbor": "10.0.0.3",
                  "interface": "eth0",
                  "protocol": "babel"
                },
                "10.0.0.1": {
                  "destination": "10.0.0.1",
                  "neighbor": "10.0.0.3",
                  "interface": "eth0",
                  "protocol": "babel"
                },
                "10.0.0.3": {
                  "destination": "10.0.0.3",
                  "neighbor": "10.0.0.3",
                  "interface": "eth0",
                  "protocol": "babel"
                },
                "10.0.1.0/24": {
                  "destination": "10.0.1.0/24",
                  "neighbor": "10.0.0.3",
                  "interface": "eth0",
                  "protocol": "babel"
                },
                "10.0.1.2": {
                  "destination": "10.0.1.2",
                  "neighbor": "10.0.0.3",
                  "interface": "eth0",
                  "protocol": "babel"
                }
              }
            },
            "10.0.0.2": {
              "routes": {
                "10.0.0.2": {
                  "destination": "10.0.0.2",
                  "neighbor": "10.0.0.2",
                  "interface": "eth0",
                  "protocol": "babel"
                },
                "10.0.0.6": {
                  "destination": "10.0.0.6",
                  "neighbor": "10.0.0.2",
                  "interface": "eth0",
                  "protocol": "babel"
                }
              }
            },
            "10.0.0.5": {
              "routes": {
                "10.0.0.5": {
                  "destination": "10.0.0.5",
                  "neighbor": "10.0.0.5",
                  "interface": "eth0",
                  "protocol": "babel"
                }
              }
            }
          }
        }
      }
    }
  },
  "wifi": {
    "open2": {
      "5c:8d:4e:82:3a:ae": {
        "inactive time": "1510 ms",
        "rx bytes": "176281",
        "rx packets": "4804",
        "tx bytes": "31623",
        "tx packets": "193",
        "tx retries": "18",
        "tx failed": "125",
        "signal": "-54 [-56, -60] dBm",
        "signal avg": "-52 [-53, -59] dBm",
        "tx bitrate": "65.0 MBit/s MCS 6 short GI",
        "rx bitrate": "24.0 MBit/s",
        "expected throughput": "30.852Mbps",
        "authorized": "yes",
        "authenticated": "yes",
        "preamble": "short",
        "WMM/WME": "yes",
        "MFP": "no",
        "TDLS peer": "no",
        "connected time": "834 second"
      },
      "84:3a:4b:cb:77:30": {
        "inactive time": "930 ms",
        "rx bytes": "45317",
        "rx packets": "457",
        "tx bytes": "34845",
        "tx packets": "333",
        "tx retries": "17",
        "tx failed": "0",
        "signal": "-42 [-42, -50] dBm",
        "signal avg": "-46 [-47, -53] dBm",
        "tx bitrate": "144.4 MBit/s MCS 15 short GI",
        "rx bitrate": "6.0 MBit/s",
        "expected throughput": "47.57Mbps",
        "authorized": "yes",
        "authenticated": "yes",
        "preamble": "short",
        "WMM/WME": "yes",
        "MFP": "no",
        "TDLS peer": "no",
        "connected time": "45 seconds"
      }
    },
    "open5": {
      "f4:5c:89:95:c8:3b": {
        "inactive time": "540 ms",
        "rx bytes": "12894",
        "rx packets": "105",
        "tx bytes": "1615",
        "tx packets": "11",
        "tx retries": "0",
        "tx failed": "0",
        "signal": "-34 [-40, -35] dBm",
        "signal avg": "-33 [-38, -35] dBm",
        "tx bitrate": "130.0 MBit/s MCS 14 short GI",
        "rx bitrate": "24.0 MBit/s",
        "expected throughput": "45.43Mbps",
        "authorized": "yes",
        "authenticated": "yes",
        "preamble": "short",
        "WMM/WME": "yes",
        "MFP": "no",
        "TDLS peer": "no",
        "connected time": "7 seconds"
      }
    }
  },
  "ports": {
    "ports": {},
    "Global attributes": {
      "enable_vlan": "1"
    },
    "Port 0": {
      "pvid": "0",
      "link": {
        "port": "0",
        "link": "up",
        "speed": "1000baseT",
        "full-duplex": true,
        "txflow": true,
        "rxflow": true
      }
    },
    "Port 1": {
      "pvid": "1",
      "link": {
        "port": "1",
        "link": "down"
      }
    },
    "Port 2": {
      "pvid": "2",
      "link": {
        "port": "2",
        "link": "up",
        "speed": "100baseT",
        "full-duplex": true,
        "auto": true
      }
    },
    "Port 3": {
      "pvid": "11",
      "link": {
        "port": "3",
        "link": "up",
        "speed": "100baseT",
        "full-duplex": true,
        "auto": true
      }
    },
    "Port 4": {
      "pvid": "10",
      "link": {
        "port": "4",
        "link": "down"
      }
    },
    "VLAN 0": {
      "vid": "0",
      "ports": "0t"
    },
    "VLAN 1": {
      "vid": "1",
      "ports": [
        "0t",
        "1"
      ]
    },
    "VLAN 2": {
      "vid": "2",
      "ports": [
        "0t",
        "2"
      ]
    },
    "VLAN 10": {
      "vid": "10",
      "ports": [
        "0t",
        "4"
      ]
    },
    "VLAN 11": {
      "vid": "11",
      "ports": [
        "0t",
        "3"
      ]
    }
  }
}