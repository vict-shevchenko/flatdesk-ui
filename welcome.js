(function() {
  'use strict'

  var extraSearchParamsBtn = document.getElementsByClassName('welcome-page__extra-search-btn').item(0),
      extraSearchParamsContainer = document.getElementsByClassName('welcome-page__extra-search-container').item(0);

  function addEventListners() {
    extraSearchParamsBtn.addEventListener('click', showExtraSearchParamsContainer)
  };

  function showExtraSearchParamsContainer() {


    extraSearchParamsContainer.classList.toggle("welcome-page__extra-search-container_visible");
  }


  addEventListners();

})();
