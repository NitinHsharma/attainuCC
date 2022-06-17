
let googleMapUrl = 'https://www.google.com/maps/search/?api=1&query=';
const locationBtn = document.getElementById('getLocation');
const ViewBtn = document.getElementById('View');

locationBtn.addEventListener('click', locationHandler);
ViewBtn.addEventListener('click', viewHandler);


function locationHandler() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert('Geolocation is not supported by this browser');
    }
}

function viewHandler() {
    window.open(googleMapUrl, '_blank');
}

function success(pos) {
    console.log(pos);
    const lat = pos.coords.latitude;
    const log = pos.coords.longitude;

    googleMapUrl += `${lat},${log}`;

    console.log(googleMapUrl);
    const result = document.getElementById('result');
    result.innerHTML = `<p>Latitude: ${lat}</p>
                        <p>Longitude: ${log}</p>`;
}
function error(err) {
    console.log(err);
}
