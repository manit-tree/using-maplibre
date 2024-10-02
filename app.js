$.ready(() => {
    const location = [100.54761485951755, 13.83402735130762];

    const map = new maplibregl.Map({
        style: 'https://tiles.openfreemap.org/styles/liberty',
        center: location,
        zoom: 16.5,
        container: 'map',
    })  

    const nav = new maplibregl.NavigationControl({ showCompass: false })
    map.addControl(nav, 'top-right');
    
    let marker = new maplibregl.Marker({
        color: 'red'
    })
    
    let sb = new Array();

    sb.push('<div class="info">');
    sb.push('<h4 class="title">Lay Low</h4>');
    sb.push('<p class="address">662, ถนนประชาชื่น Lat Yao, จตุจักร, Bangkok 10900</p>');
    sb.push('<p>Tel. <a href="tel:080-555-6667">080-555-6667</a></p>');
    sb.push('</div>');

    marker.setLngLat(location);
    marker.setPopup(new maplibregl.Popup().setHTML(sb.join('')));
    marker.addTo(map);
})
