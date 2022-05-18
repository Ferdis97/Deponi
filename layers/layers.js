var wms_layers = [];

var lyr_Norgeibilder1_modifisert_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Norge i bilder1_modifisert",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Norgeibilder1_modifisert_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [725208.716976, 8542548.070751, 726448.742782, 8543448.939694]
                            })
                        });
var format_Deponi_1 = new ol.format.GeoJSON();
var features_Deponi_1 = format_Deponi_1.readFeatures(json_Deponi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deponi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deponi_1.addFeatures(features_Deponi_1);
var lyr_Deponi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Deponi_1, 
                style: style_Deponi_1,
                interactive: true,
    title: 'Deponi<br />\
    <img src="styles/legend/Deponi_1_0.png" /> <br />\
    <img src="styles/legend/Deponi_1_1.png" /> <br />\
    <img src="styles/legend/Deponi_1_2.png" /> <br />\
    <img src="styles/legend/Deponi_1_3.png" /> <br />\
    <img src="styles/legend/Deponi_1_4.png" /> <br />\
    <img src="styles/legend/Deponi_1_5.png" /> <br />\
    <img src="styles/legend/Deponi_1_6.png" /> <br />\
    <img src="styles/legend/Deponi_1_7.png" /> <br />\
    <img src="styles/legend/Deponi_1_8.png" /> <br />\
    <img src="styles/legend/Deponi_1_9.png" /> <br />\
    <img src="styles/legend/Deponi_1_10.png" /> <br />\
    <img src="styles/legend/Deponi_1_11.png" /> <br />\
    <img src="styles/legend/Deponi_1_12.png" /> <br />\
    <img src="styles/legend/Deponi_1_13.png" /> <br />\
    <img src="styles/legend/Deponi_1_14.png" /> <br />\
    <img src="styles/legend/Deponi_1_15.png" /> <br />\
    <img src="styles/legend/Deponi_1_16.png" /> <br />'
        });

lyr_Norgeibilder1_modifisert_0.setVisible(true);lyr_Deponi_1.setVisible(true);
var layersList = [lyr_Norgeibilder1_modifisert_0,lyr_Deponi_1];
lyr_Deponi_1.set('fieldAliases', {'id': 'ID', 'Epoke': 'Tidsperiode i drift', 'Drifta av': 'Selskap', 'Kotehøyde': 'Kotehøyde', 'Mengde M^3': 'Mengde avfall', 'Avfall': 'Avfall', 'Bunntettig': 'Kjent kunnskap om bunntetting', 'Toppdekke': 'Toppdekke', 'Areal': 'Areal km^2', 'Dato': 'Dato', });
lyr_Deponi_1.set('fieldImages', {'id': 'TextEdit', 'Epoke': 'TextEdit', 'Drifta av': 'TextEdit', 'Kotehøyde': 'TextEdit', 'Mengde M^3': 'TextEdit', 'Avfall': 'TextEdit', 'Bunntettig': 'TextEdit', 'Toppdekke': 'TextEdit', 'Areal': 'TextEdit', 'Dato': 'Range', });
lyr_Deponi_1.set('fieldLabels', {'id': 'header label', 'Epoke': 'header label', 'Drifta av': 'header label', 'Kotehøyde': 'header label', 'Mengde M^3': 'header label', 'Avfall': 'header label', 'Bunntettig': 'header label', 'Toppdekke': 'header label', 'Areal': 'header label', 'Dato': 'header label', });
lyr_Deponi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});