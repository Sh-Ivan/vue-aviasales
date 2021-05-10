<template>
  <aside>
    <span>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
			
			<div v-for="(filter, fkey) in allFilters" class="filter" :key="fkey" @click="setFilters(fkey)">
				<label>
					<img
						:src="getImgeUrl(fkey)"
						alt="Checkobox Icon"
						:name="fkey"
					/>
					{{filter}}
				</label>
			</div>
		
  </aside>
</template>

<script>
export default {
	props: ["filters", "setFilters"],
  data() {
    return { 
      allFilters: {
        all: 'Все',
        direct: 'Без пересадок',
        one: '1 пересадка',
        two: '2 пересадки',
        three: '3 пересадки',
      }
    }
  },
	methods: {
		getImgeUrl(fkey) {
			return this.filters[fkey]? require('../assets/CheckboxOn.svg'): require('../assets/CheckboxOff.svg')
		}
	}
}
</script>

<style scoped>
aside { 
	background-color: white;
	width: 232px;
	height: 252px;
	float: left;
	margin-right: 20px;
	margin-bottom: 20px;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	color: #4a4a4a;
}

span { 
	display: inline-block;
	padding: 20px 0 0 20px;
	line-height: 20px;
	font-size: 12px;
	letter-spacing: 0.5px;
}

.filter {
	height: 40px;
	padding-left: 20px;
	margin: 0;
	display: flex;
	align-items: center;
	cursor: pointer;
}
.filter:hover {
		background-color: #f1fcff;
	}
.filter input {
		width: 20px;
		height: 20px;
		border-color: #9abbce;
		cursor: pointer;
		margin: 0 10px 0 0;
		border-radius: 2px;
	}
.filter img {
		margin: 0 10px 0 0;
	}
.filter label {
		cursor: pointer;
		display: flex;
		align-items: center;
		font-weight: 400;
		color: #4a4a4a;
		font-size: 13px;
	}

</style>