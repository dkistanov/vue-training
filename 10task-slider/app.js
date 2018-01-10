// ключ к подключение удаленном api
var appId = 'b41c7381e483857da652f07f00645fb2568d03cef2a5c8a3d57e967f2cd1dbf3';

// Создать сущность Vue
var demo = new Vue({
	el: "#app", // Элемент DOM в котором будет работать Vue
	data: { // переменные
		photos: [], // массив фотографий
		switches: 'switch', // название анимации
		maxPhoto: 5, // максимальное кол-во фото
		index: 0 // начальный index
	},
	computed: {
		// предыдущий index, возрващает число которое меньше index на один
		prevIndex: function(){
			return this.index - 1;
		},
		// следующий index, возвращает число которое больше index на один
		nextIndex: function() {
			let index = this.index;
			return this.index + 1;
		}
	},
	// методы ( функции ), которые будут использоваться
	methods: {
		// загрузить фото
		fetchPhotos: function() {
			var options = { // опции
				params: { // параметры
					client_id: appId,
					orientation: 'landscape',
					count: this.maxPhoto
				}
			}

			// get запрос на api с переданными опциями, и функция then - выполнить тогда, когда получен ответ
			// response - положительный ответ
			// error - отрицательный ответ
			this.$http.get('https://api.unsplash.com/photos', options).then(function (response) {
				// записать в массив photos полученные элементы
				this.photos = response.data

				console.log('Получен ответ ' + true);

				// записать в переменную totalPhotos сколько всего элементов полученно
				// parseInt - привести строку к числу
				// this.totalPhotos = parseInt(response.headers.get('x-total'))

			}, console.log)
		},
		// добавление активного класса и возрващение true
		activeClass: function(index) {
			// если передаваемый index равен нашему index, то вернуть true
			if(index == this.index) {
				return true
			}
		},
		// изменить index
		switchIndex: function (index) {
			// если наш index больше чем передаваемый index, то делать анимацию unswitch 
			if(this.index > index) {
				this.switches = 'unswitch';
			} else { // если же меньше, то switch
				this.switches = 'switch';
			}
			// присвоить передаваемое значение, нашему index
			this.index = index;
		},
		hasFirst: function() { // это первый элемент ?
			// возвращать true если наш index больше 0
			return this.index > 0
		},
		hasLast: function() { // это последний элемент ?
			// возвращать true если наш index меньше чем длина массива - 1
			return this.index < this.photos.length - 1
		}
	},
	// сделать при загрузке vue
	created: function(){
		// вызвать функцию fetchPhotos
		this.fetchPhotos();
	}
});