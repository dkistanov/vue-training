// Создать сущность Vue
var demo = new Vue({
	el: "#app", // Элемент DOM в котором будет работать Vue
	data: { // переменные
		name: 'Andrew', // имя по умолчанию
		text: '', // текст комментария
		maxText: 100, // максимальное кол-во текста
		errorMsg: '', // письмо ошибки
		items: [] // массив 
	},
	// вычисляемые свойства
	computed: {
		// сколько символов осталось
		enterComment: function(){
			// вернуть вычисление макс. - длины набранного текста
			// maxText - максимальное кол-во текста
			// text.length - длина набранного текста
			return this.maxText - this.text.length;
		}
	},
	// функции(методы) которые будут использоваться
	methods: {
		addComment: function () { // добавить комментарий
			// если длина имени = 0, то
			if(this.name.length == 0) {
				// записать в переменную errorMsg переданное значение
				this.errorMsg = "Введите Имя";
				// на элементе nameComment сделать focus ( направить пользователя набирать сообщение )
				this.$refs.nameComment.focus();
				// вернуть false
				return;
			}
			// если длина текста = 0, то
			if(this.text.length == 0) {
				// записать в переменную errorMsg переданное значение
				this.errorMsg = "Введите Текст";
				// на элементе textComment сделать focus ( направить пользователя набирать сообщение )
				this.$refs.textComment.focus();
				// вернуть false
				return;
			}

			// записать в переменную errorMsg переданное значение
			this.errorMsg = '';
			// добавить в массив items объект
			this.items.push({
				// под ключом name - переменную name
				name: this.name,
				// под ключом text - переменную text
				text: this.text
			});
			// записать в переменную name переданное значение
			this.name = '';
			// записать в переменную text переданное значение
			this.text = '';
		},
		// удалить комментарий с переданным параметром ( массив - items )
		removeComment: function(items) {
			let index = this.items.indexOf(items)
			this.items.splice(index, 1);
		}
	}
});