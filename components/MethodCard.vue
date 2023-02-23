<template>
	<v-col cols="12" md="12" lg="8">
		<v-slide-x-transition>
			<MyCard :card="selectedDefault" v-if="showCard" @change="changeOnCard" />
			<!-- <CardForm /> -->
			<CardForm v-if="addCard" />

			<ListCards v-if="showListCard" @selectedCard="onSelectedCard" />
		</v-slide-x-transition>
	</v-col>
</template>

<script>
import CardForm from './CardForm.vue';
import MyCard from './MyCard.vue';
export default {
	components: { CardForm, MyCard },
	props: {
		addCard: {
			type: Boolean,
			default: false,
		},
		showCard: {
			type: Boolean,
			default: true,
		},
		showListCard: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			selectedDefault: {},
		};
	},
	methods: {
		closeCard() {
			this.$emit('closeCard');
		},
		closeList() {
			this.$emit('closeList');
		},
		openList() {
			this.$emit('openList');
		},
		openCard() {
			this.$emit('openCard');
		},
		changeOnCard() {
			this.closeCard();
			this.openList();
		},
		onSelectedCard(card) {
			this.closeList();
			this.selectedDefault = card;
			this.openCard();
			//   this.showCard = true;
		},
	},
};
</script>

<style lang="scss" scoped></style>
