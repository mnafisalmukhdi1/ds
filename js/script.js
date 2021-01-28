// Action for Messages
monogatari.action ('Message').messages ({
    'thank_you': {
        title: 'Terima Kasih!',
        subtitle: 'Terima kasih kepada Anda karena telah mengikuti sejauh ini.',
        body: 'Pantau terus Facebook @mnafisalmukhdi1 untuk kabar mengenai pembaruan karya ini.'
    }
});


// Assets for Scenes and Backgrounds
monogatari.assets ('scenes', {
	'pg13': 'pg13.png',
	'author': 'author.png',
	'0715': '0715.png',
	'0716': '0716.png',
	'0717': '0717.png',
	'0729': '0729.png',
	'school': 'school.jpg',
	'school_hallway': 'school_hallway.jpg',
	'school_rooftop': 'school_rooftop.png',
	'school_garden': 'school_garden.jpg',
	'door_gudang': 'door_gudang.png',
	'gudang': 'gudang.jpg',
	'gudang_dark': 'gudang_dark.png',
	'stage': 'stage.jpg',
	'stage_dark': 'stage_dark.png',
	'chairs': 'chairs.jpg',
	'locker': 'locker.jpg',
	'door_lib': 'door_lib.png',
	'library': 'library.png',
	'door_musala': 'door_musala.png',
	'musala': 'musala.jpg',
	'musala_bag': 'musala_bag.png',
	'room_headmaster': 'room_headmaster.jpg',
	'room_teacher': 'room_teacher.jpg'
	
});

// Characters
monogatari.characters ({
	'id' : {
		name: 'Idris',
		color: '#4682B4',
	},
	'fir' : {
		name: 'Firdaus',
		color: '#9ACD32',
	},
	'mus' : {
		name: 'Mustafa',
		color: '#00008B',
	},
	'za' : {
		name: 'Zain',
		color: '#1E90FF',
	},
	'ba' : {
		name: 'Bagus',
		color: '#CD853F',
	},
	'bam' : {
		name: 'Bambang',
		color: '#4169E1',
	},
	'kur': {
		name: 'Brigadir Polisi Kurniawan',
		color: '#D3D3D3',
	},
});

// Component
monogatari.component ('main-screen').template (() => {
    return `
        <h1><img src="https://res.cloudinary.com/mnam23/image/upload/v1611279509/ds_logo.png" alt="Detektif Sekolahan" title="Detektif Sekolahan"></h1>
        <main-menu></main-menu>
    `;
});

// Configuration for Credits
monogatari.configuration ('credits', {
		"Special Thanks to": {
		"The Only One God": "Allah", 
		"My friends": ["Muhammad Najib", "Radian"],
	},
	"Developers": {
		"Artist": "AvatarMaker.com",
		"Writer": "mnafisalmukhdi1",
	},
});

