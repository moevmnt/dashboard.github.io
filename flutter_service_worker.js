'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "97d4c89fa1880446c8d3f681a52d7fe6",
"index.html": "4c77052d4065102347002625f1ac4ded",
"/": "4c77052d4065102347002625f1ac4ded",
"LICENSE": "86d3f3a95c324c9479bd8986968f4327",
"main.dart.js": "e8c969e35f9053e27fd40721800fd7fd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "837267541d2d21a23afd6de01c8d1921",
".git/ORIG_HEAD": "94a2501c9cfe56c82d12617eb5fe6a1d",
".git/config": "46133b08c498571e081116cfa8aa248d",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/5facc27addcda892d3ba4e2252e2b16f46e310": "316f7d5b4f48fcc1283b77d6a909aa38",
".git/objects/6f/01a4d20c14ecfa44d5a9bcaa59b7c98c9d7571": "b390d2068dbffcbdaef974163abd4c7e",
".git/objects/03/1ad5c6b92b89a7e41ddaf83d7eff2d9076a94b": "8946c02e6a48fcf3a0d40247615561cd",
".git/objects/35/304214365d5952c0911a4cc81405448393a925": "3b7c82a469060326f3d60440c2ed92e2",
".git/objects/3c/a7bb913d65e310208109d589c2a7ebca9be88d": "3a20367443b0105475bb12c601e9116c",
".git/objects/67/58bfd6a4bb8944791395415e49f457984b355f": "b40036d990c7ad8e41591da24d0a2963",
".git/objects/5a/5713773a96f7e46b80ab5be697ee890c6d9131": "e4432be54b933f998f980fb7c1d9435f",
".git/objects/ad/0266c2ad962a384bc781072e3472d905893faa": "cfc60c4216bcb57ef47186599660beac",
".git/objects/be/e104d9f3128853983f3e443feef262b985fcba": "84b3d4d3086bd928c3d7fc15a8aad08f",
".git/objects/b4/c9aedbd4477e3505b5d5111b081a54e9c5735f": "6434eb02e9051f3748a0b12b8e326f0e",
".git/objects/d1/0e76dcd13bce8da7702f8513c33ab141d3b74f": "53cdd1b3375261d0049343467b2af46b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/ed362c659389fa9869cffba40db0ccd3cdf796": "afe89b95d0a00143d5308c377eb654fe",
".git/objects/d8/8a9347177e0e8079b5072169044314b4a74e15": "9066904fb9795ef7cb1493a9c3866973",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/7e049fa56355adcbb9d2dd9601dcba37e3c5f0": "c0fa5accfb27f28fbcb272303d39279f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/8cb07f8aa386c8c0c53ff5b5502aa3459818ca": "7a5528f392aa584646eab523f838f3d8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/5a413e1bc0a135a212813d8337f9f65ad3db57": "9b0166d75538454336f6c4ca8b656768",
".git/objects/ee/fbe2fd92f060066a59d459bf3bb87f761bb971": "4589019565fd8c80c76cec71b4f0ced5",
".git/objects/fc/2ecfbe1556865ca6392b53c10c39bf7e22ee2d": "10e3532729ff8c977a18d8da43f00a4f",
".git/objects/f2/89456918f8f28234b9fcd7bba0f1123408f534": "ad4eee9a0b9f4e02eaf5e1c1655ae038",
".git/objects/f5/e04d4b28df8300bc29e8ba423b5345035c5291": "f0bdd985fbbce66a56fc65d262aaa57d",
".git/objects/fe/8b322f1f0a43a19a11003d511eca2d1bce615a": "39e344e65d276481a04922a66c85ed38",
".git/objects/c8/dd7da560940de0d118812dc5cad5dbcce45666": "0a35b1f202608014b665e3d38624a02e",
".git/objects/c8/c90b7c2c97e1f78ab3c09687d0d7f9a2a60cae": "4d51cc92b66c7944539ec97202c36527",
".git/objects/ed/697dd099a7a858a2448fc9c7624ee5ba61f680": "8154398bf4405c330036436e8361be65",
".git/objects/c6/e0d5f8827051c93e67870fa3e33bb6e536e60b": "9e15ca94ead967cb376cc2e943bc3fc1",
".git/objects/c6/f4fe24569a712fc48fc7934c19e1c11085b031": "e8870785890e527dc97f82b6b15562d5",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/7a77188906fea56e6669d37bfb2bb852e5eeee": "32a02e6c0f330b6d738a07c7bf648d55",
".git/objects/27/893bdb6d92593da921e61fea951d0fc55487d8": "f98bf1cde69102aec6b243c4071d4634",
".git/objects/4b/20fe9dc79f628d818f33dcdcb484e459b49e8d": "45e745d7d0d9709b5843bf3578202a58",
".git/objects/29/c245c715525e60b8d27aea7bb23f558be12577": "600d4506022196284a5a80ab1acc2151",
".git/objects/89/1ba5594fa0b875f74f65984c02701e8133f194": "945377bb158c1122ca27cd877dff5fb8",
".git/objects/89/ee64babeee21489ca3369ce2fdfc7d2c6e4342": "a47ad29943b9449e028a88ed9df0e80f",
".git/objects/87/b4cc9b1f2343ee764931a9a3f41fc3b6cc2d61": "d93d0176ec679d650d5c4016facb677a",
".git/objects/87/fc8d8dc4e697b1360698289fdfcba7751a59cd": "ae4585c388d4716a66f6c534c6327200",
".git/objects/87/1a9dd22e65367718b2de4909bf8e4c462d69e3": "892a6711c604b80502f6045865093dbb",
".git/objects/28/a6074f3825e70cf9b237486a2f6257ef8875f0": "6a7372538d7c0e3503e9a0340a97d40e",
".git/objects/17/5175d3d9ddefa555635b44b35f6119fbb5ad19": "a3a2654edf497018fea3407fba9e3c2d",
".git/objects/17/edfe13b02068b71eb579599a74a262cd0bf43d": "d112dac31854777d63871dd69330a298",
".git/objects/8f/57a99980891ccc68701b94b94342f7ae0e02d6": "1fbb678a273d6cb7864e009f9bfa84c9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/7fe1e31536ea9dfccb0c333ecd7ef6e4f340b5": "3fba78adaaecd7229e8236234f11d3f6",
".git/objects/19/f30106c6b4e3030665fc7ac2ea5416e940aa82": "a9c0f220a2c1a8da1f08c92fcda0bc3d",
".git/objects/26/258912422f99baac5846d375f2abaab7185b11": "1df05da7956f7904fb2cc8d352d102d7",
".git/objects/26/1eeb9e9f8b2b4b0d119366dda99c6fd7d35c64": "36b35938e0c57b26db0cfe487524a192",
".git/objects/86/8a43f68a377badbe0e7049e25671df380d7db0": "56b17aeccd7eb8df4179e456122c10f2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/3f4839c254b8f795625d9fe1590fd0d39f36e8": "865dd697dc49891cd02cbe5c812c31e2",
".git/objects/6b/944443935b6e5b538b2a27f4409d1cb0b6e60c": "f0ed29422e2fa1097c1d5f87375fc229",
".git/objects/00/6ad1c027ac166798dcba664561b5e655f83bab": "be59937e2ac5c7ab34e0b9fde78ee046",
".git/objects/9a/53a3930514ffb607d729fe7c44860aa8134c8c": "ed9b86002f1c11e455be273c3e542ad8",
".git/objects/5c/29991b4e7538a4e2e09b400ece965fc45e36fa": "b39d6af2f8d6ad79cbc1f4ea8e5b759a",
".git/objects/65/1ebcd66b7263db071a675be6a55ad0f9a5dc9e": "8d19045b181a31e75fff3b6b2811f2b1",
".git/objects/62/87a53eda25b8abce3c7be091e452b887e7f193": "d5978c6505126256ec2533be778b20df",
".git/objects/30/f5d3ca603ea9324c9c664f0e222c48c37c4a21": "01b128ce74191c281f3b718a44fd30c4",
".git/objects/06/2d3297729efec1eb16b2e09acc449509b9dc19": "7857670b4bd55b9249dbaca0c087888e",
".git/objects/39/5d66ce0b4816289f5e5a8ffa1d8a7dfaa48c3a": "6254200da0ba0f917bfe29ece7c5db7e",
".git/objects/99/ca3c44a757194cb88c4d2e3d65e632c4c93003": "1ef4e273c912e63fbbaac2d974157b1a",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/0f/946fda95e5b835ea3a47809bd38ee897ec7ff9": "8c077ed6f8db60a6970f2a7eac4f2153",
".git/objects/ba/08497a8920c8768c46acc0a293dfd093c1fc9c": "f7c080b14e50086f384301f8bc5b715a",
".git/objects/a7/5f1bcb81f956fd3489023e10738f51cf344514": "3221c93ef21140c9be0e9600aa2531f2",
".git/objects/b8/22aa30a5905092d81e330589b6f427cb24d29e": "e19dc381f08eac349acd66a9e778934a",
".git/objects/a9/8ebf1b010c2ec08150f89052db0b29fc1726ac": "b7b8f9390f2480140fe8e7eb02973f41",
".git/objects/a9/4fbcdf456215bb4b515de41587fb483784c47f": "4499157a1ca1ce557cfd3ad222520614",
".git/objects/d5/7ce5fc8bf7cb675586d50c847cc77c7cbd314c": "1a5e047aa3cfb39fcc134b9b0ea1615c",
".git/objects/af/6b4b0c9568b281a377b622239658e426c1c72b": "98ff1a5a3545595b2328cdafcdf0455d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/8253eafc1212ad8bbd1f73b1b74af38af551ef": "f4fe416fa62426bcecd22050cb6d3cdd",
".git/objects/a6/986f7ed371f0bdbced21865f17d7cae3c8107c": "18945532acf7613991195ba973980535",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/26bb362017d8def04df2d7927b1e85d1d1a0c3": "29ad2c60fb2066a9340ab7ce27e22dcc",
".git/objects/a1/8d38dc072881b4e490323eb2fc37c6465e8fba": "378a26df559882497cdc8a7ad3b1fd41",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/ea/a825ae6f4dd6bf72513d844524fa4c1bd6923c": "013b5eb61173b8ff0da436523cd04913",
".git/objects/f9/51d69bc3f43ba50cd83c6a2878babf2a2fd3fc": "e656d3b05e7b579cf8df1a37470f2d64",
".git/objects/f9/8d571088d69cecee0f597dcffa03ef73be5026": "9f45403cfe36d228cd8996e62e4df2b3",
".git/objects/c2/df4f2b08d85755ad48ff934d2138e30c90cef3": "73a4608b00ffe9b22d70cf4ad1e0b522",
".git/objects/f6/9588089708a9afcc5a41221d2c469cc098bd28": "2e5fe0f5b80e8dc371ef132978fa3299",
".git/objects/f6/04ff6f1da37efe80f3ee24eb0d1d6ce0c404d9": "0bd62b49363c3d4653decfbce022fd43",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ce/82da817ce3e636e79a2e52ecd4858333021bee": "e6a4ad0f6ebc51ef0859323caab73d81",
".git/objects/79/40d483ed6a215df87ff1254f18556a81d4e582": "83c24707b61be9c44b052ce2b649d328",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/1e/944a19794d25edb6ad292d4d16745b37b808dd": "154ce678497a5a62db4a9b6a0bada1d2",
".git/objects/24/d3bdac436277c0052da7a2ff88214ce8d692db": "140b580427b12e9ff1cb994b25422e18",
".git/objects/24/a23f7ad77d6d0533925813860f217effc77fb8": "0d0e1a27f0fa86c9b15b85717ab53004",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/77c45d4716e770f543dba0a24a1e150c2e46be": "765582842da320d8e1900c8890cb7494",
".git/objects/71/6f070de97f89dff76d263fd05e61d9a127cbd5": "a7235eac29dfbb8016ad7fb751297503",
".git/objects/71/846f9314c8b1bc5e5c7cd7d6ac7466f49fc035": "12cda4f8767db83bfc8994e61caa1000",
".git/objects/71/dbd7ee911a6177525f0a21061fa9c65286e658": "739eb2268e0bb9bf892f125c9aaeeeac",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/c511ccf37f78e494ee18ef95bf20341efdd60c": "93f06432ea19e3568748bf004d1cb03c",
".git/objects/2e/061fe51d36896b9996410c4b45761e2948098a": "ff4fe18281fcf0724ffd48e8cc9a5b35",
".git/objects/2b/d7dae7daf710ec73d374cf2d73700f6513544f": "4b24f6f376816d2d84a076c5c5c57a03",
".git/objects/78/149d0f34f4713c931afd1838acf6268c167003": "4b8ca212efad3f38c0ba748d43e01cca",
".git/objects/78/bd9b5945b79aacae7f2b9b97258a3457ea484b": "f6cb8abec36d6f89743f3698803d259c",
".git/objects/7f/8aec051484e5da9b8bb8cef22c8f30acbcb73a": "ecc3faeb8380319017a8f09b5949cc73",
".git/objects/7f/4954409aa3059f8a4c8ce37a913b973c25000c": "1ca634a24c827724e8d31894e1ac1d76",
".git/objects/8e/a8e9c15bd6d6ff982f34f14b628765cdfb865b": "5505f73eb29f3a31d18d0d0b10d8fc95",
".git/objects/22/8f0c2950b8f37e0be303c9ab89a59ac97be054": "0f4b231838bb365de9d4c33e0aa37476",
".git/objects/22/573db340846daa168e0342ee24efee42817a07": "fa418343aef4301da7165b2b8d128b38",
".git/objects/25/33a6d361002fc781ce657b59c88d7606a1cd5f": "c6e71174092e9f316395443990222e4c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "ef1bd0ba0841e9994bd4c94aebd00744",
".git/logs/refs/heads/main": "ef1bd0ba0841e9994bd4c94aebd00744",
".git/logs/refs/remotes/origin/main": "0f08bb8ed844c208c643790ae0877d5c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "af5092beefacbbc9c9b9664ce2d79865",
".git/refs/remotes/origin/main": "af5092beefacbbc9c9b9664ce2d79865",
".git/index": "79a80ed74dd51561cea8fc28ec9122c1",
".git/COMMIT_EDITMSG": "52038b09443ea1da2c3fc5991fa163ba",
".git/FETCH_HEAD": "f8f1e2f57fb5310740520c829818f4b9",
"assets/AssetManifest.json": "160773f5365bfaf445c48972e116dd24",
"assets/NOTICES": "84934bb27d200c565f86a492a9ecd932",
"assets/FontManifest.json": "a98e016f0cdf39c60c28e8f4895fec66",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Nunito-Regular.ttf": "d8de52e6c5df1a987ef6b9126a70cfcc",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/Nunito-Italic.ttf": "380d3172fab0055a8d74ab12636f5a9b",
"assets/assets/images/repair-icon.svg": "beb41b61384b86a7a2feaae27f3a4ef8",
"assets/assets/images/lock-animation.svg": "574e3ef21ff4f957d611426266323cde",
"assets/assets/images/core-lock.svg": "f779d45cbeca428f164eb7cc1b57d879",
"assets/assets/images/unlock-animation.svg": "244fc708683c42aa97d291db6e63bff4",
"assets/assets/images/bike-instruction.png": "92f7eb71c27ed61e6ebfd10c4f367141",
"assets/assets/images/history-icon.svg": "007b4a17ce7f19b55f41c07c34206c6c",
"assets/assets/images/moev-marker.svg": "8f99366dd4376c68cba9c3ce150b8442",
"assets/assets/images/bike-icon.svg": "b4031588d7259ca299f86d8a55c5f78f",
"assets/assets/images/core-hold.svg": "c5e3ceaa3f20d17aca2dc7cc0f1a6c94",
"assets/assets/images/bike-instruction.svg": "7926d3f8bfd2ee75dcc79e51bfca04b1",
"assets/assets/images/moev-circle-blue.svg": "ac697141d08f83cc9216e9ce21b3b74c",
"assets/assets/images/selected-marker.svg": "334f82f7cbe6049b1f8f57f22bd1d454",
"assets/assets/images/helmet-icon.svg": "ad142804812e26502292c560e7429121",
"assets/assets/images/closed-kiosk-marker.svg": "245751307aad2512be8471af160e6f70",
"assets/assets/images/venom-bike.svg": "d285383e7538220df784f8c8c89edec5",
"assets/assets/images/core-unconnected.svg": "1b546cb89b5c7d2cd4755aa432c3775b",
"assets/assets/images/reward-icon.svg": "9d59d49c95bb6fd2fd57bfd402b76596",
"assets/assets/images/moevone-white.jpeg": "99794ce4096f5c98d15d80ea4c127c0c",
"assets/assets/images/error.svg": "7e2883473761e41620c41875d7871e1e",
"assets/assets/images/venom-bike.png": "d51744ba271da10c072d91ed9e93a2fa",
"assets/assets/images/logo.svg": "e1f694424a5f76e297b8f241994ecf42",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
