let globalScope
let itemScope
let parseMap
let parseList

const regexes = {
	selectItemName: /^(.*):/,
	nonIndented: /^[^\t]/,
	map: /\w+:.*\S+:\S+.*/,
	list: /\w+: [^:]+ [^:]+$/,
	value: /\w+: [^: ]+$/,
	selectKV: /^\t(.*): (.*)/
}

export default function parseSwconfig(swOutput) {
	const lines = swOutput.split('\n').filter(line => line.length > 0)
	const output = { ports: {} }

	lines.reduce((fn, line) => {
		return fn(line, output)
	}, globalScope)

	return output
}

globalScope = (line, output) => {
	const itemName = regexes.selectItemName.exec(line)[1]
	const port = output[itemName] = output[itemName] || {}
	return itemScope(port)
}

itemScope = item => (line, output) => {
	if (line.match(regexes.nonIndented)) {
		return globalScope(line, output)
	}

	const [,key,value] = regexes.selectKV.exec(line)

	if (line.match(regexes.map)) {
		item[key] = parseMap(value)
		return itemScope(item)
	} 
	if (line.match(regexes.list)) {
		item[key] = parseList(value)
		return itemScope(item)
	}
	if (line.match(regexes.value)) {
		item[key] = value
		return itemScope(item)
	}
}

parseMap = str => {
	const obj = {}
	const tokens = str.split(' ')
	tokens.forEach(token => {
		if (token.match(/:/)) {
			const res = /(.*):(.*)/.exec(token)
			obj[res[1]] = res[2]
		} else {
			obj[token] = true
		}
	})

	return obj
}

parseList = str => str.split(' ')