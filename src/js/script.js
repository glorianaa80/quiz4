
// TABS
function tabs(evt, tab) {
  const contenido = document.getElementsByClassName('tab');
  for (let i = 0; i < contenido.length; i += 1) {
    contenido[i].style.display = 'none';
  }

  const links = document.getElementsByClassName('tabs--nav-section-option-link');
  for (let i = 0; i < links.length; i += 1) {
    links[i].className = links[i].className.replace(' tab-active', '');
  }

  document.getElementById(tab).style.display = 'block';
  evt.currentTarget.className += ' tab-active';
}



// ACORDEON
alert(acc)
const acc = document.getElementsByClassName('acordeon').style.maxWidth = '600px';
let i;

for (i = 0; i < acc.length; i += 1) {
  acc[i].addEventListener('click', function accordion() {
    this.classList.toggle('active');
    const texto = this.nextElementSibling;
    for (const e of acc) {
      e.nextElementSibling.style.maxHeight = null;
    }
    if (texto.style.maxHeight) {
      texto.style.maxHeight = null;
    } else {
      texto.style.maxHeight = `${texto.scrollHeight} px`;
    }
  });
}
