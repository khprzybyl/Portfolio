import goryImage from '../assets/images/gory.jpg';
import productImage from '../assets/images/produkt.png';
import lelo from '../assets/images/Lelo.png';
import people from '../assets/images/ewe_marcin.png';
import kwietnikSI from '../assets/images/SI.png';
import kwietnikLI from '../assets/images/LI.png';
import kwietnikSO from '../assets/images/SO.png';
import girls from '../assets/images/girls.png';
import horses from '../assets/images/horses.png';

export const sectionDescriptions = [
  {
    id: 1,
    title: 'Portrety',
    content:
      'Zamów wyjątkowy portret. Może znaleźć się na nim człowiek lub Twój\n' +
      '    futrzasty ulubieniec. Zakup produkt na aukcji, następnie wyślij \n' +
      '    mi zdjęcie istoty do sportretowania :)',
    products: [
      {
        title: 'Portret akwarelą',
        content: 'Format 18x24cm',
        description: 'Czas wykonania do ustalenia, zwykle 3-10 dni roboczych.',
        image: lelo,
        onClickLink:
          'https://allegrolokalnie.pl/oferta/portret-na-zamowienie-akwarela',
      },
      {
        title: 'Portret ołówkiem',
        content: 'Czas wykonania do ustalenia, zwykle 3-10 dni roboczych.',
        description: 'Czas wykonania do ustalenia, zwykle 3-10 dni roboczych.',
        image: people,
        onClickLink:
          'https://allegrolokalnie.pl/oferta/portret-na-zamowienie-olowek',
      },
    ],
  },
  // {
  //   id: 2,
  //   title: 'Obrazy akwarelowe',
  //   content:
  //     'Wybierz coś dla siebie z istniejących sztuk lub zamów niestandardowy rysunek na zamówienie, bym mógł zrealizować Twój pomysł. Przed zakupem skonsultuj swój pomysł ze mną. Obrazki są wielkości 20x25cm.',
  //   products: [
  //     {
  //       title: 'Akwarele na zamówienie',
  //       content: '20x25cm',
  //       description: 'opis opis opis',
  //       image: productImage,
  //       onClickLink:
  //         'https://allegro.pl/oferta/portret-olowek-20x25cm-10981453078',
  //     },
  //     {
  //       title: 'Akwarele istniejące',
  //       content: '20x25cm',
  //       description: 'opis opis opis',
  //       image: productImage,
  //       onClickLink:
  //         'https://allegro.pl/oferta/portret-olowek-20x25cm-10981453078',
  //     },
  //   ],
  // },
  {
    id: 3,
    title: 'Akryle',
    content:
      'Zamów obraz malowany farbami akrylowymi. Wybierz coś dla siebie z istniejących sztuk, lub wybierz opcję obrazu na zamówienie.',
    products: [
      {
        title: 'Fiesta',
        content: 'format 100x80cm',
        description:
          'Obraz na płótnie. Inspiaracją do tego obrazu, były luksusowo ubrane dziewczynki, które zauważyłam podczas fiesty w Membrilli w Hiszpanii.',
        image: girls,
        onClickLink:
          'https://allegrolokalnie.pl/oferty/sukces/obraz-na-plotnie-100x80-akryl',
      },
      {
        title: 'Obraz na zamówienie',
        content: '120x120',
        description:
          'Kup jeden z pięciu obrazów, które namaluję specjalnie dla Ciebie. Przed zakupem skonsultuj swój pomysł ze mną. Czas wykonania do ustalenia.',
        image: horses,
        onClickLink:
          'https://allegrolokalnie.pl/oferta/obraz-na-zamowienie-120x120cm-akryl-na-plotnie',
      },
    ],
  },
  {
    id: 4,
    title: 'Kwietniki',
    content:
      'Wybierz kwietnik z limitowanej kolecji. Kazdy kwietnik jest zaprojektowany przeze mnie.',
    products: [
      {
        title: 'Kwietnik LI',
        content: 'Wymiary: 18x19x82cm',
        description:
          'Kwietnik jest z metalowego pręta o średnicy 6mm, pomalowanego proszkowo na kolor czarny.',
        image: kwietnikLI,
        onClickLink:
          'https://allegrolokalnie.pl/oferta/metalowy-kwietnik-dwie-ceramiczne-oslonki',
      },
      {
        title: 'Kwietnik SI',
        content: 'Wymiary: 18x19x61cm',
        description:
          'Kwietnik jest z metalowego pręta o średnicy 6mm, pomalowanego proszkowo na kolor czarny.',
        image: kwietnikSI,
        onClickLink:
          'https://allegrolokalnie.pl/oferta/metalowy-kwietnik-z-drabinka-ceramiczna-oslonka',
      },
      {
        title: 'Kwietnik SO',
        content: 'Wymiary: 18x55x41cm',
        description:
          'Kwietnik jest z metalowego pręta o średnicy 6mm, pomalowanego proszkowo na kolor czarny.',
        image: kwietnikSO,
        onClickLink:
          'https://allegrolokalnie.pl/oferta/metalowy-kwietnik-dwie-ceramiczne-oslonki-2bw',
      },
    ],
  },
];

