(function() {
  'use strict'

  var extraSearchParamsBtn = document.getElementsByClassName('welcome-page__extra-search-btn').item(0),
      fastSearchContainer = document.getElementsByClassName('welcome-page__fast-search').item(0);

  function addEventListners() {
    extraSearchParamsBtn.addEventListener('click', showExtraSearchParamsContainer)
  };

  function showExtraSearchParamsContainer() {


    fastSearchContainer.classList.toggle('welcome-page__fast-search_show-extra');
  }


  addEventListners();

})();