// Script
monogatari.script ({
	'_SplashScreen': [
	'show scene pg13 with fadeIn duration 3s',
	'wait 3000',
	'show scene author with fadeIn duration 3s',
	'wait 3000',
        'end'
	],
	'Start': [
		'show background #000',
		'centered Keseluruhan cerita hanyalah fiksi. Kesamaan nama tokoh dan tempat bukanlah sebuah kesengajaan. Tidak ada maksud untuk menyudutkan pihak manapun.',
		'show background #000',
		{'Choice': {
    'Kasus01': {
        'Text': 'Kasus 1 - Pertemuan',
        'Do': 'jump Kasus01'
    },
    'Kasus02': {
        'Text': 'Kasus 2 - Kisah Kelam MA Sukamawar',
        'Do': 'jump Kasus02'
    },
}}
    	],
	'Kasus01': [
		'nvl Kasus 1',
		'nvl Pertemuan',
		'show scene 0715 with fadeIn duration 3s',
		'id Sekolah masuk serentak hari ini, termasuk yang baru bagiku, MA Sukamawar.',
		'show background school',
		'id Aku memasuki sekolah ini karena terkena zonasi, rumahku yang tepat di perbatasan antara Kota Sukamawar dengan Kota Kebun Melati dikatakan lebih dekat ke MA Sukamawar daripada MA Kebun Melati.',
		'id Padahal karena aku kelahiran Kebun Melati, tentu saja aku bersekolah di sana. Tapi sistem zonasi yang disepakati oleh kedua walikota memilihku untuk berada di Sukamawar.',
		'id Aku belum mengenal Sukamawar sepenuhnya, kecuali namanya saja. Maka, aku orang baru di sini, dan aku dipenuhi dengan kebingungan.',
		'id Pagi itu dilaksanakanlah upacara penaikan bendera. Dengan penyampai amanat seorang pria, kutebak itu kepala sekolah, karena beliau menyampaikan selamat datang dan membanggakan unggulnya MA Sukamawar.',
		'id Dia mengingat-ingatkan prestasi zaman dulu, salah satu di antaranya adalah seorang siswa yang memenangkan olimpiade di Jepang.',
		'id Pembahasan ini sebenarnya menarik, namun aku merasa bosan. Kebosanan ini membuatku melalui waktu secara tidak sadar.',
		'id Upacara selesai. Kami disuruh menuju ruang multiguna.',
		'show background chairs',
		'id Kami dipersilahkan duduk. Aku memilih kursi tengah.',
		'show background stage',
		'mus Halo semua!',
		'show background chairs',
		'Halo!',
		'show background stage',
		'mus Perkenalkan, nama kakak Mustafa. Kakak adalah ketua OSIS di MA Sukamawar ini. Salam kenal ya!',
		'za Halo, namaku adalah Zain, aku wakil ketua OSIS. Senang bertemu dengan kalian!',
		'mus Setiap tahun, sekolah ini mengadakan Masa Taaruf Siswa Madrasah, atau yang disingkat Matsama. Acara ini diselenggarakan agar kita bisa mengenal, dari siswa sampai sekolah ini sendiri.',
		'mus Dan tahun ini, kami dipercaya sebagai penyelenggara. Doakan juga acara ini berjalan dengan lancar, semoga.',
		'za Apa maksudnya?',
		'za Ya, acara pertama kita selesai. Sepertinya kita juga tidak perlu sambutan kepala sekolah mengingat beliau yang menyampaikan amanat tadi. Maka tidak ada acara lagi selain berkenalan. Silahkan mulai dari teman di samping!',
		'za Kalian diharuskan selalu berjalan beriringan dengan salah satu teman baru kalian, agar lebih memperat pertemanan kalian.',
		'za Nanti juga kalian boleh menunjukkan bakat pada besok hari. Sampai jumpa.',
		'show background chairs',
		'id Aku sangat canggung saat itu, belum berani walau sebatas menyebutkan nama. Aku hanya terus menunduk.',
		'Hai!',
		'id Oh?',
		'fir Namaku Ahmad Firdaus. Namamu siapa?',
		'id Namaku Muhammad Idris.',
		'fir Kamu dari mana?',
		'id Aku dari Kota Kebun Melati.',
		'fir Kalau aku asli dari Sukamawar, senang berkenalan denganmu.',
		'id Firdaus menjulurkan tangannya, pertanda ingin menjabat. Aku menyambutnya perlahan karena gugup. Sesingkat itu perkenalanku.',
		'id Namun pertemuan itu, adalah awal dari segalanya.',
		'show background stage',
		'za Sudah waktu istirahat. Sila makan!',
		'id Kami pun bergerak menuju tempat penaruhan barang. Firdaus nampak mencari sesuatu.',
		'show background locker',
		'id Apa yang kamu cari?',
		'fir Tasku. Warnanya biru dan aku menaruhnya di belakang.',
		'fir Bagaimana bisa hilang? Sedangkan kita saja diam di kursi sejak awal?',
		'id Berarti itu disengaja.',
		'fir Apa maksudmu?',
		'id Cobalah cari, mungkin aku bisa menemanimu.',
		'show background school',
		'id Kami mulai mencari. Wajah Firdaus terlihat gelisah.',
		'show background door_lib',
		'id Kami mencari di perpustakaan.',
		'show background library with fadeIn 3s',
		'centered Tidak ada di sini.',
		'show background door_gudang',
		'id Kami mencari di ruangan sebelahnya.',
		'centered Terkunci.',
		'show background door_musala',
		'id Kami terus berjalan sampai ke musala.',
		'show scene musala_bag with shake 1s',
		'vibrate 200',
		'fir Tasku!',
		'show background musala',
		'id Firdaus langsung membukanya, dan menunjukkan wajah lega setelahnya. Aku melihat juga beberapa barang juga terletak di sini.',
		'fir Kurasa kamu benar. Ini seperti disengaja.',
		'show scene 0716 with fadeIn duration 3s',
		'id Sekarang adalah hari kedua dari acara Masa Taaruf Siswa Madrasah, juga sekolahku di tingkat MA.',
		'show background stage',
		'za Halo semuanya!',
		'show background chairs',
		'Halo!',
		'show background stage',
		'za Hari ini kita melanjutkan acara kita, dan sesuai janji kakak, kalian boleh menunjukkan bakat kalian.',
		'show background chairs',
		'Semua bertepuk tangan. Seolah bergembira atas apa yang akan mereka tonton sebentar lagi.',
		'show background stage_dark',
		'Lampu padam tiba-tiba. Ruangan menjadi gelap dan suasana ricuh.',
		'Sebuah lampu menyorot Zain yang diseret dengan mulut dan mata ditutup tangan pelakunya.',
		'Lampu sorot padam.',
		'show background stage',
		'Beberapa saat kemudian, lampu ruangan menyala lagi dan Zain menghilang.',
		'Anggota OSIS lainnya mulai gelabakan. Naiklah salah seorang dari mereka ke podium, dan menyuruh kami agar tetap tenang dan acara unjuk bakat dibatalkan.',
		'Semua siswa yang berada di ruangan tersebut begitu kecewa dan mulai mengejek acara hari ini. Sementara salah satu anggota OSIS itu turun dari podium dan meninggalkan ruangan bersama yang anggota yang lain.',
		'show background chairs',
		'fir Apa tadi barusan?',
		'id Itu disengaja. Seandainya mereka mau, Zain bisa saja <i>diculik</i> lebih awal daripada ini atau kemarin.',
		'fir Bagaimana kalau kita cari di musala? Kemarin kan, kita menemukan tasku di sana.',
		'id Ide bagus!',
		'show background door_musala',
		'id Kami pergi ke musala.',
		'show scene musala with shake 1s',
		'vibrate 200',
		'id Kami menemukan seseorang di sana dengan kepala bertutup kain hitam. Kulepas kain itu, dan ternyata itu memang Zain. Aku juga melepaskan ikatan tali di kaki, mulut dan tangannya.',
		'show background musala',
		'za Apa yang terjadi?',
		'fir Kami pun tidak tahu.',
		'za Tapi terima kasih, kalian menyelamatkanku. Aku hampir saja kehabisan napas gara-gara kain itu.',
		'Zain bersiap untuk pergi.',
		'id Tunggu dulu, ada beberapa hal yang ingin kusampaikan.',
		'za Silakan.',
		'Idris pun melontarkan pertanyaan-pertanyaan sementara Firdaus hanya memandang. Zain saat itu berbaik hati menjawab pertanyaannya.',
		'id Baiklah, sudah jelas pelakunya.',
		'fir Pelaku di balik semua ini?',
		'id Ya, tapi aku menyampaikannya besok, hari ketiga acara kita.',
		'id Maukah Anda bekerja sama dengan kami?',
		'za Tentu, aku sendiri tertarik mendengar siapa pelakunya.',
		'show scene 0717 with fadeIn duration 3s',
		'id Hari ketiga, hari terakhir untuk acara Masa Taaruf Siswa Madrasah.',
		'show background stage',
		'za Halo semua!',
		'za Ini sudah hari ketiga, berarti semua berakhir di sini.',
		'show background chairs',
		'Suasana menjadi ricuh, seolah para siswa tidak ingin kegembiraan ini berakhir begitu saja.',
		'show background stage',
		'za Saya, mewakili OSIS, meminta maaf atas segala kejadian yang terjadi di Matsama ini, dari menghilangnya barang-barang kalian sampai diculiknya aku beberapa hari yang lalu.',
		'za Kami berjanji, kami akan mengungkap siapa orang yang melakukan hal itu, dengan bantuan teman kita yang bernama Muhammad Idris.',
		'Ketika nama Idris dipanggil, dia memberanikan diri untuk berdiri dari tempat duduk dan menuju ke depan. Zain turun dari panggung dan menyerahkan mikrofon kepadanya.',
		'id Perkenalkan, namaku Muhammad Idris, panggil saja Idris. Aku di sini ditunjuk untuk memberitahukan kalian siapa pelaku di balik kejadian-kejadian ini.',
		'id Tapi aku tidak mau sendirian. Aku minta ditemani teman baruku, Ahmad Firdaus.',
		'Uniknya, sepertinya hanya satu orang bernama itu, hanya dia. Firdaus pun berdiri dan pergi mendampingi Idris. Firdaus sempat kebingungan, itu memang salah Idris karena Firdaus belum memberitahukan hal ini lebih awal.',
		'id Pada intinya, ini semua disengaja. Mari kita mulai dengan barang yang menghilang.',
		'id Aku mengambil contoh dari tas biru Firdaus. Dia bercerita bahwa dia menaruh tasnya paling belakang, tertutupi oleh tas lainnya. Ketika dia mencarinya, ternyata menghilang.',
		'id Kami mulai mencari tas itu dan menemukannya di musala, tepat di samping ruangan ini. Di sana juga ditaruh beberapa barang yang sepertinya sudah kalian ambil.',
		'fir Aku menyadari sesuatu yang aneh, hanya barang-barang yang ditaruh paling belakang yang terletak di sana.',
		'id Aku memiliki teori bahwa sebenarnya barang-barang diambil secara acak namun diletakkan di tempat tertentu. Semakin jauh kalian menaruh barang, semakin dekat untuk ditemukan.',
		'id Lanjut untuk yang kedua, penculikan <i>kak</i> Zain.',
		'id Sama seperti menghilangnya barang itu, hal ini disengaja. Buktinya bahwa kejadian ini didramatisasi, padahal mereka bisa saja menculiknya langsung tanpa mengatur pencahayaannya.',
		'id Di sini aku memiliki teori yang hampir mirip dengan sebelumnya, tapi sekarang semakin berat suatu barang, semakin dekat dia ditemukan.',
		'id Lagipula seandainya memang ada penculik, maka <i>kak</i> Zain akan lebih susah untuk ditemukan.',
		'fir Lalu bagaimana caranya dia bisa berada di musala?',
		'id Orang ini menurutku susah dipindahkan oleh hanya satu orang. Orang itu adalah....',
		'id Kak Mustafa! Keluarlah! Saya tahu Anda pelakunya.',
		'mus Wah, kamu benar sekali.',
		'fir Apa alasan kakak melakukan ini?',
		'mus Bertahun-tahun, para siswa tidak pernah menghargai kegiatan Matsama ini, saking tidak menghargainya, mereka memanggilku kembali.',
		'mus Aku baru saja lulus dari MA Sukamawar ini, dan mereka masih memerlukanku. Aku merelakan semuanya demi acara ini. Tapi mereka tidak menghargainya.',
		'fir Tidak begitu, aku menyukai acara ini. Tanpanya, belum tentu aku bertemu dengan teman baruku.',
		'fir Aku yakin, di antara orang-orang di sini, ada orang yang meneruskan ide kreatif Anda. Jika Anda mengarahkannya ke jalan yang benar.',
		'Idris maju dan menyalami Mustafa. Dia nampak kelelahan, dan akhirnya pingsan. Idris mencoba menyanggahnya sekuat tenaga. Kemudian tim PMR membantu dalam hal ini. Mustafa pun dibawa menggunakan tandu keluar dari ruangan.',
		'id Ada apa dengannya?',
		'za Bukankah dia sudah bilang, dia merelakan segalanya?',
		'za Sebenarnya aku juga alumni, dan sejak dulu dia selalu berusaha sampai lupa diri.',
		'za Apa yang dia katakan itu benar, selama kami menjabat, acara Matsama tidak pernah dihargai. Sekarang, dia punya ide, bagaimana kalau acaranya dikacaukan saja. Dan kalian malah lebih menghargainya.',
		'za Aku melihat dengan jelas, ketika Mustafa berpidato, ekspresi kalian menandakan bahwa sebenarnya kalian tidak menginginkannya. Yang kalian inginkan hanya keseruannya.',
		'Zain meminta mikrofon yang dipegang oleh Idris dikembalikan.',
		'za Ya, demikianlah acara kita, berakhir disini. Saya mewakili seluruh anggota OSIS mengucapkan maaf atas banyaknya kesalahan dalam acara ini.',
		'Idris menyalami Zain namun dia memeluk.',
		'za Terima kasih, sekarang semua sempurna.',
		'Zain melepas pelukan dan tersenyum.',
		'Anggota OSIS pun meninggalkan ruangan setelahnya. Idris hanya tersenyum, sementara Firdaus kebingungan. Para siswa mulai meninggalkan ruangan. Idris dan Firdaus mengambil tas mereka di tempat penaruhan barang, sembari keluar.',
		'show background school',
		'fir Apa maksudnya tadi?',
		'Rupanya Firdaus juga mendengar ucapan terakhir Zain.',
		'id Bukankah kubilang, semuanya sudah dirancang. Aku yakin naskah mereka diperbarui beberapa saat sebelum acara karena aku memberitahu pelakunya. Dan seolah aku yang menyempurnakannya.',
		'fir Oh ya, kamu jurusan apa?',
		'id Aku jurusan Agama, kamu?',
		'fir Aku jurusan Bahasa, huft.',
		'id Kenapa?',
		'fir Hanya saja aku berharap kita bisa sekelas dan mengenal lebih lanjut.',
		'id Kita bisa gunakan waktu istirahat untuk berbicara nantinya.',
		'fir Ya, terkadang hidup kita ini perlu diisi.',
		'Idris terlihat bingung dengan perkataan Firdaus.',
		'show scene #000 with fadeIn 3s',
		'jump Kasus02'
	],
	'Kasus02' : [
		'nvl Kasus 2',
		'nvl Kisah Kelam MA Sukamawar',
		'show scene 0729 with fadeIn 3s',
		'clear',
		'show background school',
		'id Aku berjalan mengelilingi sekolah baruku ini. Aku melakukannya karena mendengar ocehan para guru, tentang sesuatu yang mereka rahasiakan sejak dahulu. Ada hal besar yang akan terjadi hari ini dan saat itu aku belum mengetahuinya.',
		'show background school_hallway',
		'id Saat aku berada di lorong utama, Firdaus menyapaku dari belakang.',
		'fir Idris, mau ke mana?',
		'id Sekadar jalan-jalan. Kamu?',
		'fir Aku ingin mengembalikan kamus ini ke perpustakaan.',
		'id Bolehkah aku ikut?',
		'fir Tentu.',
		'id Kami pun menuju perpustakaan.',
		'show background library',
		'id Sesampainya kami di perpustakaan, ternyata penjaganya tidak ada di sana.',
		'fir Hm, kalau begitu, buku ini kuletakkan di tempat asalnya dulu, nanti saja aku melapor, karena aku bergegas.',
		'Firdaus meletakkan kamus kembali pada raknya.',
		'id Bergegas ke mana?',
		'fir Ke mana lagi kalau bukan ke kelas.',
		'id Bagaimana kalau tinggal sebentar. Ada hal yang ingin kubicarakan, mumpung tidak ada penjaganya di sini.',
		'fir Apa itu?',
		'id Apakah kamu sudah mendengar ocehan para guru tentang sesuatu yang mereka rahasiakan sejak lama?',
		'fir Ya, aku mengetahuinya.',
		'fir Ada sebuah ruangan di sekolah ini yang menyembunyikan semua barang-barang penting. Entah apa maksudnya.',
		'fir Aku sudah lama mengetahuinya, karena almarhum kakakku yang dulu juga sekolah di sini sering menceritakannya.',
		'id Mohon maaf sebelumnya. Bisakah kamu menceritakan lebih tentang meninggalnya kakakmu?',
		'fir Baiklah, jika kamu menginginkannya.',
		'fir Kakakku meninggal di sekolah ini sepuluh tahun yang lalu, saat aku masih berusia enam tahun.',
		'fir Aku merasakan hal aneh. Punggung kakakku dikatakan terluka parah dan ketika jasadnya tiba di rumah, warna kulitnya sudah pucat.',
		'id Aku turut berduka cita.',
		'Idris menunduk saat mengucapkan hal tadi. Saat menunduk, dia melihat bayangan berwarna di bawah meja baca Firdaus. Idris langsung tiarap dan berusaha mengambil barang itu.',
		'id Buku Alumni MA Sukamawar Tahun Ajaran 2009/2010.',
		'Idris membuka buku tersebut dan berhenti pada halaman ketiga.',
		'id Mengenang Andri, salah satu siswa terbaik kami yang tewas di sekolah ini.',
		'fir Itu kakakku.',
		'id Tapi, kenapa mereka memilih kata tewas daripada meninggal. Bukannya lebih halus?',
		'fir Entahlah. Aku tidak tahu.',
		'Tidak lama kemudian, penjaga perpustakaan datang dan melihat buku yang dibaca oleh Idris dan Firdaus.',
		'bam Hei! Apa yang kamu lakukan dengan buku itu?! Sini serahkan!',
		'Idris sontak berdiri dan menyerahkan buku yang dia ambil tadi kemudian diikuti Firdaus.',
		'fir Anu, pak! Saya kemarin kan minjam kamus, barusan saya kembalikan. Saya juga sudah letakkan di raknya.',
		'bam Atas nama?',
		'fir Ahmad Firdaus.',
		'Bambang membuka buku catatannya dan menuliskan hal tersebut.',
		'bam Kalian tahu? Kalian sudah keterlaluan, mengambil buku ini tanpa izin.',
		'bam Maka oleh karena itu, keluar! Jangan kembali lagi!',
		'show background school_hallway',
		'id Firdaus, maafkan aku karena menyebabkan hal ini.',
		'fir Tidak apa-apa.',
		'Idris dan Firdaus hanya berjalan di lorong, dengan keheningan yang terasa.',
		'fir Kamu ingin ke kelas, kah?',
		'id Tidak. Aku mendengar rapat yang akan diadakan nanti berdampak dengan ditiadakannya pelajaran. Mereka katanya akan membahas sebuah hal lebih lanjut.',
		'fir Firdaus nampak kesal. Idris merasa kekesalannya disebabkan pelajaran hanya dilaksanakan Sabtu kemarin dan tidak lagi setelahnya.',
		'id Mari kita berpikiran positif. Mungkin para guru menyusun ulang jadwal agar tidak tabrakan dengan kelas lain.',
		'id Oh ya, kita kan belum pernah ke lantai dua. Ke sana yuk!',
		'Firdaus menerima ajakan tersebut dan mereka pun menuju lantai dua sekolah.',
		'show background school_rooftop',
		'Sesampainya di lantai dua, ternyata ada bapak kepala madrasah yang berdiri di dekat balkon.',
		'fir Halo, pak.',
		'ba Halo, nak.',
		'ba Sedang apa kalian di sini?',
		'id Kami ingin jalan-jalan.',
		'ba Oh, silakan. Tapi bapak peringatkan jangan pergi ke sana!',
		'Bagus menunjuk ke suatu arah.',
		'fir Siap, pak.',
		'ba Bapak turun dulu ya, kalian hati-hati.',
		'Bagus berjalan menuruni tangga.',
		'id Baik, pak.',
		'id Kira-kira apa yang ada di sana ya?',
		'Idris yang penasaran mendekati arah yang ditunjuk Bagus barusan. Firdaus diam namun mengikutinya.',
		'Idris tetap berjalan sampai tak sengaja terinjak sebuah pintu jebakan sampai hampir terjatuh, tapi Firdaus berhasil menangkapnya.',
		'Idris hanya terduduk sambil memegang dadanya akibat terkejut.',
		'show background gudang_dark',
		'Cahaya masuk ke ruangan tepat di bawah dari pintu ini.',
		'show background school_rooftop',
		'fir Ke mana ini?',
		'Idris teringat kejadian pekan sebelumnya, ketika dia menemani Firdaus mencari tas birunya. Mereka menemukan ruangan yang terkunci sebelumnya, yakni gudang. Nampaknya Firdaus menyadari juga.',
		'fir Tunggu di sini, sementara aku akan turun lebih dahulu ke lantai satu.',
		'Firdaus pun turun ke lantai satu. Idris menunggunya sambil melihat ke dalam ruangan itu.',
		'show background gudang_dark',
		'Cahaya dari atas tidak cukup menerangi ruangan itu. Idris bisa melihat beberapa barang namun tidak tahu apa saja.',
		'show background gudang',
		'Firdaus tiba di ruangan itu, dan Idris bisa melihatnya dari atas. Firdaus membiarkan pintunya terbuka, namun Idris memilih untuk menutup pintu jebakan itu.',
		'show background school_rooftop',
		'Idris sudah menenangkan diri. Dia pun turun dan mencari Firdaus.',
		'show background gudang',
		'Idris sangat terkejut karena tebakannya benar.',
		'Banyak hal menarik yang Idris dan Firdaus temukan di sana. Mulai dari pecahan kaca, patahan kayu, dan beberapa paku yang berlumur darah sampai ke beberapa tali yang terlihat seperti senar gitar, biola dan drum. Terlihat juga di ujung ruangan, tuts piano yang berhamburan serta recorder yang patah.',
		'Meski pintu yang terbuka lebar, tapi baru sebentar di dalam ruangan itu, keringat Idris dan Firdaus mulai bercucuran. Ruangan itu begitu pengap.',
		'show background school_hallway',
		'Idris keluar diikuti Firdaus. Mereka memilih taman kecil di sekolah itu untuk tujuan berikutnya.',
		'show background school_garden',
		'Mereka memilih taman kecil di sekolah itu sebagai tujuan berikutnya. Idris menunjuk sebuah bangku dan duduk di sana. Menikmati angin sepoi-sepoi kemudian berbicara dengan Firdaus.',
		'id Bolehkah aku membicarakan tentang kakakmu?',
		'id Sejak melihat buku alumni itu, aku berpikir bahwa kakakmu sebenarnya terbunuh.',
		'fir Aku juga berpikir demikian.',
		'fir Setelah melihat apa yang kita temukan tadi, aku rasa kita menemukan buktinya. Luka di punggungnya, aku tahu sebabnya.',
		'id Tapi menurutmu, siapa pelakunya?',
		'fir Menurutku bapak penjaga perpustakaan itu. Gelagat beliau begitu aneh saat kita di sana. Itu membuatku sangat curiga.',
		'id Aku malah berpendapat bahwa bapak kepala sekolah pelakunya.',
		'fir Apa alasanmu menganggap beliau pelakunya?',
		'id Masih ingat ketika kita ke lantai dua tadi?',
		'fir Ya, tentu.',
		'id Jika beliau memperingatkan kita untuk jangan pergi ke ujung, maka beliau akan memastikan agar kita tidak pergi ke sana.',
		'id Ternyata, beliau malah turun. Seolah ingin membunuh kita.',
		'id Bagaimana jika hal yang sama terjadi dengan kakakmu?',
		'Idris dan Firdaus terdiam sejenak. Terasa angin bertiup semakin kencang.',
		'Kelopak-kelopak mawar gugur dan beterbangan. Salah satunya mengenai wajah Idris dan dia mengambilnya.',
		'id Layu.',
		'fir Tunggu, jika kakakku dibunuh oleh kepala madrasah, kenapa dia membanggakan prestasi olimpiade Jepang itu?',
		'fir Seharusnya apa yang dilakukan kakakku adalah prestasi terhebat yang pernah diraih oleh MA Sukamawar ini.',
		'fir Mungkin mereka menutupi meninggalnya ibuku, yang bisa saja dibunuh di hari yang sama.',
		'id Meninggalnya ibumu?',
		'Firdaus hanya diam, namun dia nampak begitu marah dengan kepala madrasah.',
		'show background school',
		'Tiba-tiba di tengah keheningan, terdengarlah bunyi sirene mobil polisi mengarah ke MA Sukamawar.',
		'Beberapa polisi keluar dari mobil dan mulai berjalan ke arah ruang kepala madrasah.',
		'Kemarahan Firdaus nampak mulai membutakannya. Dia berlari, mengarah ke salah satu polisi, entah bagaimana caranya bisa mengambil pistol yang dipegang di tangan kanannya dan menuju ruangan kepala madrasah.',
		'Polisi mulai mengejarnya, begitu juga Idris. Namun Firdaus berhasil masuk kantor kepala madrasah dan—',
		'show background school_hallway',
		'Dor!',
		'show background school',
		'Idris cukup terkejut dengan bunyi tembakan itu sehingga dia merasa pengejarannya gagal total.',
		'show background school_hallway',
		'kur Apa yang kamu lakukan, dik?',
		'Anehnya, malah kepala madrasah yang dibawa keluar dengan tangan diborgol.',
		'id Tunggu, apa yang terjadi barusan?',
		'Siswa sempat berkumpul dan heboh, namun setelah melihat kejadian barusan, mereka mulai berjauhan dari lorong.',
		'show background room_headmaster',
		'Akhirnya, Idris dapat dengan mudah masuk ruangan itu dan menemukan Firdaus yang berdiri tegak, seolah kehilangan kesadaran.',
		'Idris mendekati meja kepala madrasah, terdapat hitungan mundur yang hampir berakhir di komputernya.',
		'Idris sangat terkejut dan panik. Dia sangat mengenal hitungan mundur yang terus berjalan di komputer itu untuk bom waktu. Kepanikan Idris melupakan apa yang pernah dia pelajari.',
		'id Firdaus!',
		'fir Peluru kosong....',
		'id Persetan dengan hal itu! Kita dalam bahaya! Ada bom waktu! Matikan itu!',
		'fir Aku gak bisa! Aku belum pernah belajar!',
		'id Kalau begitu, kita keluar. Cari guru yang bisa!',
		'show background school_hallway',
		'Idris dan Firdaus pergi ke ruang guru.',
		'show scene room_teacher',
		'centered Kosong.',
		'show background room_teacher',
		'Idris mencurigai bahwa rapat yang para guru adakan sebelumnya hanya memberitahu bahwa akan terjadi ledakan. Ocehan yang mereka bahas sejak pagi hari.',
		'show background school',
		'Tepat mobil polisi meninggalkan madrasah kami, terjadilah ledakan sampai terdengar dentuman nyaring yang mengherankan berasal dari gudang dan merusak perpustakaan. Api masih membakar dan asapnya membumbung.',
		'show background school_hallway',
		'fir Ah, seandainya kita sempat mengambil barang-barang tadi, itu bisa menjadi bukti betapa kelam sebenarnya madrasah ini.',
		'Idris berusaha menenangkan Firdaus saat itu.',
		'show background school',
		'Tak lama kemudian, terdengar lagi suara sirene, namun kali ini pemadam kebakaran. Mereka datang untuk menyirami ruangan yang terbakar itu. Tapi secara tidak langsung, barang—yang bisa saja menjadi bukti kata Firdaus itu—hangus tiada bersisa.',
		'show scene #000 with fadeIn 3s',
		'jump Tamat',
	],
	'Tamat' : [
		'show background #000',
		'show message thank_you',
		'end'
	],
});
