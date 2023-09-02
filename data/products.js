const products = [
    { "id": 1,  "name": "Hp 14 Intel Celeron 1TB 4GB",   "image": "Hp14",    "price": 180500, "type": "HP",
"description": "HP Laptop 14-cf2174nia, 14”, FreeDOS, Intel® Celeron®, 4GB RAM, 1TB HDD, HD, Pale gold" },
    { "id": 2,  "name": "Lenovo ThinkPad 11 X360",  "image": "Lenovo ThinkPad 11 X360",  "price": 165000, "type": "Lenovo",
    "description": "Lenovo Thinkpad Yoga 11E (20HU0000US) Laptop (Core i3 8GB RAM/ 128GB SSD/ Windows 10 Pro) laptop has a 11.6 Inches (29.46 cm) display for your daily needs. This laptop is powered by Intel Core i3-7100U processor, coupled with 8 GB of RAM and has 128 GB SSD storage at this price point.It runs on Windows 10 Professional operating system. This Windows 10 Professional laptop has a resolution of 1366 x 768 Pixels As far as the graphics card is concerned this notebook has a undefined Intel HD 620 graphics card to manage the graphical functions. To keep it alive, it has a 3 Cell Li-Ion battery and weighs 1.59 Kg. 11.6-inch (1366 x 768) IPS Touchscreen DisplayIntel Core i3 Processor8GB System Memory128GB  Solid State Drive (SSD)Integrated Intel UHD Graphics 605No Optical Drive2 x USB 3.0, 1 x USB-C, 1 x HDMIStandard Keyboard and Touchpad1MP Webcam and Integrated MicrophoneNo Ethernet, IEEE 802.11ac and Bluetooth 5.03-cell Lithium-Ion Battery with up to 12 hours of useOperating System: Microsoft Windows 10 Professional11.5 x 8.1 x 0.8 (HxWxD) 3.1lbsEnergy Star Compliant, Silver EPEAT"},
    { "id": 3,  "name": "Acer Spin 3 X360",   "image": "Hp14",   "price": 250000, "type": "Acer",
"description": "Acer Spin 3 SP314-54N SP314-54N-53BF 14” Touchscreen 2 in 1 Notebook  Full HD – 1920 x 1080  Intel Core i5 (10th Gen) i5-1035G1 Quad-core (4 Core) 1 GHz – 8 GB RAM – 256 GB SSD – Pure Silver 10th Generation Intel Core i5-1035G1 with vPro Processor (Up to 3.6GHz) – 8GB LPDDR4 Memory – 256GB NVMe SSD14” Full HD (1920 x 1080) widescreen LED-backlit IPS Multi-Touch Display – Intel UHD Graphics Intel Wireless Wi-Fi 6 AX201 802 11ax – Backlit Keyboard – Fingerprint Reader – Up to 12 Hours Battery Life1 – USB 3.1 Type C port (up to 10 Gbps) DisplayPort over USB-C Thunderbolt 3 USB Charging DC-in, 2 – USB 3.2 Gen 1 ports (one featuring power-off charging) & 1 – HDMI 2.0 port. Rechargeable Acer Active Stylus with Wacom AES 1 0 – Windows 10 Professional.Intel UHD Graphics – In-plane Switching (IPS) Technology, Cine Crystal – English Keyboard – 11 Hour Battery Run Time – IEEE 802.11 a/b/g/n/ac/ax Wireless LAN Standard" },
    { "id": 4,  "name": "Hp Pavilion X360 14, ",    "image": "Hp Pavilion X360 14",    "price": 510000, "type": "HP",
"description": "Touch, Core™ I5 16GB RAM 512GB SSD Blue" },
    { "id": 5,  "name": "Lenovo ThinkPad X1 Carbon G9",    "image": "Lenovo ThinkPad X1 Carbon G9",     "price": 630000, "type": "Lenovo",
"description": "11th Generation Intel® Core™ i5-1135G7 Processor (2.40 GHz, up to 4.20 GHz with Turbo Boost, 4 Cores, 8 Threads, 8 MB Cache) Windows 10 Pro 64 14.0 WUXGA (1920 x 1200) IPS, anti-glare, low-power, 400 nits 8 GB LPDDR4X 4266MHz (Soldered) 256 GB PCIe SSD Integrated Intel® Iris® Xe Graphics IR & 720p HD with HPD Fingerprint Reader Keyboard Backlit - US English Intel® Wi-Fi 6 AX201 802.11AX (2 x 2) & Bluetooth® 5.2"     },
    { "id": 6,  "name": "HP ProBook x360 435 G7 Notebook PC",     "image": "HP ProBook x360 435 G7 Notebook PC",     "price": 570000, "type": "HP",
"description": "HP ProBook x360 435 G7 Notebook PC, 13.3, touch screen, Windows 10 Pro 64, AMD Ryzen™ 5, 16GB RAM, 512GB SSD, FHD" },
    { "id": 7,  "name": "Lenovo Thinkpad E570 Energy Star PC",        "image": "Lenovo Thinkpad E570 Energy Star PC",       "price": 328000, "type": "Lenovo",
"description": "Lenovo ThinkPad E570 - Intel® Core™ i3-6006U Processor (3M Cache, 2.00 GHz), 15.6 Anti-glare, LED backlight display, Intel HD Graphics 620, 8 GB DDR4 SDRAM, 512 GB PCIe® NVMe™ M.2 SSD, spill-resistan keyboard, SuperMulti DVD burner, Intel 802.11a/b/g/n/ac, Bluetooth, Windows 10 Pro, Colour : Black,  1 year warranty" },
    { "id": 8,  "name": "Hp PROONE 440 G6",      "image": "Hp PROONE 440 G6",     "price": 800000, "type": "HP",
"description": "HP ProOne 440 G6 24inch Touchscreen All-in-One PC, 23.8, touch screen, Windows 10 Pro, Intel® Core™ i5, 16GB RAM, 512GB SSD, FHD"    },
    { "id": 9, "name": "Lenovo ThinkPad X390 Yoga 2-IN-1 Ci5-8365",      "image": "Lenovo ThinkPad X390 Yoga 2-IN-1",      "price": 620250, "type": "Lenovo",
"description": "13.3” FHD (1920 x 1080) IPS, anti-reflective, touchscreen, 300 nits 8th Generation Intel® Core™ i5-8365U Processor with vPro™ 8 GB DDR4 2400MHz (Soldered) 256 GB PCIe SSD " },
    { "id": 10,  "name": "Hp 14 Intel Celeron 1TB 8GB",   "image": "Hp14",    "price": 190500, "type": "HP",
"description": "HP Laptop 14-cf2174nia, 14”, FreeDOS, Intel® Celeron®, 8GB RAM, 1TB HDD, HD, Pale gold" },
    { "id": 11,  "name": "Lenovo ThinkPad 11 X360",  "image": "Lenovo ThinkPad 11 X360",  "price": 175000, "type": "Lenovo",
    "description": "Lenovo Thinkpad Yoga 11E (20HU0000US) Laptop (Core i5 8GB RAM/ 128GB SSD/ Windows 10 Pro) laptop has a 11.6 Inches (29.46 cm) display for your daily needs. This laptop is powered by Intel Core i3-7100U processor, coupled with 8 GB of RAM and has 128 GB SSD storage at this price point.It runs on Windows 10 Professional operating system. This Windows 10 Professional laptop has a resolution of 1366 x 768 Pixels As far as the graphics card is concerned this notebook has a undefined Intel HD 620 graphics card to manage the graphical functions. To keep it alive, it has a 3 Cell Li-Ion battery and weighs 1.59 Kg. 11.6-inch (1366 x 768) IPS Touchscreen DisplayIntel Core i3 Processor8GB System Memory128GB  Solid State Drive (SSD)Integrated Intel UHD Graphics 605No Optical Drive2 x USB 3.0, 1 x USB-C, 1 x HDMIStandard Keyboard and Touchpad1MP Webcam and Integrated MicrophoneNo Ethernet, IEEE 802.11ac and Bluetooth 5.03-cell Lithium-Ion Battery with up to 12 hours of useOperating System: Microsoft Windows 10 Professional11.5 x 8.1 x 0.8 (HxWxD) 3.1lbsEnergy Star Compliant, Silver EPEAT"},
    { "id": 12,  "name": "Acer Spin 3 X360",    "image": "Hp14",   "price": 290000, "type": "Acer",
"description": "Acer Spin 3 SP314-54N SP314-54N-53BF 14” Touchscreen 2 in 1 Notebook  Full HD – 1920 x 1080  Intel Core i5 (10th Gen) i5-1035G1 Quad-core (4 Core) 1 GHz – 8 GB RAM – 512 GB SSD – Pure Silver 10th Generation Intel Core i5-1035G1 with vPro Processor (Up to 3.6GHz) – 8GB LPDDR4 Memory – 256GB NVMe SSD14” Full HD (1920 x 1080) widescreen LED-backlit IPS Multi-Touch Display – Intel UHD Graphics Intel Wireless Wi-Fi 6 AX201 802 11ax – Backlit Keyboard – Fingerprint Reader – Up to 12 Hours Battery Life1 – USB 3.1 Type C port (up to 10 Gbps) DisplayPort over USB-C Thunderbolt 3 USB Charging DC-in, 2 – USB 3.2 Gen 1 ports (one featuring power-off charging) & 1 – HDMI 2.0 port. Rechargeable Acer Active Stylus with Wacom AES 1 0 – Windows 10 Professional.Intel UHD Graphics – In-plane Switching (IPS) Technology, Cine Crystal – English Keyboard – 11 Hour Battery Run Time – IEEE 802.11 a/b/g/n/ac/ax Wireless LAN Standard" },
    { "id": 13,  "name": "Hp Pavilion X360 14, ",    "image": "Hp14",    "price": 550000, "type": "HP",
"description": "Touch, Core™ I7 16GB RAM 512GB SSD Blue" },
    { "id": 14,  "name": "Lenovo ThinkPad X1 Carbon G9",    "image": "Lenovo ThinkPad X1 Carbon G9",     "price": 670000, "type": "Lenovo",
"description": "11th Generation Intel® Core™ i7-1135G7 Processor (2.40 GHz, up to 4.20 GHz with Turbo Boost, 4 Cores, 8 Threads, 8 MB Cache) Windows 10 Pro 64 14.0 WUXGA (1920 x 1200) IPS, anti-glare, low-power, 400 nits 8 GB LPDDR4X 4266MHz (Soldered) 256 GB PCIe SSD Integrated Intel® Iris® Xe Graphics IR & 720p HD with HPD Fingerprint Reader Keyboard Backlit - US English Intel® Wi-Fi 6 AX201 802.11AX (2 x 2) & Bluetooth® 5.2"     },
    ]

export default products