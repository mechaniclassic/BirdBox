/* TITLE: Rock Paper Scissors Command
 * AUTHORS: Matty, Bisly (Modifications)
 * DESCRIPTION: Play RPS against the computer! */

module.exports = {
	name: 'rps',
	description: 'Play a game of Rock Paper Scissors against the computer!',
	execute(message, args) {
		const validChoices = ['rock', 'paper', 'scissors', 'r', 'p', 's'];
		const playerChoice = args[0];

		if(!validChoices.includes(playerChoice)) { message.channel.trysend('Invalid move. Try again and use \"rock\", \"paper\", or \"scissors\".'); return;}
			const computerNumChoice =  Math.floor(Math.random() * 3);
			if (computerNumChoice == 3) {computerNumChoice = 2;}

			/*
			 *	0 = rock
			 *	1 = paper
			 *	2 = scissors
			*/

			const computerChoice = validChoices[computerNumChoice]
			let playerNumChoice;

			switch(playerChoice) {
				case 'r': case 'rock':
					playerNumChoice = 0; break;
				case 'paper': case 'p':
					playerNumChoice = 1; break;
				case 's': case 'scissors':
					playerNumChoice = 2; break;
			}

			if (playerNumChoice == computerNumChoice) {var result = 'tied';}
			else if (((playerNumChoice - computerNumChoice) + 3) % 3 == 1) {var result = 'won';} //this works, trust me bro, stackoverlow told me it did
			else {var result = 'lost';}



			message.tryreply(`Congrats, you ${result}! The computer selected ${computerChoice} and you selected ${playerChoice}.`);
		}
}
