<template>
	<div
		class="card-send d-flex align-center justify-center"
		:class="{ selected: false }"
	>
		<img src="" alt="" height="50" width="50" />
		<!-- <img :src="method.image" :alt="method.image" /> -->
		<!-- <p
                      class="text-center mt-2"
                      :class="{ 'text-default': method.id == 1 }"
                    >
                      {{ method.shipping_provider }} <br />
                      {{ method.description }}
                      <span v-if="method.total">
                        <br />
                        {{ method.total }}
                      </span>
                    </p> -->
	</div>
</template>

<script>
export default {
	// props: {
	// 	method: {
	// 		type: Object,
	// 		default: {},
	// 	},
	// },
};
</script>

<style lang="scss" scoped>
.card-send {
	width: 160px;
	height: 134px;

	border: 2px solid #000000;
	border-radius: 14px;
	img {
		display: block;
		margin: 0 auto;
		max-width: 100%;
	}
}
.selected {
	border: 2px solid #2cafe5;
	background-color: #d9d9d95c;
}
</style>
