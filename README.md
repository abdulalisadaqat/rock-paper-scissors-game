# Rock Paper Scissors

A simple browser-based Rock Paper Scissors game built with plain HTML, CSS, and JavaScript.

## Overview

This project lets you play Rock Paper Scissors against the computer in a single-page interface.

- Select your move (rock, paper, or scissors) by clicking one of the icons.
- Click **Start** to let the computer choose and resolve the round.
- The score updates after each round:
- `Win` increases score by 1
- `Miss` decreases score by 1
- `Draw` keeps score unchanged

## Features

- No frameworks or build tools required
- Lightweight, static frontend
- Visual move display for both player and computer
- Running score tracker

## Project Structure

```text
.
|-- index.html
|-- script.js
|-- style.css
`-- images/
    |-- rock.png
    |-- paper.png
    `-- scissors.png
```

## How to Run

Since this is a static web project, you can run it in either of these ways:

1. Open `index.html` directly in your browser.
2. Or serve the folder with a local static server (recommended).

## How to Play

1. Click one of the three move icons to set your move.
2. Click **Start**.
3. Check the displayed result (`Win`, `Miss`, or `Draw`) and updated score.
4. Repeat for more rounds.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (DOM events and basic game logic)

## Notes

- The computer move is randomly selected each round.
- If you click **Start** before selecting a move, the game prompts you to choose one first.
