
import { electronika, texnika, kiyim, poyabzallar, aksessuarlar, gozzalik, salomatlik, 
uy, qurilish, avtotovarlar, bolalar, sport, xobbi, ovqat, maishiy, kanselyariya, hayvonlar, kitoblar, dacha} from "@/assets/images/categories";


import { truck, money, call, gift } from "@/assets/images/service";


const categories = [
	{   
        id: 1,
		name: 'Elektronika',
		image: electronika,
	},
	{
        id: 2,
		name: 'Maishiy texnika',
		image: texnika,
	},
    {
        id: 3,
		name: 'Kiyim',
		image: kiyim,
	},
    {
        id: 4,
		name: 'Poyabzallar',
		image: poyabzallar,
	},
    {
        id: 5,
		name: 'Aksessuarlar',
		image: aksessuarlar,
	},
    {
        id: 6,
		name: 'Go\'zzalik va parvarish',
		image: gozzalik,
	},
    {
        id: 7,
		name: 'Salomatlik',
		image: salomatlik,
	},
    {
        id: 8,
		name: 'Uy-ro\ʻzg\ʻor buyumlari',
		image: uy,
	},
    {
        id: 9,
		name: 'Qurilish va ta\ʼmirlash',
		image: qurilish,
	},
    {
        id: 10,
		name: 'Avtotovarlar',
		image: avtotovarlar,
	},
	{
        id: 11,
		name: 'Bolalar tovarlari',
		image: bolalar,
	},
	{
        id: 12,
		name: 'Xobbi va ijod',
		image: xobbi,
	},
	{
        id: 13,
		name: 'Sport va hordiq',
		image: sport,
	},
	{
        id: 14,
		name: 'Oziq-ovqat mahsulotlari',
		image: ovqat,
	},
	{
        id: 15,
		name: 'Maishiy kimyoviy moddalar',
		image: maishiy,
	},
	{
        id: 16,
		name: 'Kanselyariya tovarlari',
		image: kanselyariya,
	},
	{
        id: 17,
		name: 'Hayvonlar uchun tovarlar',
		image: hayvonlar,
	},
	{
        id: 18,
		name: 'Kitoblar',
		image: kitoblar,
	},
	{
        id: 19,
		name: 'Dacha, bog\ʻ va tomorqa',
		image: dacha,
	}
	
	
	
	
]



const service = [
	{   
        id: 1,
		img:   truck,
		name: 'Tezkor yetkazib berish xizmati',
		text: 'Buyurtmangiz O\'zbekistonning barcha viloyatlariga 3 kun ichida yetqazib beriladi.',
	},
	{   
        id: 2,
		img: money,
		name: 'To\'lov istalgan usulda',
		text: 'Buyurtmani oldindan click, payme yoki buyurtmani qo\'lingizga olganingizdan keyin amalga oshiring.',
	},
	{   
        id: 3,
		img: call,
		name: 'CALL-CENTER',
		text: 'Dam olish kunlarisiz qo\'llab quvvatlash bo\'limi mavjud. +998 55 500 55-11',
	},
	{   
        id: 4,
		img: gift,
		name: 'Mijozlarni rag\'batlantirish tizimi',
		text: 'Doimiy mijozlar uchun sovg\'alar va bonuslar taqdim etiladi.',
	}

]

export { categories, service };
