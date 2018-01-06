// Создать сущность Vue
var demo = new Vue({
	el: "#app", // Элемент DOM в котором будет работать Vue
	data: { // переменные
		tweets: [], // массив 
		resourse_url: 'https://jsonplaceholder.typicode.com/photos/', // ссылка запроса
		counter: 0, // счетчик
		callCounter: 0, // счетчик вызовов
		startTweets: 0, // начала отчета
		maxTweets: 10, // максимально загрузить
		loading: false // процесс загрузки
	},
	// функции(методы) которые будут использоваться
	methods: {
		// метод при скролле
		onScroll: function(event){
			// переменные
			var wrapper = event.target, // обертка
				list = wrapper.firstElementChild // прокручиваемый лист

			var scrollTop = wrapper.scrollTop, // высота прокрутки
				wrapperHeight = wrapper.offsetHeight, // высота обертки
				listHeight = list.offsetHeight // высота списка

			// вычисляемая высота
			var diffHeight = listHeight - wrapperHeight

			// если вычисляемая высота станет меньше или равна чем высота прокрутки и загрузка не идёт, то
			if(diffHeight <= scrollTop && !this.loading) {
				// увеличить счетчик на 10
				this.counter += 10;
				// вызвать метод load
				this.load()
			}
		},
		// загрузка
		load: function() {
			// загрузка началася
			this.loading = true;
			// записать счетчик в переменную
			let counter = this.counter;
			// цикл for
			// начиная от startTweets и достигнув maxTweets
			// startTweets - старт отчета
			// maxTweets - макс. кол-во
			for(i=this.startTweets; i<this.maxTweets; i++) {
				// увеличить counter на один
				counter++;
				// get запрос на jsonplaceholder, и функция then - выполнить тогда, когда получен ответ
				// response - положительный ответ
				// error - отрицательный ответ
				// this.resourse_url + counter - записанная ссылка + счетчик
				this.$http.get(this.resourse_url + counter).then(function(response) {
					// записать в переменную tweets - полученные ответ
					var tweets = response.body;

					// соединить массив tweets с массивом tweets
					this.tweets = this.tweets.concat(tweets);
					// загрузка окончена
					this.loading = false;
				}, function(error) {
					// вывести ошибку
					console.log(error);
					// загрузка окончена
					this.loading = false;
				});
			}
			// увеличить callCounter на один
			this.callCounter++;
			// увеличть startTweets на 10
			this.startTweets+=10;
			// увеличть maxTweets на 10
			this.maxTweets+=10;
		}
	},
	// сделать при загрузке vue
	created(){
		// вызвать метод load
		this.load()
	}
});