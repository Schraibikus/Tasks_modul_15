// Размер экрана — это ширина и высота всего экрана: монитора или мобильного дисплея.
const fullScreenWidth = window.screen.width;
const fullScreenHeight = window.screen.height;

// Доступный размер экрана — это ширина и высота активного экрана без панели инструментов операционной системы.
const availableScreenWidth = window.screen.availWidth;
const availableScreenHeight = window.screen.availHeight;

// Размер внешнего окна — это ширина и высота текущего окна браузера, включая адресную строку, панель вкладок и другие панели браузера.
const windowOuterWidth = window.outerWidth;
const windowOuterHeight = window.outerHeight;

// Внутренний размер окна — это ширина и высота области просмотра (вьюпорта).
const windowInnerWidth = document.documentElement.clientWidth;
const windowInnerHeight = document.documentElement.clientHeight;

// Размер веб-страницы — это ширина и высота отображаемого содержимого (отрендеренного контента).
const pageWidth = document.documentElement.scrollWidth;
const pageHeight = document.documentElement.scrollHeight;

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  alert(
    `Размер экрана — это ширина и высота всего экрана: монитора или мобильного дисплея. Размер экрана : Ширина - ${fullScreenWidth} px, Высота - ${fullScreenHeight} px`
  );
  alert(
    `Доступный размер экрана — это ширина и высота активного экрана без панели инструментов операционной системы. Доступный размер экрана : Ширина - ${availableScreenWidth} px, Высота - ${availableScreenHeight} px`
  );
  alert(
    `Размер внешнего окна — это ширина и высота текущего окна браузера, включая адресную строку, панель вкладок и другие панели браузера. Размер внешнего окна : Ширина - ${fullScreenWidth} px, Высота - ${fullScreenHeight} px`
  );
  alert(
    `Внутренний размер окна — это ширина и высота области просмотра (вьюпорта). Внутренний размер окна : Ширина - ${windowInnerWidth} px, Высота - ${windowInnerHeight} px`
  );
  alert(
    `Размер веб-страницы — это ширина и высота отображаемого содержимого (отрендеренного контента). Размер веб-страницы : Ширина - ${windowInnerWidth} px, Высота - ${windowInnerHeight} px`
  );
  alert(
    `Размер экрана : Ширина - ${fullScreenWidth} px, Высота - ${fullScreenHeight} px. Доступный размер экрана : Ширина - ${availableScreenWidth} px, Высота - ${availableScreenHeight} px. Размер внешнего окна : Ширина - ${fullScreenWidth} px, Высота - ${fullScreenHeight} px. Внутренний размер окна : Ширина - ${windowInnerWidth} px, Высота - ${windowInnerHeight} px. Размер веб-страницы : Ширина - ${windowInnerWidth} px, Высота - ${windowInnerHeight} px.`
  );
});
