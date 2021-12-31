//Зміна картинки при наведенні
typeCfull.onmouseover = function () {
  typeCfull.src = 'img/type-c-full-2.jpg';
};
typeCfull.onmouseout = function () {
  typeCfull.src = 'img/type-c-full.jpg';
};
typeClightning.onmouseover = function () {
  typeClightning.src = 'img/type-c-lightning-2.jpg';
};
typeClightning.onmouseout = function () {
  typeClightning.src = 'img/type-c-lightning.jpg';
};
usbLightning.onmouseover = function () {
  usbLightning.src = 'img/usb-lightning-2.jpg';
};
usbLightning.onmouseout = function () {
  usbLightning.src = 'img/usb-lightning.jpg';
};
watchUsb.onmouseover = function () {
  watchUsb.src = 'img/watch-usb-2.jpg';
};
watchUsb.onmouseout = function () {
  watchUsb.src = 'img/watch-usb.jpg';
};
macbookTypeC.onmouseover = function () {
  macbookTypeC.src = 'img/macbook-type-c-2.jpg';
};
macbookTypeC.onmouseout = function () {
  macbookTypeC.src = 'img/macbook-type-c.jpg';
};
typecBlack.onmouseover = function () {
  typecBlack.src = 'img/type-c-black-2.jpg';
};
typecBlack.onmouseout = function () {
  typecBlack.src = 'img/type-c-black.jpg';
};
typecThunderbolt.onmouseover = function () {
  typecThunderbolt.src = 'img/type-c-thunderbolt-2.jpg';
};
typecThunderbolt.onmouseout = function () {
  typecThunderbolt.src = 'img/type-c-thunderbolt.jpg';
};
typecThunderbolt2.onmouseover = function () {
  typecThunderbolt2.src = 'img/type-c-thunderbolt-2.jpg';
};
typecThunderbolt2.onmouseout = function () {
  typecThunderbolt2.src = 'img/type-c-thunderbolt.jpg';
};

//Сортування карток
function mySort() {
  let nav = document.querySelector('.cards');
  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
      if (
        +nav.children[i].getAttribute('data-price') > +nav.children[j].getAttribute('data-price')
      ) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}

function mySortDesc() {
  let nav = document.querySelector('.cards');
  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
      if (
        +nav.children[i].getAttribute('data-price') < +nav.children[j].getAttribute('data-price')
      ) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}

function mySortDefault() {
  let nav = document.querySelector('.cards');
  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
      if (+nav.children[i].getAttribute('rating') > +nav.children[j].getAttribute('rating')) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

//**********************Прописуєм сортування по натисканню
function sortLowApply(checkboxElem) {
  if (checkboxElem.checked) {
    document.getElementById('check2').checked = false; // додаєм додаткову логіку до перемикачів
    mySort();
  } else {
    mySortDefault();
  }
}

function SortHighApply(checkboxElem) {
  if (checkboxElem.checked) {
    document.getElementById('check1').checked = false; // додаєм додаткову логіку до перемикачів
    mySortDesc();
  } else {
    mySortDefault();
  }
}

//**********************Пошук
window.onload = () => {
  let input = document.querySelector('#mySearch');
  input.oninput = function () {
    let value = this.value.trim();
    let list = document.querySelectorAll('.cards .card');

    value
      ? list.forEach(elem => {
          if (elem.innerText.search(value) == -1) {
            elem.classList.add('hide');
          } else {
            elem.classList.remove('hide');
          }
        })
      : list.forEach(elem => {
          elem.classList.remove('hide');
        });
  };
};

//**********************Чекбокс "Buy mode"

// Плюс схований по дефолту
$('.plus1').hide();

//Фунуція відображення +
function createPlus() {
  $('.plus1').show();
}
//Фунуція приховування +
function removePlus() {
  $('.plus1').hide();
}

//Додавання напису корзини на сайдбарі
$('.cart_header').hide();

//Фунуція відображення +
function createCart() {
  $('.cart_header').show();
}
//Фунуція приховування +
function removeCart() {
  $('.cart_header').hide();
}

//Робота чекбоксу
function showPlus(checkboxElem) {
  if (checkboxElem.checked) {
    $('.plus1').fadeIn(200);
    createCart();
  } else {
    $('.plus1').fadeOut(200);
    if ($('.card_cart').css('display') === 'none') {
      removeCart();
    }
  }
}
$('.card_cart').hide();
//Клонування вибраного товару в корзину
$('#plus1').click(function () {
  //Натискання +
  $('#card_cart_1').show();
  $('#minus1').click(function () {
    //Додаємо функцію яка забирає картку з корзини по натисканню кнопки -
    $('#c1').text('1'); //Обновляєм щотчик після кожного видалення з корзини
    $('#card_cart_1').hide();
  });
});

$('#plus2').click(function () {
  //Натискання +
  $('#card_cart_2').show();
  $('#minus2').click(function () {
    //Додаємо функцію яка забирає картку з корзини по натисканню кнопки -
    $('#c2').text('1');
    $('#card_cart_2').hide();
  });
});

$('#plus3').click(function () {
  $('#card_cart_3').show();
  $('#minus3').click(function () {
    $('#c3').text('1');
    $('#card_cart_3').hide();
  });
});

$('#plus4').click(function () {
  $('#card_cart_4').show();
  $('#minus4').click(function () {
    $('#c4').text('1');
    $('#card_cart_4').hide();
  });
});

$('#plus5').click(function () {
  $('#card_cart_5').show();
  $('#minus5').click(function () {
    $('#c5').text('1');
    $('#card_cart_5').hide();
  });
});

$('#plus6').click(function () {
  $('#card_cart_6').show();
  $('#minus6').click(function () {
    $('#c6').text('1');
    $('#card_cart_6').hide();
  });
});

$('#plus7').click(function () {
  $('#card_cart_7').show();
  $('#minus7').click(function () {
    $('#c7').text('1');
    $('#card_cart_7').hide();
  });
});

$('#plus8').click(function () {
  $('#card_cart_8').show();
  $('#minus8').click(function () {
    $('#c8').text('1');
    $('#card_cart_8').hide();
  });
});

function price1() {
  let nav = document.querySelector('#card_cart_1');
  let counter = document.querySelector('[data-counter]');
  let final = +nav.getAttribute('data-price') * counter.innerText;
  console.log(final);
}

function priceLow1() {
  let nav = document.querySelector('#card_cart_1');
  counter = document.querySelector('[data-counter]');

  let final = +nav.getAttribute('data-price') * counter.innerText;
  console.log(final);
}

//счотчики
window.addEventListener('click', function (event1) {
  let counter;

  if (event1.target.dataset.action === 'plus' || event1.target.dataset.action === 'minus') {
    const counterWrapper = event1.target.closest('.counter-wrapper');

    counter = counterWrapper.querySelector('[data-counter]');
  }
  //Провірка чи елемент є кнопкою +
  if (event1.target.dataset.action === 'plus') {
    if (parseInt(counter.innerText) < 20) {
      counter.innerText = ++counter.innerText;
      price1();
    }
  }
  //Провірка чи елемент є кнопкою -
  if (event1.target.dataset.action === 'minus') {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
      priceLow1();
    }
  }
});

//Виведення суми заказу в корзині
