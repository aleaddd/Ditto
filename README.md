# Ditto

A cross-platform shiny hunting companion and Pokémon shiny odds database.

Ditto aims to become a versatile tool for shiny hunters across multiple Pokémon games, providing encounter information, odds calculations, hunting methods, modifiers, and eventually a complete Pokémon shiny database.

The project started as a browser extension, but is designed with a modular architecture that allows future support for Android applications, desktop applications, and additional Pokémon games.

---

## Features

### Current / Planned

* Shiny odds calculation engine
* Support for multiple hunting methods
* Modifier system (Shiny Charm, event boosts, etc.)
* Full Pokédex database
* Pokémon sprite support
* Pokémon GO support
* Additional Pokémon game support
* Custom game/database support
* Android application
* Desktop application

---

# Supported Games

## Main Series Pokémon Games

Planned support includes:

* Generations I-IX
* Pokémon GO
* Additional Pokémon spin-offs

---

# Architecture

Ditto is built with a modular design:

```
Ditto
│
├── Core
│   ├── Shiny calculation engine
│   ├── Hunting method logic
│   ├── Modifier system
│   └── Calculation modules
│
├── Data
│   ├── Pokémon database
│   ├── Game databases
│   ├── Hunting methods
│   └── Modifiers
│
└── Clients
    ├── Browser extension
    ├── Android app (future)
    └── Desktop app (future)
```

The goal is to keep the calculation engine independent from the user interface, allowing Ditto to run on multiple platforms while sharing the same core logic.

---

# Shiny Calculation System

Ditto separates:

## Data

Information about:

* Pokémon
* Games
* Encounter methods
* Bonuses
* Events

## Logic

Calculations for:

* Encounter chains
* Breeding methods
* Outbreak mechanics
* Event bonuses
* Game-specific mechanics

This allows new games and mechanics to be added without rewriting the entire application.

---

# Supported Hunting Methods

Examples of planned and implemented methods:

## Main Series

* Full Odds encounters
* Masuda Method
* Poké Radar
* Chain Fishing
* SOS Chaining
* DexNav
* Catch Combos
* Mass Outbreaks
* Dynamax Adventures
* Ultra Wormholes

## Pokémon GO

Planned support:

* Wild encounters
* Raids
* Research encounters
* Community Days
* GO Fest and event bonuses

---

# Custom Database Support

One of Ditto's long-term goals is allowing users to create custom databases.

Examples:

* Pokémon fangames
* ROM hacks
* Custom shiny mechanics
* New hunting methods

Users should be able to define:

* Games
* Pokémon availability
* Shiny rates
* Encounter methods
* Custom modifiers

without changing the core application.

---

# Development

## Requirements

* Node.js
* npm
* TypeScript

## Installation

Clone the repository:

```bash
git clone https://github.com/aleaddd/Ditto.git
```

Install dependencies:

```bash
npm install
```

Run the development build:

```bash
npm run dev
```

---

# Contributing

Contributions, suggestions, and bug reports are welcome.

If you want to contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

# Roadmap

## Phase 1 - Foundation

* [x] Initial extension
* [x] Shiny calculation logic
* [x] Hunting method system
* [ ] Improve architecture separation

## Phase 2 - Database

* [ ] Complete Pokédex
* [ ] Pokémon forms
* [ ] Sprite integration
* [ ] Game databases

## Phase 3 - Expansion

* [ ] Pokémon GO support
* [ ] Spin-off game support
* [ ] Custom database creation

## Phase 4 - Multiplatform

* [ ] Android application
* [ ] Desktop application

---

# Disclaimer

Ditto is a fan-made project created for educational and informational purposes.

Pokémon and all related trademarks are property of Nintendo, Game Freak, and The Pokémon Company.

Ditto is not affiliated with or endorsed by Nintendo, Game Freak, The Pokémon Company, or Niantic.

---

# License

License information will be added when the project reaches a stable release.
