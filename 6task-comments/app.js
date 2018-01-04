// Создать сущность Vue
var demo = new Vue({
	el: "#app", // Элемент DOM в котором будет работать Vue
	data: { // переменные
		name: 'Andrew',
		text: '',
		maxText: 100,
		errorMsg: '',
		items: []
	},
	computed: {
		enterComment: function(){
			return this.maxText - this.text.length;
		}
	},
	methods: {
		addComment: function () {
			if(this.name.length == 0) {
				this.errorMsg = "Введите Имя";
				this.$refs.nameComment.focus();
				return;
			}
			if(this.text.length == 0) {
				this.errorMsg = "Введите Текст";
				this.$refs.textComment.focus();
				return;
			}

			this.errorMsg = '';
			this.items.push({
				name: this.name,
				text: this.text
			});
			this.name = '';
			this.text = '';
		},
		removeComment: function(items) {
			let index = this.items.indexOf(items)
			this.items.splice(index, 1);
		}
	}
});