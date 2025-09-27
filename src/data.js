// Logo
import Logo from './img/Logo_image/Logo.png'
// Icons 
import Menu from '../src/img/Icon_image/menu.png'
import close from '../src/img/Icon_image/close.png'
import lefticon from '../src/img/Icon_image/left.png'
import searchicon from '../src/img/Icon_image/search.png'
import allicon from '../src/img/Icon_image/allicon.png'
import exitscreenicon from '../src/img/Icon_image/exitscreen.png'
import fullscreenicon from '../src/img/Icon_image/fullscreen.png'
import nexticon from '../src/img/Icon_image/next.png'
import prewicon from '../src/img/Icon_image/prew.png'
import usericon from '../src/img/Icon_image/user.png'
import cashicon from '../src/img/Icon_image/cash.png'
import promocodeicon from '../src/img/Icon_image/promocode.png'
import ransomhistoryicon from '../src/img/Icon_image/ransomhistory.png'
import deviseicon from '../src/img/Icon_image/device.png'

// Film

import Card1 from './img/Card_Image/Film/Card1.jpg'
import FilmCard2 from '../src/img/Card_Image/Film/Card2.jpeg'
import FilmCard3 from '../src/img/Card_Image/Film/Card3.jpg'
import FilmCard4 from '../src/img/Card_Image/Film/Card4.png'
import FilmCard5 from '../src/img/Card_Image/Film/Card5.png'
import FilmCard6 from '../src/img/Card_Image/Film/Card6.jpg'
import FilmCard7 from '../src/img/Card_Image/Film/Card7.jpg'
import FilmCard8 from '../src/img/Card_Image/Film/Card8.jpeg'
import FilmCard9 from '../src/img/Card_Image/Film/Card9.jpg'
import FilmCard10 from '../src/img/Card_Image/Film/Card10.jpg'
// import FilmCard11 from '../src/img/Card_Image/Film/Card11.jpeg'
// import FilmCard12 from '../src/img/Card_Image/Film/Card12.jpeg'


// Seriallar 
import SerialCard1 from '../src/img/Card_Image/Seriallar/Card1.jpeg'
import SerialCard2 from '../src/img/Card_Image/Seriallar/Card2.jpeg'
import SerialCard3 from '../src/img/Card_Image/Seriallar/Card3.jpg'
import SerialCard4 from '../src/img/Card_Image/Seriallar/Card4.jpeg'
import SerialCard5 from '../src/img/Card_Image/Seriallar/Card5.jpg'
import SerialCard6 from '../src/img/Card_Image/Seriallar/Card6.jpg'
import SerialCard7 from '../src/img/Card_Image/Seriallar/Card7.jpg'
import SerialCard8 from '../src/img/Card_Image/Seriallar/Card8.jpg'
import SerialCard9 from '../src/img/Card_Image/Seriallar/Card9.jpg'
import SerialCard10 from '../src/img/Card_Image/Seriallar/Card10.jpg'
// import SerialCard11 from '../src/img/Card_Image/Card11.jpeg'
// import SerialCard12 from '../src/img/Card_Image/Card12.jpeg'

// Animelar 
import AnimeCard1 from '../src/img/Card_Image/Animelar/Card1.jpg'
import AnimeCard2 from '../src/img/Card_Image/Animelar/Card2.jpg'
import AnimeCard3 from '../src/img/Card_Image/Animelar/Card3.jpeg'
import AnimeCard4 from '../src/img/Card_Image/Animelar/Card4.jpeg'
import AnimeCard5 from '../src/img/Card_Image/Animelar/Card5.jpg'
import AnimeCard6 from '../src/img/Card_Image/Animelar/Card6.jpg'
import AnimeCard7 from '../src/img/Card_Image/Animelar/Card7.jpg'
import AnimeCard8 from '../src/img/Card_Image/Animelar/Card8.jpg'
import AnimeCard9 from '../src/img/Card_Image/Animelar/Card9.jpg'
import AnimeCard10 from '../src/img/Card_Image/Animelar/Card10.jpg'
import AnimeCard11 from '../src/img/Card_Image/Animelar/Card11.jpeg'
import AnimeCard12 from '../src/img/Card_Image/Animelar/Card12.jpg'


