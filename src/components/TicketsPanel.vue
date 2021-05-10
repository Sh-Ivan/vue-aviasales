<template>
	<Preloader v-if="isLoading" />
	<EmptyCard v-else-if="tickets.length === 0"/>
  <div v-else>
		<Ticket v-for="ticket in tickets.slice(0, numberTickets)" :key="ticket.id" :ticket="ticket" />
    <button v-on:click="numberTickets+=5">Показать еще 5 билетов!</button>
  </div>
</template>

<script>
import Ticket from './Ticket.vue'
import Preloader from './Preloader'
import EmptyCard from './EmptyCard'

export default {
	components: {Ticket, Preloader, EmptyCard},
	props: ["isLoading", "tickets"],

	data() {
		return {
			numberTickets: 5
		}
	}
  
}
</script>


<style scoped>
button{ 
	height: 50px;
	width: 502px;
	margin-bottom: 50px;
	background-color: #fff;
	border: none;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	text-transform: uppercase;
	background-color: #2196f3;
	color: #fff;
	cursor: pointer;
  padding: 0px;
}
button:active, button:focus {
  outline: none;
}

</style>