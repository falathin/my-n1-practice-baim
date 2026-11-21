// Day 2 — data kosakata JLPT N1.
// Struktur setiap entri mengikuti day1.js: id, word, reading, meaning,
// explanation, nuance, contexts, dan tepat dua examples.

const source = [
  {
    word: '解約', reading: 'かいやく', meaning: 'pembatalan kontrak atau langganan',
    explanation: 'Mengakhiri perjanjian atau layanan yang sebelumnya telah disepakati, misalnya kontrak telepon, asuransi, atau keanggotaan.',
    nuance: 'Lebih khusus daripada 取り消す karena biasanya menyangkut hubungan kontraktual yang sedang berlaku. Lazim dalam urusan administrasi dan bisnis.', contexts: ['Administrasi', 'Bisnis', 'Kehidupan sehari-hari'], examples: [
      ['使わなくなった携帯電話の契約を解約した。', 'つかわなくなったけいたいでんわのけいやくをかいやくした。', 'Saya membatalkan kontrak telepon seluler yang sudah tidak digunakan.'],
      ['解約する前に、手数料がかかるか確認してください。', 'かいやくするまえに、てすうりょうがかかるかかくにんしてください。', 'Sebelum membatalkan kontrak, periksalah apakah ada biaya administrasi.']
    ]
  },
  {
    word: '特産', reading: 'とくさん', meaning: 'produk khas suatu daerah',
    explanation: 'Hasil alam, makanan, atau barang yang menjadi ciri khas dan banyak dihasilkan di wilayah tertentu.',
    nuance: 'Sering muncul sebagai 特産品. Menekankan hubungan produk dengan daerah asalnya, bukan sekadar barang yang populer.', contexts: ['Pariwisata', 'Ekonomi', 'Kehidupan sosial'], examples: [
      ['この町は梨を特産としている。', 'このまちはなしをとくさんとしている。', 'Kota ini menjadikan buah pir sebagai produk khasnya.'],
      ['駅の売店では地元の特産品を販売している。', 'えきのばいてんではじもとのとくさんひんをはんばいしている。', 'Toko di stasiun menjual produk khas setempat.']
    ]
  },
  {
    word: '問い詰める', reading: 'といつめる', meaning: 'mendesak seseorang dengan pertanyaan; menginterogasi',
    explanation: 'Terus-menerus mengajukan pertanyaan secara tegas untuk memperoleh penjelasan atau membuat seseorang mengakui sesuatu.',
    nuance: 'Bernada kuat dan dapat terasa menekan atau menuduh. Berbeda dari 尋ねる yang lebih netral dan sopan.', contexts: ['Kehidupan sosial', 'Berita', 'Narasi'], examples: [
      ['母は帰りが遅くなった理由を私に問い詰めた。', 'はははかえりがおそくなったりゆうをわたしにといつめた。', 'Ibu mendesakku dengan pertanyaan tentang alasan saya pulang terlambat.'],
      ['記者は担当者に事故の責任について問い詰めた。', 'きしゃはたんとうしゃにじこのせきにんについてといつめた。', 'Wartawan mendesak penanggung jawab dengan pertanyaan mengenai tanggung jawab atas kecelakaan itu.']
    ]
  },
  {
    word: '改修', reading: 'かいしゅう', meaning: 'perbaikan dan renovasi',
    explanation: 'Memperbaiki atau memperbarui bangunan, fasilitas, sistem, atau peralatan agar kondisinya lebih baik.',
    nuance: 'Umumnya digunakan untuk fasilitas atau sistem yang sudah ada. Berbeda dari 改築 yang lebih menekankan pembangunan ulang bangunan.', contexts: ['Konstruksi', 'Administrasi', 'Teknologi'], examples: [
      ['古くなった校舎を改修する工事が始まった。', 'ふるくなったこうしゃをかいしゅうするこうじがはじまった。', 'Pekerjaan renovasi gedung sekolah yang sudah tua telah dimulai.'],
      ['市は来年度、図書館の空調設備を改修する予定だ。', 'しはらいねんど、としょかんのくうちょうせつびをかいしゅうするよていだ。', 'Pemerintah kota berencana memperbaiki sistem pendingin udara perpustakaan pada tahun fiskal depan.']
    ]
  },
  {
    word: '手厚い', reading: 'てあつい', meaning: 'penuh perhatian; diberikan dengan sangat baik',
    explanation: 'Menggambarkan bantuan, perlakuan, pelayanan, atau dukungan yang diberikan secara cukup dan penuh perhatian.',
    nuance: 'Biasanya bernilai positif, misalnya 手厚い支援 atau 手厚い看護. Menekankan perhatian dan kecukupan layanan.', contexts: ['Kehidupan sosial', 'Kesehatan', 'Bisnis'], examples: [
      ['被災者には手厚い支援が必要だ。', 'ひさいしゃにはてあついしえんがひつようだ。', 'Para korban bencana membutuhkan dukungan yang menyeluruh.'],
      ['この病院は患者への手厚い看護で知られている。', 'このびょういんはかんじゃへのてあついかんごでしられている。', 'Rumah sakit ini dikenal karena perawatan pasiennya yang penuh perhatian.']
    ]
  },
  {
    word: 'デマ', reading: 'でま', meaning: 'kabar bohong; rumor palsu',
    explanation: 'Informasi yang tidak benar dan disebarkan seolah-olah merupakan fakta, sering kali menimbulkan kebingungan atau kepanikan.',
    nuance: 'Bernada negatif dan umum dalam percakapan maupun berita. Berbeda dari 噂 yang belum tentu palsu; デマ secara khusus menyiratkan informasi keliru.', contexts: ['Media', 'Berita', 'Kehidupan sosial'], examples: [
      ['根拠のないデマを信じないでください。', 'こんきょのないでまをしんじないでください。', 'Jangan percaya kabar bohong yang tidak memiliki dasar.'],
      ['そのデマはインターネットを通じて急速に広まった。', 'そのでまはいんたーねっとをつうじてきゅうそくにひろまった。', 'Rumor palsu itu menyebar dengan cepat melalui internet.']
    ]
  },
  {
    word: '隔たり', reading: 'へだたり', meaning: 'jarak; kesenjangan; perbedaan yang memisahkan',
    explanation: 'Perbedaan atau jarak antara dua pihak, pendapat, tingkat, atau keadaan, baik secara fisik maupun abstrak.',
    nuance: 'Sering digunakan untuk kesenjangan pendapat, generasi, budaya, dan kemampuan. Menekankan adanya jarak yang perlu dijembatani.', contexts: ['Berita', 'Sosial', 'Akademik'], examples: [
      ['両者の意見には大きな隔たりがある。', 'りょうしゃのいけんにはおおきなへだたりがある。', 'Ada kesenjangan besar antara pendapat kedua pihak.'],
      ['世代間の隔たりをなくすには対話が必要だ。', 'せだいかんのへだたりをなくすにはたいわがひつようだ。', 'Dialog diperlukan untuk mengurangi jarak antargenerasi.']
    ]
  },
  {
    word: '偏り', reading: 'かたより', meaning: 'ketimpangan; keberpihakan; bias',
    explanation: 'Keadaan ketika sesuatu terkumpul atau condong ke satu sisi sehingga tidak seimbang atau tidak netral.',
    nuance: 'Dapat digunakan untuk pola makan, distribusi, data, dan penilaian. 偏りがある sering menunjukkan ketidakseimbangan atau bias.', contexts: ['Akademik', 'Media', 'Kehidupan sehari-hari'], examples: [
      ['栄養に偏りのない食事を心がけている。', 'えいようにかたよりのないしょくじをこころがけている。', 'Saya berusaha mengonsumsi makanan dengan gizi yang seimbang.'],
      ['報道内容に偏りがないか検証する必要がある。', 'ほうどうないようにかたよりがないかけんしょうするひつようがある。', 'Perlu diperiksa apakah isi pemberitaan memiliki bias.']
    ]
  },
  {
    word: '誤り', reading: 'あやまり', meaning: 'kesalahan; kekeliruan',
    explanation: 'Hal yang tidak benar atau tidak sesuai dengan fakta, aturan, perhitungan, maupun cara yang semestinya.',
    nuance: 'Lebih formal daripada ミス dalam tulisan, dokumen, dan penjelasan. Dapat merujuk pada kesalahan isi, bukan hanya tindakan.', contexts: ['Akademik', 'Administrasi', 'Pekerjaan'], examples: [
      ['報告書に事実と異なる誤りが見つかった。', 'ほうこくしょにじじつとことなるあやまりがみつかった。', 'Ditemukan kesalahan yang tidak sesuai fakta dalam laporan.'],
      ['誤りを認めて、すぐに訂正した。', 'あやまりをみとめて、すぐにていせいした。', 'Saya mengakui kesalahan dan segera memperbaikinya.']
    ]
  },
  {
    word: '拘り', reading: 'こだわり', meaning: 'perhatian khusus; prinsip atau standar yang dipegang kuat',
    explanation: 'Sikap sangat memperhatikan hal tertentu dan tidak mudah berkompromi terhadap standar, cara, atau kualitas yang dianggap penting.',
    nuance: 'Dapat bernilai positif sebagai ketelitian dan kecintaan pada mutu, tetapi juga negatif bila berarti terlalu terpaku pada hal kecil. Sering ditulis こだわり.', contexts: ['Bisnis', 'Kerajinan', 'Kehidupan sosial'], examples: [
      ['この職人は材料選びに強い拘りを持っている。', 'このしょくにんはざいりょうえらびにつよいこだわりをもっている。', 'Perajin ini memiliki perhatian khusus terhadap pemilihan bahan.'],
      ['細部への拘りが、この商品の品質を高めている。', 'さいぶへのこだわりが、このしょうひんのひんしつをたかめている。', 'Perhatian pada detail meningkatkan kualitas produk ini.']
    ]
  },
  {
    word: '振る舞う', reading: 'ふるまう', meaning: 'berperilaku; bertindak; menyajikan (makanan/minuman)',
    explanation: 'Bertindak atau menunjukkan sikap tertentu dalam suatu keadaan. Dalam pola ごちそうを振る舞う, artinya menyajikan hidangan kepada orang lain.',
    nuance: 'Maknanya ditentukan oleh konteks. 人前で振る舞う berkaitan dengan perilaku, sedangkan 客に料理を振る舞う berarti menjamu tamu.', contexts: ['Kehidupan sosial', 'Bisnis', 'Percakapan'], examples: [
      ['彼はどんな状況でも落ち着いて振る舞う。', 'かれはどんなじょうきょうでもおちついてふるまう。', 'Ia selalu bersikap tenang dalam keadaan apa pun.'],
      ['母は集まった客に手料理を振る舞った。', 'はははあつまったきゃくにてりょうりをふるまった。', 'Ibu menyajikan masakan buatannya kepada para tamu yang berkumpul.']
    ]
  },
  {
    word: '担う', reading: 'になう', meaning: 'memikul; mengemban; bertanggung jawab atas',
    explanation: 'Memegang atau menjalankan tanggung jawab, peran, atau beban tertentu bagi kelompok maupun masyarakat.',
    nuance: 'Lebih formal dan abstrak daripada 持つ. Sering muncul dalam pola 役割を担う dan 次世代を担う.', contexts: ['Berita', 'Bisnis', 'Akademik'], examples: [
      ['若者が地域の未来を担っている。', 'わかものがちいきのみらいをになっている。', 'Kaum muda memikul tanggung jawab atas masa depan daerah.'],
      ['彼女はプロジェクトの中心的な役割を担った。', 'かのじょはぷろじぇくとのちゅうしんてきなやくわりをになった。', 'Ia mengemban peran utama dalam proyek tersebut.']
    ]
  },
  {
    word: '扱う', reading: 'あつかう', meaning: 'menangani; memperlakukan; membahas atau menjual',
    explanation: 'Melakukan penanganan terhadap benda atau orang, atau menjadikan suatu topik sebagai bahan pembahasan maupun barang dagangan.',
    nuance: 'Maknanya luas: 機械を扱う (mengoperasikan mesin), 人を扱う (memperlakukan orang), 問題を扱う (membahas masalah).', contexts: ['Pekerjaan', 'Bisnis', 'Media'], examples: [
      ['この店では海外の製品も扱っている。', 'このみせではかいがいのせいひんもあつかっている。', 'Toko ini juga menjual produk dari luar negeri.'],
      ['個人情報は慎重に扱わなければならない。', 'こじんじょうほうはしんちょうにあつかわなければならない。', 'Informasi pribadi harus ditangani dengan hati-hati.']
    ]
  },
  {
    word: '賄う', reading: 'まかなう', meaning: 'mencukupi; membiayai; menyediakan kebutuhan',
    explanation: 'Memenuhi kebutuhan atau menutup biaya dengan sumber daya yang tersedia, termasuk uang, makanan, dan tenaga.',
    nuance: 'Sering digunakan dalam 家計を賄う, 費用を賄う, dan 食事を賄う. Menekankan sumber yang digunakan untuk mencukupi kebutuhan.', contexts: ['Keuangan', 'Kehidupan sehari-hari', 'Bisnis'], examples: [
      ['学費の一部をアルバイト代で賄っている。', 'がくひのいちぶをあるばいとだいでまかなっている。', 'Saya membiayai sebagian biaya sekolah dari penghasilan kerja paruh waktu.'],
      ['この発電所は地域の電力需要を賄っている。', 'このはつでんしょはちいきのでんりょくじゅようをまかなっている。', 'Pembangkit listrik ini memenuhi kebutuhan listrik wilayah tersebut.']
    ]
  },
  {
    word: '好況', reading: 'こうきょう', meaning: 'keadaan ekonomi yang baik; kemakmuran ekonomi',
    explanation: 'Kondisi ketika kegiatan ekonomi berkembang, produksi dan penjualan meningkat, serta dunia usaha berjalan baik.',
    nuance: 'Istilah ekonomi dan berita. Merupakan lawan dari 不況; biasanya menggambarkan kondisi pasar atau perekonomian secara luas.', contexts: ['Ekonomi', 'Berita', 'Bisnis'], examples: [
      ['好況を背景に、企業の設備投資が増えている。', 'こうきょうをはいけいに、きぎょうのせつびとうしがふえている。', 'Dengan latar kondisi ekonomi yang baik, investasi peralatan perusahaan meningkat.'],
      ['長い好況が続き、失業率も低下した。', 'ながいこうきょうがつづき、しつぎょうりつもていかした。', 'Masa ekonomi yang makmur berlanjut dan tingkat pengangguran pun menurun.']
    ]
  },
  {
    word: '喜劇', reading: 'きげき', meaning: 'komedi; drama yang mengundang tawa',
    explanation: 'Karya panggung, film, atau cerita yang menggambarkan situasi lucu dan bertujuan menghibur penonton.',
    nuance: 'Merupakan lawan dari 悲劇. Dalam penggunaan kiasan, dapat menggambarkan kejadian yang lucu atau absurd.', contexts: ['Sastra', 'Film', 'Hiburan'], examples: [
      ['その劇団は新作の喜劇を上演した。', 'そのげきだんはしんさくのきげきをじょうえんした。', 'Kelompok teater itu mementaskan komedi baru.'],
      ['失敗を題材にした喜劇が観客の人気を集めた。', 'しっぱいをだいざいにしたきげきがかんきゃくのにんきをあつめた。', 'Komedi yang mengangkat kegagalan sebagai tema menarik perhatian penonton.']
    ]
  },
  {
    word: '快挙', reading: 'かいきょ', meaning: 'prestasi luar biasa; pencapaian gemilang',
    explanation: 'Tindakan atau hasil yang sangat mengesankan dan patut dipuji karena sulit dicapai.',
    nuance: 'Bernada positif dan sering dipakai dalam berita olahraga, penelitian, atau pencapaian kelompok. Lebih kuat daripada 成功 biasa.', contexts: ['Berita', 'Olahraga', 'Akademik'], examples: [
      ['若い選手が大会で優勝する快挙を成し遂げた。', 'わかいせんしゅがたいかいでゆうしょうするかいきょをなしとげた。', 'Atlet muda itu meraih prestasi gemilang dengan menjadi juara turnamen.'],
      ['世界記録を更新したことは歴史的な快挙だ。', 'せかいきろくをこうしんしたことはれきしてきなかいきょだ。', 'Memperbarui rekor dunia merupakan pencapaian bersejarah yang luar biasa.']
    ]
  },
  {
    word: '繁栄', reading: 'はんえい', meaning: 'kemakmuran; perkembangan yang maju',
    explanation: 'Keadaan ketika negara, wilayah, organisasi, atau usaha berkembang dengan baik dan memiliki kondisi yang makmur.',
    nuance: 'Cenderung formal dan sering digunakan untuk masyarakat, ekonomi, budaya, atau perusahaan. Menekankan perkembangan yang berkelanjutan.', contexts: ['Sejarah', 'Ekonomi', 'Berita'], examples: [
      ['港の発展によって、この町は大いに繁栄した。', 'みなとのはってんによって、このまちはおおいにはんえいした。', 'Berkat perkembangan pelabuhan, kota ini menjadi sangat makmur.'],
      ['地域の繁栄には住民の協力が欠かせない。', 'ちいきのはんえいにはじゅうみんのきょうりょくがかかせない。', 'Kerja sama warga sangat penting bagi kemakmuran daerah.']
    ]
  },
  {
    word: '助長', reading: 'じょちょう', meaning: 'mendorong; memperbesar atau memperburuk suatu kecenderungan',
    explanation: 'Membuat suatu keadaan, sikap, atau kecenderungan semakin kuat atau berkembang.',
    nuance: 'Sering bernada negatif, terutama dalam frasa 不安を助長する atau 格差を助長する. Berbeda dari 促進 yang lebih netral atau positif.', contexts: ['Berita', 'Akademik', 'Sosial'], examples: [
      ['不確かな情報が人々の不安を助長した。', 'たしかなじょうほうがひとびとのふあんをじょちょうした。', 'Informasi yang tidak pasti memperbesar kecemasan masyarakat.'],
      ['過度な競争は職場の緊張を助長する恐れがある。', 'かどなきょうそうはしょくばのきんちょうをじょちょうするおそれがある。', 'Persaingan berlebihan dapat memperburuk ketegangan di tempat kerja.']
    ]
  },
  {
    word: '拡充', reading: 'かくじゅう', meaning: 'perluasan dan peningkatan kelengkapan',
    explanation: 'Menambah atau memperkuat fasilitas, layanan, sistem, maupun sumber daya agar lebih lengkap dan mampu memenuhi kebutuhan.',
    nuance: 'Formal dan sering digunakan dalam kebijakan publik, pendidikan, serta layanan perusahaan. Tidak hanya memperbesar, tetapi juga meningkatkan isi atau kualitas.', contexts: ['Administrasi', 'Pendidikan', 'Bisnis'], examples: [
      ['市は子育て支援制度の拡充を進めている。', 'しはこそだてしえんせいどのかくじゅうをすすめている。', 'Pemerintah kota sedang memperluas dan meningkatkan sistem dukungan pengasuhan anak.'],
      ['図書館は電子資料を拡充する方針を示した。', 'としょかんはでんししりょうをかくじゅうするほうしんをしめした。', 'Perpustakaan menyatakan kebijakan untuk menambah koleksi bahan digital.']
    ]
  },
  {
    word: '主導', reading: 'しゅどう', meaning: 'kepemimpinan; mengambil inisiatif utama',
    explanation: 'Menjadi pihak yang memimpin dan mengarahkan suatu kegiatan, negosiasi, gerakan, atau proses.',
    nuance: 'Sering digunakan dalam pola 〜が主導する dan 主導権を握る. Menekankan siapa yang memegang peran pengarah.', contexts: ['Bisnis', 'Politik', 'Berita'], examples: [
      ['日本企業が共同研究を主導している。', 'にほんきぎょうがきょうどうけんきゅうをしゅどうしている。', 'Perusahaan Jepang memimpin penelitian bersama tersebut.'],
      ['住民が主導する地域づくりが始まった。', 'じゅうみんがしゅどうするちいきづくりがはじまった。', 'Pembangunan daerah yang dipimpin warga telah dimulai.']
    ]
  },
  {
    word: '催促', reading: 'さいそく', meaning: 'desakan; pengingat agar sesuatu segera dilakukan',
    explanation: 'Meminta seseorang untuk segera melakukan sesuatu yang tertunda, misalnya membayar, mengirim, atau memberikan jawaban.',
    nuance: 'Dapat terdengar menekan, terutama jika dilakukan berulang kali. 催促する sering digunakan dalam urusan pembayaran dan tenggat.', contexts: ['Bisnis', 'Administrasi', 'Kehidupan sosial'], examples: [
      ['支払いを何度も催促された。', 'しはらいをなんどもさいそくされた。', 'Saya berkali-kali ditagih untuk melakukan pembayaran.'],
      ['返事がないので、担当者にメールで催促した。', 'へんじがないので、たんとうしゃにめーるでさいそくした。', 'Karena belum ada jawaban, saya mengirim email pengingat kepada penanggung jawab.']
    ]
  },
  {
    word: '仕返し', reading: 'しかえし', meaning: 'balasan; tindakan membalas perlakuan buruk',
    explanation: 'Melakukan sesuatu untuk membalas tindakan atau perlakuan yang dianggap merugikan atau menyakiti diri.',
    nuance: 'Sering bernuansa negatif dan emosional, mirip “membalas dendam” dalam skala sehari-hari. Lebih kasual daripada 報復.', contexts: ['Kehidupan sosial', 'Percakapan', 'Sastra'], examples: [
      ['嫌がらせを受けても、仕返しをするべきではない。', 'いやがらせをうけても、しかえしをするべきではない。', 'Meskipun menerima perlakuan buruk, kita tidak seharusnya membalasnya.'],
      ['彼は冗談のつもりで友人に仕返しをした。', 'かれはじょうだんのつもりでゆうじんにしかえしをした。', 'Ia membalas temannya dengan maksud bercanda.']
    ]
  },
  {
    word: '見返り', reading: 'みかえり', meaning: 'imbalan; balasan yang diharapkan',
    explanation: 'Keuntungan, hadiah, atau balasan yang diharapkan seseorang setelah memberikan bantuan atau melakukan sesuatu.',
    nuance: 'Sering digunakan dalam pola 見返りを求める. Dapat menunjukkan hubungan timbal balik atau tindakan yang dilakukan dengan mengharapkan keuntungan.', contexts: ['Kehidupan sosial', 'Bisnis', 'Etika'], examples: [
      ['彼は見返りを求めずに人を助けた。', 'かれはみかえりをもとめずにひとをたすけた。', 'Ia membantu orang lain tanpa mengharapkan imbalan.'],
      ['投資に対する見返りが少ないと判断された。', 'とうしにたいするみかえりがすくないとはんだんされた。', 'Imbalan atas investasi itu dinilai kecil.']
    ]
  },
  {
    word: '返却', reading: 'へんきゃく', meaning: 'pengembalian barang yang dipinjam atau diterima',
    explanation: 'Mengembalikan barang, dokumen, atau benda kepada pemilik atau tempat asalnya setelah digunakan atau dipinjam.',
    nuance: 'Lebih formal daripada 返す dan sering digunakan di perpustakaan, sekolah, kantor, serta layanan penyewaan.', contexts: ['Administrasi', 'Pendidikan', 'Kehidupan sehari-hari'], examples: [
      ['借りた本は金曜日までに返却してください。', 'かりたほんはきんようびまでにへんきゃくしてください。', 'Tolong kembalikan buku yang dipinjam paling lambat hari Jumat.'],
      ['レンタル機器の返却場所はこちらです。', 'れんたるききのへんきゃくばしょはこちらです。', 'Tempat pengembalian peralatan sewaan ada di sini.']
    ]
  },
  {
    word: '返済', reading: 'へんさい', meaning: 'pelunasan; pembayaran kembali utang',
    explanation: 'Membayar kembali uang yang dipinjam atau kewajiban finansial sesuai kesepakatan.',
    nuance: 'Khusus untuk utang atau pinjaman. 返却 dipakai untuk mengembalikan barang, sedangkan 返済 untuk melunasi uang atau kewajiban pinjaman.', contexts: ['Keuangan', 'Bisnis', 'Administrasi'], examples: [
      ['奨学金を毎月少しずつ返済している。', 'しょうがくきんをまいつきすこしずつへんさいしている。', 'Saya membayar kembali pinjaman beasiswa sedikit demi sedikit setiap bulan.'],
      ['銀行は返済計画について説明した。', 'ぎんこうはへんさいけいかくについてせつめいした。', 'Bank menjelaskan rencana pembayaran kembali pinjaman.']
    ]
  },
  {
    word: '集約', reading: 'しゅうやく', meaning: 'pengumpulan dan pemusatan; konsolidasi',
    explanation: 'Mengumpulkan informasi, fungsi, fasilitas, atau kegiatan yang tersebar menjadi satu tempat atau satu rangkuman.',
    nuance: 'Formal dan sering dipakai untuk data, pendapat, layanan, serta organisasi. Menekankan penyatuan hal-hal yang sebelumnya tersebar.', contexts: ['Bisnis', 'Administrasi', 'Akademik'], examples: [
      ['各部署の意見を集約して報告書を作成した。', 'かくぶしょのいけんをしゅうやくしてほうこくしょをさくせいした。', 'Saya menghimpun pendapat setiap divisi lalu menyusun laporan.'],
      ['複数の窓口を一つの施設に集約する計画だ。', 'ふくすうのまどぐちをひとつのしせつにしゅうやくするけいかくだ。', 'Rencananya beberapa loket layanan akan dipusatkan di satu fasilitas.']
    ]
  },
  {
    word: '結合', reading: 'けつごう', meaning: 'penggabungan; penyatuan; ikatan',
    explanation: 'Menghubungkan dua atau lebih unsur sehingga menjadi satu kesatuan atau saling terikat.',
    nuance: 'Sering digunakan dalam ilmu pengetahuan, teknologi, dan pembahasan abstrak. Dalam kimia, dapat merujuk pada ikatan antaratom atau molekul.', contexts: ['Ilmu pengetahuan', 'Teknologi', 'Akademik'], examples: [
      ['二つの部品を結合して、一つの装置を作る。', 'ふたつのぶひんをけつごうして、ひとつのそうちをつくる。', 'Dua komponen digabungkan untuk membuat satu perangkat.'],
      ['この研究では、異なる情報を結合して分析する。', 'このけんきゅうでは、ことなるじょうほうをけつごうしてぶんせきする。', 'Dalam penelitian ini, informasi yang berbeda digabungkan untuk dianalisis.']
    ]
  },
  {
    word: '結成', reading: 'けっせい', meaning: 'pembentukan kelompok atau organisasi',
    explanation: 'Membentuk sebuah tim, kelompok, organisasi, atau koalisi dengan mengumpulkan beberapa orang atau pihak.',
    nuance: 'Digunakan untuk kelompok manusia atau organisasi, seperti チームを結成する. Berbeda dari 結合 yang lebih umum untuk unsur atau benda.', contexts: ['Organisasi', 'Berita', 'Olahraga'], examples: [
      ['若手研究者が新しいチームを結成した。', 'わかてけんきゅうしゃがあたらしいちーむをけっせいした。', 'Para peneliti muda membentuk tim baru.'],
      ['三つの団体が協力して連合を結成した。', 'みっつのだんたいがきょうりょくしてれんごうをけっせいした。', 'Tiga organisasi bekerja sama membentuk sebuah federasi.']
    ]
  },
  {
    word: '採集', reading: 'さいしゅう', meaning: 'pengumpulan sampel atau benda dari alam',
    explanation: 'Mengumpulkan tanaman, serangga, batu, data, atau bahan lain untuk pengamatan, penelitian, atau tujuan tertentu.',
    nuance: 'Sering dipakai dalam konteks alam dan penelitian. 採取 juga berarti mengambil sampel, sedangkan 採集 kerap menekankan pengumpulan beberapa benda.', contexts: ['Ilmu pengetahuan', 'Pendidikan', 'Alam'], examples: [
      ['子どもたちは野原で昆虫を採集した。', 'こどもたちはのはらでこんちゅうをさいしゅうした。', 'Anak-anak mengumpulkan serangga di padang rumput.'],
      ['研究者は山で植物の標本を採集している。', 'けんきゅうしゃはやまでしょくぶつのひょうほんをさいしゅうしている。', 'Para peneliti sedang mengumpulkan spesimen tumbuhan di gunung.']
    ]
  },
  {
    word: '手配', reading: 'てはい', meaning: 'pengaturan; persiapan; pengaturan pencarian',
    explanation: 'Mengatur atau menyiapkan orang, barang, kendaraan, tempat, atau kebutuhan lain agar suatu kegiatan berjalan.',
    nuance: 'Umum dalam bisnis dan perjalanan, seperti 宿泊先を手配する. Dalam berita kriminal, 指名手配 berarti orang yang sedang dicari polisi.', contexts: ['Bisnis', 'Perjalanan', 'Berita'], examples: [
      ['出張に必要な航空券とホテルを手配した。', 'しゅっちょうにひつようなこうくうけんとほてるをてはいした。', 'Saya mengatur tiket pesawat dan hotel yang diperlukan untuk perjalanan dinas.'],
      ['会議の資料は事務局が手配してくれる。', 'かいぎのしりょうはじむきょくがてはいしてくれる。', 'Sekretariat akan menyiapkan bahan rapat.']
    ]
  },
  {
    word: '始末', reading: 'しまつ', meaning: 'penanganan atau penyelesaian; akibat/ujung suatu keadaan',
    explanation: 'Mengurus sesuatu sampai selesai, membereskan masalah, atau menangani benda yang tidak diperlukan. Dalam pola 〜始末だ, berarti akhirnya sampai pada keadaan tertentu yang buruk.',
    nuance: 'Maknanya bergantung pola. 始末する berarti membereskan atau membuang, sedangkan 〜始末だ sering menyatakan hasil yang disesalkan.', contexts: ['Kehidupan sehari-hari', 'Pekerjaan', 'Tulisan formal'], examples: [
      ['使い終わった道具は自分で始末してください。', 'つかいおわったどうぐはじぶんでしまつしてください。', 'Tolong bereskan sendiri peralatan setelah selesai digunakan.'],
      ['彼は約束を忘れ、最後には謝る始末だった。', 'かれはやくそくをわすれ、さいごにはあやまるしまつだった。', 'Ia lupa pada janji dan akhirnya sampai harus meminta maaf.']
    ]
  },
  {
    word: '実施', reading: 'じっし', meaning: 'pelaksanaan; penerapan secara nyata',
    explanation: 'Benar-benar menjalankan rencana, kebijakan, survei, pemeriksaan, atau kegiatan yang telah ditetapkan.',
    nuance: 'Formal dan sering digunakan dalam pengumuman atau dokumen. Menekankan bahwa kegiatan benar-benar dilakukan, bukan hanya direncanakan.', contexts: ['Administrasi', 'Bisnis', 'Pendidikan'], examples: [
      ['来月、全社員を対象に研修を実施する。', 'らいげつ、ぜんしゃいんをたいしょうにけんしゅうをじっしする。', 'Bulan depan, pelatihan akan dilaksanakan untuk seluruh karyawan.'],
      ['アンケートはオンラインで実施された。', 'あんけーとはおんらいんでじっしされた。', 'Survei dilaksanakan secara daring.']
    ]
  },
  {
    word: '整備', reading: 'せいび', meaning: 'pemeliharaan; penataan; pembangunan fasilitas atau sistem',
    explanation: 'Memeriksa, memperbaiki, dan menata sesuatu agar berfungsi dengan baik atau siap digunakan.',
    nuance: 'Dapat digunakan untuk kendaraan, jalan, fasilitas, lingkungan, maupun sistem hukum. Menekankan kesiapan dan keteraturan.', contexts: ['Teknologi', 'Administrasi', 'Infrastruktur'], examples: [
      ['出発前に車のブレーキを整備しておいた。', 'しゅっぱつまえにくるまのぶれーきをせいびしておいた。', 'Saya telah memeriksa dan merawat rem mobil sebelum berangkat.'],
      ['市は安全に通学できる道路の整備を進めている。', 'しはあんぜんにつうがくできるどうろのせいびをすすめている。', 'Pemerintah kota sedang memperbaiki jalan agar siswa dapat berangkat sekolah dengan aman.']
    ]
  },
  {
    word: 'めきめき', reading: 'めきめき', meaning: 'dengan pesat; terlihat jelas kemajuannya',
    explanation: 'Menunjukkan perubahan atau peningkatan kemampuan yang berlangsung cepat dan mudah diamati.',
    nuance: 'Umumnya digunakan secara positif untuk perkembangan keterampilan atau kemampuan, misalnya 日本語がめきめき上達する.', contexts: ['Pendidikan', 'Pekerjaan', 'Percakapan'], examples: [
      ['彼女は毎日練習して、ピアノがめきめき上達した。', 'かのじょはまいにちれんしゅうして、ぴあのがめきめきじょうたつした。', 'Ia berlatih setiap hari dan kemampuan pianonya meningkat pesat.'],
      ['新しい社員は仕事を覚え、めきめき力をつけている。', 'あたらしいしゃいんはしごとをおぼえ、めきめきちからをつけている。', 'Karyawan baru itu menguasai pekerjaannya dan kemampuannya berkembang pesat.']
    ]
  },
  {
    word: 'せいぜい', reading: 'せいぜい', meaning: 'paling banyak; paling-paling; sekuat kemampuan',
    explanation: 'Menunjukkan batas tertinggi yang diperkirakan, atau usaha maksimal yang dapat dilakukan seseorang.',
    nuance: 'Dalam arti “paling banyak”, sering memberi kesan bahwa jumlahnya terbatas. Dalam arti “sekuat tenaga”, bernuansa mendorong usaha maksimal.', contexts: ['Percakapan', 'Pekerjaan', 'Tulisan'], examples: [
      ['この作業にかかる時間は、せいぜい一時間だろう。', 'このさぎょうにかかるじかんは、せいぜいいちじかんだろう。', 'Pekerjaan ini paling-paling membutuhkan waktu satu jam.'],
      ['今できることをせいぜいやってみよう。', 'いまできることをせいぜいやってみよう。', 'Mari lakukan semaksimal mungkin apa yang bisa dilakukan sekarang.']
    ]
  },
  {
    word: 'はきはき', reading: 'はきはき', meaning: 'dengan jelas, tegas, dan penuh semangat',
    explanation: 'Menggambarkan cara berbicara atau bertindak yang jelas, cepat, dan tidak ragu-ragu.',
    nuance: 'Biasanya bernilai positif untuk cara berbicara atau sikap seseorang. はきはき答える berarti menjawab dengan jelas dan tegas.', contexts: ['Percakapan', 'Pendidikan', 'Pekerjaan'], examples: [
      ['質問にはきはき答える学生は印象がよい。', 'しつもんにはきはきこたえるがくせいはいんしょうがよい。', 'Siswa yang menjawab pertanyaan dengan jelas memberikan kesan baik.'],
      ['彼女はいつもはきはきと話す。', 'かのじょはいつもはきはきとはなす。', 'Ia selalu berbicara dengan jelas dan tegas.']
    ]
  },
  {
    word: '熟々', reading: 'つくづく', meaning: 'sungguh-sungguh; benar-benar; setelah dipikirkan atau dialami',
    explanation: 'Menunjukkan bahwa seseorang merasakan atau menyadari sesuatu secara mendalam setelah memikirkannya atau mengalaminya.',
    nuance: 'Sering ditulis つくづく dalam hiragana. Dipakai untuk kesan atau kesadaran pribadi, misalnya つくづく思う (benar-benar merasa).', contexts: ['Percakapan', 'Sastra', 'Tulisan'], examples: [
      ['健康が何より大切だと熟々感じた。', 'けんこうがなによりたいせつだとつくづくかんじた。', 'Saya benar-benar merasakan bahwa kesehatan adalah hal yang paling penting.'],
      ['故郷を離れて、家族のありがたさを熟々思った。', 'ふるさとをはなれて、かぞくのありがたさをつくづくおもった。', 'Setelah meninggalkan kampung halaman, saya sungguh menyadari betapa berharganya keluarga.']
    ]
  },
  {
    word: '掠れる', reading: 'かすれる', meaning: 'menjadi serak; memudar; terdengar atau terlihat samar',
    explanation: 'Menggambarkan suara yang tidak jelas atau serak, tulisan yang samar, atau sesuatu yang hanya tampak sedikit.',
    nuance: 'Maknanya bergantung konteks: 声が掠れる (suara serak), 字が掠れる (tulisan memudar). Bentuk yang lebih umum juga ditulis かすれる.', contexts: ['Percakapan', 'Kesehatan', 'Deskripsi'], examples: [
      ['長く話し続けて、声が掠れてしまった。', 'ながくはなしつづけて、こえがかすれてしまった。', 'Karena terus berbicara lama, suara saya menjadi serak.'],
      ['古い看板の文字が雨で掠れている。', 'ふるいかんばんのもじがあめでかすれている。', 'Tulisan pada papan nama tua itu telah memudar karena hujan.']
    ]
  },
  {
    word: '剥がれる', reading: 'はがれる', meaning: 'terkelupas; terlepas dari permukaan',
    explanation: 'Menunjukkan bahwa sesuatu yang menempel pada permukaan, seperti kertas, cat, atau stiker, terlepas dengan sendirinya.',
    nuance: 'Bentuk intransitif dari 剥がす. Fokusnya pada benda yang terlepas, bukan orang yang sengaja melepaskannya.', contexts: ['Kehidupan sehari-hari', 'Konstruksi', 'Deskripsi'], examples: [
      ['壁の古い塗装が少しずつ剥がれている。', 'かべのふるいとそうがすこしずつはがれている。', 'Cat lama pada dinding itu terkelupas sedikit demi sedikit.'],
      ['雨にぬれて、靴底のシールが剥がれた。', 'あめにぬれて、くつぞこのしーるがはがれた。', 'Setelah terkena hujan, stiker pada sol sepatu terlepas.']
    ]
  },
  {
    word: '崩れる', reading: 'くずれる', meaning: 'runtuh; ambruk; menjadi berantakan atau tidak stabil',
    explanation: 'Berubah dari bentuk atau keadaan yang teratur menjadi rusak, runtuh, atau tidak seimbang.',
    nuance: 'Dapat digunakan secara fisik maupun abstrak: 建物が崩れる, 体調が崩れる, 予定が崩れる. Tidak selalu berarti bangunan runtuh.', contexts: ['Berita', 'Kehidupan sehari-hari', 'Kesehatan'], examples: [
      ['大雨で山の斜面が崩れた。', 'おおあめでやまのしゃめんがくずれた。', 'Lereng gunung runtuh akibat hujan deras.'],
      ['睡眠不足で生活のリズムが崩れてしまった。', 'すいみんぶそくでせいかつのりずむがくずれてしまった。', 'Kurang tidur membuat ritme hidup saya menjadi tidak teratur.']
    ]
  },
  {
    word: 'ほぐれる', reading: 'ほぐれる', meaning: 'menjadi lemas; terurai; mengendur',
    explanation: 'Menjadi tidak kaku atau tidak kusut lagi, seperti otot yang mengendur, benang yang terurai, atau suasana hati yang mencair.',
    nuance: 'Sering digunakan untuk tubuh dan perasaan: 緊張がほぐれる berarti ketegangan mereda. Bernuansa perubahan menuju keadaan lebih santai.', contexts: ['Kesehatan', 'Kehidupan sehari-hari', 'Percakapan'], examples: [
      ['軽い運動をすると、肩の緊張がほぐれる。', 'かるいうんどうをすると、かたのきんちょうがほぐれる。', 'Ketegangan bahu berkurang ketika melakukan olahraga ringan.'],
      ['先生の冗談で、教室の雰囲気がほぐれた。', 'せんせいのじょうだんで、きょうしつのふんいきがほぐれた。', 'Suasana kelas menjadi lebih santai berkat candaan guru.']
    ]
  },
  {
    word: '理想', reading: 'りそう', meaning: 'ideal; keadaan yang paling diharapkan',
    explanation: 'Gambaran tentang keadaan atau tujuan yang dianggap paling baik dan ingin diwujudkan.',
    nuance: 'Dapat digunakan sebagai kata benda atau dalam gabungan 理想的. Berbeda dari 現実 yang berarti kenyataan.', contexts: ['Akademik', 'Kehidupan sosial', 'Pekerjaan'], examples: [
      ['理想と現実の違いを冷静に考える必要がある。', 'りそうとげんじつのちがいをれいせいにかんがえるひつようがある。', 'Kita perlu memikirkan perbedaan antara ideal dan kenyataan dengan tenang.'],
      ['彼女は理想の教育環境を実現しようとしている。', 'かのじょはりそうのきょういくかんきょうをじつげんしようとしている。', 'Ia berusaha mewujudkan lingkungan pendidikan yang ideal.']
    ]
  },
  {
    word: '意思', reading: 'いし', meaning: 'kehendak; niat; kemauan',
    explanation: 'Keinginan atau keputusan yang berasal dari pikiran seseorang untuk melakukan atau tidak melakukan sesuatu.',
    nuance: 'Sering digunakan dalam konteks formal dan hukum, seperti 本人の意思 (kehendak orang yang bersangkutan). Berbeda dari 意志 yang lebih menekankan tekad kuat.', contexts: ['Hukum', 'Formal', 'Kehidupan sosial'], examples: [
      ['本人の意思を尊重することが大切だ。', 'ほんにんのいしをそんちょうすることがたいせつだ。', 'Penting untuk menghormati kehendak orang yang bersangkutan.'],
      ['参加するかどうか、意思を確認してください。', 'さんかするかどうか、いしをかくにんしてください。', 'Tolong pastikan apakah ia berniat untuk ikut atau tidak.']
    ]
  },
  {
    word: '基準', reading: 'きじゅん', meaning: 'standar; patokan; kriteria',
    explanation: 'Ukuran atau aturan yang digunakan untuk menilai, membandingkan, atau menentukan sesuatu.',
    nuance: 'Sering muncul dalam 基準を満たす dan 判断基準. Menunjukkan patokan yang dijadikan dasar penilaian.', contexts: ['Pendidikan', 'Administrasi', 'Bisnis'], examples: [
      ['採用の基準は応募者全員に公開されている。', 'さいようのきじゅんはおうぼしゃぜんいんにこうかいされている。', 'Kriteria penerimaan telah diumumkan kepada seluruh pelamar.'],
      ['安全基準を満たしているか検査する。', 'あんぜんきじゅんをみたしているかけんさする。', 'Kami memeriksa apakah standar keselamatan telah terpenuhi.']
    ]
  },
  {
    word: '専門', reading: 'せんもん', meaning: 'bidang khusus; spesialisasi',
    explanation: 'Bidang pengetahuan atau pekerjaan yang dipelajari dan ditekuni secara mendalam.',
    nuance: 'Digunakan dalam 専門家 (ahli), 専門分野 (bidang keahlian), dan 専門知識 (pengetahuan khusus).', contexts: ['Akademik', 'Pekerjaan', 'Bisnis'], examples: [
      ['彼は環境工学を専門に研究している。', 'かれはかんきょうこうがくをせんもんにけんきゅうしている。', 'Ia meneliti teknik lingkungan sebagai bidang spesialisasinya.'],
      ['詳しい説明は専門家に相談してください。', 'くわしいせつめいはせんもんかにそうだんしてください。', 'Untuk penjelasan terperinci, silakan berkonsultasi dengan ahli.']
    ]
  },
  {
    word: '退屈な', reading: 'たいくつな', meaning: 'membosankan; membuat jenuh',
    explanation: 'Menggambarkan kegiatan, cerita, atau keadaan yang terasa tidak menarik sehingga seseorang merasa bosan.',
    nuance: 'Menilai sesuatu sebagai sumber kebosanan. Untuk menyatakan diri merasa bosan, gunakan 退屈だ atau 退屈している.', contexts: ['Percakapan', 'Pendidikan', 'Hiburan'], examples: [
      ['退屈な説明が続き、学生たちは集中できなかった。', 'たいくつなせつめいがつづき、がくせいたちはしゅうちゅうできなかった。', 'Penjelasan yang membosankan terus berlangsung sehingga para siswa tidak dapat berkonsentrasi.'],
      ['彼は退屈な時間を読書で過ごした。', 'かれはたいくつなじかんをどくしょですごした。', 'Ia menghabiskan waktu yang membosankan dengan membaca.']
    ]
  },
  {
    word: '面倒な', reading: 'めんどうな', meaning: 'merepotkan; menyulitkan; membutuhkan banyak urusan',
    explanation: 'Menggambarkan sesuatu yang membutuhkan usaha atau perhatian tambahan sehingga terasa merepotkan.',
    nuance: 'Umum dalam percakapan dan dapat terdengar kasual. 面倒を見る memiliki arti khusus, yaitu merawat atau mengurus seseorang.', contexts: ['Percakapan', 'Pekerjaan', 'Kehidupan sehari-hari'], examples: [
      ['面倒な手続きはオンラインで済ませたい。', 'めんどうなてつづきはおんらいんですませたい。', 'Saya ingin menyelesaikan prosedur yang merepotkan itu secara daring.'],
      ['細かい書類を何枚も書くのは面倒だ。', 'こまかいしょるいをなんまいもかくのはめんどうだ。', 'Mengisi banyak dokumen yang terperinci itu merepotkan.']
    ]
  },
  {
    word: '危険な', reading: 'きけんな', meaning: 'berbahaya; mengandung risiko',
    explanation: 'Menggambarkan keadaan, tindakan, atau benda yang dapat menyebabkan cedera, kerugian, atau dampak buruk.',
    nuance: 'Lebih langsung daripada リスクがある dan sering digunakan dalam peringatan maupun penjelasan resmi.', contexts: ['Berita', 'Keselamatan', 'Kehidupan sehari-hari'], examples: [
      ['危険な場所には近づかないでください。', 'きけんなばしょにはちかづかないでください。', 'Jangan mendekati tempat yang berbahaya.'],
      ['疲れた状態で運転するのは危険な行為だ。', 'つかれたじょうたいでうんてんするのはきけんなこういだ。', 'Mengemudi dalam keadaan lelah merupakan tindakan berbahaya.']
    ]
  },
  {
    word: '余計な', reading: 'よけいな', meaning: 'tidak perlu; berlebihan; tambahan yang tidak diinginkan',
    explanation: 'Menunjukkan sesuatu yang melebihi kebutuhan atau tidak diperlukan dalam keadaan tertentu.',
    nuance: 'Sering bernada negatif, misalnya 余計な心配 (kekhawatiran yang tidak perlu) dan 余計なことを言う (mengatakan hal yang tidak perlu).', contexts: ['Percakapan', 'Kehidupan sosial', 'Pekerjaan'], examples: [
      ['余計な一言で相手を傷つけてしまった。', 'よけいなひとことであいてをきずつけてしまった。', 'Ucapan tambahan yang tidak perlu membuat lawan bicara tersakiti.'],
      ['必要な物だけを持ち、余計な荷物は置いていこう。', 'ひつようなものだけをもち、よけいなにもつはおいていこう。', 'Bawalah hanya barang yang diperlukan dan tinggalkan bawaan yang tidak perlu.']
    ]
  },
  {
    word: '個人的な', reading: 'こじんてきな', meaning: 'bersifat pribadi; berkaitan dengan individu',
    explanation: 'Menunjukkan sesuatu yang berhubungan dengan seseorang secara pribadi, bukan sikap resmi suatu kelompok atau organisasi.',
    nuance: 'Sering digunakan untuk pendapat atau urusan pribadi: 個人的な意見. Tidak selalu rahasia, tetapi ruang lingkupnya bersifat individual.', contexts: ['Percakapan', 'Pekerjaan', 'Formal'], examples: [
      ['これは会社の見解ではなく、私の個人的な意見です。', 'これはかいしゃのけんかいではなく、わたしのこじんてきないけんです。', 'Ini bukan pandangan perusahaan, melainkan pendapat pribadi saya.'],
      ['個人的な理由で会議を欠席した。', 'こじんてきなりゆうでかいぎをけっせきした。', 'Saya tidak menghadiri rapat karena alasan pribadi.']
    ]
  },
  {
    word: '具体的な', reading: 'ぐたいてきな', meaning: 'konkret; jelas dan dapat dibayangkan atau dilaksanakan',
    explanation: 'Menggambarkan hal yang disampaikan dengan rincian nyata, contoh, atau tindakan yang jelas, bukan hanya gagasan umum.',
    nuance: 'Sering dipasangkan dengan 抽象的. 具体的に説明する berarti menjelaskan dengan contoh atau rincian yang jelas.', contexts: ['Akademik', 'Bisnis', 'Diskusi'], examples: [
      ['計画を実行するための具体的な方法を考えよう。', 'けいかくをじっこうするためのぐたいてきなほうほうをかんがえよう。', 'Mari pikirkan cara konkret untuk melaksanakan rencana itu.'],
      ['もう少し具体的な例を挙げて説明してください。', 'もうすこしぐたいてきなれいをあげてせつめいしてください。', 'Tolong jelaskan dengan memberikan contoh yang sedikit lebih konkret.']
    ]
  },
  {
    word: '詳細な', reading: 'しょうさいな', meaning: 'terperinci; mendetail',
    explanation: 'Menggambarkan informasi atau penjelasan yang memuat banyak rincian dan bagian khusus.',
    nuance: 'Cenderung formal, sering muncul dalam 詳細な説明・詳細な資料. Lebih menekankan kelengkapan rincian daripada 具体的 yang menekankan kekonkretan.', contexts: ['Administrasi', 'Bisnis', 'Akademik'], examples: [
      ['調査結果について詳細な報告書を作成した。', 'ちょうさけっかについてしょうさいなほうこくしょをさくせいした。', 'Saya menyusun laporan terperinci mengenai hasil penelitian.'],
      ['詳細な日程は後日メールでお知らせします。', 'しょうさいなにっていはごじつめーるでおしらせします。', 'Jadwal terperinci akan kami informasikan melalui email di kemudian hari.']
    ]
  },
  {
    word: '重要な', reading: 'じゅうような', meaning: 'penting; memiliki arti atau pengaruh besar',
    explanation: 'Menunjukkan sesuatu yang perlu diperhatikan karena berpengaruh besar terhadap hasil atau keadaan.',
    nuance: 'Umum dalam situasi formal maupun sehari-hari. 重要な点 berarti poin penting; 重要性 berarti tingkat kepentingan.', contexts: ['Pekerjaan', 'Akademik', 'Kehidupan sosial'], examples: [
      ['睡眠は健康を保つために重要な役割を果たす。', 'すいみんはけんこうをたもつためにじゅうようなやくわりをはたす。', 'Tidur memainkan peran penting untuk menjaga kesehatan.'],
      ['会議では重要な問題が三つ取り上げられた。', 'かいぎではじゅうようなもんだいがみっつとりあげられた。', 'Tiga masalah penting dibahas dalam rapat.']
    ]
  },
  {
    word: '順調に進む', reading: 'じゅんちょうにすすむ', meaning: 'berjalan lancar; berkembang sesuai rencana',
    explanation: 'Menunjukkan bahwa pekerjaan atau proses berlangsung tanpa hambatan besar dan bergerak sesuai harapan.',
    nuance: 'Sering digunakan dalam laporan proyek, penelitian, pemulihan, dan persiapan acara. 順調 menekankan kelancaran proses.', contexts: ['Pekerjaan', 'Bisnis', 'Kehidupan sehari-hari'], examples: [
      ['新しい商品の開発は順調に進んでいる。', 'あたらしいしょうひんのかいはつはじゅんちょうにすすんでいる。', 'Pengembangan produk baru berjalan lancar.'],
      ['工事が順調に進めば、予定より早く完成する。', 'こうじがじゅんちょうにすすめば、よていよりはやくかんせいする。', 'Jika pekerjaan konstruksi berjalan lancar, penyelesaiannya akan lebih cepat dari jadwal.']
    ]
  },
  {
    word: '大幅に遅れる', reading: 'おおはばにおくれる', meaning: 'terlambat jauh dari jadwal; mengalami keterlambatan besar',
    explanation: 'Mengalami keterlambatan dalam jumlah atau tingkat yang cukup besar dibandingkan waktu yang direncanakan.',
    nuance: '大幅に menekankan besarnya selisih. Sering digunakan dalam berita transportasi, jadwal proyek, dan laporan pekerjaan.', contexts: ['Berita', 'Transportasi', 'Pekerjaan'], examples: [
      ['大雪の影響で列車の到着が大幅に遅れた。', 'おおゆきのえいきょうでれっしゃのとうちゃくがおおはばにおくれた。', 'Kedatangan kereta terlambat jauh akibat salju lebat.'],
      ['準備に時間がかかり、計画全体が大幅に遅れている。', 'じゅんびにじかんがかかり、けいかくぜんたいがおおはばにおくれている。', 'Persiapan memakan waktu sehingga seluruh rencana mengalami keterlambatan besar.']
    ]
  },
  {
    word: '徐々に減る', reading: 'じょじょにへる', meaning: 'berkurang secara bertahap',
    explanation: 'Menunjukkan jumlah atau tingkat sesuatu menurun sedikit demi sedikit, bukan secara mendadak.',
    nuance: '徐々に bersifat formal dan menggambarkan perubahan yang perlahan. Sering dipakai untuk populasi, angka, minat, atau persediaan.', contexts: ['Berita', 'Ekonomi', 'Akademik'], examples: [
      ['この地域では人口が徐々に減っている。', 'このちいきではじんこうがじょじょにへっている。', 'Jumlah penduduk di wilayah ini berkurang secara bertahap.'],
      ['薬の量を調整すると、痛みが徐々に減った。', 'くすりのりょうをちょうせいすると、いたみがじょじょにへった。', 'Setelah dosis obat disesuaikan, rasa sakit berkurang secara bertahap.']
    ]
  },
  {
    word: '急激に増える', reading: 'きゅうげきにふえる', meaning: 'meningkat dengan sangat cepat; melonjak',
    explanation: 'Menggambarkan kenaikan jumlah atau tingkat yang terjadi secara tajam dalam waktu relatif singkat.',
    nuance: '急激に menekankan kecepatan dan besarnya perubahan. Umum dalam berita, statistik, ekonomi, dan laporan sosial.', contexts: ['Berita', 'Ekonomi', 'Akademik'], examples: [
      ['夏になると観光客が急激に増える。', 'なつになるとかんこうきゃくがきゅうげきにふえる。', 'Saat musim panas tiba, jumlah wisatawan meningkat tajam.'],
      ['利用者が急激に増えたため、サーバーを追加した。', 'りようしゃがきゅうげきにふえたため、さーばーをついかした。', 'Karena jumlah pengguna melonjak, server tambahan dipasang.']
    ]
  },
  {
    word: '苦労', reading: 'くろう', meaning: 'kesulitan; usaha keras yang melelahkan',
    explanation: 'Pengalaman menghadapi masalah atau melakukan usaha yang membutuhkan tenaga, waktu, dan kesabaran.',
    nuance: 'Sering dipakai dalam 苦労する dan ご苦労さま. Dapat mengandung rasa simpati atau penghargaan atas usaha seseorang.', contexts: ['Kehidupan sosial', 'Pekerjaan', 'Percakapan'], examples: [
      ['両親は私を育てるために多くの苦労をした。', 'りょうしんはわたしをそだてるためにおおくのくろうをした。', 'Orang tua saya mengalami banyak kesulitan untuk membesarkan saya.'],
      ['苦労して完成させた作品が賞を受けた。', 'くろうしてかんせいさせたさくひんがしょうをうけた。', 'Karya yang diselesaikan dengan susah payah itu menerima penghargaan.']
    ]
  },
  {
    word: '我慢', reading: 'がまん', meaning: 'menahan diri; bersabar; bertahan menghadapi kesulitan',
    explanation: 'Mengendalikan keinginan atau menahan rasa tidak nyaman tanpa segera menyerah atau bereaksi.',
    nuance: 'Umum dalam percakapan. 我慢する dapat berarti bersabar, menahan rasa sakit, atau tidak melakukan sesuatu yang diinginkan.', contexts: ['Kehidupan sehari-hari', 'Pendidikan', 'Kesehatan'], examples: [
      ['甘い物を食べたいが、今日は我慢する。', 'あまいものをたべたいが、きょうはがまんする。', 'Saya ingin makan makanan manis, tetapi hari ini saya menahannya.'],
      ['暑さを我慢せず、涼しい場所で休んでください。', 'あつさをがまんせず、すずしいばしょでやすんでください。', 'Jangan memaksakan diri menahan panas; beristirahatlah di tempat yang sejuk.']
    ]
  },
  {
    word: '失敗', reading: 'しっぱい', meaning: 'kegagalan; kesalahan dalam melakukan sesuatu',
    explanation: 'Hasil yang tidak sesuai harapan atau tindakan yang tidak berhasil mencapai tujuan.',
    nuance: 'Kata umum dan netral. 失敗する berfokus pada hasil yang tidak berhasil, sedangkan 間違える lebih menekankan membuat kesalahan.', contexts: ['Pendidikan', 'Pekerjaan', 'Kehidupan sehari-hari'], examples: [
      ['失敗から学ぶことも多い。', 'しっぱいからまなぶこともおおい。', 'Ada banyak hal yang bisa dipelajari dari kegagalan.'],
      ['初めての発表で失敗したが、よい経験になった。', 'はじめてのはっぴょうでしっぱいしたが、よいけいけんになった。', 'Saya gagal dalam presentasi pertama, tetapi itu menjadi pengalaman yang baik.']
    ]
  },
  {
    word: '心配', reading: 'しんぱい', meaning: 'kekhawatiran; rasa cemas',
    explanation: 'Perasaan tidak tenang karena memikirkan kemungkinan buruk atau keadaan seseorang maupun sesuatu.',
    nuance: 'Umum dalam percakapan. 心配する berarti merasa khawatir; 心配をかける berarti membuat orang lain khawatir.', contexts: ['Percakapan', 'Kehidupan sosial', 'Kesehatan'], examples: [
      ['試験の結果が心配で、よく眠れなかった。', 'しけんのけっかがしんぱいで、よくねむれなかった。', 'Saya khawatir dengan hasil ujian sehingga tidak bisa tidur nyenyak.'],
      ['遅くなるときは家族に連絡して、心配をかけないようにする。', 'おそくなるときはかぞくにれんらくして、しんぱいをかけないようにする。', 'Saat pulang terlambat, saya menghubungi keluarga agar mereka tidak khawatir.']
    ]
  },
  {
    word: '名物', reading: 'めいぶつ', meaning: 'hal atau produk khas yang terkenal',
    explanation: 'Makanan, barang, tempat, atau tradisi yang terkenal dan menjadi ciri khas suatu daerah atau tempat.',
    nuance: 'Sering dipakai dalam pariwisata dan promosi daerah. 名物料理 berarti hidangan khas yang terkenal.', contexts: ['Pariwisata', 'Budaya', 'Kehidupan sosial'], examples: [
      ['この町の名物は新鮮な魚を使った料理だ。', 'このまちのめいぶつはしんせんなさかなをつかったりょうりだ。', 'Hidangan dari ikan segar merupakan ciri khas kota ini.'],
      ['旅行の最後に、地元の名物をお土産に買った。', 'りょこうのさいごに、じもとのめいぶつをおみやげにかった。', 'Di akhir perjalanan, saya membeli produk khas setempat sebagai oleh-oleh.']
    ]
  },
  {
    word: '気候', reading: 'きこう', meaning: 'iklim',
    explanation: 'Pola keadaan cuaca dalam jangka waktu panjang di suatu wilayah, termasuk suhu, hujan, dan kelembapan.',
    nuance: 'Berbeda dari 天気 yang merujuk pada keadaan cuaca dalam waktu singkat. 気候変動 berarti perubahan iklim.', contexts: ['Geografi', 'Ilmu pengetahuan', 'Percakapan'], examples: [
      ['この地域は一年を通して温暖な気候だ。', 'このちいきはいちねんをとおしておんだんなきこうだ。', 'Wilayah ini memiliki iklim hangat sepanjang tahun.'],
      ['気候の変化は農業に大きな影響を与える。', 'きこうのへんかはのうぎょうにおおきなえいきょうをあたえる。', 'Perubahan iklim memberikan dampak besar terhadap pertanian.']
    ]
  },
  {
    word: '慣習', reading: 'かんしゅう', meaning: 'kebiasaan yang berlaku dalam masyarakat atau kelompok',
    explanation: 'Cara bertindak yang telah lama dilakukan dan diterima sebagai kebiasaan dalam suatu komunitas.',
    nuance: 'Lebih formal daripada 習慣 dan sering merujuk pada kebiasaan sosial atau tradisi yang diterima bersama.', contexts: ['Budaya', 'Sosial', 'Sejarah'], examples: [
      ['地域ごとに異なる慣習が残っている。', 'ちいきごとにことなるかんしゅうがのこっている。', 'Kebiasaan yang berbeda-beda masih bertahan di setiap daerah.'],
      ['新しい制度は古い慣習を見直すきっかけになった。', 'あたらしいせいどはふるいかんしゅうをみなおすきっかけになった。', 'Sistem baru menjadi kesempatan untuk meninjau kembali kebiasaan lama.']
    ]
  },
  {
    word: '歴史', reading: 'れきし', meaning: 'sejarah',
    explanation: 'Rangkaian peristiwa dan perubahan yang terjadi pada masa lampau, baik mengenai masyarakat, negara, maupun individu.',
    nuance: 'Dapat merujuk pada sejarah suatu bangsa atau riwayat perkembangan sebuah benda dan organisasi, seperti 会社の歴史.', contexts: ['Sejarah', 'Akademik', 'Budaya'], examples: [
      ['この城には長い歴史がある。', 'このしろにはながいれきしがある。', 'Kastel ini memiliki sejarah yang panjang.'],
      ['地域の歴史を若い世代に伝える活動をしている。', 'ちいきのれきしをわかいせだいにつたえるかつどうをしている。', 'Kami melakukan kegiatan untuk mewariskan sejarah daerah kepada generasi muda.']
    ]
  },
  {
    word: '諭す', reading: 'さとす', meaning: 'menasihati dengan bijaksana; menyadarkan',
    explanation: 'Menjelaskan kesalahan atau keadaan kepada seseorang dengan tenang agar ia memahami dan memperbaiki sikapnya.',
    nuance: 'Lebih lembut dan mendidik daripada 叱る. Menekankan usaha membuat orang mengerti, bukan sekadar memarahi.', contexts: ['Pendidikan', 'Kehidupan sosial', 'Formal'], examples: [
      ['先生は生徒に、相手の立場を考えるよう諭した。', 'せんせいはせいとに、あいてのたちばをかんがえるようさとした。', 'Guru menasihati siswa agar mempertimbangkan posisi orang lain.'],
      ['父は感情的にならず、私の誤りを静かに諭した。', 'ちちはかんじょうてきにならず、わたしのあやまりをしずかにさとした。', 'Ayah dengan tenang menunjukkan kesalahan saya tanpa terbawa emosi.']
    ]
  },
  {
    word: 'あやす', reading: 'あやす', meaning: 'menenangkan atau menghibur bayi/anak kecil',
    explanation: 'Melakukan gerakan, suara, atau tindakan lembut untuk membuat bayi atau anak kecil berhenti menangis dan merasa nyaman.',
    nuance: 'Kata sehari-hari yang khususnya digunakan untuk bayi dan anak kecil. Tidak sama dengan 慰める yang digunakan untuk menghibur orang secara umum.', contexts: ['Keluarga', 'Kehidupan sehari-hari'], examples: [
      ['母親は泣いている赤ちゃんを優しくあやした。', 'ははおやはないているあかちゃんをやさしくあやした。', 'Ibu dengan lembut menenangkan bayi yang sedang menangis.'],
      ['祖父は歌を歌って孫をあやしていた。', 'そふはうたをうたってまごをあやしていた。', 'Kakek menghibur cucunya dengan menyanyikan lagu.']
    ]
  },
  {
    word: '正す', reading: 'ただす', meaning: 'memperbaiki; membetulkan; meluruskan',
    explanation: 'Mengubah sesuatu yang salah, tidak tepat, atau tidak teratur menjadi benar dan semestinya.',
    nuance: 'Sering digunakan untuk 姿勢を正す, 誤りを正す, dan 姿勢・態度を正す. Lebih formal daripada 直す dalam beberapa konteks.', contexts: ['Pendidikan', 'Pekerjaan', 'Kehidupan sosial'], examples: [
      ['先生は学生の発音の誤りを正した。', 'せんせいはがくせいのはつおんのあやまりをただした。', 'Guru memperbaiki kesalahan pelafalan siswa.'],
      ['会議の前に姿勢を正して席に着いた。', 'かいぎのまえにしせいをただしてせきについた。', 'Sebelum rapat, saya membetulkan postur lalu duduk di tempat.']
    ]
  },
  {
    word: '癒やす', reading: 'いやす', meaning: 'menyembuhkan; menenangkan; memulihkan perasaan',
    explanation: 'Mengurangi rasa sakit, kelelahan, atau tekanan emosional sehingga seseorang merasa lebih baik.',
    nuance: 'Sering digunakan secara fisik maupun emosional: 心を癒やす, 疲れを癒やす. Bernuansa lembut dan positif.', contexts: ['Kesehatan', 'Kehidupan sehari-hari', 'Sastra'], examples: [
      ['休日は自然の中で心を癒やしたい。', 'きゅうじつはしぜんのなかでこころをいやしたい。', 'Pada hari libur, saya ingin menenangkan hati di tengah alam.'],
      ['温泉に入って、仕事の疲れを癒やした。', 'おんせんにはいって、しごとのつかれをいやした。', 'Saya berendam di pemandian air panas untuk memulihkan kelelahan akibat pekerjaan.']
    ]
  },
  {
    word: '清らか', reading: 'きよらか', meaning: 'bersih; murni; suci',
    explanation: 'Menggambarkan keadaan yang bersih secara fisik atau murni secara batin, tanpa kesan kotor maupun tercela.',
    nuance: 'Bernuansa positif dan agak puitis. Dapat digunakan untuk air, hati, suara, atau suasana.', contexts: ['Sastra', 'Deskripsi', 'Budaya'], examples: [
      ['山から清らかな水が流れてくる。', 'やまからきよらかなみずがながれてくる。', 'Air yang jernih mengalir dari gunung.'],
      ['彼女の清らかな心に多くの人が感動した。', 'かのじょのきよらかなこころにおおくのひとがかんどうした。', 'Banyak orang tersentuh oleh hati murninya.']
    ]
  },
  {
    word: '朗らか', reading: 'ほがらか', meaning: 'ceria; riang; berwatak terbuka',
    explanation: 'Menggambarkan suasana hati, kepribadian, atau suara yang cerah, ramah, dan menyenangkan.',
    nuance: 'Biasanya positif, terutama untuk sifat seseorang: 朗らかな人. Tidak sekadar tertawa sesaat, tetapi menunjukkan keceriaan yang terasa.', contexts: ['Kehidupan sosial', 'Deskripsi orang', 'Sastra'], examples: [
      ['彼女はいつも朗らかな笑顔で挨拶する。', 'かのじょはいつもほがらかなえがおであいさつする。', 'Ia selalu menyapa dengan senyum ceria.'],
      ['朗らかな性格のおかげで、彼は皆に好かれている。', 'ほがらかなせいかくのおかげで、かれはみんなにすかれている。', 'Berkat kepribadiannya yang ceria, ia disukai semua orang.']
    ]
  },
  {
    word: '柔らか', reading: 'やわらか', meaning: 'lembut; lunak; tidak keras',
    explanation: 'Menggambarkan tekstur, sikap, ekspresi, atau cara berpikir yang tidak keras dan terasa lembut.',
    nuance: 'Dalam tulisan sehari-hari sering muncul sebagai 柔らかい. Dapat berarti kelembutan fisik maupun sikap atau suasana yang tidak kaku.', contexts: ['Percakapan', 'Deskripsi', 'Kehidupan sehari-hari'], examples: [
      ['このパンは柔らかくて、とても食べやすい。', 'このぱんはやわらかくて、とてもたべやすい。', 'Roti ini lembut dan sangat mudah dimakan.'],
      ['彼は柔らかな表情で子どもに話しかけた。', 'かれはやわらかなひょうじょうでこどもにはなしかけた。', 'Ia berbicara kepada anak itu dengan ekspresi lembut.']
    ]
  },
  {
    word: '滑らか', reading: 'なめらか', meaning: 'halus; licin; lancar',
    explanation: 'Menggambarkan permukaan yang tidak kasar, gerakan yang mulus, atau pembicaraan yang mengalir tanpa tersendat.',
    nuance: 'Dapat bersifat fisik maupun abstrak: 滑らかな肌, 滑らかな動き, 滑らかに話す. Lebih luas daripada “licin”.', contexts: ['Deskripsi', 'Pekerjaan', 'Percakapan'], examples: [
      ['この石は表面が滑らかで、手触りがよい。', 'このいしはひょうめんがなめらかで、てざわりがよい。', 'Permukaan batu ini halus dan terasa nyaman disentuh.'],
      ['彼女は外国語でも滑らかに話す。', 'かのじょはがいこくごでもなめらかにはなす。', 'Ia berbicara dengan lancar bahkan dalam bahasa asing.']
    ]
  },
  {
    word: '自制', reading: 'じせい', meaning: 'pengendalian diri',
    explanation: 'Mengendalikan emosi, keinginan, atau tindakan agar tidak berlebihan dan tetap sesuai keadaan.',
    nuance: 'Cenderung formal. 自制心 berarti kemampuan untuk mengendalikan diri; 自制する berarti menahan dorongan diri.', contexts: ['Pendidikan', 'Kehidupan sosial', 'Formal'], examples: [
      ['怒りを感じても、自制して冷静に話した。', 'いかりをかんじても、じせいしてれいせいにはなした。', 'Meskipun merasa marah, saya mengendalikan diri dan berbicara dengan tenang.'],
      ['自由な環境でも、ある程度の自制が必要だ。', 'じゆうなかんきょうでも、あるていどのじせいがひつようだ。', 'Bahkan dalam lingkungan yang bebas, pengendalian diri tetap diperlukan.']
    ]
  },
  {
    word: '自立', reading: 'じりつ', meaning: 'kemandirian; berdiri sendiri',
    explanation: 'Kemampuan untuk mengurus kehidupan atau menjalankan tugas tanpa selalu bergantung pada bantuan orang lain.',
    nuance: 'Sering digunakan untuk kemandirian ekonomi, sosial, dan kehidupan. Berbeda dari 自律 yang menekankan kemampuan mengatur diri menurut aturan atau prinsip.', contexts: ['Pendidikan', 'Kehidupan sosial', 'Pekerjaan'], examples: [
      ['大学卒業後、経済的な自立を目指している。', 'だいがくそつぎょうご、けいざいてきなじりつをめざしている。', 'Setelah lulus kuliah, saya berusaha mencapai kemandirian finansial.'],
      ['子どもが自立できるように、親は少しずつ任せていく。', 'こどもがじりつできるように、おやはすこしずつまかせていく。', 'Agar anak dapat mandiri, orang tua secara bertahap memberinya tanggung jawab.']
    ]
  },
  {
    word: '自重', reading: 'じちょう', meaning: 'menahan diri; bertindak hati-hati; (juga) berat benda sendiri',
    explanation: 'Dalam penggunaan umum, berarti mengendalikan tindakan dan tidak bertindak ceroboh. Dalam teknik, dapat berarti berat suatu benda itu sendiri.',
    nuance: '自重する sering berarti menjaga perilaku atau menahan tindakan. Makna “berat sendiri” muncul dalam konteks teknik dan fisika.', contexts: ['Formal', 'Kehidupan sosial', 'Teknik'], examples: [
      ['立場を考えて、発言には自重してください。', 'たちばをかんがえて、はつげんにはじちょうしてください。', 'Mengingat posisi Anda, mohon berhati-hati dalam berbicara.'],
      ['橋の設計では、構造物の自重も計算に入れる。', 'はしのせっけいでは、こうぞうぶつのじちょうもけいさんにいれる。', 'Dalam desain jembatan, berat struktur itu sendiri juga diperhitungkan.']
    ]
  },
  {
    word: '自任', reading: 'じにん', meaning: 'menganggap diri sendiri sebagai; merasa bertanggung jawab sebagai',
    explanation: 'Menganggap diri memiliki peran, kemampuan, atau tanggung jawab tertentu dan bertindak berdasarkan keyakinan tersebut.',
    nuance: 'Sering muncul dalam pola 〜を自任する. Dapat bernada netral atau sedikit menyindir jika seseorang terlalu menganggap dirinya penting.', contexts: ['Tulisan formal', 'Sosial', 'Pekerjaan'], examples: [
      ['彼は地域のまとめ役を自任している。', 'かれはちいきのまとめやくをじにんしている。', 'Ia menganggap dirinya sebagai penggerak atau koordinator masyarakat setempat.'],
      ['専門家を自任するなら、発言に責任を持つべきだ。', 'せんもんかをじにんするなら、はつげんにせきにんをもつべきだ。', 'Jika menganggap diri sebagai ahli, seseorang harus bertanggung jawab atas ucapannya.']
    ]
  },
  {
    word: '返上', reading: 'へんじょう', meaning: 'mengembalikan atau melepaskan hak, gelar, jabatan',
    explanation: 'Mengembalikan sesuatu yang dimiliki atau melepaskan status dan hak yang sebelumnya dipegang.',
    nuance: 'Sering digunakan dalam 肩書きを返上する atau 王座を返上する. Menunjukkan pelepasan status, kadang sebagai bentuk tanggung jawab.', contexts: ['Berita', 'Olahraga', 'Formal'], examples: [
      ['彼は責任を取って委員長の職を返上した。', 'かれはせきにんをとっていいんちょうのしょくをへんじょうした。', 'Ia melepaskan jabatan ketua komite sebagai bentuk tanggung jawab.'],
      ['選手はけがのため、王座を返上することになった。', 'せんしゅはけがのため、おうざをへんじょうすることになった。', 'Atlet itu akhirnya harus melepaskan gelarnya karena cedera.']
    ]
  },
  {
    word: '還元', reading: 'かんげん', meaning: 'pengembalian manfaat; penyaluran kembali; reduksi (kimia)',
    explanation: 'Mengembalikan hasil atau keuntungan kepada pihak yang terkait, atau dalam ilmu kimia berarti proses reduksi.',
    nuance: 'Dalam bisnis, sering muncul sebagai 利益を還元する. Dalam kimia, merupakan istilah teknis yang berpasangan dengan 酸化.', contexts: ['Bisnis', 'Ekonomi', 'Ilmu pengetahuan'], examples: [
      ['会社は利益の一部を地域社会に還元している。', 'かいしゃはりえきのいちぶをちいきしゃかいにかんげんしている。', 'Perusahaan menyalurkan kembali sebagian keuntungannya kepada masyarakat setempat.'],
      ['この反応では、金属の酸化物が還元される。', 'このはんのうでは、きんぞくのさんかぶつがかんげんされる。', 'Dalam reaksi ini, oksida logam mengalami reduksi.']
    ]
  },
  {
    word: '配給', reading: 'はいきゅう', meaning: 'pembagian atau penyaluran barang kepada masyarakat',
    explanation: 'Mendistribusikan barang atau kebutuhan kepada orang-orang atau kelompok sesuai jumlah dan aturan tertentu.',
    nuance: 'Sering berkaitan dengan masa kekurangan barang, keadaan darurat, atau distribusi yang diatur. Dalam perfilman lama, 配給 juga berarti distribusi film.', contexts: ['Sejarah', 'Berita', 'Administrasi'], examples: [
      ['災害の被災地で水と食料が配給された。', 'さいがいのひさいちでみずとしょくりょうがはいきゅうされた。', 'Air dan makanan dibagikan di daerah yang terdampak bencana.'],
      ['戦時中は生活必需品の配給が行われていた。', 'せんじちゅうはせいかつひつじゅひんのはいきゅうがおこなわれていた。', 'Selama masa perang, kebutuhan pokok didistribusikan melalui sistem pembagian.']
    ]
  },
  {
    word: '譲渡', reading: 'じょうと', meaning: 'pengalihan atau penyerahan hak/kepemilikan',
    explanation: 'Memindahkan hak, kepemilikan, atau barang dari satu pihak kepada pihak lain secara resmi atau berdasarkan kesepakatan.',
    nuance: 'Istilah formal dalam hukum, bisnis, dan administrasi. 譲る lebih umum dalam percakapan, sedangkan 譲渡 menekankan proses pengalihan.', contexts: ['Hukum', 'Bisnis', 'Administrasi'], examples: [
      ['株式を別の会社に譲渡する契約を結んだ。', 'かぶしきをべつのかいしゃにじょうとするけいやくをむすんだ。', 'Kami membuat kontrak untuk mengalihkan saham kepada perusahaan lain.'],
      ['チケットの譲渡には本人確認が必要です。', 'ちけっとのじょうとにはほんにんかくにんがひつようです。', 'Pengalihan tiket memerlukan verifikasi identitas pemilik.']
    ]
  },
  {
    word: 'びっしょり', reading: 'びっしょり', meaning: 'basah kuyup; sangat basah',
    explanation: 'Menggambarkan keadaan pakaian, tubuh, atau benda yang basah secara menyeluruh karena air atau keringat.',
    nuance: 'Ungkapan mimetik yang umum dalam percakapan. Sering digunakan bersama 汗 atau 雨: 汗でびっしょり.', contexts: ['Percakapan sehari-hari', 'Kesehatan', 'Deskripsi'], examples: [
      ['雨の中を歩いて、服がびっしょりになった。', 'あめのなかをあるいて、ふくがびっしょりになった。', 'Saya berjalan di tengah hujan hingga pakaian basah kuyup.'],
      ['暑い日に運動したので、シャツが汗でびっしょりだ。', 'あついひにうんどうしたので、しゃつがあせでびっしょりだ。', 'Karena berolahraga pada hari yang panas, kemeja saya basah kuyup oleh keringat.']
    ]
  },
  {
    word: 'どっさり', reading: 'どっさり', meaning: 'dalam jumlah sangat banyak; bertumpuk-tumpuk',
    explanation: 'Menunjukkan bahwa sesuatu tersedia atau terkumpul dalam jumlah besar, sering kali lebih banyak dari yang diperkirakan.',
    nuance: 'Ungkapan kasual dan ekspresif. Umum untuk barang, pekerjaan, hadiah, atau hasil panen.', contexts: ['Percakapan', 'Kehidupan sehari-hari', 'Pekerjaan'], examples: [
      ['親戚から野菜がどっさり届いた。', 'しんせきからやさいがどっさりとどいた。', 'Sayuran datang dalam jumlah sangat banyak dari kerabat.'],
      ['休み明けには机の上に書類がどっさり積まれていた。', 'やすみあけにはつくえのうえにしょるいがどっさりつまれていた。', 'Setelah libur, banyak sekali dokumen menumpuk di atas meja.']
    ]
  },
  {
    word: 'どんより', reading: 'どんより', meaning: 'suram; mendung; terasa berat atau muram',
    explanation: 'Menggambarkan langit yang gelap dan mendung, atau suasana hati dan keadaan yang terasa muram.',
    nuance: 'Sering digunakan dalam どんよりした空 dan どんよりした気分. Memberi kesan berat, gelap, atau kurang cerah.', contexts: ['Cuaca', 'Percakapan', 'Sastra'], examples: [
      ['朝から空がどんより曇っている。', 'あさからそらがどんよりくもっている。', 'Sejak pagi langit mendung dan suram.'],
      ['心配事があり、彼の表情はどんよりしていた。', 'しんぱいごとがあり、かれのひょうじょうはどんよりしていた。', 'Karena memiliki sesuatu yang dikhawatirkan, ekspresinya tampak muram.']
    ]
  },
  {
    word: 'ぐったり', reading: 'ぐったり', meaning: 'sangat lemas; kehabisan tenaga',
    explanation: 'Menggambarkan keadaan tubuh atau seseorang yang kehilangan tenaga karena kelelahan, sakit, atau panas.',
    nuance: 'Lebih menekankan kondisi lemas dan tidak bertenaga daripada sekadar lelah. Sering digunakan dengan ぐったりする atau ぐったりした様子.', contexts: ['Kesehatan', 'Kehidupan sehari-hari', 'Deskripsi'], examples: [
      ['長時間の作業で、彼は椅子に座ってぐったりしていた。', 'ちょうじかんのさぎょうで、かれはいすにすわってぐったりしていた。', 'Setelah bekerja lama, ia duduk di kursi dalam keadaan sangat lemas.'],
      ['暑さで花がぐったりしている。', 'あつさではながぐったりしている。', 'Bunga-bunga tampak layu karena panas.']
    ]
  },
  {
    word: 'ノイズ', reading: 'のいず', meaning: 'gangguan suara; derau; unsur yang mengganggu sinyal',
    explanation: 'Suara atau sinyal yang tidak diinginkan dan mengganggu, atau informasi tambahan yang mengaburkan hal utama.',
    nuance: 'Kata serapan yang sering digunakan dalam audio, komunikasi, teknologi, dan analisis data. Makna kiasannya adalah gangguan yang mengurangi kejelasan.', contexts: ['Teknologi', 'Komunikasi', 'Audio'], examples: [
      ['録音にノイズが入って、声が聞き取りにくい。', 'ろくおんにのいずがはいって、こえがききとりにくい。', 'Ada derau dalam rekaman sehingga suara sulit didengar.'],
      ['不要な情報を除くことで、データのノイズを減らせる。', 'ふようなじょうほうをのぞくことで、でーたののいずをへらせる。', 'Dengan menghilangkan informasi yang tidak diperlukan, gangguan pada data dapat dikurangi.']
    ]
  },
  {
    word: 'ロック', reading: 'ろっく', meaning: 'kunci/penguncian; musik rock',
    explanation: 'Kata serapan yang dapat berarti mekanisme mengunci atau mengamankan sesuatu, dan juga genre musik rock.',
    nuance: 'Maknanya ditentukan konteks: 画面をロックする (mengunci layar), ロック音楽 (musik rock).', contexts: ['Teknologi', 'Musik', 'Kehidupan sehari-hari'], examples: [
      ['席を離れるときは、必ず画面をロックしてください。', 'せきをはなれるときは、かならずがめんをろっくしてください。', 'Saat meninggalkan tempat duduk, pastikan untuk mengunci layar.'],
      ['父は若い頃からロックをよく聴いている。', 'ちちはわかいころからろっくをよくきいている。', 'Ayah sering mendengarkan musik rock sejak muda.']
    ]
  },
  {
    word: 'タブー', reading: 'たぶー', meaning: 'pantangan; hal yang dianggap terlarang untuk dibicarakan atau dilakukan',
    explanation: 'Hal yang secara sosial, budaya, atau agama dianggap tidak boleh dilakukan atau dibicarakan.',
    nuance: 'Kata serapan yang umum dalam media dan diskusi sosial. タブー視する berarti menganggap sesuatu sebagai pantangan.', contexts: ['Budaya', 'Sosial', 'Media'], examples: [
      ['その地域では、食べ物を粗末にすることはタブーとされている。', 'そのちいきでは、たべものをそまつにすることはたぶーとされている。', 'Di daerah itu, menyia-nyiakan makanan dianggap sebagai pantangan.'],
      ['会議では長い間、賃金の話題がタブーになっていた。', 'かいぎではながいあいだ、ちんぎんのわだいがたぶーになっていた。', 'Selama ini, topik upah menjadi hal yang tabu dalam rapat.']
    ]
  },
  {
    word: 'ネック', reading: 'ねっく', meaning: 'hambatan utama; titik lemah; kendala',
    explanation: 'Bagian atau masalah yang menghalangi kemajuan dan menjadi penyebab utama suatu rencana sulit berjalan.',
    nuance: 'Kata serapan dari “neck”, digunakan secara kiasan dalam bisnis dan percakapan. 人手不足がネックだ berarti kekurangan tenaga menjadi kendala utama.', contexts: ['Bisnis', 'Pekerjaan', 'Percakapan'], examples: [
      ['費用の高さが新しい計画のネックになっている。', 'ひようのたかさがあたらしいけいかくのねっくになっている。', 'Tingginya biaya menjadi kendala utama rencana baru itu.'],
      ['技術は十分だが、時間が足りないことがネックだ。', 'ぎじゅつはじゅうぶんだが、じかんがたりないことがねっくだ。', 'Teknologinya sudah memadai, tetapi kekurangan waktu menjadi hambatan.']
    ]
  },
  {
    word: '発散', reading: 'はっさん', meaning: 'pelepasan; penyebaran; pelampiasan',
    explanation: 'Menyebarkan sesuatu ke berbagai arah atau melepaskan energi, perasaan, dan tekanan yang terkumpul.',
    nuance: 'Sering muncul dalam ストレスを発散する (melampiaskan stres) dan 熱が発散する (panas menyebar). Makna teknisnya juga ada dalam matematika.', contexts: ['Kehidupan sehari-hari', 'Ilmu pengetahuan', 'Kesehatan'], examples: [
      ['運動をしてストレスを発散した。', 'うんどうをしてすとれすをはっさんした。', 'Saya berolahraga untuk melepaskan stres.'],
      ['熱を効率よく発散させる仕組みが必要だ。', 'ねつをこうりつよくはっさんさせるしくみがひつようだ。', 'Diperlukan mekanisme untuk menyebarkan panas secara efisien.']
    ]
  },
  {
    word: '発射', reading: 'はっしゃ', meaning: 'peluncuran atau pelepasan proyektil/sinyal',
    explanation: 'Melepaskan atau meluncurkan sesuatu seperti roket, sinyal, atau benda yang ditembakkan dari suatu alat.',
    nuance: 'Digunakan dalam berita dan konteks teknis. Untuk penggunaan umum, sering muncul dalam ロケットを発射する atau 信号弾を発射する.', contexts: ['Berita', 'Teknologi', 'Ilmu pengetahuan'], examples: [
      ['ロケットは予定時刻に発射された。', 'ろけっとはよていじこくにはっしゃされた。', 'Roket diluncurkan pada waktu yang dijadwalkan.'],
      ['大会の開始を知らせる合図が発射された。', 'たいかいのかいしをしらせるあいずがはっしゃされた。', 'Sinyal yang menandakan dimulainya perlombaan dilepaskan.']
    ]
  },
  {
    word: '流出', reading: 'りゅうしゅつ', meaning: 'kebocoran; keluarnya sesuatu dari tempat asal',
    explanation: 'Mengalir atau keluarnya cairan, informasi, uang, atau sumber daya dari tempat yang seharusnya menampungnya.',
    nuance: 'Sering bernuansa negatif dalam berita: 個人情報の流出 (kebocoran data pribadi), 資金の流出 (keluarnya dana).', contexts: ['Berita', 'Teknologi', 'Lingkungan'], examples: [
      ['会社から顧客情報が流出した。', 'かいしゃからこきゃくじょうほうがりゅうしゅつした。', 'Informasi pelanggan bocor dari perusahaan.'],
      ['工場から油が川に流出する事故が起きた。', 'こうじょうからあぶらがかわにりゅうしゅつするじこがおきた。', 'Terjadi kecelakaan yang menyebabkan minyak dari pabrik mengalir ke sungai.']
    ]
  },
  {
    word: '排出', reading: 'はいしゅつ', meaning: 'pengeluaran atau pelepasan zat dari suatu sumber',
    explanation: 'Mengeluarkan gas, limbah, zat, atau bahan dari tubuh, mesin, maupun sistem ke lingkungan luar.',
    nuance: 'Sering digunakan dalam istilah lingkungan dan kesehatan, seperti 二酸化炭素を排出する dan 老廃物を排出する.', contexts: ['Lingkungan', 'Kesehatan', 'Ilmu pengetahuan'], examples: [
      ['工場は二酸化炭素の排出量を減らす努力をしている。', 'こうじょうはにさんかたんそのはいしゅつりょうをへらすどりょくをしている。', 'Pabrik berupaya mengurangi jumlah emisi karbon dioksida.'],
      ['運動すると、体内の不要な物質の排出が促される。', 'うんどうすると、たいないのふようなぶっしつのはいしゅつがうながされる。', 'Berolahraga membantu proses pengeluaran zat yang tidak diperlukan dari tubuh.']
    ]
  },
  {
    word: '紛らわしい', reading: 'まぎらわしい', meaning: 'membingungkan; mudah tertukar',
    explanation: 'Menggambarkan dua hal yang mirip sehingga sulit dibedakan atau mudah disalahpahami.',
    nuance: 'Sering digunakan untuk nama, bentuk, penampilan, dan penjelasan. 紛らわしい表現 berarti ungkapan yang berpotensi menimbulkan salah paham.', contexts: ['Pendidikan', 'Komunikasi', 'Kehidupan sehari-hari'], examples: [
      ['この二つの漢字は形が似ていて紛らわしい。', 'このふたつのかんじはかたちがにていてまぎらわしい。', 'Kedua kanji ini bentuknya mirip sehingga mudah tertukar.'],
      ['誤解を招く紛らわしい表現は避けたほうがよい。', 'ごかいをまねくまぎらわしいひょうげんはさけたほうがよい。', 'Sebaiknya hindari ungkapan membingungkan yang dapat menimbulkan kesalahpahaman.']
    ]
  },
  {
    word: '尤もらしい', reading: 'もっともらしい', meaning: 'tampak masuk akal; terdengar meyakinkan',
    explanation: 'Menggambarkan alasan, penjelasan, atau sikap yang terlihat benar dan masuk akal, meskipun belum tentu sesuai kenyataan.',
    nuance: 'Dapat bernada skeptis atau menyindir. Menunjukkan kesan meyakinkan di permukaan, bukan jaminan bahwa isinya benar.', contexts: ['Diskusi', 'Berita', 'Sastra'], examples: [
      ['彼は尤もらしい理由を並べて欠席を正当化した。', 'かれはもっともらしいりゆうをならべてけっせきをせいとうかした。', 'Ia mengemukakan alasan yang tampak masuk akal untuk membenarkan ketidakhadirannya.'],
      ['その説明は尤もらしく聞こえるが、証拠が足りない。', 'そのせつめいはもっともらしくきこえるが、しょうこがたりない。', 'Penjelasan itu terdengar meyakinkan, tetapi buktinya tidak cukup.']
    ]
  },
  {
    word: '図々しい', reading: 'ずうずうしい', meaning: 'tidak tahu malu; terlalu berani mengambil keuntungan',
    explanation: 'Menggambarkan orang yang bertindak tanpa rasa sungkan atau malu, meskipun tindakannya merepotkan orang lain.',
    nuance: 'Bernada negatif dan kasual. Sering digunakan ketika seseorang meminta atau melakukan sesuatu secara berlebihan tanpa mempertimbangkan orang lain.', contexts: ['Percakapan', 'Kehidupan sosial'], examples: [
      ['何度も無料で頼むなんて、図々しいと思う。', 'なんどもむりょうでたのむなんて、ずうずうしいとおもう。', 'Meminta gratis berkali-kali menurut saya tidak tahu malu.'],
      ['彼は図々しくも会議に遅れてきて、謝りもしなかった。', 'かれはずうずうしくもかいぎにおくれてきて、あやまりもしなかった。', 'Dengan tidak tahu malu, ia datang terlambat ke rapat dan bahkan tidak meminta maaf.']
    ]
  },
  {
    word: '馴れ馴れしい', reading: 'なれなれしい', meaning: 'terlalu akrab; terlalu akrab tanpa kesopanan',
    explanation: 'Menggambarkan sikap seseorang yang bersikap akrab secara berlebihan kepada orang yang belum cukup dekat dengannya.',
    nuance: 'Bernada negatif dan sering berkaitan dengan jarak sosial atau tingkat kesopanan. Berbeda dari 親しみやすい yang positif.', contexts: ['Kehidupan sosial', 'Percakapan', 'Pekerjaan'], examples: [
      ['初対面なのに、彼の話し方は少し馴れ馴れしい。', 'しょたいめんなのに、かれのはなしかたはすこしなれなれしい。', 'Padahal baru pertama bertemu, cara bicaranya sedikit terlalu akrab.'],
      ['相手との関係を考えずに馴れ馴れしく接するのは失礼だ。', 'あいてとのかんけいをかんがえずになれなれしくせっするのはしつれいだ。', 'Bersikap terlalu akrab tanpa mempertimbangkan hubungan dengan lawan bicara merupakan tindakan tidak sopan.']
    ]
  },
  {
    word: '行き詰まる', reading: 'いきづまる', meaning: 'menemui jalan buntu; tidak dapat melanjutkan',
    explanation: 'Mengalami keadaan ketika pekerjaan, rencana, atau pembicaraan tidak dapat bergerak maju karena hambatan.',
    nuance: 'Sering digunakan secara kiasan untuk proyek, negosiasi, penelitian, atau pemikiran. 行き詰まり berarti kebuntuan.', contexts: ['Pekerjaan', 'Bisnis', 'Akademik'], examples: [
      ['交渉が行き詰まり、解決の見通しが立たない。', 'こうしょうがいきづまり、かいけつのみとおしがたたない。', 'Negosiasi menemui jalan buntu dan belum terlihat prospek penyelesaiannya.'],
      ['研究が行き詰まったときは、別の視点から考えてみる。', 'けんきゅうがいきづまったときは、べつのしてんからかんがえてみる。', 'Saat penelitian menemui jalan buntu, cobalah memikirkannya dari sudut pandang lain.']
    ]
  },
  {
    word: '行き交う', reading: 'いきかう', meaning: 'berlalu-lalang; saling berjalan atau bergerak melewati',
    explanation: 'Banyak orang atau kendaraan bergerak bolak-balik melewati tempat yang sama.',
    nuance: 'Sering digunakan untuk menggambarkan keramaian jalan, stasiun, atau tempat umum. Memiliki gambaran gerakan dua arah.', contexts: ['Deskripsi', 'Kehidupan sehari-hari', 'Sastra'], examples: [
      ['駅前では多くの人が行き交っている。', 'えきまえではおおくのひとがいきかっている。', 'Banyak orang berlalu-lalang di depan stasiun.'],
      ['車が行き交う大通りを渡るときは注意が必要だ。', 'くるまがいきかうおおどおりをわたるときはちゅういがひつようだ。', 'Kita harus berhati-hati saat menyeberangi jalan besar yang dipenuhi kendaraan berlalu-lalang.']
    ]
  },
  {
    word: '行き着く', reading: 'いきつく', meaning: 'akhirnya sampai; mencapai tujuan atau kesimpulan',
    explanation: 'Tiba di suatu tempat setelah perjalanan, atau mencapai hasil dan kesimpulan setelah melalui proses panjang.',
    nuance: 'Dapat digunakan secara fisik maupun abstrak. 行き着くところ berarti hasil atau titik akhir yang akhirnya dicapai.', contexts: ['Percakapan', 'Akademik', 'Sastra'], examples: [
      ['道に迷ったが、ようやく目的地に行き着いた。', 'みちにまよったが、ようやくもくてきちにいきついた。', 'Saya tersesat, tetapi akhirnya berhasil sampai di tujuan.'],
      ['議論を重ねた結果、一つの結論に行き着いた。', 'ぎろんをかさねたけっか、ひとつのけつろんにいきついた。', 'Setelah berulang kali berdiskusi, kami akhirnya mencapai satu kesimpulan.']
    ]
  },
  {
    word: '行き届く', reading: 'いきとどく', meaning: 'terlaksana dengan teliti; diperhatikan sampai detail',
    explanation: 'Menunjukkan bahwa perhatian, persiapan, atau pelayanan mencakup bagian-bagian kecil sehingga tidak ada yang terabaikan.',
    nuance: 'Sering dipakai sebagai 行き届いたサービス atau 配慮が行き届く. Biasanya bernilai positif untuk perhatian dan pelayanan.', contexts: ['Bisnis', 'Layanan', 'Kehidupan sosial'], examples: [
      ['このホテルは細かいところまでサービスが行き届いている。', 'このほてるはこまかいところまでさーびすがいきとどいている。', 'Pelayanan hotel ini diperhatikan dengan baik hingga ke detail kecil.'],
      ['安全管理が行き届くように、定期的に点検している。', 'あんぜんかんりがいきとどくように、ていきてきにてんけんしている。', 'Pemeriksaan rutin dilakukan agar pengelolaan keselamatan terlaksana dengan menyeluruh.']
    ]
  },
  {
    word: '期待', reading: 'きたい', meaning: 'harapan; ekspektasi',
    explanation: 'Perasaan atau perkiraan bahwa seseorang atau sesuatu akan memberikan hasil yang baik atau memenuhi keinginan.',
    nuance: 'Dapat digunakan untuk harapan pribadi maupun ekspektasi terhadap hasil. 期待に応える berarti memenuhi harapan.', contexts: ['Kehidupan sosial', 'Pekerjaan', 'Pendidikan'], examples: [
      ['新しい店のサービスに期待している。', 'あたらしいみせのさーびすにきたいしている。', 'Saya menaruh harapan pada pelayanan toko baru itu.'],
      ['周囲の期待に応えられるよう努力したい。', 'しゅういのきたいにこたえられるようどりょくしたい。', 'Saya ingin berusaha agar dapat memenuhi harapan orang-orang di sekitar.']
    ]
  },
  {
    word: '予想', reading: 'よそう', meaning: 'prediksi; perkiraan tentang sesuatu yang akan terjadi',
    explanation: 'Memperkirakan hasil atau keadaan berdasarkan informasi, pengalaman, atau keadaan yang diketahui.',
    nuance: 'Lebih bersifat perkiraan daripada harapan. 予想する dapat dipakai untuk cuaca, hasil pertandingan, penjualan, dan kejadian.', contexts: ['Berita', 'Ekonomi', 'Kehidupan sehari-hari'], examples: [
      ['専門家は来年の景気を予想した。', 'せんもんかはらいねんのけいきをよそうした。', 'Para ahli memperkirakan kondisi ekonomi tahun depan.'],
      ['結果は私の予想とは大きく違っていた。', 'けっかはわたしのよそうとはおおきくちがっていた。', 'Hasilnya sangat berbeda dari perkiraan saya.']
    ]
  },
  {
    word: '重視', reading: 'じゅうし', meaning: 'mengutamakan; memberi perhatian atau bobot besar',
    explanation: 'Menganggap suatu hal sangat penting dan menjadikannya salah satu dasar dalam mengambil keputusan.',
    nuance: 'Sering muncul dalam pola 〜を重視する. Lebih formal daripada 大切にする dan umum dalam kebijakan serta bisnis.', contexts: ['Bisnis', 'Pendidikan', 'Berita'], examples: [
      ['この会社は社員の能力よりも協調性を重視する。', 'このかいしゃはしゃいんののうりょくよりもちょうわせいをじゅうしする。', 'Perusahaan ini lebih mengutamakan kemampuan bekerja sama daripada kemampuan individu.'],
      ['大学は試験の点数だけでなく、面接も重視している。', 'だいがくはしけんのてんすうだけでなく、めんせつもじゅうししている。', 'Universitas tidak hanya mengutamakan nilai ujian, tetapi juga wawancara.']
    ]
  },
  {
    word: '遠慮する', reading: 'えんりょする', meaning: 'menahan diri; sungkan; tidak mengambil atau melakukan sesuatu',
    explanation: 'Tidak melakukan atau meminta sesuatu karena mempertimbangkan orang lain, aturan, atau keadaan.',
    nuance: 'Ungkapan sopan yang sering dipakai untuk menolak atau menawarkan sesuatu: どうぞご遠慮なく. Dapat berarti sungkan atau membatasi diri.', contexts: ['Percakapan', 'Kehidupan sosial', 'Bisnis'], examples: [
      ['遠慮せずに、好きなだけ食べてください。', 'えんりょせずに、すきなだけたべてください。', 'Jangan sungkan, silakan makan sebanyak yang Anda inginkan.'],
      ['周囲に迷惑をかけないよう、夜遅くの電話は遠慮した。', 'しゅういにめいわくをかけないよう、よるおそくのでんわはえんりょした。', 'Saya menahan diri untuk tidak menelepon larut malam agar tidak mengganggu orang sekitar.']
    ]
  },
  {
    word: '張り切る', reading: 'はりきる', meaning: 'bersemangat sekali; tampil dengan penuh energi',
    explanation: 'Melakukan sesuatu dengan semangat tinggi dan kesiapan yang kuat, kadang sampai terlalu bersemangat.',
    nuance: 'Umum dalam percakapan. 張り切っている dapat bernada positif, tetapi kadang menyiratkan semangat yang berlebihan.', contexts: ['Percakapan', 'Pekerjaan', 'Pendidikan'], examples: [
      ['新しい仕事を任されて、彼は張り切っている。', 'あたらしいしごとをまかされて、かれははりきっている。', 'Setelah diberi tugas baru, ia sangat bersemangat.'],
      ['初めての大会なので、張り切りすぎないようにしよう。', 'はじめてのたいかいなので、はりきりすぎないようにしよう。', 'Karena ini perlombaan pertama, mari jangan terlalu bersemangat sampai berlebihan.']
    ]
  },
  {
    word: '痩せ衰える', reading: 'やせおとろえる', meaning: 'menjadi sangat kurus dan lemah',
    explanation: 'Menggambarkan tubuh yang kehilangan berat dan kekuatan secara nyata karena sakit, usia, atau kekurangan gizi.',
    nuance: 'Ungkapan kuat dan cenderung formal atau naratif. Mengandung kesan kondisi fisik yang memburuk, bukan sekadar kurus.', contexts: ['Kesehatan', 'Berita', 'Sastra'], examples: [
      ['長い療養生活で、彼は痩せ衰えてしまった。', 'ながいりょうようせいかつで、かれはやせおとろえてしまった。', 'Karena masa pemulihan yang panjang, tubuhnya menjadi sangat kurus dan lemah.'],
      ['十分な食事を取れず、家畜が痩せ衰えていた。', 'じゅうぶんなしょくじをとれず、かちくがやせおとろえていた。', 'Karena tidak memperoleh cukup makanan, ternak-ternak itu menjadi kurus dan lemah.']
    ]
  },
  {
    word: '感動する', reading: 'かんどうする', meaning: 'terharu; tersentuh secara mendalam',
    explanation: 'Merasakan emosi yang kuat karena sesuatu dianggap indah, mengesankan, mengharukan, atau luar biasa.',
    nuance: 'Sering digunakan untuk karya seni, tindakan baik, pemandangan, atau pengalaman. 感心する lebih menekankan kekaguman terhadap kemampuan atau perilaku.', contexts: ['Kehidupan sosial', 'Sastra', 'Hiburan'], examples: [
      ['映画の最後の場面に深く感動した。', 'えいがのさいごのばめんにふかくかんどうした。', 'Saya sangat terharu oleh adegan terakhir film itu.'],
      ['友人が見せてくれた写真の美しさに感動した。', 'ゆうじんがみせてくれたしゃしんのうつくしさにかんどうした。', 'Saya tersentuh oleh keindahan foto yang diperlihatkan teman saya.']
    ]
  },
  {
    word: 'じっと我慢する', reading: 'じっとがまんする', meaning: 'menahan diri dengan sabar; bertahan tanpa bergerak atau bereaksi',
    explanation: 'Tetap menahan rasa sakit, kesulitan, atau dorongan untuk bereaksi sambil menunggu keadaan berlalu.',
    nuance: 'じっと menambahkan kesan diam dan tidak bergerak. Ungkapan ini menekankan kesabaran dalam menghadapi situasi yang tidak nyaman.', contexts: ['Kehidupan sehari-hari', 'Kesehatan', 'Narasi'], examples: [
      ['治療が終わるまで、彼はじっと我慢した。', 'ちりょうがおわるまで、かれはじっとがまんした。', 'Ia bertahan dengan sabar sampai perawatan selesai.'],
      ['言い返したい気持ちを抑えて、じっと我慢した。', 'いいかえしたいきもちをおさえて、じっとがまんした。', 'Saya menahan keinginan untuk membalas ucapan dan memilih bersabar.']
    ]
  },
  {
    word: '必死に頑張る', reading: 'ひっしにがんばる', meaning: 'berusaha sekuat tenaga; berjuang mati-matian',
    explanation: 'Mengerahkan seluruh kemampuan dan usaha karena tujuan dianggap sangat penting atau waktu dan keadaan mendesak.',
    nuance: 'Ungkapan yang kuat dan ekspresif. 必死に tidak selalu berarti situasi hidup-mati; sering digunakan secara kiasan untuk usaha maksimal.', contexts: ['Pendidikan', 'Pekerjaan', 'Olahraga'], examples: [
      ['合格するために、彼女は必死に頑張った。', 'ごうかくするために、かのじょはひっしにがんばった。', 'Ia berusaha sekuat tenaga agar dapat lulus.'],
      ['チーム全員が必死に頑張り、最後まで試合を続けた。', 'ちーむぜんいんがひっしにがんばり、さいごまでしあいをつづけた。', 'Seluruh anggota tim berjuang sekuat tenaga dan terus bertanding sampai akhir.']
    ]
  },
  {
    word: '激しく怒る', reading: 'はげしくおこる', meaning: 'marah besar; menunjukkan kemarahan dengan kuat',
    explanation: 'Merasakan atau memperlihatkan kemarahan yang sangat kuat terhadap suatu tindakan atau keadaan.',
    nuance: '激しく memperkuat makna 怒る. Ungkapan ini langsung dan deskriptif, cocok untuk narasi atau pemberitaan.', contexts: ['Berita', 'Narasi', 'Kehidupan sosial'], examples: [
      ['約束を何度も破られ、彼は激しく怒った。', 'やくそくをなんどもやぶられ、かれははげしくおこった。', 'Karena janjinya berkali-kali dilanggar, ia menjadi sangat marah.'],
      ['監督は選手の無責任な態度に激しく怒った。', 'かんとくはせんしゅのむせきにんなたいどにはげしくおこった。', 'Pelatih sangat marah terhadap sikap pemain yang tidak bertanggung jawab.']
    ]
  },
  {
    word: '焦って取り組む', reading: 'あせってとりくむ', meaning: 'menangani sesuatu dengan tergesa-gesa karena panik',
    explanation: 'Mulai mengerjakan sesuatu dalam keadaan terburu-buru karena merasa khawatir, terdesak, atau takut terlambat.',
    nuance: '焦って menunjukkan keadaan tergesa-gesa dan kurang tenang. Tidak selalu menyatakan hasil buruk, tetapi dapat menyiratkan risiko kesalahan.', contexts: ['Pekerjaan', 'Pendidikan', 'Kehidupan sehari-hari'], examples: [
      ['締め切りが近づき、焦って課題に取り組んだ。', 'しめきりがちかづき、あせってかだいにとりくんだ。', 'Karena tenggat semakin dekat, saya mengerjakan tugas dengan tergesa-gesa.'],
      ['焦って取り組むより、手順を確認してから始めよう。', 'あせってとりくむより、てじゅんをかくにんしてからはじめよう。', 'Daripada mengerjakannya dengan panik, mari periksa langkah-langkahnya dahulu.']
    ]
  },
  {
    word: '仕方ない', reading: 'しかたない', meaning: 'tidak ada cara lain; tidak dapat dihindari',
    explanation: 'Mengungkapkan bahwa suatu keadaan tidak dapat diubah atau tidak ada pilihan yang lebih baik.',
    nuance: 'Umum dan kasual. 仕方がない adalah bentuk yang sedikit lebih lengkap; dapat menunjukkan penerimaan, penyesalan, atau rasa pasrah.', contexts: ['Percakapan sehari-hari', 'Kehidupan sosial'], examples: [
      ['電車が止まったのなら、歩いて帰るのも仕方ない。', 'でんしゃがとまったのなら、あるいてかえるのもしかたない。', 'Kalau kereta berhenti beroperasi, mau tidak mau kita harus pulang dengan berjalan kaki.'],
      ['失敗してしまったのだから、今は仕方ないと受け止めよう。', 'しっぱいしてしまったのだから、いまはしかたないとうけとめよう。', 'Karena kegagalan sudah terjadi, untuk sekarang mari menerimanya sebagai sesuatu yang tidak bisa dihindari.']
    ]
  },
  {
    word: 'あり得ない', reading: 'ありえない', meaning: 'mustahil; tidak masuk akal; tidak mungkin terjadi',
    explanation: 'Menunjukkan bahwa sesuatu dianggap tidak mungkin terjadi atau sangat sulit dipercaya.',
    nuance: 'Umum dalam percakapan. Dapat menyatakan penilaian objektif maupun keterkejutan atau ketidakpercayaan yang kuat.', contexts: ['Percakapan', 'Berita', 'Kehidupan sosial'], examples: [
      ['この短い時間で全部終わるなんてあり得ない。', 'このみじかいじかんでぜんぶおわるなんてありえない。', 'Mustahil semuanya selesai dalam waktu sesingkat ini.'],
      ['彼が約束を忘れるとは、私にはあり得ないことだった。', 'かれがやくそくをわすれるとは、わたしにはありえないことだった。', 'Bagi saya, tidak terpikir bahwa ia akan melupakan janji.']
    ]
  },
  {
    word: '思いがけない', reading: 'おもいがけない', meaning: 'tidak terduga; di luar perkiraan',
    explanation: 'Menggambarkan kejadian atau hasil yang tidak pernah diperkirakan sebelumnya.',
    nuance: 'Dapat bernilai positif maupun negatif. 思いがけない贈り物 berarti hadiah yang tidak disangka-sangka.', contexts: ['Percakapan', 'Berita', 'Sastra'], examples: [
      ['誕生日に思いがけない贈り物をもらった。', 'たんじょうびにおもいがけないおくりものをもらった。', 'Saya menerima hadiah yang tidak terduga pada hari ulang tahun.'],
      ['小さな発見が思いがけない成果につながった。', 'ちいさなはっけんがおもいがけないせいかにつながった。', 'Penemuan kecil itu menghasilkan pencapaian yang tidak terduga.']
    ]
  },
  {
    word: '情けない', reading: 'なさけない', meaning: 'memalukan; menyedihkan; mengecewakan',
    explanation: 'Menggambarkan keadaan atau perilaku yang membuat seseorang merasa malu, kecewa, atau kasihan.',
    nuance: 'Sering digunakan untuk menilai diri sendiri atau keadaan yang dianggap tidak pantas. Dapat bernada mencela atau menyatakan penyesalan.', contexts: ['Percakapan', 'Sastra', 'Kehidupan sosial'], examples: [
      ['簡単な計算を間違えるなんて情けない。', 'かんたんなけいさんをまちがえるなんてなさけない。', 'Memalukan sekali sampai salah menghitung hal yang mudah.'],
      ['困っている友人を助けられなかった自分が情けない。', 'こまっているゆうじんをたすけられなかったじぶんがなさけない。', 'Saya merasa kecewa terhadap diri sendiri karena tidak dapat membantu teman yang sedang kesulitan.']
    ]
  },
  {
    word: '全て', reading: 'すべて', meaning: 'semua; keseluruhan',
    explanation: 'Menunjukkan seluruh bagian atau hal yang termasuk dalam suatu kelompok tanpa ada yang dikecualikan.',
    nuance: 'Lebih formal atau menyeluruh daripada みんな dalam banyak konteks. Dapat dibaca すべて atau ぜんぶ, tetapi bacaan すべて umum dalam tulisan.', contexts: ['Formal', 'Akademik', 'Percakapan'], examples: [
      ['必要な書類は全て提出しました。', 'ひつようなしょるいはすべてていしゅつしました。', 'Saya telah menyerahkan semua dokumen yang diperlukan.'],
      ['今回の経験から全てを学べたわけではない。', 'こんかいのけいけんからすべてをまなべたわけではない。', 'Bukan berarti saya dapat mempelajari semuanya dari pengalaman kali ini.']
    ]
  },
  {
    word: '大分', reading: 'だいぶ', meaning: 'cukup banyak; lumayan; secara berarti',
    explanation: 'Menunjukkan perubahan atau jumlah yang cukup besar dibandingkan sebelumnya atau perkiraan awal.',
    nuance: 'Dalam penggunaan adverbia ini dibaca だいぶ. Jangan tertukar dengan nama prefektur 大分 yang dibaca おおいた.', contexts: ['Percakapan', 'Berita', 'Kehidupan sehari-hari'], examples: [
      ['薬を飲んだので、体調は大分よくなった。', 'くすりをのんだので、たいちょうはだいぶよくなった。', 'Setelah minum obat, kondisi tubuh saya sudah jauh membaik.'],
      ['駅前の景色は十年前と比べて大分変わった。', 'えきまえのけしきはじゅうねんまえとくらべてだいぶかわった。', 'Pemandangan di depan stasiun sudah banyak berubah dibandingkan sepuluh tahun lalu.']
    ]
  },
  {
    word: '一度に', reading: 'いちどに', meaning: 'sekaligus; pada waktu yang sama',
    explanation: 'Melakukan atau mengalami beberapa hal dalam satu waktu, bukan secara bertahap atau bergiliran.',
    nuance: 'Dapat menekankan tindakan serentak maupun jumlah yang datang sekaligus. Sering digunakan untuk memperingatkan agar tidak berlebihan.', contexts: ['Percakapan', 'Pekerjaan', 'Kehidupan sehari-hari'], examples: [
      ['たくさんの仕事を一度に引き受けるのは難しい。', 'たくさんのしごとをいちどにひきうけるのはむずかしい。', 'Sulit menerima banyak pekerjaan sekaligus.'],
      ['薬を一度に飲まず、決められた量を守ってください。', 'くすりをいちどにのまず、きめられたりょうをまもってください。', 'Jangan minum obat sekaligus; patuhilah jumlah yang telah ditentukan.']
    ]
  },
  {
    word: '次々と', reading: 'つぎつぎと', meaning: 'berturut-turut; satu demi satu tanpa jeda panjang',
    explanation: 'Menunjukkan bahwa banyak hal atau kejadian muncul atau dilakukan secara berurutan dalam waktu relatif singkat.',
    nuance: 'Menekankan kelanjutan dan frekuensi. Dapat digunakan untuk kabar, masalah, produk baru, atau orang yang datang.', contexts: ['Berita', 'Percakapan', 'Pekerjaan'], examples: [
      ['会場には次々と参加者が集まってきた。', 'かいじょうにはつぎつぎとさんかしゃがあつまってきた。', 'Para peserta datang berkumpul ke tempat acara satu demi satu.'],
      ['新しい技術が次々と開発されている。', 'あたらしいぎじゅつがつぎつぎとかいはつされている。', 'Teknologi baru terus dikembangkan satu demi satu.']
    ]
  },
  {
    word: '飽きる', reading: 'あきる', meaning: 'bosan; jenuh karena terlalu sering atau terlalu lama',
    explanation: 'Kehilangan minat terhadap sesuatu setelah dilakukan atau dialami berulang kali.',
    nuance: 'Sering digunakan dengan 飽きるほど (sampai bosan) dan 飽きずに (tanpa merasa bosan). Berbeda dari 退屈する yang lebih menekankan keadaan membosankan.', contexts: ['Percakapan', 'Kehidupan sehari-hari'], examples: [
      ['同じ料理を毎日食べると飽きてしまう。', 'おなじりょうりをまいにちたべるとあきてしまう。', 'Jika makan hidangan yang sama setiap hari, lama-lama akan bosan.'],
      ['彼女は飽きることなく、毎日日本語を勉強している。', 'かのじょはあきることなく、まいにちにほんごをべんきょうしている。', 'Ia belajar bahasa Jepang setiap hari tanpa merasa bosan.']
    ]
  },
  {
    word: '憧れる', reading: 'あこがれる', meaning: 'mengagumi; mendambakan; ingin seperti seseorang atau sesuatu',
    explanation: 'Memiliki perasaan kagum dan keinginan kuat terhadap orang, gaya hidup, tempat, atau keadaan yang dianggap menarik.',
    nuance: 'Biasanya bernada positif dan menunjukkan kerinduan atau cita-cita. 憧れの人 berarti orang yang dikagumi atau diidolakan.', contexts: ['Kehidupan sosial', 'Pendidikan', 'Sastra'], examples: [
      ['子どもの頃から医師という仕事に憧れていた。', 'こどものころからいしというしごとにあこがれていた。', 'Sejak kecil saya mengagumi dan mendambakan profesi dokter.'],
      ['彼女は海外で暮らすことに憧れている。', 'かのじょはかいがいでくらすことにあこがれている。', 'Ia mendambakan kehidupan di luar negeri.']
    ]
  },
  {
    word: '不満を持つ', reading: 'ふまんをもつ', meaning: 'merasa tidak puas; memiliki ketidakpuasan',
    explanation: 'Merasa bahwa keadaan, perlakuan, hasil, atau layanan tidak sesuai dengan harapan atau kebutuhan.',
    nuance: 'Lebih netral daripada 怒る; menyatakan ketidakpuasan yang dapat diungkapkan atau dipendam. 不満を抱く juga lazim.', contexts: ['Kehidupan sosial', 'Bisnis', 'Berita'], examples: [
      ['社員の多くが現在の勤務制度に不満を持っている。', 'しゃいんのおおくがげんざいのきんむせいどにふまんをもっている。', 'Banyak karyawan merasa tidak puas dengan sistem kerja saat ini.'],
      ['利用者が不満を持つ理由を調査した。', 'りようしゃがふまんをもつりゆうをちょうさした。', 'Kami menyelidiki alasan para pengguna merasa tidak puas.']
    ]
  },
  {
    word: '熱中する', reading: 'ねっちゅうする', meaning: 'sangat tertarik; tenggelam dalam suatu kegiatan',
    explanation: 'Mencurahkan perhatian dan waktu dengan penuh semangat pada kegiatan atau hal yang sangat disukai.',
    nuance: 'Umumnya positif, tetapi dapat menyiratkan terlalu larut sampai melupakan hal lain. 熱中している berarti sedang sangat tekun atau asyik.', contexts: ['Pendidikan', 'Hobi', 'Kehidupan sehari-hari'], examples: [
      ['弟は子どもの頃、昆虫の観察に熱中していた。', 'おとうとはこどものころ、こんちゅうのかんさつにねっちゅうしていた。', 'Saat kecil, adik saya sangat gemar mengamati serangga.'],
      ['彼女は研究に熱中し、時間を忘れてしまうことがある。', 'かのじょはけんきゅうにねっちゅうし、じかんをわすれてしまうことがある。', 'Ia begitu tenggelam dalam penelitian hingga terkadang lupa waktu.']
    ]
  },
  {
    word: '監督', reading: 'かんとく', meaning: 'pengawasan; sutradara; pelatih atau pengarah',
    explanation: 'Mengawasi dan mengarahkan pekerjaan atau kegiatan. Dalam film berarti sutradara, sedangkan dalam olahraga berarti pelatih atau manajer tim.',
    nuance: 'Maknanya bergantung bidang: 工事を監督する (mengawasi konstruksi), 映画監督 (sutradara film), 監督 (pelatih tim).', contexts: ['Film', 'Olahraga', 'Pekerjaan'], examples: [
      ['新しい映画は若手の監督が制作した。', 'あたらしいえいがはわかてのかんとくがせいさくした。', 'Film baru itu dibuat oleh sutradara muda.'],
      ['監督は選手たちに試合の方針を説明した。', 'かんとくはせんしゅたちにしあいのほうしんをせつめいした。', 'Pelatih menjelaskan strategi pertandingan kepada para pemain.']
    ]
  },
  {
    word: '派生', reading: 'はせい', meaning: 'turunan; perkembangan atau kemunculan dari sumber asal',
    explanation: 'Muncul atau berkembang dari sesuatu yang telah ada sebelumnya, seperti kata, ide, masalah, atau cabang bidang.',
    nuance: 'Sering digunakan dalam linguistik, ilmu pengetahuan, dan analisis. 派生語 berarti kata turunan; 派生する berarti berasal atau berkembang dari sumber lain.', contexts: ['Akademik', 'Bahasa', 'Ilmu pengetahuan'], examples: [
      ['この言葉から多くの表現が派生した。', 'このことばからおおくのひょうげんがはせいした。', 'Banyak ungkapan berkembang dari kata ini.'],
      ['一つの問題から、別の課題が派生することもある。', 'ひとつのもんだいから、べつのかだいがはせいすることもある。', 'Terkadang masalah lain muncul sebagai turunan dari satu masalah.']
    ]
  },
  {
    word: '透けて', reading: 'すけて', meaning: 'terlihat samar melalui sesuatu; tembus pandang',
    explanation: 'Bentuk て dari 透ける, yaitu keadaan ketika benda atau bentuk di balik permukaan masih dapat terlihat karena bahan yang tipis atau transparan.',
    nuance: 'Digunakan untuk pakaian, kaca, kertas, bayangan, atau maksud yang tampak samar. Menyatakan keadaan, bukan tindakan sengaja memperlihatkan.', contexts: ['Deskripsi', 'Kehidupan sehari-hari', 'Sastra'], examples: [
      ['薄いカーテンを通して、外の景色が透けて見える。', 'うすいかーてんをとおして、そとのけしきがすけてみえる。', 'Pemandangan di luar terlihat samar melalui tirai tipis.'],
      ['封筒の紙が薄く、中の文字が透けていた。', 'ふうとうのかみがうすく、なかのもじがすけていた。', 'Kertas amplop itu tipis sehingga tulisan di dalamnya terlihat samar.']
    ]
  },
  {
    word: '恩恵', reading: 'おんけい', meaning: 'manfaat besar; berkah; keuntungan yang diterima',
    explanation: 'Kebaikan atau keuntungan yang diperoleh dari seseorang, alam, kebijakan, atau keadaan tertentu.',
    nuance: 'Cenderung formal dan sering digunakan dalam frasa 恩恵を受ける. Mengandung kesan bahwa manfaat itu diterima berkat sesuatu.', contexts: ['Berita', 'Ekonomi', 'Sosial'], examples: [
      ['多くの人が技術の進歩の恩恵を受けている。', 'おおくのひとがぎじゅつのしんぽのおんけいをうけている。', 'Banyak orang menerima manfaat dari kemajuan teknologi.'],
      ['豊かな自然の恩恵を次の世代にも残したい。', 'ゆたかなしぜんのおんけいをつぎのせだいにものこしたい。', 'Kami ingin mewariskan manfaat alam yang kaya kepada generasi berikutnya.']
    ]
  },
  {
    word: '臨む', reading: 'のぞむ', meaning: 'menghadapi; mengikuti; hadir dengan sikap tertentu',
    explanation: 'Menghadapi suatu situasi penting atau hadir untuk mengikuti kegiatan dengan persiapan dan sikap tertentu.',
    nuance: 'Jangan tertukar dengan 望む (menginginkan). 臨む sering dipakai dalam 試験に臨む, 会議に臨む, dan 現場に臨む.', contexts: ['Formal', 'Pekerjaan', 'Pendidikan'], examples: [
      ['十分に準備して試験に臨んだ。', 'じゅうぶんにじゅんびしてしけんにのぞんだ。', 'Saya mengikuti ujian setelah melakukan persiapan yang cukup.'],
      ['社長は緊張感を持って記者会見に臨んだ。', 'しゃちょうはきんちょうかんをもってきしゃかいけんにのぞんだ。', 'Direktur menghadiri konferensi pers dengan sikap penuh keseriusan.']
    ]
  },
  {
    word: '如実に', reading: 'にょじつに', meaning: 'dengan jelas dan nyata; sebagaimana adanya',
    explanation: 'Menunjukkan bahwa suatu keadaan atau fakta terlihat secara jelas dan mencerminkan kenyataan dengan tepat.',
    nuance: 'Cenderung formal dan sering digunakan dalam laporan atau analisis: 結果に如実に表れる (tercermin jelas dalam hasil).', contexts: ['Berita', 'Akademik', 'Tulisan formal'], examples: [
      ['努力の差は試合の結果に如実に表れた。', 'どりょくのさはしあいのけっかににょじつにあらわれた。', 'Perbedaan usaha tercermin dengan jelas pada hasil pertandingan.'],
      ['地域の変化が写真に如実に記録されている。', 'ちいきのへんかがしゃしんににょじつにきろくされている。', 'Perubahan daerah itu terekam dengan jelas dalam foto.']
    ]
  },
  {
    word: '保護', reading: 'ほご', meaning: 'perlindungan; tindakan melindungi',
    explanation: 'Menjaga orang, hewan, lingkungan, informasi, atau hak agar tidak mengalami bahaya maupun kerusakan.',
    nuance: 'Sering muncul dalam 保護者, 個人情報保護, dan 自然保護. Bersifat netral dan formal.', contexts: ['Hukum', 'Lingkungan', 'Sosial'], examples: [
      ['絶滅の危機にある動物を保護する活動が続いている。', 'ぜつめつのききにあるどうぶつをほごするかつどうがつづいている。', 'Kegiatan untuk melindungi hewan yang terancam punah terus berlangsung.'],
      ['個人情報を保護するために、管理方法を見直した。', 'こじんじょうほうをほごするために、かんりほうほうをみなおした。', 'Metode pengelolaan ditinjau ulang untuk melindungi informasi pribadi.']
    ]
  },
  {
    word: '防御', reading: 'ぼうぎょ', meaning: 'pertahanan; tindakan mencegah serangan atau bahaya',
    explanation: 'Melindungi diri atau suatu sistem dari serangan, ancaman, atau dampak yang merugikan.',
    nuance: 'Sering digunakan dalam olahraga, keamanan, militer, dan teknologi. Menekankan upaya menahan atau mencegah serangan.', contexts: ['Olahraga', 'Keamanan', 'Teknologi'], examples: [
      ['相手の攻撃に備えて、防御を固めた。', 'あいてのこうげきにそなえて、ぼうぎょをかためた。', 'Kami memperkuat pertahanan untuk menghadapi serangan lawan.'],
      ['このソフトには不正アクセスを防ぐ防御機能がある。', 'このそふとにはふせいあくせすをふせぐぼうぎょきのうがある。', 'Perangkat lunak ini memiliki fungsi pertahanan untuk mencegah akses tidak sah.']
    ]
  },
  {
    word: '警備', reading: 'けいび', meaning: 'pengamanan; penjagaan keamanan',
    explanation: 'Menjaga tempat, acara, atau orang agar tetap aman dan mencegah gangguan maupun tindakan berbahaya.',
    nuance: 'Sering digunakan untuk gedung, acara besar, fasilitas umum, dan petugas keamanan. 警備員 berarti petugas keamanan.', contexts: ['Keamanan', 'Berita', 'Kehidupan sosial'], examples: [
      ['会場の周辺では警備が強化された。', 'かいじょうのしゅうへんではけいびがきょうかされた。', 'Pengamanan diperketat di sekitar lokasi acara.'],
      ['入口には警備員が立ち、来客を確認している。', 'いりぐちにはけいびいんがたち、らいきゃくをかくにんしている。', 'Petugas keamanan berjaga di pintu masuk dan memeriksa para tamu.']
    ]
  },
  {
    word: '支援', reading: 'しえん', meaning: 'dukungan; bantuan untuk membantu seseorang atau kegiatan',
    explanation: 'Memberikan bantuan berupa tenaga, dana, informasi, atau fasilitas agar seseorang atau suatu kegiatan dapat berjalan.',
    nuance: 'Sering digunakan dalam konteks sosial, pendidikan, bisnis, dan bencana. Lebih luas daripada 援助 dan dapat bersifat berkelanjutan.', contexts: ['Sosial', 'Pendidikan', 'Bisnis'], examples: [
      ['市は子どもの学習を支援する制度を設けた。', 'しはこどものがくしゅうをしえんするせいどをもうけた。', 'Pemerintah kota membuat sistem untuk mendukung pembelajaran anak-anak.'],
      ['多くの団体が被災地への支援を続けている。', 'おおくのだんたいがひさいちへのしえんをつづけている。', 'Banyak organisasi terus memberikan bantuan kepada daerah terdampak bencana.']
    ]
  },
  {
    word: '忠実に', reading: 'ちゅうじつに', meaning: 'dengan setia; secara akurat mengikuti sumber atau prinsip',
    explanation: 'Melakukan sesuatu dengan setia terhadap perintah, prinsip, janji, atau bahan sumber tanpa banyak penyimpangan.',
    nuance: 'Dapat menunjukkan kesetiaan seseorang atau ketepatan reproduksi: 原作に忠実に再現する (mereproduksi sesuai karya asli).', contexts: ['Sastra', 'Pekerjaan', 'Kehidupan sosial'], examples: [
      ['彼は上司の指示に忠実に従った。', 'かれはじょうしのしじにちゅうじつにしたがった。', 'Ia mengikuti instruksi atasannya dengan setia.'],
      ['映画は原作の雰囲気を忠実に再現している。', 'えいがはげんさくのふんいきをちゅうじつにさいげんしている。', 'Film itu mereproduksi suasana karya aslinya dengan setia.']
    ]
  },
  {
    word: '従順に', reading: 'じゅうじゅんに', meaning: 'dengan patuh; menurut tanpa banyak menentang',
    explanation: 'Bertindak mengikuti perintah atau kehendak pihak lain tanpa menunjukkan perlawanan.',
    nuance: 'Dapat bernada positif untuk kepatuhan yang baik, tetapi juga dapat menyiratkan kepasifan atau kurangnya kemandirian.', contexts: ['Kehidupan sosial', 'Pendidikan', 'Sastra'], examples: [
      ['子どもは親の言うことに従順に従った。', 'こどもはおやのいうことにじゅうじゅんにしたがった。', 'Anak itu mematuhi perkataan orang tuanya.'],
      ['彼は命令に従順に従うだけで、自分の意見を言わない。', 'かれはめいれいにじゅうじゅんにしたがうだけで、じぶんのいけんをいわない。', 'Ia hanya mengikuti perintah dengan patuh dan tidak menyampaikan pendapatnya sendiri.']
    ]
  },
  {
    word: '厳正に', reading: 'げんせいに', meaning: 'dengan ketat, adil, dan tidak memihak',
    explanation: 'Melaksanakan pemeriksaan, penilaian, atau keputusan berdasarkan aturan secara tegas tanpa pilih kasih.',
    nuance: 'Formal dan sering digunakan dalam pemilihan, penyelidikan, penilaian, atau penegakan aturan. Menekankan ketegasan sekaligus keadilan.', contexts: ['Administrasi', 'Hukum', 'Berita'], examples: [
      ['審査は厳正に行われなければならない。', 'しんさはげんせいにおこなわれなければならない。', 'Pemeriksaan harus dilakukan secara ketat dan adil.'],
      ['委員会は規則違反を厳正に処分した。', 'いいんかいはきそくいはんをげんせいにしょぶんした。', 'Komite menjatuhkan sanksi secara tegas atas pelanggaran aturan.']
    ]
  },
  {
    word: '均等に', reading: 'きんとうに', meaning: 'secara merata; dengan porsi yang sama',
    explanation: 'Membagi atau menyebarkan sesuatu agar setiap bagian atau pihak memperoleh jumlah atau perlakuan yang sama.',
    nuance: 'Sering digunakan untuk pembagian biaya, kesempatan, beban, atau distribusi. 均等 menekankan kesamaan bagian.', contexts: ['Administrasi', 'Pekerjaan', 'Kehidupan sehari-hari'], examples: [
      ['費用は参加者全員で均等に負担する。', 'ひようはさんかしゃぜんいんできんとうにふたんする。', 'Biaya ditanggung secara merata oleh seluruh peserta.'],
      ['作業を三つのグループに均等に分けた。', 'さぎょうをみっつのぐるーぷにきんとうにわけた。', 'Pekerjaan dibagi secara merata ke dalam tiga kelompok.']
    ]
  },
  {
    word: 'すくって', reading: 'すくって', meaning: 'menyendok; mengambil dengan gerakan menyerok',
    explanation: 'Bentuk て dari 掬う, yaitu mengambil cairan atau benda kecil dengan alat atau telapak tangan yang dibentuk seperti sendok.',
    nuance: 'Dalam daftar ini ditafsirkan sebagai 掬って. Tanpa kanji, すくって juga dapat berasal dari 救う (menyelamatkan), sehingga konteks menentukan maknanya.', contexts: ['Kehidupan sehari-hari', 'Memasak', 'Percakapan'], examples: [
      ['おたまでスープをすくって、器に入れてください。', 'おたまですーぷをすくって、うつわにいれてください。', 'Silakan sendok sup dengan centong lalu masukkan ke mangkuk.'],
      ['子どもは川の水を手ですくって飲もうとした。', 'こどもはかわのみずをてですくってのもうとした。', 'Anak itu mencoba mengambil air sungai dengan tangannya untuk diminum.']
    ]
  },
  {
    word: 'めくって', reading: 'めくって', meaning: 'membalik; membuka halaman atau lapisan',
    explanation: 'Bentuk て dari 捲る, yaitu mengangkat dan membalik halaman, kain, atau bagian permukaan untuk melihat sisi berikutnya.',
    nuance: 'Umum dalam instruksi membaca atau membuka sesuatu: ページをめくる. Juga dapat digunakan untuk menyibak kain atau penutup.', contexts: ['Pendidikan', 'Kehidupan sehari-hari', 'Percakapan'], examples: [
      ['次のページをめくって、問題を読んでください。', 'つぎのぺーじをめくって、もんだいをよんでください。', 'Silakan balik halaman berikutnya dan baca soalnya.'],
      ['カレンダーをめくって、来月の予定を確認した。', 'かれんだーをめくって、らいげつのよていをかくにんした。', 'Saya membalik kalender untuk memeriksa jadwal bulan depan.']
    ]
  },
  {
    word: 'はさんで', reading: 'はさんで', meaning: 'menjepit; menyisipkan di antara dua benda',
    explanation: 'Bentuk て dari 挟む, yaitu menempatkan sesuatu di antara dua sisi atau menjepitnya agar tertahan.',
    nuance: 'Dapat digunakan secara fisik maupun waktu: 本に紙を挟む (menyisipkan kertas di buku), 昼休みを挟む (diselingi istirahat siang).', contexts: ['Kehidupan sehari-hari', 'Pekerjaan', 'Percakapan'], examples: [
      ['書類の間に名刺をはさんでおいた。', 'しょるいのあいだにめいしをはさんでおいた。', 'Saya menyisipkan kartu nama di antara dokumen.'],
      ['昼休みをはさんで、午後も会議が続いた。', 'ひるやすみをはさんで、ごごもかいぎがつづいた。', 'Rapat berlanjut pada sore hari dengan diselingi istirahat siang.']
    ]
  },
  {
    word: 'つまんで', reading: 'つまんで', meaning: 'mencubit; menjepit atau mengambil dengan ujung jari',
    explanation: 'Bentuk て dari 摘む, yaitu mengambil atau memegang sesuatu dengan ujung jari atau alat kecil.',
    nuance: 'Dapat berarti mengambil makanan sedikit demi sedikit atau menjepit bagian kecil. つまみ食い berarti mencicipi makanan diam-diam atau sedikit-sedikit.', contexts: ['Memasak', 'Kehidupan sehari-hari', 'Percakapan'], examples: [
      ['皿の上の豆を指でつまんで食べた。', 'さらのうえのまめをゆびでつまんでたべた。', 'Saya mengambil kacang di atas piring dengan jari lalu memakannya.'],
      ['小さな紙片をピンセットでつまんで取り出した。', 'ちいさなかみきれをぴんせっとでつまんでとりだした。', 'Saya mengambil potongan kertas kecil dengan pinset.']
    ]
  },
  {
    word: '念願', reading: 'ねんがん', meaning: 'keinginan lama yang sangat didambakan',
    explanation: 'Harapan atau tujuan yang telah lama diinginkan dan akhirnya ingin diwujudkan atau berhasil dicapai.',
    nuance: 'Sering digunakan dalam 念願がかなう dan 念願の〜. Menekankan lamanya keinginan dan kuatnya harapan.', contexts: ['Kehidupan sosial', 'Pendidikan', 'Pekerjaan'], examples: [
      ['念願の大学に合格し、家族も喜んでくれた。', 'ねんがんのだいがくにごうかくし、かぞくもよろこんでくれた。', 'Saya diterima di universitas yang sejak lama saya dambakan dan keluarga pun ikut senang.'],
      ['十年越しの念願がようやくかなった。', 'じゅうねんごしのねんがんがようやくかなった。', 'Keinginan yang telah didambakan selama sepuluh tahun akhirnya terwujud.']
    ]
  },
  {
    word: '志望', reading: 'しぼう', meaning: 'keinginan untuk masuk atau bekerja di tempat tertentu; pilihan cita-cita',
    explanation: 'Memiliki keinginan untuk diterima di sekolah, universitas, perusahaan, atau bidang pekerjaan tertentu.',
    nuance: 'Umum dalam konteks pendidikan dan rekrutmen: 志望校, 志望動機, 志望企業. Berbeda dari 希望 yang lebih umum.', contexts: ['Pendidikan', 'Pekerjaan', 'Administrasi'], examples: [
      ['志望する大学の入試要項をよく読んだ。', 'しぼうするだいがくのにゅうしようこうをよくよんだ。', 'Saya membaca dengan saksama panduan ujian masuk universitas yang saya tuju.'],
      ['面接では、その会社を志望した理由を聞かれた。', 'めんせつでは、そのかいしゃをしぼうしたりゆうをきかれた。', 'Dalam wawancara, saya ditanya alasan memilih perusahaan tersebut.']
    ]
  },
  {
    word: '本意', reading: 'ほんい', meaning: 'maksud sebenarnya; niat yang sesungguhnya',
    explanation: 'Keinginan atau tujuan yang sebenarnya ada di dalam pikiran seseorang, bukan sekadar kesan atau ucapan di permukaan.',
    nuance: 'Sering digunakan dalam 本意ではない (bukan maksud sebenarnya) dan 本意を伝える. Cenderung formal.', contexts: ['Formal', 'Kehidupan sosial', 'Sastra'], examples: [
      ['誤解されたままでは本意が伝わらない。', 'ごかいされたままではほんいがつたわらない。', 'Jika terus disalahpahami, maksud saya yang sebenarnya tidak akan tersampaikan.'],
      ['彼を傷つけるつもりはなく、本意ではなかった。', 'かれをきずつけるつもりはなく、ほんいではなかった。', 'Saya tidak berniat menyakitinya; itu bukan maksud saya yang sebenarnya.']
    ]
  },
  {
    word: '欲求', reading: 'よっきゅう', meaning: 'keinginan kuat; kebutuhan atau dorongan',
    explanation: 'Dorongan batin untuk memperoleh, melakukan, atau mencapai sesuatu yang dianggap dibutuhkan atau diinginkan.',
    nuance: 'Lebih formal dan sering digunakan dalam psikologi atau ilmu sosial. 欲求不満 berarti frustrasi karena keinginan tidak terpenuhi.', contexts: ['Psikologi', 'Akademik', 'Sosial'], examples: [
      ['人には認められたいという欲求がある。', 'ひとにはみとめられたいというよっきゅうがある。', 'Manusia memiliki keinginan untuk diakui.'],
      ['基本的な欲求が満たされることは生活の安定につながる。', 'きほんてきなよっきゅうがみたされることはせいかつのあんていにつながる。', 'Terpenuhinya kebutuhan dasar berhubungan dengan kestabilan hidup.']
    ]
  },
  {
    word: 'ピント', reading: 'ぴんと', meaning: 'fokus; ketajaman gambar atau perhatian',
    explanation: 'Titik fokus kamera atau ketepatan perhatian terhadap inti suatu hal. ピントが合う berarti fokusnya tepat.',
    nuance: 'Kata serapan yang juga digunakan secara kiasan: 話のピントがずれる berarti pembicaraan melenceng dari inti.', contexts: ['Fotografi', 'Teknologi', 'Percakapan'], examples: [
      ['写真のピントが合っていないので、撮り直した。', 'しゃしんのぴんとがあっていないので、とりなおした。', 'Karena fokus foto tidak tepat, saya mengambil ulang gambarnya.'],
      ['彼の説明は話のピントが少しずれている。', 'かれのせつめいははなしのぴんとがすこしずれている。', 'Penjelasannya sedikit melenceng dari inti pembicaraan.']
    ]
  },
  {
    word: 'ポーズ', reading: 'ぽーず', meaning: 'pose; sikap tubuh; jeda sementara',
    explanation: 'Posisi tubuh yang dibuat untuk foto atau penampilan, atau penghentian sementara suatu kegiatan.',
    nuance: 'Maknanya ditentukan konteks: 写真のポーズ (pose foto), 作業をポーズする/一時停止する (menjeda).', contexts: ['Fotografi', 'Hiburan', 'Pekerjaan'], examples: [
      ['写真を撮る前に、好きなポーズを決めた。', 'しゃしんをとるまえに、すきなぽーずをきめた。', 'Sebelum berfoto, kami menentukan pose yang disukai.'],
      ['議論をいったんポーズして、資料を確認しよう。', 'ぎろんをいったんぽーずして、しりょうをかくにんしよう。', 'Mari jeda dulu diskusinya dan periksa dokumen.']
    ]
  },
  {
    word: 'カーソル', reading: 'かーそる', meaning: 'kursor; penunjuk posisi pada layar',
    explanation: 'Tanda pada layar komputer yang menunjukkan posisi pengetikan atau tempat tindakan akan dilakukan.',
    nuance: 'Istilah teknologi dan komputer. マウスカーソル adalah penunjuk yang digerakkan dengan tetikus.', contexts: ['Teknologi', 'Pekerjaan', 'Pendidikan'], examples: [
      ['カーソルを入力欄に合わせて、文字を入力してください。', 'かーそるをにゅうりょくらんにあわせて、もじをにゅうりょくしてください。', 'Arahkan kursor ke kolom input lalu masukkan teks.'],
      ['カーソルが画面の端に移動してしまった。', 'かーそるががめんのはしにいどうしてしまった。', 'Kursor berpindah ke tepi layar.']
    ]
  },
  {
    word: 'テンポ', reading: 'てんぽ', meaning: 'tempo; kecepatan atau irama berlangsungnya sesuatu',
    explanation: 'Kecepatan suatu musik, percakapan, gerakan, atau pekerjaan berlangsung.',
    nuance: 'Kata serapan yang umum digunakan secara luas. テンポが速い berarti berlangsung cepat; テンポよく berarti dengan ritme yang baik.', contexts: ['Musik', 'Percakapan', 'Pekerjaan'], examples: [
      ['この曲はテンポが速く、踊りやすい。', 'このきょくはてんぽがはやく、おどりやすい。', 'Lagu ini bertempo cepat sehingga mudah untuk ditarikan.'],
      ['会議はよいテンポで進み、予定より早く終わった。', 'かいぎはよいてんぽですすみ、よていよりはやくおわった。', 'Rapat berlangsung dengan ritme yang baik dan selesai lebih cepat dari jadwal.']
    ]
  },
  {
    word: '食い込んだ', reading: 'くいこんだ', meaning: 'menancap atau masuk ke dalam; mengambil bagian dari waktu/ruang',
    explanation: 'Bentuk lampau dari 食い込む, yaitu masuk atau menekan ke dalam suatu benda, atau melampaui batas dan mengambil sebagian ruang/waktu.',
    nuance: 'Makna fisik muncul pada 紐が肌に食い込む. Makna kiasan muncul pada 予定に食い込む (memakan waktu yang dijadwalkan).', contexts: ['Deskripsi', 'Pekerjaan', 'Kehidupan sehari-hari'], examples: [
      ['重い荷物のひもが肩に食い込んだ。', 'おもいにもつのひもがかたにくいこんだ。', 'Tali barang bawaan yang berat menekan masuk ke bahu.'],
      ['議論が長引き、休憩時間に食い込んだ。', 'ぎろんがながびき、きゅうけいじかんにくいこんだ。', 'Diskusi berlangsung lama dan memakan waktu istirahat.']
    ]
  },
  {
    word: '乗り込んだ', reading: 'のりこんだ', meaning: 'naik/masuk ke kendaraan atau tempat; mendatangi dengan tegas',
    explanation: 'Bentuk lampau dari 乗り込む, yaitu masuk atau naik ke kendaraan, atau mendatangi suatu tempat untuk melakukan urusan tertentu.',
    nuance: 'Konteks menentukan nuansa: 電車に乗り込む berarti naik kereta; 現場に乗り込む dapat berarti mendatangi lokasi dengan tegas.', contexts: ['Percakapan', 'Berita', 'Pekerjaan'], examples: [
      ['乗客は次々とバスに乗り込んだ。', 'じょうきゃくはつぎつぎとばすにのりこんだ。', 'Para penumpang naik ke bus satu demi satu.'],
      ['担当者は問題を確認するため、工場に乗り込んだ。', 'たんとうしゃはもんだいをかくにんするため、こうじょうにのりこんだ。', 'Penanggung jawab mendatangi pabrik untuk memeriksa masalah.']
    ]
  },
  {
    word: '駆け込んだ', reading: 'かけこんだ', meaning: 'berlari masuk; bergegas menuju tempat bantuan atau perlindungan',
    explanation: 'Bentuk lampau dari 駆け込む, yaitu berlari masuk dengan cepat ke suatu tempat atau mencari bantuan secara mendesak.',
    nuance: 'Dapat digunakan secara fisik maupun kiasan: 店に駆け込む (berlari masuk ke toko), 相談窓口に駆け込む (segera meminta bantuan).', contexts: ['Kehidupan sehari-hari', 'Berita', 'Sosial'], examples: [
      ['雨が降り始めたので、近くの店に駆け込んだ。', 'あめがふりはじめたので、ちかくのみせにかけこんだ。', 'Karena hujan mulai turun, saya berlari masuk ke toko terdekat.'],
      ['困った住民が市役所の相談窓口に駆け込んだ。', 'こまったじゅうみんがしやくしょのそうだんまどぐちにかけこんだ。', 'Warga yang mengalami kesulitan segera mendatangi loket konsultasi balai kota.']
    ]
  },
  {
    word: '追い込んだ', reading: 'おいこんだ', meaning: 'mendesak hingga terpojok; membawa ke keadaan tertentu',
    explanation: 'Bentuk lampau dari 追い込む, yaitu membuat seseorang atau sesuatu berada dalam situasi sulit atau kondisi tertentu.',
    nuance: 'Sering digunakan untuk keadaan emosional, persaingan, atau tekanan: 相手を追い込む. Dapat bernada negatif jika seseorang ditekan terlalu jauh.', contexts: ['Berita', 'Olahraga', 'Kehidupan sosial'], examples: [
      ['厳しい質問が相手を窮地に追い込んだ。', 'きびしいしつもんがあいてをきゅうちにおいこんだ。', 'Pertanyaan yang keras membuat lawan bicara terpojok.'],
      ['失敗が続き、彼は自分を精神的に追い込んでしまった。', 'しっぱいがつづき、かれはじぶんをせいしんてきにおいこんでしまった。', 'Karena kegagalan terus berlanjut, ia membuat dirinya sendiri berada dalam tekanan mental.']
    ]
  },
  {
    word: 'てっきり', reading: 'てっきり', meaning: 'saya benar-benar mengira; tadinya yakin bahwa',
    explanation: 'Menunjukkan keyakinan atau dugaan kuat yang ternyata berbeda dari kenyataan.',
    nuance: 'Umum dalam percakapan dan sering diikuti 〜と思っていた atau 〜だと思った. Mengandung unsur salah sangka atau terkejut.', contexts: ['Percakapan sehari-hari'], examples: [
      ['てっきり今日は休みだと思っていた。', 'てっきりきょうはやすみだとおもっていた。', 'Saya benar-benar mengira hari ini libur.'],
      ['てっきり彼が担当者だと思ったが、別の人だった。', 'てっきりかれがたんとうしゃだとおもったが、べつのひとだった。', 'Saya tadinya yakin dia penanggung jawabnya, tetapi ternyata orang lain.']
    ]
  },
  {
    word: 'さっぱり', reading: 'さっぱり', meaning: 'segar dan ringan; sama sekali (tidak); rapi/bersih',
    explanation: 'Menggambarkan rasa atau suasana yang ringan dan segar, atau digunakan untuk menegaskan bahwa sesuatu sama sekali tidak terjadi atau tidak dipahami.',
    nuance: 'Maknanya ditentukan konteks: さっぱりした味 (rasa segar), さっぱり分からない (sama sekali tidak mengerti), さっぱりする (merasa segar).', contexts: ['Percakapan', 'Kuliner', 'Kehidupan sehari-hari'], examples: [
      ['暑い日は、さっぱりした料理が食べたくなる。', 'あついひは、さっぱりしたりょうりがたべたくなる。', 'Pada hari yang panas, saya ingin makan hidangan yang segar dan ringan.'],
      ['説明を聞いたが、内容がさっぱり分からなかった。', 'せつめいをきいたが、ないようがさっぱりわからなかった。', 'Saya sudah mendengar penjelasannya, tetapi sama sekali tidak memahami isinya.']
    ]
  },
  {
    word: 'しっかり', reading: 'しっかり', meaning: 'dengan kuat; mantap; dapat diandalkan; sungguh-sungguh',
    explanation: 'Menunjukkan tindakan yang dilakukan dengan kuat, teliti, stabil, atau penuh tanggung jawab.',
    nuance: 'Sangat umum dan luas: しっかり確認する (memeriksa dengan teliti), しっかりした人 (orang yang dapat diandalkan).', contexts: ['Percakapan', 'Pekerjaan', 'Pendidikan'], examples: [
      ['提出する前に、名前をしっかり確認してください。', 'ていしゅつするまえに、なまえをしっかりかくにんしてください。', 'Sebelum menyerahkan, periksalah nama dengan teliti.'],
      ['彼女は自分の考えをしっかり持っている。', 'かのじょはじぶんのかんがえをしっかりもっている。', 'Ia memiliki pendirian yang kuat.']
    ]
  },
  {
    word: 'はっきり', reading: 'はっきり', meaning: 'dengan jelas; tegas; tidak samar',
    explanation: 'Menunjukkan sesuatu yang dapat dilihat, didengar, dipahami, atau dinyatakan tanpa keraguan maupun ketidakjelasan.',
    nuance: 'Digunakan untuk penglihatan, suara, ingatan, keputusan, dan pendapat. はっきり言う berarti berbicara terus terang.', contexts: ['Percakapan', 'Pendidikan', 'Pekerjaan'], examples: [
      ['質問の意味が分からないときは、はっきり聞いてください。', 'しつもんのいみがわからないときは、はっきりきいてください。', 'Jika tidak memahami arti pertanyaan, tanyakanlah dengan jelas.'],
      ['遠くからでも看板の文字がはっきり見えた。', 'とおくからでもかんばんのもじがはっきりみえた。', 'Tulisan pada papan nama terlihat jelas bahkan dari kejauhan.']
    ]
  },
  {
    word: '調達した', reading: 'ちょうたつした', meaning: 'telah memperoleh atau menyediakan barang/dana yang dibutuhkan',
    explanation: 'Bentuk lampau dari 調達する, yaitu mencari dan menyediakan barang, bahan, atau dana yang diperlukan.',
    nuance: 'Cenderung formal dan sering digunakan dalam bisnis, produksi, dan pengadaan. Menekankan proses mendapatkan sumber daya yang diperlukan.', contexts: ['Bisnis', 'Administrasi', 'Pekerjaan'], examples: [
      ['会社は新しい設備を海外から調達した。', 'かいしゃはあたらしいせつびをかいがいからちょうたつした。', 'Perusahaan memperoleh peralatan baru dari luar negeri.'],
      ['必要な資金を銀行から調達した。', 'ひつようなしきんをぎんこうからちょうたつした。', 'Kami memperoleh dana yang diperlukan dari bank.']
    ]
  },
  {
    word: '用意した', reading: 'よういした', meaning: 'telah menyiapkan; telah menyediakan',
    explanation: 'Bentuk lampau dari 用意する, yaitu membuat sesuatu siap untuk digunakan atau diserahkan.',
    nuance: 'Kata umum untuk persiapan benda, bahan, tempat, atau kebutuhan. 準備する lebih luas dan dapat menekankan proses persiapan.', contexts: ['Percakapan', 'Pekerjaan', 'Kehidupan sehari-hari'], examples: [
      ['会議のために資料を十部用意した。', 'かいぎのためにしりょうをじゅうぶよういした。', 'Saya menyiapkan sepuluh salinan dokumen untuk rapat.'],
      ['来客に出すお茶と菓子を用意した。', 'らいきゃくにだすおちゃとかしをよういした。', 'Saya menyiapkan teh dan camilan untuk tamu.']
    ]
  },
  {
    word: '払った', reading: 'はらった', meaning: 'telah membayar; telah menyapu atau menyingkirkan',
    explanation: 'Bentuk lampau dari 払う. Umumnya berarti membayar uang, tetapi juga dapat berarti menyapu atau menghilangkan sesuatu.',
    nuance: 'Makna bergantung objek: 料金を払う (membayar biaya), 注意を払う (memberikan perhatian), ほこりを払う (menyapu debu).', contexts: ['Keuangan', 'Kehidupan sehari-hari', 'Pekerjaan'], examples: [
      ['昨日、授業料を銀行で払った。', 'きのう、じゅぎょうりょうをぎんこうではらった。', 'Kemarin saya membayar biaya kuliah di bank.'],
      ['彼は服についたほこりを手で払った。', 'かれはふくについたほこりをてではらった。', 'Ia menyingkirkan debu yang menempel pada pakaian dengan tangannya.']
    ]
  },
  {
    word: '預かった', reading: 'あずかった', meaning: 'telah menerima titipan; telah menyimpan sementara untuk orang lain',
    explanation: 'Bentuk lampau dari 預かる, yaitu menerima barang atau tanggung jawab untuk dijaga sampai dikembalikan atau diserahkan.',
    nuance: 'Berbeda dari 預けた yang berarti menitipkan dari sudut pandang pemilik. 預かった dilihat dari pihak yang menerima titipan.', contexts: ['Kehidupan sehari-hari', 'Bisnis', 'Layanan'], examples: [
      ['友人から旅行中の荷物を預かった。', 'ゆうじんからりょこうちゅうのにもつをあずかった。', 'Saya menerima titipan barang teman selama ia bepergian.'],
      ['受付でお客様の上着を預かった。', 'うけつけでおきゃくさまのうわぎをあずかった。', 'Saya menerima titipan mantel pelanggan di bagian resepsionis.']
    ]
  },
  {
    word: '返却した', reading: 'へんきゃくした', meaning: 'telah mengembalikan barang yang dipinjam',
    explanation: 'Bentuk lampau dari 返却する, yaitu mengembalikan benda atau dokumen kepada pemilik atau tempat asalnya.',
    nuance: 'Lebih formal daripada 返した dan umum untuk buku, kartu, alat, dokumen, serta barang sewaan.', contexts: ['Administrasi', 'Pendidikan', 'Kehidupan sehari-hari'], examples: [
      ['図書館で借りた本を期限内に返却した。', 'としょかんでかりたほんをきげんないにへんきゃくした。', 'Saya mengembalikan buku pinjaman perpustakaan sebelum tenggat.'],
      ['使い終わった機材を担当者に返却した。', 'つかいおわったきざいをたんとうしゃにへんきゃくした。', 'Saya mengembalikan peralatan yang sudah selesai digunakan kepada penanggung jawab.']
    ]
  },
  {
    word: '温和な', reading: 'おんわな', meaning: 'lembut; ramah; berwatak tenang',
    explanation: 'Menggambarkan sifat seseorang yang tidak mudah marah, bersikap tenang, dan memperlakukan orang lain dengan lembut.',
    nuance: 'Sering digunakan untuk kepribadian atau sikap. Juga dapat mendeskripsikan kondisi alam atau iklim yang tidak ekstrem.', contexts: ['Deskripsi orang', 'Kehidupan sosial', 'Cuaca'], examples: [
      ['新しい上司は温和な性格で、話しやすい。', 'あたらしいじょうしはおんわなせいかくで、はなしやすい。', 'Atasan baru itu berkepribadian lembut sehingga mudah diajak bicara.'],
      ['この地域は一年を通して温和な気候に恵まれている。', 'このちいきはいちねんをとおしておんわなきこうにめぐまれている。', 'Wilayah ini diberkahi iklim yang sedang sepanjang tahun.']
    ]
  },
  {
    word: 'おだやかな', reading: 'おだやかな', meaning: 'tenang; damai; tidak bergelora',
    explanation: 'Menggambarkan suasana, cuaca, perasaan, atau kepribadian yang tidak keras dan tidak penuh gejolak.',
    nuance: 'Sering ditulis 穏やかな. Bernuansa positif dan dapat dipakai untuk laut, suasana, ekspresi, atau sifat seseorang.', contexts: ['Deskripsi', 'Kehidupan sosial', 'Cuaca'], examples: [
      ['今日は海が穏やかで、波もほとんどない。', 'きょうはうみがおだやかで、なみもほとんどない。', 'Hari ini laut tenang dan hampir tidak ada ombak.'],
      ['彼女は穏やかな口調で説明を続けた。', 'かのじょはおだやかなこうちょうでせつめいをつづけた。', 'Ia melanjutkan penjelasannya dengan nada yang tenang.']
    ]
  },
  {
    word: 'さわやかな', reading: 'さわやかな', meaning: 'segar; menyegarkan; cerah dan menyenangkan',
    explanation: 'Menggambarkan udara, rasa, penampilan, atau kesan yang terasa segar dan nyaman.',
    nuance: 'Sering ditulis 爽やかな. Dapat digunakan untuk cuaca, angin, senyum, suara, dan rasa makanan.', contexts: ['Deskripsi', 'Cuaca', 'Kehidupan sehari-hari'], examples: [
      ['朝のさわやかな空気を胸いっぱいに吸い込んだ。', 'あさのさわやかなくうきをむねいっぱいにすいこんだ。', 'Saya menghirup udara pagi yang segar dalam-dalam.'],
      ['彼はさわやかな笑顔で挨拶してくれた。', 'かれはさわやかなえがおであいさつしてくれた。', 'Ia menyapa saya dengan senyum yang menyegarkan.']
    ]
  },
  {
    word: 'こまやかな', reading: 'こまやかな', meaning: 'teliti; halus; penuh perhatian pada detail',
    explanation: 'Menggambarkan perhatian, kepedulian, atau perbedaan kecil yang diperhatikan dengan saksama.',
    nuance: 'Sering ditulis 細やかな. Umumnya bernilai positif untuk perhatian dan pelayanan: 細やかな心配り.', contexts: ['Bisnis', 'Kehidupan sosial', 'Deskripsi'], examples: [
      ['彼女は細やかな気配りで客をもてなした。', 'かのじょはこまやかなきくばりできゃくをもてなした。', 'Ia menjamu tamu dengan perhatian yang sangat terperinci.'],
      ['細やかな説明のおかげで、仕組みを理解できた。', 'こまやかなせつめいのおかげで、しくみをりかいできた。', 'Berkat penjelasan yang terperinci, saya dapat memahami mekanismenya.']
    ]
  },
  {
    word: 'かろやかな', reading: 'かろやかな', meaning: 'ringan; luwes; terasa mudah dan tidak berat',
    explanation: 'Menggambarkan gerakan, langkah, suara, atau suasana yang ringan dan tidak kaku.',
    nuance: 'Sering ditulis 軽やかな. Cenderung bernilai positif dan digunakan untuk gerakan, musik, atau langkah yang terasa lincah.', contexts: ['Deskripsi', 'Musik', 'Olahraga'], examples: [
      ['彼女は軽やかな足取りで階段を上っていった。', 'かのじょはかろやかなあしどりでかいだんをのぼっていった。', 'Ia menaiki tangga dengan langkah yang ringan.'],
      ['軽やかな音楽が会場の雰囲気を明るくした。', 'かろやかなおんがくがかいじょうのふんいきをあかるくした。', 'Musik yang ringan membuat suasana tempat acara menjadi cerah.']
    ]
  },
  {
    word: 'スポット', reading: 'すぽっと', meaning: 'tempat tertentu; lokasi; sorotan (spotlight)',
    explanation: 'Menunjukkan tempat khusus yang menarik atau menjadi sasaran perhatian; juga dapat berarti sorotan cahaya.',
    nuance: 'Sering muncul dalam 観光スポット (tempat wisata) dan スポットライト (lampu sorot). Makna ditentukan konteks.', contexts: ['Pariwisata', 'Media', 'Deskripsi'], examples: [
      ['この公園は写真撮影の人気スポットだ。', 'このこうえんはしゃしんさつえいのにんきすぽっとだ。', 'Taman ini merupakan tempat populer untuk mengambil foto.'],
      ['舞台の中央にスポットが当たった。', 'ぶたいのちゅうおうにすぽっとがあたった。', 'Sorotan lampu jatuh ke bagian tengah panggung.']
    ]
  },
  {
    word: '場所', reading: 'ばしょ', meaning: 'tempat; lokasi; ruang tertentu',
    explanation: 'Titik atau area tempat seseorang atau sesuatu berada atau suatu kegiatan dilakukan.',
    nuance: 'Kata umum yang dapat digunakan untuk lokasi fisik maupun tempat abstrak. 場面 lebih merujuk pada situasi atau adegan.', contexts: ['Percakapan', 'Kehidupan sehari-hari', 'Formal'], examples: [
      ['待ち合わせの場所を駅の出口に決めた。', 'まちあわせのばしょをえきのでぐちにきめた。', 'Kami menentukan pintu keluar stasiun sebagai tempat bertemu.'],
      ['静かに勉強できる場所を探している。', 'しずかにべんきょうできるばしょをさがしている。', 'Saya sedang mencari tempat yang tenang untuk belajar.']
    ]
  },
  {
    word: '商品', reading: 'しょうひん', meaning: 'produk atau barang yang dijual',
    explanation: 'Barang atau layanan yang disediakan untuk dijual kepada konsumen.',
    nuance: 'Lebih khusus daripada 製品, yang sering menekankan barang hasil produksi. 商品 menekankan barang sebagai objek perdagangan.', contexts: ['Bisnis', 'Ekonomi', 'Kehidupan sehari-hari'], examples: [
      ['新商品は来週から全国の店で販売される。', 'しんしょうひんはらいしゅうからぜんこくのみせではんばいされる。', 'Produk baru akan dijual di toko-toko seluruh negeri mulai minggu depan.'],
      ['商品について質問があれば、店員にお尋ねください。', 'しょうひんについてしつもんがあれば、てんいんにおたずねください。', 'Jika ada pertanyaan mengenai produk, silakan tanyakan kepada pegawai toko.']
    ]
  },
  {
    word: '方法', reading: 'ほうほう', meaning: 'cara; metode; prosedur',
    explanation: 'Langkah atau teknik yang digunakan untuk mencapai tujuan atau menyelesaikan sesuatu.',
    nuance: 'Kata umum dan netral. 手段 sering menekankan sarana untuk mencapai tujuan, sedangkan 方法 menekankan cara pelaksanaannya.', contexts: ['Pendidikan', 'Pekerjaan', 'Kehidupan sehari-hari'], examples: [
      ['効率よく単語を覚える方法を教えてください。', 'こうりつよくたんごをおぼえるほうほうをおしえてください。', 'Tolong ajari saya cara menghafal kosakata secara efisien.'],
      ['問題を解決する方法はいくつか考えられる。', 'もんだいをかいけつするほうほうはいくつかかんがえられる。', 'Ada beberapa cara yang dapat dipertimbangkan untuk menyelesaikan masalah.']
    ]
  },
  {
    word: '時期', reading: 'じき', meaning: 'waktu atau periode tertentu; masa yang tepat',
    explanation: 'Rentang atau titik waktu yang berkaitan dengan suatu kegiatan, peristiwa, atau perubahan.',
    nuance: 'Sering digunakan untuk musim, tahap, dan waktu yang tepat: 収穫の時期, 時期尚早. Berbeda dari 時間 yang menekankan durasi atau jam.', contexts: ['Berita', 'Pekerjaan', 'Kehidupan sehari-hari'], examples: [
      ['桜が咲く時期になると、多くの観光客が訪れる。', 'さくらがさくじきになると、おおくのかんこうきゃくがおとずれる。', 'Saat musim bunga sakura tiba, banyak wisatawan berkunjung.'],
      ['新しい制度を始める時期について話し合った。', 'あたらしいせいどをはじめるじきについてはなしあった。', 'Kami berdiskusi tentang waktu untuk memulai sistem baru.']
    ]
  },
  {
    word: '拮抗している', reading: 'きっこうしている', meaning: 'berimbang; kekuatan atau hasilnya hampir sama',
    explanation: 'Menunjukkan bahwa dua pihak atau keadaan memiliki kekuatan, kemampuan, atau jumlah yang hampir seimbang.',
    nuance: 'Cenderung formal dan sering digunakan dalam olahraga, politik, persaingan, atau statistik. Menggambarkan persaingan yang ketat.', contexts: ['Olahraga', 'Berita', 'Politik'], examples: [
      ['両チームの実力は拮抗している。', 'りょうちーむのじつりょくはきっこうしている。', 'Kemampuan kedua tim seimbang.'],
      ['選挙では二人の候補者が拮抗している。', 'せんきょではふたりのこうほしゃがきっこうしている。', 'Dalam pemilihan, kedua kandidat bersaing dengan kekuatan yang berimbang.']
    ]
  },
  {
    word: '差がない', reading: 'さがない', meaning: 'tidak ada perbedaan; sama atau hampir setara',
    explanation: 'Menunjukkan bahwa dua atau lebih hal memiliki perbedaan yang tidak ada atau sangat kecil pada aspek yang dibandingkan.',
    nuance: 'Ungkapan netral untuk perbandingan. Perlu memperhatikan aspek yang dibandingkan karena tidak berarti semua sifatnya sama.', contexts: ['Percakapan', 'Akademik', 'Bisnis'], examples: [
      ['二つの商品の性能にはほとんど差がない。', 'ふたつのしょうひんのせいのうにはほとんどさがない。', 'Hampir tidak ada perbedaan kinerja antara kedua produk.'],
      ['今回の試験では、平均点に大きな差がなかった。', 'こんかいのしけんでは、へいきんてんにおおきなさがなかった。', 'Dalam ujian kali ini, tidak ada perbedaan besar pada nilai rata-rata.']
    ]
  },
  {
    word: '差がある', reading: 'さがある', meaning: 'terdapat perbedaan; tidak sama',
    explanation: 'Menunjukkan bahwa dua atau lebih hal berbeda dalam jumlah, kualitas, tingkat, atau keadaan tertentu.',
    nuance: 'Ungkapan netral yang perlu diikuti konteks atau aspek perbandingan. 大きな差がある berarti perbedaannya besar.', contexts: ['Percakapan', 'Akademik', 'Bisnis'], examples: [
      ['地域によって生活費に大きな差がある。', 'ちいきによってせいかつひにおおきなさがある。', 'Terdapat perbedaan besar dalam biaya hidup antarwilayah.'],
      ['同じ商品でも、店によって価格に差がある。', 'おなじしょうひんでも、みせによってかかくにさがある。', 'Bahkan untuk produk yang sama, harganya berbeda-beda tergantung toko.']
    ]
  },
  {
    word: '高くなっている', reading: 'たかくなっている', meaning: 'telah menjadi lebih tinggi atau mahal',
    explanation: 'Menunjukkan keadaan yang berubah menjadi lebih tinggi, baik secara fisik, nilai, harga, maupun tingkat.',
    nuance: 'Maknanya bergantung konteks: harga, suhu, tingkat, posisi, atau kualitas. Dalam data dan berita sering dipakai untuk tren kenaikan.', contexts: ['Ekonomi', 'Berita', 'Kehidupan sehari-hari'], examples: [
      ['最近、電気料金が高くなっている。', 'さいきん、でんきりょうきんがたかくなっている。', 'Akhir-akhir ini tarif listrik semakin mahal.'],
      ['この地域では建物の高さが以前より高くなっている。', 'このちいきではたてもののたかさがいぜんよりたかくなっている。', 'Di wilayah ini, bangunan menjadi lebih tinggi dibandingkan sebelumnya.']
    ]
  },
  {
    word: '低くなっている', reading: 'ひくくなっている', meaning: 'telah menjadi lebih rendah atau menurun',
    explanation: 'Menunjukkan keadaan yang berubah menjadi lebih rendah, baik posisi, nilai, harga, suhu, maupun tingkat.',
    nuance: 'Sering dipakai untuk angka, suhu, suara, atau posisi. Untuk kualitas yang menurun, perlu konteks agar maknanya jelas.', contexts: ['Berita', 'Ekonomi', 'Kehidupan sehari-hari'], examples: [
      ['今年は水位が例年より低くなっている。', 'ことしはすいいがれいねんよりひくくなっている。', 'Tahun ini permukaan air lebih rendah daripada tahun-tahun biasa.'],
      ['室内の湿度が低くなっているので、加湿器を使おう。', 'しつないのしつどがひくくなっているので、かしつきをつかおう。', 'Karena kelembapan di dalam ruangan menurun, mari gunakan pelembap udara.']
    ]
  },
  {
    word: '風当たり', reading: 'かぜあたり', meaning: 'terpaan angin; tekanan atau kritik dari pihak lain',
    explanation: 'Secara harfiah berarti terkena angin. Secara kiasan berarti menghadapi kritik, tekanan, atau sikap tidak menyenangkan dari orang lain.',
    nuance: 'Sering digunakan sebagai 風当たりが強い untuk menyatakan kritik atau tekanan sosial yang berat.', contexts: ['Berita', 'Sosial', 'Kehidupan sehari-hari'], examples: [
      ['この家は風当たりが強いので、窓を閉めておこう。', 'このいえはかぜあたりがつよいので、まどをしめておこう。', 'Rumah ini sering terkena angin kencang, jadi mari tutup jendelanya.'],
      ['新しい方針を発表した後、会社への風当たりが強くなった。', 'あたらしいほうしんをはっぴょうしたあと、かいしゃへのかぜあたりがつよくなった。', 'Setelah kebijakan baru diumumkan, kritik terhadap perusahaan semakin keras.']
    ]
  },
  {
    word: '批判', reading: 'ひはん', meaning: 'kritik; penilaian yang menunjukkan kekurangan atau kesalahan',
    explanation: 'Menilai tindakan, pendapat, atau kebijakan dengan menunjukkan masalah, kekurangan, atau hal yang dianggap salah.',
    nuance: 'Dapat bersifat membangun maupun negatif. 批判する tidak selalu berarti menghina; konteks dan cara penyampaiannya penting.', contexts: ['Berita', 'Akademik', 'Sosial'], examples: [
      ['専門家は政府の対応を厳しく批判した。', 'せんもんかはせいふのたいおうをきびしくひはんした。', 'Para ahli mengkritik keras respons pemerintah.'],
      ['他人の意見を批判する前に、内容をよく理解しよう。', 'たにんのいけんをひはんするまえに、ないようをよくりかいしよう。', 'Sebelum mengkritik pendapat orang lain, mari pahami isinya dengan baik.']
    ]
  },
  {
    word: '要求', reading: 'ようきゅう', meaning: 'tuntutan; permintaan yang tegas',
    explanation: 'Meminta sesuatu agar dipenuhi, sering kali dengan alasan bahwa hal tersebut merupakan hak atau kebutuhan.',
    nuance: 'Lebih tegas daripada 依頼. Dapat digunakan dalam hubungan kerja, negosiasi, konsumen, dan tuntutan sosial.', contexts: ['Bisnis', 'Berita', 'Kehidupan sosial'], examples: [
      ['住民は市に安全な道路の整備を要求した。', 'じゅうみんはしにあんぜんなどうろのせいびをようきゅうした。', 'Warga menuntut pemerintah kota memperbaiki jalan agar aman.'],
      ['顧客の要求に応えるため、製品を改良した。', 'こきゃくのようきゅうにこたえるため、せいひんをかいりょうした。', 'Produk diperbaiki untuk memenuhi tuntutan pelanggan.']
    ]
  },
  {
    word: '信頼', reading: 'しんらい', meaning: 'kepercayaan; keyakinan terhadap seseorang atau sesuatu',
    explanation: 'Perasaan yakin bahwa seseorang atau organisasi dapat dipercaya dan akan bertindak dengan baik atau benar.',
    nuance: 'Sering digunakan dalam 信頼関係 dan 信頼を得る. Lebih kuat dan berkelanjutan daripada sekadar 好き atau 親しい.', contexts: ['Kehidupan sosial', 'Bisnis', 'Pekerjaan'], examples: [
      ['小さな約束を守ることが信頼につながる。', 'ちいさなやくそくをまもることがしんらいにつながる。', 'Menepati janji kecil akan membangun kepercayaan.'],
      ['長年の経験によって、顧客からの信頼を得た。', 'ながねんのけいけんによって、こきゃくからのしんらいをえた。', 'Berkat pengalaman bertahun-tahun, ia memperoleh kepercayaan pelanggan.']
    ]
  },
  {
    word: '期待', reading: 'きたい', meaning: 'harapan; ekspektasi',
    explanation: 'Perasaan atau perkiraan bahwa seseorang atau sesuatu akan memberikan hasil yang baik atau memenuhi keinginan.',
    nuance: 'Entri kedua ini mempertahankan pengulangan kata pada daftar sumber. Makna dan penggunaan sama dengan entri 期待 sebelumnya.', contexts: ['Kehidupan sosial', 'Pekerjaan', 'Pendidikan'], examples: [
      ['新しい企画には大きな期待が寄せられている。', 'あたらしいきかくにはおおきなきたいがよせられている。', 'Harapan besar ditujukan pada rencana baru tersebut.'],
      ['期待しすぎず、結果を冷静に受け止めたい。', 'きたいしすぎず、けっかをれいせいにうけとめたい。', 'Saya ingin menerima hasil dengan tenang tanpa berharap terlalu tinggi.']
    ]
  },
  {
    word: 'あどけない', reading: 'あどけない', meaning: 'polos seperti anak kecil; lugu dan tidak dibuat-buat',
    explanation: 'Menggambarkan wajah, ekspresi, atau sikap yang menunjukkan kepolosan dan keluguan khas anak-anak.',
    nuance: 'Biasanya bernada positif atau penuh kasih sayang. Tidak sama dengan 子どもっぽい yang dapat bernada kekanak-kanakan.', contexts: ['Deskripsi orang', 'Sastra', 'Kehidupan sosial'], examples: [
      ['写真には、あどけない笑顔の子どもが写っている。', 'しゃしんには、あどけないえがおのこどもがうつっている。', 'Dalam foto itu terlihat anak dengan senyum yang polos.'],
      ['彼女のあどけない表情に、皆が思わず笑顔になった。', 'かのじょのあどけないひょうじょうに、みんながおもわずえがおになった。', 'Ekspresinya yang lugu membuat semua orang tanpa sadar tersenyum.']
    ]
  },
  {
    word: '無邪気な', reading: 'むじゃきな', meaning: 'polos; lugu; tidak memiliki niat buruk',
    explanation: 'Menggambarkan sikap yang jujur dan bebas dari tipu daya atau kepentingan tersembunyi, sering dikaitkan dengan anak-anak.',
    nuance: 'Umumnya positif, tetapi dalam konteks tertentu dapat menyiratkan kurangnya kesadaran terhadap dampak tindakan.', contexts: ['Deskripsi orang', 'Kehidupan sosial', 'Sastra'], examples: [
      ['子どもたちは無邪気な笑い声を上げて遊んでいた。', 'こどもたちはむじゃきなわらいごえをあげてあそんでいた。', 'Anak-anak bermain sambil tertawa dengan polos.'],
      ['彼の無邪気な質問に、会場の人々は和んだ。', 'かれのむじゃきなしつもんに、かいじょうのひとびとはなごんだ。', 'Pertanyaannya yang polos membuat orang-orang di tempat acara merasa lebih santai.']
    ]
  },
  {
    word: '不安そうな', reading: 'ふあんそうな', meaning: 'tampak cemas; terlihat khawatir',
    explanation: 'Menggambarkan ekspresi atau keadaan seseorang yang terlihat gelisah, tidak yakin, atau takut terhadap sesuatu.',
    nuance: 'そう menunjukkan kesan dari pengamatan luar, bukan kepastian tentang perasaan orang tersebut.', contexts: ['Percakapan', 'Deskripsi orang', 'Kehidupan sosial'], examples: [
      ['彼女は不安そうな顔で結果を待っていた。', 'かのじょはふあんそうなかおでけっかをまっていた。', 'Ia menunggu hasil dengan wajah yang tampak cemas.'],
      ['不安そうな学生に、先生が優しく声をかけた。', 'ふあんそうながくせいに、せんせいがやさしくこえをかけた。', 'Guru menyapa dengan lembut siswa yang terlihat khawatir.']
    ]
  },
  {
    word: '真剣な', reading: 'しんけんな', meaning: 'serius; sungguh-sungguh; penuh perhatian',
    explanation: 'Menggambarkan sikap yang benar-benar mencurahkan perhatian dan usaha pada suatu hal tanpa bercanda atau menganggap enteng.',
    nuance: 'Sering digunakan untuk ekspresi, pembicaraan, sikap, dan upaya. 真剣に考える berarti memikirkan sesuatu dengan sungguh-sungguh.', contexts: ['Pendidikan', 'Pekerjaan', 'Kehidupan sosial'], examples: [
      ['彼は真剣な表情で将来について話した。', 'かれはしんけんなひょうじょうでしょうらいについてはなした。', 'Ia berbicara tentang masa depan dengan ekspresi serius.'],
      ['問題を解決するために、全員が真剣に取り組んだ。', 'もんだいをかいけつするために、ぜんいんがしんけんにとりくんだ。', 'Semua orang menangani masalah itu dengan sungguh-sungguh untuk menyelesaikannya.']
    ]
  },
  {
    word: '羨ましそう', reading: 'うらやましそう', meaning: 'tampak iri; terlihat menginginkan sesuatu yang dimiliki orang lain',
    explanation: 'Menggambarkan ekspresi atau sikap seseorang yang terlihat menginginkan keadaan atau milik orang lain.',
    nuance: 'そう menunjukkan kesan yang terlihat dari luar. 羨ましい sendiri dapat menyatakan rasa iri yang positif maupun tidak nyaman, tergantung konteks.', contexts: ['Percakapan', 'Deskripsi orang', 'Kehidupan sosial'], examples: [
      ['友人の合格を聞いて、彼は羨ましそうに笑った。', 'ゆうじんのごうかくをきいて、かれはうらやましそうにわらった。', 'Mendengar temannya lulus, ia tersenyum dengan tampak iri.'],
      ['海外旅行の写真を見て、妹は羨ましそうだった。', 'かいがいりょこうのしゃしんをみて、いもうとはうらやましそうだった。', 'Melihat foto perjalanan ke luar negeri, adik perempuan saya tampak iri.']
    ]
  },
  {
    word: '出荷', reading: 'しゅっか', meaning: 'pengiriman barang dari produsen atau gudang',
    explanation: 'Mengirim produk atau barang keluar dari pabrik, gudang, atau tempat produksi menuju toko maupun pembeli.',
    nuance: 'Istilah logistik dan perdagangan. Berbeda dari 発送 yang lebih umum untuk tindakan mengirim paket atau surat.', contexts: ['Bisnis', 'Logistik', 'Ekonomi'], examples: [
      ['新しい製品は来週から全国に出荷される。', 'あたらしいせいひんはらいしゅうからぜんこくにしゅっかされる。', 'Produk baru akan dikirim ke seluruh negeri mulai minggu depan.'],
      ['台風の影響で農作物の出荷が遅れている。', 'たいふうのえいきょうでのうさくぶつのしゅっかがおくれている。', 'Pengiriman hasil pertanian terlambat akibat dampak topan.']
    ]
  },
  {
    word: '譲る', reading: 'ゆずる', meaning: 'memberikan; menyerahkan; mengalah atau memberi jalan',
    explanation: 'Memberikan hak, barang, tempat, atau kesempatan kepada orang lain, atau mengalah dalam suatu persaingan atau perbedaan pendapat.',
    nuance: 'Maknanya luas: 席を譲る (memberikan tempat duduk), 権利を譲る (mengalihkan hak), 一歩も譲らない (tidak mengalah sama sekali).', contexts: ['Kehidupan sosial', 'Bisnis', 'Percakapan'], examples: [
      ['電車でお年寄りに席を譲った。', 'でんしゃでおとしよりにせきをゆずった。', 'Saya memberikan tempat duduk kepada orang lanjut usia di kereta.'],
      ['価格については、これ以上譲ることができない。', 'かかくについては、これいじょうゆずることができない。', 'Mengenai harga, kami tidak dapat mengalah lebih jauh lagi.']
    ]
  },
  {
    word: '底力', reading: 'そこぢから', meaning: 'kekuatan tersembunyi; kemampuan yang muncul saat diperlukan',
    explanation: 'Kemampuan atau tenaga yang sebenarnya dimiliki seseorang atau kelompok dan muncul ketika menghadapi keadaan sulit.',
    nuance: 'Bernuansa positif dan sering digunakan untuk menggambarkan potensi yang belum terlihat. 底力を発揮する berarti menunjukkan kekuatan sejati.', contexts: ['Olahraga', 'Pekerjaan', 'Sosial'], examples: [
      ['チームは最後の試合で底力を発揮した。', 'ちーむはさいごのしあいでそこぢからをはっきした。', 'Tim itu menunjukkan kekuatan tersembunyinya dalam pertandingan terakhir.'],
      ['困難な状況でこそ、その人の底力が試される。', 'こんなんなじょうきょうでこそ、そのひとのそこぢからがためされる。', 'Justru dalam situasi sulit, kekuatan sejati seseorang diuji.']
    ]
  },
  {
    word: '絶大', reading: 'ぜつだい', meaning: 'sangat besar; luar biasa kuat atau berpengaruh',
    explanation: 'Menunjukkan tingkat pengaruh, dukungan, kepercayaan, atau kekuatan yang sangat besar.',
    nuance: 'Cenderung formal dan sering digunakan dalam 絶大な人気・信頼・影響力. Biasanya bernada kuat dan positif, tetapi dapat netral sesuai konteks.', contexts: ['Berita', 'Bisnis', 'Sosial'], examples: [
      ['その選手は国内で絶大な人気を誇っている。', 'そのせんしゅはこくないでぜつだいなにんきをほこっている。', 'Atlet itu memiliki popularitas yang luar biasa besar di dalam negeri.'],
      ['長年の研究が社会に絶大な影響を与えた。', 'ながねんのけんきゅうがしゃかいにぜつだいなえいきょうをあたえた。', 'Penelitian bertahun-tahun itu memberikan pengaruh yang sangat besar kepada masyarakat.']
    ]
  },
  {
    word: '手痛い', reading: 'ていたい', meaning: 'sangat merugikan; pukulan yang berat atau menyakitkan',
    explanation: 'Menggambarkan kerugian, kekalahan, atau pengalaman yang dampaknya terasa berat dan sulit diabaikan.',
    nuance: 'Sering digunakan secara kiasan dalam 手痛い失敗・損失・打撃. Lebih kuat daripada sekadar 痛い dan bernada negatif.', contexts: ['Berita', 'Bisnis', 'Olahraga'], examples: [
      ['会社は新事業の失敗で手痛い損失を受けた。', 'かいしゃはしんじぎょうのしっぱいでていたいそんしつをうけた。', 'Perusahaan mengalami kerugian besar akibat kegagalan bisnis baru.'],
      ['優勝候補にとって、初戦の敗北は手痛い一撃だった。', 'ゆうしょうこうほにとって、しょせんのはいぼくはていたいいちげきだった。', 'Bagi kandidat juara, kekalahan pada pertandingan pertama merupakan pukulan berat.']
    ]
  },
  {
    word: '誘致', reading: 'ゆうち', meaning: 'mengundang atau menarik perusahaan, fasilitas, acara ke suatu wilayah',
    explanation: 'Melakukan upaya agar perusahaan, organisasi, fasilitas, atau acara memilih datang dan beroperasi di suatu tempat.',
    nuance: 'Formal dan sering digunakan dalam kebijakan pemerintah daerah serta pengembangan ekonomi: 企業誘致, 観光客誘致.', contexts: ['Administrasi', 'Ekonomi', 'Berita'], examples: [
      ['市は新しい工場の誘致に力を入れている。', 'しはあたらしいこうじょうのゆうちにちからをいれている。', 'Pemerintah kota berupaya keras menarik pembangunan pabrik baru.'],
      ['大会の誘致によって、地域の観光業が活性化した。', 'たいかいのゆうちによって、ちいきのかんこうぎょうがかっせいかした。', 'Upaya menarik penyelenggaraan turnamen menghidupkan industri pariwisata daerah.']
    ]
  }
];

// ID diturunkan dari karakter kosakata, bukan nomor posisi array.
// Jika suatu kosakata muncul lebih dari sekali di daftar sumber, ID diberi akhiran unik.
const occurrences = new Map();
export const day2Vocabulary = source.map((item) => {
  const code = Array.from(item.word)
    .map((char) => char.codePointAt(0).toString(16))
    .join('-');
  const count = (occurrences.get(item.word) || 0) + 1;
  occurrences.set(item.word, count);
  return {
    id: `d2-${code}-${String(count).padStart(2, '0')}`,
    ...item,
    examples: item.examples.map(([japanese, furigana, translation]) => ({
      japanese,
      furigana,
      translation
    }))
  };
});

export default day2Vocabulary;
