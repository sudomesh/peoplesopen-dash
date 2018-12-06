export default `100.65.125.64/26 dev br-open  proto kernel  scope link  src 100.65.125.65 
172.22.0.0/24 dev eth1  proto kernel  scope link  src 172.22.0.1 
172.30.0.0/16 dev br-priv  proto kernel  scope link  src 172.30.0.1 

 ---

Station 00:90:a9:0b:dd:7d (on mesh5)
	inactive time:	90 ms
	rx bytes:	7677739
	rx packets:	107757
	tx bytes:	5764
	tx packets:	75
	tx retries:	1
	tx failed:	0
	signal:  	-51 [-57, -52] dBm
	signal avg:	-50 [-56, -51] dBm
	tx bitrate:	216.0 MBit/s MCS 13 40MHz
	rx bitrate:	30.0 MBit/s MCS 8 40MHz short GI
	expected throughput:	53.915Mbps
	authorized:	yes
	authenticated:	yes
	preamble:	long
	WMM/WME:	yes
	MFP:		no
	TDLS peer:	no
Station 00:90:a9:0c:70:bd (on mesh5)
	inactive time:	60 ms
	rx bytes:	7780003
	rx packets:	109476
	tx bytes:	4728
	tx packets:	65
	tx retries:	2
	tx failed:	0
	signal:  	-54 [-57, -58] dBm
	signal avg:	-52 [-55, -55] dBm
	tx bitrate:	115.6 MBit/s MCS 13 short GI
	rx bitrate:	130.0 MBit/s MCS 14 short GI
	expected throughput:	43.20Mbps
	authorized:	yes
	authenticated:	yes
	preamble:	long
	WMM/WME:	yes
	MFP:		no
	TDLS peer:	no
Station 00:90:a9:0b:dd:9d (on mesh5)
	inactive time:	50 ms
	rx bytes:	7734831
	rx packets:	108739
	tx bytes:	6144
	tx packets:	89
	tx retries:	2
	tx failed:	0
	signal:  	-50 [-51, -57] dBm
	signal avg:	-49 [-50, -57] dBm
	tx bitrate:	216.0 MBit/s MCS 13 40MHz
	rx bitrate:	243.0 MBit/s MCS 14 40MHz
	expected throughput:	53.915Mbps
	authorized:	yes
	authenticated:	yes
	preamble:	long
	WMM/WME:	yes
	MFP:		no
	TDLS peer:	no
Station 00:90:a9:0b:dd:9b (on mesh2)
	inactive time:	70 ms
	rx bytes:	7906950
	rx packets:	104540
	tx bytes:	8164
	tx packets:	116
	tx retries:	31
	tx failed:	0
	signal:  	-52 [-60, -53] dBm
	signal avg:	-52 [-58, -52] dBm
	tx bitrate:	115.6 MBit/s MCS 13 short GI
	rx bitrate:	72.2 MBit/s MCS 7 short GI
	expected throughput:	43.20Mbps
	authorized:	yes
	authenticated:	yes
	preamble:	long
	WMM/WME:	yes
	MFP:		no
	TDLS peer:	no
Station 00:90:a9:0b:dd:7b (on mesh2)
	inactive time:	50 ms
	rx bytes:	8376857
	rx packets:	110854
	tx bytes:	5393
	tx packets:	66
	tx retries:	22
	tx failed:	0
	signal:  	-47 [-47, -61] dBm
	signal avg:	-47 [-47, -60] dBm
	tx bitrate:	117.0 MBit/s MCS 14
	rx bitrate:	65.0 MBit/s MCS 6 short GI
	expected throughput:	42.41Mbps
	authorized:	yes
	authenticated:	yes
	preamble:	long
	WMM/WME:	yes
	MFP:		no
	TDLS peer:	no
Station 00:90:a9:0c:70:bb (on mesh2)
	inactive time:	80 ms
	rx bytes:	7781864
	rx packets:	102915
	tx bytes:	4820
	tx packets:	67
	tx retries:	28
	tx failed:	0
	signal:  	-52 [-53, -56] dBm
	signal avg:	-51 [-53, -56] dBm
	tx bitrate:	104.0 MBit/s MCS 13
	rx bitrate:	117.0 MBit/s MCS 14
	expected throughput:	41.70Mbps
	authorized:	yes
	authenticated:	yes
	preamble:	long
	WMM/WME:	yes
	MFP:		no
	TDLS peer:	no

 ---

IP address       HW type     Flags       HW address            Mask     Device
104.236.181.202  0x1         0x0         00:00:00:00:00:00     *        eth1
172.30.0.10      0x1         0x2         00:50:b6:24:8b:78     *        br-priv
142.254.26.9     0x1         0x0         00:00:00:00:00:00     *        eth1
100.65.93.65     0x1         0x2         00:90:a9:0b:dd:9b     *        mesh2
104.236.181.226  0x1         0x0         00:00:00:00:00:00     *        eth1
100.65.101.65    0x1         0x2         00:90:a9:0c:70:bd     *        mesh5
45.34.140.42     0x1         0x0         00:00:00:00:00:00     *        eth1
104.131.158.147  0x1         0x0         00:00:00:00:00:00     *        eth1
64.71.176.94     0x1         0x0         00:00:00:00:00:00     *        eth1
100.65.42.65     0x1         0x2         00:90:a9:0b:dd:7d     *        mesh5
100.65.93.65     0x1         0x2         00:90:a9:0b:dd:9d     *        mesh5
107.170.219.5    0x1         0x0         00:00:00:00:00:00     *        eth1

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
	link: port:2 link:down
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

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default 
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 00:90:a9:05:fa:71 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::290:a9ff:fe05:fa71/64 scope link 
       valid_lft forever preferred_lft forever
3: eth1: <NO-CARRIER,BROADCAST,MULTICAST,UP> mtu 1500 qdisc fq_codel state DOWN group default qlen 1000
    link/ether 00:90:a9:05:fa:70 brd ff:ff:ff:ff:ff:ff
    inet 172.22.0.1/24 brd 172.22.0.255 scope global eth1
       valid_lft forever preferred_lft forever
4: teql0: <NOARP> mtu 1500 qdisc noop state DOWN group default qlen 100
    link/void 
7: br-open: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 00:90:a9:05:fa:71 brd ff:ff:ff:ff:ff:ff
    inet 100.65.125.65/26 brd 100.65.125.127 scope global br-open
       valid_lft forever preferred_lft forever
    inet6 fe80::290:a9ff:fe05:fa71/64 scope link 
       valid_lft forever preferred_lft forever
8: eth0.10@eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-open state UP group default 
    link/ether 00:90:a9:05:fa:71 brd ff:ff:ff:ff:ff:ff
9: br-priv: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 00:90:a9:05:fa:71 brd ff:ff:ff:ff:ff:ff
    inet 172.30.0.1/16 brd 172.30.255.255 scope global br-priv
       valid_lft forever preferred_lft forever
    inet6 fe80::290:a9ff:fe05:fa71/64 scope link 
       valid_lft forever preferred_lft forever
10: eth0.11@eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue master br-priv state UP group default 
    link/ether 00:90:a9:05:fa:71 brd ff:ff:ff:ff:ff:ff
11: eth0.1@eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 00:90:a9:05:fa:71 brd ff:ff:ff:ff:ff:ff
    inet 100.65.125.65/32 brd 255.255.255.255 scope global eth0.1
       valid_lft forever preferred_lft forever
    inet6 fe80::290:a9ff:fe05:fa71/64 scope link 
       valid_lft forever preferred_lft forever
12: eth0.2@eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP group default 
    link/ether 00:90:a9:05:fa:71 brd ff:ff:ff:ff:ff:ff
    inet 100.65.125.65/32 brd 255.255.255.255 scope global eth0.2
       valid_lft forever preferred_lft forever
    inet6 fe80::290:a9ff:fe05:fa71/64 scope link 
       valid_lft forever preferred_lft forever
13: mesh2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:90:a9:05:fa:71 brd ff:ff:ff:ff:ff:ff
    inet 100.65.125.65/32 brd 255.255.255.255 scope global mesh2
       valid_lft forever preferred_lft forever
    inet6 fe80::290:a9ff:fe05:fa71/64 scope link 
       valid_lft forever preferred_lft forever
14: mesh5: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:90:a9:05:fa:73 brd ff:ff:ff:ff:ff:ff
    inet 100.65.125.65/32 brd 255.255.255.255 scope global mesh5
       valid_lft forever preferred_lft forever
    inet6 fe80::290:a9ff:fe05:fa73/64 scope link 
       valid_lft forever preferred_lft forever
15: open2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq master br-open state UP group default qlen 1000
    link/ether 02:90:a9:05:fa:71 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::90:a9ff:fe05:fa71/64 scope link 
       valid_lft forever preferred_lft forever
16: open5: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq master br-open state UP group default qlen 1000
    link/ether 02:90:a9:05:fa:73 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::90:a9ff:fe05:fa73/64 scope link 
       valid_lft forever preferred_lft forever
17: priv5: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq master br-priv state UP group default qlen 1000
    link/ether 06:90:a9:05:fa:73 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::490:a9ff:fe05:fa73/64 scope link 
       valid_lft forever preferred_lft forever
18: priv2: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq master br-priv state UP group default qlen 1000
    link/ether 06:90:a9:05:fa:71 brd ff:ff:ff:ff:ff:ff
    inet6 fe80::490:a9ff:fe05:fa71/64 scope link 
       valid_lft forever preferred_lft forever`
