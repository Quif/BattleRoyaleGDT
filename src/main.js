var BR = {};

(function () {

	// Topics
	BR.addTopic = function () {
		GDT.addTopics([
		{
		    id: "BattlRoyale",
		    name: "Battle Royale".localize("game topic"),
		    genreWeightings: [1.0, 0.9, 0.6, 0.8, 0.7, 0.7],
			audienceWeightings: [0.7, 0.9, 1],
      iconUrl: 'https://i.imgur.com/YGEaH2O.png'
		}
	]);
	};

})();
