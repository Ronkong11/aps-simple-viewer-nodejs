const CACHE_NAME = 'aps-cache-v1';
const DERIVATIVE_SERVICE_API = 'https://cdn.derivative.autodesk.com/derivativeservice/v2';

// List of URLs to cache
const CACHED_URLS = [
    '/',
    '/favicon.ico',
    '/index.html',
    '/logo.png',
    '/main.css',
    '/main.js',
    '/viewer.js',
    '/api/auth/token',
    '/api/models',
    'https://fonts.autodesk.com/ArtifaktElement/WOFF2/Artifakt%20Element%20Medium.woff2',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.css',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.js',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/lmvworker.js',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/BimWalk/BimWalk.js',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/BoxSelection/BoxSelection.js',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/CompGeom/CompGeom.js',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/DocumentBrowser/DocumentBrowser.js',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/LayerManager/LayerManager.js',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/Measure/Measure.js',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/MixpanelProvider/MixpanelProvider.js',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/Section/Section.js',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/Snapping/Snapping.js',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/extensions/ViewCubeUi/ViewCubeUi.js',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/boardwalk_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/boardwalk_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/CityNight_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/CityNight_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/CoolLight_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/CoolLight_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/crossroads_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/crossroads_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/DarkSky_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/DarkSky_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/field_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/field_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/glacier_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/glacier_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/GreyRoom_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/GreyRoom_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/GridLight_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/GridLight_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/Harbor_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/Harbor_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/IDViz_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/IDViz_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/InfinityPool_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/InfinityPool_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/Night_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/Night_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/Parking_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/Parking_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/PhotoBooth_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/PhotoBooth_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/Plaza_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/Plaza_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/Reflection_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/Reflection_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/RimHighlights_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/RimHighlights_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/riverbank_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/riverbank_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/RiverRoad_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/RiverRoad_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/seaport_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/seaport_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/SharpHighlights_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/SharpHighlights_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/SnowField_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/SnowField_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/SoftLight_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/SoftLight_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/TranquilityBlue_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/TranquilityBlue_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/WarmLight_irr.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/environments/WarmLight_mipdrop.logluv.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/locales/en/allstrings.json',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/locales/en/VCcrossRGBA8small.dds',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VCarrows.png',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VCarrowsS0.png',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VCarrowsS1.png',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VCcompass-base.png',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VCcompass-pointer-b.png',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VCcontext.png',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VCcontextS.png',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VCedge1.png',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VChome.png',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/textures/VChomeS.png',
    'https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/res/ui/powered-by-autodesk-blk-rgb.png',
    // TODO: where to get the full list of all Viewer resources?
];

self.addEventListener('install', function(event) {
    console.info('Install event', event);
    event.waitUntil(install());
});

self.addEventListener('activate', function(event) {
    console.info('Activate event', event);
    event.waitUntil(activate());
});

self.addEventListener('fetch', function(event) {
    console.info('Fetch event', event.request.url);
    event.respondWith(_fetch(event));
});

self.addEventListener('message', function(event) {
    console.info('Message event', event);
    const message = event.data;
    switch (message.type) {
        case 'CACHE_URN':
            const { urn, assets, token } = message.payload;
            cacheUrn(urn, assets, token)
                .then(result => event.ports[0].postMessage({ success: true, result }))
                .catch(error => event.ports[0].postMessage({ success: false, error }));
            ;
            break;
    }
});

self.addEventListener('error', function(event) {
    console.error(event);
});

async function install() {
    self.skipWaiting(); // Replace old service workers without waiting for them to wrap up
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CACHED_URLS);
}

async function activate() {
    const clients = await self.clients.matchAll({ includeUncontrolled: true });
    console.info('Claiming clients', clients.map(client => client.url).join(','));
    await self.clients.claim();
}

async function _fetch(event) {
    const match = await caches.match(event.request.url, { ignoreSearch: true });
    console.info(match ? 'Cache hit' : 'Cache miss', event.request.url);
    return match || fetch(event.request);
}

async function cacheUrn(urn, assets, token) {
    const cache = await caches.open(CACHE_NAME);
    const manifestUrl = DERIVATIVE_SERVICE_API + '/manifest/' + encodeURIComponent(urn);
    await cache.put(manifestUrl, await fetch(manifestUrl, { headers: { 'Authorization': `Bearer ${token}` } }));
    for (const asset of assets) {
        const assetUrl = DERIVATIVE_SERVICE_API + '/derivatives/' + encodeURIComponent(asset);
        console.info('Caching URL', assetUrl);
        await cache.put(assetUrl, await fetch(assetUrl, { headers: { 'Authorization': `Bearer ${token}` } }));
    }
}
