# Forge Labs — Build. Byte. Learn.

A commerce and learning platform for **hardware hacking, embedded systems, wireless research, NFC/RFID, RF, firmware and electronics education**.

> **Mission:** make hardware security easier to learn through well-designed devices, modular expansion boards, firmware, software tools and guided laboratory content.

## Overview

Forge Labs is being designed as more than a hardware store. The project combines:

- purpose-built ESP32-based hardware;
- modular RF, NFC/RFID, GPS, IR and sensor expansion boards;
- firmware and companion software;
- documentation, pinouts, schematics and examples;
- structured hands-on labs;
- educational content for makers, students, developers and security researchers.

The long-term goal is to build an ecosystem where users can **buy a device, understand how it works, modify it, extend it and learn from it**.

## Flagship concept

The main product direction is an advanced modular hardware laboratory inspired by devices such as Bruce-compatible ESP32 platforms, but designed as a polished commercial learning product.

Possible core configuration:

- ESP32-S3-WROOM-1-N16R8;
- TFT display;
- microSD storage;
- CC1101 Sub-GHz radio;
- nRF24L01+ 2.4 GHz radio;
- PN532 NFC;
- GPS;
- infrared TX/RX;
- joystick and physical controls;
- USB-C power and battery management;
- Qwiic / I2C expansion;
- SPI and UART expansion;
- replaceable daughter boards and modules.

The final hardware should prioritize **modularity, repairability, documentation and safe experimentation**.

## Product ecosystem

### Starter Lab

Entry-level kit for electronics and embedded-systems fundamentals.

Possible contents:

- ESP32 development board;
- display;
- breadboard and jumper wires;
- RFID/NFC demo module;
- IR module;
- basic sensors;
- beginner firmware;
- guided labs.

### Wireless Lab

Intermediate platform focused on wireless and embedded communications.

Possible modules:

- ESP32-S3;
- CC1101;
- nRF24L01+;
- NFC;
- IR;
- GPS;
- microSD;
- antenna connectors;
- expansion ports.

### Ultimate Hardware Lab

Flagship modular platform combining multiple interfaces and expansion options into one advanced learning device.

Example architecture:

```text
CORE BOARD
   |
   +-- RF SLOT A
   |     CC1101
   |
   +-- RF SLOT B
   |     nRF24L01+
   |
   +-- NFC
   |     PN532
   |
   +-- GPS
   |
   +-- IR TX/RX
   |
   +-- Qwiic / I2C
   |
   +-- UART Expansion
   |
   +-- SPI Expansion
```

## Website goals

The website is designed primarily for **sales**, while making the educational value of each product obvious.

The homepage should immediately communicate:

1. what the flagship device is;
2. what users can learn with it;
3. which hardware modules are included;
4. which firmware/software is available;
5. where documentation and labs can be found;
6. how to purchase the product.

### Proposed navigation

```text
SHOP
LEARN
DEVICES
MODULES
SOFTWARE
DOCS
COMMUNITY
ABOUT
```

### Shop categories

- Shop All
- Starter Kits
- Development Boards
- Wireless Modules
- NFC & RFID
- Sensors
- Accessories
- Replacement Parts
- Bundles

### Learning categories

- Getting Started
- Hardware Basics
- ESP32
- Wireless
- RF
- NFC / RFID
- Infrared
- GPS
- Firmware
- PCB Design
- Security Labs

## Homepage direction

### Hero section

**Headline**

> Build. Explore. Understand Hardware.

**Supporting copy**

> Modular hardware and software kits for embedded systems, wireless research, electronics and hands-on hardware security education.

Primary CTA:

> **Explore Kits**

Secondary CTA:

> **Start Learning**

The hero should feature a polished image or render of the flagship board with visible modules such as RF, NFC, GPS and expansion connectors.

## Product page structure

A high-converting product page should contain:

