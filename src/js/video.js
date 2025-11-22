document.addEventListener('DOMContentLoaded', () => {
  const videoElement = document.querySelector('#video-reel');
  const videoBtnElement = document.querySelector('#video-reel-btn');
  const videoOverlayElement = document.querySelector('#video-reel-overlay');

  videoBtnElement.addEventListener('click', () => {
    videoElement.volume = '0.1'
    videoElement.controls = true
    videoElement.play()
  })

  videoElement.addEventListener('play', () => {
    videoOverlayElement.style.display = 'none'
  })

  videoElement.addEventListener('pause', () => {
    videoElement.controls = false
    videoOverlayElement.style.display = 'block'
  })
})