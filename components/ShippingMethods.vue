<template>
	<div>
		<v-row class="mt-4">
			<v-col cols="12" class="">
				<h3>Métodos de Envío</h3>
			</v-col>
		</v-row>

		<v-row class="justify-center justify-sm-start">
			<v-col
				v-for="(item, index) in items"
				:key="index"
				cols="auto"
				class="mb-3"
			>
				<button
          			v-ripple="{ class: `primary--text` }"
          			@click="choose(item.carrier.id)"
          			class="d-flex flex-column justify-center align-center"
          			:class="[item.carrier.id == selected ? 'oulined' : '']"
        		>
          			<span class="text-break">
            			{{ item.carrier.name }}
            			<b> {{ $util.getMoneyFormat(item.quote.price) }}</b>
          			</span>
        		</button>

				<!-- <div
					class="card-send d-flex align-center justify-center"
					:class="[item.carrier.id == selected ? 'oulined' : '']"
				>
					<img
						src=""
						alt=""
						height="50"
						width="50"
					/>
				</div> -->
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
  data() {
    return {
      selectedMethod: null,
    };
  },

  computed: {
    items() {
      return this.$store.getters["cart/getShippingMethods"];
    },

    selected() {
      let selected = this.$store.getters["cart/getSelectedShippingMethod"];

      let id = this._.get(selected, "carrier.id");

      this.selectedMethod = id;

      return id;
    },
  },

  methods: {
    choose(carrier_id) {
      this.$store.dispatch("cart/setShippingMethod", {
        carrier_id: carrier_id,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
h3 {
	font-style: normal;
	font-weight: 700;
	font-size: $fs-lg;
	color: #000000;
	text-transform: initial;
}

button {
	width: 100%;
	max-width: 374px !important;
	// height: 73px !important;
}

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
