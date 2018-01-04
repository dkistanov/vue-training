// Создать сущность Vue
var demo = new Vue({
	el: "#app", // Элемент DOM в котором будет работать Vue
	data: {
		tweets: [],
		resourse_url: 'https://jsonplaceholder.typicode.com/photos/',
		counter: 0,
		callCounter: 0,
		startTweets: 0,
		maxTweets: 10,
		loading: false
	},
	methods: {
		onScroll: function(event){
			var wrapper = event.target,
				list = wrapper.firstElementChild

			var scrollTop = wrapper.scrollTop,
				wrapperHeight = wrapper.offsetHeight,
				listHeight = list.offsetHeight

			var diffHeight = listHeight - wrapperHeight

			if(diffHeight <= scrollTop && !this.loading) {
				this.counter += 10;
				this.load()
			}
		},
		load: function() {
			this.loading = true;
			let counter = this.counter;
			for(i=this.startTweets; i<this.maxTweets; i++) {
				counter++;
				this.$http.get(this.resourse_url + counter).then(function(response) {
					
					var tweets = response.body;

					this.tweets = this.tweets.concat(tweets);
					this.loading = false;
				}, function(error) {
					console.log(error);
					this.loading = false;
				});
			}
			this.callCounter++;
			this.startTweets+=10;
			this.maxTweets+=10;
		}
	},
	created(){
		this.load()
	}
});