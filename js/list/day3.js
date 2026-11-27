// Day 3 — data kosakata. Setiap kosakata memiliki dua contoh kalimat.
// Format data mengikuti pola day1.js.
const entries = {
  "秘める": {
    "word": "秘める",
    "reading": "ひめる",
    "meaning": "menyimpan; memendam",
    "explanation": "Menyimpan perasaan, kemampuan, atau kemungkinan di dalam diri tanpa memperlihatkannya kepada orang lain.",
    "nuance": "Sering dipakai untuk hal abstrak seperti 秘めた思い dan 可能性を秘める; lebih dalam daripada 隠す karena sesuatu belum tentu sengaja ditutupi.",
    "contexts": [
      "Sastra",
      "Kehidupan sosial",
      "Formal"
    ],
    "examples": [
      [
        "彼は胸に秘めた思いを誰にも話さなかった。",
        "かれはむねにひめたおもいをだれにもはなさなかった。",
        "Ia tidak menceritakan perasaan yang dipendamnya kepada siapa pun."
      ],
      [
        "この技術は社会を変える可能性を秘めている。",
        "このぎじゅつはしゃかいをかえるかのうせいをひめている。",
        "Teknologi ini menyimpan potensi untuk mengubah masyarakat。"
      ]
    ]
  },
  "加工": {
    "word": "加工",
    "reading": "かこう",
    "meaning": "pengolahan; pemrosesan",
    "explanation": "Mengubah bahan mentah atau bahan dasar melalui proses tertentu agar bentuk, sifat, atau kegunaannya berubah.",
    "nuance": "Umum dalam industri, makanan, dan foto: 加工食品 (makanan olahan), 画像を加工する (mengedit gambar). Menekankan adanya proses perubahan.",
    "contexts": [
      "Industri",
      "Teknologi",
      "Kehidupan sehari-hari"
    ],
    "examples": [
      [
        "この工場では木材を加工して家具を作っている。",
        "このこうじょうではもくざいをかこうしてかぐをつくっている。",
        "Pabrik ini mengolah kayu untuk membuat furnitur."
      ],
      [
        "写真を加工しすぎると、不自然に見えることがある。",
        "しゃしんをかこうしすぎると、ふしぜんにみえることがある。",
        "Jika foto terlalu banyak diedit, hasilnya terkadang terlihat tidak alami。"
      ]
    ]
  },
  "養う": {
    "word": "養う",
    "reading": "やしなう",
    "meaning": "memelihara; menafkahi; mengembangkan",
    "explanation": "Merawat dan memenuhi kebutuhan hidup seseorang, atau memupuk kemampuan dan sikap diri secara bertahap.",
    "nuance": "Objek menentukan makna: 家族を養う berarti menafkahi keluarga, sedangkan 判断力を養う berarti mengembangkan daya pertimbangan.",
    "contexts": [
      "Kehidupan sehari-hari",
      "Akademik",
      "Pekerjaan"
    ],
    "examples": [
      [
        "父は長年、家族を養ってきた。",
        "ちちはながねん、かぞくをやしなってきた。",
        "Ayah telah menafkahi keluarga selama bertahun-tahun."
      ],
      [
        "読書を通して幅広い視野を養うことができる。",
        "どくしょをとおしてはばひろいしやをやしなうことができる。",
        "Kita dapat mengembangkan wawasan luas melalui membaca。"
      ]
    ]
  },
  "資質": {
    "word": "資質",
    "reading": "ししつ",
    "meaning": "bakat dasar; kualitas pribadi",
    "explanation": "Sifat atau kemampuan dasar yang membuat seseorang cocok untuk suatu peran atau bidang tertentu.",
    "nuance": "Sering muncul dalam 指導者としての資質. Tidak terbatas pada bakat bawaan; karakter dan sikap juga termasuk.",
    "contexts": [
      "Akademik",
      "Pekerjaan",
      "Formal"
    ],
    "examples": [
      [
        "教師には人を支える資質が求められる。",
        "きょうしにはひとをささえるししつがもとめられる。",
        "Seorang guru dituntut memiliki kualitas untuk mendukung orang lain."
      ],
      [
        "彼女にはリーダーとしての資質が十分にある。",
        "かのじょにはりーだーとしてのししつがじゅうぶんにある。",
        "Ia memiliki kualitas yang memadai sebagai pemimpin。"
      ]
    ]
  },
  "正当": {
    "word": "正当",
    "reading": "せいとう",
    "meaning": "sah; wajar; sesuai aturan",
    "explanation": "Diakui benar atau layak berdasarkan alasan, hak, aturan, atau prosedur yang berlaku.",
    "nuance": "Sering dipakai dalam 正当な理由 dan 正当な評価. Menekankan legitimasi atau kewajaran, bukan sekadar benar secara umum seperti 正しい.",
    "contexts": [
      "Hukum",
      "Berita",
      "Formal"
    ],
    "examples": [
      [
        "欠席する場合は、正当な理由を説明してください。",
        "けっせきするばあいは、せいとうなりゆうをせつめいしてください。",
        "Jika tidak hadir, jelaskan alasan yang sah."
      ],
      [
        "彼の努力は正当に評価されるべきだ。",
        "かれのどりょくはせいとうにひょうかされるべきだ。",
        "Usahanya seharusnya dinilai secara layak。"
      ]
    ]
  },
  "ありきたり": {
    "word": "ありきたり",
    "reading": "ありきたり",
    "meaning": "biasa saja; umum; klise",
    "explanation": "Menggambarkan sesuatu yang tidak istimewa karena sering ditemukan atau tidak memiliki ciri baru.",
    "nuance": "Biasanya agak negatif untuk ide atau ungkapan yang mudah ditebak: ありきたりな答え berarti jawaban klise dan tidak orisinal.",
    "contexts": [
      "Percakapan",
      "Sastra",
      "Sosial"
    ],
    "examples": [
      [
        "ありきたりな説明では、誰も納得しないだろう。",
        "ありきたりなせつめいでは、だれもなっとくしないだろう。",
        "Penjelasan klise mungkin tidak akan meyakinkan siapa pun."
      ],
      [
        "彼の小説はありきたりの恋愛物語とは違う。",
        "かれのしょうせつはありきたりのれんあいものがたりとはちがう。",
        "Novelnya berbeda dari kisah cinta biasa。"
      ]
    ]
  },
  "間柄": {
    "word": "間柄",
    "reading": "あいだがら",
    "meaning": "hubungan; relasi",
    "explanation": "Hubungan atau kedekatan yang terjalin di antara dua pihak, terutama antarmanusia.",
    "nuance": "Menyoroti sifat hubungan: 親しい間柄 (hubungan akrab), 仕事上の間柄 (hubungan profesional); bukan sekadar pernah berkenalan.",
    "contexts": [
      "Sosial",
      "Formal",
      "Sastra"
    ],
    "examples": [
      [
        "二人は何でも相談できる間柄だ。",
        "ふたりはなんでもそうだんできるあいだがらだ。",
        "Keduanya memiliki hubungan yang memungkinkan mereka membicarakan apa pun."
      ],
      [
        "仕事上の間柄なので、個人的な話はあまりしない。",
        "しごとじょうのあいだがらなので、こじんてきなはなしはあまりしない。",
        "Karena hubungan kami sebatas pekerjaan, kami tidak banyak membicarakan hal pribadi。"
      ]
    ]
  },
  "風潮": {
    "word": "風潮",
    "reading": "ふうちょう",
    "meaning": "kecenderungan umum; tren sosial",
    "explanation": "Arah pemikiran dan perilaku yang menyebar dalam masyarakat atau kelompok pada suatu masa.",
    "nuance": "Sering dipakai untuk membahas gejala sosial dengan jarak kritis: 〜という風潮がある. Dapat netral atau negatif sesuai konteks.",
    "contexts": [
      "Berita",
      "Sosiologi",
      "Akademik"
    ],
    "examples": [
      [
        "失敗を避けようとする風潮が強まっている。",
        "しっぱいをさけようとするふうちょうがつよまっている。",
        "Kecenderungan untuk menghindari kegagalan semakin menguat."
      ],
      [
        "社会全体の風潮は若者の考え方にも影響を与える。",
        "しゃかいぜんたいのふうちょうはわかもののかんがえかたにもえいきょうをあたえる。",
        "Kecenderungan masyarakat memengaruhi cara berpikir anak muda。"
      ]
    ]
  },
  "もたらす": {
    "word": "もたらす",
    "reading": "もたらす",
    "meaning": "membawa; mendatangkan; menimbulkan",
    "explanation": "Menyebabkan atau menghadirkan hasil, perubahan, manfaat, maupun masalah bagi seseorang atau sesuatu.",
    "nuance": "Cukup formal, sering dipakai untuk dampak abstrak: 利益・変化・被害をもたらす. Hasilnya bisa positif atau negatif.",
    "contexts": [
      "Berita",
      "Akademik",
      "Bisnis"
    ],
    "examples": [
      [
        "技術の進歩は生活に大きな変化をもたらした。",
        "ぎじゅつのしんぽはせいかつにおおきなへんかをもたらした。",
        "Kemajuan teknologi membawa perubahan besar dalam kehidupan."
      ],
      [
        "長雨は農作物に深刻な被害をもたらした。",
        "ながあめはのうさくもつにしんこくなひがいをもたらした。",
        "Hujan berkepanjangan menimbulkan kerusakan serius pada tanaman。"
      ]
    ]
  },
  "撤回": {
    "word": "撤回",
    "reading": "てっかい",
    "meaning": "menarik kembali; membatalkan pernyataan",
    "explanation": "Menarik kembali pernyataan, usulan, keputusan, atau kebijakan yang sebelumnya sudah disampaikan.",
    "nuance": "Formal dan umum dalam berita/politik: 発言を撤回する, 提案を撤回する. Menekankan penarikan sesuatu yang sudah diumumkan.",
    "contexts": [
      "Berita",
      "Politik",
      "Bisnis"
    ],
    "examples": [
      [
        "批判を受けて、担当者は発言を撤回した。",
        "ひはんをうけて、たんとうしゃははつげんをてっかいした。",
        "Setelah menerima kritik, penanggung jawab menarik kembali pernyataannya."
      ],
      [
        "会社は先週発表した計画を撤回することにした。",
        "かいしゃはせんしゅうはっぴょうしたけいかくをてっかいすることにした。",
        "Perusahaan memutuskan menarik kembali rencana yang diumumkan minggu lalu。"
      ]
    ]
  },
  "補填": {
    "word": "補填",
    "reading": "ほてん",
    "meaning": "penggantian; penutupan kekurangan/kerugian",
    "explanation": "Mengisi kekurangan atau mengganti kerugian dengan menyediakan uang, barang, atau sumber daya tambahan.",
    "nuance": "Sering dipakai dalam 損失を補填する dan 不足分を補填する; menekankan upaya menutup jumlah yang kurang.",
    "contexts": [
      "Keuangan",
      "Bisnis",
      "Administrasi"
    ],
    "examples": [
      [
        "会社は事故による損失の一部を補填した。",
        "かいしゃはじこによるそんしつのいちぶをほてんした。",
        "Perusahaan mengganti sebagian kerugian akibat kecelakaan."
      ],
      [
        "不足する費用は補助金で補填される予定だ。",
        "ふそくするひようはほじょきんでほてんされるよていだ。",
        "Biaya yang kurang rencananya ditutupi dengan dana bantuan。"
      ]
    ]
  },
  "コンスタント": {
    "word": "コンスタント",
    "reading": "こんすたんと",
    "meaning": "stabil; tetap; konsisten",
    "explanation": "Menunjukkan sesuatu yang dilakukan atau terjadi teratur dengan tingkat relatif stabil.",
    "nuance": "Kata serapan yang umum dalam pekerjaan dan olahraga. コンスタントに続ける berarti konsisten; tidak harus berarti setiap hari tanpa jeda.",
    "contexts": [
      "Pekerjaan",
      "Olahraga",
      "Percakapan"
    ],
    "examples": [
      [
        "彼女は毎月コンスタントに本を読んでいる。",
        "かのじょはまいつきこんすたんとにほんをよんでいる。",
        "Ia membaca buku secara konsisten setiap bulan."
      ],
      [
        "売上をコンスタントに伸ばすことが課題だ。",
        "うりあげをこんすたんとにのばすことがかだいだ。",
        "Tantangannya adalah meningkatkan penjualan secara stabil。"
      ]
    ]
  },
  "ずばり": {
    "word": "ずばり",
    "reading": "ずばり",
    "meaning": "terus terang; tepat sasaran; langsung ke inti",
    "explanation": "Menyatakan sesuatu secara lugas dan langsung mengenai inti persoalan, atau memberikan jawaban yang tepat.",
    "nuance": "ずばり言う berarti berbicara terus terang; ずばり当てる berarti menebak tepat. Bisa terdengar blak-blakan.",
    "contexts": [
      "Percakapan",
      "Wawancara",
      "Media"
    ],
    "examples": [
      [
        "質問に対して、彼はずばり答えた。",
        "しつもんにたいして、かれはずばりこたえた。",
        "Ia menjawab pertanyaan itu secara langsung dan tepat."
      ],
      [
        "ずばり言うと、今の計画には無理がある。",
        "ずばりいうと、いまのけいかくにはむりがある。",
        "Terus terang, rencana saat ini tidak realistis。"
      ]
    ]
  },
  "解約": {
    "word": "解約",
    "reading": "かいやく",
    "meaning": "pembatalan kontrak/langganan",
    "explanation": "Mengakhiri perjanjian atau layanan berlangganan yang sebelumnya telah disepakati.",
    "nuance": "Umum untuk layanan telepon, internet, asuransi, dan keanggotaan. 解約する menghentikan kontrak berjalan; berbeda dari 取消 yang lebih luas.",
    "contexts": [
      "Administrasi",
      "Bisnis",
      "Sehari-hari"
    ],
    "examples": [
      [
        "使わなくなった動画サービスを解約した。",
        "つかわなくなったどうがさーびすをかいやくした。",
        "Saya membatalkan langganan layanan video yang tidak lagi digunakan."
      ],
      [
        "契約を解約する前に、手数料を確認してください。",
        "けいやくをかいやくするまえに、てすうりょうをかくにんしてください。",
        "Periksa biaya administrasi sebelum mengakhiri kontrak。"
      ]
    ]
  },
  "特産": {
    "word": "特産",
    "reading": "とくさん",
    "meaning": "produk khas daerah",
    "explanation": "Barang atau hasil alam yang diproduksi secara khas dan menjadi ciri suatu daerah.",
    "nuance": "Sering muncul sebagai 特産品 dan 特産地. Menunjuk produk khas yang dihasilkan atau dibudidayakan di wilayah tertentu.",
    "contexts": [
      "Pariwisata",
      "Ekonomi",
      "Budaya"
    ],
    "examples": [
      [
        "この町は梨の特産地として知られている。",
        "このまちはなしのとくさんちとしてしられている。",
        "Kota ini dikenal sebagai daerah penghasil pir khas."
      ],
      [
        "旅行先で地元の特産品を買った。",
        "りょこうさきでじもとのとくさんひんをかった。",
        "Saya membeli produk khas setempat di tempat wisata。"
      ]
    ]
  },
  "問い詰める": {
    "word": "問い詰める",
    "reading": "といつめる",
    "meaning": "mendesak dengan pertanyaan; menginterogasi",
    "explanation": "Terus-menerus menanyakan sesuatu untuk memperoleh penjelasan atau jawaban yang tidak dapat dihindari.",
    "nuance": "Lebih kuat daripada 尋ねる yang netral; 問い詰める memberi tekanan dan dapat membuat orang yang ditanya merasa terpojok.",
    "contexts": [
      "Berita",
      "Sosial",
      "Narasi"
    ],
    "examples": [
      [
        "記者は担当者に計画の問題点を問い詰めた。",
        "きしゃはたんとうしゃにけいかくのもんだいてんをといつめた。",
        "Wartawan mendesak penanggung jawab dengan pertanyaan tentang masalah rencana itu."
      ],
      [
        "彼女は理由を問い詰められて、黙ってしまった。",
        "かのじょはりゆうをといつめられて、だまってしまった。",
        "Setelah terus didesak menjelaskan alasannya, ia terdiam。"
      ]
    ]
  },
  "改修": {
    "word": "改修",
    "reading": "かいしゅう",
    "meaning": "perbaikan; renovasi; pembaruan fasilitas",
    "explanation": "Memperbaiki atau memperbarui bangunan, fasilitas, sistem, atau peralatan agar lebih baik dan dapat digunakan.",
    "nuance": "Sering untuk fasilitas publik dan bangunan. 修理 cenderung memperbaiki kerusakan tertentu; 改修 dapat mencakup pembaruan yang lebih luas.",
    "contexts": [
      "Konstruksi",
      "Administrasi",
      "Teknologi"
    ],
    "examples": [
      [
        "古い校舎を改修する工事が始まった。",
        "ふるいこうしゃをかいしゅうするこうじがはじまった。",
        "Pekerjaan renovasi gedung sekolah lama telah dimulai."
      ],
      [
        "駅のトイレは来月から改修される。",
        "えきのといれはらいげつからかいしゅうされる。",
        "Toilet stasiun akan direnovasi mulai bulan depan。"
      ]
    ]
  },
  "手厚い": {
    "word": "手厚い",
    "reading": "てあつい",
    "meaning": "penuh perhatian; dukungan/perlakuan yang menyeluruh",
    "explanation": "Memberikan bantuan, perlindungan, atau pelayanan dengan cukup dan penuh kepedulian.",
    "nuance": "Umumnya positif dalam 手厚い支援・看護・待遇. Ejaan lazimnya 手厚い, bukan 手暑い.",
    "contexts": [
      "Kesehatan",
      "Pekerjaan",
      "Sosial"
    ],
    "examples": [
      [
        "被災者には手厚い支援が必要だ。",
        "ひさいしゃにはてあついしえんがひつようだ。",
        "Para korban bencana membutuhkan dukungan menyeluruh."
      ],
      [
        "病院では患者に手厚い看護を行っている。",
        "びょういんではかんじゃにてあついかんごをおこなっている。",
        "Rumah sakit memberikan perawatan penuh perhatian kepada pasien。"
      ]
    ]
  },
  "デマ": {
    "word": "デマ",
    "reading": "でま",
    "meaning": "desas-desus palsu; berita bohong",
    "explanation": "Informasi tidak benar atau menyesatkan yang disebarkan seolah-olah fakta.",
    "nuance": "Bersifat negatif, umum dalam media sosial dan berita. デマを流す berarti menyebarkan kabar palsu; 噂 belum tentu salah.",
    "contexts": [
      "Media",
      "Berita",
      "Sosial"
    ],
    "examples": [
      [
        "災害時にはデマを信じず、公式情報を確認しよう。",
        "さいがいじにはでまをしんじず、こうしきじょうほうをかくにんしよう。",
        "Saat bencana, jangan percaya kabar palsu dan periksa informasi resmi."
      ],
      [
        "根拠のないデマがインターネットで広がった。",
        "こんきょのないでまがいんたーねっとでひろがった。",
        "Desas-desus palsu tanpa dasar menyebar di internet。"
      ]
    ]
  },
  "兆し": {
    "word": "兆し",
    "reading": "きざし",
    "meaning": "tanda awal; pertanda; gejala",
    "explanation": "Tanda kecil yang menunjukkan bahwa suatu perubahan atau peristiwa mungkin akan terjadi.",
    "nuance": "Sering dipakai dalam 回復の兆し dan 春の兆し. Menunjukkan gejala awal, bukan kepastian.",
    "contexts": [
      "Berita",
      "Cuaca",
      "Akademik"
    ],
    "examples": [
      [
        "患者の容体に回復の兆しが見えてきた。",
        "かんじゃのようたいにかいふくのきざしがみえてきた。",
        "Tanda pemulihan mulai terlihat pada kondisi pasien."
      ],
      [
        "空が明るくなり、雨がやむ兆しが感じられた。",
        "そらがあかるくなり、あめがやむきざしがかんじられた。",
        "Langit mulai terang dan terasa ada pertanda hujan akan berhenti。"
      ]
    ]
  },
  "収容": {
    "word": "収容",
    "reading": "しゅうよう",
    "meaning": "menampung; menempatkan; mengakomodasi",
    "explanation": "Memasukkan atau menampung orang maupun benda ke tempat yang disediakan, seperti gedung, fasilitas, atau lembaga.",
    "nuance": "Dipakai dalam 避難者を収容する dan 収容人数. Bisa netral untuk kapasitas gedung atau resmi untuk penempatan pasien/tahanan.",
    "contexts": [
      "Berita",
      "Administrasi",
      "Sosial"
    ],
    "examples": [
      [
        "体育館は多くの避難者を収容できる。",
        "たいいくかんはおおくのひなんしゃをしゅうようできる。",
        "Gedung olahraga itu dapat menampung banyak pengungsi."
      ],
      [
        "警察は容疑者を施設に収容した。",
        "けいさつはようぎしゃをしせつにしゅうようした。",
        "Polisi menempatkan tersangka di fasilitas tersebut。"
      ]
    ]
  },
  "冴える": {
    "word": "冴える",
    "reading": "さえる",
    "meaning": "tajam; jernih; segar",
    "explanation": "Menggambarkan pikiran yang tajam, warna cerah, suara jelas, atau udara dingin dan jernih.",
    "nuance": "頭が冴える berarti pikiran tajam; 色が冴える berarti warna cerah. Jangan tertukar dengan 冷える yang berarti menjadi dingin.",
    "contexts": [
      "Percakapan",
      "Sastra",
      "Deskripsi"
    ],
    "examples": [
      [
        "今朝は頭が冴えていて、仕事がよく進む。",
        "けさはあたまがさえていて、しごとがよくすすむ。",
        "Pagi ini pikiranku tajam sehingga pekerjaan berjalan lancar."
      ],
      [
        "月明かりの下で、星の光が冴えて見えた。",
        "つきあかりのもとで、ほしのひかりがさえてみえた。",
        "Di bawah cahaya bulan, sinar bintang terlihat jelas。"
      ]
    ]
  },
  "痛烈": {
    "word": "痛烈",
    "reading": "つうれつ",
    "meaning": "tajam; pedas; sangat keras (kritik)",
    "explanation": "Menunjukkan kritik, kecaman, atau sindiran yang sangat kuat dan menusuk.",
    "nuance": "Sering muncul dalam 痛烈な批判・皮肉. Lebih kuat daripada 厳しい dan memberi kesan kritik yang telak.",
    "contexts": [
      "Berita",
      "Diskusi",
      "Formal"
    ],
    "examples": [
      [
        "彼の発言は政府に対する痛烈な批判だった。",
        "かれのはつげんはせいふにたいするつうれつなひはんだった。",
        "Pernyataannya merupakan kritik tajam terhadap pemerintah."
      ],
      [
        "監督は選手の油断を痛烈に批判した。",
        "かんとくはせんしゅのゆだんをつうれつにひはんした。",
        "Pelatih mengkritik keras kelengahan para pemain。"
      ]
    ]
  },
  "完結": {
    "word": "完結",
    "reading": "かんけつ",
    "meaning": "tuntas; selesai secara lengkap",
    "explanation": "Cerita, pekerjaan, atau rangkaian mencapai akhir sehingga menjadi utuh dan selesai.",
    "nuance": "Sering untuk karya berseri: 物語が完結する. 終了 hanya berarti berakhir, sedangkan 完結 menekankan seluruh rangkaian lengkap.",
    "contexts": [
      "Sastra",
      "Pekerjaan",
      "Media"
    ],
    "examples": [
      [
        "人気漫画が十年の連載を経て完結した。",
        "にんきまんががじゅうねんのれんさいをへてかんけつした。",
        "Manga populer itu tamat setelah diserialkan sepuluh tahun."
      ],
      [
        "この報告書で調査の一連の作業が完結する。",
        "このほうこくしょでちょうさのいちれんのさぎょうがかんけつする。",
        "Dengan laporan ini, seluruh rangkaian penelitian tuntas。"
      ]
    ]
  },
  "脆い": {
    "word": "脆い",
    "reading": "もろい",
    "meaning": "rapuh; mudah rusak; tidak kokoh",
    "explanation": "Mudah pecah, hancur, runtuh, atau kehilangan kekuatan, baik secara fisik maupun kiasan.",
    "nuance": "Dapat menggambarkan benda, hubungan, atau tekad. 脆い menekankan mudah runtuh saat mendapat tekanan, lebih spesifik daripada 弱い.",
    "contexts": [
      "Deskripsi",
      "Sastra",
      "Sosial"
    ],
    "examples": [
      [
        "この素材は軽いが、衝撃に弱くて脆い。",
        "このそざいはかるいが、しょうげきによわくてもろい。",
        "Bahan ini ringan, tetapi rapuh terhadap benturan."
      ],
      [
        "見た目は強そうでも、彼の決意は意外にもろかった。",
        "みためはつよそうでも、かれのけついはいがいにもろかった。",
        "Meski terlihat kuat, tekadnya ternyata rapuh。"
      ]
    ]
  },
  "出荷": {
    "word": "出荷",
    "reading": "しゅっか",
    "meaning": "pengiriman barang dari produsen",
    "explanation": "Mengirim barang hasil produksi dari pabrik atau gudang menuju pasar maupun pembeli.",
    "nuance": "Umum dalam logistik: 商品を出荷する, 出荷量, 出荷停止. 出荷 menekankan keluarnya produk dari tempat produksi/gudang; 発送 lebih umum untuk pengiriman paket.",
    "contexts": [
      "Bisnis",
      "Logistik",
      "Ekonomi"
    ],
    "examples": [
      [
        "新製品は来週から全国に出荷される。",
        "しんせいひんはらいしゅうからぜんこくにしゅっかされる。",
        "Produk baru dikirim ke seluruh negeri mulai minggu depan."
      ],
      [
        "台風の影響で野菜の出荷量が減少した。",
        "たいふうのえいきょうでやさいのしゅっかりょうがげんしょうした。",
        "Jumlah pengiriman sayuran menurun akibat topan。"
      ]
    ]
  },
  "譲る": {
    "word": "譲る",
    "reading": "ゆずる",
    "meaning": "menyerahkan; mengalah; memberikan hak/tempat",
    "explanation": "Memberikan sesuatu yang dimiliki atau menjadi hak sendiri kepada orang lain, atau mengalah demi pihak lain.",
    "nuance": "席を譲る (memberi tempat duduk), 権利を譲る (mengalihkan hak), 一歩も譲らない (tidak mengalah). Dapat menunjukkan kemurahan hati atau pengalihan resmi.",
    "contexts": [
      "Sosial",
      "Bisnis",
      "Percakapan"
    ],
    "examples": [
      [
        "電車で高齢者に席を譲った。",
        "でんしゃでこうれいしゃにせきをゆずった。",
        "Saya memberikan tempat duduk kepada orang lanjut usia di kereta."
      ],
      [
        "この条件だけは譲ることができない。",
        "このじょうけんだけはゆずることができない。",
        "Hanya syarat ini yang tidak bisa saya kompromikan。"
      ]
    ]
  },
  "底力": {
    "word": "底力",
    "reading": "そこぢから",
    "meaning": "kekuatan terpendam; kemampuan sejati",
    "explanation": "Kekuatan atau kemampuan yang sebenarnya dimiliki dan muncul ketika menghadapi kesulitan atau tekanan.",
    "nuance": "Sering digunakan dalam 底力を発揮する. Menunjukkan potensi yang tidak tampak dalam keadaan biasa, tetapi muncul saat penting.",
    "contexts": [
      "Olahraga",
      "Sosial",
      "Berita"
    ],
    "examples": [
      [
        "チームは最後の試合で底力を発揮した。",
        "ちーむはさいごのしあいでそこぢからをはっきした。",
        "Tim menunjukkan kekuatan terpendamnya dalam pertandingan terakhir."
      ],
      [
        "困難な状況こそ、組織の底力が試される。",
        "こんなんなじょうきょうこそ、そしきのそこぢからがためされる。",
        "Justru dalam situasi sulit, kekuatan sejati organisasi diuji。"
      ]
    ]
  },
  "絶大": {
    "word": "絶大",
    "reading": "ぜつだい",
    "meaning": "sangat besar; luar biasa besar",
    "explanation": "Menunjukkan pengaruh, dukungan, kepercayaan, atau kekuatan yang sangat besar.",
    "nuance": "Umumnya dipakai dalam 絶大な人気・信頼・影響力. Formal dan menekankan skala luar biasa besar, bukan ukuran fisik.",
    "contexts": [
      "Berita",
      "Bisnis",
      "Formal"
    ],
    "examples": [
      [
        "その選手は若者から絶大な人気を集めている。",
        "そのせんしゅはわかものからぜつだいなにんきをあつめている。",
        "Atlet itu memperoleh popularitas luar biasa di kalangan anak muda."
      ],
      [
        "地域の人々は新しい市長に絶大な信頼を寄せている。",
        "ちいきのひとびとはあたらしいしちょうにぜつだいなしんらいをよせている。",
        "Warga menaruh kepercayaan sangat besar kepada wali kota baru。"
      ]
    ]
  },
  "手痛い": {
    "word": "手痛い",
    "reading": "ていたい",
    "meaning": "sangat merugikan; pukulan telak",
    "explanation": "Menggambarkan kerugian, kekalahan, atau kesalahan yang memberikan dampak berat.",
    "nuance": "Sering muncul dalam 手痛い失敗 dan 手痛い敗北. Biasanya kiasan, bukan sakit pada tangan; menekankan kerugian yang terasa besar.",
    "contexts": [
      "Berita",
      "Bisnis",
      "Olahraga"
    ],
    "examples": [
      [
        "会社は新事業で手痛い損失を受けた。",
        "かいしゃはしんじぎょうでていたいそんしつをうけた。",
        "Perusahaan mengalami kerugian besar dalam usaha barunya."
      ],
      [
        "優勝候補の敗退はチームにとって手痛い結果となった。",
        "ゆうしょうこうほのはいたいはちーむにとってていたいけっかとなった。",
        "Tersingkirnya kandidat juara menjadi hasil yang sangat merugikan bagi tim。"
      ]
    ]
  },
  "誘致": {
    "word": "誘致",
    "reading": "ゆうち",
    "meaning": "upaya menarik perusahaan/acara",
    "explanation": "Mengusahakan agar perusahaan, fasilitas, organisasi, atau acara datang dan didirikan/diselenggarakan di suatu tempat.",
    "nuance": "Lazim dalam kebijakan daerah: 企業を誘致する, 大会を誘致する. Berbeda dari 招待 yang mengundang tamu; 誘致 menarik investasi/kegiatan ke wilayah tertentu.",
    "contexts": [
      "Ekonomi",
      "Politik",
      "Administrasi"
    ],
    "examples": [
      [
        "市は新しい工場の誘致を進めている。",
        "しはあたらしいこうじょうのゆうちをすすめている。",
        "Pemerintah kota mengupayakan masuknya pabrik baru."
      ],
      [
        "地域は国際会議の誘致に力を入れている。",
        "ちいきはこくさいかいぎのゆうちにちからをいれている。",
        "Daerah itu berupaya menarik penyelenggaraan konferensi internasional。"
      ]
    ]
  },
  "結末": {
    "word": "結末",
    "reading": "けつまつ",
    "meaning": "akhir; kesudahan",
    "explanation": "Bagian akhir atau hasil setelah rangkaian kejadian, konflik, atau cerita berlangsung.",
    "nuance": "Sering muncul dalam 意外な結末. Menyoroti bagaimana suatu kejadian berakhir, termasuk hasil yang tidak diharapkan.",
    "contexts": [
      "Sastra",
      "Berita",
      "Narasi"
    ],
    "examples": [
      [
        "その映画は誰も予想しなかった結末を迎えた。",
        "そのえいがはだれもよそうしなかったけつまつをむかえた。",
        "Film itu berakhir dengan kesudahan yang tidak diperkirakan siapa pun."
      ],
      [
        "長い交渉の結末は、双方にとって満足できるものだった。",
        "ながいこうしょうのけつまつは、そうほうにとってまんぞくできるものだった。",
        "Hasil akhir negosiasi panjang itu memuaskan kedua pihak。"
      ]
    ]
  },
  "そそる": {
    "word": "そそる",
    "reading": "そそる",
    "meaning": "membangkitkan; menggugah minat/selera",
    "explanation": "Menimbulkan atau membangkitkan perasaan seperti minat, rasa ingin tahu, selera makan, atau keinginan.",
    "nuance": "Sering dipakai dalam 食欲をそそる・興味をそそる・好奇心をそそる. Objeknya berupa dorongan atau perasaan.",
    "contexts": [
      "Percakapan",
      "Media",
      "Deskripsi"
    ],
    "examples": [
      [
        "店先から食欲をそそる香りが漂ってきた。",
        "みせさきからしょくよくをそそるかおりがただよってきた。",
        "Aroma yang menggugah selera tercium dari depan toko."
      ],
      [
        "その記事は読者の好奇心をそそる内容だった。",
        "そのきじはどくしゃのこうきしんをそそるないようだった。",
        "Artikel itu membangkitkan rasa ingin tahu pembaca。"
      ]
    ]
  },
  "遮断": {
    "word": "遮断",
    "reading": "しゃだん",
    "meaning": "pemutusan; penghalangan; isolasi",
    "explanation": "Menghentikan atau memisahkan aliran, hubungan, akses, komunikasi, atau jalur agar tidak diteruskan.",
    "nuance": "Dipakai dalam 通信を遮断する dan 道路を遮断する. Lebih teknis dan tegas daripada 止める; menunjukkan pemisahan akses secara jelas.",
    "contexts": [
      "Teknologi",
      "Berita",
      "Infrastruktur"
    ],
    "examples": [
      [
        "事故のため、道路の一部が遮断された。",
        "じこのため、どうろのいちぶがしゃだんされた。",
        "Sebagian jalan ditutup akibat kecelakaan."
      ],
      [
        "個人情報への不正なアクセスを遮断する仕組みが必要だ。",
        "こじんじょうほうへのふせいなあくせすをしゃだんするしくみがひつようだ。",
        "Diperlukan sistem untuk memblokir akses ilegal ke informasi pribadi。"
      ]
    ]
  },
  "要請": {
    "word": "要請",
    "reading": "ようせい",
    "meaning": "permintaan resmi; permohonan",
    "explanation": "Meminta pihak lain melakukan sesuatu secara resmi karena kebutuhan atau keadaan tertentu.",
    "nuance": "Lebih formal daripada 依頼; sering dipakai pemerintah/lembaga: 支援を要請する, 協力を要請する. Bobot resminya lebih kuat.",
    "contexts": [
      "Berita",
      "Politik",
      "Administrasi"
    ],
    "examples": [
      [
        "自治体は国に財政支援を要請した。",
        "じちたいはくににざいせいしえんをようせいした。",
        "Pemerintah daerah meminta dukungan keuangan kepada pemerintah pusat."
      ],
      [
        "警察は住民に情報提供を要請している。",
        "けいさつはじゅうみんにじょうほうていきょうをようせいしている。",
        "Polisi meminta warga memberikan informasi。"
      ]
    ]
  },
  "ぎこちない": {
    "word": "ぎこちない",
    "reading": "ぎこちない",
    "meaning": "kaku; canggung; tidak luwes",
    "explanation": "Menggambarkan gerakan, ucapan, atau hubungan yang tidak lancar dan tampak kurang alami.",
    "nuance": "Bisa merujuk pada gerak tubuh maupun interaksi: ぎこちない動き・会話. Sering terjadi karena gugup atau belum terbiasa.",
    "contexts": [
      "Percakapan",
      "Sosial",
      "Narasi"
    ],
    "examples": [
      [
        "緊張して、彼の動きはぎこちなかった。",
        "きんちょうして、かれのうごきはぎこちなかった。",
        "Karena gugup, gerakannya terlihat kaku."
      ],
      [
        "久しぶりに会った二人の会話は少しぎこちなかった。",
        "ひさしぶりにあったふたりのかいわはすこしぎこちなかった。",
        "Percakapan dua orang yang lama tak bertemu terasa canggung。"
      ]
    ]
  },
  "断じて": {
    "word": "断じて",
    "reading": "だんじて",
    "meaning": "sama sekali tidak; dengan tegas",
    "explanation": "Menegaskan penolakan atau keyakinan dengan sangat kuat, biasanya dalam kalimat negatif.",
    "nuance": "Umumnya bersama bentuk negatif: 断じて許さない・断じて違う. Lebih tegas dan formal daripada 絶対に.",
    "contexts": [
      "Formal",
      "Berita",
      "Pidato"
    ],
    "examples": [
      [
        "私はそのような行為を断じて許さない。",
        "わたしはそのようなこういをだんじてゆるさない。",
        "Saya sama sekali tidak akan membiarkan tindakan seperti itu."
      ],
      [
        "これは断じて偶然ではない。",
        "これはだんじてぐうぜんではない。",
        "Ini sama sekali bukan kebetulan。"
      ]
    ]
  },
  "均等": {
    "word": "均等",
    "reading": "きんとう",
    "meaning": "merata; sama rata; seimbang",
    "explanation": "Membagi atau menyusun sesuatu sehingga jumlah, ukuran, atau tingkatnya sama pada setiap bagian.",
    "nuance": "Dipakai dalam 均等に分ける dan 均等な機会. Menekankan kesamaan distribusi, sedangkan 公平 lebih menekankan keadilan perlakuan.",
    "contexts": [
      "Administrasi",
      "Pendidikan",
      "Bisnis"
    ],
    "examples": [
      [
        "利益は参加者全員に均等に分配された。",
        "りえきはさんかしゃぜんいんにきんとうにぶんぱいされた。",
        "Keuntungan dibagikan merata kepada seluruh peserta."
      ],
      [
        "すべての子どもに均等な教育の機会を与えるべきだ。",
        "すべてのこどもにきんとうなきょういくのきかいをあたえるべきだ。",
        "Kesempatan pendidikan setara harus diberikan kepada semua anak。"
      ]
    ]
  },
  "リタイア": {
    "word": "リタイア",
    "reading": "りたいあ",
    "meaning": "pensiun; mundur; berhenti berpartisipasi",
    "explanation": "Menghentikan partisipasi dalam pekerjaan, kompetisi, atau aktivitas tertentu.",
    "nuance": "Dalam olahraga berarti mundur dari perlombaan; dalam pekerjaan dapat berarti pensiun. Makna ditentukan konteks dan tidak selalu soal usia lanjut.",
    "contexts": [
      "Olahraga",
      "Pekerjaan",
      "Percakapan"
    ],
    "examples": [
      [
        "けがのため、選手は大会をリタイアした。",
        "けがのため、せんしゅはたいかいをりたいあした。",
        "Karena cedera, atlet itu mengundurkan diri dari turnamen."
      ],
      [
        "父は六十歳で会社をリタイアした。",
        "ちちはろくじゅっさいでかいしゃをりたいあした。",
        "Ayah pensiun dari perusahaan pada usia enam puluh tahun。"
      ]
    ]
  },
  "押収": {
    "word": "押収",
    "reading": "おうしゅう",
    "meaning": "penyitaan oleh pihak berwenang",
    "explanation": "Mengambil dan menyita barang sebagai bagian dari proses hukum atau penyelidikan.",
    "nuance": "Sering muncul dalam berita hukum: 証拠品を押収する. Lebih khusus daripada 没収, yang dapat berarti perampasan sebagai hukuman.",
    "contexts": [
      "Hukum",
      "Berita",
      "Kriminal"
    ],
    "examples": [
      [
        "警察は倉庫から大量の偽造品を押収した。",
        "けいさつはそうこからたいりょうのぎぞうひんをおうしゅうした。",
        "Polisi menyita banyak barang palsu dari gudang."
      ],
      [
        "捜査の結果、関連する書類が押収された。",
        "そうさのけっか、かんれんするしょるいがおうしゅうされた。",
        "Sebagai hasil penyelidikan, dokumen terkait disita。"
      ]
    ]
  },
  "望ましい": {
    "word": "望ましい",
    "reading": "のぞましい",
    "meaning": "diinginkan; sebaiknya; ideal",
    "explanation": "Menunjukkan keadaan atau tindakan yang dianggap baik, tepat, atau diharapkan.",
    "nuance": "Lebih formal daripada いい; sering dalam pedoman: 望ましい結果・対応. Tidak selalu wajib, melainkan kondisi yang dinilai paling baik.",
    "contexts": [
      "Akademik",
      "Formal",
      "Administrasi"
    ],
    "examples": [
      [
        "申請書は期限の前日までに提出することが望ましい。",
        "しんせいしょはきげんのぜんじつまでにていしゅつすることがのぞましい。",
        "Sebaiknya formulir diajukan paling lambat sehari sebelum tenggat."
      ],
      [
        "子どもの意見も尊重することが望ましい。",
        "こどものいけんもそんちょうすることがのぞましい。",
        "Sebaiknya pendapat anak-anak juga dihormati。"
      ]
    ]
  },
  "本場": {
    "word": "本場",
    "reading": "ほんば",
    "meaning": "tempat asal; pusat asli",
    "explanation": "Tempat yang dikenal sebagai asal atau pusat suatu makanan, budaya, keterampilan, atau kegiatan.",
    "nuance": "本場の料理 dan 本場で学ぶ menekankan keaslian serta lingkungan asal, bukan sekadar tempat populer menjual produk.",
    "contexts": [
      "Budaya",
      "Pariwisata",
      "Sehari-hari"
    ],
    "examples": [
      [
        "京都で本場の日本料理を味わった。",
        "きょうとでほんばのにほんりょうりをあじわった。",
        "Saya mencicipi masakan Jepang autentik di Kyoto."
      ],
      [
        "彼は本場のフランスで料理を学んだ。",
        "かれはほんばのふらんすでりょうりをまなんだ。",
        "Ia belajar memasak di Prancis, tempat asal tradisi kuliner tersebut。"
      ]
    ]
  },
  "絶滅": {
    "word": "絶滅",
    "reading": "ぜつめつ",
    "meaning": "kepunahan",
    "explanation": "Keadaan ketika suatu spesies atau kelompok makhluk hidup tidak lagi memiliki individu yang tersisa.",
    "nuance": "Umum dalam 絶滅危惧種. Lebih kuat daripada 減少する karena menunjukkan hilangnya seluruh keberadaan spesies.",
    "contexts": [
      "Lingkungan",
      "Biologi",
      "Berita"
    ],
    "examples": [
      [
        "多くの動物が生息地の破壊によって絶滅の危機にある。",
        "おおくのどうぶつがせいそくちのはかいによってぜつめつのききにある。",
        "Banyak hewan terancam punah akibat kerusakan habitat."
      ],
      [
        "この島では、かつて固有の鳥が絶滅した。",
        "このしまでは、かつてこゆうのとりがぜつめつした。",
        "Di pulau ini, burung endemik pernah mengalami kepunahan。"
      ]
    ]
  },
  "素早い": {
    "word": "素早い",
    "reading": "すばやい",
    "meaning": "cepat; tangkas; gesit",
    "explanation": "Melakukan gerakan atau tindakan dengan cepat tanpa banyak keterlambatan.",
    "nuance": "Menekankan kecepatan respons: 素早い判断・素早く動く. Berbeda dari 速い yang umum; 素早い memberi kesan sigap.",
    "contexts": [
      "Olahraga",
      "Sehari-hari",
      "Berita"
    ],
    "examples": [
      [
        "彼は素早い判断で問題を解決した。",
        "かれはすばやいはんだんでもんだいをかいけつした。",
        "Ia menyelesaikan masalah dengan keputusan cepat dan tepat."
      ],
      [
        "猫は物音に反応して素早く隠れた。",
        "ねこはものおとにはんのうしてすばやくかくれた。",
        "Kucing itu bereaksi terhadap suara dan segera bersembunyi。"
      ]
    ]
  },
  "露骨": {
    "word": "露骨",
    "reading": "ろこつ",
    "meaning": "terang-terangan; mencolok",
    "explanation": "Menunjukkan sikap, maksud, atau perasaan dengan jelas tanpa berusaha menyembunyikannya.",
    "nuance": "Biasanya negatif: 露骨な態度, 露骨に嫌がる. Dapat menyiratkan sesuatu terlalu blak-blakan atau tidak menjaga perasaan orang lain.",
    "contexts": [
      "Sosial",
      "Berita",
      "Sastra"
    ],
    "examples": [
      [
        "彼は不満を露骨に顔に出した。",
        "かれはふまんをろこつにかおにだした。",
        "Ia menunjukkan ketidakpuasannya secara terang-terangan melalui wajah."
      ],
      [
        "露骨な宣伝ばかりでは、客の信頼を失う。",
        "ろこつなせんでんばかりでは、きゃくのしんらいをうしなう。",
        "Promosi yang terlalu mencolok dapat menghilangkan kepercayaan pelanggan。"
      ]
    ]
  },
  "交付": {
    "word": "交付",
    "reading": "こうふ",
    "meaning": "penerbitan; penyerahan resmi",
    "explanation": "Memberikan atau menerbitkan sesuatu secara resmi kepada pihak yang berhak menerimanya.",
    "nuance": "Sering untuk dokumen dan dana: 証明書を交付する, 補助金を交付する. Lebih resmi daripada 渡す dan lazim dalam administrasi.",
    "contexts": [
      "Administrasi",
      "Hukum",
      "Formal"
    ],
    "examples": [
      [
        "市役所で住民票の写しが交付された。",
        "しやくしょでじゅうみんひょうのうつしがこうふされた。",
        "Salinan kartu penduduk diterbitkan di kantor pemerintah kota."
      ],
      [
        "対象者には補助金が交付される。",
        "たいしょうしゃにはほじょきんがこうふされる。",
        "Dana bantuan diberikan kepada pihak yang memenuhi syarat。"
      ]
    ]
  },
  "頑な": {
    "word": "頑な",
    "reading": "かたくな",
    "meaning": "keras kepala; bersikeras",
    "explanation": "Mempertahankan pendapat atau sikap dengan kuat meskipun ada penjelasan atau ajakan untuk berubah.",
    "nuance": "Sering bernuansa negatif: 頑なに拒む・頑なな態度. Menekankan sikap tertutup terhadap perubahan atau kompromi.",
    "contexts": [
      "Sosial",
      "Sastra",
      "Berita"
    ],
    "examples": [
      [
        "彼は周囲の助言を頑なに拒み続けた。",
        "かれはしゅういのじょげんをかたくなにこばみつづけた。",
        "Ia terus menolak saran orang sekitarnya dengan keras kepala."
      ],
      [
        "頑なな態度を改め、話し合いに応じた。",
        "かたくななたいどをあらため、はなしあいにおうじた。",
        "Ia mengubah sikap keras kepalanya dan bersedia berdiskusi。"
      ]
    ]
  },
  "懐く": {
    "word": "懐く",
    "reading": "なつく",
    "meaning": "menjadi akrab; merasa dekat",
    "explanation": "Menunjukkan bahwa seseorang atau hewan mulai merasa akrab, percaya, dan nyaman terhadap orang tertentu.",
    "nuance": "Sering untuk anak kecil atau hewan: 子犬が人に懐く. 懐かしい berbeda makna, yaitu membangkitkan kenangan.",
    "contexts": [
      "Sehari-hari",
      "Hewan",
      "Narasi"
    ],
    "examples": [
      [
        "保護された子猫は、世話をする人によく懐いた。",
        "ほごされたこねこは、せわをするひとによくなついた。",
        "Anak kucing yang diselamatkan menjadi akrab dengan perawatnya."
      ],
      [
        "彼は子どもたちに懐かれている。",
        "かれはこどもたちになつかれている。",
        "Ia disukai dan mudah didekati anak-anak。"
      ]
    ]
  },
  "もはや": {
    "word": "もはや",
    "reading": "もはや",
    "meaning": "kini sudah; tidak lagi",
    "explanation": "Menunjukkan keadaan telah berubah sampai pada titik tertentu, sering dengan kesan sesuatu tidak dapat dipertahankan lagi.",
    "nuance": "Cenderung formal/tulisan dan sering berpasangan dengan bentuk negatif: もはや戻れない. Lebih kuat daripada もう untuk perubahan besar atau final.",
    "contexts": [
      "Berita",
      "Sastra",
      "Formal"
    ],
    "examples": [
      [
        "この問題は、もはや一人で解決できる段階ではない。",
        "このもんだいは、もはやひとりでかいけつできるだんかいではない。",
        "Masalah ini sudah bukan lagi sesuatu yang dapat diselesaikan seorang diri."
      ],
      [
        "古い方法はもはや通用しなくなっている。",
        "ふるいほうほうはもはやつうようしなくなっている。",
        "Cara lama kini sudah tidak berlaku lagi。"
      ]
    ]
  },
  "円滑": {
    "word": "円滑",
    "reading": "えんかつ",
    "meaning": "lancar; mulus; tanpa hambatan",
    "explanation": "Berlangsung dengan baik tanpa banyak hambatan, konflik, atau gangguan.",
    "nuance": "Dipakai dalam 円滑に進む・円滑な運営・円滑な関係. Bernuansa formal dan menekankan proses yang harmonis, bukan sekadar cepat.",
    "contexts": [
      "Bisnis",
      "Administrasi",
      "Sosial"
    ],
    "examples": [
      [
        "事前の準備によって会議は円滑に進んだ。",
        "じぜんのじゅんびによってかいぎはえんかつにすすんだ。",
        "Berkat persiapan, rapat berjalan lancar."
      ],
      [
        "円滑なコミュニケーションはチームの成果につながる。",
        "えんかつなこみゅにけーしょんはちーむのせいかにつながる。",
        "Komunikasi lancar menghasilkan kinerja tim yang baik。"
      ]
    ]
  },
  "怠る": {
    "word": "怠る",
    "reading": "おこたる",
    "meaning": "melalaikan; mengabaikan",
    "explanation": "Tidak melakukan tugas atau tindakan yang seharusnya dilakukan dengan cukup hati-hati atau teratur.",
    "nuance": "Bernada negatif dalam 注意を怠る・努力を怠る・確認を怠る. Dapat berarti lengah pada tanggung jawab tertentu, bukan hanya malas secara umum.",
    "contexts": [
      "Pekerjaan",
      "Berita",
      "Formal"
    ],
    "examples": [
      [
        "安全確認を怠ると、大きな事故につながる。",
        "あんぜんかくにんをおこたると、おおきなじこにつながる。",
        "Mengabaikan pemeriksaan keselamatan dapat menyebabkan kecelakaan besar."
      ],
      [
        "忙しくても、日々の練習を怠ってはいけない。",
        "いそがしくても、ひびのれんしゅうをおこたってはいけない。",
        "Meskipun sibuk, kita tidak boleh melalaikan latihan harian。"
      ]
    ]
  },
  "失脚": {
    "word": "失脚",
    "reading": "しっきゃく",
    "meaning": "kejatuhan jabatan; kehilangan kedudukan",
    "explanation": "Kehilangan posisi atau kekuasaan, terutama jabatan penting dalam politik atau organisasi.",
    "nuance": "Lebih kuat daripada 辞任 karena menekankan jatuhnya pengaruh/kedudukan, bukan hanya keputusan mengundurkan diri.",
    "contexts": [
      "Politik",
      "Berita",
      "Organisasi"
    ],
    "examples": [
      [
        "不祥事が明らかになり、彼は党内で失脚した。",
        "ふしょうじがあきらかになり、かれはとうないでしっきゃくした。",
        "Setelah skandal terungkap, ia kehilangan kedudukan di partai."
      ],
      [
        "長年権力を握っていた指導者が突然失脚した。",
        "ながねんけんりょくをにぎっていたしどうしゃがとつぜんしっきゃくした。",
        "Pemimpin yang lama berkuasa itu tiba-tiba jatuh dari kedudukannya。"
      ]
    ]
  },
  "実に": {
    "word": "実に",
    "reading": "じつに",
    "meaning": "sungguh; benar-benar; amat",
    "explanation": "Menegaskan bahwa sesuatu memiliki sifat atau tingkat tertentu, sering sebagai penilaian atau kekaguman.",
    "nuance": "Lebih bernuansa tulisan/pidato daripada 本当に dalam beberapa konteks: 実に興味深い. Dapat menyatakan kesan kuat atau penilaian.",
    "contexts": [
      "Percakapan",
      "Sastra",
      "Formal"
    ],
    "examples": [
      [
        "彼の説明は実に分かりやすかった。",
        "かれのせつめいはじつにわかりやすかった。",
        "Penjelasannya sungguh mudah dipahami."
      ],
      [
        "この地域の歴史は実に興味深い。",
        "このちいきのれきしはじつにきょうみぶかい。",
        "Sejarah wilayah ini benar-benar menarik。"
      ]
    ]
  },
  "要望": {
    "word": "要望",
    "reading": "ようぼう",
    "meaning": "permintaan; harapan",
    "explanation": "Hal yang diminta atau diharapkan seseorang/kelompok agar dipenuhi pihak lain.",
    "nuance": "Umum dalam pelayanan: 要望に応える・要望を出す. Lebih menekankan kebutuhan peminta, sedangkan 要請 terasa lebih resmi dan meminta tindakan.",
    "contexts": [
      "Bisnis",
      "Administrasi",
      "Sosial"
    ],
    "examples": [
      [
        "利用者から多くの要望が寄せられた。",
        "りようしゃからおおくのようぼうがよせられた。",
        "Banyak permintaan disampaikan para pengguna."
      ],
      [
        "学生の要望を受けて、図書館の開館時間が延長された。",
        "がくせいのようぼうをうけて、としょかんのかいかんじかんがえんちょうされた。",
        "Menanggapi permintaan mahasiswa, jam buka perpustakaan diperpanjang。"
      ]
    ]
  },
  "覆す": {
    "word": "覆す",
    "reading": "くつがえす",
    "meaning": "membalikkan; menggugurkan",
    "explanation": "Mengubah keadaan/penilaian yang ada atau membuktikan pendapat, keputusan, maupun teori sebelumnya tidak benar.",
    "nuance": "Sering dalam 常識を覆す・判決を覆す・予想を覆す. Menunjukkan perubahan besar yang membalikkan anggapan sebelumnya.",
    "contexts": [
      "Berita",
      "Akademik",
      "Hukum"
    ],
    "examples": [
      [
        "新しい証拠がこれまでの定説を覆した。",
        "あたらしいしょうこがこれまでのていせつをくつがえした。",
        "Bukti baru menggugurkan teori yang selama ini diterima."
      ],
      [
        "最後の得点が試合の予想を覆した。",
        "さいごのとくてんがしあいのよそうをくつがえした。",
        "Poin terakhir membalikkan prediksi pertandingan。"
      ]
    ]
  },
  "繁盛": {
    "word": "繁盛",
    "reading": "はんじょう",
    "meaning": "ramai dan laris; makmur (usaha)",
    "explanation": "Keadaan ketika toko, restoran, atau usaha memiliki banyak pelanggan dan berjalan baik.",
    "nuance": "Biasanya digunakan untuk bisnis: 店が繁盛する・商売繁盛. Bukan sekadar tempat ramai, tetapi usaha yang hidup dan menguntungkan.",
    "contexts": [
      "Bisnis",
      "Sehari-hari",
      "Budaya"
    ],
    "examples": [
      [
        "駅前の新しい食堂はいつも繁盛している。",
        "えきまえのあたらしいしょくどうはいつもはんじょうしている。",
        "Kedai makan baru di depan stasiun selalu ramai pelanggan."
      ],
      [
        "商店街では商売繁盛を願う祭りが開かれた。",
        "しょうてんがいではしょうばいはんじょうをねがうまつりがひらかれた。",
        "Festival untuk mendoakan kelancaran usaha diadakan di kawasan pertokoan。"
      ]
    ]
  },
  "くじける": {
    "word": "くじける",
    "reading": "くじける",
    "meaning": "patah semangat; kehilangan tekad",
    "explanation": "Kehilangan semangat atau tekad karena kesulitan, kegagalan, atau tekanan.",
    "nuance": "Sering dalam 気持ちがくじける・失敗にくじけない. Menekankan semangat yang melemah, bukan cedera fisik.",
    "contexts": [
      "Sosial",
      "Pendidikan",
      "Narasi"
    ],
    "examples": [
      [
        "何度失敗しても、彼は決してくじけなかった。",
        "なんどしっぱいしても、かれはけっしてくじけなかった。",
        "Betapa pun sering gagal, ia tidak pernah patah semangat."
      ],
      [
        "厳しい批判にくじけそうになったが、努力を続けた。",
        "きびしいひはんにくじけそうになったが、どりょくをつづけた。",
        "Ia hampir patah semangat karena kritik keras, tetapi tetap berusaha。"
      ]
    ]
  },
  "ひたむき": {
    "word": "ひたむき",
    "reading": "ひたむき",
    "meaning": "tekun; sungguh-sungguh; sepenuh hati",
    "explanation": "Mencurahkan perhatian dan usaha secara konsisten pada satu tujuan tanpa mudah teralihkan.",
    "nuance": "Bernuansa positif dalam ひたむきな努力. Mengagumi ketulusan dan kesungguhan, bukan hanya kerja keras untuk hasil cepat.",
    "contexts": [
      "Pendidikan",
      "Olahraga",
      "Sastra"
    ],
    "examples": [
      [
        "彼女は夢に向かってひたむきに努力している。",
        "かのじょはゆめにむかってひたむきにどりょくしている。",
        "Ia berusaha sepenuh hati untuk meraih impiannya."
      ],
      [
        "選手のひたむきな姿勢が多くの人に感動を与えた。",
        "せんしゅのひたむきなしせいがおおくのひとにかんどうをあたえた。",
        "Sikap atlet yang tekun menyentuh banyak orang。"
      ]
    ]
  },
  "互角": {
    "word": "互角",
    "reading": "ごかく",
    "meaning": "seimbang; setara; sama kuat",
    "explanation": "Dua pihak memiliki kemampuan atau kekuatan hampir sama sehingga tidak ada yang jelas unggul.",
    "nuance": "Sering dalam 互角の勝負・互角に戦う. Menekankan kesetaraan kekuatan, bukan kesamaan dalam semua hal.",
    "contexts": [
      "Olahraga",
      "Diskusi",
      "Berita"
    ],
    "examples": [
      [
        "両チームは互角の戦いを繰り広げた。",
        "りょうちーむはごかくのたたかいをくりひろげた。",
        "Kedua tim menyajikan pertandingan seimbang."
      ],
      [
        "経験では相手と互角だが、準備では負けていない。",
        "けいけんではあいてとごかくだが、じゅんびではまけていない。",
        "Dari segi pengalaman saya setara dengan lawan, tetapi dalam persiapan tidak kalah。"
      ]
    ]
  },
  "簡素": {
    "word": "簡素",
    "reading": "かんそ",
    "meaning": "sederhana; tidak berlebihan",
    "explanation": "Menggambarkan bentuk, desain, atau fasilitas yang sederhana dan tidak banyak hiasan.",
    "nuance": "Sering untuk desain/tata cara: 簡素な服装・簡素な式. 質素 lebih menekankan gaya hidup hemat, sedangkan 簡素 menyoroti bentuk yang tidak rumit.",
    "contexts": [
      "Desain",
      "Budaya",
      "Sehari-hari"
    ],
    "examples": [
      [
        "式典は簡素ながら心のこもったものだった。",
        "しきてんはかんそながらこころのこもったものだった。",
        "Upacara itu sederhana, tetapi penuh ketulusan."
      ],
      [
        "彼は簡素な家具で部屋を整えている。",
        "かれはかんそなかぐでへやをととのえている。",
        "Ia menata kamar dengan furnitur sederhana。"
      ]
    ]
  },
  "解明": {
    "word": "解明",
    "reading": "かいめい",
    "meaning": "pengungkapan; pemecahan hingga jelas",
    "explanation": "Meneliti dan menjelaskan hal yang belum diketahui atau rumit hingga penyebab/strukturnya jelas.",
    "nuance": "Dipakai untuk misteri, mekanisme, atau penyebab: 原因を解明する. Lebih analitis daripada 説明する karena ada proses menemukan hal yang belum jelas.",
    "contexts": [
      "Akademik",
      "Ilmu pengetahuan",
      "Berita"
    ],
    "examples": [
      [
        "研究チームは病気の原因を解明しようとしている。",
        "けんきゅうちーむはびょうきのげんいんをかいめいしようとしている。",
        "Tim peneliti berusaha mengungkap penyebab penyakit."
      ],
      [
        "事件の真相はまだ完全には解明されていない。",
        "じけんのしんそうはまだかんぜんにはかいめいされていない。",
        "Kebenaran kasus itu belum sepenuhnya terungkap。"
      ]
    ]
  },
  "ほほえましい": {
    "word": "ほほえましい",
    "reading": "ほほえましい",
    "meaning": "menghangatkan hati; menyenangkan dilihat",
    "explanation": "Menggambarkan pemandangan atau tindakan yang membuat tersenyum karena terasa tulus, polos, atau menyenangkan.",
    "nuance": "Bernuansa positif dan lembut, sering untuk interaksi keluarga, anak-anak, atau tindakan kecil; bukan sekadar 面白い.",
    "contexts": [
      "Sastra",
      "Sosial",
      "Deskripsi"
    ],
    "examples": [
      [
        "祖父と孫が一緒に遊ぶ姿はほほえましい。",
        "そふとまごがいっしょにあそぶすがたはほほえましい。",
        "Pemandangan kakek dan cucu bermain bersama menghangatkan hati."
      ],
      [
        "新人同士が助け合う様子はとてもほほえましかった。",
        "しんじんどうしがたすけあうようすはとてもほほえましかった。",
        "Melihat para anggota baru saling membantu terasa menyenangkan。"
      ]
    ]
  },
  "目安": {
    "word": "目安",
    "reading": "めやす",
    "meaning": "patokan; tolok ukur; perkiraan",
    "explanation": "Standar atau angka acuan untuk memperkirakan, menilai, atau menentukan sesuatu.",
    "nuance": "Tidak selalu batas mutlak. 目安 sering bersifat panduan, sedangkan 基準 dapat lebih resmi atau mengikat.",
    "contexts": [
      "Pendidikan",
      "Administrasi",
      "Sehari-hari"
    ],
    "examples": [
      [
        "完成までの期間は三か月を目安にしてください。",
        "かんせいまでのきかんはさんかげつをめやすにしてください。",
        "Gunakan tiga bulan sebagai perkiraan waktu penyelesaian."
      ],
      [
        "この表は一日の必要量を知る目安になる。",
        "このひょうはいちにちのひつようりょうをしるめやすになる。",
        "Tabel ini menjadi patokan untuk mengetahui kebutuhan harian。"
      ]
    ]
  },
  "様相": {
    "word": "様相",
    "reading": "ようそう",
    "meaning": "keadaan; rupa; situasi yang tampak",
    "explanation": "Bentuk atau keadaan suatu hal sebagaimana terlihat pada waktu tertentu, terutama situasi dengan banyak aspek.",
    "nuance": "Formal dan lazim dalam analisis: 様相を呈する. Menyoroti gambaran situasi secara keseluruhan, bukan satu detail saja.",
    "contexts": [
      "Berita",
      "Akademik",
      "Analisis"
    ],
    "examples": [
      [
        "交渉は一週間で新たな様相を呈した。",
        "こうしょうはいっしゅうかんであらたなようそうをていした。",
        "Negosiasi menunjukkan situasi baru dalam satu minggu."
      ],
      [
        "都市の景観は再開発によって大きく様相を変えた。",
        "としのけいかんはさいかいはつによっておおきくようそうをかえた。",
        "Pemandangan kota berubah besar akibat pembangunan kembali。"
      ]
    ]
  },
  "交える": {
    "word": "交える",
    "reading": "まじえる",
    "meaning": "mencampurkan; menyertakan; bertukar",
    "explanation": "Memasukkan unsur ke dalam hal lain, atau melakukan interaksi seperti bertukar pendapat.",
    "nuance": "Sering dalam 議論を交える・言葉を交える・冗談を交える. Tidak selalu mencampur benda fisik; bisa menyatakan interaksi.",
    "contexts": [
      "Diskusi",
      "Bisnis",
      "Sosial"
    ],
    "examples": [
      [
        "専門家を交えて、今後の方針を話し合った。",
        "せんもんかをまじえて、こんごのほうしんをはなしあった。",
        "Kami berdiskusi tentang kebijakan dengan melibatkan para ahli."
      ],
      [
        "彼とは冗談を交えながら楽しく話した。",
        "かれとはじょうだんをまじえながらたのしくはなした。",
        "Saya berbincang dengannya sambil menyelipkan candaan。"
      ]
    ]
  },
  "作動": {
    "word": "作動",
    "reading": "さどう",
    "meaning": "beroperasi; mulai bekerja (mesin/sistem)",
    "explanation": "Keadaan ketika mesin, alat, atau sistem mulai bekerja sesuai fungsi yang dirancang.",
    "nuance": "Istilah teknis: センサーが作動する・装置を作動させる. Berbeda dari 動く yang umum; 作動 menekankan mekanisme berfungsi.",
    "contexts": [
      "Teknologi",
      "Industri",
      "Sehari-hari"
    ],
    "examples": [
      [
        "火災を感知すると、警報装置が自動的に作動する。",
        "かさいをかんちすると、けいほうそうちがじどうてきにさどうする。",
        "Saat mendeteksi kebakaran, alarm bekerja otomatis."
      ],
      [
        "点検中は機械を作動させないでください。",
        "てんけんちゅうはきかいをさどうさせないでください。",
        "Jangan mengoperasikan mesin selama pemeriksaan berlangsung。"
      ]
    ]
  },
  "しぶとい": {
    "word": "しぶとい",
    "reading": "しぶとい",
    "meaning": "ulet; gigih; sulit dikalahkan/disingkirkan",
    "explanation": "Tetap bertahan dan tidak mudah menyerah meskipun menghadapi kesulitan atau tekanan.",
    "nuance": "Bisa positif untuk kegigihan, tetapi negatif untuk sesuatu yang sulit hilang atau orang keras kepala. Lebih kuat daripada 粘り強い dalam kesan tidak mudah tumbang.",
    "contexts": [
      "Olahraga",
      "Sosial",
      "Percakapan"
    ],
    "examples": [
      [
        "彼はしぶとく努力を続け、ついに目標を達成した。",
        "かれはしぶとくどりょくをつづけ、ついにもくひょうをたっせいした。",
        "Ia terus berusaha gigih dan akhirnya mencapai tujuan."
      ],
      [
        "この雑草はしぶとく、何度抜いても生えてくる。",
        "このざっそうはしぶとく、なんどぬいてもはえてくる。",
        "Gulma ini sulit diberantas; dicabut berkali-kali pun tumbuh lagi。"
      ]
    ]
  },
  "備え付ける": {
    "word": "備え付ける",
    "reading": "そなえつける",
    "meaning": "memasang; menyediakan sebagai perlengkapan tetap",
    "explanation": "Menempatkan peralatan di suatu tempat agar selalu tersedia dan siap digunakan.",
    "nuance": "Dipakai untuk fasilitas tetap: エアコンを備え付ける・備え付けの家具. Bukan sekadar membawa benda sementara.",
    "contexts": [
      "Fasilitas",
      "Sehari-hari",
      "Bisnis"
    ],
    "examples": [
      [
        "各教室にプロジェクターが備え付けられている。",
        "かくきょうしつにぷろじぇくたーがそなえつけられている。",
        "Setiap kelas dilengkapi proyektor."
      ],
      [
        "ホテルの部屋には金庫が備え付けてある。",
        "ほてるのへやにはきんこがそなえつけてある。",
        "Kamar hotel dilengkapi brankas。"
      ]
    ]
  },
  "基調": {
    "word": "基調",
    "reading": "きちょう",
    "meaning": "nada dasar; kecenderungan utama",
    "explanation": "Dasar atau karakter utama yang menjadi landasan keseluruhan gaya, suasana, kebijakan, atau tren.",
    "nuance": "Dipakai dalam 基調色・上昇基調・基調講演. Menunjukkan unsur pokok yang mendasari sesuatu walaupun ada variasi.",
    "contexts": [
      "Berita",
      "Ekonomi",
      "Desain"
    ],
    "examples": [
      [
        "会議では環境保護を基調とした提案が示された。",
        "かいぎではかんきょうほごをきちょうとしたていあんがしめされた。",
        "Dalam rapat disampaikan usulan berlandaskan perlindungan lingkungan."
      ],
      [
        "今年の市場は回復基調にある。",
        "ことしのしじょうはかいふくきちょうにある。",
        "Pasar tahun ini berada dalam kecenderungan pemulihan。"
      ]
    ]
  },
  "かさばる": {
    "word": "かさばる",
    "reading": "かさばる",
    "meaning": "memakan tempat; besar dan sulit dibawa",
    "explanation": "Barang memiliki volume besar sehingga membutuhkan banyak ruang penyimpanan atau sulit dibawa.",
    "nuance": "Tidak selalu berarti berat; barang ringan pun dapat かさばる jika volumenya besar.",
    "contexts": [
      "Sehari-hari",
      "Perjalanan",
      "Logistik"
    ],
    "examples": [
      [
        "冬服は厚くて、かさばるので収納に困る。",
        "ふゆふくはあつくて、かさばるのでしゅうのうにこまる。",
        "Pakaian musim dingin tebal dan memakan tempat."
      ],
      [
        "荷物がかさばらないように、服を小さくたたんだ。",
        "にもつがかさばらないように、ふくをちいさくたたんだ。",
        "Saya melipat pakaian kecil-kecil agar bagasi tidak memakan tempat。"
      ]
    ]
  },
  "交錯": {
    "word": "交錯",
    "reading": "こうさく",
    "meaning": "bercampur dan bersilangan; simpang siur",
    "explanation": "Beberapa hal, perasaan, pikiran, atau jalur saling bertemu sehingga menjadi rumit.",
    "nuance": "Sering untuk perasaan: 期待と不安が交錯する. Menunjukkan unsur yang saling bersilang, bukan sekadar tercampur rata.",
    "contexts": [
      "Sastra",
      "Berita",
      "Analisis"
    ],
    "examples": [
      [
        "発表を前に、期待と不安が交錯している。",
        "はっぴょうをまえに、きたいとふあんがこうさくしている。",
        "Menjelang pengumuman, harapan dan kecemasan bercampur aduk."
      ],
      [
        "交差点では車と自転車の動きが複雑に交錯する。",
        "こうさてんではくるまとじてんしゃのうごきがふくざつにこうさくする。",
        "Di persimpangan, pergerakan mobil dan sepeda saling bersilangan dengan rumit。"
      ]
    ]
  },
  "巧み": {
    "word": "巧み",
    "reading": "たくみ",
    "meaning": "terampil; mahir; cerdik",
    "explanation": "Memiliki keterampilan tinggi atau menggunakan cara cerdas dan efektif untuk mencapai tujuan.",
    "nuance": "Dapat menggambarkan keahlian maupun strategi: 巧みな技・巧みに操る. Positif untuk keterampilan, tetapi dapat terasa licik dalam konteks manipulasi.",
    "contexts": [
      "Seni",
      "Pekerjaan",
      "Berita"
    ],
    "examples": [
      [
        "職人は巧みな技で美しい器を作り上げた。",
        "しょくにんはたくみなわざでうつくしいうつわをつくりあげた。",
        "Perajin menghasilkan wadah indah dengan keterampilan tinggi."
      ],
      [
        "彼女は巧みな話術で参加者を納得させた。",
        "かのじょはたくみなわじゅつでさんかしゃをなっとくさせた。",
        "Ia meyakinkan peserta dengan kemampuan berbicara yang cerdik。"
      ]
    ]
  },
  "配属": {
    "word": "配属",
    "reading": "はいぞく",
    "meaning": "penempatan; penugasan ke unit",
    "explanation": "Menempatkan seseorang ke departemen, divisi, tim, atau lokasi kerja dalam organisasi.",
    "nuance": "Khas perusahaan: 営業部に配属される. 配属 biasanya menyangkut penugasan orang, sedangkan 配置 juga dapat untuk benda.",
    "contexts": [
      "Pekerjaan",
      "Organisasi",
      "Administrasi"
    ],
    "examples": [
      [
        "新入社員は来月、営業部に配属される。",
        "しんにゅうしゃいんはらいげつ、えいぎょうぶにはいぞくされる。",
        "Karyawan baru ditempatkan di bagian penjualan bulan depan."
      ],
      [
        "希望とは異なる部署に配属された。",
        "きぼうとはことなるぶしょにはいぞくされた。",
        "Saya ditempatkan di departemen yang berbeda dari harapan saya。"
      ]
    ]
  },
  "乗り出す": {
    "word": "乗り出す",
    "reading": "のりだす",
    "meaning": "mulai turun tangan; terjun; mengambil inisiatif",
    "explanation": "Mulai terlibat aktif dalam kegiatan, usaha, atau penyelesaian masalah.",
    "nuance": "Sering dalam 解決に乗り出す・新事業に乗り出す. Secara literal juga berarti mencondongkan tubuh ke depan; kiasannya menunjukkan tindakan aktif.",
    "contexts": [
      "Berita",
      "Bisnis",
      "Sosial"
    ],
    "examples": [
      [
        "政府は物価対策に本格的に乗り出した。",
        "せいふはぶっかたいさくにほんかくてきにのりだした。",
        "Pemerintah mulai mengambil langkah serius untuk mengatasi harga barang."
      ],
      [
        "その企業は海外市場への進出に乗り出した。",
        "そのきぎょうはかいがいしじょうへのしんしゅつにのりだした。",
        "Perusahaan mulai terjun memasuki pasar luar negeri。"
      ]
    ]
  },
  "面識": {
    "word": "面識",
    "reading": "めんしき",
    "meaning": "pernah bertemu; kenal secara langsung",
    "explanation": "Keadaan ketika seseorang pernah bertemu orang lain secara langsung, meski belum tentu akrab.",
    "nuance": "Dipakai dalam 面識がある／ない. Lebih formal daripada 知り合い dan hanya menandakan pernah bertemu, bukan hubungan dekat.",
    "contexts": [
      "Formal",
      "Sosial",
      "Pekerjaan"
    ],
    "examples": [
      [
        "私はその教授とは一度も面識がない。",
        "わたしはそのきょうじゅとはいちどもめんしきがない。",
        "Saya belum pernah bertemu langsung dengan profesor itu."
      ],
      [
        "以前から面識のある担当者に相談した。",
        "いぜんからめんしきのあるたんとうしゃにそうだんした。",
        "Saya berkonsultasi dengan penanggung jawab yang pernah saya temui sebelumnya。"
      ]
    ]
  },
  "抜粋": {
    "word": "抜粋",
    "reading": "ばっすい",
    "meaning": "kutipan; petikan; mengambil bagian tertentu",
    "explanation": "Mengambil dan menyajikan bagian dari tulisan atau dokumen tanpa menyertakan keseluruhannya.",
    "nuance": "Umum dalam penelitian dan media: 本文から抜粋する. Menampilkan bagian yang dipilih dari sumber lebih panjang, bukan ringkasan yang ditulis ulang.",
    "contexts": [
      "Akademik",
      "Penerbitan",
      "Administrasi"
    ],
    "examples": [
      [
        "報告書から重要な部分を抜粋して資料にまとめた。",
        "ほうこくしょからじゅうようなぶぶんをばっすいしてしりょうにまとめた。",
        "Saya mengambil bagian penting laporan dan menyusunnya dalam bahan presentasi."
      ],
      [
        "以下は契約書の一部を抜粋したものです。",
        "いかはけいやくしょのいちぶをばっすいしたものです。",
        "Berikut kutipan dari sebagian isi kontrak。"
      ]
    ]
  },
  "心当たり": {
    "word": "心当たり",
    "reading": "こころあたり",
    "meaning": "dugaan; petunjuk; merasa tahu",
    "explanation": "Perkiraan bahwa seseorang mengetahui sesuatu, memiliki petunjuk, atau mungkin berkaitan dengan hal tertentu.",
    "nuance": "Sering dalam 心当たりがある／ない saat mencari penyebab, pelaku, atau benda hilang. Tidak menyatakan kepastian.",
    "contexts": [
      "Percakapan",
      "Berita",
      "Sehari-hari"
    ],
    "examples": [
      [
        "鍵をなくしたが、どこで落としたか心当たりがない。",
        "かぎをなくしたが、どこでおとしたかこころあたりがない。",
        "Saya kehilangan kunci, tetapi tidak punya petunjuk di mana menjatuhkannya."
      ],
      [
        "この件について何か心当たりはありませんか。",
        "このけんについてなにかこころあたりはありませんか。",
        "Apakah Anda punya dugaan atau petunjuk mengenai hal ini?"
      ]
    ]
  },
  "重複": {
    "word": "重複",
    "reading": "ちょうふく",
    "meaning": "duplikasi; tumpang tindih",
    "explanation": "Keadaan ketika hal sama muncul lebih dari sekali atau beberapa bagian memiliki isi yang bertindihan.",
    "nuance": "Dipakai dalam 重複する・重複を避ける・重複登録. Dapat dibaca じゅうふく juga, tetapi ちょうふく merupakan bacaan formal yang lazim.",
    "contexts": [
      "Administrasi",
      "Teknologi",
      "Akademik"
    ],
    "examples": [
      [
        "同じ内容が重複しているため、一つにまとめた。",
        "おなじないようがちょうふくしているため、ひとつにまとめた。",
        "Karena isi yang sama terduplikasi, saya menggabungkannya menjadi satu."
      ],
      [
        "申込者の情報に重複がないか確認してください。",
        "もうしこみしゃのじょうほうにちょうふくがないかかくにんしてください。",
        "Periksa apakah data pendaftar tercatat lebih dari sekali。"
      ]
    ]
  },
  "拠点": {
    "word": "拠点",
    "reading": "きょてん",
    "meaning": "pusat kegiatan; basis operasional",
    "explanation": "Tempat yang menjadi pusat untuk menjalankan kegiatan, operasi, penelitian, atau pengembangan.",
    "nuance": "Sering dalam 活動拠点・海外拠点・生産拠点. Lebih khusus dari 場所 karena menjadi basis suatu aktivitas.",
    "contexts": [
      "Bisnis",
      "Organisasi",
      "Berita"
    ],
    "examples": [
      [
        "大阪に新しい営業拠点を設けた。",
        "おおさかにあたらしいえいぎょうきょてんをもうけた。",
        "Perusahaan mendirikan pusat operasional penjualan baru di Osaka."
      ],
      [
        "大学は地域活動の拠点として施設を開放している。",
        "だいがくはちいきかつどうのきょてんとしてしせつをかいほうしている。",
        "Universitas membuka fasilitasnya sebagai pusat kegiatan masyarakat setempat。"
      ]
    ]
  },
  "真っ先": {
    "word": "真っ先",
    "reading": "まっさき",
    "meaning": "paling awal; paling pertama",
    "explanation": "Menunjukkan orang atau hal yang berada di urutan paling depan atau melakukan sesuatu lebih dahulu.",
    "nuance": "Sering dalam 真っ先に. Menekankan prioritas urutan/waktu, bukan sekadar cepat.",
    "contexts": [
      "Percakapan",
      "Narasi",
      "Berita"
    ],
    "examples": [
      [
        "知らせを聞いて、彼女は真っ先に現場へ向かった。",
        "しらせをきいて、かのじょはまっさきにげんばへむかった。",
        "Setelah mendengar kabar, ia menjadi orang pertama menuju lokasi."
      ],
      [
        "困ったとき、真っ先に相談するのは母だ。",
        "こまったとき、まっさきにそうだんするのはははだ。",
        "Saat kesulitan, ibu adalah orang pertama yang saya mintai nasihat。"
      ]
    ]
  },
  "緊密": {
    "word": "緊密",
    "reading": "きんみつ",
    "meaning": "erat; dekat; sangat rapat",
    "explanation": "Memiliki hubungan, komunikasi, atau kerja sama yang sangat dekat dan terkoordinasi.",
    "nuance": "Sering dalam 緊密な連携・緊密な関係. Lebih formal dari 親しい; menekankan koordinasi erat dan komunikasi berkelanjutan.",
    "contexts": [
      "Bisnis",
      "Politik",
      "Organisasi"
    ],
    "examples": [
      [
        "両社は緊密な協力関係を築いている。",
        "りょうしゃはきんみつなきょうりょくかんけいをきずいている。",
        "Kedua perusahaan membangun hubungan kerja sama erat."
      ],
      [
        "関係機関と緊密に連携して対応する必要がある。",
        "かんけいきかんときんみつにれんけいしてたいおうするひつようがある。",
        "Kita perlu menangani hal ini dengan berkoordinasi erat bersama lembaga terkait。"
      ]
    ]
  },
  "遂げる": {
    "word": "遂げる",
    "reading": "とげる",
    "meaning": "mencapai; menuntaskan; mengalami perubahan besar",
    "explanation": "Mencapai hasil atau menyelesaikan proses penting setelah melalui usaha dan waktu.",
    "nuance": "Sering dalam 成功を遂げる・進歩を遂げる・変貌を遂げる. Lebih formal dari 達成する dan menekankan pencapaian besar.",
    "contexts": [
      "Berita",
      "Akademik",
      "Sastra"
    ],
    "examples": [
      [
        "研究チームはついに目標を遂げた。",
        "けんきゅうちーむはついにもくひょうをとげた。",
        "Tim peneliti akhirnya mencapai tujuannya."
      ],
      [
        "町は十年の間に大きな発展を遂げた。",
        "まちはじゅうねんのあいだにおおきなはってんをとげた。",
        "Kota itu mengalami perkembangan besar selama sepuluh tahun。"
      ]
    ]
  },
  "うなだれる": {
    "word": "うなだれる",
    "reading": "うなだれる",
    "meaning": "menundukkan kepala; tertunduk lesu",
    "explanation": "Menundukkan kepala dan tubuh bagian atas karena sedih, kecewa, malu, atau kehilangan semangat.",
    "nuance": "Lebih visual daripada うつむく yang hanya berarti menunduk; dapat menyiratkan perasaan tertekan atau kecewa.",
    "contexts": [
      "Sastra",
      "Narasi",
      "Percakapan"
    ],
    "examples": [
      [
        "試合に負けた選手たちはうなだれていた。",
        "しあいにまけたせんしゅたちはうなだれていた。",
        "Para atlet yang kalah tampak tertunduk lesu."
      ],
      [
        "注意を受けた彼は、うなだれて席に戻った。",
        "ちゅういをうけたかれは、うなだれてせきにもどった。",
        "Setelah ditegur, ia kembali ke tempat duduk dengan kepala tertunduk。"
      ]
    ]
  },
  "昇進": {
    "word": "昇進",
    "reading": "しょうしん",
    "meaning": "kenaikan jabatan; promosi",
    "explanation": "Perpindahan ke posisi atau jabatan yang lebih tinggi dalam organisasi atau tempat kerja.",
    "nuance": "Umum dalam 昇進する・昇進試験. Berbeda dari 昇格 yang lebih luas; 昇進 biasanya berkaitan dengan jabatan seseorang.",
    "contexts": [
      "Pekerjaan",
      "Bisnis",
      "Sosial"
    ],
    "examples": [
      [
        "彼は入社から五年で課長に昇進した。",
        "かれはにゅうしゃからごねんでかちょうにしょうしんした。",
        "Lima tahun setelah masuk perusahaan, ia dipromosikan menjadi kepala seksi."
      ],
      [
        "昇進を目指して資格の勉強を始めた。",
        "しょうしんをめざしてしかくのべんきょうをはじめた。",
        "Saya mulai belajar sertifikasi demi mengejar promosi。"
      ]
    ]
  },
  "配布": {
    "word": "配布",
    "reading": "はいふ",
    "meaning": "pembagian; pendistribusian",
    "explanation": "Membagikan dokumen, materi, barang, atau informasi kepada banyak orang.",
    "nuance": "Sering untuk materi: 資料を配布する・チラシを配布する. Lebih formal dari 配る dan menunjukkan pembagian terencana.",
    "contexts": [
      "Pendidikan",
      "Administrasi",
      "Acara"
    ],
    "examples": [
      [
        "授業の前に資料を配布します。",
        "じゅぎょうのまえにしりょうをはいふします。",
        "Materi akan dibagikan sebelum pelajaran dimulai."
      ],
      [
        "会場の入口で参加者に案内図が配布された。",
        "かいじょうのいりぐちでさんかしゃにあんないずがはいふされた。",
        "Peta panduan dibagikan kepada peserta di pintu masuk acara。"
      ]
    ]
  },
  "滅びる": {
    "word": "滅びる",
    "reading": "ほろびる",
    "meaning": "binasa; runtuh; musnah",
    "explanation": "Mengalami kehancuran atau kehilangan keberadaan, seperti bangsa, peradaban, atau kelompok.",
    "nuance": "Lebih dramatis daripada なくなる karena menyiratkan keruntuhan atau kehancuran besar.",
    "contexts": [
      "Sejarah",
      "Sastra",
      "Berita"
    ],
    "examples": [
      [
        "古代の王国は長い戦争の末に滅びた。",
        "こだいのおうこくはながいせんそうのすえにほろびた。",
        "Kerajaan kuno itu runtuh setelah perang panjang."
      ],
      [
        "伝統文化を守らなければ、失われて滅びてしまう恐れがある。",
        "でんとうぶんかをまもらなければ、うしなわれてほろびてしまうおそれがある。",
        "Jika tidak dilestarikan, budaya tradisional itu berisiko hilang dan musnah。"
      ]
    ]
  },
  "発足": {
    "word": "発足",
    "reading": "ほっそく",
    "meaning": "pembentukan resmi; mulai berdirinya organisasi",
    "explanation": "Organisasi, lembaga, kabinet, atau kelompok resmi dibentuk dan mulai menjalankan kegiatan.",
    "nuance": "Lazim dalam berita: 新政権が発足する・委員会が発足する. Menandai dimulainya keberadaan organisasi, bukan baru rencana dibentuk.",
    "contexts": [
      "Politik",
      "Organisasi",
      "Berita"
    ],
    "examples": [
      [
        "新しい委員会が来月正式に発足する。",
        "あたらしいいいんかいがらいげつせいしきにほっそくする。",
        "Komite baru resmi dibentuk bulan depan."
      ],
      [
        "大学では地域連携を進めるための組織が発足した。",
        "だいがくではちいきれんけいをすすめるためのそしきがほっそくした。",
        "Di universitas dibentuk organisasi untuk memajukan kerja sama dengan masyarakat。"
      ]
    ]
  },
  "提起": {
    "word": "提起",
    "reading": "ていき",
    "meaning": "pengajuan; mengangkat masalah/topik",
    "explanation": "Mengemukakan persoalan atau pertanyaan agar dibahas dan dipertimbangkan secara resmi.",
    "nuance": "Umum dalam 問題を提起する・異議を提起する. Lebih formal daripada 話題にする karena menyiratkan isu yang perlu ditelaah.",
    "contexts": [
      "Akademik",
      "Hukum",
      "Diskusi"
    ],
    "examples": [
      [
        "学生は授業で重要な問題を提起した。",
        "がくせいはじゅぎょうでじゅうようなもんだいをていきした。",
        "Mahasiswa mengangkat persoalan penting dalam perkuliahan."
      ],
      [
        "原告側は裁判で新たな論点を提起した。",
        "げんこくがわはさいばんであらたなろんてんをていきした。",
        "Pihak penggugat mengajukan pokok persoalan baru di persidangan。"
      ]
    ]
  },
  "見落とす": {
    "word": "見落とす",
    "reading": "みおとす",
    "meaning": "melewatkan; tidak menyadari; gagal melihat",
    "explanation": "Tidak menyadari sesuatu yang seharusnya dapat dilihat, dibaca, atau diperiksa.",
    "nuance": "重要な点を見落とす. Berbeda dari 見逃す yang bisa berarti membiarkan sesuatu; 見落とす menekankan luput dari perhatian.",
    "contexts": [
      "Pekerjaan",
      "Pendidikan",
      "Sehari-hari"
    ],
    "examples": [
      [
        "確認不足で重要な数字を見落としてしまった。",
        "かくにんぶそくでじゅうようなすうじをみおとしてしまった。",
        "Karena kurang teliti, saya melewatkan angka penting."
      ],
      [
        "小さな変化を見落とさないように注意している。",
        "ちいさなへんかをみおとさないようにちゅういしている。",
        "Saya berhati-hati agar tidak melewatkan perubahan kecil。"
      ]
    ]
  },
  "閑静": {
    "word": "閑静",
    "reading": "かんせい",
    "meaning": "tenang; sepi dan damai",
    "explanation": "Menggambarkan kawasan yang jauh dari keramaian dan kebisingan.",
    "nuance": "Sering dalam 閑静な住宅街. Lebih formal dan menekankan suasana yang tenang, bukan sekadar sedikit orang.",
    "contexts": [
      "Deskripsi",
      "Properti",
      "Sehari-hari"
    ],
    "examples": [
      [
        "大学は閑静な住宅街の近くにある。",
        "だいがくはかんせいなじゅうたくがいのちかくにある。",
        "Universitas itu berada dekat kawasan perumahan yang tenang."
      ],
      [
        "閑静な場所でゆっくり本を読みたい。",
        "かんせいなばしょでゆっくりほんをよみたい。",
        "Saya ingin membaca buku dengan santai di tempat yang tenang。"
      ]
    ]
  },
  "たやすい": {
    "word": "たやすい",
    "reading": "たやすい",
    "meaning": "mudah; tidak sulit",
    "explanation": "Menggambarkan sesuatu yang dapat dilakukan tanpa banyak kesulitan atau usaha.",
    "nuance": "Bernuansa tulisan dan sering dalam たやすく〜ない. Lebih formal dari 簡単; dapat menegaskan bahwa suatu hal ternyata tidak mudah.",
    "contexts": [
      "Sastra",
      "Formal",
      "Akademik"
    ],
    "examples": [
      [
        "この問題を短時間で解くのはたやすくない。",
        "このもんだいをたんじかんでとくのはたやすくない。",
        "Tidak mudah menyelesaikan soal ini dalam waktu singkat."
      ],
      [
        "信頼を得ることはたやすいことではない。",
        "しんらいをえることはたやすいことではない。",
        "Mendapatkan kepercayaan bukanlah hal yang mudah。"
      ]
    ]
  },
  "察する": {
    "word": "察する",
    "reading": "さっする",
    "meaning": "memahami perasaan; menduga; menangkap maksud",
    "explanation": "Memahami keadaan atau perasaan melalui petunjuk yang tidak selalu disampaikan langsung.",
    "nuance": "相手の気持ちを察する. Menekankan kepekaan membaca ekspresi dan situasi, bukan menebak tanpa dasar.",
    "contexts": [
      "Sosial",
      "Sastra",
      "Formal"
    ],
    "examples": [
      [
        "彼女の表情から不安を察した。",
        "かのじょのひょうじょうからふあんをさっした。",
        "Saya menangkap kecemasannya dari ekspresi wajahnya."
      ],
      [
        "相手の立場を察して、言葉を選ぶことが大切だ。",
        "あいてのたちばをさっして、ことばをえらぶことがたいせつだ。",
        "Penting memahami posisi lawan bicara dan memilih kata dengan tepat。"
      ]
    ]
  },
  "内訳": {
    "word": "内訳",
    "reading": "うちわけ",
    "meaning": "rincian; perincian jumlah/isi",
    "explanation": "Penjelasan bagian-bagian yang membentuk jumlah, biaya, kelompok, atau keseluruhan.",
    "nuance": "Umum dalam 費用の内訳・人数の内訳. Menunjukkan komposisi terperinci, bukan daftar umum.",
    "contexts": [
      "Keuangan",
      "Administrasi",
      "Bisnis"
    ],
    "examples": [
      [
        "請求書には費用の内訳が詳しく記載されている。",
        "せいきゅうしょにはひようのうちわけがくわしくきさいされている。",
        "Rincian biaya tercantum lengkap dalam tagihan."
      ],
      [
        "参加者の内訳を見ると、学生が半数を占めている。",
        "さんかしゃのうちわけをみると、がくせいがはんすうをしめている。",
        "Komposisi peserta menunjukkan bahwa mahasiswa mencakup setengahnya。"
      ]
    ]
  },
  "食い違う": {
    "word": "食い違う",
    "reading": "くいちがう",
    "meaning": "tidak cocok; berbeda; bertentangan",
    "explanation": "Dua atau lebih informasi, pendapat, ingatan, atau hasil tidak sesuai satu sama lain.",
    "nuance": "Sering dalam 意見が食い違う・証言が食い違う. Menekankan perbedaan yang tidak selaras, bukan variasi kecil.",
    "contexts": [
      "Berita",
      "Diskusi",
      "Sosial"
    ],
    "examples": [
      [
        "二人の説明は細かい部分で食い違っている。",
        "ふたりのせつめいはこまかいぶぶんでくいちがっている。",
        "Penjelasan kedua orang berbeda pada bagian-bagian kecil."
      ],
      [
        "予定と実際の作業時間が大きく食い違った。",
        "よていとじっさいのさぎょうじかんがおおきくくいちがった。",
        "Waktu kerja rencana sangat berbeda dari waktu sebenarnya。"
      ]
    ]
  },
  "過密": {
    "word": "過密",
    "reading": "かみつ",
    "meaning": "terlalu padat",
    "explanation": "Keadaan ketika orang, bangunan, atau kegiatan terkonsentrasi berlebihan dalam ruang/waktu terbatas.",
    "nuance": "Dipakai dalam 過密都市・過密スケジュール. Mengandung kesan kepadatan berlebihan yang berpotensi menimbulkan masalah.",
    "contexts": [
      "Perkotaan",
      "Pekerjaan",
      "Berita"
    ],
    "examples": [
      [
        "都市への人口集中によって、住宅地が過密になっている。",
        "としへのじんこうしゅうちゅうによって、じゅうたくちがかみつになっている。",
        "Pemusatan penduduk ke kota membuat permukiman terlalu padat."
      ],
      [
        "過密な日程を見直し、休憩時間を確保した。",
        "かみつなにっていをみなおし、きゅうけいじかんをかくほした。",
        "Kami meninjau jadwal yang padat dan menyediakan waktu istirahat。"
      ]
    ]
  },
  "規制": {
    "word": "規制",
    "reading": "きせい",
    "meaning": "pengaturan; pembatasan; regulasi",
    "explanation": "Aturan atau tindakan resmi yang membatasi aktivitas, penggunaan, atau perilaku tertentu.",
    "nuance": "Sering dalam 交通規制・規制強化・規制緩和. Menekankan pembatasan berdasarkan aturan lembaga berwenang.",
    "contexts": [
      "Hukum",
      "Politik",
      "Berita"
    ],
    "examples": [
      [
        "政府は環境への影響を考えて排出量を規制した。",
        "せいふはかんきょうへのえいきょうをかんがえてはいしゅつりょうをきせいした。",
        "Pemerintah membatasi emisi dengan mempertimbangkan dampak lingkungan."
      ],
      [
        "工事のため、道路の交通規制が行われている。",
        "こうじのため、どうろのこうつうきせいがおこなわれている。",
        "Pembatasan lalu lintas diberlakukan karena pekerjaan konstruksi。"
      ]
    ]
  },
  "入手": {
    "word": "入手",
    "reading": "にゅうしゅ",
    "meaning": "memperoleh; mendapatkan",
    "explanation": "Berhasil mendapatkan sesuatu yang diperlukan, terutama informasi, dokumen, barang, atau data.",
    "nuance": "Formal dalam 入手する・入手困難・情報を入手する. Lebih formal daripada 手に入れる dan menekankan proses memperoleh sesuatu.",
    "contexts": [
      "Bisnis",
      "Teknologi",
      "Administrasi"
    ],
    "examples": [
      [
        "必要な資料をインターネットで入手した。",
        "ひつようなしりょうをいんたーねっとでにゅうしゅした。",
        "Saya memperoleh bahan yang diperlukan melalui internet."
      ],
      [
        "その商品は人気が高く、入手が難しい。",
        "そのしょうひんはにんきがたかく、にゅうしゅがむずかしい。",
        "Produk itu populer sehingga sulit didapatkan。"
      ]
    ]
  },
  "経緯": {
    "word": "経緯",
    "reading": "けいい",
    "meaning": "rangkaian proses; latar belakang; kronologi",
    "explanation": "Urutan kejadian atau proses yang menjelaskan bagaimana suatu keadaan sampai terjadi.",
    "nuance": "Dipakai dalam これまでの経緯・経緯を説明する. Menyoroti proses dan latar belakang, bukan hanya hasil akhir.",
    "contexts": [
      "Berita",
      "Administrasi",
      "Pekerjaan"
    ],
    "examples": [
      [
        "担当者は計画が変更された経緯を説明した。",
        "たんとうしゃはけいかくがへんこうされたけいいをせつめいした。",
        "Penanggung jawab menjelaskan proses yang menyebabkan rencana berubah."
      ],
      [
        "事件に至るまでの経緯を詳しく調べている。",
        "じけんにいたるまでのけいいをくわしくしらべている。",
        "Mereka menyelidiki rangkaian kejadian yang mengarah pada kasus itu。"
      ]
    ]
  },
  "退く": {
    "word": "退く",
    "reading": "しりぞく",
    "meaning": "mundur; mengundurkan diri; menarik diri",
    "explanation": "Bergerak menjauh dari posisi semula atau melepaskan jabatan/peran yang sedang dipegang.",
    "nuance": "Dapat bersifat fisik maupun sosial: 一歩退く・第一線を退く. Bacaan しりぞく berarti mundur; ada bacaan lain どく dalam pemakaian tertentu.",
    "contexts": [
      "Berita",
      "Pekerjaan",
      "Sastra"
    ],
    "examples": [
      [
        "彼は長年務めた社長の座を退いた。",
        "かれはながねんつとめたしゃちょうのざをしりぞいた。",
        "Ia mundur dari jabatan presiden yang lama dipegangnya."
      ],
      [
        "危険を感じた人々は、その場から静かに退いた。",
        "きけんをかんじたひとびとは、そのばからしずかにしりぞいた。",
        "Orang-orang yang merasakan bahaya mundur dengan tenang。"
      ]
    ]
  },
  "還元": {
    "word": "還元",
    "reading": "かんげん",
    "meaning": "pengembalian; penyaluran kembali manfaat",
    "explanation": "Mengembalikan sesuatu kepada sumber asal atau membagikan hasil/manfaat kepada masyarakat maupun pihak terkait.",
    "nuance": "Dalam bisnis: 利益を還元する. Dalam kimia 還元 berarti reduksi; konteks menentukan makna.",
    "contexts": [
      "Bisnis",
      "Ekonomi",
      "Ilmu pengetahuan"
    ],
    "examples": [
      [
        "会社は利益の一部を地域社会に還元している。",
        "かいしゃはりえきのいちぶをちいきしゃかいにかんげんしている。",
        "Perusahaan mengembalikan sebagian keuntungan kepada masyarakat setempat."
      ],
      [
        "ポイントを買い物に還元できるサービスが人気だ。",
        "ぽいんとをかいものにかんげんできるさーびすがにんきだ。",
        "Layanan yang memungkinkan poin digunakan kembali untuk berbelanja sedang populer。"
      ]
    ]
  },
  "辞任": {
    "word": "辞任",
    "reading": "じにん",
    "meaning": "pengunduran diri dari jabatan",
    "explanation": "Melepaskan jabatan atau posisi atas keputusan sendiri, biasanya dalam organisasi atau pemerintahan.",
    "nuance": "Formal dalam konteks politik/pekerjaan: 大臣が辞任する. 失脚 menekankan kejatuhan posisi; 辞任 menekankan tindakan mengundurkan diri.",
    "contexts": [
      "Politik",
      "Pekerjaan",
      "Berita"
    ],
    "examples": [
      [
        "大臣は責任を取って辞任すると発表した。",
        "だいじんはせきにんをとってじにんするとはっぴょうした。",
        "Menteri mengumumkan akan mengundurkan diri sebagai bentuk tanggung jawab."
      ],
      [
        "社長の辞任を受けて、新しい経営体制が発表された。",
        "しゃちょうのじにんをうけて、あたらしいけいえいたいせいがはっぴょうされた。",
        "Setelah direktur utama mengundurkan diri, struktur manajemen baru diumumkan。"
      ]
    ]
  },
  "帯びる": {
    "word": "帯びる",
    "reading": "おびる",
    "meaning": "membawa; mengandung; memiliki nuansa",
    "explanation": "Memiliki atau menunjukkan sifat, warna, peran, tanggung jawab, maupun suasana tertentu.",
    "nuance": "Selain arti literal membawa sesuatu, sering abstrak: 責任を帯びる・赤みを帯びる・緊張を帯びる. Lebih formal daripada 持つ.",
    "contexts": [
      "Formal",
      "Sastra",
      "Berita"
    ],
    "examples": [
      [
        "この仕事は大きな責任を帯びている。",
        "このしごとはおおきなせきにんをおびている。",
        "Pekerjaan ini mengandung tanggung jawab besar."
      ],
      [
        "夕焼けで空が赤みを帯びていた。",
        "ゆうやけでそらがあかみをおびていた。",
        "Langit memiliki semburat kemerahan karena matahari terbenam。"
      ]
    ]
  },
  "軌道": {
    "word": "軌道",
    "reading": "きどう",
    "meaning": "orbit; jalur; lintasan",
    "explanation": "Jalur yang dilalui benda atau arah perkembangan suatu sistem, proyek, maupun kehidupan.",
    "nuance": "Secara fisik untuk orbit; secara kiasan muncul dalam 軌道に乗る (berjalan stabil) dan 軌道修正 (mengoreksi arah).",
    "contexts": [
      "Ilmu pengetahuan",
      "Bisnis",
      "Teknologi"
    ],
    "examples": [
      [
        "人工衛星は地球の周りの軌道を回っている。",
        "じんこうえいせいはちきゅうのまわりのきどうをまわっている。",
        "Satelit buatan bergerak pada orbit mengelilingi bumi."
      ],
      [
        "新しい事業はようやく軌道に乗り始めた。",
        "あたらしいじぎょうはようやくきどうにのりはじめた。",
        "Usaha baru itu akhirnya mulai berjalan stabil。"
      ]
    ]
  },
  "思い詰める": {
    "word": "思い詰める",
    "reading": "おもいつめる",
    "meaning": "terlalu memikirkan; terbebani pikiran",
    "explanation": "Memikirkan masalah secara berlebihan dan terus-menerus hingga merasa sangat tertekan.",
    "nuance": "Dipakai untuk kekhawatiran dan masalah pribadi: 思い詰めた表情. Lebih berat daripada sekadar 真剣に考える; menandakan beban pikiran yang menumpuk.",
    "contexts": [
      "Sosial",
      "Sastra",
      "Percakapan"
    ],
    "examples": [
      [
        "一人で思い詰めず、信頼できる人に相談してほしい。",
        "ひとりでおもいつめず、しんらいできるひとにそうだんしてほしい。",
        "Jangan memendam pikiran sendirian; bicaralah dengan orang tepercaya."
      ],
      [
        "彼は仕事の失敗を思い詰めた様子だった。",
        "かれはしごとのしっぱいをおもいつめたようすだった。",
        "Ia tampak sangat terbebani oleh kegagalan pekerjaannya。"
      ]
    ]
  },
  "はなはだしい": {
    "word": "はなはだしい",
    "reading": "はなはだしい",
    "meaning": "sangat besar; luar biasa; keterlaluan",
    "explanation": "Menunjukkan tingkat yang jauh melampaui batas biasa, sering untuk kesalahan, perbedaan, atau kerusakan.",
    "nuance": "Cenderung formal dan kerap bernada negatif: はなはだしい誤解・はなはだしい差. Dapat menyiratkan keadaan sudah keterlaluan.",
    "contexts": [
      "Berita",
      "Formal",
      "Akademik"
    ],
    "examples": [
      [
        "両者の意見にははなはだしい隔たりがある。",
        "りょうしゃのいけんにははなはだしいへだたりがある。",
        "Terdapat kesenjangan sangat besar antara pendapat kedua pihak."
      ],
      [
        "その説明には事実とのはなはだしい食い違いがある。",
        "そのせつめいにはじじつとのはなはだしいくいちがいがある。",
        "Penjelasan itu sangat berbeda dari fakta。"
      ]
    ]
  },
  "没頭": {
    "word": "没頭",
    "reading": "ぼっとう",
    "meaning": "tenggelam dalam; mencurahkan diri sepenuhnya",
    "explanation": "Memusatkan perhatian dan waktu sepenuhnya pada kegiatan sehingga hampir tidak memikirkan hal lain.",
    "nuance": "Sering dalam 研究に没頭する・趣味に没頭する. Lebih kuat daripada 集中する; memberi kesan benar-benar larut dalam kegiatan.",
    "contexts": [
      "Akademik",
      "Pekerjaan",
      "Sehari-hari"
    ],
    "examples": [
      [
        "彼は卒業論文の研究に没頭している。",
        "かれはそつぎょうろんぶんのけんきゅうにぼっとうしている。",
        "Ia sedang tenggelam dalam penelitian skripsi kelulusannya."
      ],
      [
        "休日は趣味の写真撮影に没頭した。",
        "きゅうじつはしゅみのしゃしんさつえいにぼっとうした。",
        "Pada hari libur saya larut dalam hobi fotografi。"
      ]
    ]
  },
  "人手": {
    "word": "人手",
    "reading": "ひとで",
    "meaning": "tenaga manusia; jumlah pekerja",
    "explanation": "Orang atau tenaga kerja yang diperlukan untuk melaksanakan pekerjaan atau kegiatan.",
    "nuance": "Sering dalam 人手不足・人手が足りない・人手を借りる. Menyoroti ketersediaan tenaga kerja, bukan sekadar jumlah orang yang hadir.",
    "contexts": [
      "Pekerjaan",
      "Bisnis",
      "Berita"
    ],
    "examples": [
      [
        "農家では収穫期の人手が不足している。",
        "のうかではしゅうかくきのひとでがふそくしている。",
        "Para petani kekurangan tenaga kerja pada musim panen."
      ],
      [
        "引っ越しの準備に人手が必要だ。",
        "ひっこしのじゅんびにひとでがひつようだ。",
        "Persiapan pindahan membutuhkan bantuan tenaga orang lain。"
      ]
    ]
  },
  "今更": {
    "word": "今更",
    "reading": "いまさら",
    "meaning": "sekarang baru; sudah terlambat",
    "explanation": "Melakukan atau menyadari sesuatu pada waktu yang dianggap terlalu terlambat atau tidak tepat.",
    "nuance": "Sering bernuansa penyesalan/kritik: 今更言っても遅い. Dapat juga sekadar berarti “baru sekarang”, tergantung konteks.",
    "contexts": [
      "Percakapan",
      "Sastra",
      "Berita"
    ],
    "examples": [
      [
        "今更謝っても、失った信頼はすぐには戻らない。",
        "いまさらあやまっても、うしなったしんらいはすぐにはもどらない。",
        "Meskipun baru meminta maaf sekarang, kepercayaan yang hilang tidak segera kembali."
      ],
      [
        "今更その事実を隠す必要はない。",
        "いまさらそのじじつをかくすひつようはない。",
        "Pada tahap ini, tidak perlu lagi menyembunyikan fakta itu。"
      ]
    ]
  },
  "隈なく": {
    "word": "隈なく",
    "reading": "くまなく",
    "meaning": "secara menyeluruh; tanpa melewatkan bagian",
    "explanation": "Memeriksa atau mencari seluruh bagian suatu tempat/objek tanpa meninggalkan bagian yang belum diperiksa.",
    "nuance": "Sering dengan 探す・調べる・見る. Menekankan pemeriksaan teliti menyeluruh, lebih kuat daripada sekadar すべてを見る.",
    "contexts": [
      "Pekerjaan",
      "Sehari-hari",
      "Berita"
    ],
    "examples": [
      [
        "警察は現場を隈なく調べた。",
        "けいさつはげんばをくまなくしらべた。",
        "Polisi memeriksa lokasi kejadian secara menyeluruh."
      ],
      [
        "必要な情報を得るため、資料を隈なく読んだ。",
        "ひつようなじょうほうをえるため、しりょうをくまなくよんだ。",
        "Saya membaca seluruh bahan dengan teliti untuk memperoleh informasi。"
      ]
    ]
  },
  "安静": {
    "word": "安静",
    "reading": "あんせい",
    "meaning": "istirahat; kondisi tenang",
    "explanation": "Keadaan ketika seseorang mengurangi aktivitas dan menjaga tubuh tetap tenang untuk pemulihan.",
    "nuance": "Sering dalam 安静にする・安静を保つ, terutama konteks kesehatan. Lebih khusus daripada 休む karena menekankan pembatasan aktivitas.",
    "contexts": [
      "Kesehatan",
      "Sehari-hari"
    ],
    "examples": [
      [
        "医師から数日間、安静にするよう指示された。",
        "いしからすうじつかん、あんせいにするようしじされた。",
        "Dokter menyuruh saya beristirahat tenang selama beberapa hari."
      ],
      [
        "回復するまでは自宅で安静を保ってください。",
        "かいふくするまではじたくであんせいをたもってください。",
        "Sampai pulih, jagalah kondisi tubuh tetap tenang di rumah。"
      ]
    ]
  },
  "統合": {
    "word": "統合",
    "reading": "とうごう",
    "meaning": "integrasi; penggabungan menjadi satu",
    "explanation": "Menggabungkan bagian, sistem, organisasi, atau informasi menjadi satu kesatuan yang terkoordinasi.",
    "nuance": "Formal dan terencana: システムを統合する・組織統合. Berbeda dari 混合 yang sekadar mencampur unsur.",
    "contexts": [
      "Bisnis",
      "Teknologi",
      "Administrasi"
    ],
    "examples": [
      [
        "二つの部署を統合して、新しい組織を作った。",
        "ふたつのぶしょをとうごうして、あたらしいそしきをつくった。",
        "Dua departemen digabung untuk membentuk organisasi baru."
      ],
      [
        "複数のデータを統合し、一つの報告書にまとめた。",
        "ふくすうのでーたをとうごうし、ひとつのほうこくしょにまとめた。",
        "Beberapa kumpulan data diintegrasikan menjadi satu laporan。"
      ]
    ]
  },
  "抱え込む": {
    "word": "抱え込む",
    "reading": "かかえこむ",
    "meaning": "memikul sendiri; menanggung masalah sendiri",
    "explanation": "Mengambil atau menanggung terlalu banyak tugas, masalah, atau beban tanpa membaginya dengan orang lain.",
    "nuance": "仕事を抱え込む・悩みを抱え込む. ～込む menambah kesan menahan semua beban sendirian, lebih kuat daripada 抱える yang netral.",
    "contexts": [
      "Pekerjaan",
      "Sosial",
      "Percakapan"
    ],
    "examples": [
      [
        "仕事を一人で抱え込まず、周囲に協力を求めよう。",
        "しごとをひとりでかかえこまず、しゅういにきょうりょくをもとめよう。",
        "Jangan menanggung semua pekerjaan sendirian; mintalah bantuan."
      ],
      [
        "悩みを抱え込んで、誰にも話せずにいた。",
        "なやみをかかえこんで、だれにもはなせずにいた。",
        "Ia memendam masalah sendiri dan tak bisa bercerita kepada siapa pun。"
      ]
    ]
  },
  "裏腹": {
    "word": "裏腹",
    "reading": "うらはら",
    "meaning": "berlawanan; bertolak belakang",
    "explanation": "Keadaan ketika sesuatu bertentangan dengan hal lain, khususnya antara perasaan batin dan sikap yang tampak.",
    "nuance": "Sering dalam 気持ちとは裏腹に・裏腹な結果. Menekankan pertentangan dua sisi, bukan sekadar perbedaan biasa.",
    "contexts": [
      "Sastra",
      "Sosial",
      "Berita"
    ],
    "examples": [
      [
        "彼は不安な気持ちとは裏腹に、落ち着いて見えた。",
        "かれはふあんなきもちとはうらはらに、おちついてみえた。",
        "Bertentangan dengan kecemasannya, ia terlihat tenang."
      ],
      [
        "努力とは裏腹に、結果は思わしくなかった。",
        "どりょくとはうらはらに、けっかはおもわしくなかった。",
        "Bertolak belakang dengan usahanya, hasilnya tidak memuaskan。"
      ]
    ]
  },
  "耐えがたい": {
    "word": "耐えがたい",
    "reading": "たえがたい",
    "meaning": "tak tertahankan; sulit ditanggung",
    "explanation": "Menggambarkan rasa sakit, kesulitan, atau tekanan yang begitu berat sehingga hampir tidak dapat ditahan.",
    "nuance": "Lebih formal daripada 耐えられない: 耐えがたい苦痛・状況. Menekankan beratnya pengalaman atau beban.",
    "contexts": [
      "Sastra",
      "Berita",
      "Formal"
    ],
    "examples": [
      [
        "彼にとって、その別れは耐えがたいものだった。",
        "かれにとって、そのわかれはたえがたいものだった。",
        "Bagi dirinya, perpisahan itu sangat sulit ditanggung."
      ],
      [
        "長時間の騒音は住民にとって耐えがたい苦痛となった。",
        "ちょうじかんのそうおんはじゅうみんにとってたえがたいくつうとなった。",
        "Kebisingan berjam-jam menjadi penderitaan tak tertahankan bagi warga。"
      ]
    ]
  },
  "携わる": {
    "word": "携わる",
    "reading": "たずさわる",
    "meaning": "terlibat; berkecimpung; ikut menangani",
    "explanation": "Mengambil bagian secara langsung dalam pekerjaan, bidang, proyek, atau kegiatan tertentu.",
    "nuance": "Formal/profesional: 研究に携わる・教育に携わる・開発に携わる. Lebih profesional daripada 関わる dan menekankan peran aktif dalam pekerjaan.",
    "contexts": [
      "Pekerjaan",
      "Akademik",
      "Formal"
    ],
    "examples": [
      [
        "彼は長年、医療の研究に携わってきた。",
        "かれはながねん、いりょうのけんきゅうにたずさわってきた。",
        "Ia telah lama berkecimpung dalam penelitian medis."
      ],
      [
        "地域の文化財を守る活動に携わっている。",
        "ちいきのぶんかざいをまもるかつどうにたずさわっている。",
        "Saya terlibat dalam kegiatan melindungi warisan budaya daerah。"
      ]
    ]
  },
  "人一倍": {
    "word": "人一倍",
    "reading": "ひといちばい",
    "meaning": "lebih daripada orang lain; jauh lebih besar",
    "explanation": "Menunjukkan usaha, kemampuan, perhatian, atau perasaan seseorang lebih besar dibandingkan orang pada umumnya.",
    "nuance": "Sering dalam 人一倍努力する・人一倍気を使う. Ungkapan untuk menekankan tingkat yang menonjol, bukan ukuran literal.",
    "contexts": [
      "Pendidikan",
      "Pekerjaan",
      "Sosial"
    ],
    "examples": [
      [
        "彼女は人一倍努力して、難関試験に合格した。",
        "かのじょはひといちばいどりょくして、なんかんしけんにごうかくした。",
        "Ia berusaha jauh lebih keras dan lulus ujian sulit."
      ],
      [
        "初めての仕事なので、人一倍注意を払っている。",
        "はじめてのしごとなので、ひといちばいちゅういをはらっている。",
        "Karena ini pekerjaan pertamanya, ia memberi perhatian lebih besar。"
      ]
    ]
  },
  "復旧": {
    "word": "復旧",
    "reading": "ふっきゅう",
    "meaning": "pemulihan; kembali ke kondisi semula",
    "explanation": "Mengembalikan layanan, fasilitas, sistem, atau infrastruktur yang terganggu agar berfungsi kembali.",
    "nuance": "Sering setelah bencana/gangguan: 電力を復旧する. 復興 lebih luas dan berjangka panjang; 復旧 menekankan fungsi dasar pulih.",
    "contexts": [
      "Infrastruktur",
      "Teknologi",
      "Berita"
    ],
    "examples": [
      [
        "台風で停止した電車の運行が復旧した。",
        "たいふうでていししたでんしゃのうんこうがふっきゅうした。",
        "Operasi kereta yang terhenti akibat topan telah pulih."
      ],
      [
        "技術者たちは夜通しシステムの復旧作業を行った。",
        "ぎじゅつしゃたちはよどおししすてむのふっきゅうさぎょうをおこなった。",
        "Para teknisi memulihkan sistem sepanjang malam。"
      ]
    ]
  },
  "一律": {
    "word": "一律",
    "reading": "いちりつ",
    "meaning": "seragam; sama rata; berlaku tanpa perbedaan",
    "explanation": "Menerapkan jumlah, aturan, atau perlakuan sama kepada semua pihak tanpa mempertimbangkan kondisi.",
    "nuance": "Dapat netral untuk standar, tetapi negatif bila tidak mempertimbangkan kebutuhan masing-masing: 一律に決める・一律料金.",
    "contexts": [
      "Administrasi",
      "Bisnis",
      "Berita"
    ],
    "examples": [
      [
        "全員に一律の料金が適用される。",
        "ぜんいんにいちりつのりょうきんがてきようされる。",
        "Tarif yang sama berlaku untuk semua orang."
      ],
      [
        "状況を考慮せず、一律に判断するのは適切ではない。",
        "じょうきょうをこうりょせず、いちりつにはんだんするのはてきせつではない。",
        "Tidak tepat memutuskan secara seragam tanpa mempertimbangkan situasi。"
      ]
    ]
  },
  "剥がす": {
    "word": "剥がす",
    "reading": "はがす",
    "meaning": "mengelupas; melepaskan sesuatu yang menempel",
    "explanation": "Melepaskan lapisan/benda yang melekat pada permukaan, seperti stiker, kertas, atau cat.",
    "nuance": "Transitif: seseorang 剥がす sesuatu. Bentuk intransitifnya 剥がれる (terkelupas sendiri); 外す lebih umum untuk melepas benda terpasang.",
    "contexts": [
      "Sehari-hari",
      "Pekerjaan",
      "Konstruksi"
    ],
    "examples": [
      [
        "壁に貼ってあったポスターを剥がした。",
        "かべにはってあったぽすたーをはがした。",
        "Saya melepaskan poster yang ditempel di dinding."
      ],
      [
        "古いシールをきれいに剥がすのは難しい。",
        "ふるいしーるをきれいにはがすのはむずかしい。",
        "Sulit melepaskan stiker lama dengan bersih。"
      ]
    ]
  },
  "心構え": {
    "word": "心構え",
    "reading": "こころがまえ",
    "meaning": "kesiapan mental; sikap batin",
    "explanation": "Sikap dan persiapan mental sebelum menghadapi tugas, tanggung jawab, atau situasi tertentu.",
    "nuance": "心構えを持つ・心構えができている. Menekankan kesiapan batin/cara berpikir, bukan persiapan teknis atau perlengkapan.",
    "contexts": [
      "Pendidikan",
      "Pekerjaan",
      "Sosial"
    ],
    "examples": [
      [
        "新しい環境で学ぶための心構えが必要だ。",
        "あたらしいかんきょうでまなぶためのこころがまえがひつようだ。",
        "Diperlukan kesiapan mental untuk belajar di lingkungan baru."
      ],
      [
        "責任ある立場に就く前に、十分な心構えをしておこう。",
        "せきにんあるたちばにつくまえに、じゅうぶんなこころがまえをしておこう。",
        "Mari siapkan mental sebelum mengambil posisi penuh tanggung jawab。"
      ]
    ]
  },
  "損なう": {
    "word": "損なう",
    "reading": "そこなう",
    "meaning": "merusak; mengganggu; mengurangi kualitas",
    "explanation": "Menyebabkan sesuatu kehilangan kondisi, kualitas, nilai, atau fungsi yang semestinya.",
    "nuance": "Formal: 健康を損なう・信頼を損なう・名誉を損なう. Lebih formal daripada 壊す dan dapat merujuk hal abstrak maupun fisik.",
    "contexts": [
      "Formal",
      "Kesehatan",
      "Bisnis"
    ],
    "examples": [
      [
        "無理な働き方は健康を損なう恐れがある。",
        "むりなはたらきかたはけんこうをそこなうおそれがある。",
        "Cara kerja berlebihan berisiko merusak kesehatan."
      ],
      [
        "不用意な発言が会社の信頼を損なった。",
        "ふよういなはつげんがかいしゃのしんらいをそこなった。",
        "Pernyataan ceroboh merusak kepercayaan terhadap perusahaan。"
      ]
    ]
  },
  "しがみつく": {
    "word": "しがみつく",
    "reading": "しがみつく",
    "meaning": "berpegangan erat; melekat pada sesuatu",
    "explanation": "Memegang sesuatu dengan kuat agar tidak terlepas, atau secara kiasan bergantung pada posisi/harapan.",
    "nuance": "Secara kiasan sering negatif: 地位にしがみつく, 過去にしがみつく. Menunjukkan kesulitan melepaskan sesuatu.",
    "contexts": [
      "Sosial",
      "Sastra",
      "Berita"
    ],
    "examples": [
      [
        "子どもは母親の腕にしがみついた。",
        "こどもはははおやのうでにしがみついた。",
        "Anak itu berpegangan erat pada lengan ibunya."
      ],
      [
        "彼は古い地位にしがみつこうとしている。",
        "かれはふるいちいにしがみつこうとしている。",
        "Ia berusaha keras mempertahankan kedudukannya yang lama。"
      ]
    ]
  },
  "工面": {
    "word": "工面",
    "reading": "くめん",
    "meaning": "mengusahakan; mencari cara menyediakan uang/waktu",
    "explanation": "Berusaha mencari atau menyiapkan sesuatu yang diperlukan, terutama uang, biaya, waktu, atau tenaga.",
    "nuance": "Sering saat sumber daya terbatas: 資金を工面する・費用を工面する. Menyiratkan usaha karena penyediaannya tidak mudah.",
    "contexts": [
      "Keuangan",
      "Sehari-hari",
      "Bisnis"
    ],
    "examples": [
      [
        "留学費用を工面するためにアルバイトを始めた。",
        "りゅうがくひようをくめんするためにあるばいとをはじめた。",
        "Saya mulai bekerja paruh waktu untuk mengusahakan biaya studi ke luar negeri."
      ],
      [
        "忙しい中で会議の時間を工面してくれた。",
        "いそがしいなかでかいぎのじかんをくめんしてくれた。",
        "Di tengah kesibukan, ia mengusahakan waktu untuk rapat。"
      ]
    ]
  },
  "処置": {
    "word": "処置",
    "reading": "しょち",
    "meaning": "penanganan; tindakan medis/administratif",
    "explanation": "Tindakan untuk menangani masalah atau keadaan agar dampaknya terkendali atau terselesaikan.",
    "nuance": "Digunakan dalam 応急処置・適切な処置を取る. Lebih prosedural daripada 対応 dan menekankan langkah konkret.",
    "contexts": [
      "Kesehatan",
      "Administrasi",
      "Berita"
    ],
    "examples": [
      [
        "けがをした人は病院で適切な処置を受けた。",
        "けがをしたひとはびょういんでてきせつなしょちをうけた。",
        "Orang yang terluka menerima penanganan tepat di rumah sakit."
      ],
      [
        "問題が見つかったため、担当部署が必要な処置を取った。",
        "もんだいがみつかったため、たんとうぶしょがひつようなしょちをとった。",
        "Karena ditemukan masalah, bagian terkait mengambil tindakan yang diperlukan。"
      ]
    ]
  },
  "拍子": {
    "word": "拍子",
    "reading": "ひょうし",
    "meaning": "irama; ketukan; saat pemicu",
    "explanation": "Menunjukkan irama/ketukan, atau kejadian sesaat yang menyebabkan sesuatu terjadi.",
    "nuance": "拍子を取る (mengikuti irama), その拍子に (pada saat itu), 何かの拍子に (karena kejadian tak terduga).",
    "contexts": [
      "Musik",
      "Percakapan",
      "Sastra"
    ],
    "examples": [
      [
        "音楽に合わせて手拍子を取った。",
        "おんがくにあわせててびょうしをとった。",
        "Kami bertepuk tangan mengikuti irama musik."
      ],
      [
        "立ち上がった拍子に、机に頭をぶつけた。",
        "たちあがったひょうしに、つくえにあたまをぶつけた。",
        "Saat berdiri, kepala saya terbentur meja。"
      ]
    ]
  },
  "口出し": {
    "word": "口出し",
    "reading": "くちだし",
    "meaning": "campur tangan; mencampuri urusan",
    "explanation": "Ikut berbicara atau memberikan pendapat dalam urusan yang bukan tanggung jawab sendiri, sering tanpa diminta.",
    "nuance": "余計な口出し dan 口出しする biasanya bernuansa negatif; berbeda dari 助言 yang berarti saran yang membantu.",
    "contexts": [
      "Sosial",
      "Pekerjaan",
      "Percakapan"
    ],
    "examples": [
      [
        "他人の家庭の問題に口出しするべきではない。",
        "たにんのかていのもんだいにくちだしするべきではない。",
        "Kita sebaiknya tidak ikut campur masalah keluarga orang lain."
      ],
      [
        "会議では担当者以外が口出ししないよう求められた。",
        "かいぎではたんとうしゃいがいがくちだししないようもとめられた。",
        "Dalam rapat, selain penanggung jawab diminta tidak ikut campur。"
      ]
    ]
  },
  "煩雑": {
    "word": "煩雑",
    "reading": "はんざつ",
    "meaning": "rumit; berbelit-belit; merepotkan",
    "explanation": "Menggambarkan prosedur atau pekerjaan dengan banyak langkah dan detail sehingga sulit ditangani.",
    "nuance": "Formal: 煩雑な手続き・事務が煩雑になる. Menekankan banyaknya urusan, bukan hanya tingkat kesulitan.",
    "contexts": [
      "Administrasi",
      "Pekerjaan",
      "Bisnis"
    ],
    "examples": [
      [
        "申請の手続きが煩雑で、時間がかかった。",
        "しんせいのてつづきがはんざつで、じかんがかかった。",
        "Prosedur pengajuan rumit sehingga membutuhkan waktu."
      ],
      [
        "煩雑な作業を自動化して、負担を減らした。",
        "はんざつなさぎょうをじどうかして、ふたんをへらした。",
        "Kami mengotomatiskan pekerjaan rumit untuk mengurangi beban。"
      ]
    ]
  },
  "当てはめる": {
    "word": "当てはめる",
    "reading": "あてはめる",
    "meaning": "menerapkan; mencocokkan dengan aturan/pola",
    "explanation": "Menerapkan aturan, rumus, kategori, atau pola pada kasus yang sedang diperiksa.",
    "nuance": "公式に当てはめる・条件に当てはめる. Menekankan pencocokan kasus dengan kerangka yang ada; jangan memaksakan aturan pada situasi berbeda.",
    "contexts": [
      "Akademik",
      "Pekerjaan",
      "Analisis"
    ],
    "examples": [
      [
        "この数字を公式に当てはめて計算してください。",
        "このすうじをこうしきにあてはめてけいさんしてください。",
        "Masukkan angka ini ke dalam rumus lalu hitung."
      ],
      [
        "一つの考え方をすべての状況に当てはめることはできない。",
        "ひとつのかんがえかたをすべてのじょうきょうにあてはめることはできない。",
        "Satu cara berpikir tidak dapat diterapkan pada semua situasi。"
      ]
    ]
  },
  "打開": {
    "word": "打開",
    "reading": "だかい",
    "meaning": "terobosan; membuka jalan keluar",
    "explanation": "Mengatasi keadaan sulit atau kebuntuan dengan mencari cara baru agar situasi bergerak maju.",
    "nuance": "Sering dalam 状況を打開する・打開策. Formal dan menekankan pemecahan kebuntuan, bukan penyelesaian tugas biasa.",
    "contexts": [
      "Berita",
      "Bisnis",
      "Politik"
    ],
    "examples": [
      [
        "両社は話し合いによって対立を打開した。",
        "りょうしゃははなしあいによってたいりつをだかいした。",
        "Kedua perusahaan mengatasi pertentangan melalui pembicaraan."
      ],
      [
        "現状を打開するために、新しい方法を試す必要がある。",
        "げんじょうをだかいするために、あたらしいほうほうをためすひつようがある。",
        "Untuk keluar dari keadaan saat ini, kita perlu mencoba cara baru。"
      ]
    ]
  },
  "優位": {
    "word": "優位",
    "reading": "ゆうい",
    "meaning": "keunggulan; posisi lebih unggul",
    "explanation": "Keadaan ketika seseorang/pihak memiliki posisi atau kemampuan yang lebih menguntungkan daripada pihak lain.",
    "nuance": "Sering dalam 優位に立つ・優位性・技術的優位. Menunjukkan keunggulan relatif, bukan keunggulan mutlak dalam semua aspek.",
    "contexts": [
      "Bisnis",
      "Olahraga",
      "Akademik"
    ],
    "examples": [
      [
        "新技術によって、企業は市場で優位に立った。",
        "しんぎじゅつによって、きぎょうはしじょうでゆういにたった。",
        "Berkat teknologi baru, perusahaan berada pada posisi unggul di pasar."
      ],
      [
        "試合の序盤から相手チームが優位に進めていた。",
        "しあいのじょばんからあいてちーむがゆういにすすめていた。",
        "Sejak awal pertandingan, tim lawan bermain dalam posisi lebih unggul。"
      ]
    ]
  },
  "かばう": {
    "word": "かばう",
    "reading": "かばう",
    "meaning": "melindungi; membela; menutupi kesalahan",
    "explanation": "Melindungi seseorang dari kritik/bahaya atau berusaha membela orang tersebut.",
    "nuance": "Positif saat melindungi orang lemah, tetapi negatif jika menutupi kesalahan: 部下の失敗をかばう. Bisa juga menjaga bagian tubuh yang cedera.",
    "contexts": [
      "Sosial",
      "Berita",
      "Percakapan"
    ],
    "examples": [
      [
        "彼は失敗した後輩をかばって、責任を分け合った。",
        "かれはしっぱいしたこうはいをかばって、せきにんをわけあった。",
        "Ia membela junior yang gagal dan ikut berbagi tanggung jawab."
      ],
      [
        "痛む腕をかばいながら、ゆっくり歩いた。",
        "いたむうでをかばいながら、ゆっくりあるいた。",
        "Ia berjalan perlahan sambil melindungi lengannya yang sakit。"
      ]
    ]
  },
  "加味": {
    "word": "加味",
    "reading": "かみ",
    "meaning": "memasukkan unsur; mempertimbangkan",
    "explanation": "Memasukkan faktor atau pertimbangan tertentu ke dalam penilaian, keputusan, atau perhitungan.",
    "nuance": "経験を加味する・条件を加味した判断. Lebih formal daripada 考慮する dan menekankan faktor itu masuk ke hasil akhir.",
    "contexts": [
      "Bisnis",
      "Administrasi",
      "Akademik"
    ],
    "examples": [
      [
        "経験や能力を加味して、採用を決定した。",
        "けいけんやのうりょくをかみして、さいようをけっていした。",
        "Perekrutan diputuskan dengan mempertimbangkan pengalaman dan kemampuan."
      ],
      [
        "地域の事情を加味した制度設計が必要だ。",
        "ちいきのじじょうをかみしたせいどせっけいがひつようだ。",
        "Diperlukan rancangan sistem yang mempertimbangkan keadaan setempat。"
      ]
    ]
  },
  "気配": {
    "word": "気配",
    "reading": "けはい",
    "meaning": "tanda; gelagat; keberadaan yang terasa",
    "explanation": "Tanda bahwa seseorang/sesuatu ada atau akan terjadi meskipun belum terlihat jelas.",
    "nuance": "人の気配・春の気配・〜する気配がない. Menekankan sesuatu yang dirasakan lewat suasana atau tanda halus.",
    "contexts": [
      "Percakapan",
      "Sastra",
      "Berita"
    ],
    "examples": [
      [
        "部屋の外に誰かの気配を感じた。",
        "へやのそとにだれかのけはいをかんじた。",
        "Saya merasakan keberadaan seseorang di luar kamar."
      ],
      [
        "景気が回復する気配はまだ見られない。",
        "けいきがかいふくするけはいはまだみられない。",
        "Belum terlihat tanda-tanda ekonomi akan pulih。"
      ]
    ]
  },
  "広大": {
    "word": "広大",
    "reading": "こうだい",
    "meaning": "sangat luas; terbentang besar",
    "explanation": "Menggambarkan wilayah, lahan, ruang, atau pemandangan dengan luas sangat besar.",
    "nuance": "Sering dalam 広大な土地・広大な自然. Lebih formal dan memberi kesan skala luas dibanding 広い.",
    "contexts": [
      "Geografi",
      "Sastra",
      "Berita"
    ],
    "examples": [
      [
        "大学は広大な敷地の中に建てられている。",
        "だいがくはこうだいなしきちのなかにたてられている。",
        "Universitas itu dibangun di atas lahan sangat luas."
      ],
      [
        "砂漠の広大な景色に圧倒された。",
        "さばくのこうだいなけしきにあっとうされた。",
        "Saya terpesona oleh pemandangan gurun yang terbentang luas。"
      ]
    ]
  },
  "発散": {
    "word": "発散",
    "reading": "はっさん",
    "meaning": "pelepasan; penyebaran; meluapkan",
    "explanation": "Mengeluarkan atau menyebarkan sesuatu dari dalam ke luar, seperti panas, aroma, energi, atau emosi.",
    "nuance": "Dalam keseharian: ストレスを発散する. Dalam ilmu pengetahuan dapat berarti penyebaran panas/zat; berbeda dari 放出 yang lebih teknis.",
    "contexts": [
      "Sehari-hari",
      "Ilmu pengetahuan",
      "Kesehatan"
    ],
    "examples": [
      [
        "運動をしてストレスを発散した。",
        "うんどうをしてすとれすをはっさんした。",
        "Saya melepaskan stres dengan berolahraga."
      ],
      [
        "この植物は強い香りを発散している。",
        "このしょくぶつはつよいかおりをはっさんしている。",
        "Tanaman ini mengeluarkan aroma yang kuat。"
      ]
    ]
  },
  "仕業": {
    "word": "仕業",
    "reading": "しわざ",
    "meaning": "perbuatan; ulah; tindakan seseorang",
    "explanation": "Tindakan seseorang atau sesuatu, sering dengan kesan menyebabkan masalah atau kejadian tertentu.",
    "nuance": "Sering dalam ～の仕業だ. Bernuansa negatif atau misterius saat pelaku belum diketahui: 誰かの仕業・動物の仕業.",
    "contexts": [
      "Percakapan",
      "Narasi",
      "Berita"
    ],
    "examples": [
      [
        "机の上が散らかっているのは、猫の仕業らしい。",
        "つくえのうえがちらかっているのは、ねこのしわざらしい。",
        "Sepertinya meja berantakan itu ulah kucing."
      ],
      [
        "これは単なる事故ではなく、誰かの仕業かもしれない。",
        "これはたんなるじこではなく、だれかのしわざかもしれない。",
        "Ini mungkin bukan kecelakaan biasa, melainkan perbuatan seseorang。"
      ]
    ]
  },
  "無造作": {
    "word": "無造作",
    "reading": "むぞうさ",
    "meaning": "sembarangan; tanpa banyak pertimbangan; santai",
    "explanation": "Melakukan sesuatu tanpa tampak berhati-hati atau menempatkan sesuatu tanpa penataan khusus.",
    "nuance": "無造作に置く berarti meletakkan sembarangan; 無造作な仕草 dapat berarti gerakan alami/santai. Tidak selalu negatif.",
    "contexts": [
      "Deskripsi",
      "Sastra",
      "Sehari-hari"
    ],
    "examples": [
      [
        "彼は書類を机の上に無造作に置いた。",
        "かれはしょるいをつくえのうえにむぞうさにおいた。",
        "Ia meletakkan dokumen begitu saja di meja."
      ],
      [
        "彼女は髪を無造作にまとめていた。",
        "かのじょはかみをむぞうさにまとめていた。",
        "Ia menata rambutnya dengan gaya sederhana dan santai。"
      ]
    ]
  },
  "総じて": {
    "word": "総じて",
    "reading": "そうじて",
    "meaning": "secara keseluruhan; pada umumnya",
    "explanation": "Menyimpulkan keadaan atau penilaian umum setelah melihat beberapa bagian/contoh.",
    "nuance": "Formal dalam tulisan/laporan. Menunjukkan kecenderungan umum, tidak berarti setiap bagian tanpa pengecualian sama.",
    "contexts": [
      "Akademik",
      "Berita",
      "Formal"
    ],
    "examples": [
      [
        "今年の新入生は総じて意欲が高い。",
        "ことしのしんにゅうせいはそうじていよくがたかい。",
        "Secara umum, mahasiswa baru tahun ini sangat termotivasi."
      ],
      [
        "参加者の評価は総じて良好だった。",
        "さんかしゃのひょうかはそうじてりょうこうだった。",
        "Penilaian peserta secara keseluruhan cukup baik。"
      ]
    ]
  },
  "免除": {
    "word": "免除",
    "reading": "めんじょ",
    "meaning": "pembebasan; pengecualian kewajiban",
    "explanation": "Membebaskan seseorang dari kewajiban, biaya, pajak, atau aturan yang biasanya harus dipenuhi.",
    "nuance": "Umum dalam 授業料免除・税金を免除する. Menunjukkan pembebasan resmi, bukan sekadar pilihan pribadi.",
    "contexts": [
      "Administrasi",
      "Pendidikan",
      "Hukum"
    ],
    "examples": [
      [
        "成績優秀者は授業料の一部が免除される。",
        "せいせきゆうしゅうしゃはじゅぎょうりょうのいちぶがめんじょされる。",
        "Sebagian biaya kuliah dibebaskan bagi mahasiswa berprestasi."
      ],
      [
        "特別な事情がある場合、手数料が免除されることがある。",
        "とくべつなじじょうがあるばあい、てすうりょうがめんじょされることがある。",
        "Dalam keadaan khusus, biaya administrasi dapat dibebaskan。"
      ]
    ]
  },
  "ブランク": {
    "word": "ブランク",
    "reading": "ぶらんく",
    "meaning": "jeda kosong; masa tidak aktif",
    "explanation": "Periode ketika seseorang tidak melakukan kegiatan tertentu seperti bekerja, belajar, atau berlatih.",
    "nuance": "Kata serapan; sering dalam ブランクがある・ブランクを埋める. Menunjuk jeda pengalaman/waktu, tidak selalu berarti lupa.",
    "contexts": [
      "Pekerjaan",
      "Pendidikan",
      "Olahraga"
    ],
    "examples": [
      [
        "三年間のブランクを経て、仕事に復帰した。",
        "さんねんかんのぶらんくをへて、しごとにふっきした。",
        "Setelah jeda tiga tahun, ia kembali bekerja."
      ],
      [
        "長いブランクがあっても、練習すれば感覚を取り戻せる。",
        "ながいぶらんくがあっても、れんしゅうすればかんかくをとりもどせる。",
        "Meski ada jeda panjang, latihan dapat mengembalikan kemampuan。"
      ]
    ]
  },
  "見込み": {
    "word": "見込み",
    "reading": "みこみ",
    "meaning": "prospek; kemungkinan; perkiraan",
    "explanation": "Perkiraan atau harapan bahwa sesuatu akan terjadi/berhasil berdasarkan keadaan yang ada.",
    "nuance": "見込みがある・完成の見込み. Menunjukkan peluang atau perkiraan, bukan kepastian mutlak.",
    "contexts": [
      "Bisnis",
      "Berita",
      "Sehari-hari"
    ],
    "examples": [
      [
        "工事は予定どおり来月完成する見込みだ。",
        "こうじはよていどおりらいげつかんせいするみこみだ。",
        "Konstruksi diperkirakan selesai bulan depan sesuai jadwal."
      ],
      [
        "新しい商品は大きな売上が見込まれている。",
        "あたらしいしょうひんはおおきなうりあげがみこまれている。",
        "Produk baru diperkirakan akan menghasilkan penjualan besar。"
      ]
    ]
  },
  "満たない": {
    "word": "満たない",
    "reading": "みたない",
    "meaning": "kurang dari; tidak mencapai angka tertentu",
    "explanation": "Menunjukkan jumlah, usia, ukuran, atau tingkat belum mencapai batas tertentu.",
    "nuance": "Umum setelah angka: 十人に満たない・三時間に満たない. Bernuansa formal dan naratif; searti “belum mencapai”.",
    "contexts": [
      "Berita",
      "Formal",
      "Akademik"
    ],
    "examples": [
      [
        "参加者は百人に満たなかった。",
        "さんかしゃはひゃくにんにみたなかった。",
        "Jumlah peserta tidak mencapai seratus orang."
      ],
      [
        "完成まで一週間に満たない時間しか残っていなかった。",
        "かんせいまでいっしゅうかんにみたないじかんしかのこっていなかった。",
        "Waktu yang tersisa sampai penyelesaian kurang dari satu minggu。"
      ]
    ]
  },
  "有数": {
    "word": "有数",
    "reading": "ゆうすう",
    "meaning": "terkemuka; salah satu yang terbaik/terbesar",
    "explanation": "Termasuk kelompok kecil yang menonjol karena tingkat, skala, atau reputasinya tinggi.",
    "nuance": "Sering dalam 世界有数・国内有数・有数の観光地. Menunjukkan posisi menonjol dalam kelompok, bukan satu-satunya terbaik.",
    "contexts": [
      "Geografi",
      "Ekonomi",
      "Pariwisata"
    ],
    "examples": [
      [
        "この都市は国内有数の観光地として知られている。",
        "このとしはこくないゆうすうのかんこうちとしてしられている。",
        "Kota ini dikenal sebagai salah satu destinasi wisata terkemuka di negeri ini."
      ],
      [
        "彼女は世界有数の研究者の一人だ。",
        "かのじょはせかいゆうすうのけんきゅうしゃのひとりだ。",
        "Ia adalah salah satu peneliti terkemuka dunia。"
      ]
    ]
  },
  "とっくに": {
    "word": "とっくに",
    "reading": "とっくに",
    "meaning": "sudah sejak lama; jauh sebelumnya",
    "explanation": "Menunjukkan sesuatu sudah terjadi jauh sebelum waktu yang sedang dibicarakan.",
    "nuance": "Kasual dan menegaskan sesuatu sebenarnya sudah selesai atau diketahui sejak lama; lebih kuat daripada もう dalam konteks tertentu.",
    "contexts": [
      "Percakapan sehari-hari"
    ],
    "examples": [
      [
        "宿題なら、とっくに終わっているよ。",
        "しゅくだいなら、とっくにおわっているよ。",
        "Kalau pekerjaan rumah, itu sudah selesai sejak tadi."
      ],
      [
        "その映画はとっくに見たことがある。",
        "そのえいがはとっくにみたことがある。",
        "Aku sudah pernah menonton film itu sejak lama。"
      ]
    ]
  },
  "まちまち": {
    "word": "まちまち",
    "reading": "まちまち",
    "meaning": "berbeda-beda; tidak seragam",
    "explanation": "Menunjukkan beberapa hal memiliki perbedaan dan tidak berada pada pola atau ukuran yang sama.",
    "nuance": "Sering untuk pendapat, hasil, ukuran: 意見はまちまちだ. Netral, tetapi dapat mengisyaratkan hasil tidak konsisten.",
    "contexts": [
      "Percakapan",
      "Bisnis",
      "Akademik"
    ],
    "examples": [
      [
        "参加者の意見はまちまちで、結論が出なかった。",
        "さんかしゃのいけんはまちまちで、けつろんがでなかった。",
        "Pendapat peserta berbeda-beda sehingga tidak ada kesimpulan."
      ],
      [
        "店によって商品の価格がまちまちだ。",
        "みせによってしょうひんのかかくがまちまちだ。",
        "Harga produk berbeda-beda tergantung toko。"
      ]
    ]
  },
  "ゆとり": {
    "word": "ゆとり",
    "reading": "ゆとり",
    "meaning": "kelonggaran; ruang; waktu/kapasitas cukup",
    "explanation": "Keadaan saat tersedia ruang, waktu, atau kapasitas sehingga seseorang dapat bertindak tanpa terlalu terdesak.",
    "nuance": "Dipakai dalam 時間のゆとり・心のゆとり. Bukan hanya waktu luang; dapat berarti kelapangan pikiran atau ruang kapasitas.",
    "contexts": [
      "Sehari-hari",
      "Pendidikan",
      "Pekerjaan"
    ],
    "examples": [
      [
        "朝にゆとりを持つため、早めに起きている。",
        "あさにゆとりをもつため、はやめにおきている。",
        "Saya bangun lebih awal agar punya waktu cukup pada pagi hari."
      ],
      [
        "心にゆとりがあれば、周囲にも優しくできる。",
        "こころにゆとりがあれば、しゅういにもやさしくできる。",
        "Jika pikiran lapang, kita bisa bersikap lebih baik kepada sekitar。"
      ]
    ]
  },
  "質素": {
    "word": "質素",
    "reading": "しっそ",
    "meaning": "sederhana; bersahaja; tidak mewah",
    "explanation": "Menggambarkan gaya hidup, pakaian, atau makanan yang tidak berlebihan dalam kemewahan.",
    "nuance": "質素な生活・質素な食事. Lebih menekankan kesederhanaan/penghematan; 簡素 lebih pada bentuk/desain yang tidak rumit.",
    "contexts": [
      "Sehari-hari",
      "Budaya",
      "Sastra"
    ],
    "examples": [
      [
        "祖父母は質素な暮らしを大切にしている。",
        "そふぼはしっそなくらしをたいせつにしている。",
        "Kakek dan nenek menghargai kehidupan sederhana."
      ],
      [
        "式の後、参加者には質素な食事が用意された。",
        "しきのあと、さんかしゃにはしっそなしょくじがよういされた。",
        "Setelah acara, makanan sederhana disediakan untuk peserta。"
      ]
    ]
  },
  "連携": {
    "word": "連携",
    "reading": "れんけい",
    "meaning": "koordinasi; kerja sama terhubung",
    "explanation": "Beberapa orang, organisasi, atau sistem bekerja sama dengan menghubungkan tindakan dan informasi.",
    "nuance": "Menekankan koordinasi antarpihak: 連携する・連携を強化する. Lebih terstruktur daripada 協力 yang bisa bersifat umum.",
    "contexts": [
      "Bisnis",
      "Organisasi",
      "Teknologi"
    ],
    "examples": [
      [
        "大学と企業が連携して新しい技術を開発した。",
        "だいがくときぎょうがれんけいしてあたらしいぎじゅつをかいはつした。",
        "Universitas dan perusahaan bekerja sama mengembangkan teknologi baru."
      ],
      [
        "関係部署との連携が、円滑な運営につながる。",
        "かんけいぶしょとのれんけいが、えんかつなうんえいにつながる。",
        "Koordinasi dengan departemen terkait menghasilkan operasional lancar。"
      ]
    ]
  },
  "不服": {
    "word": "不服",
    "reading": "ふふく",
    "meaning": "tidak puas; keberatan",
    "explanation": "Perasaan tidak puas atau keberatan terhadap keputusan, perlakuan, atau hasil yang diterima.",
    "nuance": "Formal: 不服を申し立てる・判決に不服がある. Sering muncul dalam prosedur hukum/administrasi; lebih resmi daripada 不満.",
    "contexts": [
      "Hukum",
      "Administrasi",
      "Formal"
    ],
    "examples": [
      [
        "判決に不服がある場合は、期限内に申し立てる必要がある。",
        "はんけつにふふくがあるばあいは、きげんないにもうしたてるひつようがある。",
        "Jika keberatan terhadap putusan, pengajuan harus dilakukan sesuai tenggat."
      ],
      [
        "彼は評価の結果に不服を示した。",
        "かれはひょうかのけっかにふふくをしめした。",
        "Ia menunjukkan keberatan terhadap hasil penilaian。"
      ]
    ]
  },
  "叶う": {
    "word": "叶う",
    "reading": "かなう",
    "meaning": "terwujud; terkabul; menjadi kenyataan",
    "explanation": "Keinginan, harapan, atau cita-cita menjadi kenyataan setelah diharapkan atau diusahakan.",
    "nuance": "夢が叶う・願いが叶う. Jangan tertukar dengan 敵う (mampu menandingi) atau 適う (sesuai); dipilih makna harapan terwujud.",
    "contexts": [
      "Sosial",
      "Sastra",
      "Percakapan"
    ],
    "examples": [
      [
        "長年の夢がついに叶った。",
        "ながねんのゆめがついにかなった。",
        "Impian lama akhirnya terwujud."
      ],
      [
        "願いが叶うように、毎日努力を続けている。",
        "ねがいがかなうように、まいにちどりょくをつづけている。",
        "Saya terus berusaha setiap hari agar harapan terwujud。"
      ]
    ]
  },
  "目覚ましい": {
    "word": "目覚ましい",
    "reading": "めざましい",
    "meaning": "luar biasa; mencolok; pesat",
    "explanation": "Menunjukkan kemajuan, prestasi, atau perubahan yang sangat terlihat dan mengesankan.",
    "nuance": "Umumnya positif: 目覚ましい発展・目覚ましい活躍. Mengandung kesan kagum pada hasil atau perkembangan.",
    "contexts": [
      "Berita",
      "Akademik",
      "Bisnis"
    ],
    "examples": [
      [
        "この地域は近年、目覚ましい発展を遂げている。",
        "このちいきはきんねん、めざましいはってんをとげている。",
        "Wilayah ini mengalami perkembangan luar biasa beberapa tahun terakhir."
      ],
      [
        "若手選手の目覚ましい活躍が注目を集めた。",
        "わかてせんしゅのめざましいかつやくがちゅうもくをあつめた。",
        "Penampilan luar biasa atlet muda itu menarik perhatian。"
      ]
    ]
  },
  "解ける": {
    "word": "解ける",
    "reading": "ほどける",
    "meaning": "terurai; terlepas; menjadi longgar",
    "explanation": "Menjadi terlepas dari keadaan terikat atau terjalin, seperti tali dan simpul.",
    "nuance": "Bacaan ほどける untuk simpul/ikatan terurai; berbeda dari とける yang juga dapat ditulis 解ける dan berarti soal terpecahkan atau larutan larut.",
    "contexts": [
      "Sehari-hari",
      "Narasi",
      "Deskripsi"
    ],
    "examples": [
      [
        "歩いているうちに靴ひもがほどけてしまった。",
        "あるいているうちにくつひもがほどけてしまった。",
        "Saat berjalan, tali sepatu saya terlepas."
      ],
      [
        "緊張が少しずつほどけて、自然に話せるようになった。",
        "きんちょうがすこしずつほどけて、しぜんにはなせるようになった。",
        "Ketegangan perlahan mencair sehingga saya bisa berbicara alami。"
      ]
    ]
  },
  "赴任": {
    "word": "赴任",
    "reading": "ふにん",
    "meaning": "penempatan tugas; mulai bertugas di tempat baru",
    "explanation": "Pergi ke tempat yang ditentukan untuk menjalankan pekerjaan atau jabatan baru.",
    "nuance": "海外に赴任する・赴任先. 配属 menentukan unit kerja; 赴任 menekankan keberangkatan/penempatan lokasi tugas.",
    "contexts": [
      "Pekerjaan",
      "Bisnis",
      "Administrasi"
    ],
    "examples": [
      [
        "彼は来月から大阪支社に赴任する。",
        "かれはらいげつからおおさかししゃにふにんする。",
        "Ia mulai bertugas di kantor cabang Osaka bulan depan."
      ],
      [
        "海外赴任が決まり、家族と準備を進めている。",
        "かいがいふにんがきまり、かぞくとじゅんびをすすめている。",
        "Penugasan ke luar negeri diputuskan dan ia menyiapkan semuanya bersama keluarga。"
      ]
    ]
  },
  "調達": {
    "word": "調達",
    "reading": "ちょうたつ",
    "meaning": "pengadaan; penyediaan kebutuhan",
    "explanation": "Mendapatkan atau menyediakan barang, bahan, dana, atau sumber daya untuk suatu kegiatan.",
    "nuance": "資金・材料・物資を調達する. Lebih formal dan terencana daripada 手に入れる; menekankan proses memenuhi kebutuhan.",
    "contexts": [
      "Bisnis",
      "Keuangan",
      "Administrasi"
    ],
    "examples": [
      [
        "会社は新しい設備を導入するための資金を調達した。",
        "かいしゃはあたらしいせつびをどうにゅうするためのしきんをちょうたつした。",
        "Perusahaan mengadakan dana untuk memperkenalkan peralatan baru."
      ],
      [
        "災害地域に必要な物資を調達している。",
        "さいがいちいきにひつようなぶっしをちょうたつしている。",
        "Mereka menyediakan barang kebutuhan untuk wilayah bencana。"
      ]
    ]
  },
  "細心": {
    "word": "細心",
    "reading": "さいしん",
    "meaning": "sangat cermat; penuh kehati-hatian",
    "explanation": "Menunjukkan perhatian teliti terhadap detail untuk menghindari kesalahan atau risiko.",
    "nuance": "Sering dalam 細心の注意を払う・細心の配慮. Formal; menekankan kecermatan sangat tinggi, bukan sekadar hati-hati umum.",
    "contexts": [
      "Pekerjaan",
      "Administrasi",
      "Formal"
    ],
    "examples": [
      [
        "個人情報を扱う際は、細心の注意を払う必要がある。",
        "こじんじょうほうをあつかうさいは、さいしんのちゅういをはらうひつようがある。",
        "Saat menangani data pribadi, kita perlu sangat cermat."
      ],
      [
        "彼女は細心の配慮をもって参加者に対応した。",
        "かのじょはさいしんのはいりょをもってさんかしゃにたいおうした。",
        "Ia melayani peserta dengan perhatian yang sangat teliti。"
      ]
    ]
  },
  "意地": {
    "word": "意地",
    "reading": "いじ",
    "meaning": "harga diri; kemauan keras; gengsi",
    "explanation": "Perasaan yang membuat seseorang bertahan pada pendirian, berusaha keras, atau tidak mau mengalah.",
    "nuance": "意地を張る berarti keras kepala/gengsi; 意地でもやる berarti akan melakukannya dengan segala cara. Bisa positif maupun negatif.",
    "contexts": [
      "Sosial",
      "Olahraga",
      "Percakapan"
    ],
    "examples": [
      [
        "彼は意地を張らずに、自分の間違いを認めた。",
        "かれはいじをはらずに、じぶんのまちがいをみとめた。",
        "Ia tidak mempertahankan gengsi dan mengakui kesalahan."
      ],
      [
        "最後まで意地を見せて、試合を戦い抜いた。",
        "さいごまでいじをみせて、しあいをたたかいぬいた。",
        "Ia menunjukkan tekad hingga akhir pertandingan。"
      ]
    ]
  },
  "めきめき": {
    "word": "めきめき",
    "reading": "めきめき",
    "meaning": "pesat; terlihat jelas meningkat",
    "explanation": "Menggambarkan kemampuan atau hasil yang berkembang cepat dan mudah terlihat.",
    "nuance": "Bernuansa positif: 日本語がめきめき上達する. Menunjukkan kemajuan nyata dalam waktu relatif singkat.",
    "contexts": [
      "Pendidikan",
      "Olahraga",
      "Percakapan"
    ],
    "examples": [
      [
        "彼は毎日練習して、日本語がめきめき上達した。",
        "かれはまいにちれんしゅうして、にほんごがめきめきじょうたつした。",
        "Ia berlatih setiap hari dan bahasa Jepangnya meningkat pesat."
      ],
      [
        "新しい選手は経験を積むにつれて、めきめき力を伸ばしている。",
        "あたらしいせんしゅはけいけんをつむにつれて、めきめきちからをのばしている。",
        "Atlet baru itu meningkatkan kemampuannya dengan pesat seiring pengalaman。"
      ]
    ]
  },
  "目先": {
    "word": "目先",
    "reading": "めさき",
    "meaning": "jangka pendek; hal di depan mata",
    "explanation": "Hal yang langsung terlihat atau menjadi perhatian dalam waktu dekat, berbeda dari tujuan jangka panjang.",
    "nuance": "目先の利益・目先のこと. Bernada kritis saat orang hanya memikirkan keuntungan atau masalah jangka pendek tanpa melihat gambaran besar.",
    "contexts": [
      "Bisnis",
      "Sosial",
      "Berita"
    ],
    "examples": [
      [
        "目先の利益だけでなく、長期的な価値も考えるべきだ。",
        "めさきのりえきだけでなく、ちょうきてきなかちもかんがえるべきだ。",
        "Kita perlu memikirkan nilai jangka panjang, bukan hanya keuntungan sesaat."
      ],
      [
        "目先の問題に追われて、将来の計画を立てられない。",
        "めさきのもんだいにおわれて、しょうらいのけいかくをたてられない。",
        "Karena sibuk dengan masalah langsung, saya tidak bisa menyusun rencana masa depan。"
      ]
    ]
  },
  "密集": {
    "word": "密集",
    "reading": "みっしゅう",
    "meaning": "berkumpul rapat; padat",
    "explanation": "Keadaan ketika banyak orang, bangunan, atau benda terkumpul dalam area sempit dan berdekatan.",
    "nuance": "建物が密集する・人口密集地域. Menekankan jarak rapat dan konsentrasi tinggi, bukan sekadar jumlah banyak.",
    "contexts": [
      "Geografi",
      "Berita",
      "Deskripsi"
    ],
    "examples": [
      [
        "この地域には古い住宅が密集している。",
        "このちいきにはふるいじゅうたくがみっしゅうしている。",
        "Rumah tua berkumpul sangat rapat di wilayah ini."
      ],
      [
        "人が密集する場所では、周囲への配慮が必要だ。",
        "ひとがみっしゅうするばしょでは、しゅういへのはいりょがひつようだ。",
        "Di tempat padat orang, kita perlu memperhatikan sekitar。"
      ]
    ]
  },
  "潔い": {
    "word": "潔い",
    "reading": "いさぎよい",
    "meaning": "tegas dan lapang dada; berani menerima kenyataan",
    "explanation": "Bersikap tanpa ragu dan menerima keputusan/kenyataan secara jujur serta lapang dada.",
    "nuance": "潔く認める・潔い決断. Bernuansa positif untuk keberanian mengakui kesalahan atau mundur tanpa mencari alasan.",
    "contexts": [
      "Sosial",
      "Olahraga",
      "Sastra"
    ],
    "examples": [
      [
        "彼は自分の失敗を潔く認めた。",
        "かれはじぶんのしっぱいをいさぎよくみとめた。",
        "Ia dengan lapang dada mengakui kegagalannya."
      ],
      [
        "負けを潔く認めて、相手を称えた。",
        "まけをいさぎよくみとめて、あいてをたたえた。",
        "Ia menerima kekalahan dengan sportif dan memuji lawannya。"
      ]
    ]
  },
  "にぎわう": {
    "word": "にぎわう",
    "reading": "にぎわう",
    "meaning": "ramai; semarak; dipenuhi aktivitas",
    "explanation": "Tempat menjadi ramai karena banyak orang berkumpul, berbelanja, berkunjung, atau beraktivitas.",
    "nuance": "商店街がにぎわう・観光客でにぎわう. Bernuansa positif, menggambarkan tempat hidup dan penuh aktivitas.",
    "contexts": [
      "Pariwisata",
      "Sehari-hari",
      "Berita"
    ],
    "examples": [
      [
        "週末になると、この商店街は買い物客でにぎわう。",
        "しゅうまつになると、このしょうてんがいはかいものきゃくでにぎわう。",
        "Saat akhir pekan, kawasan pertokoan ramai oleh pembeli."
      ],
      [
        "祭りの日には、町全体が多くの人でにぎわった。",
        "まつりのひには、まちぜんたいがおおくのひとでにぎわった。",
        "Pada hari festival, seluruh kota dipenuhi banyak orang。"
      ]
    ]
  },
  "ひとまず": {
    "word": "ひとまず",
    "reading": "ひとまず",
    "meaning": "untuk sementara; pertama-tama",
    "explanation": "Melakukan sesuatu sebagai tindakan sementara atau langkah pertama sebelum keputusan berikutnya.",
    "nuance": "Tidak berarti masalah telah selesai. Sering untuk menetapkan langkah awal: ひとまず休む・ひとまず安心する. Nuansanya “untuk saat ini”.",
    "contexts": [
      "Percakapan",
      "Pekerjaan",
      "Sehari-hari"
    ],
    "examples": [
      [
        "細かい点は後で確認し、ひとまず作業を始めよう。",
        "こまかいてんはあとでかくにんし、ひとまずさぎょうをはじめよう。",
        "Detailnya diperiksa nanti; untuk sementara mari mulai pekerjaan."
      ],
      [
        "ひとまず全員の安全が確認できて安心した。",
        "ひとまずぜんいんのあんぜんがかくにんできてあんしんした。",
        "Untuk sementara saya lega karena keselamatan semua orang dipastikan。"
      ]
    ]
  },
  "満喫": {
    "word": "満喫",
    "reading": "まんきつ",
    "meaning": "menikmati sepenuhnya; menikmati sampai puas",
    "explanation": "Menikmati pengalaman, waktu, tempat, atau suasana secara penuh dan maksimal.",
    "nuance": "旅行を満喫する・休日を満喫する. Lebih kuat daripada 楽しむ karena memberi kesan menikmati seluruh kesempatan/pengalaman.",
    "contexts": [
      "Pariwisata",
      "Sehari-hari",
      "Percakapan"
    ],
    "examples": [
      [
        "週末は温泉旅行を満喫した。",
        "しゅうまつはおんせんりょこうをまんきつした。",
        "Saya menikmati sepenuhnya perjalanan pemandian air panas akhir pekan."
      ],
      [
        "留学中に現地の文化や生活を満喫したい。",
        "りゅうがくちゅうにげんちのぶんかやせいかつをまんきつしたい。",
        "Selama studi di luar negeri, saya ingin menikmati budaya dan kehidupan setempat sepenuhnya。"
      ]
    ]
  },
  "合致": {
    "word": "合致",
    "reading": "がっち",
    "meaning": "kesesuaian; kecocokan; sejalan",
    "explanation": "Dua hal memiliki isi, tujuan, syarat, atau keadaan yang cocok satu sama lain.",
    "nuance": "Lebih formal daripada 合う. Sering dipakai dalam 条件に合致する atau 方針と合致する pada dokumen, berita, dan pembahasan resmi.",
    "contexts": [
      "Bisnis",
      "Berita",
      "Formal"
    ],
    "examples": [
      [
        "応募条件に合致しているか確認してください。",
        "おうぼじょうけんにがっちしているかかくにんしてください。",
        "Silakan periksa apakah Anda memenuhi persyaratan pendaftaran."
      ],
      [
        "両者の考え方は会社の方針と合致している。",
        "りょうしゃのかんがえかたはかいしゃのほうしんとがっちしている。",
        "Pandangan keduanya sejalan dengan kebijakan perusahaan。"
      ]
    ]
  }
};

