const load = (component) => { 
	return window.httpVueLoader('components/' + component + '.vue')
}

const vm = new window.Vue({

	el: '#app',

	components: {
		'mood-button': load('mood-button'),
	},

	data() {
		return {
			salutation: 'Hello',
			currentMood: '',
			url: config.apiURL || 'http://localhost'
		}
	},

	methods: {

		salutationByTimeOfDay() {
			let hour = new Date().getHours()
			let response = 'Hello'

			if (hour < 12) {
			  response = 'Good morning'
			} else if (hour < 18) {
			  response = 'Good afternoon'
			} else {
			  response = 'Good evening'
			}

			return response
		},

		getLastMood() {
			let root = this
			axios.get(this.url).then((response) => {
				console.log('Last mood', response.data)
				root.currentMood = response.data.mood
			})
		},

	},

	created() {

		this.salutation = this.salutationByTimeOfDay()
		this.getLastMood()

	}

})