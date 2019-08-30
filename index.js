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

	},

	created() {

		this.salutation = this.salutationByTimeOfDay()

	}

})