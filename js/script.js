// Assets for Scenes and Backgrounds
monogatari.assets ('scenes', {
	'pg13': 'pg13.png',
	'author': 'author.png',
	'0715': '0715.png',
	'0716': '0716.png',
	'0717': '0717.png',
	'school': 'school.jpg',
	'stage': 'stage.jpg',
	'chairs': 'chairs.jpg',
	'locker': 'locker.jpg',
	'library': 'library.jpg',
	'musala': 'musala.jpg'
});

// Characters
monogatari.character ({
	'i' : {
		name: 'Idris',
		color: '#4682B4'
	},
	'f' : {
		name: 'Firdaus',
		color: '#9ACD32'
	},
	'm' : {
		name: 'Mustafa',
		color: '#00008B'
	},
	'z' : {
		name: 'Zain',
		color: '#1E90FF'
	}
});

// Configuration for Credits
monogatari.configuration ('credits', {
		"Special Thanks to": {
		"The Only One God": "Allah", 
		"My friends": ["Muhammad Najib", "Radian"],
	},
	"Developers": {
		"Artist": "AvatarMaker.com",
		"Scenario Writer": "mnafisalmukhdi1",
	},
});

// Script
monogatari.script ({
	'_SplashScreen': [
	'show scene pg13 with fadeIn duration 3s',
	'wait 3000',
	'show scene author with fadeIn duration 3s',
	'wait 3000',
        'end'
	],
	'Start': [
        'nvl Kasus 1',
	'nvl Pertemuan',
	'jump Kasus01'
    	],
	'Kasus01': [
	'show scene 0715 with fadeIn duration 3s',
	'wait 3000',
	'show background school',
	'i Sekolah masuk serentak hari ini, termasuk yang baru bagiku, MA Sukamawar.'
	],
});
