Vue.filter('currency', function(val) {
	return '$ ' + val.toFixed(2);
});

var demo = new Vue({
	el: "#app",
	data: {
		services: [
			{
				name: 'Веб разработка',
				price: 300,
				active:true
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
	methods: {
		toggleActive: function(s){
			s.active = !s.active;
		},
		total: function(){
			let total = 0;

			this.services.forEach(function(s){
				if(s.active){
					total+= s.price;
				}
			});

			return total;
		}
	}
});