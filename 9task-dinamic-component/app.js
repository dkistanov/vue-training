// Создать сущность Vue
var demo = new Vue({
	el: "#app", // Элемент DOM в котором будет работать Vue
	data: { // переменные
		currentView: 'circles' // видимый компонент
	},
	components: { // компоненты
		circles: { // название
			template: '#circles-template' // шаблон
		},
		triangle: {
			template: '#triangle-template'
		},
		square: {
			template: '#square-template'
		},
		egg: {
			template: '#egg-template'
		}
	},
	// функции ( методы ), вызываемые в vue
	methods: {
		switchView: function(view) { // смена видимого компонента
			// присвоить переменной currentView значение view
			this.currentView = view;
		}
	}
});