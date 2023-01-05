'use strict'
const navBtn = document.querySelector('.nav-btn')
let navOpen = false
const navbar = document.querySelector('.nav-bar')
const overlay = document.querySelector('.overlay')

navBtn.addEventListener('click', () => {
  if (!navOpen) {
    navBtn.classList.add('open')
    navOpen = true
    navbar.classList.add('show')
    overlay.classList.remove('hidden')
  } else {
    navBtn.classList.remove('open')
    navbar.classList.remove('show')

    navOpen = false
    overlay.classList.add('hidden')
  }
})
