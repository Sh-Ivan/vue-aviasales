<template>
  <div class="card">
			<div class="header">
				<span class="price">{{price}} Р</span>
				<img :src="getLogoUrl(ticket.carrier)" alt="Logo" />
			</div>
	
			<div v-for="(segment, index) in ticket.segments" :key="index">
				<div class="row row-header">
					<span>
						{{segment.origin}} - {{segment.destination}}
					</span>
					<span>В пути</span>
					<span>{{segmentData[index].stops}}</span>
				</div>
				<div class="row row-data">
					<span>
						{{segmentData[index].startTime}} - {{segmentData[index].endTime}}
					</span>
					<span>{{segmentData[index].duration}}</span>
					<span>{{segment.stops.join(', ')}}</span>
				</div>
			</div>
		</div>
</template>

<script>
import {formatSegment, splitPrice} from '../utils/formatters';

export default {
	props: ["ticket"],
  data() {
    return {
      logoURL: '//pics.avs.io/99/36/',
			segmentData: [],
			price: ""
    }
  },

	created() {
		this.ticket.segments.forEach((segment, index) => {
			this.segmentData[index] = formatSegment(segment);
		})
		this.price = splitPrice(this.ticket.price);
	},

	methods: {
		getLogoUrl(carrier) {
			return this.logoURL + carrier + ".png"
		}
	}
}
</script>

<style scoped>
.card {
	width: 502px;
	height: 184px;
	background-color: #fff;
	margin-bottom: 20px;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	cursor: pointer;
}

.header {
	padding: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.price {
	color: #2196f3;
	font-size: 24px;
	line-height: 24px;
}


.row span {
		display: inline-block;
		width: 141px;
		margin-left: 20px;
  }
.row span:last-child {
			width: auto;
		}

.row.row-header {
	text-transform: uppercase;
	font-size: 12px;
	line-height: 18px;
	letter-spacing: 0.5px;
	color: #a0b0b9;
}

.row.row-data {
	font-size: 14px;
	line-height: 21px;
	color: #4a4a4a;
	margin-bottom: 10px;
}
</style>