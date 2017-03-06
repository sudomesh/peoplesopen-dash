let typesArray = [
  'logged in',
  'logged out',
  'got uci configs',
  'initialized',
  'hashchange',
  'got router info'
]

let types = {}

for (let type of typesArray) {
  types[type] = type
}

export default function (type) {
  if (!types[type]) {
    throw new Error(`unsupported action type: ${type}`)
  }
  return type
}
