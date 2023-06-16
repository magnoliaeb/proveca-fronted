<template>
	<v-dialog
		v-model="$observer.showLogin"
		max-width="500px"
		content-class="card-dialog"
	>
		<v-card>
			<v-btn
				absolute
				left
				color="#000"
				@click="$observer.showLogin = false"
				text
				icon
				depressed
				small
				style="z-index: 9"
			>
				<v-icon>mdi-close</v-icon>
			</v-btn>

			<LoginContainer />
		</v-card>
	</v-dialog>
</template>

<script>
import LoginContainer from './LoginContainer';

export default {
	components: {
		LoginContainer,
	},
};
</script>
