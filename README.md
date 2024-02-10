# simpleGo.js
A simple implementation of **Go game** in plain HTML, CSS and JavaScript. The project is still under development.

## Introduction
> Go is an abstract strategy board game for two players in which the aim is to surround more territory than the opponent. The game was invented in China more than 2,500 years ago and is believed to be the oldest board game continuously played to the present day.

#### References:
- <https://www.britannica.com/topic/go-game>
- <https://gomagic.org/how-to-play-go-rules>
- <https://playgo.to/index.html#/en/intro>
- <https://en.wikipedia.org/wiki/Go_(game)>
- <https://en.wikipedia.org/wiki/Go_software>
- <https://en.wikipedia.org/wiki/Rules_of_Go>
- <https://en.wikipedia.org/wiki/Go_and_mathematics>

---

## Pseudocode
I have created a pseudocode using an AI assistant (Google Bard) with some modifications made by me to be as the following:

```
Initialize game board (table using pre-defined size)
Fill the table with empty intersections

Set firstPlayerTurn to true
Set the game state as onGoing

While game onGoing:
	1. Display current game state
	2. Ask current player for input (move or pass)
	3. If input is move (x, y):
		a. If move is valid (not occupied and no self-capture):
			i. Place stone at (x, y)
			ii. Check if any opponent's stones are captured:
				- For each neighbouring intersection (up, down, left, right):
					- If neighbouring intersection has opponent's stone and no liberties:
						- Remove the stone and add a captured count to the player's score
			iii. Set firstPlayerTurn to false
		b. Else:
			i. Display error message and prompt the player to make another choice
			ii. Return
	4. Else if input is pass:
		a. Set firstPlayerTurn to false
	5. End the game by setting onGoing to false when:
		a. All intersections are occupied by stones OR
		b. Both players resign by passing his turn consecutively

Calculate and display the final score:
	Count the number of stones each player has on the board
	Add their captured stones to the total score

Determine and announce the winner:
	The player with the higher score wins
	If the scores are tied, the game is a draw
```

---

## License
This work is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](/LICENSE).
