function converter(){
    var metro = Number(document.getElementById('imetro').value)  
    var medida = document.getElementById('imedida').value
    var res = document.getElementById('ires')

    switch (medida){
        case 'mm':
            res.innerHTML = `${metro} m é ${metro*1000} mm`
            break
        case 'cm':
            res.innerHTML = `${metro} m é ${metro*100} cm`
            break
        case 'dm':
            res.innerHTML = `${metro} m é ${metro*10} dm`
            break
        case 'dam':
            res.innerHTML = `${metro} m é ${metro/10} dam`
            break
        case 'hm':
            res.innerHTML = `${metro} m é ${metro/100} hm`
            break
        case 'km':
            res.innerHTML = `${metro} m é ${metro/1000} km`
            break
        default:
            res.innerHTML = 'Unidade iválida!!!'
            break
    }
}