/* ==================================================
   ETIQUETES AL MARKDOWN

   ### Títol de l'apartat
   {: .grup}

   #### Títol de l'exercici
   {: .exercici}

   Enunciat, codi, sortida…

   {: .solucio}
   ```csharp
   // solució (aquest bloc i tot el que ve després,
   // fins al final del bloc que el conté)
   ```

   <!-- /exercici -->   (opcional: tanca l'exercici)

   Sense comentari, un exercici s'acaba al següent
   títol (H1-H4).

   Els títols .grup només canvien el menú: hi surten
   com a capçalera de grup. A la pàgina són títols
   normals.
   ================================================== */


/* ==================================================
   INICIALITZACIÓ
   ================================================== */

document.addEventListener('DOMContentLoaded', inicialitzarPagina);


function inicialitzarPagina() {

  assignarIds();

  crearExercicis();

  crearSolucions();


  crearMenu();

  afegirFletxesAmunt();

  inicialitzarPopupsFitxers();

}


/* ==================================================
   0. UTILITATS
   ================================================== */

// Títol marcat amb {: .grup}
function esGrup(titol) {
  return titol.classList.contains('grup');
}

// Títol marcat amb {: .exercici}
function esExercici(titol) {
  return titol.classList.contains('exercici');
}

function esTitol(node) {
  return node.nodeType === Node.ELEMENT_NODE && /^H[1-6]$/.test(node.tagName);
}

function nivellTitol(titol) {
  return Number(titol.tagName.charAt(1));
}

// Text d'un comentari HTML (<!-- ... -->), o null si no és un comentari
function textComentari(node) {
  return node.nodeType === Node.COMMENT_NODE ? node.nodeValue.trim() : null;
}


// Assegurar que tots els títols tenen id
function assignarIds() {

  var n = 0;

  document.querySelectorAll(
    '.markdown-body h2, .markdown-body h3, .markdown-body h4'
  ).forEach(function (titol) {

    if (!titol.id) {
      n = n + 1;
      titol.id = 'seccio-' + n;
    }

  });

}


// Treure "📝" i "Exercici:" del principi del títol (el posa el CSS)
function treurePrefixExercici(titol) {

  var node = titol.firstChild;

  if (node && node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent
      .replace(/^\s*(?:📝\s*)?(?:Exercici:\s*)?/u, '');
  }

}


/* ==================================================
   1. EXERCICIS
   Títol .exercici + contingut → <div class="targeta-exercici">
   ================================================== */

function crearExercicis() {

  document.querySelectorAll(
    '.markdown-body h3.exercici, .markdown-body h4.exercici'
  ).forEach(function (titol) {

    treurePrefixExercici(titol);

    // Ja és dins d'una targeta escrita a mà amb HTML
    if (titol.closest('.targeta-exercici')) return;

    var targeta = document.createElement('div');
    targeta.className = 'targeta-exercici';

    titol.parentNode.insertBefore(targeta, titol);

    var node = titol;

    while (node) {

      if (node !== titol) {

        var comentari = textComentari(node);

        // <!-- /exercici --> tanca l'exercici (i s'elimina)
        if (comentari === '/exercici') {
          node.remove();
          break;
        }

        // El següent títol H1-H4 tanca l'exercici
        if (esTitol(node) && nivellTitol(node) <= 4) break;

      }

      var seguent = node.nextSibling;
      targeta.appendChild(node);
      node = seguent;

    }

  });

}


/* ==================================================
   2. SOLUCIONS
   Bloc .solucio + el que ve després, fins al final
   del bloc que el conté → <details>

   Funciona tant si la solució és directament dins de
   la targeta com si és dins d'un altre element
   (per exemple, una columna d'una graella).
   ================================================== */

function crearSolucions() {

  document.querySelectorAll(
    '.markdown-body .targeta-exercici .solucio'
  ).forEach(function (inici) {

    // Ja és dins d'una altra solució
    if (inici.closest('details')) return;

    var details = document.createElement('details');
    var summary = document.createElement('summary');

    summary.textContent = 'Mostra la solució';
    details.appendChild(summary);

    inici.parentNode.insertBefore(details, inici);

    // Moure-hi el bloc i tot el que ve després dins del mateix pare
    var node = inici;

    while (node) {
      var seguent = node.nextSibling;
      details.appendChild(node);
      node = seguent;
    }

  });

}


/* ==================================================
   4. CREAR EL MENÚ PRINCIPAL
   ================================================== */

