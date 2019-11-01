import $ from 'jquery';
import './css/base.scss';

import Person from "./Person";
import Motel from "./Motel";
// import Manager from "./Manager";
// import Room from "./Room";
// import Customer from "./Customer";

// 1) Total Rooms Available for today’s date
// 2) Total revenue for today’s date
// 3) Percentage of rooms occupied for today’s date

function getData(type) {
	const root = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904';
	const url = `${root}${type}`;
	console.log(url)
	const promise = fetch(url)
	                .then(data => data.json());
	                // console.log(promise)
	return promise;
}

getData('/users/users').then(function(user) {
	const users = user.users;
	users.forEach(function(user) {
		// console.log(user.name)
	})
	// console.log(users[0].name)


	$('.js_login-submit').on('click', function() {
    if ($('.user_name').val() === 'manager' && $('.user_pswd').val() === 'overlook2019') {
      window.location = "./manager.html";
  } else if ($('.user_name').val() === 'customer50' && $('.user_pswd').val() === 'overlook2019') {
      $('#js_insert-name').text(users[0].name)
  }
});


});  //End of getData


//   $('.js_login-submit').on('click', function() {
//     if ($('.user_name').val() === 'manager' && $('.user_pswd').val() === 'overlook2019') {
//       window.location = "./manager.html";
//   } else if ($('.user_name').val() === 'customer50' && $('.user_pswd').val() === 'overlook2019') {
//       $('#js_insert-name').text('user.name')
//   }
// });

 