// Multfilmlar 
import MultfilmCard1 from '../src/img/Card_Image/Multfilmlar/Card1.jpg'
import MultfilmCard2 from '../src/img/Card_Image/Multfilmlar/Card2.jpeg'
import MultfilmCard3 from '../src/img/Card_Image/Multfilmlar/Card3.jpeg'
import MultfilmCard4 from '../src/img/Card_Image/Multfilmlar/Card4.jpg'
import MultfilmCard5 from '../src/img/Card_Image/Multfilmlar/Card5.jpg'
import MultfilmCard6 from '../src/img/Card_Image/Multfilmlar/Card6.jpeg'
import MultfilmCard7 from '../src/img/Card_Image/Multfilmlar/Card7.jpg'
import MultfilmCard8 from '../src/img/Card_Image/Multfilmlar/Card8.jpg'
import MultfilmCard9 from '../src/img/Card_Image/Multfilmlar/Card9.jpeg'
import MultfilmCard10 from '../src/img/Card_Image/Multfilmlar/Card10.jpg'
import MultfilmCard11 from '../src/img/Card_Image/Multfilmlar/Card11.jpg'
import MultfilmCard12 from '../src/img/Card_Image/Multfilmlar/Card12.jpg'

//scenes from the movie
import rasm1 from '../src/img/Scanesfilm_Image/rasm1.png'
import rasm2 from '../src/img/Scanesfilm_Image/rasm2.png'
import rasm3 from '../src/img/Scanesfilm_Image/rasm3.png'
import rasm4 from '../src/img/Scanesfilm_Image/rasm4.png'
import rasm5 from '../src/img/Scanesfilm_Image/rasm5.png'

export const images = {
    Logo, Menu, close, lefticon, searchicon, allicon,exitscreenicon,fullscreenicon,nexticon,prewicon,usericon,cashicon,ransomhistoryicon,promocodeicon,deviseicon,
};

// Container 
export const data = {
    "Container": 'w-full max-w-7xl px-5 mx-auto'
}
// Id yaratish 
import { v4 as uuidv4 } from 'uuid';
const generateUniqueId = () => uuidv4();

console.log(generateUniqueId());

