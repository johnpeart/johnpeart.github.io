---
title: LCARS clock
author: John Peart
excerpt: "A Raspberry Pi powered clock, in the style of an LCARS terminal from Star Trek."
categories:
  - Raspberry Pi
  - Star Trek
---

*LCARS clock* is a project I built in 2021 as a gift for my dad for Christmas 2021. These instructions explain how to operate the device and its component parts.

*LCARS clock* features a 4 inch, square LCD display powered by a Raspberry Pi and mounted in a custom 3D printed backing frame. The display and backing frame are covered with a piece of printed perspex, styled similarly to the consoles found on 1980s and 1990s Star Trek series such as *The Next Generation*, *Voyager* and *Deep Space Nine*.

The Raspberry Pi runs custom software to display the time and date. It also shows *Yellow Alert* and *Red Alert* statuses when important dates are approaching, such as anniversaries and birthdays.

## Controlling *LCARS clock*

### Powering on and starting up *LCARS clock*

To turn on *LCARS clock*, flip the frame over so that you're looking at its rear side. Insert a micro USB cable into the port on the bottom most part of the Raspberry Pi.

This model of Raspberry Pi can be powered from most USB Type-A ports. I recommend using a dedicated 5V wall plug.

The device will take around 1 minute to fully power on. If the device turns on successfully, it should immediately load the clock software.

### Accessing *LCARS clock*

*LCARS clock* is powered by a Raspberry Pi Zero W. The computer has been set up to automatically connect to your local Wi-Fi network[^wifi].

Once the device has powered on and connected to the network, you can access the device via SSH. The device should appear as `NESframe.local` on the network. The device does **not** have a fixed IP address. The username and password for the device are written on the rear of the frame; the password is case sensitive.

Once connected and logged in, you will have full command line access to the device.

### Shutting down *LCARS clock*

To turn off *LCARS clock*, connect to the device using SSH. In the command line, enter:

```bash
sudo halt
```

*LCARS clock* will take around 30 seconds to shut down after you have sent the command. In its powered down state the screen's backlight will still stay on; this is normal but you should switch off the device at the socket or unplug the USB cable to turn off the device completely.

**Do not switch the device off by cutting the power**. This may corrupt the memory card.

## Components

### Electronics

- <a href="https://www.raspberrypi.org/products/raspberry-pi-zero-w/?resellerType=home" target="_blank" rel="noopener noreferrer">Raspberry Pi Zero W</a>
- <a href="https://shop.pimoroni.com/products/hyperpixel-4-square?variant=30138251444307" target="_blank" rel="noopener noreferrer">HyperPixel 4.0 Square - Hi-Res Display for Raspberry Pi (2020 model)</a>
- Micro USB cable (for power)
- 8GB MicroSD card

### Other components

- 3D printed back frame
- Printed perspex cover
- Mounting brackets

[^wifi]: If you are unable to connect to see the device on the network, check that the Wi-Fi network SSID and password are set correctly. <a href="https://www.raspberrypi-spy.co.uk/2017/04/manually-setting-up-pi-wifi-using-wpa_supplicant-conf/" target="_blank" rel="noopener noreferrer">Follow these instructions to update the WPA supplicant file</a>.
