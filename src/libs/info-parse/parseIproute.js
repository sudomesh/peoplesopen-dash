export default function parseRoutes (ipRouteOutput) {
  const list = ipRouteOutput.split('\n').filter(line => line.length > 0).map(buildRoute)
  const map = mapRoutes(list)
	return {
    list,
    map
  }
}

function buildRoute(line) {
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

function mapRoutes(routeList) {
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