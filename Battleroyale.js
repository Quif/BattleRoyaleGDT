(function () {
	var ready = function () {

	// Adds topics
	BR.addTopic();

	//Adds platforms
	// BR.addPlatformName();

	// Adds events

	// Adds researches
		//BR.addResearch();

	};

	var error = function () {
	};

	GDT.loadJs([
	'mods/Battleroyale/gdt-modAPI/helpers/checks.js',
	'mods/Battleroyale/gdt-modAPI/api/persistence.js',
	'mods/Battleroyale/gdt-modAPI/api/events.js',
	'mods/Battleroyale/gdt-modAPI/api/platforms.js',
	'mods/Battleroyale/gdt-modAPI/api/topics.js',
	'mods/Battleroyale/gdt-modAPI/api/research.js',
	'mods/Battleroyale/gdt-modAPI/examples/examples.js',
	'mods/Battleroyale/src/main.js'
	], ready, error);
})();
