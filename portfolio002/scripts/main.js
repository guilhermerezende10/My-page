function clickMenu() { 
    if (menu.style.display == 'grid') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'grid'
    }
    
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        menu.style.display = 'flex'
        //menu.style.display = 'none'
    } else {
        menu.style.display = 'none'
        //menu.style.display = 'block'
    }
}
