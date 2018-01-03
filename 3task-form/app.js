Vue.filter('currency', function(val) {
	return '$ ' + val.toFixed(2);
});

// Создать сущность Vue
var demo = new Vue({
	el: "#app", // Элемент DOM в котором будет работать Vue
	data: { // переменные
		services: [ // массив данных
			{
				name: 'Веб разработка', // название
				price: 300, // цена
				active:true // положение активности
			},{
				name: 'Дизайн',
				price: 400,
				active:false
			},{
				name: 'Интеграция',
				price: 250,
				active:false
			},{
				name: 'Обучение',
				price: 220,
				active:false
			}
		]
	},
	// функции(методы) которые будут использоваться
	methods: {
		toggleActive: function(s){ // изменить положение active
			// если true то сделать false, если false то сделать true
			s.active = !s.active;
		},
		total: function(){ // функция суммы
			let total = 0;

			// перебрать массив данных,
			this.services.forEach(function(s){
				// если у элемента положение active - true то выполнить условие
				if(s.active){
					total+= s.price; // прибавить к сумме цену элемента
				}
			});

			return total; // вернуть сумму - число
		}
	}
});