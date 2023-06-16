<template>
	<v-dialog
		v-model="showAlert"
		max-width="783px"
		persistent
		content-class="card-dialog"
	>
		<v-card class="py-4" style="position: relative" height="438px">
			<v-btn @click="closeAlert" color="#000000" text icon absolute top right>
				<v-icon>mdi-close</v-icon>
			</v-btn>
			<v-card-text class="d-flex fill-height">
				<v-row class="justify-center no-gutters">
					<v-col cols="12" class="d-flex justify-center align-center">
						<img
							:src="require(`../assets/imgs/iconos/${iconAlert}.svg`)"
							alt="Email"
						/>
					</v-col>

					<v-col cols="12">
						<h2 class="mb-4 text-center">{{ titleAlert }}</h2>

						<p>{{ textAlert }}</p>
					</v-col>
					<v-col cols="12" md="auto" class="d-flex justify-center">
						<v-btn class="button-primary" to="/productos" depressed
							>Ir a catálogo</v-btn
						>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-dialog>
</template>

<script>
export default {
	props: {
		showAlert: {
			type: Boolean,
			default: false,
		},
		titleAlert: {
			type: String,
			default: 'title',
		},
		textAlert: {
			type: String,
			default: 'text',
		},
		iconAlert: {
			type: String,
			default: 'Email',
		},
	},
	data() {
		return {
			//   dialog: true,
		};
	},
	methods: {
		closeAlert() {
			this.$emit('closeAlert');
		},
	},
};
</script>

<style lang="scss" scoped>
h2 {
	font-style: normal;
	font-weight: 800;
	font-size: 18px;
	line-height: 230%;
	/* identical to box height, or 62px */

	text-transform: uppercase;

	color: #2cafe5;
}
p {
	font-weight: 400;
	font-size: 16px;
	line-height: 138%;
	/* identical to box height, or 29px */

	text-align: center;
}
a {
	width: 100% !important;
}

img {
	height: 30px;
	width: 30px;
}

@media screen and (min-width: $sm) {
	img {
		height: 60px;
		width: 60px;
	}
	h2 {
		font-size: 27px;
	}
	p {
		font-size: 21px;
	}
	a {
		font-size: 18.9422px !important;
		width: 341px !important;
	}
}
</style>
