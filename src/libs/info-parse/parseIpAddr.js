export default function parseIpAddr (ipAddrOutput) {
  // Super basic right now, we are only using this to check for l2tp
  return /l2tp/.test(ipAddrOutput)
}