// Urutan kosakata dipertahankan persis seperti daftar sumber, termasuk pengulangan.
const sourceOrder = [
  "秘める", "加工", "養う", "資質", "正当", "ありきたり", "間柄", "風潮",
  "もたらす", "撤回", "補填", "コンスタント", "ずばり", "解約", "特産", "問い詰める",
  "改修", "手厚い", "デマ", "兆し", "収容", "冴える", "痛烈", "完結",
  "脆い", "出荷", "譲る", "底力", "絶大", "手痛い", "誘致", "結末",
  "そそる", "遮断", "要請", "ぎこちない", "断じて", "均等", "リタイア", "押収",
  "望ましい", "本場", "絶滅", "素早い", "露骨", "交付", "頑な", "懐く",
  "もはや", "円滑", "怠る", "失脚", "収容", "実に", "要望", "覆す",
  "繁盛", "くじける", "ひたむき", "互角", "簡素", "解明", "ほほえましい", "目安",
  "様相", "交える", "作動", "しぶとい", "備え付ける", "基調", "かさばる", "交錯",
  "巧み", "配属", "乗り出す", "面識", "抜粋", "心当たり", "重複", "拠点",
  "真っ先", "緊密", "遂げる", "うなだれる", "昇進", "配布", "滅びる", "発足",
  "提起", "見落とす", "閑静", "たやすい", "察する", "内訳", "食い違う", "過密",
  "規制", "入手", "素早い", "経緯", "退く", "還元", "辞任", "帯びる",
  "軌道", "思い詰める", "もはや", "はなはだしい", "没頭", "人手", "今更", "隈なく",
  "安静", "統合", "抱え込む", "裏腹", "耐えがたい", "携わる", "人一倍", "復旧",
  "一律", "剥がす", "心構え", "損なう", "しがみつく", "工面", "処置", "拍子",
  "口出し", "煩雑", "当てはめる", "打開", "円滑", "優位", "かばう", "加味",
  "気配", "合致", "広大", "秘める", "発散", "仕業", "無造作", "総じて",
  "免除", "ブランク", "怠る", "見込み", "満たない", "有数", "とっくに", "まちまち",
  "ゆとり", "配布", "質素", "連携", "不服", "叶う", "目覚ましい", "解ける",
  "赴任", "調達", "細心", "意地", "めきめき", "目先", "見落とす", "密集",
  "潔い", "発足", "にぎわう", "ひとまず", "満喫"
];

const occurrences = new Map();
export const day3Vocabulary = sourceOrder.map((word, index) => {
  const item = entries[word];
  if (!item) throw new Error(`Data Day 3 tidak ditemukan: ${word}`);
  const count = (occurrences.get(word) || 0) + 1;
  occurrences.set(word, count);
  return {
    id: `d3-${String(index + 1).padStart(3, '0')}-${String(count).padStart(2, '0')}`,
    ...item,
    examples: item.examples.map(([japanese, furigana, translation]) => ({ japanese, furigana, translation }))
  };
});

export default day3Vocabulary;
