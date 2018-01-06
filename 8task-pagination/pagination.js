// vue component 'pagination'
// pagination - какой тег потом использовать в коде html
Vue.component('pagination', {
	// какой id у <template></template>
	template: "#pagination-template",
	// полученные параметры
	props: {
		current: { // выбранные
			type: Number, // тип данных
			default: 1 // значение по умолчанию
		},
		total: { // всего
			type: Number,
			default: 0
		},
		perPage: { // кол-во элементов на странице
			type: Number,
			default: 9
		},
		pageRange: { // диапазон
			type: Number,
			default: 2
		}
	},
	// вычисляемые свойства
	computed: {
		pages: function(){ // страницы
			// массив
			var pages = [];

			// цикл for
			// начиная от rangeStart - вычисляемое свойство
			// заканчивая rangeEnd - вычисляемое свойство
			for(i=this.rangeStart; i <= this.rangeEnd; i++) {
				// добавить в массив элемент i
				pages.push(i)
			}

			// вернуть массив
			return pages
		},
		rangeStart: function(){ // старт диапазона
			// start = current ( выбранная ) - pageRange ( диапазон )
			var start = this.current - this.pageRange

			// вернуть start если > 0, если же нет то вернуть 1
			return (start > 0) ? start : 1
		},
		rangeEnd : function(){ // конец диапазона
			// end = current ( выбранная ) + pageRange ( диапазон )
			var end = this.current + this.pageRange

			// вернуть end если < totalPages, если же нет то вернуть totalPages
			// totalPages - вычисляемое свойство
			return (end < this.totalPages) ? end : this.totalPages
		},
		totalPages: function(){ // всего страниц
			// вернуть округленное значение деления общего кол-во фоток, на кол-во фоток на одной странице
			// Math.ceil() - округление
			// total - всего фоток
			// perPage - фоток на одной странице
			return Math.ceil(this.total/this.perPage)
		},
		nextPage: function () { // следующая страница
			// вернуть значение current ( выбранная ) + 1
			return this.current + 1
		},
		prevPage: function () { // предыдущая страница
			// вернуть значение current ( выбранная ) - 1
			return this.current - 1
		}
	},
	// методы ( функции ), которые будут использоваться
	methods: {
		hasFirst: function(){ // это первая ?
			// вернуть true если rangeStart не равно 1
			// rangeStart - вычисляемое свойтсво
			return this.rangeStart !== 1
		},
		hasLast: function(){ // это последняя ?
			// вернуть true если rangeEnd < чем totalPages
			// rangeEnd, totalPages - вычисляемое свойтсва
			return this.rangeEnd < this.totalPages
		},
		hasPrev: function(){ // есть ли предыдущая страница
			// вернуть true если current ( выбранная ) > 1
			return this.current > 1
		},
		hasNext: function(){ // есть ли следующая страница
			// вернуть true если current ( выбранная ) < totalPages ( общее кол-во страниц )
			// totalPages - вычисляемое свойтсво
			return this.current < this.totalPages
		},
		// изменить страницу со входным параметром номером страницы
		// page - переданный параметр
		changePage: function (page) {
			// создать событие page-changed и передать в него page
			// $emit - создать событие "навверх", чтобы можно было использовать в родители
			this.$emit('page-changed', page)
		}
	}
})