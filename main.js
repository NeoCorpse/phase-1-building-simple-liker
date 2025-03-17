// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

const modal = document.querySelector('#modal');
const message = modal.querySelector('p');

document.querySelectorAll('.like-glyph').forEach((btn) => {
	btn.addEventListener('click', () => {
		mimicServerCall()
			.then((res) => {
				if (btn.classList.contains('activated-heart')) {
					btn.textContent = EMPTY_HEART;
				} else {
					btn.textContent = FULL_HEART;
				}
				btn.classList.toggle('activated-heart');
			})
			.catch((error) => {
				modal.classList.toggle('hidden');
				message.innerHTML = `${error}`;
				console.log(error);
				setTimeout(() => {
					modal.classList.toggle('hidden');
				}, 3000);
			});
	});
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			let isRandomFailure = Math.random() < 0.2;
			if (isRandomFailure) {
				reject('Random server error. Try again.');
			} else {
				resolve('Pretend remote server notified of action!');
			}
		}, 300);
	});
}
