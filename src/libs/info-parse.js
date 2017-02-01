const routerOutput = `default via 10.0.0.3 dev eth0  proto babel onlink
10.0.0.1 via 10.0.0.3 dev eth0  proto babel onlink
10.0.0.2 via 10.0.0.2 dev eth0  proto babel onlink
10.0.0.3 via 10.0.0.3 dev eth0  proto babel onlink
10.0.0.5 via 10.0.0.5 dev eth0  proto babel onlink
10.0.0.6 via 10.0.0.2 dev eth0  proto babel onlink
10.0.1.0/24 via 10.0.0.3 dev eth0  proto babel onlink
10.0.1.2 via 10.0.0.3 dev eth0  proto babel onlink

 --- 

command failed: No such device (-19)

 --- 

arp: in 2 entries no match found.

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
    return separateRouterOutput(routerOutput)
}

function separateRouterOutput (routerOutput) {
    const commands = routerOutput.split('\n --- \n\n')
    console.log(commands)
    const routeList = buildRoutes(commands[0])
    const routeMap = mapRoutes(routeList) 
    return {
        routeList,
        routeMap
    }
}

function buildRoutes (ipRouteOutput) {
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
