// Day 2 — data kosakata. Setiap kosakata memiliki arti, penjelasan, nuansa pemakaian,
// konteks, dan dua contoh kalimat lengkap dengan bacaan serta terjemahan bahasa Indonesia.

const entries = {
  kaiyaku: {
    word: '解約',
    reading: 'かいやく',
    meaning: 'membatalkan kontrak; mengakhiri langganan',
    explanation:
      'Mengakhiri perjanjian atau layanan yang masih berlaku, seperti kontrak telepon, sewa, atau keanggotaan.',
    nuance:
      'Biasanya dipakai untuk kontrak dan layanan berlangganan. Berbeda dari 解除 yang lebih luas dan sering berarti mencabut pembatasan atau ketentuan.',
    contexts: ['Administrasi', 'Bisnis', 'Kehidupan sehari-hari'],
    examples: [
      [
        '使わなくなった携帯電話の契約を解約した。',
        'つかわなくなったけいたいでんわのけいやくをかいやくした。',
        'Saya membatalkan kontrak telepon seluler yang sudah tidak digunakan.'
      ],
      [
        '解約する前に、違約金が発生するか確認してください。',
        'かいやくするまえに、いやくきんがはっせいするかかくにんしてください。',
        'Sebelum membatalkan kontrak, periksalah apakah ada biaya penalti.'
      ]
    ]
  },
  tokusan: {
    word: '特産',
    reading: 'とくさん',
    meaning: 'produk khas daerah; hasil produksi unggulan suatu wilayah',
    explanation:
      'Barang atau hasil bumi yang diproduksi secara khas di suatu daerah dan dikenal sebagai ciri wilayah tersebut.',
    nuance:
      'Sering muncul sebagai 特産品 atau 特産物. Menekankan asal daerah dan kekhasan produk, sedangkan 名物 dapat mencakup makanan, tempat, atau hal terkenal lainnya.',
    contexts: ['Pariwisata', 'Ekonomi', 'Kehidupan sosial'],
    examples: [
      [
        'この町はリンゴの特産地として知られている。',
        'このまちはりんごのとくさんちとしてしられている。',
        'Kota ini dikenal sebagai daerah penghasil apel khas.'
      ],
      [
        '観光客向けに地元の特産品を販売している。',
        'かんこうきゃくむけにじもとのとくさんひんをはんばいしている。',
        'Produk khas setempat dijual untuk para wisatawan.'
      ]
    ]
  },
  toitsumeru: {
    word: '問い詰める',
    reading: 'といつめる',
    meaning: 'mendesak dengan pertanyaan; menginterogasi',
    explanation:
      'Terus mengajukan pertanyaan kepada seseorang untuk memperoleh penjelasan atau mengungkap kebenaran.',
    nuance:
      'Bernuansa kuat dan dapat terdengar menekan atau menuduh. Sering digunakan ketika seseorang diminta menjelaskan alasan, kesalahan, atau hal yang disembunyikan.',
    contexts: ['Percakapan', 'Berita', 'Kehidupan sosial'],
    examples: [
      [
        '母は帰宅が遅れた理由を私に問い詰めた。',
        'はははきたくがおくれたりゆうをわたしにといつめた。',
        'Ibu mendesakku untuk menjelaskan alasan pulang terlambat.'
      ],
      [
        '記者たちは大臣に説明責任を問い詰めた。',
        'きしゃたちはだいじんにせつめいせきにんをといつめた。',
        'Para wartawan mendesak menteri agar menjelaskan tanggung jawabnya.'
      ]
    ]
  },
  kaishuu: {
    word: '改修',
    reading: 'かいしゅう',
    meaning: 'renovasi; perbaikan; pembaruan fasilitas atau sistem',
    explanation:
      'Memperbaiki dan memperbarui bangunan, fasilitas, perangkat, atau sistem agar kondisinya lebih baik atau sesuai kebutuhan.',
    nuance:
      'Lebih sering untuk fasilitas dan sistem daripada 修理 yang biasanya memperbaiki benda rusak. Gedung, jalan, situs web, dan perangkat lunak dapat menjadi objek 改修.',
    contexts: ['Konstruksi', 'Teknologi', 'Administrasi'],
    examples: [
      [
        '古くなった校舎を改修する工事が始まった。',
        'ふるくなったこうしゃをかいしゅうするこうじがはじまった。',
        'Pekerjaan renovasi gedung sekolah yang sudah tua telah dimulai.'
      ],
      [
        '利用者の意見を受けて、ウェブサイトを改修した。',
        'りようしゃのいけんをうけて、うぇぶさいとをかいしゅうした。',
        'Situs web diperbarui berdasarkan masukan para pengguna.'
      ]
    ]
  },
  teatsui: {
    word: '手厚い',
    reading: 'てあつい',
    meaning: 'penuh perhatian; menyeluruh; diberikan dengan perhatian besar',
    explanation:
      'Menggambarkan bantuan, perlakuan, dukungan, atau pelayanan yang dilakukan dengan perhatian dan sumber daya yang cukup.',
    nuance:
      'Sering dipakai untuk dukungan, perawatan, jaminan, dan bantuan. Bernada positif; 手厚い支援 berarti dukungan yang sangat memadai dan penuh perhatian.',
    contexts: ['Kesehatan', 'Sosial', 'Pekerjaan'],
    examples: [
      [
        '被災者には手厚い支援が必要だ。',
        'ひさいしゃにはてあついしえんがひつようだ。',
        'Para korban bencana membutuhkan dukungan yang menyeluruh.'
      ],
      [
        'この施設では高齢者に手厚い介護を提供している。',
        'このしせつではこうれいしゃにてあついかいごをていきょうしている。',
        'Fasilitas ini menyediakan perawatan penuh perhatian bagi para lansia.'
      ]
    ]
  },
  dema: {
    word: 'デマ',
    reading: 'でま',
    meaning: 'berita bohong; rumor palsu',
    explanation:
      'Informasi yang tidak benar atau belum terbukti, tetapi disebarkan seolah-olah merupakan fakta.',
    nuance:
      'Bersifat negatif dan sering muncul dalam konteks media sosial, bencana, atau politik. デマを流す berarti menyebarkan rumor palsu.',
    contexts: ['Media', 'Berita', 'Kehidupan sosial'],
    examples: [
      [
        '根拠のないデマを信じないようにしよう。',
        'こんきょのないでまをしんじないようにしよう。',
        'Mari jangan percaya pada berita bohong yang tidak memiliki dasar.'
      ],
      [
        '災害時にはデマが急速に広まることがある。',
        'さいがいじにはでまがきゅうそくにひろまることがある。',
        'Saat bencana, rumor palsu terkadang menyebar dengan cepat.'
      ]
    ]
  },
  hedate: {
    word: '隔たり',
    reading: 'へだたり',
    meaning: 'jarak; kesenjangan; perbedaan yang memisahkan',
    explanation:
      'Keadaan ketika dua pihak, pendapat, angka, atau tingkat berada berjauhan atau berbeda cukup besar.',
    nuance:
      'Dapat bermakna jarak fisik maupun kesenjangan abstrak. 意見の隔たり dan 世代間の隔たり sering dipakai untuk perbedaan pendapat atau generasi.',
    contexts: ['Berita', 'Sosial', 'Akademik'],
    examples: [
      [
        '両者の意見には大きな隔たりがある。',
        'りょうしゃのいけんにはおおきなへだたりがある。',
        'Terdapat perbedaan besar antara pendapat kedua pihak.'
      ],
      [
        '理想と現実の隔たりを埋める努力が必要だ。',
        'りそうとげんじつのへだたりをうめるどりょくがひつようだ。',
        'Diperlukan usaha untuk menjembatani kesenjangan antara ideal dan kenyataan.'
      ]
    ]
  },
  katayori: {
    word: '偏り',
    reading: 'かたより',
    meaning: 'ketimpangan; keberpihakan; distribusi yang tidak merata',
    explanation:
      'Keadaan ketika sesuatu terkonsentrasi pada satu sisi atau kelompok sehingga tidak seimbang.',
    nuance:
      'Dapat merujuk pada distribusi data, pola makan, informasi, atau penilaian. 偏りがある sering menyiratkan kurangnya keseimbangan atau objektivitas.',
    contexts: ['Akademik', 'Berita', 'Kehidupan sehari-hari'],
    examples: [
      [
        '栄養の偏りを防ぐため、野菜も食べている。',
        'えいようのかたよりをふせぐため、やさいもたべている。',
        'Saya juga makan sayuran untuk mencegah ketidakseimbangan gizi.'
      ],
      [
        '報道内容に偏りがないか検証する必要がある。',
        'ほうどうないようにかたよりがないかけんしょうするひつようがある。',
        'Kita perlu memeriksa apakah isi pemberitaan tidak memihak.'
      ]
    ]
  },
  ayamari: {
    word: '誤り',
    reading: 'あやまり',
    meaning: 'kesalahan; kekeliruan',
    explanation:
      'Hal yang tidak tepat atau menyimpang dari fakta, aturan, perhitungan, maupun cara yang benar.',
    nuance:
      'Lebih formal daripada 間違い dan sering digunakan dalam tulisan, koreksi, laporan, atau penjelasan. 誤りを正す berarti memperbaiki kekeliruan.',
    contexts: ['Akademik', 'Administrasi', 'Berita'],
    examples: [
      [
        '報告書に数字の誤りが見つかった。',
        'ほうこくしょにすうじのあやまりがみつかった。',
        'Ditemukan kesalahan angka dalam laporan.'
      ],
      [
        '誤りを認めて、すぐに訂正した。',
        'あやまりをみとめて、すぐにていせいした。',
        'Ia mengakui kekeliruannya dan segera memperbaikinya.'
      ]
    ]
  },
  kodawari: {
    word: '拘り',
    reading: 'こだわり',
    meaning: 'perhatian khusus; prinsip atau standar yang dipegang teguh',
    explanation:
      'Sikap sangat memperhatikan detail atau mempertahankan standar tertentu dalam memilih dan melakukan sesuatu.',
    nuance:
      'Dapat bernada positif sebagai ketelitian dan kualitas, atau negatif sebagai sikap terlalu terpaku. Sering ditulis こだわり dalam teks umum.',
    contexts: ['Kehidupan sehari-hari', 'Bisnis', 'Deskripsi'],
    examples: [
      [
        'この店は素材への拘りが強い。',
        'このみせはそざいへのこだわりがつよい。',
        'Toko ini sangat memperhatikan kualitas bahan.'
      ],
      [
        '彼は細部に拘りすぎて、作業が進まないことがある。',
        'かれはさいぶにこだわりすぎて、さぎょうがすすまないことがある。',
        'Ia terkadang terlalu terpaku pada detail sehingga pekerjaannya tidak maju.'
      ]
    ]
  },
  furumau: {
    word: '振る舞う',
    reading: 'ふるまう',
    meaning: 'berperilaku; bersikap; menyajikan (makanan/minuman)',
    explanation:
      'Bertindak atau menunjukkan sikap tertentu dalam suatu situasi; juga dapat berarti menyuguhkan sesuatu kepada orang lain.',
    nuance:
      'Untuk perilaku, sering muncul sebagai 〜のように振る舞う. Dalam arti menyajikan, ごちそうを振る舞う berarti menjamu dengan hidangan.',
    contexts: ['Kehidupan sosial', 'Percakapan', 'Budaya'],
    examples: [
      [
        '彼は何事もなかったかのように振る舞った。',
        'かれはなにごともなかったかのようにふるまった。',
        'Ia bersikap seolah-olah tidak terjadi apa-apa.'
      ],
      [
        '祭りの後、近所の人に料理を振る舞った。',
        'まつりのあと、きんじょのひとにりょうりをふるまった。',
        'Setelah festival, kami menyajikan makanan kepada para tetangga.'
      ]
    ]
  },
  ninau: {
    word: '担う',
    reading: 'になう',
    meaning: 'memikul; mengemban; bertanggung jawab atas',
    explanation:
      'Memikul suatu tugas, peran, tanggung jawab, atau beban, baik secara harfiah maupun abstrak.',
    nuance:
      'Sering digunakan dalam bahasa formal untuk peran sosial atau organisasi: 次世代を担う, 役割を担う. Menekankan tanggung jawab yang dipikul.',
    contexts: ['Akademik', 'Berita', 'Pekerjaan'],
    examples: [
      [
        '若者が地域の未来を担っている。',
        'わかものがちいきのみらいをになっている。',
        'Kaum muda memikul tanggung jawab atas masa depan daerah.'
      ],
      [
        '彼女はプロジェクトの中心的な役割を担った。',
        'かのじょはぷろじぇくとのちゅうしんてきなやくわりをになった。',
        'Ia mengemban peran utama dalam proyek tersebut.'
      ]
    ]
  },
  atsukau: {
    word: '扱う',
    reading: 'あつかう',
    meaning: 'menangani; memperlakukan; membahas; menjual',
    explanation:
      'Melakukan penanganan terhadap benda atau orang, memperlakukan sesuatu dengan cara tertentu, atau menjadikan suatu topik sebagai bahan pembahasan.',
    nuance:
      'Maknanya bergantung objek: 機械を扱う (mengoperasikan mesin), 人を扱う (memperlakukan orang), 問題を扱う (membahas masalah).',
    contexts: ['Pekerjaan', 'Pendidikan', 'Kehidupan sehari-hari'],
    examples: [
      [
        'この店では海外の食品も扱っている。',
        'このみせではかいがいのしょくひんもあつかっている。',
        'Toko ini juga menjual produk makanan luar negeri.'
      ],
      [
        '個人情報は慎重に扱わなければならない。',
        'こじんじょうほうはしんちょうにあつかわなければならない。',
        'Informasi pribadi harus ditangani dengan hati-hati.'
      ]
    ]
  },
  makanau: {
    word: '賄う',
    reading: 'まかなう',
    meaning: 'membiayai; mencukupi; menyediakan kebutuhan',
    explanation:
      'Menyediakan kebutuhan atau menutup biaya menggunakan sumber daya yang tersedia.',
    nuance:
      'Sering digunakan dalam 費用を賄う (membiayai), 家計を賄う (mencukupi kebutuhan rumah tangga), dan 食事を賄う (menyediakan makanan).',
    contexts: ['Keuangan', 'Kehidupan sehari-hari', 'Bisnis'],
    examples: [
      [
        '学費の半分は奨学金で賄っている。',
        'がくひのはんぶんはしょうがくきんでまかなっている。',
        'Setengah biaya kuliah dibiayai dengan beasiswa.'
      ],
      [
        '自家栽培の野菜で食事を賄うこともある。',
        'じかさいばいのやさいでしょくじをまかなうこともある。',
        'Terkadang kebutuhan makanan dipenuhi dengan sayuran yang ditanam sendiri.'
      ]
    ]
  },
  koukyou: {
    word: '好況',
    reading: 'こうきょう',
    meaning: 'kemakmuran ekonomi; keadaan ekonomi yang baik',
    explanation:
      'Keadaan ketika kegiatan ekonomi berjalan baik, produksi dan konsumsi aktif, serta bisnis cenderung berkembang.',
    nuance:
      'Istilah ekonomi yang berlawanan dengan 不況. Sering muncul dalam 好況が続く atau 好況に沸く.',
    contexts: ['Ekonomi', 'Berita', 'Bisnis'],
    examples: [
      [
        '好況を背景に、企業の採用が増えている。',
        'こうきょうをはいけいに、きぎょうのさいようがふえている。',
        'Dengan kondisi ekonomi yang baik, perekrutan perusahaan meningkat.'
      ],
      [
        '長い好況の後、景気に陰りが見え始めた。',
        'ながいこうきょうのあと、けいきにかげりがみえはじめた。',
        'Setelah masa kemakmuran yang panjang, tanda-tanda perlambatan ekonomi mulai terlihat.'
      ]
    ]
  },
  kigeki: {
    word: '喜劇',
    reading: 'きげき',
    meaning: 'komedi; drama yang mengundang tawa',
    explanation:
      'Karya drama atau pertunjukan yang menampilkan situasi lucu dan bertujuan menghibur penonton.',
    nuance:
      'Merupakan istilah seni pertunjukan dan berpasangan dengan 悲劇 (tragedi). Dapat digunakan untuk film, teater, atau kejadian lucu secara kiasan.',
    contexts: ['Seni', 'Hiburan', 'Sastra'],
    examples: [
      [
        '彼は喜劇を中心に舞台で活躍している。',
        'かれはきげきをちゅうしんにぶたいでかつやくしている。',
        'Ia aktif di panggung, terutama dalam pertunjukan komedi.'
      ],
      [
        'その映画は社会風刺を取り入れた喜劇だ。',
        'そのえいがはしゃかいふうしをとりいれたきげきだ。',
        'Film itu merupakan komedi yang memasukkan satire sosial.'
      ]
    ]
  },
  kaikyo: {
    word: '快挙',
    reading: 'かいきょ',
    meaning: 'prestasi luar biasa; pencapaian gemilang',
    explanation:
      'Tindakan atau hasil yang sangat mengesankan dan patut dipuji, terutama karena sulit dicapai.',
    nuance:
      'Lebih kuat daripada 成功 dan sering dipakai dalam berita olahraga, sains, dan pencapaian bersejarah: 世界初の快挙.',
    contexts: ['Berita', 'Olahraga', 'Akademik'],
    examples: [
      [
        '日本の選手が大会で三連覇を達成する快挙を成し遂げた。',
        'にほんのせんしゅがたいかいでさんれんぱをたっせいするかいきょをなしとげた。',
        'Atlet Jepang mencapai prestasi luar biasa dengan memenangkan kejuaraan tiga kali berturut-turut.'
      ],
      [
        '若い研究者が新薬の開発に成功し、快挙として注目された。',
        'わかいけんきゅうしゃがしんやくのかいはつにせいこうし、かいきょとしてちゅうもくされた。',
        'Peneliti muda itu berhasil mengembangkan obat baru dan mendapat perhatian sebagai pencapaian gemilang.'
      ]
    ]
  },
  hannei: {
    word: '繁栄',
    reading: 'はんえい',
    meaning: 'kemakmuran; kejayaan; perkembangan yang pesat',
    explanation:
      'Keadaan ketika negara, wilayah, organisasi, atau bisnis berkembang dan mencapai kondisi makmur.',
    nuance:
      'Bernuansa formal dan biasanya digunakan untuk kemajuan yang berlangsung dalam jangka panjang. 繁栄を築く berarti membangun kemakmuran.',
    contexts: ['Sejarah', 'Ekonomi', 'Berita'],
    examples: [
      [
        'この港町は貿易によって繁栄した。',
        'このみなとまちはぼうえきによってはんえいした。',
        'Kota pelabuhan ini makmur berkat perdagangan.'
      ],
      [
        '地域の繁栄には若い世代の参加が欠かせない。',
        'ちいきのはんえいにはわかいせだいのさんかがかかせない。',
        'Partisipasi generasi muda sangat penting bagi kemakmuran daerah.'
      ]
    ]
  },
  jochou: {
    word: '助長',
    reading: 'じょちょう',
    meaning: 'mendorong; memperburuk; membuat sesuatu semakin berkembang',
    explanation:
      'Membantu suatu kecenderungan atau keadaan menjadi semakin kuat, sering kali sesuatu yang tidak diinginkan.',
    nuance:
      'Sering bernada negatif dalam 助長する, seperti 不安を助長する atau 対立を助長する. Tidak sama dengan 支援 yang biasanya bernada positif.',
    contexts: ['Berita', 'Akademik', 'Sosial'],
    examples: [
      [
        '不確かな情報は人々の不安を助長する。',
        'ふたしかなじょうほうはひとびとのふあんをじょちょうする。',
        'Informasi yang tidak pasti memperburuk kecemasan masyarakat.'
      ],
      [
        'その発言は対立を助長しかねない。',
        'そのはつげんはたいりつをじょちょうしかねない。',
        'Pernyataan itu berisiko memperuncing pertentangan.'
      ]
    ]
  },
  kakujyu: {
    word: '拡充',
    reading: 'かくじゅう',
    meaning: 'perluasan dan penguatan; peningkatan kapasitas',
    explanation:
      'Memperluas sekaligus memperkuat isi, layanan, fasilitas, atau sistem agar lebih lengkap dan memadai.',
    nuance:
      'Lebih formal daripada 拡大. Sering digunakan untuk layanan publik, fasilitas pendidikan, dukungan, dan sistem: 支援体制を拡充する.',
    contexts: ['Administrasi', 'Pendidikan', 'Berita'],
    examples: [
      [
        '大学は留学生向けの支援制度を拡充した。',
        'だいがくはりゅうがくせいむけのしえんせいどをかくじゅうした。',
        'Universitas memperluas dan memperkuat sistem dukungan bagi mahasiswa internasional.'
      ],
      [
        '医療サービスの拡充が地域の課題となっている。',
        'いりょうさーびすのかくじゅうがちいきのかだいとなっている。',
        'Perluasan layanan medis menjadi tantangan bagi daerah tersebut.'
      ]
    ]
  },
  shudou: {
    word: '主導',
    reading: 'しゅどう',
    meaning: 'kepemimpinan; memimpin jalannya suatu hal',
    explanation:
      'Mengambil peran utama dalam mengarahkan, mengendalikan, atau menggerakkan kegiatan dan keputusan bersama.',
    nuance:
      'Sering digunakan sebagai 主導する atau 〜主導で. Menunjukkan pihak yang menjadi penggerak utama, bukan sekadar ikut berpartisipasi.',
    contexts: ['Politik', 'Bisnis', 'Organisasi'],
    examples: [
      [
        '日本が交渉を主導することになった。',
        'にほんがこうしょうをしゅどうすることになった。',
        'Jepang akan memimpin jalannya perundingan.'
      ],
      [
        '学生主導で地域交流イベントを企画した。',
        'がくせいしゅどうでちいきこうりゅういべんとをきかくした。',
        'Acara pertukaran masyarakat dirancang atas prakarsa mahasiswa.'
      ]
    ]
  },
  saisoku: {
    word: '催促',
    reading: 'さいそく',
    meaning: 'desakan; menagih; meminta agar segera dilakukan',
    explanation:
      'Meminta seseorang melakukan sesuatu yang belum dilakukan, terutama pembayaran, pengiriman, atau penyelesaian tugas.',
    nuance:
      'Sering digunakan untuk pembayaran dan tenggat: 支払いを催促する. Dapat terdengar mendesak, sehingga perlu kehati-hatian dalam hubungan sosial.',
    contexts: ['Bisnis', 'Administrasi', 'Kehidupan sosial'],
    examples: [
      [
        '取引先に代金の支払いを催促した。',
        'とりひきさきにだいきんのしはらいをさいそくした。',
        'Saya menagih pembayaran kepada mitra bisnis.'
      ],
      [
        '何度も催促しなくても、彼は期限までに提出するはずだ。',
        'なんどもさいそくしなくても、かれはきげんまでにていしゅつするはずだ。',
        'Kita tidak perlu terus mendesaknya; ia seharusnya menyerahkan tugas sebelum tenggat.'
      ]
    ]
  },
  shikaeshi: {
    word: '仕返し',
    reading: 'しかえし',
    meaning: 'balas dendam; pembalasan',
    explanation:
      'Tindakan membalas perlakuan buruk atau kerugian yang sebelumnya diterima dari orang lain.',
    nuance:
      'Bernuansa negatif dan lebih personal daripada 報復 yang sering dipakai dalam konteks resmi atau konflik besar. 仕返しをする berarti membalas perlakuan seseorang.',
    contexts: ['Kehidupan sosial', 'Cerita', 'Berita'],
    examples: [
      [
        '仕返しを考えるより、問題を話し合って解決しよう。',
        'しかえしをかんがえるより、もんだいをはなしあってかいけつしよう。',
        'Daripada memikirkan balas dendam, mari selesaikan masalah dengan berdiskusi.'
      ],
      [
        '彼は友人に仕返しをするつもりはなかった。',
        'かれはゆうじんにしかえしをするつもりはなかった。',
        'Ia tidak berniat membalas dendam kepada temannya.'
      ]
    ]
  },
  mikaeri: {
    word: '見返り',
    reading: 'みかえり',
    meaning: 'imbalan; balasan; sesuatu sebagai kompensasi',
    explanation:
      'Manfaat atau balasan yang diharapkan atau diterima sebagai akibat dari pemberian, tindakan, atau usaha.',
    nuance:
      'Sering muncul dalam 見返りを求める (mengharapkan imbalan). Dapat berupa uang, bantuan, keuntungan, atau penghargaan; tidak selalu bersifat materi.',
    contexts: ['Kehidupan sosial', 'Bisnis', 'Berita'],
    examples: [
      [
        '彼は見返りを求めずに人を助けた。',
        'かれはみかえりをもとめずにひとをたすけた。',
        'Ia membantu orang lain tanpa mengharapkan imbalan.'
      ],
      [
        '投資に対する見返りが十分ではなかった。',
        'とうしにたいするみかえりがじゅうぶんではなかった。',
        'Imbalan atas investasi tersebut tidak cukup memadai.'
      ]
    ]
  },
  henkyaku: {
    word: '返却',
    reading: 'へんきゃく',
    meaning: 'pengembalian barang; menyerahkan kembali',
    explanation:
      'Mengembalikan barang pinjaman atau barang yang harus dikembalikan kepada pemilik atau pihak yang berwenang.',
    nuance:
      'Umum dalam perpustakaan, sekolah, penyewaan, dan administrasi. 返す lebih umum dan percakapan, sedangkan 返却 terdengar formal.',
    contexts: ['Administrasi', 'Pendidikan', 'Kehidupan sehari-hari'],
    examples: [
      [
        '図書館の本は金曜日までに返却してください。',
        'としょかんのほんはきんようびまでにへんきゃくしてください。',
        'Harap kembalikan buku perpustakaan paling lambat hari Jumat.'
      ],
      [
        '借りた備品を受付に返却した。',
        'かりたびひんをうけつけにへんきゃくした。',
        'Saya mengembalikan perlengkapan yang dipinjam ke bagian resepsionis.'
      ]
    ]
  },
  hensai: {
    word: '返済',
    reading: 'へんさい',
    meaning: 'pelunasan; pembayaran kembali utang atau pinjaman',
    explanation:
      'Mengembalikan uang yang dipinjam sesuai jumlah dan ketentuan pembayaran.',
    nuance:
      'Khususnya berhubungan dengan utang, pinjaman, atau kredit. 返金 berarti pengembalian uang yang telah dibayar, sedangkan 返済 berarti membayar kembali utang.',
    contexts: ['Keuangan', 'Administrasi', 'Kehidupan sehari-hari'],
    examples: [
      [
        '奨学金を卒業後に少しずつ返済する。',
        'しょうがくきんをそつぎょうごにすこしずつへんさいする。',
        'Saya akan membayar kembali pinjaman beasiswa sedikit demi sedikit setelah lulus.'
      ],
      [
        '銀行は返済計画について詳しく説明した。',
        'ぎんこうはへんさいけいかくについてくわしくせつめいした。',
        'Bank menjelaskan rencana pembayaran kembali secara terperinci.'
      ]
    ]
  },
  shuuyaku: {
    word: '集約',
    reading: 'しゅうやく',
    meaning: 'pengumpulan dan pemusatan; merangkum menjadi satu',
    explanation:
      'Mengumpulkan berbagai hal, informasi, fungsi, atau sumber daya ke dalam satu tempat atau bentuk yang lebih teratur.',
    nuance:
      'Sering dipakai dalam 集約する, 意見を集約する, dan データを集約する. Menekankan pengorganisasian berbagai unsur menjadi satu kesatuan.',
    contexts: ['Bisnis', 'Akademik', 'Teknologi'],
    examples: [
      [
        '会議で出た意見を一つの案に集約した。',
        'かいぎででたいけんをひとつのあんにしゅうやくした。',
        'Pendapat yang muncul dalam rapat dirangkum menjadi satu usulan.'
      ],
      [
        '各支店の売上データを本部に集約する。',
        'かくしてんのうりあげでーたをほんぶにしゅうやくする。',
        'Data penjualan dari setiap cabang dikumpulkan di kantor pusat.'
      ]
    ]
  },
  ketsugou: {
    word: '結合',
    reading: 'けつごう',
    meaning: 'penggabungan; penyatuan; ikatan',
    explanation:
      'Menghubungkan dua atau lebih bagian sehingga menjadi satu kesatuan atau memiliki hubungan erat.',
    nuance:
      'Sering dipakai dalam sains, teknologi, dan bisnis. 結び付ける lebih umum, sedangkan 結合 cenderung formal atau teknis.',
    contexts: ['Ilmu pengetahuan', 'Teknologi', 'Bisnis'],
    examples: [
      [
        '二つの部品を結合して、一つの装置を作る。',
        'ふたつのぶひんをけつごうして、ひとつのそうちをつくる。',
        'Dua komponen digabungkan untuk membuat satu perangkat.'
      ],
      [
        'この研究では、複数のデータを結合して分析する。',
        'このけんきゅうでは、ふくすうのでーたをけつごうしてぶんせきする。',
        'Dalam penelitian ini, beberapa kumpulan data digabungkan untuk dianalisis.'
      ]
    ]
  },
  kessei: {
    word: '結成',
    reading: 'けっせい',
    meaning: 'pembentukan; mendirikan kelompok atau organisasi',
    explanation:
      'Membentuk kelompok, tim, organisasi, atau koalisi dengan mengumpulkan beberapa orang atau pihak.',
    nuance:
      'Biasanya digunakan untuk kelompok yang dibentuk dengan tujuan tertentu: チームを結成する, 委員会を結成する. Tidak umum untuk benda fisik.',
    contexts: ['Organisasi', 'Berita', 'Olahraga'],
    examples: [
      [
        '学生たちは地域を支援する団体を結成した。',
        'がくせいたちはちいきをしえんするだんたいをけっせいした。',
        'Para mahasiswa membentuk organisasi untuk mendukung masyarakat setempat.'
      ],
      [
        '各国は問題解決に向けて協力組織を結成した。',
        'かっこくはもんだいかいけつにむけてきょうりょくそしきをけっせいした。',
        'Berbagai negara membentuk organisasi kerja sama untuk menyelesaikan masalah.'
      ]
    ]
  },
  saishuu: {
    word: '採集',
    reading: 'さいしゅう',
    meaning: 'pengumpulan sampel atau benda dari alam',
    explanation:
      'Mengambil dan mengumpulkan benda-benda, sampel, atau bahan yang ditemukan di lingkungan, terutama untuk penelitian atau pengamatan.',
    nuance:
      'Sering digunakan untuk serangga, tanaman, batu, dan sampel alam. Berbeda dari 採取 yang juga berarti mengambil atau mengekstrak bahan tertentu.',
    contexts: ['Biologi', 'Pendidikan', 'Penelitian'],
    examples: [
      [
        '子どもたちは森で昆虫を採集した。',
        'こどもたちはもりでこんちゅうをさいしゅうした。',
        'Anak-anak mengumpulkan serangga di hutan.'
      ],
      [
        '研究者は海岸で砂のサンプルを採集している。',
        'けんきゅうしゃはかいがんですなのさんぷるをさいしゅうしている。',
        'Para peneliti sedang mengumpulkan sampel pasir di pantai.'
      ]
    ]
  },
  tehai: {
    word: '手配',
    reading: 'てはい',
    meaning: 'pengaturan; persiapan; mengatur kebutuhan',
    explanation:
      'Mengatur dan menyiapkan orang, barang, kendaraan, tempat, atau langkah yang diperlukan untuk suatu kegiatan.',
    nuance:
      'Sering digunakan dalam 交通手段を手配する dan 宿泊先を手配する. Dalam konteks kepolisian, 手配する juga dapat berarti mengeluarkan pencarian terhadap seseorang.',
    contexts: ['Pekerjaan', 'Perjalanan', 'Administrasi'],
    examples: [
      [
        '出張のためにホテルと航空券を手配した。',
        'しゅっちょうのためにほてるとこうくうけんをてはいした。',
        'Saya mengatur hotel dan tiket pesawat untuk perjalanan dinas.'
      ],
      [
        '警察は容疑者の手配を全国に広げた。',
        'けいさつはようぎしゃのてはいをぜんこくにひろげた。',
        'Polisi memperluas pencarian tersangka ke seluruh negeri.'
      ]
    ]
  },
  shimatsu: {
    word: '始末',
    reading: 'しまつ',
    meaning: 'penanganan akhir; penyelesaian; membereskan',
    explanation:
      'Mengurus atau menyelesaikan sesuatu sampai tuntas, termasuk membereskan akibat atau keadaan yang timbul.',
    nuance:
      'Maknanya beragam: 後始末 (membereskan akibat), 始末書 (surat pernyataan), dan始末が悪い (sulit ditangani). Dalam konteks tertentu dapat berarti menghemat atau sangat pelit.',
    contexts: ['Kehidupan sehari-hari', 'Pekerjaan', 'Administrasi'],
    examples: [
      [
        '使った道具は自分で始末してください。',
        'つかったどうぐはじぶんでしまつしてください。',
        'Tolong bereskan sendiri peralatan yang telah digunakan.'
      ],
      [
        '問題を起こした以上、自分で始末をつけるべきだ。',
        'もんだいをおこしたいじょう、じぶんでしまつをつけるべきだ。',
        'Karena sudah menimbulkan masalah, ia seharusnya menyelesaikannya sendiri.'
      ]
    ]
  },
  jisshi: {
    word: '実施',
    reading: 'じっし',
    meaning: 'pelaksanaan; penerapan; penyelenggaraan',
    explanation:
      'Melaksanakan rencana, kebijakan, pemeriksaan, survei, atau kegiatan yang telah ditetapkan.',
    nuance:
      'Formal dan sering digunakan dalam pengumuman atau laporan. 実施する menekankan pelaksanaan nyata, berbeda dari 計画する yang berarti merencanakan.',
    contexts: ['Administrasi', 'Pendidikan', 'Bisnis'],
    examples: [
      [
        '来月、全学生を対象に健康診断を実施する。',
        'らいげつ、ぜんがくせいをたいしょうにけんこうしんだんをじっしする。',
        'Bulan depan pemeriksaan kesehatan akan dilaksanakan untuk seluruh mahasiswa.'
      ],
      [
        '新しい制度は四月から実施される予定だ。',
        'あたらしいせいどはしがつからじっしされるよていだ。',
        'Sistem baru dijadwalkan mulai diterapkan pada bulan April.'
      ]
    ]
  },
  seibi: {
    word: '整備',
    reading: 'せいび',
    meaning: 'pemeliharaan; penataan; pembangunan fasilitas pendukung',
    explanation:
      'Menyiapkan, memperbaiki, atau menata fasilitas, peralatan, sistem, dan lingkungan agar berfungsi dengan baik.',
    nuance:
      'Sering digunakan untuk jalan, infrastruktur, lingkungan, dan peralatan. 整備する dapat berarti memperlengkapi sekaligus menjaga kondisi agar siap digunakan.',
    contexts: ['Infrastruktur', 'Teknologi', 'Administrasi'],
    examples: [
      [
        '駅周辺の道路を整備する工事が進んでいる。',
        'えきしゅうへんのどうろをせいびするこうじがすすんでいる。',
        'Pekerjaan penataan jalan di sekitar stasiun sedang berlangsung.'
      ],
      [
        '安全に働ける環境を整備する必要がある。',
        'あんぜんにはたらけるかんきょうをせいびするひつようがある。',
        'Lingkungan kerja yang aman perlu disiapkan dan ditata.'
      ]
    ]
  },
  mekimeki: {
    word: 'めきめき',
    reading: 'めきめき',
    meaning: 'dengan pesat; terlihat jelas peningkatannya',
    explanation:
      'Menunjukkan perubahan atau peningkatan kemampuan yang berlangsung cepat dan dapat diamati.',
    nuance:
      'Sering digunakan dengan 上達する, 成長する, dan 力をつける. Biasanya bernada positif dan menggambarkan kemajuan yang nyata.',
    contexts: ['Pendidikan', 'Pekerjaan', 'Percakapan'],
    examples: [
      [
        '彼女は毎日練習して、めきめき上達した。',
        'かのじょはまいにちれんしゅうして、めきめきじょうたつした。',
        'Ia berlatih setiap hari dan kemampuannya meningkat pesat.'
      ],
      [
        '新入社員は経験を積み、めきめき力をつけている。',
        'しんにゅうしゃいんはけいけんをつみ、めきめきちからをつけている。',
        'Karyawan baru itu memperoleh pengalaman dan kemampuannya berkembang pesat.'
      ]
    ]
  },
  seizei: {
    word: 'せいぜい',
    reading: 'せいぜい',
    meaning: 'paling banyak; paling-paling; sekuat tenaga',
    explanation:
      'Menunjukkan batas tertinggi yang diperkirakan, atau usaha semaksimal mungkin sesuai kemampuan.',
    nuance:
      'Makna ditentukan konteks. せいぜい三日 berarti paling lama sekitar tiga hari; せいぜい頑張る berarti berusaha sebaik mungkin. Kadang menyiratkan bahwa jumlahnya tidak banyak.',
    contexts: ['Percakapan', 'Pendidikan', 'Kehidupan sehari-hari'],
    examples: [
      [
        'この作業にかかる時間は、せいぜい一時間だろう。',
        'このさぎょうにかかるじかんは、せいぜいいちじかんだろう。',
        'Pekerjaan ini paling-paling membutuhkan waktu satu jam.'
      ],
      [
        '今の私にできるのは、せいぜい応援することだけだ。',
        'いまのわたしにできるのは、せいぜいおうえんすることだけだ。',
        'Yang bisa kulakukan saat ini paling-paling hanya memberikan dukungan.'
      ]
    ]
  },
  hakihaki: {
    word: 'はきはき',
    reading: 'はきはき',
    meaning: 'dengan jelas, tegas, dan penuh semangat',
    explanation:
      'Menggambarkan cara berbicara atau bertindak yang jelas, lancar, dan tidak ragu-ragu.',
    nuance:
      'Sering digunakan untuk はきはき話す atau はきはき答える. Umumnya bernada positif, terutama dalam penilaian komunikasi dan sikap.',
    contexts: ['Percakapan', 'Pendidikan', 'Pekerjaan'],
    examples: [
      [
        '質問されたら、はきはき答えるようにしよう。',
        'しつもんされたら、はきはきこたえるようにしよう。',
        'Saat ditanya, usahakan menjawab dengan jelas dan tegas.'
      ],
      [
        '彼女は初対面の人にもはきはきと挨拶する。',
        'かのじょはしょたいめんのひとにもはきはきとあいさつする。',
        'Ia menyapa dengan jelas dan percaya diri bahkan kepada orang yang baru ditemui.'
      ]
    ]
  },
  tsukuzuku: {
    word: '熟々',
    reading: 'つくづく',
    meaning: 'benar-benar; sungguh-sungguh; setelah dipikirkan',
    explanation:
      'Kata keterangan yang menunjukkan seseorang merasakan atau menyadari sesuatu secara mendalam setelah mengalaminya atau memikirkannya.',
    nuance:
      '熟々 adalah ejaan kanji yang jarang; bentuk つくづく lebih umum. Sering muncul dalam つくづく思う dan menyatakan perasaan atau kesadaran yang kuat.',
    contexts: ['Percakapan', 'Sastra', 'Refleksi'],
    examples: [
      [
        '日本語を学ぶのは奥が深いと熟々感じる。',
        'にほんごをまなぶのはおくがふかいとつくづくかんじる。',
        'Saya sungguh merasakan bahwa mempelajari bahasa Jepang memiliki kedalaman yang luar biasa.'
      ],
      [
        '健康が何より大切だと、病気をして熟々思った。',
        'けんこうがなによりたいせつだと、びょうきをしてつくづくおもった。',
        'Setelah jatuh sakit, saya benar-benar menyadari bahwa kesehatan adalah hal terpenting.'
      ]
    ]
  },
  kasureru: {
    word: '掠れる',
    reading: 'かすれる',
    meaning: 'menjadi serak; memudar; terdengar samar',
    explanation:
      'Menggambarkan suara yang menjadi serak atau tidak jelas, maupun tulisan, warna, dan gambar yang tampak pudar atau terputus.',
    nuance:
      'Makna bergantung konteks: 声が掠れる (suara serak), 字が掠れる (tulisan memudar). Jangan disamakan dengan かすか yang berarti samar dalam arti tipis atau lemah.',
    contexts: ['Kesehatan', 'Seni', 'Kehidupan sehari-hari'],
    examples: [
      [
        '長時間話したため、声が掠れてしまった。',
        'ちょうじかんはなしたため、こえがかすれてしまった。',
        'Karena berbicara dalam waktu lama, suara saya menjadi serak.'
      ],
      [
        '古い写真は色が掠れて、表情が見えにくい。',
        'ふるいしゃしんはいろがかすれて、ひょうじょうがみえにくい。',
        'Warna foto lama itu telah memudar sehingga ekspresinya sulit terlihat.'
      ]
    ]
  },
  hagareru: {
    word: '剥がれる',
    reading: 'はがれる',
    meaning: 'terkelupas; terlepas dari permukaan',
    explanation:
      'Melepaskan diri atau terpisah dari permukaan tempat sesuatu menempel, seperti cat, stiker, kulit, atau lapisan.',
    nuance:
      'Berbeda dari 剥がす yang merupakan tindakan aktif mengelupas sesuatu. 剥がれる menunjukkan sesuatu terkelupas atau terlepas dengan sendirinya.',
    contexts: ['Kehidupan sehari-hari', 'Konstruksi', 'Kesehatan'],
    examples: [
      [
        '壁の塗装が少しずつ剥がれてきた。',
        'かべのとそうがすこしずつはがれてきた。',
        'Cat pada dinding mulai terkelupas sedikit demi sedikit.'
      ],
      [
        '雨にぬれて、靴の底が剥がれてしまった。',
        'あめにぬれて、くつのそこがはがれてしまった。',
        'Karena terkena hujan, sol sepatu saya terlepas.'
      ]
    ]
  },
  kuzureru: {
    word: '崩れる',
    reading: 'くずれる',
    meaning: 'runtuh; ambruk; berantakan; berubah bentuk',
    explanation:
      'Kehilangan bentuk atau kestabilan sehingga sesuatu roboh, hancur, atau tidak lagi tersusun rapi.',
    nuance:
      'Dapat digunakan secara fisik dan abstrak: 建物が崩れる, 体調が崩れる, バランスが崩れる. Berbeda dari 壊れる yang lebih umum berarti rusak.',
    contexts: ['Berita', 'Kehidupan sehari-hari', 'Konstruksi'],
    examples: [
      [
        '大雨で山の斜面が崩れた。',
        'おおあめでやまのしゃめんがくずれた。',
        'Lereng gunung runtuh akibat hujan deras.'
      ],
      [
        '寝不足が続いて、生活のリズムが崩れている。',
        'ねぶそくがつづいて、せいかつのりずむがくずれている。',
        'Karena terus kurang tidur, ritme kehidupan saya menjadi berantakan.'
      ]
    ]
  },
  hogureru: {
    word: 'ほぐれる',
    reading: 'ほぐれる',
    meaning: 'menjadi lemas; terurai; mencair (ketegangan)',
    explanation:
      'Menjadi tidak kaku atau tidak kusut; dapat merujuk pada otot, simpul, bahan yang kusut, maupun suasana hati yang mulai santai.',
    nuance:
      'Sering digunakan untuk otot dan ketegangan: 肩の凝りがほぐれる, 緊張がほぐれる. Bentuk transitifnya ほぐす berarti mengendurkan atau menguraikan.',
    contexts: ['Kesehatan', 'Kehidupan sehari-hari', 'Hubungan sosial'],
    examples: [
      [
        '軽い運動をすると、肩の緊張がほぐれる。',
        'かるいうんどうをすると、かたのきんちょうがほぐれる。',
        'Dengan berolahraga ringan, ketegangan bahu menjadi berkurang.'
      ],
      [
        '冗談を交わすうちに、会場の空気がほぐれてきた。',
        'じょうだんをかわすうちに、かいじょうのくうきがほぐれてきた。',
        'Sambil saling bercanda, suasana di ruangan mulai mencair.'
      ]
    ]
  },
  risou: {
    word: '理想',
    reading: 'りそう',
    meaning: 'ideal; cita-cita; keadaan yang diharapkan',
    explanation:
      'Gambaran keadaan terbaik yang ingin dicapai atau dijadikan pedoman, meskipun belum tentu sesuai dengan kenyataan.',
    nuance:
      'Sering dipasangkan dengan 現実. 理想を掲げる berarti menetapkan cita-cita; 理想的な berarti ideal atau sangat sesuai harapan.',
    contexts: ['Akademik', 'Kehidupan sosial', 'Refleksi'],
    examples: [
      [
        '理想と現実の違いを理解することが大切だ。',
        'りそうとげんじつのちがいをりかいすることがたいせつだ。',
        'Penting untuk memahami perbedaan antara ideal dan kenyataan.'
      ],
      [
        '彼は誰もが安心して暮らせる社会を理想としている。',
        'かれはだれもがあんしんしてくらせるしゃかいをりそうとしている。',
        'Ia menjadikan masyarakat tempat semua orang dapat hidup dengan aman sebagai cita-citanya.'
      ]
    ]
  },
  ishi: {
    word: '意思',
    reading: 'いし',
    meaning: 'kehendak; niat; kemauan',
    explanation:
      'Keinginan atau tekad seseorang untuk melakukan atau memilih sesuatu berdasarkan pikirannya sendiri.',
    nuance:
      'Sering digunakan dalam 意思表示 (menyatakan kehendak), 本人の意思 (kehendak orang yang bersangkutan), dan 意思決定 (pengambilan keputusan). Berbeda dari 意志 yang lebih menekankan tekad kuat.',
    contexts: ['Hukum', 'Administrasi', 'Kehidupan sosial'],
    examples: [
      [
        '本人の意思を尊重して、進路を決めるべきだ。',
        'ほんにんのいしをそんちょうして、しんろをきめるべきだ。',
        'Pilihan masa depan sebaiknya ditentukan dengan menghormati kehendak orang yang bersangkutan.'
      ],
      [
        '彼女は参加する意思をはっきり示した。',
        'かのじょはさんかするいしをはっきりしめした。',
        'Ia dengan jelas menyatakan niat untuk berpartisipasi.'
      ]
    ]
  },
  kijun: {
    word: '基準',
    reading: 'きじゅん',
    meaning: 'standar; patokan; kriteria',
    explanation:
      'Ukuran atau aturan yang dijadikan dasar untuk menilai, membandingkan, atau menentukan sesuatu.',
    nuance:
      'Sering muncul dalam 判断基準, 安全基準, dan 基準を満たす. Berbeda dari 規準 yang lebih terbatas dan cenderung teknis atau normatif.',
    contexts: ['Akademik', 'Administrasi', 'Pekerjaan'],
    examples: [
      [
        'この商品は厳しい安全基準を満たしている。',
        'このしょうひんはきびしいあんぜんきじゅんをみたしている。',
        'Produk ini memenuhi standar keselamatan yang ketat.'
      ],
      [
        '評価の基準を事前に明確にしておこう。',
        'ひょうかのきじゅんをじぜんにめいかくにしておこう。',
        'Mari perjelas kriteria penilaian terlebih dahulu.'
      ]
    ]
  },
  senmon: {
    word: '専門',
    reading: 'せんもん',
    meaning: 'bidang khusus; spesialisasi; keahlian tertentu',
    explanation:
      'Bidang pengetahuan atau pekerjaan yang dipelajari secara mendalam dan membutuhkan keahlian khusus.',
    nuance:
      'Umum dalam 専門分野, 専門家, dan 専門知識. 専門の〜 menunjukkan sesuatu yang khusus untuk bidang tersebut.',
    contexts: ['Pendidikan', 'Pekerjaan', 'Akademik'],
    examples: [
      [
        '彼は日本文学を専門に研究している。',
        'かれはにほんぶんがくをせんもんにけんきゅうしている。',
        'Ia meneliti sastra Jepang sebagai bidang spesialisasinya.'
      ],
      [
        '詳しい説明は専門家に相談してください。',
        'くわしいせつめいはせんもんかにそうだんしてください。',
        'Untuk penjelasan terperinci, silakan berkonsultasi dengan ahli.'
      ]
    ]
  },
  taikutsuna: {
    word: '退屈な',
    reading: 'たいくつな',
    meaning: 'membosankan; menjemukan',
    explanation:
      'Menggambarkan kegiatan, pembicaraan, atau keadaan yang tidak menarik sehingga terasa lama atau membuat bosan.',
    nuance:
      '退屈する berarti merasa bosan. Kata ini menilai sesuatu sebagai tidak menarik, sedangkan 暇 lebih berkaitan dengan tidak adanya kesibukan.',
    contexts: ['Percakapan', 'Pendidikan', 'Hiburan'],
    examples: [
      [
        '説明が長くて、少し退屈な授業だった。',
        'せつめいがながくて、すこしたいくつなじゅぎょうだった。',
        'Penjelasannya panjang sehingga kelas itu sedikit membosankan.'
      ],
      [
        '退屈な時間を読書で過ごした。',
        'たいくつなじかんをどくしょですごした。',
        'Saya menghabiskan waktu yang membosankan dengan membaca.'
      ]
    ]
  },
  mendouna: {
    word: '面倒な',
    reading: 'めんどうな',
    meaning: 'merepotkan; menyulitkan; membutuhkan banyak urusan',
    explanation:
      'Menggambarkan sesuatu yang membutuhkan usaha, waktu, atau perhatian sehingga terasa merepotkan.',
    nuance:
      'Dapat berarti tugas yang rumit atau orang yang sulit ditangani. 面倒を見る berarti merawat atau mengurus seseorang, bukan merasa kerepotan.',
    contexts: ['Percakapan', 'Pekerjaan', 'Kehidupan sehari-hari'],
    examples: [
      [
        '面倒な手続きはオンラインで済ませたい。',
        'めんどうなてつづきはおんらいんですませたい。',
        'Saya ingin menyelesaikan prosedur yang merepotkan secara daring.'
      ],
      [
        '彼は面倒な仕事も最後まで丁寧にこなす。',
        'かれはめんどうなしごともさいごまでていねいにこなす。',
        'Ia menyelesaikan bahkan pekerjaan yang merepotkan dengan teliti sampai akhir.'
      ]
    ]
  },
  kikennna: {
    word: '危険な',
    reading: 'きけんな',
    meaning: 'berbahaya; berisiko',
    explanation:
      'Menunjukkan keadaan atau tindakan yang dapat menyebabkan cedera, kerugian, atau akibat buruk.',
    nuance:
      '危険がある menekankan adanya risiko; 危ない lebih sering dipakai dalam percakapan. Dapat digunakan untuk kondisi fisik dan keputusan yang berisiko.',
    contexts: ['Keselamatan', 'Berita', 'Kehidupan sehari-hari'],
    examples: [
      [
        'この道路は夜になると危険な場所になる。',
        'このどうろはよるになるときけんなばしょになる。',
        'Jalan ini menjadi tempat yang berbahaya saat malam.'
      ],
      [
        '十分に確認せずに判断するのは危険なことだ。',
        'じゅうぶんにかくにんせずにはんだんするのはきけんなことだ。',
        'Mengambil keputusan tanpa memeriksa dengan cukup merupakan tindakan berisiko.'
      ]
    ]
  },
  yokeina: {
    word: '余計な',
    reading: 'よけいな',
    meaning: 'tidak perlu; berlebihan; tambahan yang tidak diinginkan',
    explanation:
      'Menggambarkan sesuatu yang melebihi kebutuhan atau tidak diperlukan sehingga justru menimbulkan gangguan.',
    nuance:
      'Dapat bernuansa kritis: 余計な心配 (kekhawatiran yang tidak perlu), 余計な一言 (komentar tambahan yang tidak perlu). 余計に juga berarti semakin atau lebih jauh.',
    contexts: ['Percakapan', 'Kehidupan sosial', 'Pekerjaan'],
    examples: [
      [
        '余計なことを言って、相手を怒らせてしまった。',
        'よけいなことをいって、あいてをおこらせてしまった。',
        'Saya membuat lawan bicara marah karena mengatakan hal yang tidak perlu.'
      ],
      [
        '心配しすぎると、余計なストレスが増える。',
        'しんぱいしすぎると、よけいなすとれすがふえる。',
        'Jika terlalu banyak khawatir, stres yang tidak perlu akan bertambah.'
      ]
    ]
  },
  kojintekina: {
    word: '個人的な',
    reading: 'こじんてきな',
    meaning: 'pribadi; bersifat personal',
    explanation:
      'Berkaitan dengan pandangan, urusan, pengalaman, atau kepentingan seorang individu, bukan kelompok atau lembaga.',
    nuance:
      'Sering digunakan untuk membedakan pendapat pribadi dari pendapat resmi: 個人的な意見. Tidak selalu berarti rahasia, tetapi menandai sudut pandang individu.',
    contexts: ['Percakapan', 'Pekerjaan', 'Media'],
    examples: [
      [
        'これはあくまで私の個人的な意見です。',
        'これはあくまでわたしのこじんてきないけんです。',
        'Ini semata-mata merupakan pendapat pribadi saya.'
      ],
      [
        '個人的な事情で、今日は早く帰らなければならない。',
        'こじんてきなじじょうで、きょうははやくかえらなければならない。',
        'Karena urusan pribadi, hari ini saya harus pulang lebih awal.'
      ]
    ]
  },
  gutaitekina: {
    word: '具体的な',
    reading: 'ぐたいてきな',
    meaning: 'konkret; nyata; spesifik',
    explanation:
      'Menunjukkan sesuatu yang dijelaskan dengan rincian jelas, contoh nyata, atau tindakan yang dapat dilakukan.',
    nuance:
      'Lawan dari 抽象的な (abstrak). 具体的に説明する berarti menjelaskan secara spesifik, bukan hanya menyampaikan gagasan umum.',
    contexts: ['Akademik', 'Pekerjaan', 'Diskusi'],
    examples: [
      [
        '計画を実現するための具体的な方法を考えよう。',
        'けいかくをじつげんするためのぐたいてきなほうほうをかんがえよう。',
        'Mari pikirkan cara konkret untuk mewujudkan rencana.'
      ],
      [
        '説明が抽象的なので、具体的な例を挙げてください。',
        'せつめいがちゅうしょうてきなので、ぐたいてきなれいをあげてください。',
        'Penjelasannya masih abstrak, jadi tolong berikan contoh yang konkret.'
      ]
    ]
  },
  shousaina: {
    word: '詳細な',
    reading: 'しょうさいな',
    meaning: 'terperinci; detail',
    explanation:
      'Menggambarkan informasi atau penjelasan yang mencakup bagian-bagian kecil secara lengkap.',
    nuance:
      'Lebih formal daripada 細かい dan sering digunakan pada laporan, dokumen, penjelasan, atau penyelidikan: 詳細な情報.',
    contexts: ['Administrasi', 'Akademik', 'Pekerjaan'],
    examples: [
      [
        '詳細な資料を会議の前に共有してください。',
        'しょうさいなしりょうをかいぎのまえにきょうゆうしてください。',
        'Tolong bagikan bahan terperinci sebelum rapat.'
      ],
      [
        '警察は事故の状況を詳細に調べている。',
        'けいさつはじこのじょうきょうをしょうさいにしらべている。',
        'Polisi sedang menyelidiki keadaan kecelakaan secara terperinci.'
      ]
    ]
  },
  juuyouna: {
    word: '重要な',
    reading: 'じゅうような',
    meaning: 'penting; memiliki arti atau pengaruh besar',
    explanation:
      'Menunjukkan sesuatu yang sangat perlu diperhatikan karena memengaruhi hasil, keputusan, atau keadaan.',
    nuance:
      'Sering digunakan dalam 重要な役割, 重要な問題, dan 重要性. Lebih formal daripada 大切な dalam banyak konteks.',
    contexts: ['Akademik', 'Pekerjaan', 'Berita'],
    examples: [
      [
        '情報を正しく伝えることは重要な役割だ。',
        'じょうほうをただしくつたえることはじゅうようなやくわりだ。',
        'Menyampaikan informasi dengan benar merupakan peran yang penting.'
      ],
      [
        '試験の前に、重要な点をもう一度確認した。',
        'しけんのまえに、じゅうようなてんをもういちどかくにんした。',
        'Sebelum ujian, saya memeriksa kembali poin-poin penting.'
      ]
    ]
  },
  junchounisusumu: {
    word: '順調に進む',
    reading: 'じゅんちょうにすすむ',
    meaning: 'berjalan lancar; maju sesuai rencana',
    explanation:
      'Menggambarkan pekerjaan, proses, atau perkembangan yang berlangsung tanpa hambatan berarti dan sesuai perkiraan.',
    nuance:
      'Sering digunakan dalam laporan proyek, penelitian, pekerjaan, dan pemulihan. 順調に進んでいる menunjukkan proses yang saat ini masih berjalan baik.',
    contexts: ['Pekerjaan', 'Akademik', 'Berita'],
    examples: [
      [
        '準備は予定どおり順調に進んでいる。',
        'じゅんびはよていどおりじゅんちょうにすすんでいる。',
        'Persiapan berjalan lancar sesuai jadwal.'
      ],
      [
        '交渉が順調に進めば、来週にも合意できるだろう。',
        'こうしょうがじゅんちょうにすすめば、らいしゅうにもごういできるだろう。',
        'Jika negosiasi berjalan lancar, kesepakatan mungkin tercapai minggu depan.'
      ]
    ]
  },
  oohabaniosoreru: {
    word: '大幅に遅れる',
    reading: 'おおはばにおくれる',
    meaning: 'terlambat jauh; mengalami keterlambatan besar',
    explanation:
      'Menunjukkan bahwa jadwal atau kemajuan tertinggal dalam skala besar dibandingkan rencana atau waktu yang ditetapkan.',
    nuance:
      '大幅に berarti dalam jumlah atau tingkat yang besar. Sering digunakan untuk jadwal penerbangan, proyek, pembangunan, atau pengiriman.',
    contexts: ['Transportasi', 'Pekerjaan', 'Berita'],
    examples: [
      [
        '大雪の影響で、列車の運行が大幅に遅れている。',
        'おおゆきのえいきょうで、れっしゃのうんこうがおおはばにおくれている。',
        'Operasi kereta mengalami keterlambatan besar akibat salju lebat.'
      ],
      [
        '準備不足のため、計画全体が大幅に遅れた。',
        'じゅんびぶそくのため、けいかくぜんたいがおおはばにおくれた。',
        'Karena persiapan yang kurang, seluruh rencana mengalami keterlambatan besar.'
      ]
    ]
  },
  jojonihheru: {
    word: '徐々に減る',
    reading: 'じょじょにへる',
    meaning: 'berkurang secara bertahap; menurun sedikit demi sedikit',
    explanation:
      'Menunjukkan jumlah atau tingkat yang menurun secara perlahan dari waktu ke waktu, bukan sekaligus.',
    nuance:
      '徐々に menekankan perubahan bertahap dan cenderung formal. Dapat digunakan untuk populasi, biaya, jumlah peserta, atau persediaan.',
    contexts: ['Berita', 'Ekonomi', 'Akademik'],
    examples: [
      [
        'この地域では若者の人口が徐々に減っている。',
        'このちいきではわかもののじんこうがじょじょにへっている。',
        'Di wilayah ini, jumlah penduduk muda berkurang secara bertahap.'
      ],
      [
        '運動を続けた結果、体脂肪率が徐々に減った。',
        'うんどうをつづけたけっか、たいしぼうりつがじょじょにへった。',
        'Sebagai hasil dari rutin berolahraga, persentase lemak tubuh berkurang sedikit demi sedikit.'
      ]
    ]
  },
  kyuugekinifueru: {
    word: '急激に増える',
    reading: 'きゅうげきにふえる',
    meaning: 'meningkat tajam; bertambah dengan drastis',
    explanation:
      'Menunjukkan kenaikan jumlah atau tingkat yang terjadi dalam waktu singkat dan dengan perubahan yang besar.',
    nuance:
      '急激に menekankan kecepatan sekaligus besarnya perubahan. Sering digunakan dalam statistik, ekonomi, kasus, suhu, dan jumlah pengguna.',
    contexts: ['Berita', 'Ekonomi', 'Akademik'],
    examples: [
      [
        '夏になると、この地域の観光客が急激に増える。',
        'なつになると、このちいきのかんこうきゃくがきゅうげきにふえる。',
        'Saat musim panas tiba, jumlah wisatawan di wilayah ini meningkat tajam.'
      ],
      [
        '利用者が急激に増えたため、サーバーを増設した。',
        'りようしゃがきゅうげきにふえたため、さーばーをぞうせつした。',
        'Karena jumlah pengguna meningkat drastis, server tambahan dipasang.'
      ]
    ]
  },
  kurou: {
    word: '苦労',
    reading: 'くろう',
    meaning: 'kesulitan; jerih payah; usaha yang penuh tantangan',
    explanation:
      'Pengalaman menghadapi kesusahan atau melakukan usaha keras untuk mencapai sesuatu.',
    nuance:
      'Sering digunakan dalam 苦労する, 苦労して育てる, dan ご苦労さま. Menekankan proses yang menguras tenaga atau pikiran, bukan hanya hasil akhirnya.',
    contexts: ['Kehidupan sehari-hari', 'Pekerjaan', 'Pendidikan'],
    examples: [
      [
        '両親は苦労して私たちを育ててくれた。',
        'りょうしんはくろうしてわたしたちをそだててくれた。',
        'Orang tua membesarkan kami dengan penuh perjuangan.'
      ],
      [
        '新しい環境に慣れるまで、かなり苦労した。',
        'あたらしいかんきょうになれるまで、かなりくろうした。',
        'Saya cukup kesulitan sampai akhirnya terbiasa dengan lingkungan baru.'
      ]
    ]
  },
  gaman: {
    word: '我慢',
    reading: 'がまん',
    meaning: 'kesabaran; menahan diri; bertahan',
    explanation:
      'Menahan keinginan, rasa tidak nyaman, emosi, atau kesulitan tanpa langsung melampiaskannya atau menyerah.',
    nuance:
      '我慢する digunakan untuk menahan rasa sakit, lapar, marah, atau keinginan. Dalam nasihat, 我慢しすぎないで berarti jangan terlalu memaksakan diri untuk menahan semuanya.',
    contexts: ['Kehidupan sehari-hari', 'Pendidikan', 'Kesehatan'],
    examples: [
      [
        '少しの間、痛みを我慢してください。',
        'すこしのあいだ、いたみをがまんしてください。',
        'Tolong tahan rasa sakitnya sebentar.'
      ],
      [
        '言いたいことを我慢せず、落ち着いて伝えた。',
        'いいたいことをがまんせず、おちついてつたえた。',
        'Saya menyampaikan hal yang ingin dikatakan dengan tenang tanpa terus memendamnya.'
      ]
    ]
  },
  shippai: {
    word: '失敗',
    reading: 'しっぱい',
    meaning: 'kegagalan; kesalahan dalam melakukan sesuatu',
    explanation:
      'Keadaan ketika tindakan atau usaha tidak menghasilkan hasil yang diharapkan atau dilakukan dengan cara yang keliru.',
    nuance:
      '失敗する dapat merujuk pada kegagalan besar maupun kesalahan sehari-hari. 失敗から学ぶ adalah ungkapan umum yang menekankan pembelajaran dari kesalahan.',
    contexts: ['Pendidikan', 'Pekerjaan', 'Kehidupan sehari-hari'],
    examples: [
      [
        '失敗を恐れずに、新しいことに挑戦しよう。',
        'しっぱいをおそれずに、あたらしいことにちょうせんしよう。',
        'Mari mencoba hal baru tanpa takut gagal.'
      ],
      [
        '確認を怠ったことが、今回の失敗につながった。',
        'かくにんをおこたったことが、こんかいのしっぱいにつながった。',
        'Kelalaian dalam melakukan pemeriksaan menyebabkan kegagalan kali ini.'
      ]
    ]
  },
  shinpai: {
    word: '心配',
    reading: 'しんぱい',
    meaning: 'kekhawatiran; kecemasan; rasa cemas',
    explanation:
      'Perasaan tidak tenang karena memikirkan kemungkinan buruk atau keadaan seseorang maupun sesuatu.',
    nuance:
      '心配する dapat berarti khawatir atau mengkhawatirkan seseorang. 心配ない berarti tidak perlu khawatir; 心配事 berarti hal yang menjadi kekhawatiran.',
    contexts: ['Kehidupan sehari-hari', 'Kesehatan', 'Sosial'],
    examples: [
      [
        '試験の結果が心配で、なかなか眠れなかった。',
        'しけんのけっかがしんぱいで、なかなかねむれなかった。',
        'Saya sulit tidur karena mengkhawatirkan hasil ujian.'
      ],
      [
        '家族に心配をかけないよう、近況を知らせた。',
        'かぞくにしんぱいをかけないよう、きんきょうをしらせた。',
        'Saya memberi kabar tentang keadaan terbaru agar keluarga tidak khawatir.'
      ]
    ]
  },
  meibutsu: {
    word: '名物',
    reading: 'めいぶつ',
    meaning: 'hal terkenal khas suatu tempat; makanan khas',
    explanation:
      'Orang, benda, produk, atau makanan yang terkenal dan menjadi ciri khas suatu daerah atau tempat.',
    nuance:
      '名物料理 dan 名物菓子 sering merujuk pada makanan khas. Berbeda dari 特産 yang menekankan produk lokal yang dihasilkan di daerah tertentu.',
    contexts: ['Pariwisata', 'Budaya', 'Kehidupan sehari-hari'],
    examples: [
      [
        'この町の名物は、昔ながらのしょうゆラーメンだ。',
        'このまちのめいぶつは、むかしながらのしょうゆらーめんだ。',
        'Makanan khas kota ini adalah ramen kecap bergaya tradisional.'
      ],
      [
        '駅前の大きな時計は、町の名物になっている。',
        'えきまえのおおきなとけいは、まちのめいぶつになっている。',
        'Jam besar di depan stasiun telah menjadi ciri khas kota.'
      ]
    ]
  },
  kikou: {
    word: '気候',
    reading: 'きこう',
    meaning: 'iklim; kondisi cuaca khas suatu wilayah',
    explanation:
      'Pola cuaca rata-rata yang menjadi ciri suatu wilayah dalam jangka panjang, termasuk suhu, curah hujan, dan kelembapan.',
    nuance:
      'Berbeda dari 天気 yang merujuk pada keadaan cuaca harian. 気候変動 berarti perubahan iklim.',
    contexts: ['Geografi', 'Ilmu pengetahuan', 'Kehidupan sehari-hari'],
    examples: [
      [
        'この地域は一年を通して温暖な気候だ。',
        'このちいきはいちねんをとおしておんだんなきこうだ。',
        'Wilayah ini memiliki iklim yang hangat sepanjang tahun.'
      ],
      [
        '気候の変化は農業に大きな影響を与える。',
        'きこうのへんかはのうぎょうにおおきなえいきょうをあたえる。',
        'Perubahan iklim memberikan pengaruh besar terhadap pertanian.'
      ]
    ]
  },
  kanshuu: {
    word: '慣習',
    reading: 'かんしゅう',
    meaning: 'kebiasaan sosial; adat yang berlaku',
    explanation:
      'Cara bertindak atau aturan tidak tertulis yang sudah lama dilakukan dan diterima oleh masyarakat atau kelompok.',
    nuance:
      'Lebih formal daripada 習慣 dan sering merujuk pada praktik sosial atau budaya yang diwariskan. 慣習に従う berarti mengikuti adat atau kebiasaan yang berlaku.',
    contexts: ['Budaya', 'Sosiologi', 'Hukum'],
    examples: [
      [
        '地域によって、祝い事の慣習は異なる。',
        'ちいきによって、いわいごとのかんしゅうはことなる。',
        'Kebiasaan dalam perayaan berbeda-beda menurut wilayah.'
      ],
      [
        '古い慣習を見直す動きが広がっている。',
        'ふるいかんしゅうをみなおすうごきがひろがっている。',
        'Gerakan untuk meninjau kembali adat lama semakin meluas.'
      ]
    ]
  },
  rekishi: {
    word: '歴史',
    reading: 'れきし',
    meaning: 'sejarah; perjalanan masa lalu',
    explanation:
      'Rangkaian peristiwa yang terjadi pada masa lalu, atau perkembangan suatu negara, masyarakat, tempat, maupun individu.',
    nuance:
      'Dapat merujuk pada bidang ilmu sejarah ataupun riwayat perkembangan sesuatu: 日本の歴史, 会社の歴史. 歴史的な berarti bersejarah.',
    contexts: ['Sejarah', 'Akademik', 'Budaya'],
    examples: [
      [
        'この城には長い歴史がある。',
        'このしろにはながいれきしがある。',
        'Kastel ini memiliki sejarah yang panjang.'
      ],
      [
        '過去の歴史から学び、同じ過ちを繰り返さないことが大切だ。',
        'かこのれきしからまなび、おなじあやまちをくりかえさないことがたいせつだ。',
        'Penting untuk belajar dari sejarah masa lalu agar tidak mengulangi kesalahan yang sama.'
      ]
    ]
  },
  satosu: {
    word: '諭す',
    reading: 'さとす',
    meaning: 'menasihati dengan bijaksana; menyadarkan',
    explanation:
      'Memberi penjelasan atau nasihat secara tenang agar seseorang memahami kesalahannya dan mengubah sikap.',
    nuance:
      'Lebih bernuansa membimbing dan menyadarkan daripada 叱る (memarahi). Sering digunakan ketika orang yang lebih berpengalaman menegur dengan alasan yang jelas.',
    contexts: ['Pendidikan', 'Kehidupan sosial', 'Sastra'],
    examples: [
      [
        '先生は学生に、規則を守る大切さを諭した。',
        'せんせいはがくせいに、きそくをまもるたいせつさをさとした。',
        'Guru menasihati siswa tentang pentingnya menaati aturan.'
      ],
      [
        '父は感情的にならず、私の間違いを静かに諭してくれた。',
        'ちちはかんじょうてきにならず、わたしのまちがいをしずかにさとしてくれた。',
        'Ayah menasihati saya dengan tenang tanpa terbawa emosi mengenai kesalahan saya.'
      ]
    ]
  },
  ayasu: {
    word: 'あやす',
    reading: 'あやす',
    meaning: 'menenangkan atau menghibur bayi/anak kecil',
    explanation:
      'Melakukan gerakan, suara, atau kata-kata untuk menenangkan bayi atau anak kecil yang menangis atau rewel.',
    nuance:
      'Umumnya digunakan untuk bayi: 赤ちゃんをあやす. Tidak sama dengan 慰める yang lebih luas, misalnya menghibur teman yang sedih.',
    contexts: ['Keluarga', 'Pengasuhan', 'Kehidupan sehari-hari'],
    examples: [
      [
        '母親は泣いている赤ちゃんを優しくあやした。',
        'ははおやはないているあかちゃんをやさしくあやした。',
        'Ibu menenangkan bayi yang sedang menangis dengan lembut.'
      ],
      [
        '祖父は歌を歌って孫をあやしていた。',
        'そふはうたをうたってまごをあやしていた。',
        'Kakek sedang menenangkan cucunya dengan menyanyikan lagu.'
      ]
    ]
  },
  tadasu: {
    word: '正す',
    reading: 'ただす',
    meaning: 'memperbaiki; meluruskan; mengoreksi',
    explanation:
      'Mengubah sesuatu yang salah, tidak tepat, atau tidak teratur agar kembali benar atau sesuai aturan.',
    nuance:
      'Sering digunakan untuk sikap, kesalahan, postur, dan cara berpikir: 姿勢を正す, 誤りを正す. Berbeda dari 直す yang lebih umum untuk memperbaiki benda atau keadaan.',
    contexts: ['Pendidikan', 'Formal', 'Kehidupan sehari-hari'],
    examples: [
      [
        '先生は学生の誤解を正した。',
        'せんせいはがくせいのごかいをただした。',
        'Guru meluruskan kesalahpahaman siswa.'
      ],
      [
        '話を始める前に、姿勢を正してください。',
        'はなしをはじめるまえに、しせいをただしてください。',
        'Sebelum memulai pembicaraan, tolong tegakkan postur tubuh.'
      ]
    ]
  },
  iyasu: {
    word: '癒やす',
    reading: 'いやす',
    meaning: 'menyembuhkan; menenangkan; memulihkan perasaan',
    explanation:
      'Mengurangi rasa sakit, kelelahan, atau tekanan batin sehingga seseorang merasa lebih tenang dan pulih.',
    nuance:
      'Sering dipakai untuk luka hati, stres, dan kelelahan: 心を癒やす. Untuk penyakit fisik, 治す lebih langsung berarti mengobati.',
    contexts: ['Kesehatan', 'Sastra', 'Kehidupan sehari-hari'],
    examples: [
      [
        '美しい音楽が疲れた心を癒やしてくれる。',
        'うつくしいおんがくがつかれたこころをいやしてくれる。',
        'Musik yang indah menenangkan hati yang lelah.'
      ],
      [
        '休日は自然の中で過ごし、心身を癒やした。',
        'きゅうじつはしぜんのなかですごし、しんしんをいやした。',
        'Pada hari libur, saya menghabiskan waktu di alam untuk memulihkan tubuh dan pikiran.'
      ]
    ]
  },
  kiyoraka: {
    word: '清らか',
    reading: 'きよらか',
    meaning: 'murni; bersih; suci',
    explanation:
      'Menggambarkan sesuatu yang bersih secara fisik atau murni secara batin, tanpa noda atau niat buruk.',
    nuance:
      'Sering dipakai untuk air, hati, suara, atau suasana. Bernuansa lebih sastra dan puitis daripada きれい.',
    contexts: ['Sastra', 'Budaya', 'Deskripsi'],
    examples: [
      [
        '山から清らかな水が流れている。',
        'やまからきよらかなみずがながれている。',
        'Air yang jernih dan murni mengalir dari gunung.'
      ],
      [
        '彼女は清らかな心を持ち、誰にでも親切だ。',
        'かのじょはきよらかなこころをもち、だれにでもしんせつだ。',
        'Ia memiliki hati yang tulus dan baik kepada siapa pun.'
      ]
    ]
  },
  hogaraka: {
    word: '朗らか',
    reading: 'ほがらか',
    meaning: 'ceria; riang; berwajah cerah',
    explanation:
      'Menggambarkan kepribadian, suara, atau suasana yang cerah, terbuka, dan penuh keceriaan.',
    nuance:
      'Sering digunakan untuk orang yang mudah tersenyum dan membawa suasana positif: 朗らかな性格. Lebih menggambarkan keceriaan yang tenang daripada kegembiraan sesaat.',
    contexts: ['Deskripsi orang', 'Percakapan', 'Sastra'],
    examples: [
      [
        '彼女は朗らかな性格で、誰とでもすぐに打ち解ける。',
        'かのじょはほがらかなせいかくで、だれとでもすぐにうちとける。',
        'Ia berkepribadian ceria dan mudah akrab dengan siapa pun.'
      ],
      [
        '子どもたちの朗らかな笑い声が庭に響いた。',
        'こどもたちのほがらかなわらいごえがにわにひびいた。',
        'Suara tawa ceria anak-anak bergema di halaman.'
      ]
    ]
  },
  yawaraka: {
    word: '柔らか',
    reading: 'やわらか',
    meaning: 'lembut; lunak; tidak keras',
    explanation:
      'Menggambarkan tekstur, gerakan, ekspresi, atau suasana yang tidak keras dan terasa lembut.',
    nuance:
      '柔らかい dapat digunakan untuk makanan, bahan, cahaya, dan sikap. Dalam bentuk kanji 柔らか, sering muncul sebagai kata sifat na dalam ungkapan tertentu; bentuk umum adalah 柔らかい.',
    contexts: ['Kehidupan sehari-hari', 'Deskripsi', 'Seni'],
    examples: [
      [
        'このパンは柔らかくて食べやすい。',
        'このぱんはやわらかくてたべやすい。',
        'Roti ini lembut dan mudah dimakan.'
      ],
      [
        '彼は柔らかな表情で子どもに話しかけた。',
        'かれはやわらかなひょうじょうでこどもにはなしかけた。',
        'Ia berbicara kepada anak itu dengan ekspresi yang lembut.'
      ]
    ]
  },
  nameraka: {
    word: '滑らか',
    reading: 'なめらか',
    meaning: 'halus; licin; lancar',
    explanation:
      'Menggambarkan permukaan yang tidak kasar, gerakan yang mulus, atau ucapan dan proses yang berlangsung tanpa tersendat.',
    nuance:
      'Dapat digunakan secara fisik maupun abstrak: 滑らかな肌, 滑らかな動き, 滑らかに話す. Menekankan tidak adanya hambatan atau kekasaran.',
    contexts: ['Deskripsi', 'Seni', 'Pekerjaan'],
    examples: [
      [
        'このクリームを塗ると、肌が滑らかになる。',
        'このくりーむをぬると、はだがなめらかになる。',
        'Jika krim ini dioleskan, kulit akan terasa lebih halus.'
      ],
      [
        '彼は日本語を滑らかに話すようになった。',
        'かれはにほんごをなめらかにはなすようになった。',
        'Ia mulai berbicara bahasa Jepang dengan lancar.'
      ]
    ]
  },
  jisei: {
    word: '自制',
    reading: 'じせい',
    meaning: 'pengendalian diri; menahan dorongan atau emosi',
    explanation:
      'Mengendalikan keinginan, emosi, atau perilaku sendiri agar tidak bertindak secara berlebihan atau merugikan.',
    nuance:
      'Sering digunakan dalam 自制心 dan 自制する. Lebih formal daripada 我慢 dan menekankan kemampuan mengatur diri secara sadar.',
    contexts: ['Psikologi', 'Pendidikan', 'Kehidupan sosial'],
    examples: [
      [
        '怒りを感じても、冷静さを保つために自制した。',
        'いかりをかんじても、れいせいさをたもつためにじせいした。',
        'Meskipun merasa marah, saya mengendalikan diri agar tetap tenang.'
      ],
      [
        '自由には責任と自制が伴う。',
        'じゆうにはせきにんとじせいがともなう。',
        'Kebebasan disertai tanggung jawab dan pengendalian diri.'
      ]
    ]
  },
  jiritsu: {
    word: '自立',
    reading: 'じりつ',
    meaning: 'kemandirian; berdiri sendiri',
    explanation:
      'Keadaan ketika seseorang atau organisasi mampu menjalani kehidupan atau kegiatan tanpa terlalu bergantung pada pihak lain.',
    nuance:
      'Sering digunakan dalam 自立した生活 dan 経済的自立. Berbeda dari 自律 yang menekankan pengaturan diri berdasarkan prinsip atau aturan.',
    contexts: ['Pendidikan', 'Sosial', 'Kehidupan sehari-hari'],
    examples: [
      [
        '大学進学を機に、経済的な自立を目指している。',
        'だいがくしんがくをきに、けいざいてきなじりつをめざしている。',
        'Sejak masuk universitas, saya berusaha mencapai kemandirian finansial.'
      ],
      [
        '若者が安心して自立できる社会を作る必要がある。',
        'わかものがあんしんしてじりつできるしゃかいをつくるひつようがある。',
        'Perlu dibangun masyarakat tempat kaum muda dapat hidup mandiri dengan aman.'
      ]
    ]
  },
  jichou: {
    word: '自重',
    reading: 'じちょう',
    meaning: 'menahan diri; bertindak hati-hati; menjaga perilaku',
    explanation:
      'Mengendalikan tindakan sendiri agar tidak ceroboh atau berlebihan; dalam konteks teknis juga berarti berat suatu benda.',
    nuance:
      'Dalam nasihat, 自重する berarti bersikap hati-hati atau tidak melakukan hal yang tidak pantas. Dalam teknik, 自重 berarti bobot benda itu sendiri.',
    contexts: ['Formal', 'Pekerjaan', 'Teknik'],
    examples: [
      [
        '立場を考えて、発言には自重してほしい。',
        'たちばをかんがえて、はつげんにはじちょうしてほしい。',
        'Dengan mempertimbangkan posisi Anda, saya harap Anda berhati-hati dalam berbicara.'
      ],
      [
        'この橋は車両の重さだけでなく、自重にも耐えなければならない。',
        'このはしはしゃりょうのおもさだけでなく、じじゅうにもたえなければならない。',
        'Jembatan ini harus mampu menahan bukan hanya berat kendaraan, tetapi juga bobotnya sendiri.'
      ]
    ]
  },
  jinin: {
    word: '自任',
    reading: 'じにん',
    meaning: 'menganggap diri sebagai; merasa dirinya bertanggung jawab atas',
    explanation:
      'Menganggap atau menyatakan diri sendiri sebagai orang yang memiliki peran, kemampuan, atau tanggung jawab tertentu.',
    nuance:
      'Sering muncul dalam 〜を自任する. Dapat menunjukkan kebanggaan atau penilaian diri, dan kadang menyiratkan bahwa pengakuan tersebut berasal dari diri sendiri.',
    contexts: ['Media', 'Deskripsi', 'Formal'],
    examples: [
      [
        '彼は地域の文化を守る先駆者を自任している。',
        'かれはちいきのぶんかをまもるせんくしゃをじにんしている。',
        'Ia menganggap dirinya sebagai pelopor dalam menjaga budaya daerah.'
      ],
      [
        '彼女はチームの調整役を自任し、皆の意見をまとめている。',
        'かのじょはちーむのちょうせいやくをじにんし、みなのいけんをまとめている。',
        'Ia menganggap dirinya sebagai koordinator tim dan merangkum pendapat semua orang.'
      ]
    ]
  },
  henjou: {
    word: '返上',
    reading: 'へんじょう',
    meaning: 'mengembalikan; melepaskan gelar, hak, atau jabatan',
    explanation:
      'Mengembalikan sesuatu yang dimiliki atau secara sukarela melepaskan gelar, hak, status, maupun jabatan.',
    nuance:
      'Sering digunakan dalam 王座を返上する, 肩書きを返上する, dan 休日返上. Pada 休日返上 berarti mengorbankan hari libur untuk bekerja.',
    contexts: ['Berita', 'Olahraga', 'Pekerjaan'],
    examples: [
      [
        '選手はけがのため、チャンピオンの座を返上した。',
        'せんしゅはけがのため、ちゃんぴおんのざをへんじょうした。',
        'Atlet itu melepaskan gelar juaranya karena cedera.'
      ],
      [
        '彼は休日を返上して、復旧作業に参加した。',
        'かれはきゅうじつをへんじょうして、ふっきゅうさぎょうにさんかした。',
        'Ia mengorbankan hari liburnya untuk ikut serta dalam pekerjaan pemulihan.'
      ]
    ]
  },
  kangen: {
    word: '還元',
    reading: 'かんげん',
    meaning: 'mengembalikan manfaat; menyalurkan kembali; reduksi (kimia)',
    explanation:
      'Mengembalikan keuntungan atau manfaat kepada pihak asal atau masyarakat; dalam ilmu kimia berarti proses reduksi.',
    nuance:
      'Dalam bisnis sering dipakai dalam 利益を還元する. Dalam ilmu pengetahuan, 還元反応 adalah reaksi reduksi, jadi maknanya ditentukan konteks.',
    contexts: ['Ekonomi', 'Bisnis', 'Kimia'],
    examples: [
      [
        '企業は利益の一部を地域社会に還元している。',
        'きぎょうはりえきのいちぶをちいきしゃかいにかんげんしている。',
        'Perusahaan menyalurkan kembali sebagian keuntungannya kepada masyarakat setempat.'
      ],
      [
        'この反応では、金属イオンが還元される。',
        'このはんのうでは、きんぞくいおんがかんげんされる。',
        'Dalam reaksi ini, ion logam mengalami reduksi.'
      ]
    ]
  },
  haikyuu: {
    word: '配給',
    reading: 'はいきゅう',
    meaning: 'distribusi jatah; penyaluran barang kebutuhan',
    explanation:
      'Membagikan barang atau kebutuhan kepada orang-orang atau kelompok berdasarkan jumlah dan aturan tertentu.',
    nuance:
      'Sering muncul dalam sejarah masa perang, keadaan darurat, dan distribusi kebutuhan pokok. 配給制 berarti sistem penjatahan.',
    contexts: ['Sejarah', 'Administrasi', 'Berita'],
    examples: [
      [
        '災害の後、避難所で食料と水が配給された。',
        'さいがいのあと、ひなんじょでしょくりょうとみずがはいきゅうされた。',
        'Setelah bencana, makanan dan air dibagikan di tempat pengungsian.'
      ],
      [
        '戦時中は生活必需品の配給が行われていた。',
        'せんじちゅうはせいかつひつじゅひんのはいきゅうがおこなわれていた。',
        'Pada masa perang, barang-barang kebutuhan sehari-hari dibagikan dengan sistem penjatahan.'
      ]
    ]
  },
  jouto: {
    word: '譲渡',
    reading: 'じょうと',
    meaning: 'pengalihan kepemilikan; penyerahan hak',
    explanation:
      'Memindahkan hak kepemilikan atau hak tertentu dari satu pihak kepada pihak lain.',
    nuance:
      'Istilah formal yang sering digunakan dalam hukum, kontrak, properti, dan bisnis: 権利を譲渡する. Berbeda dari 譲る yang lebih umum dan bisa digunakan dalam percakapan.',
    contexts: ['Hukum', 'Bisnis', 'Administrasi'],
    examples: [
      [
        'チケットの譲渡は禁止されています。',
        'ちけっとのじょうとはきんしされています。',
        'Pengalihan tiket kepada orang lain dilarang.'
      ],
      [
        '父は所有していた土地を子どもに譲渡した。',
        'ちちはしょゆうしていたとちをこどもにじょうとした。',
        'Ayah mengalihkan tanah yang dimilikinya kepada anak-anaknya.'
      ]
    ]
  },
  bisshori: {
    word: 'びっしょり',
    reading: 'びっしょり',
    meaning: 'basah kuyup; sangat basah',
    explanation:
      'Menggambarkan keadaan seseorang atau sesuatu yang basah secara menyeluruh, biasanya karena hujan, keringat, atau air.',
    nuance:
      'Lebih kuat daripada 少し濡れる dan sering dipakai dalam びっしょり濡れる. Umumnya berkaitan dengan pakaian, tubuh, rambut, atau benda.',
    contexts: ['Kehidupan sehari-hari', 'Cuaca', 'Kesehatan'],
    examples: [
      [
        '突然の雨で、服がびっしょり濡れてしまった。',
        'とつぜんのあめで、ふくがびっしょりぬれてしまった。',
        'Karena hujan mendadak, pakaian saya basah kuyup.'
      ],
      [
        '暑い日に走ったので、背中が汗でびっしょりだ。',
        'あついひにはしったので、せなかがあせでびっしょりだ。',
        'Karena berlari pada hari yang panas, punggung saya basah oleh keringat.'
      ]
    ]
  },
  dossari: {
    word: 'どっさり',
    reading: 'どっさり',
    meaning: 'dalam jumlah sangat banyak; bertumpuk-tumpuk',
    explanation:
      'Menunjukkan bahwa sesuatu datang atau terkumpul dalam jumlah besar, sering kali melebihi perkiraan.',
    nuance:
      'Sering digunakan untuk barang, tugas, surat, salju, atau hasil panen. Memberi kesan kuantitas yang melimpah atau menumpuk.',
    contexts: ['Percakapan', 'Pekerjaan', 'Kehidupan sehari-hari'],
    examples: [
      [
        '机の上に書類がどっさり積まれていた。',
        'つくえのうえにしょるいがどっさりつまれていた。',
        'Dokumen menumpuk sangat banyak di atas meja.'
      ],
      [
        '実家から野菜がどっさり送られてきた。',
        'じっかからやさいがどっさりおくられてきた。',
        'Sayuran dikirim dari rumah orang tua dalam jumlah sangat banyak.'
      ]
    ]
  },
  donyori: {
    word: 'どんより',
    reading: 'どんより',
    meaning: 'suram; mendung; tampak berat dan muram',
    explanation:
      'Menggambarkan langit yang tertutup awan gelap atau suasana dan ekspresi yang tampak muram.',
    nuance:
      'Dapat digunakan untuk cuaca maupun perasaan: 空がどんよりする, どんよりした表情. Menekankan suasana kelabu atau berat.',
    contexts: ['Cuaca', 'Deskripsi', 'Percakapan'],
    examples: [
      [
        '朝から空がどんより曇っている。',
        'あさからそらがどんよりくもっている。',
        'Sejak pagi langit tampak mendung dan kelabu.'
      ],
      [
        '疲れがたまって、彼の目はどんよりしていた。',
        'つかれがたまって、かれのめはどんよりしていた。',
        'Karena kelelahan menumpuk, matanya tampak sayu.'
      ]
    ]
  },
  guttari: {
    word: 'ぐったり',
    reading: 'ぐったり',
    meaning: 'lemas sekali; lunglai karena kelelahan',
    explanation:
      'Menggambarkan keadaan seseorang atau makhluk hidup yang kehilangan tenaga dan tampak tidak berdaya karena lelah atau sakit.',
    nuance:
      'Sering digunakan dalam ぐったりする dan ぐったりと横になる. Lebih menekankan hilangnya tenaga daripada sekadar mengantuk.',
    contexts: ['Kesehatan', 'Kehidupan sehari-hari', 'Deskripsi'],
    examples: [
      [
        '長い移動の後、彼はソファでぐったりしていた。',
        'ながいいどうのあと、かれはそふぁでぐったりしていた。',
        'Setelah perjalanan panjang, ia terbaring lemas di sofa.'
      ],
      [
        '暑さで花がぐったりしている。',
        'あつさではながぐったりしている。',
        'Bunga-bunga tampak layu karena panas.'
      ]
    ]
  },
  noizu: {
    word: 'ノイズ',
    reading: 'のいず',
    meaning: 'gangguan suara; derau; sinyal yang tidak diinginkan',
    explanation:
      'Suara atau sinyal yang tidak diinginkan dan mengganggu informasi utama, terutama dalam audio, komunikasi, atau data.',
    nuance:
      'Dalam teknologi berarti gangguan sinyal atau data; dalam percakapan bisa berarti suara latar yang mengganggu. Makna kiasan dapat merujuk pada unsur pengganggu.',
    contexts: ['Teknologi', 'Audio', 'Media'],
    examples: [
      [
        '録音にノイズが入っていて、声が聞き取りにくい。',
        'ろくおんにのいずがはいっていて、こえがききとりにくい。',
        'Ada gangguan suara dalam rekaman sehingga suaranya sulit didengar.'
      ],
      [
        'このセンサーは周囲のノイズを除去する機能を備えている。',
        'このせんさーはしゅういののいずをじょきょするきのうをそなえている。',
        'Sensor ini dilengkapi fungsi untuk menghilangkan gangguan dari lingkungan sekitar.'
      ]
    ]
  },
  rokku: {
    word: 'ロック',
    reading: 'ろっく',
    meaning: 'kunci; mengunci; musik rock',
    explanation:
      'Kata serapan yang dapat berarti mengunci perangkat atau mekanisme, atau merujuk pada genre musik rock.',
    nuance:
      'Makna bergantung konteks. 画面をロックする berarti mengunci layar; ロック音楽 berarti musik rock. Perlu melihat konteks untuk menentukan arti yang dimaksud.',
    contexts: ['Teknologi', 'Musik', 'Kehidupan sehari-hari'],
    examples: [
      [
        '席を離れるときは、パソコンの画面をロックしてください。',
        'せきをはなれるときは、ぱそこんのがめんをろっくしてください。',
        'Saat meninggalkan tempat duduk, harap kunci layar komputer.'
      ],
      [
        '彼は若い頃からロックを聴いている。',
        'かれはわかいころからろっくをきいている。',
        'Ia mendengarkan musik rock sejak muda.'
      ]
    ]
  },
  tabuu: {
    word: 'タブー',
    reading: 'たぶー',
    meaning:
      'pantangan; hal yang dianggap tidak boleh dibicarakan atau dilakukan',
    explanation:
      'Hal yang dilarang atau dianggap tidak pantas oleh norma, budaya, atau kelompok tertentu.',
    nuance:
      'Bisa merujuk pada tindakan, topik pembicaraan, atau kebiasaan. タブー視する berarti menganggap sesuatu sebagai hal tabu.',
    contexts: ['Budaya', 'Sosiologi', 'Percakapan'],
    examples: [
      [
        'その地域では、食事中に政治の話をすることがタブーとされている。',
        'そのちいきでは、しょくじちゅうにせいじのはなしをすることがたぶーとされている。',
        'Di wilayah itu, membicarakan politik saat makan dianggap tabu.'
      ],
      [
        '長い間タブーだった問題について、公開の議論が始まった。',
        'ながいあいだたぶーだったもんだいについて、こうかいのぎろんがはじまった。',
        'Diskusi terbuka dimulai mengenai masalah yang telah lama dianggap tabu.'
      ]
    ]
  },
  nekku: {
    word: 'ネック',
    reading: 'ねっく',
    meaning: 'hambatan utama; kendala; titik lemah',
    explanation:
      'Bagian atau masalah yang paling menghambat kemajuan suatu rencana atau kegiatan.',
    nuance:
      'Kata serapan dari bahasa Inggris neck, sering digunakan secara kiasan: 人手不足がネックになる. Juga dapat berarti bagian leher pada pakaian atau alat.',
    contexts: ['Bisnis', 'Pekerjaan', 'Kehidupan sehari-hari'],
    examples: [
      [
        '費用の高さが、この計画を進める上でのネックになっている。',
        'ひようのたかさが、このけいかくをすすめるうえでのねっくになっている。',
        'Tingginya biaya menjadi hambatan utama dalam menjalankan rencana ini.'
      ],
      [
        '技術は十分だが、時間の不足がネックだ。',
        'ぎじゅつはじゅうぶんだが、じかんのふそくがねっくだ。',
        'Teknologinya sudah memadai, tetapi kekurangan waktu menjadi kendala.'
      ]
    ]
  },
  hassan: {
    word: '発散',
    reading: 'はっさん',
    meaning: 'pelepasan; penyebaran; meluapkan (emosi/energi)',
    explanation:
      'Menyebarkan sesuatu ke berbagai arah atau melepaskan sesuatu yang terkumpul, seperti panas, aroma, energi, atau emosi.',
    nuance:
      'Dalam percakapan sering digunakan untuk ストレスを発散する (melepaskan stres). Dalam sains dapat berarti penyebaran atau divergensi.',
    contexts: ['Kesehatan', 'Ilmu pengetahuan', 'Kehidupan sehari-hari'],
    examples: [
      [
        '運動をして、たまったストレスを発散した。',
        'うんどうをして、たまったすとれすをはっさんした。',
        'Saya berolahraga untuk melepaskan stres yang menumpuk.'
      ],
      [
        'この植物は夜になると強い香りを発散する。',
        'このしょくぶつはよるになるとつよいかおりをはっさんする。',
        'Tanaman ini mengeluarkan aroma kuat saat malam.'
      ]
    ]
  },
  hassha: {
    word: '発射',
    reading: 'はっしゃ',
    meaning: 'peluncuran; penembakan; melepaskan proyektil',
    explanation:
      'Meluncurkan atau melepaskan sesuatu seperti roket, peluru, atau objek lain dari alat peluncur.',
    nuance:
      'Istilah teknis yang biasa digunakan untuk roket, senjata, dan perangkat peluncur. Tidak sama dengan 発車 yang berarti kendaraan mulai berangkat.',
    contexts: ['Teknologi', 'Berita', 'Transportasi'],
    examples: [
      [
        'ロケットは予定時刻に発射された。',
        'ろけっとはよていじこくにはっしゃされた。',
        'Roket diluncurkan pada waktu yang dijadwalkan.'
      ],
      [
        '実験では、小型の装置から信号弾を発射した。',
        'じっけんでは、こがたのそうちからしんごうだんをはっしゃした。',
        'Dalam percobaan itu, suar sinyal diluncurkan dari perangkat kecil.'
      ]
    ]
  },
  ryuushutsu: {
    word: '流出',
    reading: 'りゅうしゅつ',
    meaning: 'kebocoran; mengalir keluar; tersebarnya informasi atau dana',
    explanation:
      'Keadaan ketika cairan, informasi, uang, atau sumber daya keluar dari tempat yang seharusnya dan menyebar ke luar.',
    nuance:
      'Sering digunakan untuk minyak, data pribadi, modal, dan tenaga kerja: 個人情報の流出. Menekankan sesuatu yang keluar dari batas atau pengawasan.',
    contexts: ['Berita', 'Teknologi', 'Ekonomi'],
    examples: [
      [
        '企業から顧客情報が流出したことが判明した。',
        'きぎょうからこきゃくじょうほうがりゅうしゅつしたことがはんめいした。',
        'Terungkap bahwa informasi pelanggan bocor dari perusahaan.'
      ],
      [
        '事故により、工場から有害な液体が流出した。',
        'じこにより、こうじょうからゆうがいなえきたいがりゅうしゅつした。',
        'Akibat kecelakaan, cairan berbahaya mengalir keluar dari pabrik.'
      ]
    ]
  },
  haishutsu: {
    word: '排出',
    reading: 'はいしゅつ',
    meaning: 'pembuangan; pengeluaran zat atau limbah',
    explanation:
      'Mengeluarkan zat, gas, limbah, atau bahan yang tidak lagi diperlukan dari tubuh, mesin, atau lingkungan.',
    nuance:
      'Sering digunakan untuk 排出ガス (gas buang), 二酸化炭素を排出する, dan 老廃物の排出. Lebih teknis daripada 出す.',
    contexts: ['Lingkungan', 'Kesehatan', 'Ilmu pengetahuan'],
    examples: [
      [
        '工場から排出される二酸化炭素を減らす必要がある。',
        'こうじょうからはいしゅつされるにさんかたんそをへらすひつようがある。',
        'Emisi karbon dioksida dari pabrik perlu dikurangi.'
      ],
      [
        '適度な運動は体内の老廃物の排出を助ける。',
        'てきどなうんどうはたいないのろうはいぶつのはいしゅつをたすける。',
        'Olahraga yang cukup membantu pengeluaran zat sisa dari tubuh.'
      ]
    ]
  },
  magirawashii: {
    word: '紛らわしい',
    reading: 'まぎらわしい',
    meaning: 'membingungkan; sulit dibedakan; mirip sehingga tertukar',
    explanation:
      'Menggambarkan dua hal atau lebih yang sangat mirip sehingga mudah disalahartikan atau tertukar.',
    nuance:
      'Sering dipakai untuk nama, bentuk, tulisan, tanda, atau penjelasan. 紛らわしい表現 berarti ungkapan yang membingungkan atau ambigu.',
    contexts: ['Pendidikan', 'Administrasi', 'Percakapan'],
    examples: [
      [
        'この二つの漢字は形が似ていて紛らわしい。',
        'このふたつのかんじはかたちがにていてまぎらわしい。',
        'Kedua kanji ini bentuknya mirip dan membingungkan.'
      ],
      [
        '紛らわしい表示のせいで、乗る電車を間違えた。',
        'まぎらわしいひょうじのせいで、のるでんしゃをまちがえた。',
        'Karena petunjuk yang membingungkan, saya salah menaiki kereta.'
      ]
    ]
  },
  mottomorashii: {
    word: '尤もらしい',
    reading: 'もっともらしい',
    meaning: 'tampak masuk akal; seolah-olah benar atau meyakinkan',
    explanation:
      'Menggambarkan alasan, penjelasan, atau sikap yang tampak wajar dan dapat dipercaya, meskipun belum tentu benar.',
    nuance:
      'Dapat bernada netral atau kritis; 尤もらしい説明 sering menyiratkan bahwa penjelasan itu hanya tampak meyakinkan. Bentuk kanji 尤も lebih jarang daripada もっとも.',
    contexts: ['Berita', 'Percakapan', 'Analisis'],
    examples: [
      [
        '彼は尤もらしい理由を並べて、欠席を正当化した。',
        'かれはもっともらしいりゆうをならべて、けっせきをせいとうかした。',
        'Ia mengajukan berbagai alasan yang terdengar masuk akal untuk membenarkan ketidakhadirannya.'
      ],
      [
        'その説明は尤もらしいが、証拠が不足している。',
        'そのせつめいはもっともらしいが、しょうこがふそくしている。',
        'Penjelasan itu tampak meyakinkan, tetapi buktinya tidak cukup.'
      ]
    ]
  },
  zuzushii: {
    word: '図々しい',
    reading: 'ずうずうしい',
    meaning: 'tidak tahu malu; lancang; terlalu berani meminta',
    explanation:
      'Menggambarkan orang yang tidak merasa sungkan atau malu meskipun tindakannya merepotkan atau merugikan orang lain.',
    nuance:
      'Bernada negatif. Dapat digunakan untuk permintaan yang terlalu berani, perilaku egois, atau orang yang tidak peka terhadap batas sosial.',
    contexts: ['Kehidupan sosial', 'Percakapan', 'Deskripsi orang'],
    examples: [
      [
        '初対面なのにお金を貸してほしいと言うのは図々しい。',
        'しょたいめんなのにおかねをかしてほしいというのはずうずうしい。',
        'Meminta pinjaman uang kepada orang yang baru dikenal merupakan tindakan yang lancang.'
      ],
      [
        '彼は図々しくも、会議に遅れてきて謝らなかった。',
        'かれはずうずうしくも、かいぎにおくれてきてあやまらなかった。',
        'Dengan tidak tahu malu, ia datang terlambat ke rapat dan tidak meminta maaf.'
      ]
    ]
  },
  narenarashii: {
    word: '馴れ馴れしい',
    reading: 'なれなれしい',
    meaning: 'terlalu akrab; sok dekat; kurang menjaga batas sopan',
    explanation:
      'Menggambarkan sikap seseorang yang bertindak terlalu akrab meskipun hubungan belum cukup dekat.',
    nuance:
      'Bernuansa negatif karena mengabaikan jarak sosial atau kesopanan. Berbeda dari 親しみやすい yang berarti mudah didekati secara positif.',
    contexts: ['Kehidupan sosial', 'Pekerjaan', 'Percakapan'],
    examples: [
      [
        '初対面の相手に馴れ馴れしい口調で話すのは避けたほうがいい。',
        'しょたいめんのあいてになれなれしいくちょうではなすのはさけたほうがいい。',
        'Sebaiknya hindari berbicara dengan nada terlalu akrab kepada orang yang baru ditemui.'
      ],
      [
        '彼の馴れ馴れしい態度に、相手は少し戸惑っていた。',
        'かれのなれなれしいたいどに、あいてはすこしとまどっていた。',
        'Lawan bicaranya sedikit bingung dengan sikapnya yang terlalu akrab.'
      ]
    ]
  },
  ikizumaru: {
    word: '行き詰まる',
    reading: 'いきづまる',
    meaning: 'menemui jalan buntu; tidak dapat melanjutkan',
    explanation:
      'Keadaan ketika pekerjaan, pemikiran, negosiasi, atau rencana tidak dapat berkembang karena hambatan yang sulit diatasi.',
    nuance:
      'Sering digunakan dalam 議論が行き詰まる dan 経営が行き詰まる. Menyiratkan tidak terlihatnya jalan keluar.',
    contexts: ['Pekerjaan', 'Berita', 'Akademik'],
    examples: [
      [
        '議論が行き詰まったため、別の方法を検討した。',
        'ぎろんがいきづまったため、べつのほうほうをけんとうした。',
        'Karena diskusi menemui jalan buntu, kami mempertimbangkan cara lain.'
      ],
      [
        '資金不足で事業の運営が行き詰まっている。',
        'しきんぶそくでじぎょうのうんえいがいきづまっている。',
        'Operasional bisnis mengalami kebuntuan karena kekurangan dana.'
      ]
    ]
  },
  ikikau: {
    word: '行き交う',
    reading: 'いきかう',
    meaning: 'berlalu-lalang; saling melintas',
    explanation:
      'Banyak orang atau kendaraan bergerak melewati suatu tempat dalam arah yang berbeda-beda.',
    nuance:
      'Sering digunakan untuk jalan, stasiun, atau tempat ramai. Memberikan gambaran aktivitas lalu lintas dua arah yang terus berlangsung.',
    contexts: ['Deskripsi', 'Kehidupan sehari-hari', 'Sastra'],
    examples: [
      [
        '駅前では多くの人々が行き交っている。',
        'えきまえではおおくのひとびとがいきかっている。',
        'Banyak orang berlalu-lalang di depan stasiun.'
      ],
      [
        '港には船が行き交い、活気に満ちていた。',
        'みなとにはふねがいきかい、かっきにみちていた。',
        'Kapal-kapal saling berlalu-lalang di pelabuhan yang penuh aktivitas.'
      ]
    ]
  },
  ikitsuku: {
    word: '行き着く',
    reading: 'いきつく',
    meaning: 'sampai pada tujuan; akhirnya mencapai suatu kesimpulan',
    explanation:
      'Mencapai tempat atau titik akhir setelah bergerak atau melalui suatu proses; secara abstrak, mencapai kesimpulan atau keadaan tertentu.',
    nuance:
      'Dapat digunakan secara fisik dan abstrak: 結論に行き着く. Menekankan hasil akhir setelah perjalanan atau pemikiran panjang.',
    contexts: ['Perjalanan', 'Akademik', 'Analisis'],
    examples: [
      [
        '迷った末に、ようやく目的地に行き着いた。',
        'まよったすえに、ようやくもくてきちにいきついた。',
        'Setelah tersesat, akhirnya saya sampai di tujuan.'
      ],
      [
        '議論を重ねた結果、同じ結論に行き着いた。',
        'ぎろんをかさねたけっか、おなじけつろんにいきついた。',
        'Setelah berulang kali berdiskusi, kami akhirnya sampai pada kesimpulan yang sama.'
      ]
    ]
  },
  ikitodoku: {
    word: '行き届く',
    reading: 'いきとどく',
    meaning: 'terurus dengan baik; diperhatikan hingga detail',
    explanation:
      'Menunjukkan bahwa perhatian, pelayanan, pengawasan, atau persiapan menjangkau seluruh bagian tanpa ada yang terlewat.',
    nuance:
      'Sering digunakan dalam 気が行き届く dan 手入れが行き届く. Bernuansa positif, menekankan ketelitian dan perhatian menyeluruh.',
    contexts: ['Pelayanan', 'Pekerjaan', 'Kehidupan sehari-hari'],
    examples: [
      [
        'このホテルは細かいところまでサービスが行き届いている。',
        'このほてるはこまかいところまでさーびすがいきとどいている。',
        'Pelayanan hotel ini sangat baik hingga ke hal-hal kecil.'
      ],
      [
        '管理が行き届いた公園は、いつも清潔に保たれている。',
        'かんりがいきとどいたこうえんは、いつもせいけつにたもたれている。',
        'Taman yang dikelola dengan baik selalu terjaga kebersihannya.'
      ]
    ]
  },
  kitai: {
    word: '期待',
    reading: 'きたい',
    meaning: 'harapan; ekspektasi; menantikan sesuatu',
    explanation:
      'Perasaan atau perkiraan bahwa seseorang atau sesuatu akan memberikan hasil yang baik atau terjadi sesuai harapan.',
    nuance:
      '期待する dapat digunakan untuk hasil, orang, atau masa depan. 期待に応える berarti memenuhi harapan; 期待外れ berarti mengecewakan.',
    contexts: ['Kehidupan sosial', 'Pendidikan', 'Pekerjaan'],
    examples: [
      [
        '新しい制度の効果に大きな期待が寄せられている。',
        'あたらしいせいどのこうかにおおきなきたいがよせられている。',
        'Harapan besar ditujukan pada dampak sistem baru.'
      ],
      [
        '周囲の期待に応えられるよう、努力を続けている。',
        'しゅういのきたいにこたえられるよう、どりょくをつづけている。',
        'Saya terus berusaha agar dapat memenuhi harapan orang-orang di sekitar.'
      ]
    ]
  },
  yosou: {
    word: '予想',
    reading: 'よそう',
    meaning: 'perkiraan; prediksi; dugaan tentang masa depan',
    explanation:
      'Penilaian atau perkiraan mengenai sesuatu yang belum terjadi berdasarkan informasi atau keadaan yang ada.',
    nuance:
      'Sering digunakan dalam 天気予想, 予想通り, dan 予想外. Lebih menekankan perkiraan daripada harapan pribadi seperti 期待.',
    contexts: ['Berita', 'Akademik', 'Kehidupan sehari-hari'],
    examples: [
      [
        '試合の結果は多くの人の予想と違っていた。',
        'しあいのけっかはおおくのひとのよそうとちがっていた。',
        'Hasil pertandingan berbeda dari perkiraan banyak orang.'
      ],
      [
        '専門家は来年、需要がさらに増えると予想している。',
        'せんもんかはらいねん、じゅようがさらにふえるとよそうしている。',
        'Para ahli memperkirakan bahwa permintaan akan semakin meningkat tahun depan.'
      ]
    ]
  },
  juushi: {
    word: '重視',
    reading: 'じゅうし',
    meaning: 'penekanan; mengutamakan; menganggap penting',
    explanation:
      'Memberikan perhatian dan bobot besar pada suatu faktor ketika membuat penilaian atau keputusan.',
    nuance:
      'Sering digunakan dalam 〜を重視する. Menunjukkan prioritas yang diberikan pada kualitas, keamanan, pengalaman, atau hasil tertentu.',
    contexts: ['Bisnis', 'Pendidikan', 'Berita'],
    examples: [
      [
        'この会社は経験よりも人柄を重視して採用している。',
        'このかいしゃはけいけんよりもひとがらをじゅうししてさいようしている。',
        'Perusahaan ini lebih mengutamakan kepribadian daripada pengalaman dalam perekrutan.'
      ],
      [
        '政策を決める際には、地域住民の意見を重視すべきだ。',
        'せいさくをきめるさいには、ちいきじゅうみんのいけんをじゅうしすべきだ。',
        'Saat menentukan kebijakan, pendapat warga setempat seharusnya diprioritaskan.'
      ]
    ]
  },
  enryo: {
    word: '遠慮する',
    reading: 'えんりょする',
    meaning:
      'menahan diri; sungkan; tidak melakukan sesuatu demi menjaga kesopanan',
    explanation:
      'Mengendalikan tindakan atau keinginan karena mempertimbangkan orang lain, keadaan, atau norma kesopanan.',
    nuance:
      'Bisa positif sebagai kesopanan, tetapi juga bisa berarti terlalu sungkan. 遠慮なくどうぞ berarti silakan tanpa sungkan; 遠慮する berarti menahan diri atau menolak secara halus.',
    contexts: ['Kehidupan sosial', 'Percakapan', 'Formal'],
    examples: [
      [
        'どうぞ遠慮せずに、たくさん食べてください。',
        'どうぞえんりょせずに、たくさんたべてください。',
        'Silakan makan banyak tanpa sungkan.'
      ],
      [
        '彼は周囲に遠慮して、自分の意見を言わなかった。',
        'かれはしゅういにえんりょして、じぶんのいけんをいわなかった。',
        'Ia sungkan terhadap orang-orang di sekitarnya sehingga tidak menyampaikan pendapatnya.'
      ]
    ]
  },
  harikiru: {
    word: '張り切る',
    reading: 'はりきる',
    meaning: 'bersemangat sekali; bertekad penuh antusias',
    explanation:
      'Menunjukkan keadaan seseorang yang memiliki semangat dan motivasi tinggi untuk melakukan sesuatu.',
    nuance:
      'Sering digunakan untuk kegiatan, pekerjaan, atau acara: 張り切って準備する. Kadang dapat menyiratkan terlalu bersemangat hingga melakukan lebih dari yang diperlukan.',
    contexts: ['Kehidupan sehari-hari', 'Pekerjaan', 'Pendidikan'],
    examples: [
      [
        '初めての発表なので、彼は朝から張り切っている。',
        'はじめてのはっぴょうなので、かれはあさからはりきっている。',
        'Karena ini presentasi pertamanya, ia sudah sangat bersemangat sejak pagi.'
      ],
      [
        '張り切りすぎて、準備に時間をかけすぎてしまった。',
        'はりきりすぎて、じゅんびにじかんをかけすぎてしまった。',
        'Karena terlalu bersemangat, ia menghabiskan terlalu banyak waktu untuk persiapan.'
      ]
    ]
  },
  yaseshiobireru: {
    word: '痩せ衰える',
    reading: 'やせおとろえる',
    meaning: 'menjadi sangat kurus dan lemah; merosot kondisinya',
    explanation:
      'Menggambarkan keadaan tubuh atau kondisi yang menjadi lemah dan kehilangan kekuatan akibat penyakit, usia, atau kesulitan berkepanjangan.',
    nuance:
      'Ungkapan deskriptif yang cukup kuat, sering dijumpai dalam sastra atau laporan. Dapat pula digunakan secara kiasan untuk tanah atau sumber daya yang semakin merosot.',
    contexts: ['Sastra', 'Kesehatan', 'Berita'],
    examples: [
      [
        '長い病気の後、彼は痩せ衰えてしまった。',
        'ながいびょうきのあと、かれはやせおとろえてしまった。',
        'Setelah sakit dalam waktu lama, kondisinya menjadi sangat lemah.'
      ],
      [
        '栄養不足で土地が痩せ衰え、作物が育ちにくくなった。',
        'えいようぶそくでとちがやせおとろえ、さくもつがそだちにくくなった。',
        'Karena kekurangan unsur hara, tanah menjadi tandus sehingga tanaman sulit tumbuh.'
      ]
    ]
  },
  kandousuru: {
    word: '感動する',
    reading: 'かんどうする',
    meaning: 'terharu; tersentuh; merasa kagum secara emosional',
    explanation:
      'Mengalami perasaan kuat karena sesuatu yang indah, mengesankan, menyentuh, atau luar biasa.',
    nuance:
      '感動した dapat menunjukkan rasa haru maupun kekaguman. Lebih emosional daripada 関心を持つ (tertarik) dan dapat digunakan untuk karya seni, tindakan, atau pengalaman.',
    contexts: ['Seni', 'Kehidupan sosial', 'Pendidikan'],
    examples: [
      [
        '彼女の演奏を聴いて、深く感動した。',
        'かのじょのえんそうをきいて、ふかくかんどうした。',
        'Saya sangat terharu setelah mendengarkan penampilannya.'
      ],
      [
        '困っている人を助ける姿に感動した。',
        'こまっているひとをたすけるすがたにかんどうした。',
        'Saya tersentuh melihat seseorang membantu orang yang sedang kesulitan.'
      ]
    ]
  },
  jittogaman: {
    word: 'じっと我慢する',
    reading: 'じっとがまんする',
    meaning: 'bertahan dengan sabar; menahan diri tanpa bergerak atau mengeluh',
    explanation:
      'Menahan rasa tidak nyaman, keinginan, atau keadaan sulit dengan tetap tenang dan tidak bereaksi secara berlebihan.',
    nuance:
      'じっと menekankan sikap diam atau tidak banyak bergerak, sedangkan 我慢する menekankan menahan diri. Digunakan untuk situasi yang menuntut kesabaran.',
    contexts: ['Kehidupan sehari-hari', 'Kesehatan', 'Narasi'],
    examples: [
      [
        '順番が来るまで、じっと我慢して待った。',
        'じゅんばんがくるまで、じっとがまんしてまった。',
        'Saya menunggu dengan sabar sampai giliran saya tiba.'
      ],
      [
        '彼は悔しさを表に出さず、じっと我慢した。',
        'かれはくやしさをおもてにださず、じっとがまんした。',
        'Ia menahan diri dengan sabar tanpa memperlihatkan rasa kecewanya.'
      ]
    ]
  },
  hisshiganbaru: {
    word: '必死に頑張る',
    reading: 'ひっしにがんばる',
    meaning: 'berusaha mati-matian; berjuang dengan segenap tenaga',
    explanation:
      'Melakukan usaha dengan sangat sungguh-sungguh karena tujuan penting atau keadaan yang mendesak.',
    nuance:
      '必死に memperkuat makna 頑張る, tetapi ungkapan ini tidak selalu berarti situasi berbahaya. Menekankan usaha maksimal dan tekad kuat.',
    contexts: ['Pendidikan', 'Pekerjaan', 'Olahraga'],
    examples: [
      [
        '合格を目指して、毎日必死に頑張っている。',
        'ごうかくをめざして、まいにちひっしにがんばっている。',
        'Saya berusaha sekuat tenaga setiap hari untuk meraih kelulusan.'
      ],
      [
        'チーム全員が最後まで必死に頑張った。',
        'ちーむぜんいんがさいごまでひっしにがんばった。',
        'Seluruh anggota tim berjuang sekuat tenaga sampai akhir.'
      ]
    ]
  },
  hageshikuokoru: {
    word: '激しく怒る',
    reading: 'はげしくおこる',
    meaning: 'marah besar; sangat murka',
    explanation:
      'Menunjukkan kemarahan yang sangat kuat dan diekspresikan secara intens.',
    nuance:
      '激しく memperkuat tingkat kemarahan. Dalam tulisan, 怒りをあらわにする atau 激怒する terdengar lebih formal; ungkapan ini mudah dipahami dalam percakapan.',
    contexts: ['Kehidupan sosial', 'Narasi', 'Berita'],
    examples: [
      [
        '約束を何度も破られ、彼女は激しく怒った。',
        'やくそくをなんどもやぶられ、かのじょははげしくおこった。',
        'Karena janjinya berulang kali dilanggar, ia marah besar.'
      ],
      [
        '住民は説明の不足に対して激しく怒っている。',
        'じゅうみんはせつめいのふそくにたいしてはげしくおこっている。',
        'Warga sangat marah terhadap kurangnya penjelasan.'
      ]
    ]
  },
  asettetorikumu: {
    word: '焦って取り組む',
    reading: 'あせってとりくむ',
    meaning: 'mengerjakan dengan tergesa-gesa karena panik atau terdesak',
    explanation:
      'Memulai atau mengerjakan suatu tugas dalam keadaan terburu-buru karena merasa waktu sempit atau takut terlambat.',
    nuance:
      '焦って menunjukkan kegelisahan yang menyebabkan tindakan kurang tenang. 取り組む berarti menangani atau berusaha menyelesaikan suatu tugas atau masalah.',
    contexts: ['Pekerjaan', 'Pendidikan', 'Kehidupan sehari-hari'],
    examples: [
      [
        '締め切り直前になって、焦って取り組み始めた。',
        'しめきりちょくぜんになって、あせってとりくみはじめた。',
        'Baru menjelang tenggat, ia mulai mengerjakannya dengan tergesa-gesa.'
      ],
      [
        '焦って取り組むより、手順を確認してから進めよう。',
        'あせってとりくむより、てじゅんをかくにんしてからすすめよう。',
        'Daripada mengerjakannya dengan panik, mari periksa langkah-langkahnya terlebih dahulu.'
      ]
    ]
  },
  shikatanai: {
    word: '仕方ない',
    reading: 'しかたない',
    meaning: 'tidak ada cara lain; mau tidak mau; tidak terhindarkan',
    explanation:
      'Mengungkapkan bahwa suatu keadaan tidak dapat diubah atau tidak ada pilihan lain yang realistis.',
    nuance:
      'Bentuk kasual dari 仕方がない. Dapat menyatakan penerimaan atas keadaan, tetapi kadang terdengar pasrah atau kurang peduli tergantung nada.',
    contexts: ['Percakapan', 'Kehidupan sehari-hari'],
    examples: [
      [
        '電車が止まったのだから、待つのは仕方ない。',
        'でんしゃがとまったのだから、まつのはしかたない。',
        'Karena keretanya berhenti, tidak ada pilihan selain menunggu.'
      ],
      [
        '失敗してしまったのは仕方ないが、次に生かそう。',
        'しっぱいしてしまったのはしかたないが、つぎにいかそう。',
        'Kegagalan yang sudah terjadi memang tidak bisa diubah, tetapi mari manfaatkan pelajarannya untuk berikutnya.'
      ]
    ]
  },
  arienai: {
    word: 'あり得ない',
    reading: 'ありえない',
    meaning: 'mustahil; tidak mungkin; tidak masuk akal',
    explanation:
      'Menunjukkan bahwa sesuatu dianggap tidak mungkin terjadi atau sangat sulit dipercaya.',
    nuance:
      'Sering digunakan dalam percakapan untuk menyatakan ketidakpercayaan atau penolakan kuat. Dalam tulisan formal, 可能性がない atau 考えられない mungkin lebih sesuai.',
    contexts: ['Percakapan', 'Berita', 'Kehidupan sosial'],
    examples: [
      [
        'こんな短時間で全部終わるなんて、あり得ない。',
        'こんなたんじかんでぜんぶおわるなんて、ありえない。',
        'Tidak mungkin semuanya selesai dalam waktu sesingkat ini.'
      ],
      [
        '確認もせずに契約するのは、あり得ない判断だ。',
        'かくにんもせずにけいやくするのは、ありえないはんだんだ。',
        'Menandatangani kontrak tanpa pemeriksaan merupakan keputusan yang tidak masuk akal.'
      ]
    ]
  },
  omoigakenai: {
    word: '思いがけない',
    reading: 'おもいがけない',
    meaning: 'tidak terduga; di luar perkiraan',
    explanation:
      'Menggambarkan peristiwa atau hasil yang tidak pernah diperkirakan sebelumnya.',
    nuance:
      'Dapat digunakan untuk kejutan baik maupun buruk: 思いがけない贈り物 (hadiah tak terduga), 思いがけない事故 (kecelakaan tak terduga).',
    contexts: ['Kehidupan sehari-hari', 'Narasi', 'Berita'],
    examples: [
      [
        '旅先で思いがけない友人に再会した。',
        'たびさきでおもいがけないゆうじんにさいかいした。',
        'Saya bertemu kembali dengan seorang teman secara tak terduga saat bepergian.'
      ],
      [
        '思いがけない出費が続き、予定を変更した。',
        'おもいがけないしゅっぴがつづき、よていをへんこうした。',
        'Pengeluaran tak terduga terus muncul sehingga saya mengubah rencana.'
      ]
    ]
  },
  nasakenai: {
    word: '情けない',
    reading: 'なさけない',
    meaning: 'menyedihkan; memalukan; mengecewakan',
    explanation:
      'Menggambarkan keadaan atau tindakan yang menimbulkan rasa kecewa, malu, atau kasihan karena dianggap tidak memadai.',
    nuance:
      'Dapat ditujukan pada diri sendiri, tindakan, atau keadaan. Bernada emosional dan sering berarti “aku kecewa pada diriku sendiri” dalam penggunaan sehari-hari.',
    contexts: ['Percakapan', 'Sastra', 'Kehidupan sosial'],
    examples: [
      [
        '簡単な問題も解けず、自分が情けなくなった。',
        'かんたんなもんだいもとけず、じぶんがなさけなくなった。',
        'Saya merasa kecewa pada diri sendiri karena bahkan tidak bisa menyelesaikan soal mudah.'
      ],
      [
        '困っている人を見て見ぬふりをするのは情けない。',
        'こまっているひとをみてみぬふりをするのはなさけない。',
        'Berpura-pura tidak melihat orang yang sedang kesulitan adalah tindakan yang memalukan.'
      ]
    ]
  },
  subete: {
    word: '全て',
    reading: 'すべて',
    meaning: 'semua; seluruhnya; segala sesuatu',
    explanation:
      'Menunjukkan keseluruhan orang, benda, hal, atau bagian tanpa mengecualikan apa pun.',
    nuance:
      'Dapat dibaca すべて atau ぜんぶ dalam penggunaan umum; bacaan すべて cenderung lebih formal atau menyeluruh. 全てを把握する berarti memahami semuanya.',
    contexts: ['Formal', 'Percakapan', 'Akademik'],
    examples: [
      [
        '提出された書類を全て確認した。',
        'ていしゅつされたしょるいをすべてかくにんした。',
        'Saya telah memeriksa seluruh dokumen yang diserahkan.'
      ],
      [
        '成功の理由を全て説明することは難しい。',
        'せいこうのりゆうをすべてせつめいすることはむずかしい。',
        'Sulit untuk menjelaskan semua alasan keberhasilan.'
      ]
    ]
  },
  daibu: {
    word: '大分',
    reading: 'だいぶ',
    meaning: 'cukup banyak; lumayan; jauh lebih',
    explanation:
      'Kata keterangan yang menunjukkan perubahan atau jumlah dalam tingkat yang cukup besar dibandingkan sebelumnya atau perkiraan awal.',
    nuance:
      'Dalam penggunaan ini dibaca だいぶ. 大分 juga merupakan nama prefektur Jepang yang dibaca おおいた; konteks menentukan bacaannya.',
    contexts: ['Percakapan', 'Deskripsi', 'Kehidupan sehari-hari'],
    examples: [
      [
        '薬を飲んで、体調が大分よくなった。',
        'くすりをのんで、たいちょうがだいぶよくなった。',
        'Setelah minum obat, kondisi tubuh saya jauh lebih baik.'
      ],
      [
        '駅までの道は大分分かりやすくなった。',
        'えきまでのみちはだいぶわかりやすくなった。',
        'Jalan menuju stasiun sekarang jauh lebih mudah dipahami.'
      ]
    ]
  },
  ichidoni: {
    word: '一度に',
    reading: 'いちどに',
    meaning: 'sekaligus; pada satu waktu',
    explanation:
      'Melakukan atau mengalami beberapa hal dalam satu kesempatan atau waktu yang sama.',
    nuance:
      'Menekankan bahwa banyak hal terjadi bersamaan, bukan secara bertahap. Dapat digunakan untuk jumlah barang, pekerjaan, atau perubahan.',
    contexts: ['Kehidupan sehari-hari', 'Pekerjaan', 'Pendidikan'],
    examples: [
      [
        '一度にたくさんのことを覚えるのは難しい。',
        'いちどにたくさんのことをおぼえるのはむずかしい。',
        'Sulit menghafal banyak hal sekaligus.'
      ],
      [
        '注文が一度に集中したため、発送が遅れた。',
        'ちゅうもんがいちどにしゅうちゅうしたため、はっそうがおくれた。',
        'Karena pesanan datang sekaligus, pengiriman menjadi terlambat.'
      ]
    ]
  },
  tsugitsugi: {
    word: '次々と',
    reading: 'つぎつぎと',
    meaning: 'satu demi satu; berturut-turut; terus bermunculan',
    explanation:
      'Menunjukkan bahwa kejadian, benda, atau orang muncul atau terjadi secara berurutan dalam waktu yang relatif singkat.',
    nuance:
      'Sering digunakan untuk berita, perubahan, pertanyaan, atau orang yang datang. Menekankan kelanjutan tanpa jeda panjang.',
    contexts: ['Berita', 'Kehidupan sehari-hari', 'Narasi'],
    examples: [
      [
        '新しい商品が次々と発売されている。',
        'あたらしいしょうひんがつぎつぎとはつばいされている。',
        'Produk baru diluncurkan satu demi satu.'
      ],
      [
        '会場には参加者が次々と集まってきた。',
        'かいじょうにはさんかしゃがつぎつぎとあつまってきた。',
        'Para peserta terus berdatangan ke tempat acara satu demi satu.'
      ]
    ]
  },
  akiru: {
    word: '飽きる',
    reading: 'あきる',
    meaning: 'bosan; jenuh; kehilangan minat',
    explanation:
      'Kehilangan ketertarikan terhadap sesuatu karena terlalu sering atau terlalu lama mengalaminya.',
    nuance:
      'Sering muncul sebagai 〜に飽きる dan 飽きずに. 飽きっぽい menggambarkan orang yang mudah bosan.',
    contexts: ['Kehidupan sehari-hari', 'Pendidikan', 'Hiburan'],
    examples: [
      [
        '同じ料理ばかり食べていると、飽きてしまう。',
        'おなじりょうりばかりたべていると、あきてしまう。',
        'Kalau terus makan hidangan yang sama, lama-lama akan bosan.'
      ],
      [
        '彼女は何時間練習しても飽きることがない。',
        'かのじょはなんじかんれんしゅうしてもあきることがない。',
        'Ia tidak pernah bosan meskipun berlatih selama berjam-jam.'
      ]
    ]
  },
  akogareru: {
    word: '憧れる',
    reading: 'あこがれる',
    meaning: 'mengagumi; mendambakan; ingin menjadi seperti',
    explanation:
      'Memiliki perasaan kagum dan keinginan kuat terhadap seseorang, pekerjaan, gaya hidup, atau keadaan yang dianggap menarik.',
    nuance:
      'Sering digunakan dengan に憧れる. Memuat unsur kekaguman dan keinginan untuk mendekati atau meraih sesuatu, bukan sekadar menyukai.',
    contexts: ['Kehidupan sosial', 'Pendidikan', 'Karier'],
    examples: [
      [
        '子どもの頃から、海外で働くことに憧れていた。',
        'こどものころから、かいがいではたらくことにあこがれていた。',
        'Sejak kecil, saya mendambakan kesempatan bekerja di luar negeri.'
      ],
      [
        '彼女は憧れの作家に会えて、とても喜んでいた。',
        'かのじょはあこがれのさっかにあえて、とてもよろこんでいた。',
        'Ia sangat senang karena dapat bertemu dengan penulis yang selama ini dikaguminya.'
      ]
    ]
  },
  fumanwomotsu: {
    word: '不満を持つ',
    reading: 'ふまんをもつ',
    meaning: 'merasa tidak puas; memiliki keberatan',
    explanation:
      'Memiliki perasaan bahwa suatu keadaan, perlakuan, atau hasil tidak sesuai dengan harapan atau kebutuhan.',
    nuance:
      'Sering digunakan dalam konteks karyawan, warga, pelanggan, dan hubungan sosial. 不満を抱く juga umum dan sedikit lebih formal.',
    contexts: ['Sosial', 'Pekerjaan', 'Berita'],
    examples: [
      [
        '学生たちは授業の進め方に不満を持っている。',
        'がくせいたちはじゅぎょうのすすめかたにふまんをもっている。',
        'Para mahasiswa merasa tidak puas dengan cara perkuliahan dijalankan.'
      ],
      [
        '住民が不満を持つ理由を丁寧に聞く必要がある。',
        'じゅうみんがふまんをもつりゆうをていねいにきくひつようがある。',
        'Kita perlu mendengarkan dengan saksama alasan warga merasa tidak puas.'
      ]
    ]
  },
  nechuu: {
    word: '熱中する',
    reading: 'ねっちゅうする',
    meaning: 'asyik menekuni; sangat tertarik; tenggelam dalam kegiatan',
    explanation:
      'Memusatkan perhatian dan energi pada suatu kegiatan atau minat hingga sangat bersemangat melakukannya.',
    nuance:
      'Sering digunakan dengan に熱中する. Dapat bernada positif, tetapi dalam konteks tertentu mengisyaratkan seseorang terlalu larut sehingga melupakan hal lain.',
    contexts: ['Pendidikan', 'Hobi', 'Pekerjaan'],
    examples: [
      [
        '彼は学生時代、音楽に熱中していた。',
        'かれはがくせいじだい、おんがくにねっちゅうしていた。',
        'Saat masih menjadi mahasiswa, ia sangat menekuni musik.'
      ],
      [
        '子どもたちは時間を忘れてゲームに熱中していた。',
        'こどもたちはじかんをわすれてげーむにねっちゅうしていた。',
        'Anak-anak begitu asyik bermain gim hingga lupa waktu.'
      ]
    ]
  },
  kantoku: {
    word: '監督',
    reading: 'かんとく',
    meaning: 'sutradara; pelatih; pengawas',
    explanation:
      'Orang yang memimpin dan mengawasi jalannya produksi film, tim olahraga, pekerjaan, atau kegiatan tertentu.',
    nuance:
      'Maknanya bergantung bidang: 映画監督 (sutradara film), 監督 (pelatih tim), 工事を監督する (mengawasi konstruksi).',
    contexts: ['Film', 'Olahraga', 'Pekerjaan'],
    examples: [
      [
        'この映画の監督は若い頃から映像制作に携わっている。',
        'このえいがのかんとくはわかいころからえいぞうせいさくにたずさわっている。',
        'Sutradara film ini telah terlibat dalam produksi video sejak muda.'
      ],
      [
        '監督は選手たちに最後まで集中するよう伝えた。',
        'かんとくはせんしゅたちにさいごまでしゅうちゅうするようつたえた。',
        'Pelatih meminta para atlet tetap berkonsentrasi sampai akhir.'
      ]
    ]
  },
  hasei: {
    word: '派生',
    reading: 'はせい',
    meaning: 'turunan; derivasi; perkembangan dari sesuatu',
    explanation:
      'Munculnya kata, konsep, bentuk, atau masalah baru yang berasal dari sesuatu yang sudah ada.',
    nuance:
      'Digunakan dalam linguistik, ilmu pengetahuan, dan analisis sosial. 派生語 berarti kata turunan; 派生する berarti berasal atau berkembang dari sumber tertentu.',
    contexts: ['Linguistik', 'Akademik', 'Ilmu pengetahuan'],
    examples: [
      [
        'この言葉は古い表現から派生したものだ。',
        'このことばはふるいひょうげんからはせいしたものだ。',
        'Kata ini merupakan bentuk turunan dari ungkapan lama.'
      ],
      [
        '一つの問題から、別の課題が次々と派生した。',
        'ひとつのもんだいから、べつのかだいがつぎつぎとはせいした。',
        'Dari satu masalah, berbagai persoalan lain muncul secara beruntun.'
      ]
    ]
  },
  sukete: {
    word: '透けて',
    reading: 'すけて',
    meaning: 'tembus pandang; terlihat samar melalui lapisan',
    explanation:
      'Bentuk て dari 透ける, yaitu keadaan ketika sesuatu dapat terlihat melalui bahan atau lapisan yang tipis atau transparan.',
    nuance:
      'Sering dipakai untuk kain, kaca, cahaya, atau bayangan. 透けて見える berarti terlihat samar melalui sesuatu; maknanya netral dan deskriptif.',
    contexts: ['Deskripsi', 'Kehidupan sehari-hari', 'Seni'],
    examples: [
      [
        '薄いカーテン越しに外の景色が透けて見える。',
        'うすいかーてんごしにそとのけしきがすけてみえる。',
        'Pemandangan luar terlihat samar melalui tirai tipis.'
      ],
      [
        '封筒の紙が薄く、中の文字が透けていた。',
        'ふうとうのかみがうすく、なかのもじがすけていた。',
        'Kertas amplopnya tipis sehingga tulisan di dalamnya tampak samar.'
      ]
    ]
  },
  onkei: {
    word: '恩恵',
    reading: 'おんけい',
    meaning: 'manfaat; anugerah; keuntungan yang diterima',
    explanation:
      'Manfaat atau keuntungan yang diterima dari alam, kebijakan, teknologi, atau bantuan pihak lain.',
    nuance:
      'Sering digunakan dalam 恩恵を受ける dan 自然の恩恵. Cenderung formal dan menekankan manfaat yang diterima, bukan keuntungan yang diperoleh lewat usaha pribadi.',
    contexts: ['Berita', 'Akademik', 'Kehidupan sosial'],
    examples: [
      [
        '多くの地域が観光産業の恩恵を受けている。',
        'おおくのちいきがかんこうさんぎょうのおんけいをうけている。',
        'Banyak daerah menerima manfaat dari industri pariwisata.'
      ],
      [
        '私たちは自然の恩恵を忘れてはならない。',
        'わたしたちはしぜんのおんけいをわすれてはならない。',
        'Kita tidak boleh melupakan manfaat yang diberikan oleh alam.'
      ]
    ]
  },
  nozomu: {
    word: '臨む',
    reading: 'のぞむ',
    meaning: 'menghadapi; hadir dalam; mengikuti dengan sikap tertentu',
    explanation:
      'Menghadapi suatu acara, situasi, atau tantangan dengan sikap dan persiapan tertentu; juga berarti hadir atau mengambil bagian.',
    nuance:
      'Jangan tertukar dengan 望む (menginginkan), yang bacaannya sama. 臨む dipakai dalam 試験に臨む, 会議に臨む, dan 困難に臨む.',
    contexts: ['Formal', 'Pendidikan', 'Pekerjaan'],
    examples: [
      [
        '十分に準備をして、面接に臨んだ。',
        'じゅうぶんにじゅんびをして、めんせつにのぞんだ。',
        'Saya menghadapi wawancara setelah melakukan persiapan yang cukup.'
      ],
      [
        '新しい代表は強い決意で交渉に臨んでいる。',
        'あたらしいだいひょうはつよいけついでこうしょうにのぞんでいる。',
        'Perwakilan baru menghadapi perundingan dengan tekad yang kuat.'
      ]
    ]
  },
  nyojitsuni: {
    word: '如実に',
    reading: 'にょじつに',
    meaning: 'secara nyata; dengan jelas tercermin',
    explanation:
      'Menunjukkan bahwa keadaan atau kenyataan terlihat dengan jelas dan sesuai dengan kondisi sebenarnya.',
    nuance:
      'Ungkapan formal yang sering dipakai dalam 如実に表れる atau 如実に示す. Biasanya digunakan untuk data, hasil, perubahan, dan keadaan sosial.',
    contexts: ['Akademik', 'Berita', 'Analisis'],
    examples: [
      [
        'その結果は、努力の差を如実に示している。',
        'そのけっかは、どりょくのさをにょじつにしめしている。',
        'Hasil itu secara jelas menunjukkan perbedaan usaha.'
      ],
      [
        '人口の減少は、地域の現状を如実に表している。',
        'じんこうのげんしょうは、ちいきのげんじょうをにょじつにあらわしている。',
        'Penurunan jumlah penduduk secara nyata mencerminkan kondisi daerah tersebut.'
      ]
    ]
  },
  hogo: {
    word: '保護',
    reading: 'ほご',
    meaning: 'perlindungan; menjaga agar tidak rusak atau dirugikan',
    explanation:
      'Tindakan melindungi orang, hewan, lingkungan, data, atau hak dari bahaya dan kerusakan.',
    nuance:
      'Sangat umum dalam istilah resmi: 個人情報保護, 環境保護, 保護者. Menekankan tindakan menjaga pihak atau hal yang rentan.',
    contexts: ['Hukum', 'Lingkungan', 'Sosial'],
    examples: [
      [
        '野生動物を保護するため、地域の人々が協力している。',
        'やせいどうぶつをほごするため、ちいきのひとびとがきょうりょくしている。',
        'Warga setempat bekerja sama untuk melindungi satwa liar.'
      ],
      [
        '個人情報の保護は、すべての企業に求められる。',
        'こじんじょうほうのほごは、すべてのきぎょうにもとめられる。',
        'Perlindungan informasi pribadi dituntut dari semua perusahaan.'
      ]
    ]
  },
  bougyo: {
    word: '防御',
    reading: 'ぼうぎょ',
    meaning: 'pertahanan; tindakan melindungi diri dari serangan',
    explanation:
      'Tindakan menahan, menghindari, atau melindungi diri dari serangan, ancaman, atau dampak yang merugikan.',
    nuance:
      'Digunakan dalam olahraga, keamanan, dan ilmu pengetahuan. 防御する menekankan upaya bertahan terhadap ancaman; 防衛 sering lebih luas dalam konteks negara atau organisasi.',
    contexts: ['Olahraga', 'Keamanan', 'Ilmu pengetahuan'],
    examples: [
      [
        'チームは相手の攻撃に備えて守備と防御を固めた。',
        'ちーむはあいてのこうげきにそなえてしゅびとぼうぎょをかためた。',
        'Tim memperkuat pertahanan untuk menghadapi serangan lawan.'
      ],
      [
        'このソフトウェアには不正アクセスを防御する機能がある。',
        'このそふとうぇあにはふせいあくせすをぼうぎょするきのうがある。',
        'Perangkat lunak ini memiliki fungsi untuk melindungi dari akses tidak sah.'
      ]
    ]
  },
  keibi: {
    word: '警備',
    reading: 'けいび',
    meaning: 'pengamanan; penjagaan keamanan',
    explanation:
      'Kegiatan menjaga tempat, orang, atau acara agar tetap aman dan mencegah gangguan atau tindakan yang tidak diinginkan.',
    nuance:
      'Sering digunakan untuk penjagaan gedung, acara, fasilitas publik, dan orang penting. 警備員 adalah petugas keamanan.',
    contexts: ['Keamanan', 'Acara', 'Administrasi'],
    examples: [
      [
        '大きなイベントの会場では警備が強化された。',
        'おおきないべんとのかいじょうではけいびがきょうかされた。',
        'Pengamanan diperketat di lokasi acara besar.'
      ],
      [
        '駅の警備員が利用者を案内していた。',
        'えきのけいびいんがりようしゃをあんないしていた。',
        'Petugas keamanan stasiun sedang mengarahkan para pengguna.'
      ]
    ]
  },
  shien: {
    word: '支援',
    reading: 'しえん',
    meaning: 'dukungan; bantuan untuk mencapai tujuan',
    explanation:
      'Memberikan bantuan berupa tenaga, dana, informasi, atau fasilitas agar seseorang atau kelompok dapat melakukan sesuatu.',
    nuance:
      'Lebih formal daripada 手伝い dan sering digunakan dalam bidang pendidikan, sosial, ekonomi, dan kebijakan publik.',
    contexts: ['Sosial', 'Pendidikan', 'Administrasi'],
    examples: [
      [
        '大学は留学生の生活を支援する制度を設けている。',
        'だいがくはりゅうがくせいのせいかつをしえんするせいどをもうけている。',
        'Universitas menyediakan sistem untuk mendukung kehidupan mahasiswa internasional.'
      ],
      [
        '地域の復興を支援するため、募金活動が行われた。',
        'ちいきのふっこうをしえんするため、ぼきんかつどうがおこなわれた。',
        'Penggalangan dana dilakukan untuk mendukung pemulihan daerah.'
      ]
    ]
  },
  chuujitsuni: {
    word: '忠実に',
    reading: 'ちゅうじつに',
    meaning: 'dengan setia; sesuai aslinya; secara akurat',
    explanation:
      'Melakukan sesuatu dengan setia terhadap sumber, janji, perintah, atau prinsip, tanpa menyimpang dari isinya.',
    nuance:
      '忠実に再現する berarti mereproduksi secara akurat; 忠実に従う berarti mengikuti dengan setia. Dapat digunakan untuk orang maupun karya atau data.',
    contexts: ['Formal', 'Seni', 'Pekerjaan'],
    examples: [
      [
        '映画は原作の内容を忠実に再現している。',
        'えいがはげんさくのないようをちゅうじつにさいげんしている。',
        'Film itu mereproduksi isi karya aslinya dengan setia.'
      ],
      [
        '彼は与えられた指示に忠実に従った。',
        'かれはあたえられたしじにちゅうじつにしたがった。',
        'Ia mengikuti instruksi yang diberikan dengan patuh dan setia.'
      ]
    ]
  },
  juujunni: {
    word: '従順に',
    reading: 'じゅうじゅんに',
    meaning: 'dengan patuh; menurut; taat',
    explanation:
      'Melakukan sesuatu dengan mengikuti perintah, arahan, atau kehendak pihak lain tanpa banyak menentang.',
    nuance:
      '従順な menggambarkan sifat yang patuh. Dapat bernada netral atau negatif karena menyiratkan kurangnya kemandirian atau sikap terlalu menurut.',
    contexts: ['Deskripsi orang', 'Pendidikan', 'Kehidupan sosial'],
    examples: [
      [
        'その犬は飼い主の指示に従順に従う。',
        'そのいぬはかいぬしのしじにじゅうじゅんにしたがう。',
        'Anjing itu dengan patuh mengikuti perintah pemiliknya.'
      ],
      [
        '彼は上司に従順に従うだけでなく、自分の考えも伝える。',
        'かれはじょうしにじゅうじゅんにしたがうだけでなく、じぶんのかんがえもつたえる。',
        'Ia tidak hanya mengikuti atasan dengan patuh, tetapi juga menyampaikan pemikirannya sendiri.'
      ]
    ]
  },
  genseini: {
    word: '厳正に',
    reading: 'げんせいに',
    meaning: 'dengan ketat dan adil; secara tegas sesuai aturan',
    explanation:
      'Melakukan pemeriksaan, penilaian, atau pengelolaan dengan ketat, objektif, dan tidak memihak.',
    nuance:
      'Sering digunakan dalam 厳正に審査する atau 厳正に対処する. Menekankan kepatuhan pada aturan sekaligus keadilan, bukan kekerasan.',
    contexts: ['Administrasi', 'Hukum', 'Pendidikan'],
    examples: [
      [
        '応募作品は厳正に審査される。',
        'おうぼさくひんはげんせいにしんさされる。',
        'Karya yang diajukan akan dinilai secara ketat dan adil.'
      ],
      [
        '不正行為には厳正に対処しなければならない。',
        'ふせいこういにはげんせいにたいしょしなければならない。',
        'Tindakan kecurangan harus ditangani secara tegas dan adil.'
      ]
    ]
  },
  kintouni: {
    word: '均等に',
    reading: 'きんとうに',
    meaning: 'secara merata; sama rata; dengan proporsi setara',
    explanation:
      'Membagi atau mengatur sesuatu agar setiap bagian, orang, atau kelompok memperoleh jumlah atau porsi yang sama.',
    nuance:
      'Sering digunakan dalam 均等に分ける dan 均等に配置する. Menekankan kesamaan jumlah atau distribusi, bukan selalu kesetaraan berdasarkan kebutuhan.',
    contexts: ['Pendidikan', 'Pekerjaan', 'Administrasi'],
    examples: [
      [
        '集めた資料を参加者に均等に配った。',
        'あつめたしりょうをさんかしゃにきんとうにくばった。',
        'Bahan yang terkumpul dibagikan secara merata kepada para peserta.'
      ],
      [
        '負担が一部の人に偏らないよう、仕事を均等に割り振った。',
        'ふたんがいちぶのひとにかたよらないよう、しごとをきんとうにわりふった。',
        'Pekerjaan dibagi rata agar beban tidak bertumpu pada sebagian orang.'
      ]
    ]
  },
  sukutte: {
    word: 'すくって',
    reading: 'すくって',
    meaning: 'menyendok; mengambil dengan gerakan mengangkat dari bawah',
    explanation:
      'Bentuk て dari すくう, biasanya 掬う, yaitu mengambil cairan atau benda kecil menggunakan sendok, tangan, atau alat berbentuk cekung.',
    nuance:
      'Karena ditulis hiragana, maknanya bergantung konteks. 掬って berarti menyendok atau mengambil; 救って (すくって) berarti menyelamatkan. Pada entri ini digunakan arti 掬う.',
    contexts: ['Kehidupan sehari-hari', 'Memasak', 'Deskripsi'],
    examples: [
      [
        'スプーンでスープをすくって口に運んだ。',
        'すぷーんですーぷをすくってくちにはこんだ。',
        'Saya menyendok sup dengan sendok lalu membawanya ke mulut.'
      ],
      [
        '子どもは川の水を手ですくってみた。',
        'こどもはかわのみずをてですくってみた。',
        'Anak itu mencoba mengambil air sungai dengan tangannya.'
      ]
    ]
  },
  mekutte: {
    word: 'めくって',
    reading: 'めくって',
    meaning: 'membalik halaman; mengangkat atau membuka lipatan',
    explanation:
      'Bentuk て dari めくる, yakni mengangkat atau membalik halaman, kain, atau bagian yang menutupi sesuatu.',
    nuance:
      'Biasanya ditulis 捲る, tetapi hiragana juga lazim. ぺらぺらめくる dapat menggambarkan membalik halaman dengan cepat.',
    contexts: ['Pendidikan', 'Kehidupan sehari-hari', 'Membaca'],
    examples: [
      [
        '辞書のページをめくって、意味を調べた。',
        'じしょのぺーじをめくって、いみをしらべた。',
        'Saya membalik halaman kamus untuk mencari artinya.'
      ],
      [
        'カレンダーを一枚めくって、来月の日付を確認した。',
        'かれんだーをいちまいめくって、らいげつのひづけをかくにんした。',
        'Saya membalik satu lembar kalender untuk memeriksa tanggal bulan depan.'
      ]
    ]
  },
  hasande: {
    word: 'はさんで',
    reading: 'はさんで',
    meaning: 'menjepit; menyisipkan; meletakkan di antara dua hal',
    explanation:
      'Bentuk て dari 挟む, yaitu menempatkan sesuatu di antara dua benda atau menjepitnya.',
    nuance:
      'Dapat digunakan secara fisik maupun abstrak: パンに具を挟む (menaruh isian di antara roti), 会議を挟む (menyisipkan rapat di antara kegiatan).',
    contexts: ['Kehidupan sehari-hari', 'Pekerjaan', 'Percakapan'],
    examples: [
      [
        'パンにチーズと野菜をはさんで食べた。',
        'ぱんにちーずとやさいをはさんでたべた。',
        'Saya menaruh keju dan sayuran di antara roti lalu memakannya.'
      ],
      [
        '二つの授業の間に休憩をはさんでいる。',
        'ふたつのじゅぎょうのあいだにきゅうけいをはさんでいる。',
        'Ada waktu istirahat yang disisipkan di antara dua kelas.'
      ]
    ]
  },
  tsumande: {
    word: 'つまんで',
    reading: 'つまんで',
    meaning: 'mencubit; menjepit dengan ujung jari; mengambil sedikit',
    explanation:
      'Bentuk て dari つまむ, yaitu memegang benda kecil dengan ujung jari atau mengambil sedikit makanan.',
    nuance:
      'Dapat berarti mencubit, memungut, atau menyantap sedikit makanan ringan. つまみ食い berarti mengambil dan memakan sedikit makanan tanpa duduk makan.',
    contexts: ['Kehidupan sehari-hari', 'Memasak', 'Percakapan'],
    examples: [
      [
        '小さな紙片を指でつまんで拾った。',
        'ちいさなかみきれをゆびでつまんでひろった。',
        'Saya mengambil potongan kertas kecil dengan menjepitnya menggunakan jari.'
      ],
      [
        'お菓子を少しつまんでから、勉強を再開した。',
        'おかしをすこしつまんでから、べんきょうをさいかいした。',
        'Saya mengambil sedikit camilan sebelum melanjutkan belajar.'
      ]
    ]
  },
  nengan: {
    word: '念願',
    reading: 'ねんがん',
    meaning: 'keinginan lama; harapan yang telah lama didambakan',
    explanation:
      'Keinginan atau tujuan yang telah lama disimpan dan sangat ingin diwujudkan.',
    nuance:
      'Sering dipakai dalam 念願がかなう (keinginan lama terwujud) dan 念願の〜 (sesuatu yang lama diimpikan). Lebih kuat dan panjang waktunya daripada sekadar 希望.',
    contexts: ['Pendidikan', 'Karier', 'Kehidupan sehari-hari'],
    examples: [
      [
        '念願の大学に合格し、家族と喜びを分かち合った。',
        'ねんがんのだいがくにごうかくし、かぞくとよろこびをわかちあった。',
        'Saya diterima di universitas yang telah lama diimpikan dan berbagi kebahagiaan dengan keluarga.'
      ],
      [
        '長年の念願がかなって、自分の店を開くことができた。',
        'ながねんのねんがんがかなって、じぶんのみせをひらくことができた。',
        'Keinginan yang telah lama dipendam akhirnya terwujud dan saya dapat membuka toko sendiri.'
      ]
    ]
  },
  shibou: {
    word: '志望',
    reading: 'しぼう',
    meaning: 'pilihan atau keinginan untuk masuk/menjadi sesuatu',
    explanation:
      'Keinginan untuk masuk ke sekolah, universitas, perusahaan, atau bidang pekerjaan tertentu.',
    nuance:
      'Sering muncul sebagai 志望校, 志望理由, dan 第一志望. Dalam konteks penerimaan, 志望する berarti memilih atau mengajukan keinginan untuk masuk.',
    contexts: ['Pendidikan', 'Karier', 'Administrasi'],
    examples: [
      [
        '志望理由を具体的に書いてください。',
        'しぼうりゆうをぐたいてきにかいてください。',
        'Tuliskan alasan pilihan Anda secara konkret.'
      ],
      [
        '第一志望の企業から内定をもらった。',
        'だいいちしぼうのきぎょうからないていをもらった。',
        'Saya menerima tawaran kerja dari perusahaan pilihan pertama.'
      ]
    ]
  },
  honi: {
    word: '本意',
    reading: 'ほんい',
    meaning: 'niat sebenarnya; maksud yang sesungguhnya',
    explanation:
      'Keinginan atau maksud yang benar-benar dimiliki seseorang, berbeda dari apa yang tampak atau terucap.',
    nuance:
      'Sering digunakan dalam 本意ではない (bukan maksud sebenarnya) dan 本意を伝える. Bernuansa lebih formal daripada 本当の気持ち.',
    contexts: ['Formal', 'Kehidupan sosial', 'Sastra'],
    examples: [
      [
        '誤解を招いたが、相手を傷つけるのは私の本意ではない。',
        'ごかいをまねいたが、あいてをきずつけるのはわたしのほんいではない。',
        'Saya memang menimbulkan kesalahpahaman, tetapi menyakiti lawan bicara bukanlah maksud saya.'
      ],
      [
        '彼の本意を確かめてから、返事をすることにした。',
        'かれのほんいをたしかめてから、へんじをすることにした。',
        'Saya memutuskan untuk memastikan maksud sebenarnya terlebih dahulu sebelum menjawab.'
      ]
    ]
  },
  yokkyuu: {
    word: '欲求',
    reading: 'よっきゅう',
    meaning: 'keinginan; kebutuhan atau dorongan untuk memperoleh sesuatu',
    explanation:
      'Dorongan batin yang membuat seseorang ingin mendapatkan, melakukan, atau mengalami sesuatu.',
    nuance:
      'Sering digunakan dalam psikologi seperti 承認欲求 dan 食欲などの欲求. Lebih abstrak dan konseptual daripada 欲しいという気持ち.',
    contexts: ['Psikologi', 'Akademik', 'Kehidupan sosial'],
    examples: [
      [
        '人には認められたいという欲求がある。',
        'ひとにはみとめられたいというよっきゅうがある。',
        'Manusia memiliki keinginan untuk diakui.'
      ],
      [
        '欲求を理解することは、行動の理由を考える手がかりになる。',
        'よっきゅうをりかいすることは、こうどうのりゆうをかんがえるてがかりになる。',
        'Memahami dorongan keinginan dapat menjadi petunjuk untuk memikirkan alasan suatu tindakan.'
      ]
    ]
  },
  pinto: {
    word: 'ピント',
    reading: 'ぴんと',
    meaning: 'fokus; titik ketajaman gambar',
    explanation:
      'Titik atau kondisi fokus pada kamera atau mata, sehingga objek terlihat jelas.',
    nuance:
      'Sering dipakai dalam ピントを合わせる dan ピントがずれる. Secara kiasan, ピントがずれた意見 berarti pendapat yang tidak tepat sasaran.',
    contexts: ['Fotografi', 'Teknologi', 'Percakapan'],
    examples: [
      [
        '写真を撮る前に、人物にピントを合わせた。',
        'しゃしんをとるまえに、じんぶつにぴんとをあわせた。',
        'Sebelum memotret, saya mengatur fokus pada orang tersebut.'
      ],
      [
        '説明のピントがずれていて、質問に答えていない。',
        'せつめいのぴんとがずれていて、しつもんにこたえていない。',
        'Penjelasannya tidak tepat sasaran dan tidak menjawab pertanyaan.'
      ]
    ]
  },
  poozu: {
    word: 'ポーズ',
    reading: 'ぽーず',
    meaning: 'pose; sikap tubuh yang dibuat',
    explanation:
      'Posisi atau bentuk tubuh yang sengaja dibuat untuk difoto, digambar, atau ditampilkan.',
    nuance:
      'Dapat juga berarti jeda atau penghentian sementara dalam ungkapan 活動にポーズをかける, tetapi penggunaan paling umum adalah pose tubuh.',
    contexts: ['Fotografi', 'Seni', 'Hiburan'],
    examples: [
      [
        '写真を撮るとき、自然なポーズを取ってください。',
        'しゃしんをとるとき、しぜんなぽーずをとってください。',
        'Saat berfoto, silakan ambil pose yang alami.'
      ],
      [
        'モデルはカメラに向かってさまざまなポーズを見せた。',
        'もでるはかめらにむかってさまざまなぽーずをみせた。',
        'Model itu memperlihatkan berbagai pose ke arah kamera.'
      ]
    ]
  },
  kaasoru: {
    word: 'カーソル',
    reading: 'かーそる',
    meaning: 'kursor; penunjuk pada layar komputer',
    explanation:
      'Penanda pada layar yang menunjukkan posisi untuk memilih, mengetik, atau mengoperasikan suatu bagian antarmuka.',
    nuance:
      'Umum dalam penggunaan komputer. カーソルを移動する berarti menggerakkan kursor; jangan tertukar dengan ポインター meski dalam beberapa konteks maknanya berdekatan.',
    contexts: ['Teknologi', 'Komputer', 'Pendidikan'],
    examples: [
      [
        'カーソルを検索欄に移動して、キーワードを入力した。',
        'かーそるをけんさくらんにいどうして、きーわーどをにゅうりょくした。',
        'Saya memindahkan kursor ke kolom pencarian lalu memasukkan kata kunci.'
      ],
      [
        '画面上のカーソルが動かなくなった。',
        'がめんじょうのかーそるがうごかなくなった。',
        'Kursor di layar tidak dapat bergerak.'
      ]
    ]
  },
  tenpo: {
    word: 'テンポ',
    reading: 'てんぽ',
    meaning: 'tempo; kecepatan dan irama suatu kegiatan',
    explanation:
      'Kecepatan atau irama berlangsungnya musik, percakapan, pekerjaan, atau gerakan.',
    nuance:
      'Dalam musik berarti tempo lagu; secara umum dapat berarti cepat-lambatnya kegiatan: テンポよく進む (berjalan dengan irama yang baik).',
    contexts: ['Musik', 'Percakapan', 'Pekerjaan'],
    examples: [
      [
        'この曲はテンポが速く、踊りやすい。',
        'このきょくはてんぽがはやく、おどりやすい。',
        'Lagu ini bertempo cepat dan mudah untuk ditarikan.'
      ],
      [
        '会議はよいテンポで進み、予定より早く終わった。',
        'かいぎはよいてんぽですすみ、よていよりはやくおわった。',
        'Rapat berlangsung dengan tempo yang baik dan selesai lebih cepat dari jadwal.'
      ]
    ]
  },
  kuikonda: {
    word: '食い込んだ',
    reading: 'くいこんだ',
    meaning: 'menancap; masuk ke dalam; melampaui batas (angka/waktu)',
    explanation:
      'Bentuk lampau dari 食い込む, yaitu masuk atau menekan ke dalam sesuatu; secara kiasan dapat berarti mengambil bagian dari batas atau jatah tertentu.',
    nuance:
      'Maknanya bergantung konteks: ひもが皮膚に食い込む (tali menekan kulit), 予定に食い込む (memakan waktu dari jadwal), 上位に食い込む (masuk ke peringkat atas).',
    contexts: ['Kehidupan sehari-hari', 'Olahraga', 'Pekerjaan'],
    examples: [
      [
        '荷物の重さで、肩にベルトが食い込んだ。',
        'にもつのおもさで、かたにべるとがくいこんだ。',
        'Karena berat barang bawaan, tali tas menekan bahu.'
      ],
      [
        '追加の作業が予定に食い込んだ。',
        'ついかのさぎょうがよていにくいこんだ。',
        'Pekerjaan tambahan memakan waktu dari jadwal yang telah ditetapkan.'
      ]
    ]
  },
  norikonda: {
    word: '乗り込んだ',
    reading: 'のりこんだ',
    meaning: 'naik dan masuk ke kendaraan/tempat; memasuki dengan tegas',
    explanation:
      'Bentuk lampau dari 乗り込む, yaitu masuk ke kendaraan atau tempat tertentu; dapat memberi kesan bergerak masuk secara aktif atau beramai-ramai.',
    nuance:
      'Sering digunakan untuk kereta, bus, kapal, atau memasuki kantor/tempat seseorang untuk suatu urusan. Konteks menentukan apakah netral atau bernuansa tegas.',
    contexts: ['Perjalanan', 'Berita', 'Kehidupan sehari-hari'],
    examples: [
      [
        '乗客は発車時刻の前に列車に乗り込んだ。',
        'じょうきゃくははっしゃじこくのまえにれっしゃにのりこんだ。',
        'Para penumpang naik ke kereta sebelum waktu keberangkatan.'
      ],
      [
        '調査チームは現地に乗り込み、状況を確認した。',
        'ちょうさちーむはげんちにのりこみ、じょうきょうをかくにんした。',
        'Tim penyelidik memasuki lokasi dan memeriksa situasinya.'
      ]
    ]
  },
  kakekonda: {
    word: '駆け込んだ',
    reading: 'かけこんだ',
    meaning: 'berlari masuk; bergegas masuk ke suatu tempat',
    explanation:
      'Bentuk lampau dari 駆け込む, yaitu berlari atau bergegas masuk ke suatu tempat, sering karena terburu-buru atau membutuhkan bantuan.',
    nuance:
      'Dapat digunakan untuk berlari masuk ke stasiun, toko, kantor, atau tempat perlindungan. 駆け込み乗車 berarti bergegas naik kendaraan tepat sebelum pintu ditutup.',
    contexts: ['Perjalanan', 'Kehidupan sehari-hari', 'Berita'],
    examples: [
      [
        '雨が降り始めたので、近くの店に駆け込んだ。',
        'あめがふりはじめたので、ちかくのみせにかけこんだ。',
        'Karena hujan mulai turun, saya bergegas masuk ke toko terdekat.'
      ],
      [
        '相談者は困った様子で市役所に駆け込んだ。',
        'そうだんしゃはこまったようすでしやくしょにかけこんだ。',
        'Orang yang membutuhkan konsultasi bergegas mendatangi kantor pemerintah kota dengan wajah kebingungan.'
      ]
    ]
  },
  oikonda: {
    word: '追い込んだ',
    reading: 'おいこんだ',
    meaning: 'mendesak hingga terpojok; membawa ke keadaan sulit',
    explanation:
      'Bentuk lampau dari 追い込む, yaitu mendesak seseorang atau sesuatu ke posisi atau keadaan tertentu; juga dapat berarti memusatkan diri ke tahap akhir.',
    nuance:
      'Dapat bermakna negatif seperti 相手を追い込む (membuat lawan terpojok), atau netral dalam olahraga/pekerjaan seperti 追い込みの時期 (masa penyelesaian akhir).',
    contexts: ['Berita', 'Olahraga', 'Pekerjaan'],
    examples: [
      [
        '強い批判が彼を精神的に追い込んだ。',
        'つよいひはんがかれをせいしんてきにおいこんだ。',
        'Kritik keras membuatnya tertekan secara mental.'
      ],
      [
        '選手は最後の一週間で練習を追い込み、調子を整えた。',
        'せんしゅはさいごのいっしゅうかんでれんしゅうをおいこみ、ちょうしをととのえた。',
        'Atlet itu meningkatkan intensitas latihan pada minggu terakhir untuk mempersiapkan kondisinya.'
      ]
    ]
  },
  tekkiri: {
    word: 'てっきり',
    reading: 'てっきり',
    meaning: 'sudah yakin bahwa; mengira dengan pasti (ternyata keliru)',
    explanation:
      'Kata keterangan yang menunjukkan seseorang benar-benar mengira sesuatu sebagai fakta, tetapi kenyataannya sering berbeda.',
    nuance:
      'Biasanya digunakan ketika dugaan ternyata salah: てっきり〜と思っていた. Bernuansa kesalahpahaman atau keyakinan yang keliru.',
    contexts: ['Percakapan', 'Kehidupan sehari-hari'],
    examples: [
      [
        'てっきり今日は休みだと思っていた。',
        'てっきりきょうはやすみだとおもっていた。',
        'Saya benar-benar mengira hari ini libur.'
      ],
      [
        '彼はてっきり参加するものだと思っていたが、来なかった。',
        'かれはてっきりさんかするものだとおもっていたが、こなかった。',
        'Saya yakin ia akan ikut, tetapi ternyata ia tidak datang.'
      ]
    ]
  },
  sappari: {
    word: 'さっぱり',
    reading: 'さっぱり',
    meaning: 'segar dan bersih; sama sekali tidak (dengan bentuk negatif)',
    explanation:
      'Kata keterangan yang dapat menggambarkan perasaan segar setelah membersihkan diri, rasa yang ringan, atau ketidakpahaman/ketiadaan hasil.',
    nuance:
      'Maknanya sangat bergantung konteks: さっぱりした味 (rasa ringan), 気分がさっぱりする (merasa segar), さっぱり分からない (sama sekali tidak mengerti).',
    contexts: ['Percakapan', 'Makanan', 'Kehidupan sehari-hari'],
    examples: [
      [
        'シャワーを浴びて、気分がさっぱりした。',
        'しゃわーをあびて、きぶんがさっぱりした。',
        'Setelah mandi, perasaan saya menjadi segar.'
      ],
      [
        '説明を聞いても、内容がさっぱり分からなかった。',
        'せつめいをきいても、ないようがさっぱりわからなかった。',
        'Meskipun sudah mendengarkan penjelasan, saya sama sekali tidak memahami isinya.'
      ]
    ]
  },
  shikkari: {
    word: 'しっかり',
    reading: 'しっかり',
    meaning: 'dengan mantap; kokoh; teliti; dapat diandalkan',
    explanation:
      'Menggambarkan tindakan atau keadaan yang kuat, stabil, teliti, dan tidak mudah goyah.',
    nuance:
      'Maknanya luas: しっかり持つ (memegang erat), しっかり確認する (memeriksa dengan teliti), しっかりした人 (orang yang dapat diandalkan).',
    contexts: ['Kehidupan sehari-hari', 'Pekerjaan', 'Pendidikan'],
    examples: [
      [
        '大事な書類なので、しっかり保管してください。',
        'だいじなしょるいなので、しっかりほかんしてください。',
        'Karena ini dokumen penting, simpanlah dengan baik.'
      ],
      [
        '彼女は自分の考えをしっかり持っている。',
        'かのじょはじぶんのかんがえをしっかりもっている。',
        'Ia memiliki pendirian yang kuat.'
      ]
    ]
  },
  hakkiri: {
    word: 'はっきり',
    reading: 'はっきり',
    meaning: 'dengan jelas; tegas; nyata',
    explanation:
      'Menunjukkan bahwa suara, bentuk, pendapat, atau perbedaan dapat dikenali tanpa keraguan.',
    nuance:
      'Sering dipakai dalam はっきり見える, はっきり言う, dan はっきり分かる. Dapat menekankan kejelasan fisik maupun ketegasan sikap.',
    contexts: ['Percakapan', 'Pendidikan', 'Pekerjaan'],
    examples: [
      [
        '自分の意見をはっきり伝えることが大切だ。',
        'じぶんのいけんをはっきりつたえることがたいせつだ。',
        'Penting untuk menyampaikan pendapat sendiri dengan jelas.'
      ],
      [
        '遠くにある山の形がはっきり見えた。',
        'とおくにあるやまのかたちがはっきりみえた。',
        'Bentuk gunung yang jauh terlihat dengan jelas.'
      ]
    ]
  },
  choutatsushita: {
    word: '調達した',
    reading: 'ちょうたつした',
    meaning: 'telah memperoleh; mengadakan; menyediakan sumber daya',
    explanation:
      'Bentuk lampau dari 調達する, yaitu memperoleh atau menyediakan barang, dana, bahan, atau sumber daya yang diperlukan.',
    nuance:
      'Sering digunakan dalam 資金を調達する dan 部品を調達する. Menekankan proses mendapatkan kebutuhan dari sumber tertentu, biasanya untuk kegiatan atau organisasi.',
    contexts: ['Bisnis', 'Keuangan', 'Administrasi'],
    examples: [
      [
        '会社は新しい事業のために資金を調達した。',
        'かいしゃはあたらしいじぎょうのためにしきんをちょうたつした。',
        'Perusahaan memperoleh dana untuk usaha baru.'
      ],
      [
        '必要な部品を海外の取引先から調達した。',
        'ひつようなぶひんをかいがいのとりひきさきからちょうたつした。',
        'Komponen yang diperlukan diperoleh dari mitra bisnis luar negeri.'
      ]
    ]
  },
  youishita: {
    word: '用意した',
    reading: 'よういした',
    meaning: 'telah menyiapkan; telah menyediakan',
    explanation:
      'Bentuk lampau dari 用意する, yaitu menyiapkan barang, tempat, dokumen, atau kondisi yang diperlukan sebelumnya.',
    nuance:
      'Lebih umum daripada 準備した, dan sering digunakan untuk benda atau hal konkret yang sudah disediakan: 資料を用意する, 席を用意する.',
    contexts: ['Kehidupan sehari-hari', 'Pekerjaan', 'Pendidikan'],
    examples: [
      [
        '会議に必要な資料を全員分用意した。',
        'かいぎにひつようなしりょうをぜんいんぶんよういした。',
        'Saya menyiapkan bahan rapat untuk semua orang.'
      ],
      [
        '来客のために、別の部屋を用意した。',
        'らいきゃくのために、べつのへやをよういした。',
        'Saya menyiapkan ruangan lain untuk para tamu.'
      ]
    ]
  },
  haratta: {
    word: '払った',
    reading: 'はらった',
    meaning: 'telah membayar; telah menyingkirkan atau mengibaskan',
    explanation:
      'Bentuk lampau dari 払う, yang berarti membayar uang atau menyingkirkan sesuatu dari permukaan maupun jalur.',
    nuance:
      'Makna utama ditentukan oleh objek: 料金を払う (membayar biaya), ほこりを払う (membersihkan debu), 注意を払う (memberikan perhatian).',
    contexts: ['Keuangan', 'Kehidupan sehari-hari', 'Pekerjaan'],
    examples: [
      [
        '私は昨日、授業料を銀行で払った。',
        'わたしはきのう、じゅぎょうりょうをぎんこうではらった。',
        'Kemarin saya membayar biaya kuliah di bank.'
      ],
      [
        '彼は服についたほこりを手で払った。',
        'かれはふくについたほこりをてではらった。',
        'Ia menepiskan debu yang menempel pada pakaiannya dengan tangan.'
      ]
    ]
  },
  azukatta: {
    word: '預かった',
    reading: 'あずかった',
    meaning: 'telah menerima titipan; telah menyimpan sesuatu untuk orang lain',
    explanation:
      'Bentuk lampau dari 預かる, yaitu menerima dan menjaga barang, uang, atau tanggung jawab milik orang lain untuk sementara.',
    nuance:
      'Berbeda dari 預けた (menitipkan dari sudut pandang orang yang menyerahkan). 預かった digunakan dari sudut pandang pihak yang menerima titipan.',
    contexts: ['Kehidupan sehari-hari', 'Layanan', 'Administrasi'],
    examples: [
      [
        '友人から荷物を預かった。',
        'ゆうじんからにもつをあずかった。',
        'Saya menerima titipan barang dari teman.'
      ],
      [
        '受付でお客様のかばんを預かった。',
        'うけつけでおきゃくさまのかばんをあずかった。',
        'Saya menerima dan menyimpan tas pelanggan di bagian resepsionis.'
      ]
    ]
  },
  henkyakushita: {
    word: '返却した',
    reading: 'へんきゃくした',
    meaning: 'telah mengembalikan barang pinjaman',
    explanation:
      'Bentuk lampau dari 返却する, yaitu telah mengembalikan barang kepada pemilik atau tempat asalnya.',
    nuance:
      'Berbeda dari kata dasar 返却 yang berupa kata benda atau bentuk dasar verbal. Bentuk ini menandai tindakan yang sudah selesai dilakukan.',
    contexts: ['Administrasi', 'Pendidikan', 'Kehidupan sehari-hari'],
    examples: [
      [
        '借りていた本を図書館に返却した。',
        'かりていたほんをとしょかんにへんきゃくした。',
        'Saya mengembalikan buku yang dipinjam ke perpustakaan.'
      ],
      [
        '使用後の機材を担当者に返却した。',
        'しようごのきざいをたんとうしゃにへんきゃくした。',
        'Saya mengembalikan peralatan kepada penanggung jawab setelah digunakan.'
      ]
    ]
  },
  onwana: {
    word: '温和な',
    reading: 'おんわな',
    meaning: 'lembut; ramah; berwatak tenang dan tidak keras',
    explanation:
      'Menggambarkan kepribadian, sikap, atau suasana yang tenang, lembut, dan tidak mudah menunjukkan kemarahan.',
    nuance:
      'Sering digunakan untuk watak orang: 温和な性格. Lebih menekankan kelembutan dan tidak agresif dibanding 穏やか yang juga dapat menggambarkan cuaca atau suasana.',
    contexts: ['Deskripsi orang', 'Kehidupan sosial', 'Sastra'],
    examples: [
      [
        '新しい先生は温和な性格で、学生から慕われている。',
        'あたらしいせんせいはおんわなせいかくで、がくせいからしたわれている。',
        'Guru baru itu berwatak lembut dan disukai para mahasiswa.'
      ],
      [
        '彼は温和な口調で問題点を説明した。',
        'かれはおんわなくちょうでもんだいてんをせつめいした。',
        'Ia menjelaskan masalah dengan nada bicara yang lembut.'
      ]
    ]
  },
  odayakana: {
    word: 'おだやかな',
    reading: 'おだやかな',
    meaning: 'tenang; damai; tidak bergejolak',
    explanation:
      'Menggambarkan keadaan yang tidak gaduh atau keras, seperti cuaca, laut, suasana, dan kepribadian.',
    nuance:
      'Kanji umumnya 穏やかな. Dapat digunakan untuk hal fisik maupun suasana hati: 穏やかな海, 穏やかな暮らし, 穏やかな人.',
    contexts: ['Deskripsi', 'Cuaca', 'Kehidupan sosial'],
    examples: [
      [
        '今日は風も弱く、海はおだやかだ。',
        'きょうはかぜもよわく、うみはおだやかだ。',
        'Hari ini anginnya lemah dan laut tenang.'
      ],
      [
        '彼女はいつもおだやかな表情で人に接している。',
        'かのじょはいつもおだやかなひょうじょうでひとにせっしている。',
        'Ia selalu berinteraksi dengan orang lain dengan ekspresi yang tenang.'
      ]
    ]
  },
  sawayakana: {
    word: 'さわやかな',
    reading: 'さわやかな',
    meaning: 'segar; menyegarkan; menyenangkan dan bersih',
    explanation:
      'Menggambarkan udara, rasa, suara, atau kesan yang terasa segar, jernih, dan menyenangkan.',
    nuance:
      'Kanji umumnya 爽やかな. Dapat menggambarkan cuaca, angin, rasa, atau sikap seseorang yang terasa menyegarkan.',
    contexts: ['Deskripsi', 'Cuaca', 'Kehidupan sehari-hari'],
    examples: [
      [
        '朝のさわやかな風が頬を通り過ぎた。',
        'あさのさわやかなかぜがほおをとおりすぎた。',
        'Angin pagi yang segar berembus melewati pipi.'
      ],
      [
        '彼はさわやかな笑顔で挨拶した。',
        'かれはさわやかなえがおであいさつした。',
        'Ia menyapa dengan senyum yang menyegarkan.'
      ]
    ]
  },
  komayakana: {
    word: 'こまやかな',
    reading: 'こまやかな',
    meaning: 'halus; teliti; penuh perhatian pada detail',
    explanation:
      'Menggambarkan perhatian atau tindakan yang memperhatikan detail kecil dengan cermat dan lembut.',
    nuance:
      'Kanji yang umum adalah 細やかな. Sering digunakan untuk 心配り, 気配り, dan サービス. Menekankan kepekaan terhadap kebutuhan kecil orang lain.',
    contexts: ['Pelayanan', 'Kehidupan sosial', 'Pekerjaan'],
    examples: [
      [
        'スタッフのこまやかな気配りに感心した。',
        'すたっふのこまやかなきくばりにかんしんした。',
        'Saya terkesan dengan perhatian staf yang begitu teliti terhadap hal-hal kecil.'
      ],
      [
        '彼女はこまやかな説明で、全員の疑問を解消した。',
        'かのじょはこまやかなせつめいで、ぜんいんのぎもんをかいしょうした。',
        'Ia menghilangkan keraguan semua orang melalui penjelasan yang terperinci.'
      ]
    ]
  },
  karoyakana: {
    word: 'かろやかな',
    reading: 'かろやかな',
    meaning: 'ringan; lincah; terasa mudah dan tidak berat',
    explanation:
      'Menggambarkan gerakan, suara, langkah, atau suasana yang ringan dan luwes.',
    nuance:
      'Kanji yang umum adalah 軽やかな. Sering digunakan untuk gerakan tari, langkah, musik, dan cara berbicara; menimbulkan kesan tidak kaku.',
    contexts: ['Seni', 'Deskripsi', 'Kehidupan sehari-hari'],
    examples: [
      [
        '彼女はかろやかな足取りで舞台に上がった。',
        'かのじょはかろやかなあしどりでぶたいにあがった。',
        'Ia naik ke panggung dengan langkah yang ringan.'
      ],
      [
        'ピアノのかろやかな音色が部屋に広がった。',
        'ぴあののかろやかなねいろがへやにひろがった。',
        'Nada piano yang ringan menyebar ke seluruh ruangan.'
      ]
    ]
  },
  supotto: {
    word: 'スポット',
    reading: 'すぽっと',
    meaning: 'tempat tertentu; lokasi sorotan; titik perhatian',
    explanation:
      'Kata serapan yang merujuk pada lokasi atau titik tertentu, terutama tempat yang menjadi pusat perhatian atau dipilih secara khusus.',
    nuance:
      'スポットライト berarti lampu sorot; 観光スポット berarti tempat wisata; スポットで働く dapat berarti bekerja sementara atau berdasarkan penugasan tertentu.',
    contexts: ['Pariwisata', 'Media', 'Pekerjaan'],
    examples: [
      [
        'この地域には人気の観光スポットが多い。',
        'このちいきにはにんきのかんこうすぽっとがおおい。',
        'Wilayah ini memiliki banyak tempat wisata populer.'
      ],
      [
        '新しい展示会が今、注目のスポットになっている。',
        'あたらしいてんじかいがいま、ちゅうもくのすぽっとになっている。',
        'Pameran baru itu kini menjadi salah satu pusat perhatian.'
      ]
    ]
  },
  basho: {
    word: '場所',
    reading: 'ばしょ',
    meaning: 'tempat; lokasi; posisi',
    explanation:
      'Titik atau area tempat seseorang atau sesuatu berada atau melakukan kegiatan.',
    nuance:
      'Kata umum dan netral. 場所を取る berarti memakan tempat; 場所を確認する berarti memastikan lokasi.',
    contexts: ['Kehidupan sehari-hari', 'Perjalanan', 'Administrasi'],
    examples: [
      [
        '集合場所は駅の東口に変更された。',
        'しゅうごうばしょはえきのひがしぐちにへんこうされた。',
        'Tempat berkumpul diubah menjadi pintu timur stasiun.'
      ],
      [
        'この場所からは山の景色がよく見える。',
        'このばしょからはやまのけしきがよくみえる。',
        'Dari tempat ini, pemandangan gunung terlihat jelas.'
      ]
    ]
  },
  shouhin: {
    word: '商品',
    reading: 'しょうひん',
    meaning: 'produk; barang dagangan',
    explanation:
      'Barang atau layanan yang ditawarkan untuk dijual kepada konsumen.',
    nuance:
      'Sering dipakai dalam perdagangan dan bisnis: 商品を開発する, 商品の品質, 商品管理. Berbeda dari 製品 yang lebih menekankan barang hasil produksi.',
    contexts: ['Bisnis', 'Ekonomi', 'Kehidupan sehari-hari'],
    examples: [
      [
        '新しい商品をオンラインで販売する予定だ。',
        'あたらしいしょうひんをおんらいんではんばいするよていだ。',
        'Produk baru itu direncanakan akan dijual secara daring.'
      ],
      [
        '商品の品質を保つため、定期的に検査している。',
        'しょうひんのひんしつをたもつため、ていきてきにけんさしている。',
        'Produk diperiksa secara berkala untuk menjaga kualitasnya.'
      ]
    ]
  },
  houhou: {
    word: '方法',
    reading: 'ほうほう',
    meaning: 'cara; metode; pendekatan untuk melakukan sesuatu',
    explanation:
      'Langkah atau prosedur yang digunakan untuk mencapai tujuan atau menyelesaikan suatu hal.',
    nuance:
      'Kata umum dan netral. 方法を考える berarti memikirkan cara; 効果的な方法 berarti metode yang efektif. Lebih konkret daripada 手段 dalam banyak konteks.',
    contexts: ['Pendidikan', 'Pekerjaan', 'Kehidupan sehari-hari'],
    examples: [
      [
        '問題を解決する方法を一緒に考えよう。',
        'もんだいをかいけつするほうほうをいっしょにかんがえよう。',
        'Mari pikirkan bersama cara untuk menyelesaikan masalah.'
      ],
      [
        '申し込み方法は公式サイトに掲載されている。',
        'もうしこみほうほうはこうしきさいとにけいさいされている。',
        'Cara pendaftaran tercantum di situs resmi.'
      ]
    ]
  },
  jiki: {
    word: '時期',
    reading: 'じき',
    meaning: 'waktu; periode; masa yang tepat',
    explanation:
      'Rentang atau titik waktu tertentu ketika suatu kegiatan atau perubahan berlangsung atau sebaiknya dilakukan.',
    nuance:
      'Sering digunakan dalam 適切な時期, 時期尚早 (terlalu dini), dan 時期が来る. Berbeda dari 時間 yang berarti durasi atau jam.',
    contexts: ['Kehidupan sehari-hari', 'Pekerjaan', 'Berita'],
    examples: [
      [
        '留学する時期について、家族と相談している。',
        'りゅうがくするじきについて、かぞくとそうだんしている。',
        'Saya sedang berdiskusi dengan keluarga mengenai waktu untuk studi ke luar negeri.'
      ],
      [
        'この植物は春が植え付けに適した時期だ。',
        'このしょくぶつははるがうえつけにてきしたじきだ。',
        'Musim semi adalah waktu yang tepat untuk menanam tanaman ini.'
      ]
    ]
  },
  kikkoushiteiru: {
    word: '拮抗している',
    reading: 'きっこうしている',
    meaning: 'saling seimbang; bersaing sangat ketat; kekuatannya berimbang',
    explanation:
      'Menggambarkan dua pihak atau kekuatan yang hampir setara sehingga tidak ada yang mudah unggul.',
    nuance:
      'Sering digunakan dalam olahraga, pemilu, persaingan bisnis, dan negosiasi. Lebih kuat daripada sekadar 差が小さい karena menekankan persaingan yang seimbang.',
    contexts: ['Olahraga', 'Berita', 'Bisnis'],
    examples: [
      [
        '両チームの実力は拮抗している。',
        'りょうちーむのじつりょくはきっこうしている。',
        'Kemampuan kedua tim sangat berimbang.'
      ],
      [
        '候補者二人の支持率は拮抗している。',
        'こうほしゃふたりのしじりつはきっこうしている。',
        'Tingkat dukungan terhadap kedua kandidat hampir seimbang.'
      ]
    ]
  },
  saganai: {
    word: '差がない',
    reading: 'さがない',
    meaning: 'tidak ada perbedaan; sama atau hampir setara',
    explanation:
      'Menunjukkan bahwa dua hal memiliki selisih yang tidak ada atau sangat kecil dalam aspek yang dibandingkan.',
    nuance:
      'Dapat merujuk pada harga, kemampuan, angka, atau hasil. Perlu diketahui aspek perbandingannya dari konteks.',
    contexts: ['Percakapan', 'Akademik', 'Bisnis'],
    examples: [
      [
        '二つの製品は価格にほとんど差がない。',
        'ふたつのせいひんはかかくにほとんどさがない。',
        'Hampir tidak ada perbedaan harga antara kedua produk.'
      ],
      [
        '実力に差がないため、試合は最後まで接戦だった。',
        'じつりょくにさがないため、しあいはさいごまでせっせんだった。',
        'Karena kemampuan mereka setara, pertandingan berlangsung ketat sampai akhir.'
      ]
    ]
  },
  sagaaru: {
    word: '差がある',
    reading: 'さがある',
    meaning: 'terdapat perbedaan; memiliki selisih',
    explanation:
      'Menunjukkan bahwa dua hal tidak sama dalam jumlah, kualitas, tingkat, atau keadaan.',
    nuance:
      'Sering digunakan dalam perbandingan data, kemampuan, hasil, dan harga. Perbedaan bisa besar atau kecil; tingkatnya dijelaskan dengan 大きな差 atau わずかな差.',
    contexts: ['Akademik', 'Bisnis', 'Percakapan'],
    examples: [
      [
        '地域によって、生活費に大きな差がある。',
        'ちいきによって、せいかつひにおおきなさがある。',
        'Terdapat perbedaan besar dalam biaya hidup menurut wilayah.'
      ],
      [
        '二人の意見には少し差があるが、目標は同じだ。',
        'ふたりのいけんにはすこしさがあるが、もくひょうはおなじだ。',
        'Pendapat keduanya sedikit berbeda, tetapi tujuannya sama.'
      ]
    ]
  },
  takakunatteiru: {
    word: '高くなっている',
    reading: 'たかくなっている',
    meaning: 'menjadi lebih tinggi/mahal; berada pada tingkat yang meningkat',
    explanation:
      'Bentuk ている yang menunjukkan keadaan hasil dari perubahan menjadi tinggi, baik secara fisik maupun nilai atau harga.',
    nuance:
      'Makna bergantung konteks: 値段が高くなっている (harga meningkat), 建物が高くなっている (bangunan menjadi tinggi), 気温が高くなっている (suhu meningkat).',
    contexts: ['Ekonomi', 'Cuaca', 'Kehidupan sehari-hari'],
    examples: [
      [
        '最近、食料品の値段が高くなっている。',
        'さいきん、しょくりょうひんのねだんがたかくなっている。',
        'Akhir-akhir ini harga bahan makanan semakin tinggi.'
      ],
      [
        '気温が高くなっているので、水分を十分に取ろう。',
        'きおんがたかくなっているので、すいぶんをじゅうぶんにとろう。',
        'Karena suhu semakin tinggi, mari cukup minum air.'
      ]
    ]
  },
  hikukunatteiru: {
    word: '低くなっている',
    reading: 'ひくくなっている',
    meaning: 'menjadi lebih rendah; berada pada tingkat yang menurun',
    explanation:
      'Bentuk ている yang menunjukkan keadaan hasil dari perubahan menjadi rendah, baik secara fisik, angka, suara, maupun tingkat.',
    nuance:
      'Makna bergantung konteks: 声が低くなっている (suara menjadi rendah), 価格が低くなっている (harga turun), 水位が低くなっている (permukaan air rendah).',
    contexts: ['Ekonomi', 'Ilmu pengetahuan', 'Kehidupan sehari-hari'],
    examples: [
      [
        '今年は川の水位が例年より低くなっている。',
        'ことしはかわのすいいがれいねんよりひくくなっている。',
        'Tahun ini permukaan air sungai lebih rendah daripada tahun-tahun biasanya.'
      ],
      [
        '需要が減り、商品の価格が低くなっている。',
        'じゅようがへり、しょうひんのかかくがひくくなっている。',
        'Permintaan menurun sehingga harga produk menjadi lebih rendah.'
      ]
    ]
  },
  kazeatari: {
    word: '風当たり',
    reading: 'かぜあたり',
    meaning: 'terpaan angin; tekanan atau kritik dari orang lain',
    explanation:
      'Secara harfiah berarti arah atau kekuatan angin yang menerpa; secara kiasan berarti tekanan, kritik, atau perlakuan keras dari lingkungan.',
    nuance:
      'Sering muncul dalam 風当たりが強い (mendapat banyak kritik/tekanan). Makna kiasan umum dalam berita dan hubungan sosial.',
    contexts: ['Berita', 'Politik', 'Kehidupan sosial'],
    examples: [
      [
        '新しい方針に対する社員の風当たりが強い。',
        'あたらしいほうしんにたいするしゃいんのかぜあたりがつよい。',
        'Tekanan dan kritik dari karyawan terhadap kebijakan baru sangat kuat.'
      ],
      [
        '海岸は風当たりが強いので、帽子が飛ばされやすい。',
        'かいがんはかぜあたりがつよいので、ぼうしがとばされやすい。',
        'Di pantai terpaan anginnya kuat sehingga topi mudah tertiup.'
      ]
    ]
  },
  hihan: {
    word: '批判',
    reading: 'ひはん',
    meaning: 'kritik; penilaian yang menunjukkan kekurangan',
    explanation:
      'Menilai atau menunjukkan masalah, kesalahan, dan kekurangan pada tindakan, pendapat, kebijakan, atau karya.',
    nuance:
      '批判する tidak selalu negatif bila kritik disampaikan secara objektif, tetapi 批判を浴びる berarti menerima banyak kritik. Berbeda dari 非難 yang lebih kuat bernuansa menyalahkan.',
    contexts: ['Berita', 'Akademik', 'Kehidupan sosial'],
    examples: [
      [
        '新しい制度には、専門家からも批判が出ている。',
        'あたらしいせいどには、せんもんかからもひはんがでている。',
        'Sistem baru itu juga mendapat kritik dari para ahli.'
      ],
      [
        '相手を批判する前に、事実を確認するべきだ。',
        'あいてをひはんするまえに、じじつをかくにんするべきだ。',
        'Sebelum mengkritik pihak lain, kita seharusnya memeriksa faktanya.'
      ]
    ]
  },
  youkyuu: {
    word: '要求',
    reading: 'ようきゅう',
    meaning: 'tuntutan; permintaan yang kuat',
    explanation:
      'Menyatakan kebutuhan atau keinginan agar pihak lain melakukan sesuatu atau memenuhi syarat tertentu.',
    nuance:
      'Lebih kuat daripada お願い dan sering digunakan dalam hubungan pekerja, konsumen, pemerintah, atau negosiasi. 要求する dapat terdengar tegas.',
    contexts: ['Bisnis', 'Berita', 'Kehidupan sosial'],
    examples: [
      [
        '住民は市に対して説明を要求した。',
        'じゅうみんはしにたいしてせつめいをようきゅうした。',
        'Warga menuntut penjelasan dari pemerintah kota.'
      ],
      [
        '会社は取引先に品質基準を守るよう要求している。',
        'かいしゃはとりひきさきにひんしつきじゅんをまもるようようきゅうしている。',
        'Perusahaan menuntut mitra bisnis agar mematuhi standar kualitas.'
      ]
    ]
  },
  shinrai: {
    word: '信頼',
    reading: 'しんらい',
    meaning: 'kepercayaan; keyakinan terhadap seseorang atau sesuatu',
    explanation:
      'Perasaan yakin bahwa seseorang, organisasi, atau informasi dapat diandalkan dan akan bertindak dengan baik.',
    nuance:
      'Sering digunakan dalam 信頼関係, 信頼を得る, dan 信頼できる. Lebih kuat daripada sekadar 好き atau 親しい karena berdasarkan keyakinan terhadap keandalan.',
    contexts: ['Kehidupan sosial', 'Bisnis', 'Pendidikan'],
    examples: [
      [
        '長い時間をかけて、互いの信頼関係を築いた。',
        'ながいじかんをかけて、たがいのしんらいかんけいをきずいた。',
        'Kami membangun hubungan saling percaya dalam waktu yang lama.'
      ],
      [
        '正確な情報を提供することが、信頼につながる。',
        'せいかくなじょうほうをていきょうすることが、しんらいにつながる。',
        'Memberikan informasi yang akurat akan membangun kepercayaan.'
      ]
    ]
  },
  adokenai: {
    word: 'あどけない',
    reading: 'あどけない',
    meaning: 'lugu; polos seperti anak kecil; tidak dibuat-buat',
    explanation:
      'Menggambarkan ekspresi atau sikap yang polos, alami, dan belum menunjukkan kecerdikan atau kepura-puraan orang dewasa.',
    nuance:
      'Sering digunakan untuk wajah, senyum, atau tingkah laku anak-anak. Bernuansa lembut dan biasanya positif atau penuh kasih.',
    contexts: ['Deskripsi orang', 'Sastra', 'Kehidupan sehari-hari'],
    examples: [
      [
        '子どもはあどけない笑顔でこちらを見つめた。',
        'こどもはあどけないえがおでこちらをみつめた。',
        'Anak itu menatap ke arah saya dengan senyum polos.'
      ],
      [
        '彼女のあどけない表情が写真に残っている。',
        'かのじょのあどけないひょうじょうがしゃしんにのこっている。',
        'Ekspresi polosnya terekam dalam foto.'
      ]
    ]
  },
  mujakina: {
    word: '無邪気な',
    reading: 'むじゃきな',
    meaning: 'polos; lugu; tanpa niat buruk',
    explanation:
      'Menggambarkan sikap atau sifat yang jujur dan bebas dari niat jahat, sering kali penuh keceriaan seperti anak kecil.',
    nuance:
      'Biasanya positif, tetapi dalam konteks tertentu dapat menyiratkan seseorang terlalu polos sehingga tidak menyadari akibat tindakannya.',
    contexts: ['Deskripsi orang', 'Kehidupan sosial', 'Sastra'],
    examples: [
      [
        '子どもたちは無邪気な声で笑っていた。',
        'こどもたちはむじゃきなこえでわらっていた。',
        'Anak-anak tertawa dengan suara yang polos dan ceria.'
      ],
      [
        '彼の無邪気な質問に、皆が思わず笑った。',
        'かれのむじゃきなしつもんに、みんながおもわずわらった。',
        'Semua orang tanpa sadar tertawa mendengar pertanyaannya yang polos.'
      ]
    ]
  },
  fuansouna: {
    word: '不安そうな',
    reading: 'ふあんそうな',
    meaning: 'tampak cemas; terlihat khawatir',
    explanation:
      'Menggambarkan ekspresi atau keadaan seseorang yang terlihat memiliki kecemasan atau ketidakpastian.',
    nuance:
      'そうな menunjukkan kesan berdasarkan penampilan. 不安な berarti merasa cemas, sedangkan 不安そうな berarti tampak cemas bagi pengamat.',
    contexts: ['Deskripsi orang', 'Percakapan', 'Narasi'],
    examples: [
      [
        '彼は不安そうな顔で結果を待っていた。',
        'かれはふあんそうなかおでけっかをまっていた。',
        'Ia menunggu hasil dengan wajah yang tampak cemas.'
      ],
      [
        '初めての発表を前に、学生たちは不安そうだった。',
        'はじめてのはっぴょうをまえに、がくせいたちはふあんそうだった。',
        'Menjelang presentasi pertama, para mahasiswa tampak cemas.'
      ]
    ]
  },
  shinkenna: {
    word: '真剣な',
    reading: 'しんけんな',
    meaning: 'serius; sungguh-sungguh; penuh konsentrasi',
    explanation:
      'Menggambarkan sikap yang benar-benar memusatkan perhatian dan berusaha menangani sesuatu dengan serius.',
    nuance:
      'Sering digunakan untuk ekspresi, pembicaraan, usaha, dan hubungan: 真剣に考える. Berlawanan dengan ふざけた atau 軽い態度.',
    contexts: ['Pendidikan', 'Pekerjaan', 'Kehidupan sosial'],
    examples: [
      [
        '学生たちは真剣な表情で講義を聞いていた。',
        'がくせいたちはしんけんなひょうじょうでこうぎをきいていた。',
        'Para mahasiswa mendengarkan kuliah dengan ekspresi serius.'
      ],
      [
        '将来について、家族と真剣に話し合った。',
        'しょうらいについて、かぞくとしんけんにはなしあった。',
        'Saya berdiskusi dengan serius bersama keluarga mengenai masa depan.'
      ]
    ]
  },
  urayamashisou: {
    word: '羨ましそう',
    reading: 'うらやましそう',
    meaning: 'tampak iri; terlihat mengagumi sesuatu yang dimiliki orang lain',
    explanation:
      'Menggambarkan ekspresi atau sikap seseorang yang tampak menginginkan keadaan, benda, atau pengalaman yang dimiliki pihak lain.',
    nuance:
      'そう menunjukkan kesan dari penampilan. 羨ましい berarti merasa iri atau ingin memiliki hal yang sama; 羨ましそう berarti terlihat demikian dari luar.',
    contexts: ['Deskripsi orang', 'Kehidupan sosial', 'Percakapan'],
    examples: [
      [
        '友人の旅行の写真を見て、彼は羨ましそうにしていた。',
        'ゆうじんのりょこうのしゃしんをみて、かれはうらやましそうにしていた。',
        'Melihat foto perjalanan temannya, ia tampak iri.'
      ],
      [
        '新しい自転車に乗る弟を、姉が羨ましそうに見ていた。',
        'あたらしいじてんしゃにのるおとうとを、あねがうらやましそうにみていた。',
        'Kakaknya memandangi adiknya yang mengendarai sepeda baru dengan tatapan iri.'
      ]
    ]
  },
  shukka: {
    word: '出荷',
    reading: 'しゅっか',
    meaning: 'pengiriman barang dari produsen/gudang ke pasar atau pelanggan',
    explanation:
      'Mengirim barang hasil produksi atau persediaan keluar dari pabrik, gudang, atau tempat penjualan menuju distributor atau pelanggan.',
    nuance:
      'Lebih spesifik daripada 発送 yang berarti mengirim secara umum. 出荷 sering digunakan dalam industri, pertanian, dan logistik.',
    contexts: ['Logistik', 'Bisnis', 'Pertanian'],
    examples: [
      [
        '収穫した野菜は、明日の朝に市場へ出荷する。',
        'しゅうかくしたやさいは、あしたのあさにいちばへしゅっかする。',
        'Sayuran yang dipanen akan dikirim ke pasar besok pagi.'
      ],
      [
        '製品の出荷が遅れ、取引先に連絡した。',
        'せいひんのしゅっかがおくれ、とりひきさきにれんらくした。',
        'Pengiriman produk terlambat sehingga kami menghubungi mitra bisnis.'
      ]
    ]
  },
  yuzuru: {
    word: '譲る',
    reading: 'ゆずる',
    meaning: 'menyerahkan; mengalah; memberikan hak kepada orang lain',
    explanation:
      'Memberikan atau mengalihkan sesuatu kepada orang lain, atau mengalah dengan memberi kesempatan dan prioritas.',
    nuance:
      'Dapat berarti menyerahkan barang/hak, mengalah dalam perdebatan, atau mempersilakan orang lain lebih dahulu: 席を譲る. Lebih umum daripada 譲渡する.',
    contexts: ['Kehidupan sosial', 'Hukum', 'Percakapan'],
    examples: [
      [
        '電車でお年寄りに席を譲った。',
        'でんしゃでおとしよりにせきをゆずった。',
        'Saya memberikan tempat duduk kepada orang lanjut usia di kereta.'
      ],
      [
        '大切な条件については、簡単に譲るつもりはない。',
        'たいせつなじょうけんについては、かんたんにゆずるつもりはない。',
        'Saya tidak berniat mudah mengalah mengenai persyaratan yang penting.'
      ]
    ]
  },
  sokodjikara: {
    word: '底力',
    reading: 'そこぢから',
    meaning: 'kekuatan tersembunyi; kemampuan terpendam',
    explanation:
      'Kekuatan atau kemampuan yang tidak selalu terlihat, tetapi muncul ketika seseorang atau kelompok menghadapi situasi sulit.',
    nuance:
      'Sering digunakan dalam 底力を発揮する. Menekankan potensi yang tersimpan dan baru terlihat saat dibutuhkan.',
    contexts: ['Olahraga', 'Pekerjaan', 'Deskripsi'],
    examples: [
      [
        'チームは試合の終盤に底力を発揮した。',
        'ちーむはしあいのしゅうばんにそこぢからをはっきした。',
        'Tim itu menunjukkan kekuatan tersembunyinya pada akhir pertandingan.'
      ],
      [
        '困難な状況こそ、一人一人の底力が試される。',
        'こんなんなじょうきょうこそ、ひとりひとりのそこぢからがためされる。',
        'Justru dalam keadaan sulit, kekuatan terpendam setiap orang diuji.'
      ]
    ]
  },
  zetsudai: {
    word: '絶大',
    reading: 'ぜつだい',
    meaning: 'sangat besar; luar biasa besar (pengaruh/dukungan)',
    explanation:
      'Menunjukkan tingkat pengaruh, kekuatan, dukungan, atau kepercayaan yang sangat besar.',
    nuance:
      'Biasanya digunakan dalam 絶大な支持, 絶大な影響力, atau 絶大な人気. Lebih kuat dan formal daripada 大きい.',
    contexts: ['Berita', 'Politik', 'Bisnis'],
    examples: [
      [
        'その活動は地域住民から絶大な支持を得ている。',
        'そのかつどうはちいきじゅうみんからぜつだいなしじをえている。',
        'Kegiatan itu memperoleh dukungan yang sangat besar dari warga setempat.'
      ],
      [
        '彼の発言は社会に絶大な影響を与えた。',
        'かれのはつげんはしゃかいにぜつだいなえいきょうをあたえた。',
        'Pernyataannya memberikan pengaruh yang luar biasa besar terhadap masyarakat.'
      ]
    ]
  },
  teitai: {
    word: '手痛い',
    reading: 'ていたい',
    meaning: 'sangat merugikan; pukulan berat; kekalahan yang menyakitkan',
    explanation:
      'Menggambarkan kerugian, kekalahan, atau teguran yang memberikan dampak besar dan terasa berat.',
    nuance:
      'Sering muncul dalam 手痛い損失, 手痛い失敗, dan 手痛い批判. Bukan berarti sakit pada tangan dalam penggunaan kiasan yang umum.',
    contexts: ['Berita', 'Bisnis', 'Olahraga'],
    examples: [
      [
        '会社は新製品の失敗で手痛い損失を受けた。',
        'かいしゃはしんせいひんのしっぱいでていたいそんしつをうけた。',
        'Perusahaan mengalami kerugian besar akibat kegagalan produk baru.'
      ],
      [
        '優勝候補のチームに手痛い敗北を喫した。',
        'ゆうしょうこうほのちーむにていたいはいぼくをきっした。',
        'Tim itu mengalami kekalahan telak dari tim unggulan juara.'
      ]
    ]
  },
  yuuchi: {
    word: '誘致',
    reading: 'ゆうち',
    meaning:
      'mengundang atau menarik (perusahaan, fasilitas, acara) agar datang',
    explanation:
      'Melakukan upaya agar perusahaan, fasilitas, acara, atau organisasi memilih untuk didirikan atau diselenggarakan di suatu wilayah.',
    nuance:
      'Umum dalam kebijakan daerah dan pembangunan ekonomi: 企業誘致, 観光客の誘致, 大会を誘致する. Menekankan usaha menarik pihak dari luar.',
    contexts: ['Ekonomi', 'Pemerintahan', 'Pariwisata'],
    examples: [
      [
        '市は新しい企業を誘致するため、税制面の支援を始めた。',
        'しはあたらしいきぎょうをゆうちするため、ぜいせいめんのしえんをはじめた。',
        'Pemerintah kota memulai dukungan perpajakan untuk menarik perusahaan baru.'
      ],
      [
        '地域の活性化を目指し、国際的な大会の誘致を進めている。',
        'ちいきのかっせいかをめざし、こくさいてきなたいかいのゆうちをすすめている。',
        'Untuk menghidupkan daerah, upaya menarik penyelenggaraan kompetisi internasional sedang dilakukan.'
      ]
    ]
  }
}

