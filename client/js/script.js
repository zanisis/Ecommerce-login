$(document).ready(()=> {

  // Login & Checkout Modal Button
  $('.checkout-btn').on('click', (e)=> {
    console.log('clicked')
    $('#modal-login').addClass('is-active')
  })
  // Signup Modal Button
  $('#sign-up').on('click', (e)=> {
    console.log('clicked')
    $('#modal-signup').addClass('is-active')
  })
  // Modal Close Button
  $('.modal-close').on('click', (e)=> {
    console.log('clicked')
    $('#modal-login').removeClass('is-active')
    $('#modal-signup').removeClass('is-active')
  })
  // Toggle menu click when its appear
  $('.nav-toggle').on('click', ()=> {
    $('.nav-menu').toggleClass('is-active')
  })

  // Toggle nav-menu is active
  function resizeFunc() {
    let width = $(window).width()
    console.log(width)
    if(width < 750) {
      $('#hidden-cart').removeClass('is-hidden')
    } else {
      $('#hidden-cart').addClass('is-hidden')
    }
  }

  // Add to cart function
  $('.add-to-cart').on('click', (e)=> {
    console.log($(e.target).siblings('#price').text())
    let phoneName = $(e.target).siblings('#phone-name').text(),
        price = $(e.target).siblings('#price').text(),
        append = $(`<div class="panel-block">${phoneName} ${price}</div>`)

    $('.payment').after(append)
  })

  resizeFunc()
  $(window).resize(resizeFunc)
})
