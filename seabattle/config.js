__config = {
	
	

	appId: 290907737782625,
	fb_name:"Sea Battle",
	fb_caption:"Hey!",
	fb_description:"I am playing Sea Battle. Come check it out!",

	add2home: 1000,

	///-----------//

	size_field: {
		"10" : {
			num_deck_1: 3,	// 1cell ship
			num_deck_2: 3,	// 2cell ship
			num_deck_3: 2,	// 3cell ship

			num_mine: 4,	// numbers of the mines

			num_chests: 4,	// numbers of the chest

			// you can set custom bonus numbers instead default values (see below)
			multibomb: 1,	
			dinamite: 1,
			periskope: 1,
			torpedo: 1
		},
		"12" : {
			num_deck_1: 4,	// 1cell ship
			num_deck_2: 4,	// 2cell ship
			num_deck_3: 3,	// 3cell ship

			num_mine: 5,	// numbers of the mines

			num_chests: 5	// numbers of the chest
		},
		"16" : {
			num_deck_1: 5,	// 1cell ship
			num_deck_2: 5,	// 2cell ship
			num_deck_3: 4,	// 3cell ship

			num_mine: 5,	// numbers of the mines

			num_chests: 6	// numbers of the chest
		} 
	},

	price_ship: 100, // gold for hit
	price_ship_bot: 200, // gold for hit robot

	// prices for bonuses in the market
	price_bonuses: {
		life: 225,
		bombs: 75,
		submarine: 100,
		torpedo: 125,
		air_strike: 100
	},

	// default numbers of the bonuses for all field sizes:
	multibomb: 1,	
	dinamite: 1,
	periskope: 1,
	torpedo: 1,

	startMoney: 200, 

	time_for_first_step: 120, 
	time_for_after_first_step: 5, // additional time for auto placed ships for hanle moving

	time_for_second_step: 20,

	time_for_periscope: 3,	// delay for the show of computer's ships

	lifes: 3

}