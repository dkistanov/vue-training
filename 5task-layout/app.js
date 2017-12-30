// Создать сущность Vue
var demo = new Vue({
	el: "#app", // Элемент DOM в котором будет работать Vue
	data: { // переменные
        layout: "grid", // какой layout
        // массив данных
		articles: [
            {
                "title": "27 сайтов с задачками для оттачивания навыков программирования",
                "url": "https://proglib.io/p/27-puzzle-websites-to-sharpen-your-skills/",
                "image": {
                    "large": "https://proglib.io/wp-content/uploads/2016/10/coding-time.jpg",
                    "small": "https://proglib.io/wp-content/uploads/2016/10/coding-time-324x160.jpg"
                }
            },
            {
                "title": "Готовимся к собеседованию в Google: 8 месяцев непрерывной работы",
                "url": "https://proglib.io/p/8-month-for-google-interview/",
                "image": {
                    "large": "https://proglib.io/wp-content/uploads/2017/01/0_b11a3_8ff3ef7b_XL.jpg",
                    "small": "https://proglib.io/wp-content/uploads/2017/01/0_b11a3_8ff3ef7b_XL-324x160.jpg"
                }
            },
            {
                "title": "15 материалов по разработке игр",
                "url": "https://proglib.io/p/gamedev-compilation/",
                "image": {
                    "large": "https://proglib.io/wp-content/uploads/2017/05/gamedev.png",
                    "small": "https://proglib.io/wp-content/uploads/2017/05/gamedev-324x160.png"
                }
            },
            {
                "title": "Учебный план по осваиванию современного JavaScript",
                "url": "https://proglib.io/p/learning-modern-javascript/",
                "image": {
                    "large": "https://proglib.io/wp-content/uploads/2016/12/1raWO3dhM4jMjf9VY-kZzNg.png",
                    "small": "https://proglib.io/wp-content/uploads/2016/12/1raWO3dhM4jMjf9VY-kZzNg-324x160.png"
                }
            },
            {
                "title": "10 лучших видеокурсов для изучения Linux",
                "url": "https://proglib.io/p/linux-courses/",
                "image": {
                    "large": "https://proglib.io/wp-content/uploads/2017/01/ruqlwta5wqy.jpg",
                    "small": "https://proglib.io/wp-content/uploads/2017/01/ruqlwta5wqy-324x160.jpg"
                }
            },
            {
                "title": "Путь веб-разработчика в 2017",
                "url": "https://proglib.io/p/2017-web-developer-path/",
                "image": {
                    "large": "https://proglib.io/wp-content/uploads/2017/05/img-web-development-1.jpg",
                    "small": "https://proglib.io/wp-content/uploads/2017/05/img-web-development-1-324x160.jpg"
                }
            }
        ]
	}
});