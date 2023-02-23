<template>
	<div class="">
		<StepTitle :number="2" :title="'pago'" :hasDivider="true" />
		<v-row class="no-gutters">
			<v-col cols="12">
				<v-radio-group dense v-model="radios" class="">
					<v-row class="align-center">
						<v-col cols="12" sm="8" lg="8">
							<v-radio value="tarjeta">
								<template v-slot:label>
									<div
										class="d-flex flex-column flex-md-row align-start justify-start"
									>
										<h3 class="mb-3 mb-md-0 mr-md-3">
											Tarjeta de débito o crédito
										</h3>
										<img
											class="ml-md-3 img-card"
											src="../assets/imgs/methodos/card.svg"
											alt="tarjet"
										/>
									</div>
								</template>
							</v-radio>
						</v-col>
						<v-col cols="12" class="d-none d-sm-block" sm="4" lg="4">
							<v-btn
								block
								v-if="showBtnAddCard"
								@click="addNewCard"
								depressed
								class="button-primary"
								>Agregar tarjeta</v-btn
							>
						</v-col>
					</v-row>

					<v-slide-y-transition>
						<v-row v-show="radios == 'tarjeta'" class="no-gutters">
							<MethodCard
								:addCard="addCard"
								:showCard="showCard"
								:showListCard="showListCard"
								@openList="showListCard = true"
								@openCard="showCard = true"
								@closeCard="showCard = false"
								@closeList="showListCard = false"
							/>
						</v-row>
					</v-slide-y-transition>
					<v-row class="">
						<v-col cols="12">
							<v-divider></v-divider>
						</v-col>
					</v-row>
					<v-row class="">
						<v-col cols="12" md="6" class="d-sm-flex align-center">
							<v-radio value="tienda" class="mr-3">
								<template v-slot:label>
									<div>
										<h3 class="mb-0">Tienda de autoservicio</h3>
									</div>
								</template>
							</v-radio>
							<img
								width="50px"
								style="object-fit: contain"
								src="../assets/imgs/methodos/oxxo.svg"
								alt="banco"
								height="50px"
							/>
						</v-col>
					</v-row>

					<v-slide-y-transition>
						<v-row class="no-gutters" v-show="radios == 'tienda'">
							<MethodStore />
						</v-row>
					</v-slide-y-transition>
					<v-row class="">
						<v-col cols="12">
							<v-divider></v-divider>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12" class="d-lg-flex align-center">
							<v-radio value="transferencia" class="mr-3">
								<template v-slot:label>
									<div>
										<h3 class="mb-0">Transferencias bancaria</h3>
									</div>
								</template>
							</v-radio>
							<v-row class="d-flex align-center">
								<v-col cols="4">
									<img
										width="100%"
										class=""
										height="20px"
										src="../assets/imgs/methodos/bbva.svg"
										alt="banco"
									/>
								</v-col>
								<v-col cols="4">
									<img
										width="100%"
										class=""
										height="20px"
										src="../assets/imgs/methodos/banorte.svg"
										alt="banco"
									/>
								</v-col>
								<v-col cols="4">
									<img
										width="100%"
										class=""
										height="20px"
										src="../assets/imgs/methodos/santander.svg"
										alt="banco"
									/>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
					<v-slide-y-transition>
						<v-row class="no-gutters" v-show="radios == 'transferencia'">
							<MethodBankTransfer />
						</v-row>
					</v-slide-y-transition>
					<v-row class="">
						<v-col cols="12">
							<v-divider></v-divider>
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="12">
							<v-radio value="paypal" class="">
								<template v-slot:label>
									<div class="d-sm-flex align-center">
										<img
											class="mr-sm-3 img-paypal"
											src="../assets/imgs/methodos/paypal.svg"
											alt="paypal"
										/>
										<h4 class="">
											PayPal (Tarjeta de débito, crédito o efectivo)
										</h4>
									</div>
								</template>
							</v-radio>
						</v-col>
					</v-row>
					<v-row class="mt-4">
						<v-col cols="12">
							<v-btn depressed class="button-primary" @click="sendPayment"
								>Realizar pago</v-btn
							>
						</v-col>
					</v-row>
				</v-radio-group>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import CardForm from './CardForm.vue';
import ListCards from './ListCards.vue';
import MethodBankTransfer from './MethodBankTransfer.vue';
import MethodCard from './MethodCard.vue';
import MethodStore from './MethodStore.vue';
import MyCard from './MyCard.vue';
import StepTitle from './StepTitle.vue';
export default {
	components: {
		CardForm,
		ListCards,
		MyCard,
		MethodStore,
		MethodBankTransfer,
		MethodCard,
		StepTitle,
	},
	data() {
		return {
			showBtnAddCard: true,
			radios: 'tarjeta',
			addCard: false,
			showCard: true,
			showListCard: false,
		};
	},
	methods: {
		addNewCard() {
			this.showBtnAddCard = false;
			this.showCard = false;
			this.addCard = true;
			this.showListCard = false;
		},
		sendPayment() {
			this.$router.push({ name: 'confirmar-compra' });
		},
	},
};
</script>

<style lang="scss" scoped>
h3 {
	font-weight: 400;
	font-size: 17px;
	line-height: 22px;

	color: #000000;
}

h4 {
	font-weight: 400;
	font-size: 17px;
	line-height: 22px;

	color: #000000;
}

.img-card {
	height: 30px;
}

.img-paypal {
	height: 36px;
	width: 140.97px;
}

button {
	width: 100% !important;
	max-width: 503px !important;
}

@media screen and (min-width: $sm) {
	// .img-paypal {
	// 	height: 40px;
	// }
	// h3 {
	// 	font-size: 16px;
	// }
	// h4 {
	// 	font-size: 14px;
	// }
}
</style>
