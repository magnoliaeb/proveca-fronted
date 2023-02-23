<template>
	<client-only>
		<div class="">
			<v-row class="" v-for="(item, index) in [1, 2, 3]" :key="index">
				<v-col cols="auto" class="py-0 flex-grow-0">
					<v-skeleton-loader
						width="80px"
						height="80px"
						max-height="80px"
						tile
						type="image"
					></v-skeleton-loader>
				</v-col>
				<v-col cols="" class="px-0" style="max-width: 100%">
					<v-row>
						<v-col
							cols="12"
							md="3"
							lg="2"
							class="pt-0"
							v-for="(item, index) in numItems"
							:key="index"
						>
							<v-skeleton-loader
								width="100%"
								height="10px"
								max-height="10px"
								tile
								type="image"
							></v-skeleton-loader>
						</v-col>
					</v-row>
					<!-- <v-skeleton-loader class="" tile type="table-row"></v-skeleton-loader> -->
					<!-- <v-skeleton-loader
                tile
                class="hidden-md-and-up"
                type="table-row"
              ></v-skeleton-loader> -->
					<!-- <v-col cols="12" md="4" class="py-0 hidden-sm-and-down">
              <v-skeleton-loader tile type="table-row"></v-skeleton-loader>
            </v-col> -->
					<!-- <v-col cols="12" md="4" class="py-0 hidden-sm-and-down">
              <v-skeleton-loader tile type="table-row"></v-skeleton-loader>
            </v-col> -->

					<!-- <v-col cols="12" sm="12">
            <v-divider></v-divider>
          </v-col> -->
				</v-col>
			</v-row>
		</div>
	</client-only>
</template>

<script>
export default {
	computed: {
		numItems() {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs':
					return 2;
				case 'sm':
					return 2;
				case 'md':
					return 4;
				case 'lg':
					return 6;
				case 'xl':
					return 6;
			}
		},
	},
};
</script>

<style lang="scss" scoped></style>
