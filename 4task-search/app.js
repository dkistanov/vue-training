// Создать сущность Vue
var demo = new Vue({
	el: "#app", // Элемент DOM в котором будет работать Vue
	data: { // переменные
		searchString: "", // строка поиска
		articles: [ // массив данных
			{
                "title": "27 сайтов с задачками для оттачивания навыков программирования",
                "url": "https://proglib.io/p/27-puzzle-websites-to-sharpen-your-skills/",
                "image": "https://proglib.io/wp-content/uploads/2016/10/coding-time-100x70.jpg"
            },
            {
                "title": "Готовимся к собеседованию в Google: 8 месяцев непрерывной работы",
                "url": "https://proglib.io/p/8-month-for-google-interview/",
                "image": "https://proglib.io/wp-content/uploads/2017/01/0_b11a3_8ff3ef7b_XL-100x70.jpg"
            },
            {
                "title": "15 материалов по разработке игр",
                "url": "https://proglib.io/p/gamedev-compilation/",
                "image": "https://proglib.io/wp-content/uploads/2017/05/gamedev-100x70.png"
            },
            {
                "title": "10 лучших видеокурсов для изучения Linux",
                "url": "https://proglib.io/p/linux-courses/",
                "image": "https://proglib.io/wp-content/uploads/2017/01/ruqlwta5wqy-100x70.jpg"
            },
            {
                "title": "Учебный план по осваиванию современного JavaScript",
                "url": "https://proglib.io/p/learning-modern-javascript/",
                "image": "https://proglib.io/wp-content/uploads/2016/12/1raWO3dhM4jMjf9VY-kZzNg-100x70.png"
            }
		]
	},
    // вычисляемые свойства
	computed: {
        // фильтрованные посты
		filteredArticles: function(){
            // переменные
			let articles__array = this.articles, // все посты
				searchString = this.searchString; // строка поиска

            // если строка поиска пуста то вернуть все посты
			if(!searchString) {
				return articles__array;
			}

            // обработать строку поиска, и записать её в эту же переменную
            // .trim() - удалить пробелы
            // .toLowerCase() - привести к прописному виду
			searchString = searchString.trim().toLowerCase();

            // отфильтровать массив, и записать его в эту же переменную
            // .filter(function(){}); - фильтр
            // item - входящий параметр
			articles__array = articles__array.filter(function(item) {
                //  если заголовок соответствует строке поиска то
				if(item.title.toLowerCase().indexOf(searchString) !== -1) {
					// вернуть этот элемент массива
                    return item;
				}
			});

            // вернуть полученный массив данных
			return articles__array;
		}
	}
});