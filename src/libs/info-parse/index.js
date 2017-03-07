import parseSwconfig from './parseSwconfig.js'
import parseIwconfig from './parseIwconfig.js'
import parseIproute from './parseIproute.js'

export default function parse (routerOutput) {
	const commands = routerOutput.split('\n ---\n\n')

	return {
    routes: parseIproute(commands[0]),
		wifi: parseIwconfig(commands[1]),
		ports: parseSwconfig(commands[3]),
	}
}