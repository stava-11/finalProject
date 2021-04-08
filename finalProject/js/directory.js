const requestURL = '../json/directory.json';

fetch(requestURL).then(function (response) {
    return response.json();
  }).then(function (jsonObject) {  
    console.log(jsonObject);  
    for (let i = 0; i < jsonObject.length; i++ ) {
      
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let ul = document.createElement('ul');
      let address = document.createElement('li');
      let city = document.createElement('li');
      let state = document.createElement('li');
      let zip = document.createElement('li');
      let phone = document.createElement('li');
      let logoLi = document.createElement('li');
      let logo = document.createElement('img');
      let websiteLink = document.createElement('li');

      name.textContent = jsonObject[i].name;
      address.textContent = 'Address: ' + jsonObject[i].address;
      city.textContent = 'City: ' + jsonObject[i].city;
      state.textContent = 'State: ' + jsonObject[i].state;
      zip.textContent = 'Zip Code: ' + jsonObject[i].zip;
      phone.textContent = 'Phone: ' + jsonObject[i].phone;
      websiteLink.innerHTML = '<a href="' + jsonObject[i].websiteLink + '" target="_blank">Visit Website</a>';

      logo.setAttribute('src', jsonObject[i].logoUrl);
      logo.setAttribute('alt', jsonObject[i].name);

      card.appendChild(name);
      card.appendChild(ul);
      logoLi.appendChild(logo);
      ul.appendChild(logoLi);
      ul.appendChild(address);
      ul.appendChild(city);
      ul.appendChild(state);
      ul.appendChild(zip);
      ul.appendChild(phone);
      ul.appendChild(websiteLink);

      document.querySelector('div.cardsDir').appendChild(card);
    }   
});