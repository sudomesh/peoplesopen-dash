export default {
  wireless: `{"radio0":{".anonymous":false,".type":"wifi-device",".name":"radio0",".index":0,"type":"mac80211","path":"platform/ar934x_wmac","hwmode":"11g","htmode":"HT20","channel":"6","txpower":"23","ht_capab":["TX-STBC","TX-STBC-2BY1","RX-STBC2"]},"cfg033579":{".anonymous":true,".type":"wifi-iface",".name":"cfg033579",".index":1,"device":"radio0","ifname":"open2","encryption":"none","network":"open","mode":"ap","ssid":"peoplesopen.net 65.125.65"},"cfg053579":{".anonymous":true,".type":"wifi-iface",".name":"cfg053579",".index":2,"device":"radio0","ifname":"priv2","network":"priv","encryption":"psk2","mode":"ap","ssid":"pplsopen-admin","key":"savethemesh"},"cfg073579":{".anonymous":true,".type":"wifi-iface",".name":"cfg073579",".index":3,"device":"radio0","ifname":"mesh2","network":"mesh2","encryption":"none","mode":"adhoc","bssid":"CA:FE:C0:DE:F0:0D","ssid":"pplsopen.net-node2node"},"radio1":{".anonymous":false,".type":"wifi-device",".name":"radio1",".index":4,"type":"mac80211","path":"pci0000:00/0000:00:00.0","hwmode":"11a","htmode":"HT40+","channel":"157","txpower":"23","ht_capab":["GF","TX-STBC","RX-STBC2"]},"cfg0a3579":{".anonymous":true,".type":"wifi-iface",".name":"cfg0a3579",".index":5,"device":"radio1","ifname":"open5","encryption":"none","network":"open","mode":"ap","ssid":"peoplesopen.net fast 65.125.65"},"cfg0c3579":{".anonymous":true,".type":"wifi-iface",".name":"cfg0c3579",".index":6,"device":"radio1","ifname":"priv5","network":"priv","encryption":"psk2","mode":"ap","ssid":"pplsopen-admin","key":"savethemesh"},"cfg0e3579":{".anonymous":true,".type":"wifi-iface",".name":"cfg0e3579",".index":7,"device":"radio1","ifname":"mesh5","network":"mesh5","encryption":"none","mode":"adhoc","bssid":"CA:FE:C0:DE:F0:0D","ssid":"pplsopen.net-node2node"}}`,
  tunneldigger: `{"main":{".anonymous":false,".type":"broker",".name":"main",".index":0,"address":["45.34.140.42:8942","45.34.140.42:443","64.71.176.94:8942","64.71.176.94:443","104.236.181.226:8942","104.236.181.226:8943","142.254.26.9:8942","104.236.181.202:8942","104.131.158.147:8942","107.170.219.5:8942"],"interface":"l2tp0","bind_to_interface":"eth1","hook_script":"/opt/mesh/tunnel_hook","uuid":"b9e293cd-a5eb-42bd-86ef-648c2f2a9337","limit_bw_up":"4096kbit","limit_bw_down":"4096kbit"}}`
}
