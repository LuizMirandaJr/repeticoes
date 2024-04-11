function contar() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')

  if (num.value.length == 0) {
    // alert('Por favor, digite um número')
    tab.style.display = 'none'
    num.style.border = '1px solid red'
    
  } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    num.style.border = ''

    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      tab.appendChild(item)
      tab.style.display = 'flex'
      c++
    }
  }
}