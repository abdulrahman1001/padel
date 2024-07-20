'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "50b5a63eb5397ab1581119f81ec7d161",
".git/config": "bbdadcf5803efba008de412801053d47",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "901b9d6ab808fe8e975e12003e178788",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2d594a411d1e1ac5afe67bfde5a916d9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7792b5fcb4173147f3fb132a485ad99b",
".git/logs/refs/heads/main": "91b25d94939ccf76566bc18a3ce8f746",
".git/logs/refs/remotes/origin/main": "26a8f6d86139252c15b605cf576a5f08",
".git/objects/00/52c98f03a631f6515a8e6bc33040f0b5389094": "0d362ff5c3a3c84515279d44571daf3a",
".git/objects/06/68d71d48be39ba278f943417535dedb1d82ab3": "388e6d12ef269008c4333eb6e39decc1",
".git/objects/0b/d24c55f1c23ac91abac2f86f0661e796f86b43": "d3d89633a8132c1e6204418da75b7ade",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/15/279b8495b55bb413fada2deb45906009fb9bc9": "fa31f4c3658ce668435ff782bb030aa6",
".git/objects/16/2d01c91ae7bf06ea4aee1d8dadcef451efd64b": "530d2176e42fded9147733e05aab9b43",
".git/objects/16/d0f20d9692e5f44f8e1afa75bd905778fc9d2e": "c9340fbc53cdac9c38fdc8491fc78741",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/7c9d2c7e9303a6455c704dce476ba575e40d6c": "e4a1a039a206dfa211616fa4c64d1d07",
".git/objects/1c/f62d877ec22061fd48249ef05d2117116e06c3": "452a850172d2e8d125d0cfe989f3fd6a",
".git/objects/1d/6497d982a4bf3005c3a744fcdceeb6d7dedffe": "de633c9e1ef25708a31cb85b99ed0ed0",
".git/objects/1d/983f9e31a0aabfe62725b04b9808212a03ec57": "6c9d199a69e267a66291f362158cdb95",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/72faa3d7ec34d1c3649efb706e5ba5cba101e5": "d0fe91b95f691e1b326ecb9adcee6c05",
".git/objects/1f/9e64e6ef3ae6417b2a1cddd10ae7adf176709a": "04d50db57f4c9448c12f5ef90c7dfa53",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/d2d6627ad69dfcbf477f9c2ac93041f008cac9": "3cd44020d9add88bf60bf2a68c81317f",
".git/objects/2d/143ffe4deae49ecec93f0c6114e7a58f3c6e79": "f7e5affbbddc56a7c456343841178e1e",
".git/objects/31/89867e24f2cabc960d85a014776cda6eb760f7": "65233a35cfd4c8a7d77297210f87d2cd",
".git/objects/3c/79acefb6842620e47a1bdac13548bee97010f7": "222eb4057a43bb9af8aa3ebeef8cec7d",
".git/objects/3d/1b353bd3600bde720cfe9c7386d2fc03b32018": "49c28785a16ab0ff4d24cf3c0a9b6dbd",
".git/objects/3d/41dac3f7716c3ce64b40b35fd36f16f802dd85": "ce5c2d75bb4ec86a2d4040086d5cea32",
".git/objects/42/ff0b9a8c2eec71f85402d66839baebef83eb25": "ea92d60b151114cd842586c64ddfc588",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/6afd78d0c5fa321a95ae2c4ba00a44ad3ac80e": "6bedc5be1330a3d5c1191427a283ea2b",
".git/objects/4e/d17790332590d3bf548137b65dd99c381db2a8": "7a5e4ac22f36687c10d909916a0e7946",
".git/objects/4f/765064be7f427ec002195939d1e4b5ac3c1165": "a4508bb28d32e271f6de63e33e864610",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/da040ebada10d2d56f20bc97c9aaa5536c3ff6": "58db27872f2fb7de09cc6feccaeab31a",
".git/objects/5b/6729fe5fca8247c60b4643204032cdf14512d2": "f88b09ff7f3b7b9f3c2850d82bdc64fd",
".git/objects/5d/20772c04cdddddea137f224560f53955df84ad": "46d3295d8af66377bb2b6fa1dcdf0d87",
".git/objects/60/cc9812ec7b900b1f28b6ca06eecf9e2fddaead": "e050f0be4ba8d6c0003c7c541b41a0ad",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/69/5a91942d188864cdd574a86ed6a3335c6cc164": "4cc8b453d04f5233dac7149a9b272d9b",
".git/objects/70/c739b1a91c4d87ec1f7065204e45bfdf12ea2e": "bd2645e97835ee6b38a5e0c0abb81da5",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/77/f01529fe511a0977c0681dfbbc64793da68f75": "6f3432c7a589cb4809e16ad1f4efab7a",
".git/objects/7e/20ef3a636004fb1c01691ccbf948d148a9e8b1": "e3943163d0404f9c0a16647d77ddfa51",
".git/objects/7f/fe33f3adb19d6a2b6e1a2f6b67290270fdbf91": "08a9c9ac532dcbd1f112b6c25256d759",
".git/objects/82/433f7df7316cbec6318aadfb4e47fce68d29e3": "10eaa906b33a3698a105a12b74b3c740",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/cbe479d3910138673020f0d51e504e0b8cd211": "17e14d1db95bae103c30de652d3dc1b2",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/99/35d4b932fe9cad39b999ae6bf11dcd0205da55": "93533be03e0d2448285f139bb40e2fa5",
".git/objects/a1/016ea04666ea8b6498ac140d14e3acbf857218": "408b621bd14ef33fa464109c89be9bf2",
".git/objects/b2/bf49486122db40c4f938f60f116c4f0c788a36": "0e432505974713da97d336965bade70f",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c0/aa23cb1d8bdbee1dfb2c38694f965639f9f9be": "320f92075ecedc6ca1007477edcc9a93",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cd/645be7833d84cea94187f913e2630a586cd643": "2fdb1379b8b9ab4a258760c5e4ec7b14",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/fc171c57042721abf2a4edf7ab0b79fccb804d": "98d0a233780fbee9ebccc68e5db69a95",
".git/objects/ea/94dfdbfa30665beec76af7efae4f8252fd34b7": "d42a692c968395ddce98178c5a5086fb",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/67a99290b20496c4f2387e7eb94502247e6329": "1668f32b4e12733ddca739b9b601fe9e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/a8d1cc170294e7ebe1e7deacfba7faab0f8716": "3dc187eb5020258f3de8db571f513ba2",
".git/objects/f6/73c2d408fa9392082fdab67087ddb6c0cf4875": "eb6ec8549a737d5bc8dfc365d8dcfa8d",
".git/objects/f6/8ff2123685a761b097bbbfca489b7aa3a7432a": "a38b7e7575ca468fec072c92a5d65063",
".git/objects/fb/4a2cdf8f0dbb6014fc093064be1a2bed877f52": "4c5d74ade0c56a76f858bd6af52292a2",
".git/objects/fb/f23765a00d5e0e442bc3b6f62ab31902c9c82b": "2eb5153c74f056461ca10e09211c8692",
".git/objects/ff/1e20c76088d85117d603d39ee328555e918209": "9716909a34edf22d8939ad6206066c94",
".git/ORIG_HEAD": "72d72b57f038393cd62d549ad9346f0a",
".git/refs/heads/main": "72d72b57f038393cd62d549ad9346f0a",
".git/refs/remotes/origin/main": "72d72b57f038393cd62d549ad9346f0a",
"assets/AssetManifest.bin": "e2f1077de343d93d900546becd335684",
"assets/AssetManifest.bin.json": "2b5dd0cfcc259ee295184513e7cb3f62",
"assets/AssetManifest.json": "679e15d6e01e56c3b466df9a09166e10",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "cab235b2e3608d75673aacac4c83a1dd",
"assets/lib/asset/img/bluepadel.svg": "554a90f98fba202ad5be367a3915850b",
"assets/NOTICES": "981bd4c4b054a3be8a7b3a8c0c723c66",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "8227ba9996eccd4a1fe2649d443c92c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2f39508983dfa1e72c617f61aae01d9a",
"/": "2f39508983dfa1e72c617f61aae01d9a",
"main.dart.js": "af94005279d117f54beae1123025ad9d",
"manifest.json": "d4bab29eade9acf38e59aaa8aea047fc",
"version.json": "4ea498249f24acb85721680a53f1e452"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
