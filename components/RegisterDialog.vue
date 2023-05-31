<template>
	<v-dialog
		v-model="$observer.showRegister"
		max-width="500px"
		content-class="card-dialog-contact"
	>
		<v-card>
			<v-btn
				absolute
				left
				color="#000"
				@click="$observer.showRegister = false"
				text
				icon
				depressed
				small
				style="z-index: 9;"
			>
				<v-icon>mdi-close</v-icon>
			</v-btn>

			<RegisterContainer/>
		</v-card>
	</v-dialog>
</template>

<script>
import RegisterContainer from './RegisterContainer'

export default {
	components: {
		RegisterContainer
	}
}
</script>
