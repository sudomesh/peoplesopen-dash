const routerOutput = `default via 10.0.0.3 dev eth0  proto babel onlink
10.0.0.1 via 10.0.0.3 dev eth0  proto babel onlink
10.0.0.2 via 10.0.0.2 dev eth0  proto babel onlink
10.0.0.3 via 10.0.0.3 dev eth0  proto babel onlink
10.0.0.5 via 10.0.0.5 dev eth0  proto babel onlink
10.0.0.6 via 10.0.0.2 dev eth0  proto babel onlink
10.0.1.0/24 via 10.0.0.3 dev eth0  proto babel onlink
10.0.1.2 via 10.0.0.3 dev eth0  proto babel onlink

 ---

Station 5c:8d:4e:82:3a:ae (on open2)
	inactive time:	1510 ms
	rx bytes:	176281
	rx packets:	4804
	tx bytes:	31623
	tx packets:	193
	tx retries:	18
	tx failed:	125
	signal:  	-54 [-56, -60] dBm
	signal avg:	-52 [-53, -59] dBm
	tx bitrate:	65.0 MBit/s MCS 6 short GI
	rx bitrate:	24.0 MBit/s
	expected throughput:	30.852Mbps
	authorized:	yes
	authenticated:	yes
	preamble:	short
	WMM/WME:	yes
	MFP:		no
	TDLS peer:	no
	connected time:	834 second

Station 84:3a:4b:cb:77:30 (on open2)
	inactive time:	930 ms
	rx bytes:	45317
	rx packets:	457
	tx bytes:	34845
	tx packets:	333
	tx retries:	17
	tx failed:	0
	signal:  	-42 [-42, -50] dBm
	signal avg:	-46 [-47, -53] dBm
	tx bitrate:	144.4 MBit/s MCS 15 short GI
	rx bitrate:	6.0 MBit/s
	expected throughput:	47.57Mbps
	authorized:	yes
	authenticated:	yes
	preamble:	short
	WMM/WME:	yes
	MFP:		no
	TDLS peer:	no
	connected time:	45 seconds

Station f4:5c:89:95:c8:3b (on open5)
	inactive time:	540 ms
	rx bytes:	12894
	rx packets:	105
	tx bytes:	1615
	tx packets:	11
	tx retries:	0
	tx failed:	0
	signal:  	-34 [-40, -35] dBm
	signal avg:	-33 [-38, -35] dBm
	tx bitrate:	130.0 MBit/s MCS 14 short GI
	rx bitrate:	24.0 MBit/s
	expected throughput:	45.43Mbps
	authorized:	yes
	authenticated:	yes
	preamble:	short
	WMM/WME:	yes
	MFP:		no
	TDLS peer:	no
	connected time:	7 seconds

 ---

arp: in 2 entries no match found.

 ---

Global attributes:
	enable_vlan: 1
Port 0:
	pvid: 0
	link: port:0 link:up speed:1000baseT full-duplex txflow rxflow
Port 1:
	pvid: 1
	link: port:1 link:down
Port 2:
	pvid: 2
	link: port:2 link:up speed:100baseT full-duplex auto
Port 3:
	pvid: 11
	link: port:3 link:up speed:100baseT full-duplex auto
Port 4:
	pvid: 10
	link: port:4 link:down
VLAN 0:
	vid: 0
	ports: 0t
VLAN 1:
	vid: 1
	ports: 0t 1
VLAN 2:
	vid: 2
	ports: 0t 2
VLAN 10:
	vid: 10
	ports: 0t 4
VLAN 11:
	vid: 11
	ports: 0t 3

 ---

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: enp0s25: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc pfifo_fast state DOWN group default qlen 1000
    link/ether 00:21:cc:b7:6c:1f brd ff:ff:ff:ff:ff:ff
3: wlp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 24:77:03:42:60:90 brd ff:ff:ff:ff:ff:ff
    inet 100.64.65.1/22 brd 100.64.67.255 scope global dynamic wlp3s0
       valid_lft 356sec preferred_lft 356sec
    inet6 fe80::c0d:a5af:96e7:ca79/64 scope link 
       valid_lft forever preferred_lft forever`

export default function () {
    console.log(separateRouterOutput(routerOutput))
    return buildConfigDiagram(separateRouterOutput(routerOutput))
}

import parseSwconfig from './parseSwconfig.js'

function separateRouterOutput (routerOutput) {
    const commands = routerOutput.split('\n ---\n\n')
    console.log(commands)
    const routeList = parseRoutes(commands[0])
    const routeMap = mapRoutes(routeList) 
    const stations = parseStations(commands[1])
    const ports = parseSwconfig(commands[3])
    return {
        routeList,
        routeMap,
        stations,
        ports
    }
}


function buildConfigDiagram (routerInfo) {
    const diagram = {
        radios: buildRadiosDiagram(routerInfo),
        ports: buildPortsDiagram(routerInfo)
    }
}

function buildPortsDiagram (routerInfo) {

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



function parseStations (iwOutput) {
    const lines = iwOutput.split('\n').filter(line => line.length > 0)
    let currentStation
    const devices = {}

    lines.forEach(line => {
        if (line.match(/^Station .* \(on .*\)/)) {
            const res = /^Station (.*) \(on (.*)\)/.exec(line)
            const stationName = res[1]
            const deviceName = res[2]
            const device = devices[deviceName] = devices[deviceName] || {}
            const station = device[stationName] = {}
            currentStation = station
        } else {
            const res = /(.*):(.*)/.exec(line)
            const key = res[1].trim()
            const value = res[2].trim()
            currentStation[key] = value
        }
    })

    return devices
}

function parseRoutes (ipRouteOutput) {
    return ipRouteOutput.split('\n').filter(line => line.length > 0).map(buildRoute)
}

function buildRoute (line) {
    const fields = line.split(' ')
    const route = {
        destination: fields[0]
    }

    fields.forEach((field, i) => {
        switch (field) {
            case 'proto':
                return route.protocol = fields[i + 1]
            case 'dev':
                return route.interface = fields[i + 1]
            case 'via':
                return route.neighbor = fields[i + 1]
        }
    })

    return route
}

function mapRoutes (routeList) {
    const routeMap = {
        interfaces: {}
    }
    routeList.forEach(route => {
        if (!routeMap.interfaces[route.interface]) {
            routeMap.interfaces[route.interface] = {
                neighbors: {}
            }
        }

        if (!routeMap.interfaces[route.interface].neighbors[route.neighbor]) {
            routeMap.interfaces[route.interface].neighbors[route.neighbor] = {
                routes: {}
            }
        }

        routeMap.interfaces[route.interface].neighbors[route.neighbor].routes[route.destination] = route
    })

    return routeMap
}
