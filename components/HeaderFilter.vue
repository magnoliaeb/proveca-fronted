<template>
	<div
		v-if="category"
		class="filter"
	>
		<v-row
			align="center"
			justify="start"
		>
			<v-col
				v-for="category, i in list"
				:key="i"
				class="shrink"
			>
				<v-chip
					color="#fafafa"
					class="subcategory rounded-lg"
					:to="{ name: 'productos', query: { category_id: category.id } }"
				>
					{{ category.name }}
				</v-chip>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	computed: {
		categories() {
			return this.$store.getters['products/getCategories']
		},

		category() {
			return this.$route.query.category_id
				? this.categories.find(c => c.id == this.$route.query.category_id)
				: null
		},

		children() {
			return this.category
				? this.category.children
				: []
		},

		parent() {
			return this.category
				? this.categories.find(c => c.id == this.category.parent_id)
				: null
		},

		brothersAndSelf() {
			return this.parent
				? this.parent.children
				: []
		},

		list() {
			return Boolean(this.children.length)
				? this.children
				: this.brothersAndSelf
		}
	},

	methods: {
		//
	}
}
</script>

<style lang="scss" scoped>
h2 {
	font-weight: 700;
	text-transform: uppercase;
	color: #2cafe5;
}
.icon {
	height: 24px;
	height: 24px;
}

.subcategory {
	font-weight: 400 !important;
	color: #000;
	font-size: $fs-base !important;
	// color: #2cafe5;
}

@media screen and (min-width: $md) {
	.icon {
		height: 30px;
		height: 30px;
	}
}
</style>
