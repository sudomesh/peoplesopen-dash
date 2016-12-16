let typesArray = [
  'logged in',
  'logged out'
]

let types = {}

for (let type of typesArray) {
  types[type] = type
}

export default function (type) {
  if (!types[type]) {
    throw new Error('unsupported action type')
  }
}
