<script lang="ts">
	import type { PageData, ActionData } from './$types'

	export let data: PageData

	export let form: ActionData
</script>

<div class="container">
	<hgroup>
		<h2>Register</h2>
		<h3>Already User?</h3>
	</hgroup>
	<a href="/login">Log in</a>

	<form method="POST" action="?/login">
		<!-- Grid -->
		<div class="grid">
			<!-- Markup example 1: input is inside label -->
			<label for="username">
				Username
				<input type="text" id="username" name="username" placeholder="Username" required />
			</label>

			<label for="password">
				Password
				<input type="password" id="password" name="password" placeholder="Password" required />
			</label>
		</div>
		<!-- Markup example 2: input is after label -->
		<label for="email">Email address</label>
		<input type="email" id="email" name="email" placeholder="Email address" required />
		<small>We'll never share your email with anyone else.</small>

		<!-- Button -->
		<button type="submit">Login</button>
	</form>
</div>