1. Product hero / gallery
2. Price and stock status
3. Kit or version selector
4. Add to Cart
5. What it does
6. What's included
7. Feature overview
8. Interactive board diagram
9. Module compatibility
10. Example projects
11. Firmware and software
12. Technical specifications
13. Pinout and schematics
14. Guided learning labs
15. Documentation
16. FAQ
17. Reviews / community builds
18. Accessories and expansion modules

## Documentation philosophy

Documentation is part of the product, not an afterthought.

Every device should eventually include:

- overview;
- pinout;
- schematic;
- BOM;
- firmware installation;
- software setup;
- examples;
- API / SDK documentation;
- troubleshooting;
- downloads;
- changelog.

## Guided labs

Example curriculum for the flagship platform:

1. ESP32 architecture
2. GPIO
3. SPI
4. I2C
5. UART
6. microSD
7. Infrared
8. NFC / RFID
9. Sub-GHz radio
10. 2.4 GHz radio
11. GPS
12. Custom firmware
13. PCB expansion
14. Cyberdeck integration

## Firmware ecosystem

The platform can evolve around three release channels:

### Stable

Recommended for most customers.

### Beta

Early access to new features and hardware support.

### Developer / SDK

For advanced users who want to build custom firmware and extensions.

Developer resources may include:

- GitHub repositories;
- PlatformIO projects;
- board definitions;
- pinouts;
- libraries;
- examples;
- APIs.

## Companion software

A future desktop application could simplify:

- board detection;
- firmware flashing;
- firmware updates;
- serial console access;
- device configuration;
- file transfer;
- SD card management;
- hardware diagnostics;
- module detection.

Example experience:

```text
Device detected

Ultimate Hardware Lab v1
Firmware: 1.4.2

[ Update Firmware ]
```

## Brand principles

Forge Labs should compete on more than component price.

Core differentiators:

- integration;
- hardware design;
- firmware;
- documentation;
- education;
- support;
- modularity;
- repairability;
- community.

The goal is not simply to sell a collection of modules. It is to sell a complete **hardware learning experience**.

## Responsible use

Forge Labs products and educational material are intended for:

- electronics education;
- embedded-systems development;
- hardware research;
- authorized security testing;
- laboratory experimentation;
- prototyping and diagnostics.

Users are responsible for complying with applicable laws, regulations and radio-frequency rules in their jurisdiction. Security and radio features should only be used with equipment, tags, networks and environments owned by the user or explicitly authorized for testing.

## Project status

This project is currently in active design and prototyping.

Current focus areas:

- brand and storefront experience;
- flagship hardware concept;
- modular product architecture;
- learning content;
- documentation structure;
- firmware and software integration.

## Development

This project was initially created with [Lovable](https://lovable.dev).

**Live app:** https://build-byte-learn.lovable.app

### Local development

Requirements:

- Node.js
- npm

```bash
git clone https://github.com/Mauricios73/build-byte-learn.git
cd build-byte-learn
npm install
npm run dev
```

## Roadmap

### Phase 1 — Storefront

- finalize brand identity;
- build homepage;
- create product-page system;
- define product categories;
- prepare documentation layout.

### Phase 2 — Prototype hardware

- validate ESP32-based core platform;
- test RF, NFC, GPS and IR modules;
- design modular carrier PCB;
- test power system and expansion connectors.

### Phase 3 — Software

- firmware distribution;
- configuration utilities;
- update workflow;
- developer SDK and examples.

### Phase 4 — Learning platform

- beginner labs;
- intermediate wireless labs;
- advanced hardware-security labs;
- documentation and video content.

### Phase 5 — Commercial launch

- manufacturing validation;
- packaging;
- support flow;
- warranty process;
- first product bundles;
- public launch.

## License

Licensing for the website, hardware files, firmware and educational content will be defined as the project matures. Third-party firmware, libraries and hardware designs must retain their original licenses and attribution requirements.

---

**Forge Labs**  
Build. Byte. Learn.
