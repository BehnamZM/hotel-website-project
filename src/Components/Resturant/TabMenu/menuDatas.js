const menuDatas = [
  {
    name: 'سوسیس تخم مرغ',
    price: '30',
    category: ' صبحانه ',
    material: 'سوسیس 90%گوشت گوساله،تخم مرغ',
    id: 1
  },
  {
    name: 'املت ایتالیایی',
    price: '75', category: ' صبحانه ',
    material: 'سینه مرغ، قارچ، سیب زمینی،تخم مرغ',
    id: 2
  },
  {
    name: 'پنکیک',
    price: '30',
    category: ' صبحانه ',
    material: 'شیر، سرکه ،پودروانیل ،تخم مرغ،عسل',
    id: 3
  },
  {
    name: 'کله پاچه',
    price: '80',
    category: ' صبحانه ',
    material: 'کله پاچه ،ادویه مخصوص، نخود',
    id: 4
  },
  {
    name: ' صبحانه  ساده',
    price: '25 ',
    category: ' صبحانه ',
    material: 'مربا، پنیر، نان تازه،کره',
    id: 5
  },

  {
    name: 'حلیم',
    price: '40',
    category: ' صبحانه ',
    material: 'گندم، گوشت راسته گوساله',
    id: 6
  },
  {
    name: 'سوپ ورمیشل',
    price: '40',
    category: 'پیش غذا',
    material: 'سینه مرغ رشته ورمیشل،انواع سبزی ها',
    id: 7
  },
  {
    name: 'کشک بادمجان',
    price: '45',
    category: 'پیش غذا',
    material: 'بادمجان تنوری،کشک',
    id: 8
  },
  {
    name: 'سیب زمینی تنوری',
    price: '30',
    category: 'پیش غذا',
    material: 'سیب زمینی ،سس مخصوص، روغن زیتون، پنیر پارمیزان ',
    id: 9
  },
  {
    name: 'پنیر سوخاری',
    price: '45',
    category: 'پیش غذا',
    material: 'پنیرخامه های، پنیرموزارلا، پودرسوخاری، انواع سبزیها',
    id: 10
  },
  {
    name: 'آب دوغ خیار',
    price: '30',
    category: 'پیش غذا',
    material: 'آب ،دوغ ، خیار ، کشمش ،گردو',
    id: 11
  },
  {
    name: 'آش رشته',
    price: '40',
    category: 'پیش غذا',
    material: 'حبوبات، رشته آش، سبزی، پیازداغ',
    id: 12
  },
  {
    name: 'سالادشیرازی',
    price: '20',
    category: 'سالاد',
    material: 'خیار، گوجه، پیاز',
    id: 13
  },
  {
    name: 'سالاداندونزی',
    price: '40',
    category: 'سالاد',
    material: 'گوشت، کاهو، سس',
    id: 14
  },
  {
    name: 'سزار',
    price: '45',
    category: 'سالاد',
    material: 'سیر خردشده و ماهی آنچوی، آب لیمو، سس وسترشر، کاهو',
    id: 15
  },
  {
    name: 'سالادماکارونی',
    price: '45',
    category: 'سالاد',
    material: ' خامه‌ی ترش، خردل خشک، شکر، سرکه سیب، نمک و فلفل، ماکارونی، مایونز',
    id: 16
  },
  {
    name: 'سالاد ماهی تن',
    price: '45',
    category: 'سالاد',
    material: 'لوبیای سفید، کبر، ترشی قارچ، کرفس و زیتون، ماهی تن',
    id: 17
  },
  {
    name: 'سالادسبزیجات',
    price: '40',
    category: 'سالاد',
    material: ' کرفس، ریحان، پیاز کوهی، قارچ و کاهو',
    id: 18
  },
  {
    name: 'ژله مخصوص',
    price: '35',
    category: 'دسر',
    material: 'ژله، انواع میوه ها',
    id: 19
  },
  {
    name: 'چیزکیک',
    price: '30',
    category: 'دسر',
    material: 'خامه صبحانه، پنیرخامه ای، کیک صبحانه',
    id: 20
  },
  {
    name: 'پاناکوتا',
    price: '30',
    category: 'دسر',
    material: 'خامه، وانیل، پودرژلاتین',
    id: 21
  },
  {
    name: 'تیرامیسو',
    price: '35',
    category: 'دسر',
    material: 'پنیر ماسکارپونه، بیسکوئیت لیدی فینگر یا پتی بور، قهوه',
    id: 22
  },
  {
    name: 'کیک بستنی',
    price: '30',
    category: 'دسر',
    material: 'کیک صبحانه، بستنی وانیلی',
    id: 23
  },
  {
    name: 'وافل',
    price: '35',
    category: 'دسر',
    material: 'آرد، بیکینگ پودر،وانیل، کره',
    id: 24
  },
  {
    name: 'چای',
    price: '15',
    category: 'نوشیدنی ',
    material: 'چای، نبات',
    id: 25
  },
  {
    name: ' قهوه ترک',
    price: '35',
    category: 'نوشیدنی ',
    material: 'قهوه، شکلات',
    id: 26
  },
  {
    name: 'دوغ طبیعی',
    price: '20',
    category: 'نوشیدنی ',
    material: 'دوغ طبیعی، سبزی های معطر',
    id: 27
  },
  {
    name: 'نوشابه',
    price: '10',
    category: 'نوشیدنی ',
    material: 'قوطی',
    id: 28
  },
  {
    name: 'آبمیوه طبیعی',
    price: '35',
    category: 'نوشیدنی ',
    material: 'آب میوه های فصلی',
    id: 29
  },
  {
    name: 'کاپوچینو',
    price: '35',
    category: 'نوشیدنی ',
    material: 'اسپرسو، شیر',
    id: 30
  },
  {
    name: 'جوجه کباب',
    price: '75',
    category: 'غذای اصلی',
    material: 'سینه مرغ، برنج',
    id: 31
  },
  {
    name: 'چلو کباب کوبیده',
    price: '95',
    category: 'غذای اصلی',
    material: '300گرم گوشت گوساله، برنج',
    id: 32
  },
  {
    name: 'همبرگر تنوری',
    price: '75',
    category: 'غذای اصلی',
    material: '200گرم گوشت تازه گوساله',
    id: 33
  },
  {
    name: 'پیتزامخصوص',
    price: '85',
    category: 'غذای اصلی',
    material: 'ژامبون گوشت، ژامبون مرغ، زیتون',
    id: 34
  },
  {
    name: 'کباب برگ گوسفندی',
    price: '105',
    category: 'غذای اصلی',
    material: 'گوشت ران گوسفند، برنج',
    id: 35
  },
  {
    name: 'قورمه سبزی',
    price: '65',
    category: 'غذای اصلی',
    material: 'گوشت تازه گوسفندی، برنج',
    id: 36
  },
]


export default menuDatas