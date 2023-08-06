const body = document.querySelector('body'),
      sidebar = body.querySelector('.sidebar'),
      toggle = body.querySelector('.toggle'),
      searchBtn = body.querySelector('.search-box'),
      modeSwitch = body.querySelector('.toggle-switch'),
      modeText = body.querySelector('.mode-text')

toggle.addEventListener('click', ()=> {
    sidebar.classList.toggle('close')
})

searchBtn.addEventListener('click', ()=> {
    searchBtn.classList.remove('close')
})

modeSwitch.addEventListener('click', ()=> {
    body.classList.toggle('dark')

    if(body.classList.contains('dark')) {
        modeText.innerText = 'Light Mode'
    } else {
        modeText.innerText = 'Dark Mode'
    }
})

const search = document.querySelector('#search')

search.oninput = function() {
    let value = this.value.trim()
    let searchItems = document.querySelectorAll('.menu-links li')
    if(value != '') {
        searchItems.forEach(function(el) {
            console.log(el);
            if(el.innerText.search(value) == -1) {
                el.classList.add('hide')
                console.log(el);
            } else {
                el.classList.remove('hide')
            }
        })
    }
    else {
        searchItems.forEach(function(el) { 
            el.classList.remove('hide')
        })
    }
}
