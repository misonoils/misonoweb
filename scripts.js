const HOSPITALS = [
  {
    name: { en: "Kakamigahara City Hospital", ja: "各務原市民病院" },
    specialty: { en: "General / Emergency", ja: "総合／救急" },
    address: "〒504-0861岐阜県各務原市東山1丁目60 ",
    phone: "058-389-2228",
    email: "",
    hours: {
      ja: [
        "月～金 9:00～12:00, 13:00～17:00",
        "土 9:00～12:30",
        "日・祝 休診"
      ],
      en: [
        "Mon-Fri 9:00–12:00, 13:00–17:00",
        "Sat 9:00–12:30",
        "Sun/Public Holiday Closed"
      ]
    },
    openHours: {
  mon: [
    { start: "09:00", end: "12:00" },
    { start: "13:00", end: "17:00" }
  ],
  tue: [
    { start: "09:00", end: "12:00" },
    { start: "13:00", end: "17:00" }
  ],
  wed: [
    { start: "09:00", end: "12:00" },
    { start: "13:00", end: "17:00" }
  ],
  thu: [
    { start: "09:00", end: "12:00" },
    { start: "13:00", end: "17:00" }
  ],
  fri: [
    { start: "09:00", end: "12:00" },
    { start: "13:00", end: "17:00" }
  ],
  sat: [
    { start: "09:00", end: "12:30" }
  ],
  sun: [
    // closed
  ]
},
    insurance: true,
    insurancePlans: { en: ["National Health"], ja: ["国民健康保険"] },
    services: [
  { en: "General Medicine", ja: "総合診療" },
  { en: "Emergency", ja: "救急" },
  { en: "Surgery", ja: "外科" },
  { en: "Bone and Joint Care", ja: "整形外科" },
  { en: "Children's Health", ja: "小児科" }
],
    languages: ["Japanese","English"],
    location: { lat: 35.410667, lng: 136.860194 },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43413.70262150176!2d136.8090182216797!3d35.4313159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003063f823cf101%3A0x2b52ae59e415ab56!2sKagamihara%20Hospital!5e1!3m2!1sen!2sjp!4v1751871869143!5m2!1sen!2sjp"
  },
  {
    name: { en: "Tokai Central Hospital", ja: "東海中央病院" },
    specialty: { en: "General / Surgery", ja: "総合／外科" },
    address: "〒504-0816 岐阜県各務原市曽原東島町4丁目6-2",
    phone: "058-382-3101",
    email: "",
    hours: {
      ja: [
        "月～金 8:30～17:15",
        "土・日・祝 休診"
      ],
      en: [
        "Mon-Fri 8:30–17:15",
        "Sat/Sun/Public Holiday Closed"
      ]
    },
    openHours: {
  mon: [
    { start: "08:30", end: "17:15" }
  ],
  tue: [
    { start: "08:30", end: "17:15" }
  ],
  wed: [
    { start: "08:30", end: "17:15" }
  ],
  thu: [
    { start: "08:30", end: "17:15" }
  ],
  fri: [
    { start: "08:30", end: "17:15" }
  ],
  sat: [
    // closed
  ],
  sun: [
    // closed
  ],
  holiday: [
    // closed
  ]
},
    insurance: true,
    insurancePlans: { en: ["National Health"], ja: ["国民健康保険"] },
    services: [
  { en: "General Health Check", ja: "内科" },
  { en: "Surgery", ja: "外科" },
  { en: "Children's Health", ja: "小児科" },
  { en: "Bone and Joint Care", ja: "整形外科" },
  { en: "Eye, Ear, Nose, and Throat", ja: "眼科・耳鼻咽喉科" },
  { en: "Emergency (Always Open)", ja: "救急（24時間対応）" }
],
    languages: ["Japanese"],
    location: { lat: 35.41011, lng: 136.86266 },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5428.1550409425245!2d136.87245307488166!3d35.409908544832405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003089da5451b7b%3A0x44427558f731dedf!2sT%C5%8Dkai%20Central%20Hospital!5e1!3m2!1sen!2sjp!4v1751872019839!5m2!1sen!2sjp"
  },
  {
    name: { en: "Kidaiin Family Clinic", ja: "木田医院ファミリークリニック" },
    specialty: { en: "Internal", ja: "内科" },
    address: "〒504-0829岐阜県各務原市蘇原希望町1丁目7-1",
    phone: "058-383-5010",
    email: "",
    hours: {
      ja: [
        "月～火 8:40～12:00, 16:00～19:00",
        "水 8:40～12:00",
        "木～金 8:40～12:00, 16:00～19:00",
        "土 8:40～12:00",
        "日・祝 休診"
      ],
      en: [
        "Mon-Tue 8:40–12:00, 16:00–19:00",
        "Wed 8:40–12:00",
        "Thu-Fri 8:40–12:00, 16:00–19:00",
        "Sat 8:40–12:00",
        "Sun/Public Holiday Closed"
      ]
    },
    openHours: {
  mon: [
    { start: "08:40", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  tue: [
    { start: "08:40", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  wed: [
    { start: "08:40", end: "12:00" }
  ],
  thu: [
    { start: "08:40", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  fri: [
    { start: "08:40", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  sat: [
    { start: "08:40", end: "12:00" }
  ],
  sun: [
    // closed
  ],
  holiday: [
    // closed
  ]
},
    insurance: true,
    insurancePlans: { en: ["National Health"], ja: ["国民健康保険"] },
    services: [
       { en: "General Health Check", ja: "内科" },
       { en: "Children's Care", ja: "小児科" },
       { en: "Comfort Care for Serious Illness", ja: "緩和ケア内科" },
       { en: "Home Visits (24/7)", ja: "訪問診療（24時間対応）" },
       { en: "Vaccinations", ja: "予防接種" },
       { en: "Emergency Support", ja: "急な体調不良サポート" }
    ],
    languages: ["Japanese"],
    location: { lat: 35.3781, lng: 136.8653 },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5428.648230870844!2d136.85203707488122!3d35.40258534523217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600307d8028c5677%3A0x89e7ae6dc0d81007!2sKidaiin%20Family%20Clinic!5e1!3m2!1sen!2sjp!4v1751872602509!5m2!1sen!2sjp"
  },
  {
    name: { en: "Sakuraichoka Gastroenterology", ja: "さくら胃腸科内科クリニック" },
    specialty: { en: "Internal", ja: "内科" },
    address: "〒504-0907岐阜県各務原市那加住吉町1丁目48-1 ",
    phone: "058-380-5150",
    email: "",
    hours: {
      ja: [
        "月～水 9～12:00, 16:00～19:00",
        "金 9～12:00, 16:00～19:00",
        "土 9:00～13:00",
        "日・木・祝 休診"
      ],
      en: [
        "Mon/Tue/Wed 9:00–12:00, 16:00–19:00",
        "Fri 9:00–12:00, 16:00-19:00",
        "Sat 9:00-13:00",
        "Sun/Thu/Public Holiday Closed"
      ]
    },
    openHours: {
  mon: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  tue: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  wed: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  thu: [
    // closed
  ],
  fri: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  sat: [
    { start: "09:00", end: "13:00" }
  ],
  sun: [
    // closed
  ],
  holiday: [
    // closed
  ]
},
    insurance: true,
    insurancePlans: { en: ["National Health"], ja: ["国民健康保険"] },
    services: [
  { en: "General Health Check", ja: "内科" },
  { en: "Stomach and Digestive Care", ja: "消化器内科／胃腸科" },
  { en: "Endoscopy (Stomach & Colon Scan)", ja: "胃カメラ・大腸カメラ" },
  { en: "Ultrasound and CT Tests", ja: "エコー・CT 検査" },
  { en: "Cashless Payment & e‑Prescriptions", ja: "キャッシュレス決済・電子処方箋" },
  { en: "Wheelchair Friendly Facility", ja: "バリアフリー施設" }
],
    languages: ["Japanese"],
    location: { lat: 35.399, lng: 136.859 },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5428.969626700905!2d136.846895374881!3d35.39781234549252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60030875d7d3aa6d%3A0x285d6a1bed69b62b!2sSakuraichoka%20Gastroenterology!5e1!3m2!1sen!2sjp!4v1751873310734!5m2!1sen!2sjp"
  },
  {
    name: { en: "Sarasara Clinic", ja: "さらさらクリニック" },
    specialty: { en: "Internal ", ja: "内科" },
    address: "〒504-0905 岐阜県各務原市蘇原六軒町４丁目46−１１−４",
    phone: "058-3826-277",
    email: "",
    hours: {
      ja: [
        "月火木金 9:00～12:00, 13:00～15:00,15:30～18:30",
        "土・水 9:00～12:00",
        "日・祝 休診"
      ],
      en: [
        "Mon/Tue/Thu/Fri 9:00–12:00, 13:00-15:00, 15:30–18:30",
        "Sat/Wed 9:00–12:00",
        "Sun/Public Holiday Closed"
      ]
    },
    openHours: {
  mon: [
    { start: "09:00", end: "12:00" },
    { start: "13:00", end: "15:00" },
    { start: "15:30", end: "18:30" }
  ],
  tue: [
    { start: "09:00", end: "12:00" },
    { start: "13:00", end: "15:00" },
    { start: "15:30", end: "18:30" }
  ],
  wed: [
    { start: "09:00", end: "12:00" }
  ],
  thu: [
    { start: "09:00", end: "12:00" },
    { start: "13:00", end: "15:00" },
    { start: "15:30", end: "18:30" }
  ],
  fri: [
    { start: "09:00", end: "12:00" },
    { start: "13:00", end: "15:00" },
    { start: "15:30", end: "18:30" }
  ],
  sat: [
    { start: "09:00", end: "12:00" }
  ],
  sun: [
    // closed
  ],
  holiday: [
    // closed
  ]
},
    insurance: true,
    insurancePlans: { en: ["National Health"], ja: ["国民健康保険"] },
    services: [
  { en: "General Medicine", ja: "内科" },
  { en: "Children’s Health", ja: "小児科" },
  { en: "Eye Care", ja: "眼科" },
  { en: "Allergy Care", ja: "アレルギー科" },
  { en: "Children’s Heart Check", ja: "小児循環器内科" },
  { en: "Vaccinations & Baby Checkups", ja: "予防接種・乳児健診" }
],
    languages: ["Japanese"],
    location: { lat: 35.40896, lng: 136.85775 },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2282.5741237084176!2d136.8537136112696!3d35.39874576261064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600308796e819cfb%3A0xfea3e1169d30680a!2sSarasara%20Clinic!5e1!3m2!1sen!2sjp!4v1751874525737!5m2!1sen!2sjp"
  },
  {
    name: { en: "Sarasara Clinic", ja: "さらさらクリニック" },
    specialty: { en: "Gastroenterology", ja: "消化器科" },
    address: "〒504-0905 岐阜県各務原市蘇原六軒町４丁目46−１１−４",
    phone: "058-3826-277",
    email: "",
    hours: {
      ja: [
        "月火木金 9:00～12:00, 13:00～15:00,15:30～18:30",
        "土・水 9:00～12:00",
        "日・祝 休診"
      ],
      en: [
        "Mon/Tue/Thu/Fri 9:00–12:00, 13:00-15:00, 15:30–18:30",
        "Sat/Wed 9:00–12:00",
        "Sun/Public Holiday Closed"
      ]
    },
    openHours: {
  mon: [
    { start: "09:00", end: "12:00" },
    { start: "13:00", end: "15:00" },
    { start: "15:30", end: "18:30" }
  ],
  tue: [
    { start: "09:00", end: "12:00" },
    { start: "13:00", end: "15:00" },
    { start: "15:30", end: "18:30" }
  ],
  wed: [
    { start: "09:00", end: "12:00" }
  ],
  thu: [
    { start: "09:00", end: "12:00" },
    { start: "13:00", end: "15:00" },
    { start: "15:30", end: "18:30" }
  ],
  fri: [
    { start: "09:00", end: "12:00" },
    { start: "13:00", end: "15:00" },
    { start: "15:30", end: "18:30" }
  ],
  sat: [
    { start: "09:00", end: "12:00" }
  ],
  sun: [
    // closed
  ],
  holiday: [
    // closed
  ]
},
    insurance: true,
    insurancePlans: { en: ["National Health"], ja: ["国民健康保険"] },
    services: [
  { en: "General Medicine", ja: "内科" },
  { en: "Children’s Health", ja: "小児科" },
  { en: "Eye Care", ja: "眼科" },
  { en: "Allergy Care", ja: "アレルギー科" },
  { en: "Children’s Heart Check", ja: "小児循環器内科" },
  { en: "Vaccinations & Baby Checkups", ja: "予防接種・乳児健診" }
],
    languages: ["Japanese"],
    location: { lat: 35.40896, lng: 136.85775 },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2282.5741237084176!2d136.8537136112696!3d35.39874576261064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600308796e819cfb%3A0xfea3e1169d30680a!2sSarasara%20Clinic!5e1!3m2!1sen!2sjp!4v1751874525737!5m2!1sen!2sjp"
  },
  {
    name: { en: "Nishino Clinic", ja: "西野クリニック" },
    specialty: { en: "Internal", ja: "内科" },
    address: "〒504-0941 岐阜県各務原市三井町１丁目５５−２",
    phone: "058-3710-500",
    email: "",
    hours: {
      ja: [
        "月~水 9:00～12:00, 16:00～19:00",
        "木 9:00～12:00",
        "金 9:00～12:00, 16:00～19:00",
        "土 9:00～12:00, 16:00～17:00",
        "日・祝 休診"
      ],
      en: [
        "Mon-Wed 9:00–12:00, 16:00–19:00",
        "Thu 9:00-12:00",
        "Fri 9:00–12:00, 16:00–19:00",
        "Sat 9:00–12:00, 16:00–17:00",
        "Sun/Public Holiday Closed"
      ]
    },
    openHours: {
  mon: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  tue: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  wed: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  thu: [
    { start: "09:00", end: "12:00" }
  ],
  fri: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  sat: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "17:00" }
  ],
  sun: [
    // closed
  ],
  holiday: [
    // closed
  ]
},
    insurance: true,
    insurancePlans: { en: ["National Health"], ja: ["国民健康保険"] },
    services: [
  { en: "Urology (Men, Women, Kids)", ja: "泌尿器科（男性・女性・小児）" },
  { en: "Skin Care", ja: "皮膚科" },
  { en: "Beauty Skin Care (Laser, Facials)", ja: "美容皮膚科（レーザー・フェイシャル）" },
  { en: "Overactive Bladder & Incontinence", ja: "過活動膀胱・尿失禁" },
  { en: "Prostate & Bladder Cancer Screening", ja: "前立腺・膀胱がん検診" },
  { en: "Emergency Birth Control (P‑pill)", ja: "緊急避妊薬（アフターピル）" }
],
    languages: ["Japanese"],
    location: { lat: 35.4019, lng: 136.8663 },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.5950204346536!2d136.82935737536758!3d35.394538685310046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600307fd2317bf77%3A0xfe274c8dc327816d!2sNishino%20Clinic!5e1!3m2!1sen!2sjp!4v1751875495877!5m2!1sen!2sjp"
  },
  {
    name: { en: "Somiya Orthopedic Surgical Clinic", ja: "宗宮整形外科" },
    specialty: { en: "Orthopedics", ja: "整形外科" },
    address: "〒504-0838 岐阜県各務原市那加不動丘１丁目２８−１",
    phone: "058-382-9699",
    email: "",
    hours: {
      ja: [
        "月~水 9:00～12:00, 16:00～19:00",
        "木 9:00～12:00",
        "金 9:00～12:00, 16:00～19:00",
        "土 9:00～12:00",
        "日・祝 休診"
      ],
      en: [
        "Mon-Wed 9:00–12:00, 16:00–19:00",
        "Thu 9:00-12:00",
        "Fri 9:00–12:00, 16:00–19:00",
        "Sat 9:00–12:00",
        "Sun/Public Holiday Closed"
      ]
    },
    openHours: {
  mon: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  tue: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  wed: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  thu: [
    { start: "09:00", end: "12:00" }
  ],
  fri: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  sat: [
    { start: "09:00", end: "12:00" }
  ],
  sun: [
    // closed
  ],
  holiday: [
    // closed
  ]
},
    insurance: true,
    insurancePlans: { en: ["National Health"], ja: ["国民健康保険"] },
   services: [
  { en: "Bone and Joint Care", ja: "整形外科" },
  { en: "Rheumatism Care", ja: "リウマチ科" },
  { en: "Rehabilitation", ja: "リハビリテーション科" },
  { en: "X‑ray Exams", ja: "放射線科（X線検査）" },
  { en: "Home Visit Care", ja: "訪問診療" },
  { en: "Saturday Morning Clinic", ja: "土曜午前診療" }
],
    languages: ["Japanese"],
    location: { lat: 35.4019, lng: 136.8663 },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.147682921742!2d136.84434367488146!3d35.40782504494611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003070cca9345ff%3A0xc045a7bc4ad446d1!2sSomiya%20Orthopedic%20Surgical%20Clinic!5e1!3m2!1sen!2sjp!4v1751954326372!5m2!1sen!2sjp"
  },
  {
    name: { en: "Kawada Orthopedic Surgical Clinic", ja: "かわだ整形外科" },
    specialty: { en: "Orthopedics", ja: "整形外科" },
    address: "〒504-0941 岐阜県各務原市三井町１丁目７４",
    phone: "058-383-0041",
    email: "",
    hours: {
      ja: [
        "月~水 9:00～12:00, 16:00～19:00",
        "木 9:00～12:00",
        "金 9:00～12:00, 16:00～19:00",
        "土 9:00～12:00",
        "日・祝 休診"
      ],
      en: [
        "Mon-Wed 9:00–12:00, 16:00–19:00",
        "Thu 9:00-12:00",
        "Fri 9:00–12:00, 16:00–19:00",
        "Sat 9:00–12:00",
        "Sun/Public Holiday Closed"
      ]
    },
    openHours: {
  mon: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  tue: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  wed: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  thu: [
    { start: "09:00", end: "12:00" }
  ],
  fri: [
    { start: "09:00", end: "12:00" },
    { start: "16:00", end: "19:00" }
  ],
  sat: [
    { start: "09:00", end: "12:00" }
  ],
  sun: [
    // closed
  ],
  holiday: [
    // closed
  ]
},
    insurance: true,
    insurancePlans: { en: ["National Health"], ja: ["国民健康保険"] },
    services: [
  { en: "Bone and Joint Care", ja: "整形外科" },
  { en: "Joint Pain and Rheumatism", ja: "リウマチ科" },
  { en: "Rehabilitation Support", ja: "リハビリテーション科" },
  { en: "Checkups and Illness Care", ja: "内科" },
  { en: "Vaccinations", ja: "予防接種" },
  { en: "Saturday Morning Clinic", ja: "土曜午前診療" }
],
    languages: ["Japanese"],
    location: { lat: 35.4019, lng: 136.8663 },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.616158876947!2d136.83172597488073!3d35.3939107457054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600307fd47b68b3b%3A0x8f6b83fd97875efc!2sKawada%20Orthopedic%20Surgical%20Clinic!5e1!3m2!1sen!2sjp!4v1751954672076!5m2!1sen!2sjp"
  },
  {
    name: { en: "Nakamura Orthopedic Surgical Clinic", ja: "中村整形外科" },
    specialty: { en: "Orthopedics", ja: "整形外科" },
    address: "〒504-0832 岐阜県各務原市蘇原花園町３丁目４−１",
    phone: "058-383-6001",
    email: "",
    hours: {
      ja: [
        "月~水 8:30～12:00, 15:00～19:00",
        "金 8:30～12:00, 15:00～19:00",
        "土 8:30～12:00, 13:00～16:00",
        "木・日・祝 休診"
      ],
      en: [
        "Mon-Wed 8:30–12:00, 15:00–19:00",
        "Fri 8:30-12:00, 15:00-19:00",
        "Sat 8:30–12:00, 13:00–16:00",
        "Thu/Sun/Public Holiday Closed"
      ]
    },
    openHours: {
  mon: [
    { start: "08:30", end: "12:00" },
    { start: "15:00", end: "19:00" }
  ],
  tue: [
    { start: "08:30", end: "12:00" },
    { start: "15:00", end: "19:00" }
  ],
  wed: [
    { start: "08:30", end: "12:00" },
    { start: "15:00", end: "19:00" }
  ],
  thu: [
    // closed
  ],
  fri: [
    { start: "08:30", end: "12:00" },
    { start: "15:00", end: "19:00" }
  ],
  sat: [
    { start: "08:30", end: "12:00" },
    { start: "13:00", end: "16:00" }
  ],
  sun: [
    // closed
  ],
  holiday: [
    // closed
  ]
},
    insurance: true,
    insurancePlans: { en: ["National Health"], ja: ["国民健康保険"] },
    services: [
  { en: "Bone & Joint Care", ja: "整形外科" },
  { en: "Rheumatism Care", ja: "リウマチ科" },
  { en: "Rehabilitation Support", ja: "リハビリテーション科" },
  { en: "Minor Surgery & Pain Care", ja: "外科・ペインクリニック" },
  { en: "X‑ray Exams", ja: "レントゲン検査" },
  { en: "Saturday Clinic", ja: "土曜診療" }
],
    languages: ["Japanese"],
    location: { lat: 35.4019, lng: 136.8663 },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.023536551053!2d136.8471198748816!3d35.411511544744826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600307c47eb9b407%3A0xf36cc1aebefa8045!2sNakamura%20Orthopedic%20Surgical%20Clinic!5e1!3m2!1sen!2sjp!4v1751955267579!5m2!1sen!2sjp"
  },
  {
    name: { en: "Sanwa Dermatology Clinic", ja: "三和皮フ科" },
    specialty: { en: "Dermatology", ja: "皮フ科" },
    address: "〒504-0912 岐阜県各務原市中桜町2丁目368",
    phone: "058-383-6800",
    email: "",
    hours: {
      ja: [
        "月~水 9:00～12:20, 16:00～18:50",
        "木 9:00～12:20",
        "金 9:00～12:20, 16:00～18:50",
        "土 8:45～12:20",
        "日・祝 休診"
      ],
      en: [
        "Mon-Wed 9:00–12:20, 16:00–18:50",
        "Thu 9:00-12:20",
        "Fri 9:00–12:20, 16:00–18:50",
        "Sat 8:45-12:20",
        "Sun/Public Holiday Closed"
      ]
    },
    openHours: {
  mon: [
    { start: "09:00", end: "12:20" },
    { start: "16:00", end: "18:50" }
  ],
  tue: [
    { start: "09:00", end: "12:20" },
    { start: "16:00", end: "18:50" }
  ],
  wed: [
    { start: "09:00", end: "12:20" },
    { start: "16:00", end: "18:50" }
  ],
  thu: [
    { start: "09:00", end: "12:20" }
  ],
  fri: [
    { start: "09:00", end: "12:20" },
    { start: "16:00", end: "18:50" }
  ],
  sat: [
    { start: "08:45", end: "12:20" }
  ],
  sun: [
    // closed
  ],
  holiday: [
    // closed
  ]
},
    insurance: true,
    insurancePlans: { en: ["National Health"], ja: ["国民健康保険"] },
    services: [
  { en: "Skin Care", ja: "皮膚科" },
  { en: "Allergy Treatment", ja: "アレルギー科" },
  { en: "Cosmetic Skin Care", ja: "美容皮膚科" },
  { en: "Urology", ja: "泌尿器科" },
  { en: "Laser Treatment (e.g., spots, hair)", ja: "レーザー治療（しみ・脱毛）" },
  { en: "Walk‑in Appointments", ja: "予約不要（受付順）" }
],
    languages: ["Japanese"],
    location: { lat: 35.4019, lng: 136.8663 },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.4143146359684!2d136.84531617488105!3d35.39990634537834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003077c3d9ae21d%3A0x7ab8fef2fc2fa1!2z5LiJ5ZKM55qu44OV56eR!5e1!3m2!1sen!2sjp!4v1751956273945!5m2!1sen!2sjp"
  },
  {
    name: { en: "Asakawa Clinic", ja: "浅川クリニック" },
    specialty: { en: "Otolaryngology", ja: "耳鼻咽喉科" },
    address: "〒504-0822 岐阜県各務原市蘇原栄町２丁目２３",
    phone: "058-382-3166",
    email: "",
    hours: {
      ja: [
        "月～火 9:00～12:00, 15:00～17:30",
        "水 9:00～12:00",
        "木～金 9:00～12:00, 15:00～17:30",
        "土 8:30～12:00",
        "日・祝 休診"
      ],
      en: [
        "Mon-Tue 9:00–12:00, 15:00–17:30",
        "Wed 9:00-12:00",
        "Thu-Fri 9:00–12:00, 15:00–17:30",
        "Sat 8:30-12:00",
        "Sun/Public Holiday Closed"
      ]
    },
    openHours: {
  mon: [
    { start: "09:00", end: "12:00" },
    { start: "15:00", end: "17:30" }
  ],
  tue: [
    { start: "09:00", end: "12:00" },
    { start: "15:00", end: "17:30" }
  ],
  wed: [
    { start: "09:00", end: "12:00" }
  ],
  thu: [
    { start: "09:00", end: "12:00" },
    { start: "15:00", end: "17:30" }
  ],
  fri: [
    { start: "09:00", end: "12:00" },
    { start: "15:00", end: "17:30" }
  ],
  sat: [
    { start: "08:30", end: "12:00" }
  ],
  sun: [
    // closed
  ],
  holiday: [
    // closed
  ]
},
    insurance: true,
    insurancePlans: { en: ["National Health"], ja: ["国民健康保険"] },
   services: [
  { en: "General Health Check", ja: "内科" },
  { en: "Breathing & Lungs Care", ja: "呼吸器内科" },
  { en: "Child Health", ja: "小児科" },
  { en: "Skin Care", ja: "皮膚科" },
  { en: "Ear, Nose & Throat", ja: "耳鼻咽喉科" },
  { en: "Allergy Treatment", ja: "アレルギー科" }
],
    languages: ["Japanese"],
    location: { lat: 35.4019, lng: 136.8663 },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5428.491875989686!2d136.86535787488125!3d35.404907145105426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600308816dbe3c7f%3A0xff987e3c19566600!2sAsakawa%20Clinic!5e1!3m2!1sen!2sjp!4v1751957099680!5m2!1sen!2sjp"
  },
  {
    name: { en: "Inazumi Ophthalmology Clinic", ja: "いなづみ眼科" },
    specialty: { en: "Eye Clinic", ja: "眼科" },
    address: "〒504-0825 岐阜県各務原市蘇原柿沢町１丁目３９",
    phone: "058-371-0810",
    email: "",
    hours: {
      ja: [
        "月～水 9:00～12:00, 15:30～18:30",
        "木 9:00～12:00",
        "金 9:00～12:00, 15:30～18:30",
        "土 9:00～12:00",
        "日・祝 休診"
      ],
      en: [
        "Mon-Wed 9:00–12:00, 15:30–18:30",
        "Thu 9:00-12:00",
        "Fri 9:00–12:00, 15:30–18:30",
        "Sat 9:00-12:00",
        "Sun/Public Holiday Closed"
      ]
    },
    openHours: {
  mon: [
    { start: "09:00", end: "12:00" },
    { start: "15:30", end: "18:30" }
  ],
  tue: [
    { start: "09:00", end: "12:00" },
    { start: "15:30", end: "18:30" }
  ],
  wed: [
    { start: "09:00", end: "12:00" },
    { start: "15:30", end: "18:30" }
  ],
  thu: [
    { start: "09:00", end: "12:00" }
  ],
  fri: [
    { start: "09:00", end: "12:00" },
    { start: "15:30", end: "18:30" }
  ],
  sat: [
    { start: "09:00", end: "12:00" }
  ],
  sun: [
    // closed
  ],
  holiday: [
    // closed
  ]
},
    insurance: true,
    insurancePlans: { en: ["National Health"], ja: ["国民健康保険"] },
    services: [
  { en: "Eye Check", ja: "目の検査" },
  { en: "Glaucoma Care", ja: "緑内障の診察" },
  { en: "Eye Drops at Clinic", ja: "目ぐすりもらえます" },
  { en: "No Appointment Needed", ja: "予約なしでOK" },
  { en: "Home Visit OK", ja: "おうちでも見てもらえる" },
  { en: "Free Parking", ja: "無料の駐車場あり" }
],
    languages: ["Japanese"],
    location: { lat: 35.4019, lng: 136.8663 },
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.2479044387337!2d136.85993367488135!3d35.40484874510852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6003087f91fe1db3%3A0xc41956ef66eab17d!2sInazumi%20Ophthalmology%20Clinic!5e1!3m2!1sen!2sjp!4v1751957653220!5m2!1sen!2sjp"
  },
];

const HOSPITALS_PER_PAGE = 6;
const MAIN_SPECIALTIES_JA = ['内科','整形外科','皮フ科','耳鼻咽喉科'];

const LANG = {
  en: {
    "Specialties": "Specialties",
    "All": "All",
    "Search & Filter": "Search & Filter",
    "Search...": "Search by specialty, name, keyword...",
    "Open Now": "Open Now",
    "Close Now": "Closed Now",
    "Accepts Insurance": "Accepts Insurance",
    "Language Support (English)": "Language Support (English)",
    "Insurance": "Insurance",
    "English Support": "English Support",
    "Map": "Map",
    "Find Nearby Hospitals": "Find Nearby Hospitals",
    "Hospitals": "Hospitals",
    "results": "results",
    "No results found": "No results found",
    "Address": "Address",
    "Phone": "Phone",
    "Email": "Email",
    "Hours": "Hours",
    "Insurance Plans": "Insurance Plans",
    "Services & Treatments": "Services & Treatments",
    "Hospital Directory": "Hospital Directory",
    "Internal Medicine": "Internal Medicine",
    "Pediatrics": "Pediatrics",
    "Orthopedics": "Orthopedics",
    "Gastroenterology": "Gastroenterology",
    "Otolaryngology (ENT)": "Otolaryngology (ENT)"
  },
  ja: {
    "Specialties": "診療科目",
    "All": "すべて",
    "Search & Filter": "検索・絞り込み",
    "Search...": "専門・病院名・キーワードで検索...",
    "Open Now": "診療中",
    "Close Now": "休診中",
    "Accepts Insurance": "保険対応あり",
    "Language Support (English)": "英語対応あり",
    "Insurance": "保険",
    "English Support": "英語対応",
    "Map": "地図",
    "Find Nearby Hospitals": "近くの病院を探す",
    "Hospitals": "病院一覧",
    "results": "件",
    "No results found": "該当する病院はありません",
    "Address": "住所",
    "Phone": "電話番号",
    "Email": "メール",
    "Hours": "診療時間",
    "Insurance Plans": "対応保険",
    "Services & Treatments": "主なサービス・治療",
    "Hospital Directory": "病院案内",
    "Internal Medicine": "内科",
    "Pediatrics": "小児科",
    "Orthopedics": "整形外科",
    "Gastroenterology": "消化器科",
    "Otolaryngology (ENT)": "耳鼻咽喉科"
  }
};
function getSpecialtyLabel(spec, lang) {
  // spec: always a Japanese specialty string
  if (lang === 'ja') return spec;
  const h = HOSPITALS.find(h => h.specialty.ja === spec);
  if (h) return h.specialty.en;
  return spec;
}
function hospitalApp() {
  return {
    lang: 'ja',
    specialties: [],
    specialtiesMain: MAIN_SPECIALTIES_JA,
    specialtiesOther: [],
    showOthers: false,
    hospitals: [],
    filteredHospitals: [],
    selected: null,
    filter: {
      specialty: '',
      search: '',
      openNow: false,
      insurance: false,
      language: false,
    },
    page: 1,
    totalPages: 1,
    HOSPITALS_PER_PAGE,
    pagedHospitals: [],
    init() {
      this.hospitals = HOSPITALS;
      this.prepareSpecialties();
      this.applyFilters();
    },
    prepareSpecialties() {
      let others = new Set();
      for (const h of HOSPITALS) {
        const spec = h.specialty.ja;
        if (!MAIN_SPECIALTIES_JA.includes(spec)) {
          others.add(spec);
        }
      }
      this.specialtiesOther = Array.from(others);
      this.specialties = [...MAIN_SPECIALTIES_JA, ...this.specialtiesOther];
    },
    getSpecialtyLabel(spec, lang) {
      if (lang === 'ja') return spec;
      const h = this.hospitals.find(h => h.specialty.ja === spec);
      if (h) return h.specialty.en;
      return spec;
    },
    t(key) {
      return LANG[this.lang][key] || key;
    },
    toggleLang() {
      this.lang = this.lang === 'en' ? 'ja' : 'en';
      this.showOthers = false;
      this.prepareSpecialties();
      this.page = 1;
      this.applyFilters();
    },
    findNearby() {
  const url = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2282.5741237084176!2d136.8537136112696!3d35.39874576261064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600308796e819cfb%3A0xfea3e1169d30680a!2sSarasara%20Clinic!5e1!3m2!1sen!2sjp!4v1751874525737!5m2!1sen!2sjp";
  document.getElementById('main-map').src = url;
},
    isOpen(hosp) {
  if (!hosp.openHours) return true; // fallback: always open

  // Get current day and time (Japan timezone)
  const now = new Date();
  const weekday = ['sun','mon','tue','wed','thu','fri','sat'][now.getDay()];
  const currentTime = now.getHours() * 60 + now.getMinutes();

  const slots = hosp.openHours[weekday];
  if (!slots || !Array.isArray(slots)) return false;

  // Check if now is in any time slot
  for (const slot of slots) {
    const [sh, sm] = slot.start.split(':').map(Number);
    const [eh, em] = slot.end.split(':').map(Number);
    const start = sh * 60 + sm;
    const end = eh * 60 + em;
    if (currentTime >= start && currentTime <= end) {
      return true;
    }
  }
  return false;
},
    applyFilters() {
      let arr = this.hospitals.filter(hosp => {
        if (this.filter.specialty === '_others') {
          if (MAIN_SPECIALTIES_JA.includes(hosp.specialty.ja)) return false;
        }
        else if (this.filter.specialty && this.filter.specialty !== '') {
          if (hosp.specialty.ja !== this.filter.specialty) return false;
        }
        // Search
        if (this.filter.search) {
  const keyword = this.filter.search.trim().toLowerCase();
  // Check name, specialty, address in BOTH languages, plus services (optional)
  const matches = 
    hosp.name.en.toLowerCase().includes(keyword) ||
    hosp.name.ja.toLowerCase().includes(keyword) ||
    hosp.specialty.en.toLowerCase().includes(keyword) ||
    hosp.specialty.ja.toLowerCase().includes(keyword) ||
    hosp.address.toLowerCase().includes(keyword) ||
    // Optional: match services too
    (hosp.services && hosp.services.some(s =>
      (s.en && s.en.toLowerCase().includes(keyword)) ||
      (s.ja && s.ja.toLowerCase().includes(keyword))
    ));
  if (!matches) return false;
}
        if (this.filter.openNow && !this.isOpen(hosp)) return false;
        if (this.filter.insurance && !hosp.insurance) return false;
        if (this.filter.language && !hosp.languages.includes('English')) return false;
        return true;
      });

      if (!this.filter.specialty || this.filter.specialty === "") {
  const seen = new Set();
  arr = arr.filter(hosp => {
    // Use name (ja or en) + address as the unique key
    const key = hosp.name.ja + "|" + hosp.address;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
this.filteredHospitals = arr;
      this.totalPages = Math.max(1, Math.ceil(arr.length / this.HOSPITALS_PER_PAGE));
      if (this.page > this.totalPages) this.page = 1;
      this.setPagedHospitals();
    },
    setPagedHospitals() {
      if (this.filteredHospitals.length > this.HOSPITALS_PER_PAGE) {
        const start = (this.page - 1) * this.HOSPITALS_PER_PAGE;
        this.pagedHospitals = this.filteredHospitals.slice(start, start + this.HOSPITALS_PER_PAGE);
      } else {
        this.pagedHospitals = this.filteredHospitals;
      }
    },
    goToPage(pg) {
      if (pg < 1 || pg > this.totalPages) return;
      this.page = pg;
      this.setPagedHospitals();
      window.scrollTo({top: 0, behavior: "smooth"});
    },
    showDetail(hosp) {
      this.selected = hosp;
    },
    findNearby() {
  // This will set the map iframe to Sarasara Clinic
  const url = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2282.5741237084176!2d136.8537136112696!3d35.39874576261064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600308796e819cfb%3A0xfea3e1169d30680a!2sSarasara%20Clinic!5e1!3m2!1sen!2sjp!4v1751874525737!5m2!1sen!2sjp";
  document.getElementById('main-map').src = url;
}
  }
}
