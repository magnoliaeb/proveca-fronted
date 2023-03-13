<template>
	<div class="single-product">
		<v-slide-group
			v-model="model"
			class=""
			direction="vertical"
			selected-class="bg-primary"
			mandatory
			show-arrows
			max="4"
		>
			<v-slide-item
				v-for="(img, index) in 3"
				:key="index"
				v-slot="{ active, toggle }"
			>
				<v-card
					:color="active ? '' : 'white'"
					class="ma-2 d-flex justify-center align-center"
					:min-height="heightAndidthImg"
					:height="heightAndidthImg"
					:width="heightAndidthImg"
					@click="toggle"
					flat
				>
					<v-img
						@click="passImg(img)"
						:width="heightAndidthImg"
						transition="scale-transition"
						:height="heightAndidthImg"
						:src="`https://picsum.photos/500/300?image=${8 * 5 + 10}`"
						:lazy-src="`https://picsum.photos/10/6?image=${8 * 5 + 10}`"
						:alt="'img-product'"
						aspect-ratio="1"
						class="grey lighten-3 img mx-auto scale"
					>
						<template v-slot:placeholder>
							<v-row class="fill-height ma-0" align="center" justify="center">
								<v-progress-circular
									:size="30"
									:width="3"
									indeterminate
									color="primary"
								></v-progress-circular>
							</v-row>
						</template>
					</v-img>
				</v-card>
			</v-slide-item>
		</v-slide-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			model: 0,
		};
	},
	props: {
		imagesProduct: Array,
	},
	computed: {
		heightAndidthImg() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return '80px';
				case 'sm':
					return '90px';
				case 'md':
					return '100px';
				case 'lg':
					return '100px';
				case 'xl':
					return '100px';
			}
		},
	},
	methods: {
		passImg(img) {
			this.$emit('changeImg', img);
		},
	},
};
</script>

<style lang="scss" scoped></style>
