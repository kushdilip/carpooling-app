import Ember from 'ember';

export default Ember.ArrayController.extend({

	selectedCar: null,
	selectedCarObj: function () {
		var selectedCarId = this.get("selectedCar");
		var selectedCar = this.get("content").filter(function (car) {
			return car.get("id") === selectedCarId;
		})[0];

		if(selectedCar) return selectedCar
	}.property("selectedCar"),

	isCarSelected: function () {
		console.log("hello")
	}.property("selectedCar"),

	actions: {
		updateCarPool: function () {
			var occupied = this.get("selectedCarObj.occupied");
			occupied += 1;

			var selectedCarId = this.get("selectedCar");
			var selectedCar = this.get("content").filter(function (car) {
				return car.get("id") === selectedCarId;
			})[0];
			selectedCar.set("occupied", occupied);
			// selectedCar.save();
			// var model = this.get("content");
			// model.save();
		}
	}

});
