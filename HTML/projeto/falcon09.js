

function falcon09(){
    var foto01 = document.getElementById('ft01')
    var block01 = document.getElementById('block01')
    var titulo01 = document.getElementById('titulo01')
    var titulo02 = document.getElementById('titulo02')
    var foto02 = document.getElementById('ft02')
    var main = document.getElementsByTagName('main')[0]
    main.style.backgroundImage = "url('https://wallpapercave.com/wp/wp5009696.jpg')"
    main.style.backgroundRepeat = "no repeat"
    main.style.backgroundSize = 'cover'
    block01.style.backgroundColor = 'rgba(0, 0, 0, 0.238)'
    block01.style.padding = '10px'
    block01.style.borderRadius = '10px'
    block01.style.textShadow = '2px solid black'
    titulo02.innerHTML = ''
    foto02.style.display = 'none'
    block01.style.display = "block"
    block01.style.color ='white'
    foto01.style.backgroundImage = 'none'
    titulo01.innerHTML =''
}
function falconH(){
    var block02 = document.getElementById('block02')
    block02.style.display = 'block'

    var ft01 = document.getElementById('ft01')
    ft01.style.display = 'none'

    var titulo01 = document.getElementById('titulo01')
    titulo01.innerHTML = ''

    var ft02 = document.getElementById('ft02')
    ft02.style.display ='none'

    var titulo02 = document.getElementById('titulo02')
    titulo02.innerHTML = ''

    var foto02 = document.getElementById('foto02')
    foto02.style.marginTop = '70PX'
    
    var text02 = document.getElementById("text02")
    text02.style.marginTop = '10px'

    var main = document.getElementsByTagName('main')[0]
    main.style.backgroundImage = "url('https://th.bing.com/th/id/R.90b8443b353b86b7e74cff93f03aeb89?rik=pGaEMzGn44M%2fmw&pid=ImgRaw&r=0')"
    main.style.backgroundRepeat = 'no repeat'
    main.style.backgroundSize = 'cover'
    main.style.height = '90vh'
}