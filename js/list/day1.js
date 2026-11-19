// Day 1 — data kosakata. Setiap kosakata memiliki dua contoh kalimat.
const entries = {
  azadoru: { word: '侮る', reading: 'あなどる', meaning: 'meremehkan; memandang rendah', explanation: 'Menganggap seseorang atau sesuatu tidak penting, tidak kuat, atau tidak mampu sehingga nilainya diremehkan.', nuance: 'Bernada negatif dan lebih kuat daripada sekadar menganggap remeh. Sering dipakai sebagai peringatan: jangan meremehkan lawan, risiko, atau kemampuan orang lain.', contexts: ['Berita', 'Kehidupan sosial', 'Formal'], examples: [
    ['相手の実力を侮ってはいけない。', 'あいてのじつりょくをあなどってはいけない。', 'Kita tidak boleh meremehkan kemampuan lawan.'],
    ['小さなミスだと侮った結果、大きな問題になった。', 'ちいさなみすだとあなどったけっか、おおきなもんだいになった。', 'Karena menganggapnya hanya kesalahan kecil, akhirnya masalah itu menjadi besar.']
  ]},
  honpo: { word: '奔放', reading: 'ほんぽう', meaning: 'bebas; tidak terkekang', explanation: 'Sifat atau perilaku yang dilakukan dengan leluasa tanpa terlalu terikat aturan, kebiasaan, atau batasan.', nuance: 'Sering muncul dalam gabungan 自由奔放. Dapat terdengar positif sebagai ekspresi diri yang bebas, tetapi juga dapat bernada negatif bila perilakunya dianggap tidak terkendali.', contexts: ['Sastra', 'Kehidupan sosial', 'Deskripsi orang'], examples: [
    ['彼女は自由奔放な発想で周囲を驚かせた。', 'かのじょはじゆうほんぽうなはっそうでしゅういをおどろかせた。', 'Ia mengejutkan orang-orang di sekitarnya dengan gagasannya yang bebas.'],
    ['若い頃は奔放な生活を送っていたという。', 'わかいころはほんぽうなせいかつをおくっていたという。', 'Konon, saat muda ia menjalani kehidupan yang tidak terkekang.']
  ]},
  zekkyou: { word: '絶叫', reading: 'ぜっきょう', meaning: 'teriakan keras; jeritan', explanation: 'Mengeluarkan suara sangat keras karena takut, terkejut, gembira, atau emosi yang kuat.', nuance: 'Lebih kuat dan dramatis daripada 叫ぶ. Umum dalam berita, laporan kejadian, hiburan, dan deskripsi suasana yang penuh emosi.', contexts: ['Berita', 'Hiburan', 'Narasi'], examples: [
    ['突然の物音に驚き、彼女は絶叫した。', 'とつぜんのおとにおどろき、かのじょはぜっきょうした。', 'Terkejut oleh suara mendadak, ia menjerit keras.'],
    ['観客の絶叫が会場に響き渡った。', 'かんきゃくのぜっきょうがかいじょうにひびきわたった。', 'Teriakan penonton bergema di seluruh tempat acara.']
  ]},
  haigo: { word: '背後', reading: 'はいご', meaning: 'belakang; di balik', explanation: 'Bagian yang berada di belakang seseorang atau sesuatu. Secara kiasan, dapat menunjuk alasan, pihak, atau keadaan tersembunyi di balik suatu peristiwa.', nuance: 'Lebih formal daripada 後ろ. Dalam konteks berita, 背後に〜がある sering berarti ada faktor atau kepentingan tersembunyi di balik sesuatu.', contexts: ['Berita', 'Analisis', 'Percakapan'], examples: [
    ['背後から誰かに名前を呼ばれた。', 'はいごからだれかになまえをよばれた。', 'Ada seseorang yang memanggil namaku dari belakang.'],
    ['事件の背後には複雑な事情があった。', 'じけんのはいごにはふくざつなじじょうがあった。', 'Di balik kasus itu terdapat keadaan yang rumit.']
  ]},
  houfu: { word: '抱負', reading: 'ほうふ', meaning: 'cita-cita; tekad; tujuan yang ingin dicapai', explanation: 'Keinginan atau sasaran yang kuat untuk masa depan, biasanya disertai niat untuk mewujudkannya.', nuance: 'Lazim digunakan dalam konteks formal seperti wawancara, pidato, awal tahun, atau perkenalan. 抱負を語る berarti menyampaikan tekad atau rencana ke depan.', contexts: ['Akademik', 'Wawancara', 'Formal'], examples: [
    ['新入社員としての抱負を述べた。', 'しんにゅうしゃいんとしてのほうふをのべた。', 'Ia menyampaikan tekadnya sebagai karyawan baru.'],
    ['今年の抱負は、日本語で自然に話せるようになることだ。', 'ことしのほうふは、にほんごでしぜんにはなせるようになることだ。', 'Targetku tahun ini adalah agar bisa berbicara bahasa Jepang dengan alami.']
  ]},
  karakau: { word: 'からかう', reading: 'からかう', meaning: 'menggoda; meledek', explanation: 'Mengatakan atau melakukan sesuatu untuk membuat orang lain bereaksi, biasanya dengan nada bercanda atau mengejek.', nuance: 'Bisa akrab dan ringan di antara teman, tetapi dapat menyakiti hati bila berlebihan atau menyinggung kelemahan seseorang. Berbeda dari 罵る yang jauh lebih kasar.', contexts: ['Percakapan sehari-hari', 'Kehidupan sosial'], examples: [
    ['友達は私の発音をからかった。', 'ともだちはわたしのはつおんをからかった。', 'Temanku meledek pelafalanku.'],
    ['嫌がっている人を何度もからうのはよくない。', 'いやがっているひとをなんどもからかうのはよくない。', 'Tidak baik terus-menerus menggoda orang yang merasa terganggu.']
  ]},
  nonoshiru: { word: '罵る', reading: 'ののしる', meaning: 'mencaci maki; memaki', explanation: 'Mengucapkan kata-kata kasar atau hinaan kepada seseorang dengan kemarahan atau kebencian.', nuance: 'Sangat negatif dan lebih keras daripada からかう. Sering digunakan dalam berita atau tulisan untuk menggambarkan pertengkaran dan serangan verbal.', contexts: ['Berita', 'Kehidupan sosial', 'Tulisan formal'], examples: [
    ['彼は相手を大声で罵った。', 'かれはあいてをおおごえでののしった。', 'Ia memaki lawannya dengan suara keras.'],
    ['意見が違っても、相手を罵るべきではない。', 'いけんがちがっても、あいてをののしるべきではない。', 'Walaupun pendapat berbeda, kita tidak seharusnya mencaci maki lawan bicara.']
  ]},
  uragiru: { word: '裏切る', reading: 'うらぎる', meaning: 'mengkhianati; mengingkari kepercayaan', explanation: 'Melakukan sesuatu yang bertentangan dengan kepercayaan, harapan, janji, atau dukungan yang diberikan orang lain.', nuance: 'Dapat digunakan untuk hubungan antarmanusia, janji, harapan, atau ekspektasi. 期待を裏切る berarti tidak memenuhi harapan, tidak selalu berarti pengkhianatan pribadi.', contexts: ['Kehidupan sosial', 'Berita', 'Percakapan'], examples: [
    ['長年の友人を裏切ることはできない。', 'ながねんのゆうじんをうらぎることはできない。', 'Aku tidak bisa mengkhianati teman yang sudah lama kukenal.'],
    ['その映画は観客の期待を裏切らない。', 'そのえいがはかんきゃくのきたいをうらぎらない。', 'Film itu tidak mengecewakan harapan penonton.']
  ]},
  sujimichi: { word: '筋道', reading: 'すじみち', meaning: 'alur yang logis; urutan yang masuk akal', explanation: 'Susunan pemikiran atau penjelasan yang runtut sehingga alasan dan kesimpulannya dapat dipahami.', nuance: 'Sering digunakan dalam 筋道を立てる (menyusun secara logis) dan 筋道が通る (masuk akal). Menekankan keteraturan logika, bukan sekadar urutan waktu.', contexts: ['Akademik', 'Diskusi', 'Bisnis'], examples: [
    ['筋道を立てて説明すれば、相手にも伝わる。', 'すじみちをたててせつめいすれば、あいてにもつたわる。', 'Jika dijelaskan secara runtut dan logis, lawan bicara juga akan memahaminya.'],
    ['彼の主張は筋道が通っている。', 'かれのしゅちょうはすじみちがとおっている。', 'Argumennya masuk akal.']
  ]},
 tekiou: { word: '適応', reading: 'てきおう', meaning: 'penyesuaian; adaptasi', explanation: 'Menyesuaikan diri atau sesuatu dengan lingkungan, kondisi, kebutuhan, atau aturan yang berbeda.', nuance: 'Netral dan sering digunakan dalam konteks akademik, pekerjaan, biologi, serta masyarakat. 環境に適応する berarti beradaptasi dengan lingkungan.', contexts: ['Akademik', 'Pekerjaan', 'Ilmu pengetahuan'], examples: [
    ['新しい環境に適応するには時間がかかる。', 'あたらしいかんきょうにてきおうするにはじかんがかかる。', 'Dibutuhkan waktu untuk beradaptasi dengan lingkungan baru.'],
    ['この制度は地域の実情に適応している。', 'このせいどはちいきのじつじょうにてきおうしている。', 'Sistem ini disesuaikan dengan keadaan nyata di wilayah tersebut.']
  ]},
  gacchi: { word: '合致', reading: 'がっち', meaning: 'kesesuaian; kecocokan; sejalan', explanation: 'Dua hal memiliki isi, tujuan, syarat, atau keadaan yang cocok satu sama lain.', nuance: 'Lebih formal daripada 合う. Sering dipakai dalam frasa 条件に合致する atau 方針と合致する pada dokumen, berita, dan pembahasan resmi.', contexts: ['Bisnis', 'Berita', 'Formal'], examples: [
    ['応募条件に合致しているか確認してください。', 'おうぼじょうけんにがっちしているかかくにんしてください。', 'Silakan periksa apakah Anda memenuhi persyaratan pendaftaran.'],
    ['両者の考え方は会社の方針と合致している。', 'りょうしゃのかんがえかたはかいしゃのほうしんとがっちしている。', 'Pandangan keduanya sejalan dengan kebijakan perusahaan.']
  ]},
  tenkan: { word: '転換', reading: 'てんかん', meaning: 'perubahan arah; peralihan; pengalihan', explanation: 'Mengubah arah, cara, sistem, atau keadaan dari satu bentuk ke bentuk lain.', nuance: 'Sering menunjukkan perubahan yang cukup besar atau strategis, misalnya 方針転換 (perubahan kebijakan) dan 発想の転換 (perubahan cara berpikir).', contexts: ['Berita', 'Bisnis', 'Akademik'], examples: [
    ['会社は事業の方向を大きく転換した。', 'かいしゃはじぎょうのほうこうをおおきくてんかんした。', 'Perusahaan mengubah arah bisnisnya secara besar-besaran.'],
    ['行き詰まったときこそ、発想の転換が必要だ。', 'いきづまったときこそ、はっそうのてんかんがひつようだ。', 'Justru ketika menemui jalan buntu, perubahan cara berpikir diperlukan.']
  ]},
  suii: { word: '推移', reading: 'すいい', meaning: 'perkembangan; perubahan dari waktu ke waktu', explanation: 'Perubahan atau pergerakan suatu keadaan secara bertahap dalam rentang waktu tertentu.', nuance: 'Cenderung formal dan objektif, sering dipakai untuk angka, tren, kondisi ekonomi, jumlah, atau situasi. Berbeda dari 変化 yang lebih umum, 推移 menyoroti bagaimana keadaan berlangsung dari waktu ke waktu.', contexts: ['Berita', 'Ekonomi', 'Laporan'], examples: [
    ['人口の推移をグラフで示した。', 'じんこうのすいいをぐらふでしめした。', 'Perkembangan jumlah penduduk ditampilkan dalam grafik.'],
    ['景気の推移を注意深く見守る必要がある。', 'けいきのすいいをちゅういぶかくみまもるひつようがある。', 'Kita perlu memantau perkembangan kondisi ekonomi dengan saksama.']
  ]},
  kuwadateru: { word: '企てる', reading: 'くわだてる', meaning: 'merencanakan; merancang suatu usaha', explanation: 'Menyusun rencana untuk melakukan sesuatu, terutama tindakan atau proyek yang membutuhkan niat dan persiapan.', nuance: 'Sering terasa lebih serius atau bernuansa negatif daripada 計画する. Dalam berita, dapat dipakai untuk rencana rahasia atau tindakan yang tidak sah, tetapi tidak selalu negatif.', contexts: ['Berita', 'Tulisan formal', 'Bisnis'], examples: [
    ['彼らは新しい事業を企てている。', 'かれらはあたらしいじぎょうをくわだてている。', 'Mereka sedang merencanakan usaha baru.'],
    ['犯人は逃走を企てたが、すぐに発見された。', 'はんにんはとうそうをくわだてたが、すぐにはっけんされた。', 'Pelaku mencoba merencanakan pelarian, tetapi segera ditemukan.']
  ]},
  okosu: { word: '興す', reading: 'おこす', meaning: 'mendirikan; membangkitkan; memulai (usaha/industri)', explanation: 'Membangun atau menghidupkan sesuatu yang baru, terutama usaha, industri, atau gerakan.', nuance: 'Biasanya digunakan dalam kata seperti 会社を興す atau 産業を興す. Jangan tertukar dengan 起こす yang berarti membangunkan, menyebabkan, atau memulai suatu kejadian.', contexts: ['Bisnis', 'Ekonomi', 'Sejarah'], examples: [
    ['祖父は小さな町工場を興した。', 'そふはちいさなまちこうばをおこした。', 'Kakek mendirikan sebuah pabrik kecil di kota.'],
    ['地域の産業を興すために若者が集まった。', 'ちいきのさんぎょうをおこすためにわかものがあつまった。', 'Anak-anak muda berkumpul untuk mengembangkan industri daerah.']
  ]},
  kizuku: { word: '築く', reading: 'きずく', meaning: 'membangun; menjalin; membentuk', explanation: 'Membangun sesuatu secara bertahap melalui usaha, baik bangunan fisik maupun hubungan, reputasi, atau sistem.', nuance: 'Dapat bermakna konkret seperti 城を築く dan abstrak seperti 信頼関係を築く. Menekankan proses yang membutuhkan waktu dan usaha.', contexts: ['Kehidupan sosial', 'Bisnis', 'Sejarah'], examples: [
    ['二人は長い時間をかけて信頼関係を築いた。', 'ふたりはながいじかんをかけてしんらいかんけいをきずいた。', 'Keduanya membangun hubungan saling percaya dalam waktu yang lama.'],
    ['この町は川の近くに築かれた。', 'このまちはかわのちかくにきずかれた。', 'Kota ini dibangun di dekat sungai.']
  ]},
  kakageru: { word: '掲げる', reading: 'かかげる', meaning: 'mengangkat; mengusung; mencantumkan (tujuan/slogan)', explanation: 'Menampilkan atau menyatakan sesuatu secara jelas agar diketahui orang lain, seperti tujuan, cita-cita, bendera, atau slogan.', nuance: 'Sering digunakan secara abstrak dalam 目標を掲げる dan 理念を掲げる. Terasa lebih resmi dan berorientasi pada pernyataan publik daripada 言う.', contexts: ['Berita', 'Organisasi', 'Formal'], examples: [
    ['大学は「地域との共生」を理念として掲げている。', 'だいがくは「ちいきとのきょうせい」をりねんとしてかかげている。', 'Universitas mengusung “hidup berdampingan dengan masyarakat setempat” sebagai prinsipnya.'],
    ['彼女は高い目標を掲げて研究を続けている。', 'かのじょはたかいもくひょうをかかげてけんきゅうをつづけている。', 'Ia terus melakukan penelitian dengan menetapkan tujuan yang tinggi.']
  ]},
  souzoku: { word: '相続', reading: 'そうぞく', meaning: 'pewarisan; mewarisi harta atau hak', explanation: 'Menerima harta, hak, atau kewajiban dari seseorang setelah orang tersebut meninggal dunia.', nuance: 'Istilah hukum dan administrasi. 相続する adalah menerima warisan; 相続人 berarti ahli waris; 相続税 berarti pajak warisan.', contexts: ['Hukum', 'Administrasi', 'Kehidupan sosial'], examples: [
    ['父の財産を兄弟で相続した。', 'ちちのざいさんをきょうだいでそうぞくした。', 'Kami bersaudara mewarisi harta ayah.'],
    ['相続に関する手続きについて専門家に相談した。', 'そうぞくにかんするてつづきについてせんもんかにそうだんした。', 'Saya berkonsultasi dengan ahli mengenai prosedur pewarisan.']
  ]},
  kakutoku: { word: '獲得', reading: 'かくとく', meaning: 'perolehan; mendapatkan; meraih', explanation: 'Berhasil memperoleh sesuatu melalui usaha, persaingan, atau proses tertentu.', nuance: 'Sering dipakai untuk hak, dukungan, pelanggan, medali, atau posisi. Lebih formal dan menekankan hasil yang berhasil diraih daripada sekadar 手に入れる.', contexts: ['Berita', 'Bisnis', 'Olahraga'], examples: [
    ['彼は大会で金メダルを獲得した。', 'かれはたいかいできんめだるをかくとくした。', 'Ia meraih medali emas dalam kompetisi.'],
    ['新しい市場の顧客を獲得することが目標だ。', 'あたらしいしじょうのこきゃくをかくとくすることがもくひょうだ。', 'Tujuannya adalah memperoleh pelanggan di pasar baru.']
  ]},
  toushuu: { word: '踏襲', reading: 'とうしゅう', meaning: 'mengikuti; meneruskan cara atau kebijakan sebelumnya', explanation: 'Mempertahankan dan mengikuti metode, kebijakan, tradisi, atau pendekatan yang sudah ada.', nuance: 'Cenderung formal, terutama untuk kebijakan, sistem, atau pendapat. Tidak sekadar meniru; ada unsur melanjutkan pola yang telah digunakan sebelumnya.', contexts: ['Bisnis', 'Politik', 'Akademik'], examples: [
    ['新しい政権は前政権の方針を踏襲した。', 'あたらしいせいけんはぜんせいけんのほうしんをとうしゅうした。', 'Pemerintahan baru mengikuti kebijakan pemerintahan sebelumnya.'],
    ['従来の方式を踏襲しつつ、一部を改善した。', 'じゅうらいのほうしきをとうしゅうしつつ、いちぶをかいぜんした。', 'Sambil mempertahankan metode sebelumnya, sebagian bagiannya diperbaiki.']
  ]},
  denshou: { word: '伝承', reading: 'でんしょう', meaning: 'pewarisan tradisi/cerita; meneruskan dari generasi ke generasi', explanation: 'Menyampaikan dan mempertahankan cerita, pengetahuan, adat, atau keterampilan dari generasi ke generasi.', nuance: 'Sering berkaitan dengan cerita rakyat, budaya, teknik tradisional, dan adat. 伝える lebih umum, sedangkan 伝承 menekankan kesinambungan antargenerasi.', contexts: ['Budaya', 'Sejarah', 'Sastra'], examples: [
    ['この地域には古い伝承が数多く残っている。', 'このちいきにはふるいでんしょうがかずおおくのこっている。', 'Banyak cerita tradisional kuno masih tersisa di daerah ini.'],
    ['職人の技を次の世代に伝承する必要がある。', 'しょくにんのわざをつぎのせだいにでんしょうするひつようがある。', 'Keterampilan para perajin perlu diwariskan kepada generasi berikutnya.']
  ]},
  ikinuki: { word: '息抜き', reading: 'いきぬき', meaning: 'istirahat sejenak; penyegaran', explanation: 'Mengambil jeda dari pekerjaan atau kegiatan yang membutuhkan konsentrasi agar pikiran kembali segar.', nuance: 'Bernuansa santai dan sehari-hari. 息抜きに散歩する berarti berjalan-jalan untuk menyegarkan pikiran, bukan berhenti total dari tanggung jawab.', contexts: ['Percakapan sehari-hari', 'Pekerjaan', 'Belajar'], examples: [
    ['勉強の合間に音楽を聞いて息抜きをした。', 'べんきょうのあいまにおんがくをきいていきぬきをした。', 'Saya menyegarkan pikiran dengan mendengarkan musik di sela belajar.'],
    ['週末は息抜きに近くの公園を散歩する。', 'しゅうまつはいきぬきにちかくのこうえんをさんぽする。', 'Pada akhir pekan, saya berjalan-jalan di taman dekat rumah untuk melepas penat.']
  ]},
  tanaage: { word: '棚上げ', reading: 'たなあげ', meaning: 'penangguhan; mengesampingkan sementara', explanation: 'Menunda pembahasan atau pelaksanaan suatu masalah tanpa menyelesaikannya untuk saat ini.', nuance: 'Sering digunakan dalam berita dan diskusi kebijakan, misalnya 問題を棚上げする. Biasanya mengandung kesan bahwa persoalan belum tuntas dan hanya ditunda.', contexts: ['Berita', 'Politik', 'Bisnis'], examples: [
    ['両国は対立する問題をいったん棚上げした。', 'りょうこくはたいりつするもんだいをいったんたなあげした。', 'Kedua negara untuk sementara menangguhkan masalah yang menjadi perselisihan.'],
    ['予算の問題は棚上げにされたままだ。', 'よさんのもんだいはたなあげにされたままだ。', 'Masalah anggaran masih terus dikesampingkan tanpa penyelesaian.']
  ]},
  machibuse: { word: '待ち伏せ', reading: 'まちぶせ', meaning: 'mengadang dari tempat persembunyian; penyergapan', explanation: 'Menunggu seseorang secara tersembunyi di suatu tempat untuk menghadangnya ketika orang itu datang atau lewat.', nuance: 'Sering bernuansa negatif, mengancam, atau mengejutkan. Dapat muncul dalam berita kriminal, cerita, maupun situasi sehari-hari yang lebih ringan.', contexts: ['Berita', 'Cerita', 'Kehidupan sosial'], examples: [
    ['駅の出口で友人が私を待ち伏せしていた。', 'えきのでぐちでゆうじんがわたしをまちぶせしていた。', 'Temanku menungguku secara diam-diam di pintu keluar stasiun.'],
    ['警察は建物の近くで犯人を待ち伏せした。', 'けいさつはたてもののちかくではんにんをまちぶせした。', 'Polisi menunggu pelaku di dekat gedung untuk menangkapnya.']
  ]},
  ashidome: { word: '足止め', reading: 'あしどめ', meaning: 'tertahan; terhambat untuk bergerak/pergi', explanation: 'Keadaan ketika seseorang atau kendaraan tidak dapat melanjutkan perjalanan karena suatu hambatan.', nuance: 'Sering digunakan dalam berita transportasi dan bencana: 大雪で足止めされる. Juga dapat berarti menghambat seseorang agar tidak pergi.', contexts: ['Berita', 'Transportasi', 'Kehidupan sehari-hari'], examples: [
    ['大雪のため、空港で多くの旅行者が足止めされた。', 'おおゆきのため、くうこうでおおくのりょこうしゃがあしどめされた。', 'Akibat salju lebat, banyak pelancong tertahan di bandara.'],
    ['工事による渋滞で車が足止めを食った。', 'こうじによるじゅうたいでくるまがあしどめをくった。', 'Mobil-mobil tertahan akibat kemacetan karena pekerjaan konstruksi.']
  ]},
  mechamecha: { word: '滅茶苦茶', reading: 'めちゃくちゃ', meaning: 'berantakan; kacau; tidak masuk akal; sangat', explanation: 'Menggambarkan sesuatu yang tidak teratur, rusak, tidak logis, atau berada pada tingkat yang ekstrem.', nuance: 'Sangat umum dalam percakapan. Sebagai keterangan seperti めちゃくちゃ難しい berarti sangat sulit; sebagai deskripsi keadaan berarti kacau atau berantakan.', contexts: ['Percakapan sehari-hari', 'Media', 'Tulisan informal'], examples: [
    ['台風の後、庭は滅茶苦茶になっていた。', 'たいふうのあと、にわはめちゃくちゃになっていた。', 'Setelah topan, halaman menjadi berantakan.'],
    ['あの説明は論理が滅茶苦茶で理解できない。', 'あのせつめいはろんりがめちゃくちゃでりかいできない。', 'Penjelasan itu logikanya kacau sehingga tidak bisa dipahami.']
  ]},
  hetoheto: { word: 'へとへと', reading: 'へとへと', meaning: 'sangat lelah; kehabisan tenaga', explanation: 'Keadaan sangat kelelahan secara fisik atau mental setelah melakukan aktivitas berat atau berlangsung lama.', nuance: 'Ungkapan mimetik yang umum dan kasual. Sering dipakai dengan へとへとになる atau へとへとだ.', contexts: ['Percakapan sehari-hari', 'Pekerjaan', 'Perjalanan'], examples: [
    ['一日中歩き回って、もうへとへとだ。', 'いちにちじゅうあるきまわって、もうへとへとだ。', 'Aku sudah sangat lelah karena berjalan ke sana kemari seharian.'],
    ['引っ越しの作業で彼らはへとへとになった。', 'ひっこしのさぎょうでかれらはへとへとになった。', 'Mereka kelelahan setelah pekerjaan pindahan.']
  ]},
  dorodoro: { word: 'どろどろ', reading: 'どろどろ', meaning: 'berlumpur/kental; kusut atau penuh konflik (kiasan)', explanation: 'Menggambarkan cairan yang sangat kental atau berlumpur. Secara kiasan, dapat menggambarkan hubungan atau perasaan yang rumit dan penuh masalah.', nuance: 'Maknanya bergantung konteks: どろどろの泥 adalah lumpur yang pekat, sedangkan 人間関係がどろどろしている bernuansa konflik, kecemburuan, atau intrik.', contexts: ['Percakapan', 'Sastra', 'Hiburan'], examples: [
    ['雨で道がどろどろになってしまった。', 'あめでみちがどろどろになってしまった。', 'Jalan menjadi berlumpur karena hujan.'],
    ['ドラマでは複雑などろどろした人間関係が描かれている。', 'どらまではふくざつなどろどろしたにんげんかんけいがえがかれている。', 'Drama itu menggambarkan hubungan antarmanusia yang rumit dan penuh intrik.']
  ]},
  guchagucha: { word: 'ぐちゃぐちゃ', reading: 'ぐちゃぐちゃ', meaning: 'remuk dan berantakan; tercampur kacau', explanation: 'Menggambarkan sesuatu yang hancur, lembek, tercampur tidak beraturan, atau susunannya menjadi kacau.', nuance: 'Lebih menekankan bentuk atau susunan yang berantakan daripada どろどろ yang sering menekankan kekentalan atau konflik kiasan. Juga dapat menggambarkan penjelasan yang tidak runtut.', contexts: ['Percakapan sehari-hari', 'Deskripsi keadaan'], examples: [
    ['かばんの中で書類がぐちゃぐちゃになった。', 'かばんのなかでしょるいがぐちゃぐちゃになった。', 'Dokumen-dokumen di dalam tas menjadi kusut dan berantakan.'],
    ['消しゴムで何度も直したら、ノートの字がぐちゃぐちゃになった。', 'けしごむでなんどもなおしたら、のーとのじがぐちゃぐちゃになった。', 'Setelah berulang kali menghapus dan memperbaikinya, tulisan di buku catatan menjadi berantakan.']
  ]},
  fusshoku: { word: '払拭', reading: 'ふっしょく', meaning: 'menghapus; menghilangkan (keraguan/citra buruk)', explanation: 'Menghilangkan kesan, kekhawatiran, keraguan, atau citra negatif yang melekat.', nuance: 'Formal dan sering berpasangan dengan 不安・疑念・不信感・イメージ. Berbeda dari 消す yang umum, 払拭 menekankan upaya membersihkan sesuatu yang abstrak.', contexts: ['Berita', 'Bisnis', 'Formal'], examples: [
    ['会社は製品への不安を払拭しようとしている。', 'かいしゃはせいひんへのふあんをふっしょくしようとしている。', 'Perusahaan berusaha menghilangkan kekhawatiran terhadap produknya.'],
    ['丁寧な説明によって、住民の疑念を払拭した。', 'ていねいなせつめいによって、じゅうみんのぎねんをふっしょくした。', 'Penjelasan yang cermat berhasil menghapus keraguan warga.']
  ]},
  soushitsu: { word: '喪失', reading: 'そうしつ', meaning: 'kehilangan; lenyapnya sesuatu yang penting', explanation: 'Keadaan ketika sesuatu yang dimiliki atau dianggap penting hilang, seperti kepercayaan, ingatan, kesempatan, atau fungsi.', nuance: 'Lebih formal dan abstrak daripada 失う. Sering muncul dalam istilah 自信喪失, 記憶喪失, dan 喪失感.', contexts: ['Akademik', 'Berita', 'Sastra'], examples: [
    ['失敗が続き、自信を喪失してしまった。', 'しっぱいがつづき、じしんをそうしつしてしまった。', 'Karena kegagalan terus berlanjut, ia kehilangan kepercayaan dirinya.'],
    ['事故によって大切な記憶の一部を喪失した。', 'じこによってたいせつなきおくのいちぶをそうしつした。', 'Akibat kecelakaan, sebagian ingatan penting hilang.']
  ]},
  haki: { word: '破棄', reading: 'はき', meaning: 'pembatalan; pemutusan; pemusnahan dokumen', explanation: 'Membatalkan atau menyatakan tidak berlaku suatu perjanjian, keputusan, dokumen, atau membuangnya secara resmi.', nuance: 'Sering digunakan dalam bahasa hukum dan administrasi: 契約を破棄する, 書類を破棄する. Lebih resmi daripada 捨てる.', contexts: ['Hukum', 'Administrasi', 'Bisnis'], examples: [
    ['双方の合意により、契約は破棄された。', 'そうほうのごういにより、けいやくははきされた。', 'Berdasarkan kesepakatan kedua pihak, kontrak tersebut dibatalkan.'],
    ['個人情報が記載された書類を適切に破棄した。', 'こじんじょうほうがきさいされたしょるいをてきせつにはきした。', 'Dokumen yang memuat informasi pribadi dimusnahkan dengan benar.']
  ]},
  haiseki: { word: '排斥', reading: 'はいせき', meaning: 'penolakan; pengucilan; penyingkiran', explanation: 'Menolak atau mengucilkan seseorang atau sesuatu dari kelompok, sistem, atau lingkungan.', nuance: 'Bernada negatif dan formal. Sering digunakan untuk diskriminasi atau penolakan terhadap kelompok, pendapat, dan unsur yang dianggap tidak sesuai.', contexts: ['Berita', 'Sosial', 'Akademik'], examples: [
    ['異なる意見を排斥するのではなく、議論するべきだ。', 'ことなるいけんをはいせきするのではなく、ぎろんするべきだ。', 'Alih-alih menolak pendapat yang berbeda, kita seharusnya mendiskusikannya.'],
    ['地域社会から外国人を排斥する動きが問題になっている。', 'ちいきしゃかいからがいこくじんをはいせきするうごきがもんだいになっている。', 'Gerakan untuk mengucilkan orang asing dari masyarakat setempat menjadi masalah.']
  ]},
  jikani: { word: '直に', reading: 'じかに', meaning: 'secara langsung; tanpa perantara', explanation: 'Melakukan atau mengalami sesuatu secara langsung, tanpa perantara atau lapisan pemisah.', nuance: 'Dalam bacaan ini dibaca じかに. Jangan tertukar dengan 直ちに（ただちに）yang berarti segera. 直に触れる berarti menyentuh langsung.', contexts: ['Percakapan', 'Formal', 'Berita'], examples: [
    ['担当者から直に説明を受けた。', 'たんとうしゃからじかにせつめいをうけた。', 'Saya menerima penjelasan langsung dari penanggung jawab.'],
    ['伝統工芸の技術を職人から直に学んだ。', 'でんとうこうげいのぎじゅつをしょくにんからじかにまなんだ。', 'Saya mempelajari teknik kerajinan tradisional secara langsung dari pengrajinnya.']
  ]},
  imani: { word: '今に', reading: 'いまに', meaning: 'sebentar lagi; suatu saat nanti', explanation: 'Menunjukkan bahwa sesuatu diperkirakan akan terjadi dalam waktu dekat atau pada suatu waktu di masa mendatang.', nuance: 'Sering dipakai dalam ungkapan 今に分かる (nanti akan ketahuan) atau 今に見ていろ (tunggu saja, nanti lihat). Dapat terdengar seperti peringatan atau keyakinan kuat.', contexts: ['Percakapan', 'Sastra', 'Narasi'], examples: [
    ['今に彼の努力が認められるだろう。', 'いまにかれのどりょくがみとめられるだろう。', 'Suatu saat nanti, usahanya pasti akan diakui.'],
    ['今に結果が分かるから、もう少し待とう。', 'いまにけっかがわかるから、もうすこしまとう。', 'Hasilnya akan segera diketahui, jadi mari menunggu sebentar lagi.']
  ]},
  tossani: { word: '咄嗟に', reading: 'とっさに', meaning: 'secara spontan; seketika tanpa berpikir panjang', explanation: 'Melakukan atau mengatakan sesuatu secara refleks pada saat itu juga karena situasi mendadak.', nuance: 'Menekankan respons spontan dan cepat. Sering digunakan dengan 判断する, 答える, atau 行動する.', contexts: ['Percakapan', 'Narasi', 'Berita'], examples: [
    ['転びそうになった子どもを咄嗟に支えた。', 'ころびそうになったこどもをとっさにささえた。', 'Secara refleks, saya menopang anak yang hampir jatuh.'],
    ['突然質問され、咄嗟に答えられなかった。', 'とつぜんしつもんされ、とっさにこたえられなかった。', 'Saat tiba-tiba ditanya, saya tidak bisa menjawab secara spontan.']
  ]},
  tokku: { word: 'とっくに', reading: 'とっくに', meaning: 'sudah sejak lama; jauh sebelumnya', explanation: 'Menunjukkan bahwa suatu tindakan atau keadaan sudah terjadi jauh sebelum waktu yang sedang dibicarakan.', nuance: 'Kasual dan sering dipakai untuk menegaskan bahwa sesuatu sebenarnya sudah selesai atau diketahui sejak lama. Lebih kuat daripada もう dalam konteks tertentu.', contexts: ['Percakapan sehari-hari'], examples: [
    ['宿題なら、とっくに終わっているよ。', 'しゅくだいなら、とっくにおわっているよ。', 'Kalau pekerjaan rumah, itu sudah selesai sejak tadi.'],
    ['その映画はとっくに見たことがある。', 'そのえいがはとっくにみたことがある。', 'Aku sudah pernah menonton film itu sejak lama.']
  ]},
  aidagara: { word: '間柄', reading: 'あいだがら', meaning: 'hubungan; relasi antara orang-orang', explanation: 'Hubungan atau kedekatan yang terjalin di antara dua pihak, terutama antarmanusia.', nuance: 'Sering digunakan untuk menjelaskan jenis relasi: 親しい間柄 (hubungan akrab), 仕事上の間柄 (hubungan profesional). Lebih menyoroti sifat hubungan daripada sekadar kontak.', contexts: ['Kehidupan sosial', 'Formal', 'Sastra'], examples: [
    ['二人は何でも相談できる間柄だ。', 'ふたりはなんでもそうだんできるあいだがらだ。', 'Keduanya memiliki hubungan yang memungkinkan mereka saling membicarakan apa pun.'],
    ['仕事上の間柄なので、個人的な話はあまりしない。', 'しごとじょうのあいだがらなので、こじんてきなはなしはあまりしない。', 'Karena hubungan kami sebatas pekerjaan, kami tidak banyak membicarakan hal pribadi.']
  ]},
  seitou: { word: '正当', reading: 'せいとう', meaning: 'sah; wajar; sesuai alasan atau aturan', explanation: 'Diakui benar atau layak berdasarkan alasan, hak, aturan, atau prosedur yang berlaku.', nuance: 'Sering muncul dalam 正当な理由 (alasan yang sah), 正当な評価 (penilaian yang pantas), dan 正当性 (keabsahan). Berbeda dari 正しい yang lebih umum.', contexts: ['Hukum', 'Berita', 'Formal'], examples: [
    ['欠席には正当な理由が必要だ。', 'けっせきにはせいとうなりゆうがひつようだ。', 'Ketidakhadiran memerlukan alasan yang sah.'],
    ['彼の努力は正当に評価されるべきだ。', 'かれのどりょくはせいとうにひょうかされるべきだ。', 'Usahanya seharusnya dinilai secara layak.']
  ]},
  shishitsu: { word: '資質', reading: 'ししつ', meaning: 'bakat dasar; kualitas bawaan; karakter yang diperlukan', explanation: 'Sifat, kemampuan dasar, atau kualitas pribadi yang membuat seseorang cocok untuk suatu peran atau bidang.', nuance: 'Sering digunakan dalam konteks evaluasi, pendidikan, kepemimpinan, dan pekerjaan: 指導者としての資質. Tidak selalu berarti bakat alami saja; dapat mencakup karakter.', contexts: ['Akademik', 'Pekerjaan', 'Formal'], examples: [
    ['教師には人を支える資質が求められる。', 'きょうしにはひとをささえるししつがもとめられる。', 'Seorang guru dituntut memiliki kualitas untuk mendukung orang lain.'],
    ['彼女にはリーダーとしての資質がある。', 'かのじょにはりーだーとしてのししつがある。', 'Ia memiliki kualitas sebagai seorang pemimpin.']
  ]},
  yashinau: { word: '養う', reading: 'やしなう', meaning: 'memelihara; menafkahi; mengembangkan kemampuan', explanation: 'Merawat dan memenuhi kebutuhan hidup seseorang atau memupuk kemampuan, sikap, dan kekuatan diri.', nuance: 'Maknanya ditentukan oleh objek: 家族を養う berarti menafkahi keluarga, sedangkan 判断力を養う berarti mengembangkan daya pertimbangan.', contexts: ['Kehidupan sehari-hari', 'Akademik', 'Pekerjaan'], examples: [
    ['父は長年、家族を養ってきた。', 'ちちはながねん、かぞくをやしなってきた。', 'Ayah telah menafkahi keluarga selama bertahun-tahun.'],
    ['読書を通して幅広い視野を養う。', 'どくしょをとおしてはばひろいしやをやしなう。', 'Mengembangkan wawasan yang luas melalui membaca.']
  ]},
  kakou: { word: '加工', reading: 'かこう', meaning: 'pengolahan; pemrosesan; pengerjaan bahan', explanation: 'Mengubah bahan mentah atau bahan dasar melalui proses tertentu agar bentuk, sifat, atau kegunaannya berubah.', nuance: 'Umum dalam industri, makanan, foto, dan manufaktur. 加工食品 berarti makanan olahan; 画像を加工する berarti mengedit gambar.', contexts: ['Industri', 'Teknologi', 'Kehidupan sehari-hari'], examples: [
    ['この工場では木材を加工して家具を作る。', 'このこうじょうではもくざいをかこうしてかぐをつくる。', 'Pabrik ini mengolah kayu untuk membuat furnitur.'],
    ['写真を加工しすぎると、不自然に見えることがある。', 'しゃしんをかこうしすぎると、ふしぜんにみえることがある。', 'Jika foto terlalu banyak diedit, terkadang hasilnya terlihat tidak alami.']
  ]},
  fuhai: { word: '腐敗', reading: 'ふはい', meaning: 'pembusukan; korupsi/kemerosotan moral', explanation: 'Proses rusaknya bahan organik, atau secara kiasan rusaknya moral dan integritas suatu organisasi atau sistem.', nuance: 'Untuk makanan dan bahan organik berarti membusuk. Dalam konteks politik atau organisasi, 腐敗 berarti korupsi atau kebobrokan yang serius.', contexts: ['Ilmu pengetahuan', 'Berita', 'Politik'], examples: [
    ['高温多湿の場所では食品が腐敗しやすい。', 'こうおんたしつのばしょではしょくひんがふはいしやすい。', 'Makanan mudah membusuk di tempat yang panas dan lembap.'],
    ['政治の腐敗を防ぐ仕組みが必要だ。', 'せいじのふはいをふせぐしくみがひつようだ。', 'Diperlukan sistem untuk mencegah korupsi politik.']
  ]},
  arai: { word: '粗い', reading: 'あらい', meaning: 'kasar; tidak halus; kurang terperinci', explanation: 'Menggambarkan permukaan, susunan, atau pekerjaan yang tidak halus atau belum dikerjakan secara rinci.', nuance: 'Makna bergantung konteks: 目が粗い (anyaman/serat renggang), 粗い計算 (perhitungan kasar), 粗い仕事 (pekerjaan kurang rapi). Jangan tertukar dengan 荒い yang berarti kasar/keras dalam perilaku atau gerakan.', contexts: ['Akademik', 'Pekerjaan', 'Deskripsi'], examples: [
    ['この布は目が粗いので、風を通しやすい。', 'このぬのはめがあらいので、かぜをとおしやすい。', 'Kain ini memiliki anyaman yang renggang sehingga mudah dilalui angin.'],
    ['まずは粗い計画を立ててから、細部を決めよう。', 'まずはあらいけいかくをたててから、さいぶをきめよう。', 'Pertama-tama buat rencana garis besar, lalu tentukan detailnya.']
  ]},
  nenmaku: { word: '粘膜', reading: 'ねんまく', meaning: 'selaput lendir; membran mukosa', explanation: 'Lapisan jaringan lembap yang melapisi bagian dalam organ atau rongga tubuh tertentu.', nuance: 'Istilah anatomi dan kesehatan yang bersifat teknis. Sering muncul dalam konteks hidung, mulut, mata, dan saluran pencernaan.', contexts: ['Kesehatan', 'Biologi', 'Akademik'], examples: [
    ['鼻の粘膜は乾燥すると傷つきやすくなる。', 'はなのねんまくはかんそうするときずつきやすくなる。', 'Selaput lendir hidung menjadi lebih mudah terluka ketika kering.'],
    ['この成分は粘膜への刺激が少ない。', 'このせいぶんはねんまくへのしげきがすくない。', 'Bahan ini hanya sedikit mengiritasi selaput lendir.']
  ]},
  jumyou: { word: '寿命', reading: 'じゅみょう', meaning: 'umur; masa pakai; rentang hidup', explanation: 'Lama waktu seseorang, hewan, atau benda dapat hidup atau berfungsi sebelum mencapai akhir masa gunanya.', nuance: 'Dapat digunakan untuk makhluk hidup maupun benda: 人の寿命, 電池の寿命. Dalam percakapan, 寿命が縮む juga dipakai secara kiasan untuk sesuatu yang sangat mengejutkan atau menegangkan.', contexts: ['Kesehatan', 'Teknologi', 'Berita'], examples: [
    ['医療の進歩によって平均寿命が延びている。', 'いりょうのしんぽによってへいきんじゅみょうがのびている。', 'Harapan hidup rata-rata meningkat berkat kemajuan medis.'],
    ['この機械は寿命が近づいているようだ。', 'このきかいはじゅみょうがちかづいているようだ。', 'Sepertinya masa pakai mesin ini sudah hampir berakhir.']
  ]},
  imashimeru: { word: '戒める', reading: 'いましめる', meaning: 'memperingatkan; menegur; mengingatkan agar tidak mengulangi', explanation: 'Memberi peringatan atau menahan diri/seseorang agar tidak melakukan tindakan yang salah atau berbahaya.', nuance: 'Dapat berarti menegur orang lain atau mengingatkan diri sendiri. 自分を戒める berarti mengendalikan atau menasihati diri agar tidak mengulangi kesalahan.', contexts: ['Formal', 'Pendidikan', 'Tulisan'], examples: [
    ['先生は学生に軽率な行動を戒めた。', 'せんせいはがくせいにけいそつなこうどうをいましめた。', 'Guru memperingatkan para siswa agar tidak bertindak ceroboh.'],
    ['過去の失敗を思い出し、自分を戒めている。', 'かこのしっぱいをおもいだし、じぶんをいましめている。', 'Saya mengingat kegagalan masa lalu untuk mengingatkan diri sendiri.']
  ]},
  seiyakusho: { word: '誓約書', reading: 'せいやくしょ', meaning: 'surat pernyataan janji; dokumen ikrar', explanation: 'Dokumen tertulis yang berisi pernyataan bahwa seseorang berjanji untuk mematuhi ketentuan atau memenuhi kewajiban tertentu.', nuance: 'Istilah resmi dalam administrasi, sekolah, pekerjaan, dan kontrak. Lebih formal daripada sekadar 約束.', contexts: ['Administrasi', 'Pekerjaan', 'Hukum'], examples: [
    ['入学手続きの際に誓約書を提出した。', 'にゅうがくてつづきのさいにせいやくしょをていしゅつした。', 'Saya menyerahkan surat pernyataan saat proses pendaftaran masuk.'],
    ['参加者全員に秘密保持の誓約書を書いてもらった。', 'さんかしゃぜんいんにひみつほじのせいやくしょをかいてもらった。', 'Semua peserta diminta menandatangani surat pernyataan untuk menjaga kerahasiaan.']
  ]},
  kyoten: { word: '拠点', reading: 'きょてん', meaning: 'pusat kegiatan; basis; titik operasional', explanation: 'Tempat atau lokasi yang menjadi pusat untuk menjalankan kegiatan, operasi, penelitian, atau pengembangan.', nuance: 'Sering dipakai dalam bisnis, logistik, penelitian, dan organisasi: 活動拠点, 海外拠点. Lebih spesifik daripada 場所.', contexts: ['Bisnis', 'Organisasi', 'Berita'], examples: [
    ['大阪に新しい営業拠点を設けた。', 'おおさかにあたらしいえいぎょうきょてんをもうけた。', 'Perusahaan mendirikan pusat operasional penjualan baru di Osaka.'],
    ['大学は地域活動の拠点として施設を開放している。', 'だいがくはちいきかつどうのきょてんとしてしせつをかいほうしている。', 'Universitas membuka fasilitasnya sebagai pusat kegiatan masyarakat setempat.']
  ]},
  kontei: { word: '根底', reading: 'こんてい', meaning: 'dasar paling dalam; landasan mendasar', explanation: 'Bagian atau prinsip paling dasar yang menopang pemikiran, sistem, hubungan, atau suatu keadaan.', nuance: 'Sering muncul dalam 根底にある dan 根底から覆す. Lebih abstrak dan mendasar daripada 基礎, dengan kesan menyentuh inti suatu hal.', contexts: ['Akademik', 'Analisis', 'Berita'], examples: [
    ['彼の考えの根底には人間への信頼がある。', 'かれのかんがえのこんていにはにんげんへのしんらいがある。', 'Di dasar pemikirannya terdapat kepercayaan terhadap manusia.'],
    ['新しい発見が従来の理論を根底から覆した。', 'あたらしいはっけんがじゅうらいのりろんをこんていからくつがえした。', 'Penemuan baru itu mengguncang teori sebelumnya hingga ke dasarnya.']
  ]},
  genpon: { word: '原本', reading: 'げんぽん', meaning: 'dokumen asli; naskah asli', explanation: 'Dokumen, naskah, atau buku asli yang menjadi sumber salinan atau reproduksi.', nuance: 'Sering digunakan dalam administrasi, hukum, arsip, dan penerbitan. Berbeda dari 写し atau コピー yang merupakan salinan.', contexts: ['Administrasi', 'Hukum', 'Penerbitan'], examples: [
    ['申請には原本の提出が必要です。', 'しんせいにはげんぽんのていしゅつがひつようです。', 'Untuk pengajuan, dokumen asli perlu diserahkan.'],
    ['図書館で古い手紙の原本を確認した。', 'としょかんでふるいてがみのげんぽんをかくにんした。', 'Saya memeriksa naskah asli surat lama di perpustakaan.']
  ]},
  ganso: { word: '元祖', reading: 'がんそ', meaning: 'asal mula; pelopor; pencetus pertama', explanation: 'Orang, toko, atau tempat yang dianggap sebagai pencipta atau sumber awal suatu tradisi, produk, atau gaya.', nuance: 'Sering digunakan dalam nama usaha makanan atau budaya populer. Dapat bermakna “yang pertama/orisinal”, tetapi klaim 元祖 kadang juga bersifat promosi.', contexts: ['Budaya', 'Bisnis', 'Sejarah'], examples: [
    ['この店はその料理の元祖として知られている。', 'このみせはそのりょうりのがんそとしてしられている。', 'Toko ini dikenal sebagai pelopor hidangan tersebut.'],
    ['彼は現代的な表現を取り入れた元祖の一人だ。', 'かれはげんだいてきなひょうげんをとりいれたがんそのひとりだ。', 'Ia termasuk salah satu pelopor yang memasukkan ekspresi modern.']
  ]},
  kifu: { word: '寄付', reading: 'きふ', meaning: 'donasi; sumbangan', explanation: 'Memberikan uang, barang, atau sumber daya secara sukarela untuk membantu kegiatan, organisasi, atau orang lain.', nuance: 'Netral dan umum pada kegiatan sosial, pendidikan, amal, dan bencana. 寄付する berfokus pada pemberian sukarela, bukan pembayaran sebagai imbalan.', contexts: ['Sosial', 'Berita', 'Organisasi'], examples: [
    ['集まった寄付は被災地の支援に使われる。', 'あつまったきふはひさいちのしえんにつかわれる。', 'Donasi yang terkumpul akan digunakan untuk membantu daerah terdampak bencana.'],
    ['卒業生が図書館に本を寄付した。', 'そつぎょうせいがとしょかんにほんをきふした。', 'Alumni menyumbangkan buku ke perpustakaan.']
  ]},
  kangen: { word: '還元', reading: 'かんげん', meaning: 'pengembalian; penyaluran kembali manfaat/keuntungan', explanation: 'Mengembalikan sesuatu kepada pihak atau sumber asal, atau membagikan hasil dan manfaat yang diperoleh kepada masyarakat atau pihak terkait.', nuance: 'Dalam bisnis sering berarti mengembalikan keuntungan kepada pelanggan/masyarakat: 利益を還元する. Dalam sains, 還元 juga memiliki arti teknis “reduksi”.', contexts: ['Bisnis', 'Ekonomi', 'Ilmu pengetahuan'], examples: [
    ['会社は利益の一部を地域社会に還元している。', 'かいしゃはりえきのいちぶをちいきしゃかいにかんげんしている。', 'Perusahaan mengembalikan sebagian keuntungannya kepada masyarakat setempat.'],
    ['ポイントを買い物に還元できるサービスが人気だ。', 'ぽいんとをかいものにかんげんできるさーびすがにんきだ。', 'Layanan yang memungkinkan poin digunakan kembali untuk berbelanja sedang populer.']
  ]},
  shintei: { word: '進呈', reading: 'しんてい', meaning: 'pemberian (secara sopan/formal)', explanation: 'Memberikan sesuatu kepada orang lain dengan ungkapan yang sopan, sering digunakan dalam pengumuman, promosi, atau acara resmi.', nuance: 'Ungkapan formal dan agak kaku. Biasanya digunakan oleh pihak pemberi, misalnya 記念品を進呈します. Bukan kata umum untuk menerima hadiah.', contexts: ['Bisnis', 'Pengumuman', 'Formal'], examples: [
    ['ご参加の方には記念品を進呈いたします。', 'ごさんかのかたにはきねんひんをしんていいたします。', 'Kami akan memberikan cendera mata kepada para peserta.'],
    ['優秀な成績を収めた学生に賞状を進呈した。', 'ゆうしゅうなせいせきをおさめたがくせいにしょうじょうをしんていした。', 'Sertifikat penghargaan diberikan kepada siswa yang meraih prestasi unggul.']
  ]},
  henjou: { word: '返上', reading: 'へんじょう', meaning: 'mengembalikan; melepaskan (gelar/hak)', explanation: 'Mengembalikan sesuatu yang dimiliki atau melepaskan status, gelar, maupun hak secara sukarela atau karena keadaan tertentu.', nuance: 'Sering muncul dalam 肩書きを返上する atau 王座を返上する. Dapat menunjukkan kerendahan hati, tanggung jawab, atau kehilangan posisi.', contexts: ['Berita', 'Olahraga', 'Formal'], examples: [
    ['彼は責任を取って委員長の職を返上した。', 'かれはせきにんをとっていいんちょうのしょくをへんじょうした。', 'Ia melepaskan jabatan ketua komite sebagai bentuk tanggung jawab.'],
    ['選手はけがのため、王座を返上した。', 'せんしゅはけがのため、おうざをへんじょうした。', 'Atlet itu melepaskan gelarnya karena cedera.']
  ]},
  kurikosu: { word: '繰り越す', reading: 'くりこす', meaning: 'membawa ke periode berikutnya; mengalihkan sisa', explanation: 'Memindahkan sisa jumlah, pekerjaan, atau urusan dari satu periode ke periode berikutnya.', nuance: 'Umum dalam keuangan, administrasi, jadwal, dan pekerjaan. Contohnya 残高を翌月に繰り越す (membawa saldo ke bulan berikutnya).', contexts: ['Keuangan', 'Administrasi', 'Pekerjaan'], examples: [
    ['使い切れなかった予算は来年度に繰り越す。', 'つかいきれなかったよさんはらいねんどにくりこす。', 'Anggaran yang tidak terpakai akan dialihkan ke tahun fiskal berikutnya.'],
    ['残った休暇を翌月に繰り越せる制度がある。', 'のこったきゅうかをよくげつにくりこせるせいどがある。', 'Ada sistem yang memungkinkan sisa cuti dibawa ke bulan berikutnya.']
  ]},
  sashikaeru: { word: '差し替える', reading: 'さしかえる', meaning: 'mengganti dengan yang lain; menukar bagian', explanation: 'Mengeluarkan sesuatu yang sudah terpasang atau digunakan, lalu menggantinya dengan versi atau benda lain.', nuance: 'Sering dipakai untuk dokumen, gambar, halaman, materi presentasi, dan komponen. Menekankan penggantian satu item dengan item pengganti.', contexts: ['Pekerjaan', 'Administrasi', 'Teknologi'], examples: [
    ['誤りが見つかったページを新しいものに差し替えた。', 'あやまりがみつかったぺーじをあたらしいものにさしかえた。', 'Halaman yang ditemukan kesalahannya diganti dengan versi baru.'],
    ['会議の資料を最新版に差し替えてください。', 'かいぎのしりょうをさいしんばんにさしかえてください。', 'Tolong ganti bahan rapat dengan versi terbaru.']
  ]},
  hikiwatasu: { word: '引き渡す', reading: 'ひきわたす', meaning: 'menyerahkan; mengalihkan kepada pihak lain', explanation: 'Menyerahkan orang, barang, bangunan, atau tanggung jawab kepada pihak yang berhak menerimanya.', nuance: 'Cukup formal dan sering digunakan dalam transaksi, hukum, konstruksi, dan serah terima pekerjaan. 引き渡し adalah proses serah terima.', contexts: ['Bisnis', 'Hukum', 'Administrasi'], examples: [
    ['完成した建物を依頼主に引き渡した。', 'かんせいしたたてものをいらいぬしにひきわたした。', 'Bangunan yang selesai diserahkan kepada pihak pemesan.'],
    ['警察は容疑者の身柄を検察に引き渡した。', 'けいさつはようぎしゃのみがらをけんさつにひきわたした。', 'Polisi menyerahkan tersangka kepada kejaksaan.']
  ]},
  toritsugu: { word: '取り次ぐ', reading: 'とりつぐ', meaning: 'menyambungkan; meneruskan pesan/permintaan', explanation: 'Menerima pesan, telepon, atau permintaan lalu menyampaikannya kepada orang yang dituju.', nuance: 'Sering digunakan dalam layanan telepon dan pelayanan pelanggan: 電話を取り次ぐ. Juga dapat berarti menjadi perantara untuk menyampaikan suatu urusan.', contexts: ['Bisnis', 'Telepon', 'Layanan'], examples: [
    ['担当者に電話を取り次いでいただけますか。', 'たんとうしゃにでんわをとりついでいただけますか。', 'Bisakah Anda menyambungkan telepon ini kepada penanggung jawab?'],
    ['受付の人が私の伝言を部長に取り次いでくれた。', 'うけつけのひとがわたしのでんごんをぶちょうにとりついでくれた。', 'Petugas resepsionis meneruskan pesan saya kepada kepala departemen.']
  ]},
  kousaku: { word: '交錯', reading: 'こうさく', meaning: 'bercampur dan bersilangan; saling bersimpang-siur', explanation: 'Beberapa hal, perasaan, pikiran, atau jalur saling bertemu dan bercampur sehingga menjadi rumit.', nuance: 'Sering digunakan untuk perasaan dan keadaan abstrak seperti 기대と不安が交錯する. Lebih menggambarkan unsur-unsur yang bersilang daripada sekadar tercampur rata.', contexts: ['Sastra', 'Berita', 'Analisis'], examples: [
    ['発表を前に、期待と不安が交錯している。', 'はっぴょうをまえに、きたいとふあんがこうさくしている。', 'Menjelang pengumuman, harapan dan kecemasan bercampur aduk.'],
    ['交差点では車と自転車の動きが複雑に交錯する。', 'こうさてんではくるまとじてんしゃのうごきがふくざつにこうさくする。', 'Di persimpangan, pergerakan mobil dan sepeda saling bersilangan dengan rumit.']
  ]},
  kongou: { word: '混合', reading: 'こんごう', meaning: 'pencampuran; campuran beberapa unsur', explanation: 'Menggabungkan dua atau lebih bahan atau unsur sehingga menjadi satu campuran.', nuance: 'Sering digunakan dalam konteks teknis, kimia, bahan, dan olahraga. 混合する bersifat netral; 混同する berbeda karena berarti mencampuradukkan dua hal dalam pikiran.', contexts: ['Ilmu pengetahuan', 'Industri', 'Olahraga'], examples: [
    ['水と油を混合しても、簡単には一体化しない。', 'みずとあぶらをこんごうしても、かんたんにはいったいかしない。', 'Meskipun air dan minyak dicampur, keduanya tidak mudah menyatu.'],
    ['大会では男女混合のチームが参加した。', 'たいかいではだんじょこんごうのちーむがさんかした。', 'Dalam kompetisi itu, tim campuran putra dan putri ikut berpartisipasi.']
  ]},
  rendou: { word: '連動', reading: 'れんどう', meaning: 'keterkaitan; bergerak/berfungsi saling terhubung', explanation: 'Dua atau lebih hal bergerak, berubah, atau bekerja bersama karena memiliki hubungan tertentu.', nuance: 'Sering digunakan dalam teknologi, ekonomi, dan sistem: 価格が連動する, システムを連動させる. Menunjukkan hubungan yang membuat perubahan satu bagian memengaruhi bagian lain.', contexts: ['Teknologi', 'Ekonomi', 'Bisnis'], examples: [
    ['このアプリはスマートフォンと自動的に連動する。', 'このあぷりはすまーとふぉんとじどうてきにれんどうする。', 'Aplikasi ini otomatis terhubung dan bekerja bersama dengan ponsel pintar.'],
    ['賃金は物価の動きと連動している。', 'ちんぎんはぶっかのうごきとれんどうしている。', 'Upah bergerak seiring dengan perubahan harga barang.']
  ]},
  hanpatsu: { word: '反発', reading: 'はんぱつ', meaning: 'perlawanan; penolakan; reaksi menentang', explanation: 'Menunjukkan sikap menolak atau melawan suatu tindakan, pendapat, kebijakan, atau tekanan.', nuance: 'Dapat merujuk pada reaksi sosial maupun gerakan fisik yang memantul. Dalam berita, 住民の反発を招く berarti memicu penolakan warga.', contexts: ['Berita', 'Politik', 'Sosial'], examples: [
    ['新しい規則に対して学生から反発の声が上がった。', 'あたらしいきそくにたいしてがくせいからはんぱつのこえがあがった。', 'Suara penolakan dari mahasiswa muncul terhadap peraturan baru.'],
    ['強く押すと、ばねが反発する。', 'つよくおすと、ばねがはんぱつする。', 'Jika ditekan kuat, pegas akan memantul kembali.']
  ]},
  nankou: { word: '難航', reading: 'なんこう', meaning: 'berjalan sulit; mengalami hambatan', explanation: 'Suatu proses atau pekerjaan tidak berjalan lancar karena banyak kesulitan atau perbedaan pendapat.', nuance: 'Sering digunakan untuk negosiasi, pembicaraan, proyek, dan penyelidikan: 交渉が難航する. Lebih formal daripada 大変だ.', contexts: ['Berita', 'Bisnis', 'Politik'], examples: [
    ['意見がまとまらず、交渉は難航している。', 'いけんがまとまらず、こうしょうはなんこうしている。', 'Negosiasi berjalan sulit karena pendapat belum mencapai kesepakatan.'],
    ['悪天候のため、工事が難航した。', 'あくてんこうのため、こうじがなんこうした。', 'Pekerjaan konstruksi mengalami kesulitan akibat cuaca buruk.']
  ]},
  teimei: { word: '低迷', reading: 'ていめい', meaning: 'kondisi terus rendah; stagnasi/kemerosotan', explanation: 'Keadaan ketika angka, kinerja, ekonomi, atau popularitas berada pada tingkat rendah dan sulit meningkat.', nuance: 'Sering digunakan dalam berita dan ekonomi: 景気が低迷する, 売上が低迷する. Menekankan kondisi rendah yang berlangsung cukup lama.', contexts: ['Ekonomi', 'Berita', 'Olahraga'], examples: [
    ['景気の低迷が長く続いている。', 'けいきのていめいがながくつづいている。', 'Kelesuan ekonomi terus berlangsung dalam waktu lama.'],
    ['チームは成績の低迷から抜け出せずにいる。', 'ちーむはせいせきのていめいからぬけだせずにいる。', 'Tim itu belum berhasil keluar dari periode prestasi yang buruk.']
  ]},
  suitai: { word: '衰退', reading: 'すいたい', meaning: 'kemunduran; penyusutan; kemerosotan', explanation: 'Proses ketika kekuatan, jumlah, pengaruh, atau aktivitas suatu hal semakin berkurang dan melemah.', nuance: 'Lebih menggambarkan penurunan jangka panjang daripada penurunan sesaat. Sering digunakan untuk industri, budaya, populasi, dan pengaruh politik.', contexts: ['Sejarah', 'Ekonomi', 'Berita'], examples: [
    ['人口の減少により、地域の商店街が衰退している。', 'じんこうのげんしょうにより、ちいきのしょうてんがいがすいたいしている。', 'Akibat penurunan jumlah penduduk, kawasan pertokoan setempat mengalami kemunduran.'],
    ['その国では伝統産業の衰退が問題となっている。', 'そのくにではでんとうさんぎょうのすいたいがもんだいとなっている。', 'Kemunduran industri tradisional menjadi masalah di negara itu.']
  ]},
  datsuraku: { word: '脱落', reading: 'だつらく', meaning: 'tertinggal; tersingkir; terlepas dari kelompok', explanation: 'Keluar atau terlempar dari suatu kelompok, proses, perlombaan, atau susunan; juga dapat berarti bagian yang terlepas atau hilang.', nuance: 'Digunakan untuk peserta yang tersingkir dari seleksi, anggota yang tidak lagi mengikuti proses, atau unsur teks yang hilang. 脱落者 berarti orang yang gugur/tertinggal.', contexts: ['Pendidikan', 'Olahraga', 'Berita'], examples: [
    ['厳しい選考の結果、数人が競争から脱落した。', 'きびしいせんこうのけっか、すうにんがきょうそうからだつらくした。', 'Akibat seleksi yang ketat, beberapa orang tersingkir dari persaingan.'],
    ['印刷の不具合で、文章の一部が脱落していた。', 'いんさつのふぐあいで、ぶんしょうのいちぶがだつらくしていた。', 'Karena masalah pencetakan, sebagian teks hilang.']
  ]},
  jiwajiwa: { word: 'じわじわ', reading: 'じわじわ', meaning: 'sedikit demi sedikit; perlahan tetapi terus terasa', explanation: 'Menggambarkan perubahan, pengaruh, atau gerakan yang berlangsung pelan-pelan dan bertahap.', nuance: 'Sering menekankan bahwa dampak kecil terus bertambah hingga terasa jelas: じわじわ広がる, じわじわ効く. Tidak secepat 一気に.', contexts: ['Percakapan', 'Berita', 'Narasi'], examples: [
    ['疲れがじわじわと体に出てきた。', 'つかれがじわじわとからだにでてきた。', 'Rasa lelah mulai terasa sedikit demi sedikit pada tubuh.'],
    ['その店の人気は口コミでじわじわ広がった。', 'そのみせのにんきはくちこみでじわじわひろがった。', 'Popularitas toko itu menyebar perlahan melalui rekomendasi dari mulut ke mulut.']
  ]},
  gayagaya: { word: 'がやがや', reading: 'がやがや', meaning: 'ramai dengan suara obrolan; gaduh', explanation: 'Menggambarkan banyak orang berbicara bersamaan sehingga suasana menjadi ramai dan bising.', nuance: 'Biasanya menggambarkan keramaian suara percakapan, bukan suara ledakan atau teriakan tunggal. Umum dalam narasi dan percakapan.', contexts: ['Percakapan', 'Narasi', 'Kehidupan sehari-hari'], examples: [
    ['教室では学生たちががやがや話していた。', 'きょうしつではがくせいたちががやがやはなしていた。', 'Para siswa mengobrol ramai di dalam kelas.'],
    ['店の前に人が集まり、がやがやと騒いでいる。', 'みせのまえにひとがあつまり、がやがやとさわいでいる。', 'Orang-orang berkumpul di depan toko dan membuat keramaian.']
  ]},
  betabeta: { word: 'べたべた', reading: 'べたべた', meaning: 'lengket; menempel erat; terlalu melekat', explanation: 'Menggambarkan sesuatu yang lengket saat disentuh atau seseorang yang terlalu sering menempel/bermanja-manja dengan orang lain.', nuance: 'Untuk benda, biasanya berarti permukaannya lengket. Untuk hubungan, べたべたする dapat menyiratkan kedekatan fisik atau sikap yang terlalu manja dan berlebihan.', contexts: ['Percakapan', 'Deskripsi', 'Kehidupan sosial'], examples: [
    ['暑さで手が汗ばんで、少しべたべたする。', 'あつさでてがあせばんで、すこしべたべたする。', 'Karena panas, tangan berkeringat dan terasa agak lengket.'],
    ['人前でべたべたするのは少し恥ずかしい。', 'ひとまえでべたべたするのはすこしはずかしい。', 'Bermesraan terlalu dekat di depan orang lain terasa agak memalukan.']
  ]},
  honeori: { word: '骨折り', reading: 'ほねおり', meaning: 'jerih payah; usaha yang melelahkan', explanation: 'Usaha dan kerja keras yang dilakukan untuk menyelesaikan sesuatu, sering kali membutuhkan banyak tenaga atau waktu.', nuance: 'Sering muncul dalam 骨折りに感謝する atau 骨折り損. 骨折り損 berarti usaha yang sia-sia. Tidak berhubungan dengan patah tulang secara harfiah dalam pemakaian ini.', contexts: ['Percakapan', 'Bisnis', 'Tulisan'], examples: [
    ['皆さんの骨折りのおかげで、行事は成功した。', 'みなさんのほねおりのおかげで、ぎょうじはせいこうした。', 'Berkat jerih payah semua orang, acara itu berhasil.'],
    ['何日も準備したのに中止となり、骨折り損だった。', 'なんにちもじゅんびしたのにちゅうしとなり、ほねおりぞんだった。', 'Padahal sudah mempersiapkannya berhari-hari, tetapi acara dibatalkan sehingga usaha itu sia-sia.']
  ]},
  ashidemato: { word: '足手まとい', reading: 'あしでまとい', meaning: 'beban; penghambat bagi orang lain', explanation: 'Seseorang atau sesuatu yang membuat orang lain sulit bergerak atau menyelesaikan pekerjaan karena menjadi beban.', nuance: 'Bernada negatif dan cukup keras bila ditujukan kepada seseorang. 足手まといになる berarti menjadi penghambat atau beban bagi kelompok.', contexts: ['Kehidupan sosial', 'Pekerjaan', 'Percakapan'], examples: [
    ['みんなの足手まといにならないよう、事前に準備した。', 'みんなのあしでまといにならないよう、じぜんにじゅんびした。', 'Saya mempersiapkan diri sebelumnya agar tidak menjadi beban bagi semua orang.'],
    ['彼は足手まといどころか、チームを支えている。', 'かれはあしでまといどころか、ちーむをささえている。', 'Ia bukan menjadi beban; justru ia mendukung tim.']
  ]},
  urame: { word: '裏目', reading: 'うらめ', meaning: 'hasil yang berbalik merugikan; efek yang berlawanan', explanation: 'Keadaan ketika tindakan atau strategi yang dimaksudkan untuk menghasilkan sesuatu justru menimbulkan hasil yang berlawanan.', nuance: 'Hampir selalu muncul dalam 裏目に出る. Menekankan hasil tak terduga yang merugikan, bukan sekadar kegagalan biasa.', contexts: ['Berita', 'Bisnis', 'Percakapan'], examples: [
    ['親切のつもりでしたことが、かえって裏目に出た。', 'しんせつのつもりでしたことが、かえってうらめにでた。', 'Hal yang dilakukan dengan maksud baik justru berbalik merugikan.'],
    ['急いで決めた方針が裏目に出てしまった。', 'いそいできめたほうしんがうらめにでてしまった。', 'Kebijakan yang diputuskan dengan tergesa-gesa justru menghasilkan akibat sebaliknya.']
  ]},
  oyobigoshi: { word: 'および腰', reading: 'およびごし', meaning: 'sikap ragu-ragu; tidak tegas; setengah hati', explanation: 'Sikap seseorang yang tidak berani mengambil langkah tegas karena takut, tidak yakin, atau enggan menghadapi sesuatu.', nuance: 'Bernuansa negatif atau kritis. Sering digunakan untuk menilai sikap organisasi, pemerintah, atau seseorang: および腰の対応.', contexts: ['Berita', 'Politik', 'Bisnis'], examples: [
    ['会社のおよび腰な対応に、社員から不満が出た。', 'かいしゃのおよびごしなたいおうに、しゃいんからふまんがでた。', 'Karyawan mengeluhkan respons perusahaan yang tidak tegas.'],
    ['失敗を恐れておよび腰になっていては、前に進めない。', 'しっぱいをおそれておよびごしになっていては、まえにすすめない。', 'Jika terus ragu karena takut gagal, kita tidak akan bisa maju.']
  ]},
  itaku: { word: '委託する', reading: 'いたくする', meaning: 'mempercayakan; menyerahkan pekerjaan kepada pihak lain', explanation: 'Menugaskan atau menyerahkan suatu pekerjaan, layanan, atau pengelolaan kepada individu atau organisasi lain.', nuance: 'Formal dan umum dalam bisnis, administrasi, serta layanan publik. 委託する menekankan pemberian tanggung jawab/pekerjaan, sedangkan 依頼する lebih umum berarti meminta bantuan.', contexts: ['Bisnis', 'Administrasi', 'Formal'], examples: [
    ['会社は清掃業務を専門業者に委託した。', 'かいしゃはせいそうぎょうむをせんもんぎょうしゃにいたくした。', 'Perusahaan menyerahkan pekerjaan kebersihan kepada penyedia jasa khusus.'],
    ['市は調査の一部を大学に委託している。', 'しはちょうさのいちぶをだいがくにいたくしている。', 'Pemerintah kota mempercayakan sebagian penelitian kepada universitas.']
  ]},
  sugasugashii: { word: 'すがすがしい', reading: 'すがすがしい', meaning: 'segar; menyegarkan; terasa lega dan bersih', explanation: 'Menggambarkan udara, suasana, atau perasaan yang bersih, nyaman, dan membuat pikiran terasa ringan.', nuance: 'Bernuansa positif. Dapat menggambarkan udara pagi, cuaca, ekspresi, atau perasaan setelah menyelesaikan sesuatu dengan jujur.', contexts: ['Percakapan', 'Sastra', 'Deskripsi'], examples: [
    ['朝の高原は空気がすがすがしい。', 'あさのこうげんはくうきがすがすがしい。', 'Udara di dataran tinggi pada pagi hari terasa sangat segar.'],
    ['言いたいことを正直に伝えたので、気分がすがすがしい。', 'いいたいことをしょうじきにつたえたので、きぶんがすがすがしい。', 'Karena sudah menyampaikan isi hati dengan jujur, perasaanku menjadi lega.']
  ]},
  kumen: { word: '工面する', reading: 'くめんする', meaning: 'mengusahakan; mencari cara mendapatkan (uang/waktu/sumber daya)', explanation: 'Berusaha mencari atau menyiapkan sesuatu yang diperlukan, khususnya uang, biaya, waktu, atau tenaga.', nuance: 'Sering digunakan ketika sumber daya terbatas: 資金を工面する. Menyiratkan adanya kesulitan atau usaha untuk menyediakan sesuatu.', contexts: ['Kehidupan sehari-hari', 'Bisnis', 'Keuangan'], examples: [
    ['留学費用を工面するためにアルバイトを始めた。', 'りゅうがくひようをくめんするためにあるばいとをはじめた。', 'Saya mulai bekerja paruh waktu untuk mengusahakan biaya studi ke luar negeri.'],
    ['忙しい中で会議の時間を工面してくれた。', 'いそがしいなかでかいぎのじかんをくめんしてくれた。', 'Di tengah kesibukannya, ia mengusahakan waktu untuk rapat.']
  ]},
  zonzaina: { word: 'ぞんざいな', reading: 'ぞんざいな', meaning: 'sembarangan; kasar; tidak sopan/tidak teliti', explanation: 'Menggambarkan perlakuan, cara berbicara, atau pekerjaan yang dilakukan tanpa perhatian dan rasa hormat yang cukup.', nuance: 'Bernada negatif. ぞんざいな扱い berarti perlakuan yang sembrono atau tidak menghargai; ぞんざいな言葉 berarti ucapan yang kasar.', contexts: ['Kehidupan sosial', 'Pekerjaan', 'Tulisan'], examples: [
    ['客にぞんざいな態度を取ってはいけない。', 'きゃくにぞんざいなたいどをとってはいけない。', 'Kita tidak boleh bersikap kasar kepada pelanggan.'],
    ['書類をぞんざいに扱ったため、一部が破れてしまった。', 'しょるいをぞんざいにあつかったため、いちぶがやぶれてしまった。', 'Karena dokumen ditangani dengan sembarangan, sebagian dokumen robek.']
  ]},
  unadareu: { word: 'うなだれる', reading: 'うなだれる', meaning: 'menundukkan kepala; tertunduk lesu', explanation: 'Menundukkan kepala dan tubuh bagian atas, biasanya karena sedih, kecewa, malu, atau kehilangan semangat.', nuance: 'Sering menggambarkan bahasa tubuh dan suasana hati. Lebih kuat secara visual daripada うつむく yang hanya berarti menunduk.', contexts: ['Sastra', 'Narasi', 'Percakapan'], examples: [
    ['試合に負けた選手たちはうなだれていた。', 'しあいにまけたせんしゅたちはうなだれていた。', 'Para atlet yang kalah dalam pertandingan tampak tertunduk lesu.'],
    ['先生に注意され、彼はうなだれて席に戻った。', 'せんせいにちゅういされ、かれはうなだれてせきにもどった。', 'Setelah ditegur guru, ia kembali ke tempat duduk dengan kepala tertunduk.']
  ]},
  dageki: { word: '打撃', reading: 'だげき', meaning: 'pukulan; dampak/kerugian besar', explanation: 'Pukulan secara fisik atau dampak berat yang merugikan suatu pihak, organisasi, ekonomi, atau kehidupan.', nuance: 'Dalam berita dan ekonomi, 大きな打撃を受ける berarti menerima dampak yang sangat merugikan. Dapat pula merujuk pada pukulan dalam olahraga.', contexts: ['Berita', 'Ekonomi', 'Olahraga'], examples: [
    ['原材料の価格上昇は中小企業に大きな打撃を与えた。', 'げんざいりょうのかかくじょうしょうはちゅうしょうきぎょうにおおきなだげきをあたえた。', 'Kenaikan harga bahan baku memberikan dampak besar bagi usaha kecil dan menengah.'],
    ['相手の打撃を受けて、選手は一歩後ろに下がった。', 'あいてのだげきをうけて、せんしゅはいっぽうしろにさがった。', 'Setelah menerima pukulan lawan, atlet itu mundur satu langkah.']
  ]},
  fuuchou: { word: '風潮', reading: 'ふうちょう', meaning: 'kecenderungan umum; suasana/tren sosial', explanation: 'Arah atau kecenderungan pemikiran dan perilaku yang menyebar di masyarakat atau kelompok pada suatu masa.', nuance: 'Sering dipakai untuk membahas tren sosial dengan jarak kritis: 〜という風潮がある. Dapat bernada netral atau negatif tergantung konteks.', contexts: ['Berita', 'Sosiologi', 'Akademik'], examples: [
    ['失敗を避けようとする風潮が強まっている。', 'しっぱいをさけようとするふうちょうがつよまっている。', 'Kecenderungan untuk menghindari kegagalan semakin menguat.'],
    ['社会全体の風潮が若者の考え方に影響を与える。', 'しゃかいぜんたいのふうちょうがわかもののかんがえかたにえいきょうをあたえる。', 'Kecenderungan masyarakat secara keseluruhan memengaruhi cara berpikir anak muda.']
  ]},
  motarasu: { word: 'もたらす', reading: 'もたらす', meaning: 'membawa; mendatangkan; menimbulkan (hasil/dampak)', explanation: 'Menyebabkan atau menghadirkan suatu hasil, perubahan, manfaat, atau masalah.', nuance: 'Cukup formal dan sering digunakan untuk dampak abstrak: 利益をもたらす, 変化をもたらす, 被害をもたらす. Hasilnya bisa positif maupun negatif.', contexts: ['Berita', 'Akademik', 'Bisnis'], examples: [
    ['技術の進歩は私たちの生活に大きな変化をもたらした。', 'ぎじゅつのしんぽはわたしたちのせいかつにおおきなへんかをもたらした。', 'Kemajuan teknologi membawa perubahan besar dalam kehidupan kita.'],
    ['長雨は農作物に深刻な被害をもたらした。', 'ながあめはのうさくもつにしんこくなひがいをもたらした。', 'Hujan berkepanjangan menimbulkan kerusakan serius pada tanaman pertanian.']
  ]},
  tekkai: { word: '撤回', reading: 'てっかい', meaning: 'penarikan kembali; membatalkan pernyataan/keputusan', explanation: 'Menarik kembali pernyataan, usulan, keputusan, atau kebijakan yang sebelumnya telah disampaikan atau ditetapkan.', nuance: 'Formal dan sering muncul dalam berita, politik, dan bisnis: 発言を撤回する, 提案を撤回する. Menekankan tindakan menarik kembali sesuatu yang sudah dinyatakan.', contexts: ['Berita', 'Politik', 'Bisnis'], examples: [
    ['批判を受けて、担当者は発言を撤回した。', 'ひはんをうけて、たんとうしゃははつげんをてっかいした。', 'Setelah menerima kritik, penanggung jawab menarik kembali pernyataannya.'],
    ['会社は先週発表した計画を撤回することにした。', 'かいしゃはせんしゅうはっぴょうしたけいかくをてっかいすることにした。', 'Perusahaan memutuskan untuk menarik kembali rencana yang diumumkan minggu lalu.']
  ]},
  hoten: { word: '補填', reading: 'ほてん', meaning: 'penggantian; penutupan kekurangan/kerugian', explanation: 'Mengisi kekurangan atau mengganti kerugian dengan menyediakan uang, barang, atau sumber daya tambahan.', nuance: 'Formal dan sering digunakan dalam keuangan, administrasi, dan bisnis: 損失を補填する, 不足分を補填する. Menekankan mengisi jumlah yang kurang.', contexts: ['Keuangan', 'Bisnis', 'Administrasi'], examples: [
    ['会社は事故による損失の一部を補填した。', 'かいしゃはじこによるそんしつのいちぶをほてんした。', 'Perusahaan mengganti sebagian kerugian akibat kecelakaan.'],
    ['不足する費用は補助金で補填される。', 'ふそくするひようはほじょきんでほてんされる。', 'Biaya yang kurang akan ditutupi dengan dana bantuan.']
  ]},
  konsutanto: { word: 'コンスタント', reading: 'こんすたんと', meaning: 'stabil; tetap; konsisten', explanation: 'Menunjukkan sesuatu yang dilakukan atau terjadi secara teratur dengan tingkat yang relatif stabil.', nuance: 'Kata serapan yang sering digunakan dalam percakapan kerja dan olahraga. コンスタントに続ける berarti melanjutkan secara konsisten; tidak harus berarti setiap hari.', contexts: ['Pekerjaan', 'Olahraga', 'Percakapan'], examples: [
    ['彼女は毎月コンスタントに本を読んでいる。', 'かのじょはまいつきこんすたんとにほんをよんでいる。', 'Ia membaca buku secara konsisten setiap bulan.'],
    ['売上をコンスタントに伸ばすことが課題だ。', 'うりあげをこんすたんとにのばすことがかだいだ。', 'Tantangannya adalah meningkatkan penjualan secara stabil.']
  ]},
  zubari: { word: 'ずばり', reading: 'ずばり', meaning: 'terus terang; tepat sasaran; langsung pada inti', explanation: 'Mengatakan sesuatu dengan lugas dan langsung mengenai inti persoalan, atau menunjukkan jawaban yang tepat.', nuance: 'Umum dalam percakapan, wawancara, dan media. ずばり言う berarti berbicara terus terang; ずばり当てる berarti menebak dengan tepat.', contexts: ['Percakapan', 'Wawancara', 'Media'], examples: [
    ['質問に対して、彼はずばり答えた。', 'しつもんにたいして、かれはずばりこたえた。', 'Ia menjawab pertanyaan itu secara langsung dan tepat.'],
    ['ずばり言うと、今の計画には無理がある。', 'ずばりいうと、いまのけいかくにはむりがある。', 'Terus terang, rencana saat ini tidak realistis.']
  ]},
  makanau: { word: '賄う', reading: 'まかなう', meaning: 'membiayai; mencukupi; menyediakan kebutuhan', explanation: 'Menyediakan atau memenuhi kebutuhan dengan sumber daya yang tersedia, terutama biaya, makanan, atau tenaga.', nuance: 'Sering digunakan dalam 家計を賄う (mencukupi kebutuhan rumah tangga), 費用を賄う (membiayai), dan 食事を賄う (menyediakan makanan).', contexts: ['Keuangan', 'Kehidupan sehari-hari', 'Bisnis'], examples: [
    ['学費の一部をアルバイト代で賄っている。', 'がくひのいちぶをあるばいとだいでまかなっている。', 'Saya membiayai sebagian uang kuliah dari penghasilan kerja paruh waktu.'],
    ['この発電所は地域の電力需要を賄っている。', 'このはつでんしょはちいきのでんりょくじゅようをまかなっている。', 'Pembangkit listrik ini memenuhi kebutuhan listrik wilayah tersebut.']
  ]}
};