// export const products = [
//   {
//     id: 'portrety',
//     portrety: [
//       {
//         id: 1,
//         title: 'Portret ołówek',
//         content: '20x25cm',
//         image: 'https://i.postimg.cc/3wJXZ3Qg/IMG-20210822-123426.jpg',
//         onClickLink:
//           'https://allegro.pl/oferta/portret-olowek-20x25cm-10981453078',
//       },
//       {
//         id: 2,
//         title: 'Akwarele',
//         content: '20x25cm',
//         image: 'https://i.postimg.cc/3wJXZ3Qg/IMG-20210822-123426.jpg',
//         onClickLink:
//           'https://allegro.pl/oferta/portret-olowek-20x25cm-10981453078',
//       },
//     ],
//   },
//   {
//     id: 'akwarele',
//     akwarele: [
//       {
//         id: 3,
//         title: 'Akwarele na zamówienie',
//         content: '20x25cm',
//         image: 'https://i.postimg.cc/3wJXZ3Qg/IMG-20210822-123426.jpg',
//         onClickLink:
//           'https://allegro.pl/oferta/portret-olowek-20x25cm-10981453078',
//       },
//       {
//         id: 4,
//         title: 'Akwarele istniejące',
//         content: '20x25cm',
//         image: 'https://i.postimg.cc/3wJXZ3Qg/IMG-20210822-123426.jpg',
//         onClickLink:
//           'https://allegro.pl/oferta/portret-olowek-20x25cm-10981453078',
//       },
//     ],
//   },
//   {
//     id: 'akryle',
//     akryle: [
//       {
//         id: 5,
//         title: 'Akryle istniejące',
//         content: '20x25cm',
//         image: 'https://i.postimg.cc/3wJXZ3Qg/IMG-20210822-123426.jpg',
//         onClickLink:
//           'https://allegro.pl/oferta/portret-olowek-20x25cm-10981453078',
//       },
//       {
//         id: 6,
//         title: 'Akryle na zamówienie',
//         content: '20x25cm',
//         image: 'https://i.postimg.cc/3wJXZ3Qg/IMG-20210822-123426.jpg',
//         onClickLink:
//           'https://allegro.pl/oferta/portret-olowek-20x25cm-10981453078',
//       },
//     ],
//   },
//   {
//     id: 'Kwietniki',
//     kwietniki: [
//       {
//         id: 7,
//         title: 'Kwietnik LI',
//         content: 'wymiary kwietnika to 20x29x25cm',
//         image: 'https://i.postimg.cc/3wJXZ3Qg/IMG-20210822-123426.jpg',
//         onClickLink:
//           'https://allegro.pl/oferta/portret-olowek-20x25cm-10981453078',
//       },
//       {
//         id: 8,
//         title: 'Kwietnik SI',
//         content: 'wymiary kwietnika to 20x29x25cm',
//         image: 'https://i.postimg.cc/3wJXZ3Qg/IMG-20210822-123426.jpg',
//         onClickLink:
//           'https://allegro.pl/oferta/portret-olowek-20x25cm-10981453078',
//       },
//       {
//         id: 8,
//         title: 'Kwietnik SI',
//         content: 'wymiary kwietnika to 20x29x25cm',
//         image: 'https://i.postimg.cc/3wJXZ3Qg/IMG-20210822-123426.jpg',
//         onClickLink:
//           'https://allegro.pl/oferta/portret-olowek-20x25cm-10981453078',
//       },
//     ],
//   },
// ];
//
// export const portrety = {
//   Akwarele: {},
//   Ołówek: {},
// };
//
// export const akwarele = {
//   ptaki: {},
//   konie: {},
//   akwareleZamowienie: {},
// };
//
// export const akryle = {
//   obrazKonie: {},
//   obrazGirls: {},
//   obrazZamownienie: {},
// };
