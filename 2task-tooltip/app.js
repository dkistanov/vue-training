// Создать сущность Vue
var demo = new Vue({
	el: "#app", // Элемент DOM в котором будет работать Vue
	data: { // переменные
		text_content: "Правь меня.", // текст
		show_tooltip: false // показывание tooltip
	},
	// функции(методы) которые будут использоваться
	methods: {
		hideTooltip(){ // скрыть tooltip
			this.show_tooltip = false; 
		},
		toggleTooltip: function (){ // изменить показывание tooltip
			// если показана скрыть, если скрыта показать
			this.show_tooltip = !this.show_tooltip;
		}
	}
});