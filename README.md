# Memory Match Game

[Try Me](https://eccos.github.io/memory-match-react/)

Match pairs of cards to win

## Technologies Used
* React
* JavaScript
* Bootstrap
* HTML
* CSS

## Description
Cards are facedown in a grid pattern. Select 2 cards to flip them faceup. If they match, they are removed from play, else they are flipped facedown again.  
**Goal**: Remove all cards from play.

## Minimum Viable Product (MVP)
1. 2x3 grid of cards (squares) hiding number pairs in random locations
1. when card clicked, show card. when 2 cards clicked, then...
    1. if match, then keep faceup
    1. if not, then flip facedown
1. when all cards faceup, player wins.

## Nice to Haves
1. ✅ counter for tries
1. 🌌 timer
(JS is done, but need to convert to React)
1. lose conditions/challenges. win game in under N tries. win under X seconds. win as fast as possible.
1. 🏗 several grid sizes (maybe custom size. limit based on resolution, screen size, or zoom level/viewport size?)
(Converted JS to React, but needs work. I hardcoded columns, but that's causing an issue with different screen sizes (mobile responsiveness is bad). Need to rethink this.)
1. game history (grid size, tries, time, win/loss)
1. 🏗 responsive for different screen sizes
(Somewhat responsive thanks to bootstrap, but need to make it better) 
1. ✅ card graphics
(Changed card backs to a simple gradient)
1. 🏗 animations (card flip, shuffle, placement, win/lose message)
(Only completed card flips so far)
1. sound effects (card hover, card flip, match, miss, win, lose)
1. visual effects (colors, sparkles, font/graphic distortions)

## Known Bugs
* When cards are faceup, New Game button is pressed, new randomized numbers are shown for a split second while cards are being flipped facedown

## License
If you run into any issues, create an issue via the Issues tab.  

GNU General Public License v3.0  
Copyright (c) 2023 eccos