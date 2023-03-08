<script lang="ts">
	import type { PageData, ActionData } from './$types'
	import { z } from 'zod'

	export let data: PageData

	export let form: ActionData

	let formData = {
		email: '',
		password: ''
	}
	const loginSchema = z.object({
		email: z
			.string({ required_error: 'you have to enter an email' })
			.min(1)
			.max(64)
			.email({ message: 'Email must be a valid email address' }),
		password: z.string().min(6).max(16).trim()
	})


	let result = loginSchema.safeParse(formData)
	$: console.log(result)
	

</script>

<div class="container">
	<hgroup>
		<h2>Login</h2>
		<h3>Not an user yet?</h3>
	</hgroup>
	<a href="/register">Create an account</a>

	<form method="POST" action="?/login">
		<!-- Grid -->
		<label for="email"
			>Email address
			<input
				type="email"
				id="email"
				name="email"
				placeholder="Email address"
				required
				bind:value={formData.email}
			/>
		</label>
		<!-- Markup example 2: input is after label -->
		<div class="grid">
			<!-- Markup example 1: input is inside label -->

			<label for="password">
				Password
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					required
					bind:value={formData.password}
				/>
				<small>We'll never share your email with anyone else.</small>
			</label>
		</div>

		<!-- Button -->
		<button type="submit">Login</button>
	</form>
</div>
