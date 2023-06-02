<template>
	<div
		v-if="order"
	 	class="content py-16"
	>
		<HeadingTop :showBtnGoBack="true" />
		<div class="mb-10">
			<v-row class="align-start no-gutters">
				<v-col cols="12" sm="12" md="10" lg="7" class="">
					<!-- pagos -->
					<PaymentShipping :order="order" />
				</v-col>
				<v-col cols="12" sm="auto" style="position: sticky; top: 10%">
					<!-- resume -->
					<ResumeOrder :order="order" />
				</v-col>
			</v-row>
			<DataClient
				:order="order"
				class="mt-6"
			/>
		</div>
	</div>
</template>

<script>
import HeadingTop from '../../../components/HeadingTop.vue';
import PaymentShipping from '../../../components/PaymentShipping.vue';
import ResumeOrder from '../../../components/ResumeOrder.vue';
import DataClient from '../../../components/DataClient.vue';
export default {
	middleware: [
		'intended'
	],
	
	components: { ResumeOrder, HeadingTop, PaymentShipping, DataClient },
	head: {
		title: 'Métodos de pago',
	},

	async fetch() {
    	await this.$store.dispatch("orders/getOrder", {
      		$nuxt: this.$nuxt,
      		order_id: this.$route.params.id,
    	})
  	},

  	computed: {
    	order() {
      		return this.$store.getters["orders/getOrder"];
    	}
  	}
};
</script>

<style lang="scss" scoped></style>
