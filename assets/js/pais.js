$("#code-country").intlTelInput({
      autoHideDialCode: false,
      nationalMode: false,
      separateDialCode: true,
      preferredCountries: ['CL', 'MX', 'PE'],
      initialCountry: "auto",
      geoIpLookup: function(callback) {
        $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
        });
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.1.0/js/utils.js" // just for formatting/placeholders etc
    });