// Urutan ini mempertahankan seluruh 91 entri sesuai daftar sumber, termasuk pengulangan.
const sourceOrder = [
  'azadoru','honpo','zekkyou','haigo','houfu','karakau','nonoshiru','azadoru','uragiru','sujimichi','honpo',
  'tekiou','gacchi','tenkan','suii','kuwadateru','okosu','kizuku','kakageru','souzoku','kakutoku','toushuu','denshou',
  'ikinuki','tanaage','machibuse','ashidome','mechamecha','hetoheto','dorodoro','guchagucha','fusshoku','soushitsu','haki','haiseki',
  'jikani','imani','tossani','tokku','aidagara','seitou','shishitsu','yashinau','kakou','fuhai','arai','nenmaku','jumyou',
  'imashimeru','seiyakusho','kyoten','kontei','genpon','ganso','kifu','kangen','shintei','henjou','kurikosu','sashikaeru',
  'hikiwatasu','toritsugu','kousaku','kongou','rendou','hanpatsu','nankou','teimei','suitai','datsuraku','jiwajiwa',
  'dorodoro','gayagaya','betabeta','honeori','ashidemato','urame','oyobigoshi','itaku','sugasugashii','kumen','zonzaina',
  'unadareu','dageki','fuuchou','motarasu','tekkai','hoten','konsutanto','zubari','makanau'
];

const occurrences = new Map();
export const day1Vocabulary = sourceOrder.map((key) => {
  const item = entries[key];
  if (!item) throw new Error(`Data Day 1 tidak ditemukan: ${key}`);
  const count = (occurrences.get(key) || 0) + 1;
  occurrences.set(key, count);
  return {
    id: `d1-${key}-${String(count).padStart(2, '0')}`,
    ...item,
    examples: item.examples.map(([japanese, furigana, translation]) => ({ japanese, furigana, translation }))
  };
});

export default day1Vocabulary;