function crearMenu() {

  var seccions = obtenirSeccions();
  var h1 = document.querySelector('.markdown-body h1');

  // Necessitem almenys dues seccions H2
  if (seccions.length < 2 || !h1) return;

  var nav = document.createElement('nav');
  nav.className = 'index-pagina';

  var fila = document.createElement('ul');

  var menu = document.createElement('div');
  menu.className = 'index-desplegable';

  var llistaMenu = document.createElement('ul');

  menu.appendChild(llistaMenu);


  // Guardem les pestanyes i els seus subtítols
  var entrades = [];


  seccions.forEach(function (seccio) {

    var item = crearEtiqueta(seccio.titol);
    var fills = seccio.fills;

    fila.appendChild(item);

    entrades.push({
      item: item,
      fills: fills
    });


    // Ordinador: passar el ratolí per sobre
    if (window.matchMedia('(hover: hover)').matches) {

      item.addEventListener('mouseenter', function () {

        if (fills.length > 0) {
          mostrarSubmenu(item, fills, nav, menu, llistaMenu);
        } else {
          amagarSubmenu(fila, menu);
        }

      });

    }

  });


  // Inicialitzar navegació mòbil
  inicialitzarNavegacioMobil(
    entrades,
    nav,
    menu,
    fila,
    llistaMenu
  );


  // Tancar el menú
  nav.addEventListener('mouseleave', function () {
    amagarSubmenu(fila, menu);
  });

  fila.addEventListener('scroll', function () {
    amagarSubmenu(fila, menu);
  });

  llistaMenu.addEventListener('click', function () {
    amagarSubmenu(fila, menu);
  });

  document.addEventListener('touchstart', function (e) {

    if (!nav.contains(e.target)) {
      amagarSubmenu(fila, menu);
    }

  }, { passive: true });


  // Inserir índex després del H1
  nav.appendChild(fila);
  nav.appendChild(menu);

  h1.insertAdjacentElement('afterend', nav);

}


/* ==================================================
   5. OBTENIR SECCIONS I SUBTÍTOLS
   Es recorren tots els títols en ordre de document,
   així no importa dins de quins elements estiguin.
   ================================================== */

function obtenirSeccions() {

  var seccions = [];
  var actual = null;

  document.querySelectorAll(
    '.markdown-body h2, .markdown-body h3, .markdown-body h4'
  ).forEach(function (titol) {

    if (!titol.id) return;

    if (titol.tagName === 'H2') {

      actual = {
        titol: titol,
        fills: []
      };

      seccions.push(actual);

    } else if (actual) {

      actual.fills.push(titol);

    }

  });

  return seccions;

}


/* ==================================================
   6. CREAR ETIQUETES I ENLLAÇOS
   ================================================== */

function crearEtiqueta(titol) {

  var enllac = document.createElement('a');

  enllac.href = '#' + titol.id;
  enllac.textContent = titol.textContent.trim();

  var item = document.createElement('li');

  item.appendChild(enllac);

  return item;

}


/* ==================================================
   7. CREAR SUBMENÚ
   ================================================== */

function crearSubmenu(fills, llistaMenu) {

  llistaMenu.innerHTML = '';

  fills.forEach(function (titol) {

    var item = crearEtiqueta(titol);

    if (esGrup(titol)) {
      item.className = 'menu-separador';
    } else if (esExercici(titol)) {
      item.className = 'menu-exercici';
    }

    llistaMenu.appendChild(item);

  });

}


/* ==================================================
   8. MOSTRAR SUBMENÚ
   ================================================== */

function mostrarSubmenu(item, fills, nav, menu, llistaMenu) {

  var fila = nav.querySelector(':scope > ul');

  amagarSubmenu(fila, menu);

  // Marcar pestanya activa
  item.firstChild.classList.add('actiu');

  // Construir submenú
  crearSubmenu(fills, llistaMenu);


  // Posicionar el menú
  var rNav = nav.getBoundingClientRect();
  var rItem = item.getBoundingClientRect();

  menu.style.top =
    (rItem.bottom - rNav.top + 4) + 'px';

  menu.classList.add('visible');


  // Evitar que surti per la dreta
  var esquerra = rItem.left - rNav.left;
  var maxim = rNav.width - menu.offsetWidth;

  menu.style.left =
    Math.max(0, Math.min(esquerra, maxim)) + 'px';

}


/* ==================================================
   9. AMAGAR SUBMENÚ
   ================================================== */

function amagarSubmenu(fila, menu) {

  menu.classList.remove('visible');

  fila.querySelectorAll('a').forEach(function (a) {
    a.classList.remove('actiu');
  });

}


/* ==================================================
   10. NAVEGACIÓ MÒBIL
   ================================================== */

function inicialitzarNavegacioMobil(
  entrades,
  nav,
  menu,
  fila,
  llistaMenu
) {

  // En dispositius amb ratolí no cal pulsació llarga
  if (window.matchMedia('(hover: hover)').matches) return;


  entrades.forEach(function (entrada) {

    var item = entrada.item;
    var fills = entrada.fills;

    if (fills.length === 0) return;

    var temporitzador = null;
    var pressLlarg = false;


    function cancelar() {
      clearTimeout(temporitzador);
    }


    // Començar pulsació
    item.addEventListener('touchstart', function () {

      pressLlarg = false;

      temporitzador = setTimeout(function () {

        pressLlarg = true;

        mostrarSubmenu(
          item,
          fills,
          nav,
          menu,
          llistaMenu
        );

        if (navigator.vibrate) {
          navigator.vibrate(15);
        }

      }, 500);

    }, { passive: true });


    // Cancel·lar si es mou el dit
    item.addEventListener('touchmove', cancelar, {
      passive: true
    });

    item.addEventListener('touchend', cancelar);

    item.addEventListener('touchcancel', cancelar);


    // Evitar navegar després d'una pulsació llarga
    item.firstChild.addEventListener('click', function (e) {

      if (pressLlarg) {
        e.preventDefault();
        pressLlarg = false;
      }

    });


    // Evitar menú contextual
    item.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });

  });

}


