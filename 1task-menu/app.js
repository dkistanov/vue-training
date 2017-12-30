// Создать сущность Vue
var demo = new Vue({
	el: "#app", // Элемент DOM в котором будет работать Vue
	// переменные
	data: {
		active: 'home'
	},
	// функции(методы) которые будут вызваны
	methods: { 
		// функция makeActive в которую передаем значение
		makeActive: function(item) {
			this.active = item; // подставляем переданное значение в переменную active
		}
	}
});