import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions"

export const store = new Vuex.Store({
	state: {
		models: [
			{
				mid: 1008,
				mname: "MI 10T pro",
				image: 'https://rukminim1.flixcart.com/image/312/312/kg6vfrk0/mobile/h/v/j/mi-10t-pro-mzb07zein-original-imafwhb86qsrbgsj.jpeg?q=70',
				ram: 8,
				display: 6.67,
				camera: 108,
				battery: 5500,
				warranty: 12,
				brand: 'xaomi',
				price: 29000
			},
			{
				mid: 2004,
				mname: "Redmi Note 11 Pro",
				image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/m/0/c/-original-imagcvg4ghr3ykge.jpeg?q=70',
				ram: 8,
				display: 6.67,
				camera: 108,
				battery: 5000,
				warranty: 12,
				brand: 'xaomi',
				price: 18000
			},
			{
				mid: 2234,
				mname: "Redmi 9A sport",
				image: 'https://static.toiimg.com/thumb/resizemode-4,msid-86947984,imgsize-200,width-1200,imgv-1/86947984.jpg',
				ram: 2,
				display: 5.5,
				camera: 48,
				battery: 4500,
				warranty: 12,
				brand: 'xaomi',
				price: 9000
			},
			{
				mid: 3001,
				mname: "OnePlus 11R",
				image: 'https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/r/8/3/11-5g-b0bqjlcqd3-oneplus-original-imagmugsquuygsbg.jpeg?q=70',
				ram: 8,
				display: 6.5,
				camera: 50,
				battery: 5000,
				warranty: 12,
				brand: 'oneplus',
				price: 56000
			},
			{
				mid: 3002,
				mname: "Pixel 7A",
				image: 'https://img5.gadgetsnow.com/gd/images/products/additional/large/G395519_View_1/mobiles/smartphones/google-pixel-7-pro-128-gb-snow-12-gb-ram-.jpg',
				ram: 8,
				display: 6.3,
				camera: 50,
				battery: 4500,
				warranty: 12,
				brand: 'google',
				price: 75000
			},
			{
				mid: 3003,
				mname: "Iphone 14 ",
				image: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/ios-16-iphone-14-pro-always-on-display.png',
				ram: 6,
				display: 6.1,
				camera: 24,
				battery: 4500,
				warranty: 12,
				brand: 'apple',
				price: 110000
			},
		],
		searchWord: null,
		productId: null,
		cart: [],
		cartModel: null,
		selectedFilters: {
			ram: [],
			brand: [],
			// add more filter options as needed
		  }
	},
	getters,
	mutations,
	actions
});