/* ==================================================
   11. AFEGIR FLETXES PER TORNAR A DALT
   ================================================== */

function afegirFletxesAmunt() {

  var titols = document.querySelectorAll('.markdown-body h2[id]');

  var icona =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M12 19V5M5 12l7-7 7 7"/></svg>';


  titols.forEach(function (h) {

    var fletxa = document.createElement('a');

    fletxa.href = '#';
    fletxa.className = 'torna-amunt';
    fletxa.title = 'Torna a dalt';
    fletxa.setAttribute('aria-label', 'Torna a dalt');

    fletxa.innerHTML = icona;

    h.appendChild(fletxa);

  });

}


/* ==================================================
   12. POPUPS DE FITXERS
   ================================================== */

function inicialitzarPopupsFitxers() {

  var enllacos = document.querySelectorAll('a.popup-fitxer');

  // Si no hi ha enllaços, no fem res
  if (enllacos.length === 0) return;

  var popup = crearPopup();

  var temporitzador = null;

  // Emmagatzemar els fitxers ja carregats
  var memoriaFitxers = {};


  // Mostrar popup quan entrem a l'enllaç
  enllacos.forEach(function (enllac) {

    enllac.addEventListener('mouseenter', function () {

      clearTimeout(temporitzador);

      mostrarPopupFitxer(
        enllac,
        popup,
        memoriaFitxers
      );

    });

    enllac.addEventListener('mouseleave', amagarAmbRetard);

  });


  // Permetre moure el ratolí fins al popup
  popup.addEventListener('mouseenter', function () {
    clearTimeout(temporitzador);
  });

  popup.addEventListener('mouseleave', amagarAmbRetard);


  // Amagar popup amb un petit retard
  function amagarAmbRetard() {

    clearTimeout(temporitzador);

    temporitzador = setTimeout(function () {
      amagarPopupFitxer(popup);
    }, 180);

  }

}


/* ==================================================
   13. CREAR POPUP
   ================================================== */

function crearPopup() {

  var popup = document.createElement('div');

  popup.className = 'popup-fitxer-contingut';

  document.body.appendChild(popup);

  return popup;

}


/* ==================================================
   14. MOSTRAR POPUP I CARREGAR FITXER
   ================================================== */

function mostrarPopupFitxer(enllac, popup, memoriaFitxers) {

  var url = enllac.href;

  // Identificador per evitar respostes antigues
  var peticio = (popup.dataset.peticio || 0) * 1 + 1;
  popup.dataset.peticio = peticio;

  popup.textContent = 'Carregant...';

  popup.classList.add('visible');

  posicionarPopup(popup, enllac);


  // Comprovar si el fitxer ja està carregat
  if (!memoriaFitxers[url]) {

    memoriaFitxers[url] = fetch(url)
      .then(function (resposta) {

        if (!resposta.ok) {
          throw new Error('Error en carregar el fitxer');
        }

        return resposta.text();

      })
      .catch(function (error) {

        delete memoriaFitxers[url];

        throw error;

      });

  }


  memoriaFitxers[url]
    .then(function (text) {

      // Ignorar respostes de popups anteriors
      if (popup.dataset.peticio != peticio) return;

      popup.textContent = text;

      posicionarPopup(popup, enllac);

    })
    .catch(function () {

      if (popup.dataset.peticio != peticio) return;

      popup.textContent =
        'No s\'ha pogut carregar el fitxer.';

      posicionarPopup(popup, enllac);

    });

}


/* ==================================================
   15. POSICIONAR POPUP
   ================================================== */

function posicionarPopup(popup, enllac) {

  var rect = enllac.getBoundingClientRect();

  var marge = 8;

  // Posició horitzontal
  var esquerra = rect.left;

  // Posició vertical: sota l'enllaç
  var dalt = rect.bottom + marge;

  // Dimensions del popup
  var ample = popup.offsetWidth;
  var alt = popup.offsetHeight;


  // Evitar que surti per la dreta
  if (esquerra + ample > window.innerWidth - marge) {
    esquerra = window.innerWidth - ample - marge;
  }

  // Evitar que surti per l'esquerra
  esquerra = Math.max(marge, esquerra);


  // Si no hi cap a sota, mostrar-lo a sobre
  if (dalt + alt > window.innerHeight - marge) {
    dalt = rect.top - alt - marge;
  }

  dalt = Math.max(marge, dalt);


  popup.style.left = esquerra + 'px';
  popup.style.top = dalt + 'px';

}


/* ==================================================
   16. AMAGAR POPUP
   ================================================== */

function amagarPopupFitxer(popup) {

  popup.classList.remove('visible');

}