// Urutan ini mempertahankan seluruh 195 entri sesuai daftar sumber, termasuk pengulangan 期待.
const sourceOrder = [
  'kaiyaku',
  'tokusan',
  'toitsumeru',
  'kaishuu',
  'teatsui',
  'dema',
  'hedate',
  'katayori',
  'ayamari',
  'kodawari',
  'furumau',
  'ninau',
  'atsukau',
  'makanau',
  'koukyou',
  'kigeki',
  'kaikyo',
  'hannei',
  'jochou',
  'kakujyu',
  'shudou',
  'saisoku',
  'shikaeshi',
  'mikaeri',
  'henkyaku',
  'hensai',
  'shuuyaku',
  'ketsugou',
  'kessei',
  'saishuu',
  'tehai',
  'shimatsu',
  'jisshi',
  'seibi',
  'mekimeki',
  'seizei',
  'hakihaki',
  'tsukuzuku',
  'kasureru',
  'hagareru',
  'kuzureru',
  'hogureru',
  'risou',
  'ishi',
  'kijun',
  'senmon',
  'taikutsuna',
  'mendouna',
  'kikennna',
  'yokeina',
  'kojintekina',
  'gutaitekina',
  'shousaina',
  'juuyouna',
  'junchounisusumu',
  'oohabaniosoreru',
  'jojonihheru',
  'kyuugekinifueru',
  'kurou',
  'gaman',
  'shippai',
  'shinpai',
  'meibutsu',
  'kikou',
  'kanshuu',
  'rekishi',
  'satosu',
  'ayasu',
  'tadasu',
  'iyasu',
  'kiyoraka',
  'hogaraka',
  'yawaraka',
  'nameraka',
  'jisei',
  'jiritsu',
  'jichou',
  'jinin',
  'henjou',
  'kangen',
  'haikyuu',
  'jouto',
  'bisshori',
  'dossari',
  'donyori',
  'guttari',
  'noizu',
  'rokku',
  'tabuu',
  'nekku',
  'hassan',
  'hassha',
  'ryuushutsu',
  'haishutsu',
  'magirawashii',
  'mottomorashii',
  'zuzushii',
  'narenarashii',
  'ikizumaru',
  'ikikau',
  'ikitsuku',
  'ikitodoku',
  'kitai',
  'yosou',
  'juushi',
  'enryo',
  'harikiru',
  'yaseshiobireru',
  'kandousuru',
  'jittogaman',
  'hisshiganbaru',
  'hageshikuokoru',
  'asettetorikumu',
  'shikatanai',
  'arienai',
  'omoigakenai',
  'nasakenai',
  'subete',
  'daibu',
  'ichidoni',
  'tsugitsugi',
  'akiru',
  'akogareru',
  'fumanwomotsu',
  'nechuu',
  'kantoku',
  'hasei',
  'sukete',
  'onkei',
  'nozomu',
  'nyojitsuni',
  'hogo',
  'bougyo',
  'keibi',
  'shien',
  'chuujitsuni',
  'juujunni',
  'genseini',
  'kintouni',
  'sukutte',
  'mekutte',
  'hasande',
  'tsumande',
  'nengan',
  'shibou',
  'honi',
  'yokkyuu',
  'pinto',
  'poozu',
  'kaasoru',
  'tenpo',
  'kuikonda',
  'norikonda',
  'kakekonda',
  'oikonda',
  'tekkiri',
  'sappari',
  'shikkari',
  'hakkiri',
  'choutatsushita',
  'youishita',
  'haratta',
  'azukatta',
  'henkyakushita',
  'onwana',
  'odayakana',
  'sawayakana',
  'komayakana',
  'karoyakana',
  'supotto',
  'basho',
  'shouhin',
  'houhou',
  'jiki',
  'kikkoushiteiru',
  'saganai',
  'sagaaru',
  'takakunatteiru',
  'hikukunatteiru',
  'kazeatari',
  'hihan',
  'youkyuu',
  'shinrai',
  'kitai',
  'adokenai',
  'mujakina',
  'fuansouna',
  'shinkenna',
  'urayamashisou',
  'shukka',
  'yuzuru',
  'sokodjikara',
  'zetsudai',
  'teitai',
  'yuuchi'
]

const occurrences = new Map()
export const day2Vocabulary = sourceOrder.map(key => {
  const item = entries[key]
  if (!item) throw new Error(`Data Day 2 tidak ditemukan: ${key}`)
  const count = (occurrences.get(key) || 0) + 1
  occurrences.set(key, count)
  return {
    id: `d2-${key}-${String(count).padStart(2, '0')}`,
    ...item,
    examples: item.examples.map(([japanese, furigana, translation]) => ({
      japanese,
      furigana,
      translation
    }))
  }
})

export default day2Vocabulary
