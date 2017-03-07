export default function parseIwconfig (iwOutput) {
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