var appId = 'b41c7381e483857da652f07f00645fb2568d03cef2a5c8a3d57e967f2cd1dbf3';

// Создать сущность Vue
var demo = new Vue({
	el: "#app", // Элемент DOM в котором будет работать Vue
	data: {
		photos: [],
		totalPhotos: 0,
		perPage: 9,
		currentPage: 1
	},
	methods: {
		fetchPhotos: function(page) {
			var options = {
				params: {
					client_id: appId,
					page: page,
					per_page: this.perPage
				}
			}

			this.$http.get('https://api.unsplash.com/photos', options).then(function (response) {
				this.photos = response.data

				// parseInt - привести строку к числу
				this.totalPhotos = parseInt(response.headers.get('x-total'))

				this.currentPage = page
			}, console.log)
		}
	},
	created: function(){
		this.fetchPhotos(this.currentPage);
	}
});