import type { Actions } from './$types'


export const actions: Actions = {
	login: async ({request}) => {
		// TODO log the user in
		try {
			const formData = await request.formData()

			const data = Object.fromEntries(formData)      

			const response = await fetch('http://localhost:3000/users/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				mode: 'cors',
				body: JSON.stringify(data)
			})

      return response.json()
		} catch (error) {
      console.error(error)

    }
	},

	register: async (event) => {
		// TODO register user
	}
} satisfies Actions
