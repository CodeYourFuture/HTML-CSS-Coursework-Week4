var wrapperMenu = document.querySelector('.wrapper-menu')

wrapperMenu.addEventListener('click', function () {

  // wrapperMenu.classList.toggle('open');

  if (wrapperMenu.classList.toggle('open')) {

    document.getElementsByClassName('profile_box')[0].style.visibility =

      'hidden'

    document.getElementById('menu').style.display = 'block'

  } else {

    document.getElementsByClassName('profile_box')[0].style.visibility =

      'visible'

    document.getElementById('menu').style.display = 'none'

  }

})

