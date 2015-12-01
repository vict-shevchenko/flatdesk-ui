(function() {
  'use strict'

  var fastSearchContainer = document.getElementsByClassName('welcome-page__fast-search').item(0);

  function addEventListners() {
    //extraSearchParamsBtn.addEventListener('click', showExtraSearchParamsContainer)
  };

  function showExtraSearchParamsContainer() {


    fastSearchContainer.classList.toggle('welcome-page__fast-search_show-extra');
  }


 // addEventListners();

})();

showHiFiBackground = function () {
  var opaqueBg = document.getElementsByClassName('welcome-page__container-bg').item(0);
  opaqueBg.classList.toggle('opaque')
}
