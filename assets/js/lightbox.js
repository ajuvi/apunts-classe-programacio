(function () {
  function inicia() {
    const ZOOM = 2; // quant s'amplia en clicar (2 = doble)

    // Crea el popup
    const dialog = document.createElement('dialog');
    dialog.id = 'lightbox';
    dialog.innerHTML =
      '<button type="button" class="lightbox-tanca" aria-label="Tanca">&times;</button>' +
      '<div class="lightbox-visor"><img></div>' +
      '<p></p>';
    document.body.appendChild(dialog);

    const visor = dialog.querySelector('.lightbox-visor');
    const imgGran = visor.querySelector('img');
    const peu = dialog.querySelector('p');
    let ampliada = false;

    function redueix() {
      ampliada = false;
      imgGran.style.width = '';
      imgGran.classList.remove('ampliada');
      visor.scrollLeft = 0;
      visor.scrollTop = 0;
    }

    function amplia(e) {
      const fx = e.offsetX / imgGran.clientWidth;
      const fy = e.offsetY / imgGran.clientHeight;
      const rect = visor.getBoundingClientRect();

      ampliada = true;
      imgGran.style.width = imgGran.clientWidth * ZOOM + 'px';
      imgGran.classList.add('ampliada');

      visor.scrollLeft = fx * imgGran.clientWidth - (e.clientX - rect.left);
      visor.scrollTop = fy * imgGran.clientHeight - (e.clientY - rect.top);
    }

    // Obre el popup en clicar una miniatura
    document.querySelectorAll('.infografia img').forEach(function (img) {
      img.addEventListener('click', function () {
        redueix();
        imgGran.src = img.src;
        imgGran.alt = img.alt;
        const caption = img.closest('figure').querySelector('figcaption');
        peu.textContent = caption ? caption.textContent : '';
        dialog.showModal();
      });
    });

    // Clic a la imatge gran: amplia o redueix
    imgGran.addEventListener('click', function (e) {
      if (ampliada) redueix();
      else amplia(e);
    });

    // Amb la imatge ampliada, moure el ratolí la desplaça
    visor.addEventListener('mousemove', function (e) {
      if (!ampliada) return;
      const rect = visor.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      visor.scrollLeft = px * (visor.scrollWidth - visor.clientWidth);
      visor.scrollTop = py * (visor.scrollHeight - visor.clientHeight);
    });

    // Tanca amb la creu o fent clic fora de la imatge (Esc ja funciona per defecte)
    dialog.addEventListener('click', function (e) {
      if (e.target.closest('.lightbox-tanca') || e.target === dialog || e.target === visor) {
        dialog.close();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicia);
  } else {
    inicia();
  }
})();