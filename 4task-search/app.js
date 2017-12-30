// Создать сущность Vue
var demo = new Vue({
	el: "#app", // Элемент DOM в котором будет работать Vue
	data: {
		searchString: "",
		articles: [
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
	computed: {
		filteredArticles: function(){
			let articles__array = this.articles,
				searchString = this.searchString;

			if(!searchString) {
				return articles__array;
			}

			searchString = searchString.trim().toLowerCase();

			articles__array = articles__array.filter(function(item) {
				if(item.title.toLowerCase().indexOf(searchString) !== -1) {
					return item;
				}
			});

			return articles__array;
		}
	}
});