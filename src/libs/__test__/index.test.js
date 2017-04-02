import parse from '../info-parse/index.js'
import buildDiagram from '../build-diagram/index.js'
import parsed from './sampleParsed.js'
import diagram from './sampleDiagram.js'
import routerOutput from './sampleRouterOutput.js' 

it('routeroutput to parsed', () => {
	expect(parse(routerOutput)).toEqual(parsed)
});

it('parsed to diagram', () => {
	expect(buildDiagram(parsed)).toEqual(diagram)
});