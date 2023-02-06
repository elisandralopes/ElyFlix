var imageList = [];
var nameList = [];
var linkList = [];

//variavel de valor fixo / vincular com a div com class 'content-container' no HTML
const container = document.querySelector('.content-container');

imageList[0] = 'https://m.media-amazon.com/images/I/912mJf7tsUL.jpg';
nameList[0] = 'My Hero Academy';
linkList[0] = 'https://www.youtube.com/watch?v=1dzA2Jydj2g';

imageList[1] =
  'https://i0.wp.com/otageek.com.br/wp-content/uploads/2020/12/Jujutsu-Kainsen-Otageek-Crunchyroll.jpg?resize=480%2C720&ssl=1';
nameList[1] = 'Jujutsu Kaisen';
linkList[1] = 'https://www.youtube.com/watch?v=ynr6gnyu9NE';

imageList[2] =
  'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/e108ae17d8d0407417cac40eb52d849a.jpe';
nameList[2] = 'Black Cover';
linkList[2] = 'https://www.youtube.com/watch?v=ScKdFRBJhyY';

imageList[3] = 'https://m.media-amazon.com/images/I/81s8xJUzWGL.jpg';
nameList[3] = 'Chainsaw man';
linkList[3] = 'https://www.youtube.com/watch?v=-FzTVkZNCRM';

imageList[4] =
  'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpe';
nameList[4] = 'One Piece';
linkList[4] = 'https://www.youtube.com/watch?v=lCIECoVKc_U';

imageList[5] =
  'https://image.tmdb.org/t/p/w600_and_h900_bestv2/xSctyYHNUQJqniZ06VOzi1rPlPp.jpg';
nameList[5] = 'Attack on Titan';
linkList[5] = 'https://www.youtube.com/watch?v=6MRxT8kz30k';

imageList[6] =
  'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f97923c80c70c98675c4f66ddb6c3782.jpe';
nameList[6] = 'Bungo Stray Dogs';
linkList[6] = 'https://www.youtube.com/watch?v=f9OV_KzR3SM';

imageList[7] =
  'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d48d4a62b0ac6381c87bd040b69b0a89.jpe';
nameList[7] = 'Demon Slayer';
linkList[7] = 'https://www.youtube.com/watch?v=tJxCxCWksOY';

imageList[8] =
  'https://m.media-amazon.com/images/M/MV5BZDc3NGQ3ZWQtYjNkOC00MjhiLTg2N2YtNmZlOGNiZTFkOWNhXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg';
nameList[8] = "JoJo's Bizarre Adventure";
linkList[8] = 'https://www.youtube.com/watch?v=zmNxNnuILjY';

imageList[9] = 'https://cdn.mangayabu.com/capas/bleach-manga.jpg';
nameList[9] = 'Bleach';
linkList[9] = 'https://www.youtube.com/watch?v=rLsyzpp2GKg';

for (var i = 0; i < imageList.length; i++) {
  container.innerHTML +=
    '<div class="image-container">' +
    '<a href="' +
    linkList[i] +
    '" target="_blank">' +
    '<img src=' +
    imageList[i] +
    '>' +
    '</a><span class="image-name">' +
    nameList[i] +
    '</span></div>';
}

// container += para o conteudo das listas não se sobrepor a cada interação
