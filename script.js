var imageList = [];
var nameList = [];

//variavel de valor fixo / vincular com a div com class 'content-container' no HTML
const container = document.querySelector('.content-container');

imageList[0] = 'https://m.media-amazon.com/images/I/912mJf7tsUL.jpg';
nameList[0] = 'My Hero Academy';

imageList[1] =
  'https://i0.wp.com/otageek.com.br/wp-content/uploads/2020/12/Jujutsu-Kainsen-Otageek-Crunchyroll.jpg?resize=480%2C720&ssl=1';
nameList[1] = 'Jujutsu Kaisen';

imageList[2] =
  'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e108ae17d8d0407417cac40eb52d849a.jpe';
nameList[2] = 'Black Cover';

imageList[3] = 'https://m.media-amazon.com/images/I/81s8xJUzWGL.jpg';
nameList[3] = 'Chainsaw man';

imageList[4] =
  'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpe';
nameList[4] = 'One Piece';

imageList[5] =
  'https://image.tmdb.org/t/p/w600_and_h900_bestv2/xSctyYHNUQJqniZ06VOzi1rPlPp.jpg';
nameList[5] = 'Attack on Titan';

imageList[6] =
  'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f97923c80c70c98675c4f66ddb6c3782.jpe';
nameList[6] = 'Bungo Stray Dogs';

imageList[7] =
  'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d48d4a62b0ac6381c87bd040b69b0a89.jpe';
nameList[7] = 'Demon Slayer';

imageList[8] =
  'https://m.media-amazon.com/images/M/MV5BZDc3NGQ3ZWQtYjNkOC00MjhiLTg2N2YtNmZlOGNiZTFkOWNhXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg';
nameList[8] = "JoJo's Bizarre Adventure";

imageList[9] = 'https://cdn.mangayabu.com/capas/bleach-manga.jpg';
nameList[9] = 'Bleach';

for (var i = 0; i < imageList.length; i++) {
  container.innerHTML =
    container.innerHTML +
    '<div class="image-container"><img src=' +
    imageList[i] +
    '><span class="image-name">' +
    nameList[i] +
    '</span></div>';
}

// container recebe ele mesmo + próximo elemento das listas
