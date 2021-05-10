<template>
  <main>
			<SortingPanel v-bind:sorting="sorting" v-on:changeSorting="changeSorting"/>
			<TicketsPanel :tickets="tickets" :isLoading="isLoading" />
		</main>
</template>

<script>
import SortingPanel from './SortingPanel'
import TicketsPanel from './TicketsPanel'

export default {
	props: ["sorting", "tickets", "isLoading"],
  components: {SortingPanel, TicketsPanel},

	methods: {
		changeSorting: function(sorting) {
			this.$emit("changeSorting", sorting)
		}
	}
}
</script>

<style scoped>
main {
	width: 502px;
	float: right;
}
</style>