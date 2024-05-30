export function popupSwitch() {
  const popupBtnsOpen = document.querySelectorAll('.popup-open');
  const popupBtnClose = document.querySelector('#popup-close');
  const popup = document.querySelector('.call-popup');

  popupBtnsOpen.forEach(popupBtnOpen => {
    popupBtnOpen.addEventListener('click', () => {
      popup.classList.toggle('call-popup_active');
    });
  });
  popupBtnClose.addEventListener('click', () => {
    popup.classList.toggle('call-popup_active');
  });
}
