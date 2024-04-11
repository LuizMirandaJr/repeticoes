function contar() {
  let ini = document.getElementById("txtini");
  let fim = document.getElementById("txtfim");
  let passo = document.getElementById("txtpass");
  let res = document.getElementById("txtres");

  function accept() {
    ini.style.border = "1px solid green";
    fim.style.border = "1px solid green";
    passo.style.border = "1px solid green";
  }

  function error() {
    ini.style.border = "1px solid red";
    fim.style.border = "1px solid red";
    passo.style.border = "1px solid red";
  }

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Não foi possível contar'
    error();
  } else {
    accept();
    res.innerHTML = "Contando: <br>";
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (p <= 0) {
        alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449} `;
    }
} else {
    for (let c = i; c >= f; c -= p) {
          res.innerHTML += `${c} \u{1F449} `;
        
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
