// ключ к подключение удаленном api
var appId = 'b41c7381e483857da652f07f00645fb2568d03cef2a5c8a3d57e967f2cd1dbf3';

// Создать сущность Vue
var demo = new Vue({
	el: "#app", // Элемент DOM в котором будет работать Vue
	data: { // переменные
		photos: [], // фотографии
		totalPhotos: 0, // всего фото
		perPage: 9, // на одной странице
		currentPage: 1 // выбранная страница - страница сейчас
	},
	// методы ( функции ), которые будут использоваться
	methods: {
		// загрузить фото, в параметр передаётся страница
		fetchPhotos: function(page) {
			// опция передаваемые в get запрос
			var options = {
				params: {
					client_id: appId,
					page: page,
					per_page: this.perPage
				}
			}

			// get запрос на api с переданными опциями, и функция then - выполнить тогда, когда получен ответ
			// response - положительный ответ
			// error - отрицательный ответ
			this.$http.get('https://api.unsplash.com/photos', options).then(function (response) {
				// записать в массив photos полученные элементы
				this.photos = response.data

				// записать в переменную totalPhotos сколько всего элементов полученно
				// parseInt - привести строку к числу
				this.totalPhotos = parseInt(response.headers.get('x-total'))

				// записать в переменную currentPage переданную страницу page
				this.currentPage = page
			}, console.log)
		}
	},
	// сделать при загрузке vue
	created: function(){
		// вызвать функцию fetchPhotos с переданной переменной currentPage
		this.fetchPhotos(this.currentPage);
	}
});