// Film list
export const FilmData = [
    {
        id: uuidv4(),
        card1: Card1,
        year: "13+",
        date: "2018",
        quality: "HD",
        title: "Avengers: Infinity War",
        desc: "Marvel qahramonlari Thanosga qarshi kurashadi. Butun koinot taqdiri xavf ostida.  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis reiciendis id officia pariatur voluptates, obcaecati exercitationem nemo, minus iusto deserunt necessitatibus eligendi recusandae rem itaque quos cupiditate. Hic, eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis reiciendis id officia pariatur voluptates, obcaecati exercitationem nemo, minus iusto deserunt necessitatibus eligendi recusandae rem itaque quos cupiditate. Hic, eaque.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],
    },
    {
        id: uuidv4(),
        card1: FilmCard2,
        year: "13+",
        date: "2019",
        quality: "Full HD",
        title: "Avengers: Endgame",
        desc: "Qahramonlar Thanosni to‘xtatish uchun vaqtga sayohat qilishadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: FilmCard3,
        year: "16+",
        date: "2017",
        quality: "HD",
        title: "Spider-Man: Homecoming",
        desc: "Peter Parker Iron Man yordamida qahramonlikka qadam qo‘yadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: FilmCard4,
        year: "16+",
        date: "2016",
        quality: "Full HD",
        title: "Captain America: Civil War",
        desc: "Avengers ikki guruhga bo‘linib, bir-biriga qarshi kurashadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: FilmCard5,
        year: "13+",
        date: "2013",
        quality: "HD",
        title: "Iron Man 3",
        desc: "Tony Stark yangi dushman – Mandarin bilan to‘qnashadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: FilmCard6,
        year: "13+",
        date: "2011",
        quality: "Full HD",
        title: "Thor",
        desc: "Asgard shahzodasi Thor Yerga quvib yuboriladi va insoniyatni himoya qilishni o‘rganadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: FilmCard7,
        year: "13+",
        date: "2012",
        quality: "HD",
        title: "The Avengers",
        desc: "Marvel qahramonlari birlashib, Lokini va uning armiyasini to‘xtatishadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: FilmCard8,
        year: "13+",
        date: "2015",
        quality: "Full HD",
        title: "Avengers: Age of Ultron",
        desc: "Qahramonlar Ultron nomli sun’iy intellekt bilan jang qilishadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: FilmCard9,
        year: "13+",
        date: "2014",
        quality: "HD",
        title: "Guardians of the Galaxy",
        desc: "Galaktika qo‘riqchilari koinotni saqlash uchun birlashishadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: FilmCard10,
        year: "13+",
        date: "2021",
        quality: "Full HD",
        title: "Spider-Man: No Way Home",
        desc: "Peter Parker multiverse bilan yuzlashib, eski dushmanlariga qarshi chiqadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
]

// Serial list
export const SerialData = [
    {
        id: uuidv4(),
        card1: SerialCard1,
        year: "18+",
        date: "2020",
        quality: "Full HD",
        title: "Qasoskorlar 2",
        desc: "Super qahramonlar jamoasi yangi xavfga qarshi kurashadi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis reiciendis id officia pariatur voluptates, obcaecati exercitationem nemo, minus iusto deserunt necessitatibus eligendi recusandae rem itaque quos cupiditate. Hic, eaque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere facilis reiciendis id officia pariatur voluptates, obcaecati exercitationem nemo, minus iusto deserunt necessitatibus eligendi recusandae rem itaque quos cupiditate. Hic, eaque.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: SerialCard2,
        year: "16+",
        date: "2021",
        quality: "HD",
        title: "Qasoskorlar 3",
        desc: "Yer yuzini qutqarish uchun jang davom etadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: SerialCard3,
        year: "13+",
        date: "2019",
        quality: "4K",
        title: "Qasoskorlar 4",
        desc: "Oxirgi jang – barcha qahramonlar taqdiri hal bo‘ladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: SerialCard4,
        year: "18+",
        date: "2018",
        quality: "HD",
        title: "Temir odam",
        desc: "Stark Industries egasi o‘zini super qahramon sifatida namoyon etadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: SerialCard5,
        year: "13+",
        date: "2022",
        quality: "Full HD",
        title: "O‘rgimchak odam",
        desc: "Peter Parker ikki xil hayot – oddiy talaba va qahramon sifatida yashaydi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: SerialCard6,
        year: "16+",
        date: "2017",
        quality: "HD",
        title: "Tor: Yomg‘ir xudosi",
        desc: "Asgard taqdirini saqlab qolish uchun Thor kurashadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: SerialCard7,
        year: "18+",
        date: "2016",
        quality: "4K",
        title: "Qora Pantera",
        desc: "Vakanada qirol T’Challa xalqini himoya qiladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: SerialCard8,
        year: "13+",
        date: "2015",
        quality: "HD",
        title: "Ant-Man",
        desc: "Kichrayish texnologiyasi bilan qurollangan yangi qahramon.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: SerialCard9,
        year: "16+",
        date: "2023",
        quality: "Full HD",
        title: "Doktor Strange",
        desc: "Sehrgar olamlarni qutqarish uchun o‘z kuchidan foydalanadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: SerialCard10,
        year: "18+",
        date: "2024",
        quality: "4K",
        title: "Marvels",
        desc: "Qahramonlarning yangi ittifoqi paydo bo‘ladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
]

// Anime list
export const AnimeData = [
    {
        id: uuidv4(),
        card1: AnimeCard1,
        year: "13+",
        date: "2017",
        quality: "HD",
        title: "Naruto Shippuden",
        desc: "Ninjalar dunyosida Naruto eng kuchli bo‘lishni orzu qiladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: AnimeCard2,
        year: "16+",
        date: "2019",
        quality: "Full HD",
        title: "One Piece",
        desc: "Luffy va uning jamoasi afsonaviy xazina – One Piece’ni qidirmoqda.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: AnimeCard3,
        year: "18+",
        date: "2020",
        quality: "4K",
        title: "Attack on Titan",
        desc: "Insoniyat ulkan devorlar ortida titanga qarshi omon qolishga harakat qiladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: AnimeCard4,
        year: "13+",
        date: "2018",
        quality: "HD",
        title: "Dragon Ball Super",
        desc: "Goku va do‘stlari yangi dushmanlarga qarshi kurashadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: AnimeCard5,
        year: "16+",
        date: "2021",
        quality: "Full HD",
        title: "Demon Slayer",
        desc: "Kamado Tanjiro oilasini qutqarish uchun jin ovchisiga aylanadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: AnimeCard6,
        year: "13+",
        date: "2022",
        quality: "4K",
        title: "Jujutsu Kaisen",
        desc: "Sehrli kuchlarga ega o‘quvchilar yovuz ruhlarga qarshi jang qiladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: AnimeCard7,
        year: "18+",
        date: "2015",
        quality: "HD",
        title: "Tokyo Ghoul",
        desc: "Yarim-ghoul yigit insoniyat va ghoul’lar orasida yashaydi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: AnimeCard8,
        year: "16+",
        date: "2016",
        quality: "Full HD",
        title: "Death Note",
        desc: "Maxfiy daftar yordamida odam taqdirini o‘zgartirish mumkin.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: AnimeCard9,
        year: "13+",
        date: "2014",
        quality: "HD",
        title: "Fairy Tail",
        desc: "Sehrgarlar gildiyasi sarguzashtlarga sho‘ng‘iydi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: AnimeCard10,
        year: "18+",
        date: "2013",
        quality: "Full HD",
        title: "Bleach",
        desc: "Ichigo Kurosaki o‘zining ruhiy kuchlarini kashf qiladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: AnimeCard11,
        year: "16+",
        date: "2012",
        quality: "HD",
        title: "Fullmetal Alchemist",
        desc: "Ikki aka-uka alkimyo orqali yo‘qotgan narsasini qaytarishga harakat qiladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: AnimeCard12,
        year: "13+",
        date: "2011",
        quality: "Full HD",
        title: "Hunter x Hunter",
        desc: "Gon ismli bola otasini topish uchun Hunter bo‘lishga intiladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
]

// Multfilm list
export const MultfilmData = [
    {
        id: uuidv4(),
        card1: MultfilmCard1,
        year: "0+",
        date: "2015",
        quality: "HD",
        title: "Kung Fu Panda",
        desc: "Po ismli panda kung-fu ustasiga aylanishni orzu qiladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: MultfilmCard2,
        year: "0+",
        date: "2019",
        quality: "Full HD",
        title: "Frozen 2",
        desc: "Anna va Elza sehrli o‘rmon sirlarini ochish uchun sarguzashtga otlanadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: MultfilmCard3,
        year: "6+",
        date: "2021",
        quality: "4K",
        title: "Encanto",
        desc: "Sehrli oilaning a’zosi Mirabel o‘z kuchini izlaydi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: MultfilmCard4,
        year: "0+",
        date: "2018",
        quality: "HD",
        title: "Coco",
        desc: "Migel musiqaga bo‘lgan sevgisi sabab ajdodlar dunyosiga tushib qoladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: MultfilmCard5,
        year: "0+",
        date: "2022",
        quality: "Full HD",
        title: "Turning Red",
        desc: "O‘smir qiz his-tuyg‘ularini yashira olmay, ulkan panda ayiqchaga aylanib qoladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: MultfilmCard6,
        year: "6+",
        date: "2017",
        quality: "HD",
        title: "Moana",
        desc: "Moana dengiz orqali xalqini qutqarishga otlanadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: MultfilmCard7,
        year: "0+",
        date: "2016",
        quality: "Full HD",
        title: "Zootopia",
        desc: "Quyon politsiyachi va tulki shahar sirlarini ochadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: MultfilmCard8,
        year: "6+",
        date: "2014",
        quality: "HD",
        title: "Big Hero 6",
        desc: "Hiro va Baymax shaharni himoya qiladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: MultfilmCard9,
        year: "0+",
        date: "2013",
        quality: "Full HD",
        title: "Despicable Me 2",
        desc: "Gru va minionlar yangi dushmanga qarshi kurashadi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: MultfilmCard10,
        year: "0+",
        date: "2012",
        quality: "HD",
        title: "Brave",
        desc: "Merida o‘z taqdirini o‘zi belgilashga qaror qiladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: MultfilmCard11,
        year: "0+",
        date: "2011",
        quality: "Full HD",
        title: "Rio",
        desc: "Qafasdagi qush Blu Braziliyada sarguzashtlarga sho‘ng‘iydi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
    {
        id: uuidv4(),
        card1: MultfilmCard12,
        year: "6+",
        date: "2010",
        quality: "HD",
        title: "Toy Story 3",
        desc: "O‘yinchoqlar yangi egasi qo‘liga tushib qoladi.",
        click: "Obuna",
        buy: "Sotib olish",
        scanes: [rasm1, rasm2, rasm3, rasm4, rasm5],

    },
]



