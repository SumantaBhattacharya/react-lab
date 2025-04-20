var map = L.map("map").setView([22.9074872, 79.07306671], 5);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const customMarker = {
  iconUrl:
    "https://png.pngtree.com/png-clipart/20230111/original/pngtree-pizza-location-logo-png-image_8902732.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 50], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -40], // point from which the popup should open relative to the iconAnchor
  className: "blinking", // class name for the icon
};

function generateList() {
  const ul = document.querySelector(".list");

  storeList.forEach((store) => {
    const li = document.createElement("li"); // create a new list item
    const div = document.createElement("div"); // create a new div for the marker
    const a = document.createElement("a"); // create a new anchor element
    // a.setAttribute('href', '#'); // set the href attribute to '#'

    const p = document.createElement("p"); // create a new paragraph element

    div.classList.add("shop-item"); // add the 'marker' class to the div
    // div.setAttribute("id", store.id); // set the id of the div to the store id

    a.innerText = store.properties.name; // set the text of the anchor element to the store name
    a.href = "#"; // set the href attribute to '#'

    a.classList.add("shop-link"); // add the 'shop-link' class to the anchor element
    // a.setAttribute("data-id", store.id); // set the data-id attribute to the store id

    a.addEventListener("click", (e) =>{
      flyToStore(store); // call the flyToStore function with the store id
    })

    p.innerText = store.properties.address; // set the text of the paragraph element to the store address

    div.appendChild(a); // append the anchor element to the div
    div.appendChild(p); // append the paragraph element to the div

    li.appendChild(div); // append the div to the list item

    ul.appendChild(li); // append the list item to the unordered list
  });
}

generateList(); // call the generateList function to generate the list of stores

function makePopupContent(params) {
  return `
        <div style="background-color: #f5f5f5; padding: 16px; border-radius: 12px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); max-width: 300px; overflow: hidden;  ">
  <h4 style="margin: 0 0 8px 0; padding: 6px 12px; background-color: #ff6900; color: white; font-size: 18px; border-radius: 6px;">
    ${params.properties.name}
  </h4>
  <p style="margin: 0 0 10px 0; font-size: 14px; color: #333;">
    ${params.properties.address}
  </p>
  <div class="phone-number">
    <a href="tel:${params.properties.phone}" style="display: inline-block; padding: 6px 10px; background-color:orange; color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">
      ${params.properties.phone}
    </a>
  </div>
</div>

        `;
}

function onEachFeature(shop, layer) {
  // bind a popup to the marker
  layer.bindPopup(
    // `<h3>${shop.properties.name}</h3><p>${shop.properties.address}</p>`

    // makePopupContent(shop.properties.name, shop.properties.address, shop.properties.phone)
    makePopupContent(shop),
    {
      minWidth: 200, // minimum width of the popup
      maxWidth: 300, // maximum width of the popup
      autoPan: true, // automatically pan the map to fit the popup
      /*
      closeButton: true, // show the close button on the popup
      closeButton: false, 
      offset: L.point(0, -2), // offset the popup from the marker
      autoClose: true,
      closeOnClick: true,
      className: 'custom-popup' // add a custom class to the popup
      */

    }
  );
}

const shopLayer = L.geoJSON(storeList, {
  onEachFeature: onEachFeature,
  pointToLayer: function (shop, lattitude_and_longitude) {
    return L.marker(
      lattitude_and_longitude,
      { icon: L.icon(customMarker) } // create a new marker with the custom icon
    );
  },
});

shopLayer.addTo(map); // add the shopLayer to the map


function flyToStore(store) {
  map.flyTo(//longitude and lattitude of the store
    [store.geometry.coordinates[1],store.geometry.coordinates[0]],
    14, // zoom level
    {
      animate: true, // animate the flyTo action
      duration: 2, // duration of the animation in seconds
    }
  ); // fly to the store location

  setTimeout(()=>{
    L.popup(
      { 
        closeOnClick: false,
        className: "blinking",
        offset: L.point(0, -8)
    
      } // create a new popup with the 'blinking' class
    )
      .setLatLng([store.geometry.coordinates[1],store.geometry.coordinates[0]]) // set the latitude and longitude of the popup
      .setContent(makePopupContent(store)) // set the content of the popup
      .openOn(map); // open the popup on the map
  
  },2000)

}
/*
L.popup(
  { 
    closeOnClick: false,
    className: "blinking",
    offset: L.point(0, -8)

  } // create a new popup with the 'blinking' class
)
  .setLatLng([22.9074872, 79.07306671]) // set the latitude and longitude of the popup
  .setContent("Welcome to our Store Locator") // set the content of the popup
  .openOn(map); // open the popup on the map
*/