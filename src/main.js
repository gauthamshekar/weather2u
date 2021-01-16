function fetchData()
{
var data1 = document.getElementById("give");
console.log(data1.value);
fetch('https://api.weatherbit.io/v2.0/current?city='+data1.value+'&key=27036774ea0544629adbf616939cb127')
	.then(res => res.json())
	.then(data => {console.log(data);
		const html  = data.data.map(user => {
			return `<div class="sol">
			<h1 class="heading1">${user.city_name}</h1>
			<h1 class="heading2"><b>Temperature</b> <br>${user.temp} celsius</h1>
			<h1 class="heading3">Description: ${user.weather.description}</h1>
			<h1 class="heading4"><b>Precipitation</b> <br>${user.precip}</h1>
			<h1 class="heading5"><b>Wind Direction</b> <br>${user.wind_cdir_full}</h1>
			<h1 class="heading6"><b>Wind Speed</b> <br>${user.wind_spd} kmph</h1>
			<h1 class="heading7"><b>Station</b> <br>${user.station}</h1>
			<h1 class="heading8"><b>Sunrise Time</b> <br>${user.sunrise}</h1>
			<h1 class="heading9"><b>Sunset Time</b> <br>${user.sunset}</h1>
			<h1 class="heading10"><b>Visibility</b> <br>${user.vis}</h1>
			
			
			<button class="move" onclick="window.location.href='third.html';">
			<i class="fas fa-arrow-circle-right">
			</i></button>
			</div>`

		}).join('');
		document.querySelector('#app').insertAdjacentHTML('afterbegin', html)
	})

}
fetchData();





