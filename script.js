$(document).ready(function() {
  var url = 'https://restcountries.eu/rest/v1/name/';
  var countriesList = $('#countries');
  var description = $('#description')

  $('#search').on('click', searchCountries);

  function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
      $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
      });
  };

  function showCountriesList(resp) {
    countriesList.empty();
    description.empty();
    if (!resp.length) {
      return;
    };
  	resp.forEach(function(item) {
      $('<div class="col-lg-4">').appendTo(countriesList);
  		$('<ul>').text(item.name || 'Nie podano danych').appendTo(countriesList);
      $('<div class="col-lg-8">').appendTo(countriesList);
      $('<p>').text('Stolica: ').appendTo(description);
      $('<li>').text(item.capital || 'Nie podano danych').appendTo(description);
      $('<p>').text('Region: ').appendTo(description);
      $('<li>').text(item.region || 'Nie podano danych').appendTo(description);
      $('<p>').text('Populacja: ').appendTo(description);
      $('<li>').text(item.population || 'Nie podano danych').appendTo(description);
      $('<p>').text('Język urzędowy: ').appendTo(description); 
      $('<li>').text(item.languages || 'Nie podano danych').appendTo(description);

   	});
  };
});
