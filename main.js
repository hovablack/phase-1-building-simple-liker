// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const mediaPosts = document.querySelectorAll('.media-post');
console.log(mediaPosts);
mediaPosts.forEach(function (heart) {
  heart.querySelector('li').querySelector('.like-glyph').addEventListener('click', simpleLiker)
})

function simpleLiker(e) {
  const likeHeart = e.target;
  mimicServerCall()
  .then(function () {
    if (likeHeart.innerText === EMPTY_HEART) {
      likeHeart.innerText = FULL_HEART;
      likeHeart.className = 'activated-heart';
    } else {
      likeHeart.innerText = EMPTY_HEART;
      likeHeart.className = '';
    }
  })
  .catch(function (error) {
    const modal = document.querySelector('#modal')
    modal.className = '';
    modal.innerText = error;
    setTimeout(() => modal.className = "hidden", 3000);
  })
}

// // const likeHeart = document.querySelector('.like-glyph')
// mediaPost.addEventListener('click', simpleLiker)
// function simpleLiker(e) {
//   console.log(e)
// }



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
