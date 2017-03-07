import test from 'tape'
import parser from './index.js'

let routerOutput

test('parse example string', t => {
  console.log(parser(routerOutput))
})

routerOutput = `default via 10.0.0.3 dev eth0  proto babel onlink
10.0.0.1 via 10.0.0.3 dev eth0  proto babel onlink
10.0.0.2 via 10.0.0.2 dev eth0  proto babel onlink
10.0.0.3 via 10.0.0.3 dev eth0  proto babel onlink
10.0.0.5 via 10.0.0.5 dev eth0  proto babel onlink
10.0.0.6 via 10.0.0.2 dev eth0  proto babel onlink
10.0.1.0/24 via 10.0.0.3 dev eth0  proto babel onlink
10.0.1.2 via 10.0.0.3 dev eth0  proto babel onlink

 ---

Station 5c:8d:4e:82:3a:ae (on open2)
	inactive time:	1510 ms
	rx bytes:	176281
	rx packets:	4804
	tx bytes:	31623
	tx packets:	193
	tx retries:	18
	tx failed:	125
	signal:  	-54 [-56, -60] dBm
	signal avg:	-52 [-53, -59] dBm
	tx bitrate:	65.0 MBit/s MCS 6 short GI
	rx bitrate:	24.0 MBit/s
	expected throughput:	30.852Mbps
	authorized:	yes
	authenticated:	yes
	preamble:	short
	WMM/WME:	yes
	MFP:		no
	TDLS peer:	no
	connected time:	834 second

Station 84:3a:4b:cb:77:30 (on open2)
	inactive time:	930 ms
	rx bytes:	45317
	rx packets:	457
	tx bytes:	34845
	tx packets:	333
	tx retries:	17
	tx failed:	0
	signal:  	-42 [-42, -50] dBm
	signal avg:	-46 [-47, -53] dBm
	tx bitrate:	144.4 MBit/s MCS 15 short GI
	rx bitrate:	6.0 MBit/s
	expected throughput:	47.57Mbps
	authorized:	yes
	authenticated:	yes
	preamble:	short
	WMM/WME:	yes
	MFP:		no
	TDLS peer:	no
	connected time:	45 seconds

Station f4:5c:89:95:c8:3b (on open5)
	inactive time:	540 ms
	rx bytes:	12894
	rx packets:	105
	tx bytes:	1615
	tx packets:	11
	tx retries:	0
	tx failed:	0
	signal:  	-34 [-40, -35] dBm
	signal avg:	-33 [-38, -35] dBm
	tx bitrate:	130.0 MBit/s MCS 14 short GI
	rx bitrate:	24.0 MBit/s
	expected throughput:	45.43Mbps
	authorized:	yes
	authenticated:	yes
	preamble:	short
	WMM/WME:	yes
	MFP:		no
	TDLS peer:	no
	connected time:	7 seconds

 ---

arp: in 2 entries no match found.

 ---

Global attributes:
	enable_vlan: 1
Port 0:
	pvid: 0
	link: port:0 link:up speed:1000baseT full-duplex txflow rxflow
Port 1:
	pvid: 1
	link: port:1 link:down
Port 2:
	pvid: 2
	link: port:2 link:up speed:100baseT full-duplex auto
Port 3:
	pvid: 11
	link: port:3 link:up speed:100baseT full-duplex auto
Port 4:
	pvid: 10
	link: port:4 link:down
VLAN 0:
	vid: 0
	ports: 0t
VLAN 1:
	vid: 1
	ports: 0t 1
VLAN 2:
	vid: 2
	ports: 0t 2
VLAN 10:
	vid: 10
	ports: 0t 4
VLAN 11:
	vid: 11
	ports: 0t 3

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