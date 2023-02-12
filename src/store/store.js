import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
	state: {
		models: [
			{
				mid: 1008,
				mname: "MI 10T pro",
				mimage: 'https://rukminim1.flixcart.com/image/312/312/kg6vfrk0/mobile/h/v/j/mi-10t-pro-mzb07zein-original-imafwhb86qsrbgsj.jpeg?q=70',
				ram: 8,
				display: 6.67,
				camera: 108,
				battery: 5500,
				warrenty: 12,
				price: 29000
			},
			{
				mid: 2004,
				mname: "Redmi Note 11 Pro",
				mimage: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/0/c/-original-imagcvg4ghr3ykge.jpeg?q=70',
				ram: 8,
				display: 6.67,
				camera: 108,
				battery: 5000,
				warrenty: 12,
				price: 18000
			},
			{
				mid: 2234,
				mname: "Redmi 9A sport",
				mimage: 'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/j/l/n/-original-imag7chjvhxdhhyh.jpeg?q=70',
				ram: 2,
				display: 5.5,
				camera: 48,
				battery: 4500,
				warrenty: 12,
				price: 9000
			}
		],
	}
});