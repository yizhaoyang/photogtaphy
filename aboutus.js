// Regular map
function regular_map() {
    var var_location = new google.maps.LatLng(48.860294, 2.338629);

    var var_mapoptions = {
        center: var_location,
        zoom: 14
    };

    var var_map = new google.maps.Map(document.getElementById("map"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "New York"
    });
}


google.maps.event.addDomListener(window, 'load', regular_map);


//listen node test.js
const express = require('express')
const app = express()

app.get('/test', (req, res) => res.sendFile('/Users/David/Documents/photography/test.html'))

app.use(express.static('home'))
app.listen(3000, () => console.log('Example app listening on port 3000!'));