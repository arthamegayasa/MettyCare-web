/* ============================================================
   MettyCare — interactions + bilingual (EN/ID) i18n
   Target audience: expats & travelers in Bali. Default: English.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- WhatsApp config ---------- */
  const WA_NUMBER = '6285857846808';
  const WA_MSG = {
    en: 'Hello MettyCare, I would like to ask about your home care services in Bali.',
    id: 'Halo MettyCare, saya ingin bertanya tentang layanan home care di Bali.',
  };

  /* ---------- Translations ---------- */
  const I18N = {
    en: {
      __title: 'MettyCare — English-Speaking Home Care & IV Therapy in Bali',
      __desc: 'English-speaking medical home care across Bali for expats and travelers — doctors, nurses, IV drips, physiotherapy, and caregivers brought to your villa, hotel, or home. Available 24/7.',

      'nav.services': 'Services',
      'nav.why': 'Why Us',
      'nav.how': 'How It Works',
      'nav.packages': 'Packages',
      'nav.iv': 'IV Therapy',
      'nav.testimonials': 'Reviews',
      'nav.faq': 'FAQ',
      'nav.cta': 'Contact Us',

      'hero.eyebrow': 'Home Care & IV Therapy in Bali',
      'hero.title': 'Quality home healthcare, anywhere in <span class="text-grad">Bali</span>',
      'hero.lead': 'An English-speaking medical team brought straight to your villa, hotel, or home — doctors, nurses, IV drips, physiotherapy, and caregivers. Professional care, whenever you need it.',
      'hero.ctaPrimary': 'Chat on WhatsApp',
      'hero.ctaSecondary': 'View Services',
      'hero.trust1': 'English-speaking team',
      'hero.trust2': '24/7 on call',
      'hero.trust3': 'To your villa or hotel',
      'hero.badgeLabel': 'Guest rating',
      'hero.chip': 'Team on call',

      'stats.1': 'Patients cared for',
      'stats.2': 'Medical team &amp; caregivers',
      'stats.3': 'On call, every day',
      'stats.4': 'Guest rating',

      'services.eyebrow': 'Our Services',
      'services.title': 'One team for every health need',
      'services.sub': 'From a doctor’s visit to daily care — every MettyCare professional comes to your villa, hotel, or home.',
      'service.doctor.title': 'Doctor',
      'service.doctor.text': 'Home visits and consultations with GPs and specialists, including treatment follow-ups.',
      'service.nurse.title': 'Nurse',
      'service.nurse.text': 'Medical and nursing procedures: IV lines, wound care, catheters, injections, and vital-sign monitoring.',
      'service.nutrition.title': 'Nutritionist',
      'service.nutrition.text': 'Nutrition assessments and personalized meal plans for recovery, the elderly, and special conditions.',
      'service.caregiver.title': 'Caregiver',
      'service.caregiver.text': 'Daily assistance for the elderly and patients: personal hygiene, mobility, meals, and companionship.',
      'service.pharmacy.title': 'Pharmacy',
      'service.pharmacy.text': 'Medication delivery, prescription management, and guidance so treatment stays on track.',
      'service.physio.title': 'Physiotherapy',
      'service.physio.text': 'Recovery therapy after surgery, stroke, and injury to restore mobility and strength.',
      'services.more': '<strong>&amp; more</strong> — home lab tests, medical equipment rental, specialized wound care, and other needs based on your condition.',

      'why.eyebrow': 'Why MettyCare',
      'why.title': 'Healthcare that speaks your language',
      'why.sub': 'We pair international medical standards with a warm, English-speaking team — so you feel safe and understood, even far from home.',
      'why.f1.title': 'Certified, English-speaking team',
      'why.f1.text': 'Every doctor, nurse, and therapist is licensed, experienced, and fluent in English.',
      'why.f2.title': 'Care at your villa, hotel, or home',
      'why.f2.text': 'We come to you anywhere in Bali — no clinic queues, no travel.',
      'why.f3.title': 'A complete medical team',
      'why.f3.text': 'From doctors to nutritionists and pharmacy — coordinated in one service.',
      'why.f4.title': 'Transparent, upfront pricing',
      'why.f4.text': 'Clear quotes before we start, with no surprises.',

      'how.eyebrow': 'How It Works',
      'how.title': 'Get care in 4 easy steps',
      'how.sub': 'No hassle. Just message us — the MettyCare team handles the rest.',
      'how.s1.title': 'Contact &amp; Consult',
      'how.s1.text': 'Tell us what you need on WhatsApp. The first consultation is free.',
      'how.s2.title': 'Quick Assessment',
      'how.s2.text': 'Our team assesses your condition and recommends the right care.',
      'how.s3.title': 'We Schedule a Visit',
      'how.s3.text': 'The right doctor, nurse, or caregiver is scheduled to come to you.',
      'how.s4.title': 'Care at Your Door',
      'how.s4.text': 'Care is delivered to professional standards and followed up as needed.',

      'paket.eyebrow': 'Care Packages',
      'paket.title': 'Choose the care that fits your needs',
      'paket.sub': 'Every situation is different — we tailor the cost to your needs. Message us for a quote.',
      'pkg.price.amount': 'Custom Quote',
      'pkg.price.note': 'Contact us for the price',
      'pkg.cta': 'Request a Quote',
      'pkg.nurse.title': 'Nursing Care',
      'pkg.nurse.desc': 'Medical &amp; nursing procedures by certified nurses, at your place.',
      'pkg.nurse.f1': 'Vital sign monitoring (BP, temperature, pulse)',
      'pkg.nurse.f2': 'Wound &amp; post-operative care',
      'pkg.nurse.f3': 'Medication &amp; injection administration',
      'pkg.nurse.f4': 'IV, catheter &amp; NGT care',
      'pkg.nurse.f5': 'Regular condition reports',
      'pkg.nurse.f6': 'Coordination with the doctor',
      'pkg.caregiver.title': 'Caregiver Care',
      'pkg.caregiver.desc': 'Daily companionship &amp; activity assistance by trained caregivers.',
      'pkg.caregiver.f1': 'Personal hygiene assistance (bathing, toileting)',
      'pkg.caregiver.f2': 'Help with eating &amp; drinking',
      'pkg.caregiver.f3': 'Mobility &amp; activity assistance',
      'pkg.caregiver.f4': 'Accompaniment to checkups &amp; daily routine',
      'pkg.caregiver.f5': 'General condition monitoring',
      'pkg.caregiver.f6': 'Emotional support &amp; companionship',

      'nav.iv': 'IV Therapy',
      'iv.eyebrow': 'IV Therapy',
      'iv.title': 'Feel your best with our IV drips',
      'iv.sub': 'Professional IV therapy delivered to your hotel, villa, or home — administered by our medical team.',
      'iv.book': 'Book Now',
      'iv.hangover.title': 'Hangover Drip',
      'iv.hangover.desc': 'Bounce back fast after a heavy night. A complete blend of fluids, anti-nausea medication, vitamins, and oxygen to rehydrate and revive you.',
      'iv.belly.title': 'Bali Belly Care',
      'iv.belly.desc': 'Caught a case of Bali Belly? Our traveler’s diarrhea IV rehydrates you and eases the symptoms, so you can recover quickly and get back to your trip.',
      'iv.hydration.title': 'Hydration Package',
      'iv.hydration.desc': 'Replenish what you’ve lost. The perfect pick-me-up for dehydration after sports, long travel, or a day under the Bali sun.',
      'iv.vitamin.title': 'Vitamin Booster',
      'iv.vitamin.desc': 'Recharge from the inside out. A tailored vitamin and nutrient boost to refresh your skin, lift your energy, and revitalize your overall well-being.',

      'test.eyebrow': 'What Guests Say',
      'test.title': 'Trusted by expats &amp; travelers in Bali',
      'test.sub': 'Real stories from guests and residents we’ve cared for across the island.',
      'test.1.quote': '"I came down with a nasty Bali Belly two days into our holiday. They reached our villa in Canggu within the hour, set up an IV, and I was back on my feet by evening. Lifesavers."',
      'test.1.role': 'Traveler · Canggu',
      'test.2.quote': '"My elderly father was visiting us in Bali and needed daily nursing care. The team was professional, punctual, and spoke perfect English. Total peace of mind."',
      'test.2.role': 'Expat · Sanur',
      'test.3.quote': '"Booked a vitamin drip after one too many late nights in Seminyak. Easy WhatsApp booking, friendly nurse, and I felt amazing the next day."',
      'test.3.role': 'Traveler · Seminyak',

      'faq.eyebrow': 'FAQ',
      'faq.title': 'Frequently asked questions',
      'faq.q1': 'Which areas in Bali do you cover?',
      'faq.a1': 'We cover Canggu, Seminyak, Kuta, Ubud, Sanur, Denpasar, and most of Bali. We come to your villa, hotel, or home — just message us to confirm your location.',
      'faq.q2': 'How do I book?',
      'faq.a2': 'Just tap the WhatsApp button on this page and tell us what you need. Our team will help assess and schedule the right staff for you.',
      'faq.q3': 'Is your team certified and English-speaking?',
      'faq.a3': 'Yes. All our doctors, nurses, and therapists are fully licensed, experienced, and fluent in English.',
      'faq.q4': 'How does payment work?',
      'faq.a4': 'Pricing is transparent and shared upfront. We accept cash and bank transfer, with card payment available on request.',
      'faq.q5': 'Do you offer 24/7 or emergency service?',
      'faq.a5': 'We are on call 24/7 for care needs. For a life-threatening emergency, please call the local emergency line 112 immediately.',

      'cta.title': 'Need a doctor, nurse, or IV drip in Bali?',
      'cta.text': 'Free initial consultation. We’ll come to your villa, hotel, or home — today.',
      'cta.primary': 'Chat on WhatsApp',

      'footer.tagline': 'English-speaking medical home care and IV therapy, brought to your villa, hotel, or home anywhere in Bali.',
      'footer.servicesTitle': 'Services',
      'footer.pharmaPhysio': 'Pharmacy &amp; Physiotherapy',
      'footer.companyTitle': 'Company',
      'footer.contactTitle': 'Contact',
      'footer.area': 'Serving all of Bali',
      'footer.hours': 'On call 24 hours, every day',
      'footer.copy': 'MettyCare. All rights reserved.',
      'footer.note': 'Information on this page is not a substitute for emergency medical advice. In an emergency, call 112.',
    },

    id: {
      __title: 'MettyCare — Home Care & Terapi IV di Bali',
      __desc: 'Layanan home care medis berbahasa Inggris di seluruh Bali untuk expat dan wisatawan — dokter, perawat, infus IV, fisioterapi, dan caregiver hadir ke vila, hotel, atau rumah Anda. Siaga 24 jam.',

      'nav.services': 'Layanan',
      'nav.why': 'Keunggulan',
      'nav.how': 'Cara Kerja',
      'nav.packages': 'Paket',
      'nav.iv': 'IV Therapy',
      'nav.testimonials': 'Testimoni',
      'nav.faq': 'FAQ',
      'nav.cta': 'Hubungi Kami',

      'hero.eyebrow': 'Home Care & Terapi IV di Bali',
      'hero.title': 'Perawatan kesehatan berkualitas, di mana pun Anda di <span class="text-grad">Bali</span>',
      'hero.lead': 'Tim medis berbahasa Inggris yang datang langsung ke vila, hotel, atau rumah Anda — dokter, perawat, infus IV, fisioterapi, dan caregiver. Perawatan profesional, kapan pun Anda butuh.',
      'hero.ctaPrimary': 'Chat via WhatsApp',
      'hero.ctaSecondary': 'Lihat Layanan',
      'hero.trust1': 'Tim berbahasa Inggris',
      'hero.trust2': 'Siaga 24 jam',
      'hero.trust3': 'Ke vila atau hotel Anda',
      'hero.badgeLabel': 'Rating tamu',
      'hero.chip': 'Tim siaga',

      'stats.1': 'Pasien terlayani',
      'stats.2': 'Tim medis &amp; caregiver',
      'stats.3': 'Siaga setiap hari',
      'stats.4': 'Rating kepuasan',

      'services.eyebrow': 'Layanan Kami',
      'services.title': 'Satu tim untuk semua kebutuhan kesehatan',
      'services.sub': 'Dari kunjungan dokter sampai perawatan harian — semua tenaga MettyCare datang ke vila, hotel, atau rumah Anda.',
      'service.doctor.title': 'Dokter',
      'service.doctor.text': 'Kunjungan dan konsultasi dokter umum maupun spesialis langsung di tempat Anda, termasuk tindak lanjut pengobatan.',
      'service.nurse.title': 'Perawat',
      'service.nurse.text': 'Perawatan medis dan tindakan keperawatan: infus, luka, kateter, injeksi, hingga pemantauan vital sign.',
      'service.nutrition.title': 'Ahli Gizi',
      'service.nutrition.text': 'Asesmen nutrisi dan penyusunan rencana makan personal untuk pemulihan, lansia, dan kondisi khusus.',
      'service.caregiver.title': 'Caregiver',
      'service.caregiver.text': 'Pendampingan harian lansia dan pasien: kebersihan diri, mobilitas, makan, dan dukungan emosional.',
      'service.pharmacy.title': 'Farmasi',
      'service.pharmacy.text': 'Pengantaran obat, pengelolaan resep, dan edukasi penggunaan obat agar terapi berjalan tepat.',
      'service.physio.title': 'Fisioterapi',
      'service.physio.text': 'Terapi pemulihan pasca operasi, stroke, dan cedera untuk memulihkan mobilitas dan kekuatan.',
      'services.more': '<strong>&amp; lainnya</strong> — pemeriksaan lab di tempat, penyewaan alat kesehatan, perawatan luka khusus, dan kebutuhan lain sesuai kondisi Anda.',

      'why.eyebrow': 'Kenapa MettyCare',
      'why.title': 'Perawatan kesehatan tanpa hambatan bahasa',
      'why.sub': 'Kami memadukan standar medis internasional dengan tim ramah berbahasa Inggris — agar Anda merasa aman dan dimengerti, jauh dari rumah.',
      'why.f1.title': 'Tim bersertifikat &amp; berbahasa Inggris',
      'why.f1.text': 'Setiap dokter, perawat, dan terapis berlisensi, berpengalaman, dan fasih berbahasa Inggris.',
      'why.f2.title': 'Perawatan di vila, hotel, atau rumah',
      'why.f2.text': 'Kami datang ke tempat Anda di seluruh Bali — tanpa antre klinik, tanpa repot.',
      'why.f3.title': 'Tim medis lengkap',
      'why.f3.text': 'Dari dokter sampai ahli gizi dan farmasi — terkoordinasi dalam satu layanan.',
      'why.f4.title': 'Harga transparan di awal',
      'why.f4.text': 'Penawaran jelas sebelum mulai, tanpa kejutan biaya.',

      'how.eyebrow': 'Cara Kerja',
      'how.title': 'Dapatkan perawatan dalam 4 langkah',
      'how.sub': 'Tanpa ribet. Cukup hubungi kami, sisanya tim MettyCare yang urus.',
      'how.s1.title': 'Hubungi &amp; Konsultasi',
      'how.s1.text': 'Ceritakan kebutuhan Anda lewat WhatsApp. Konsultasi awal gratis.',
      'how.s2.title': 'Asesmen Cepat',
      'how.s2.text': 'Tim kami menilai kondisi Anda dan merekomendasikan perawatan yang tepat.',
      'how.s3.title': 'Kami Jadwalkan Kunjungan',
      'how.s3.text': 'Dokter, perawat, atau caregiver yang sesuai dijadwalkan untuk datang ke tempat Anda.',
      'how.s4.title': 'Perawatan di Tempat Anda',
      'how.s4.text': 'Layanan dilakukan dengan standar profesional dan ditindaklanjuti sesuai kebutuhan.',

      'paket.eyebrow': 'Paket Perawatan',
      'paket.title': 'Pilih perawatan sesuai kebutuhan',
      'paket.sub': 'Setiap situasi berbeda — biaya kami sesuaikan dengan kebutuhan Anda. Hubungi kami untuk penawaran.',
      'pkg.price.amount': 'Custom Quote',
      'pkg.price.note': 'Hubungi kami untuk harga',
      'pkg.cta': 'Minta Penawaran',
      'pkg.nurse.title': 'Perawatan dengan Perawat',
      'pkg.nurse.desc': 'Tindakan medis &amp; keperawatan oleh perawat bersertifikat, di tempat Anda.',
      'pkg.nurse.f1': 'Pemantauan tanda vital (tensi, suhu, nadi)',
      'pkg.nurse.f2': 'Perawatan luka &amp; pasca operasi',
      'pkg.nurse.f3': 'Pemberian obat &amp; injeksi',
      'pkg.nurse.f4': 'Perawatan infus, kateter &amp; NGT',
      'pkg.nurse.f5': 'Laporan kondisi berkala',
      'pkg.nurse.f6': 'Koordinasi dengan dokter',
      'pkg.caregiver.title': 'Perawatan dengan Caregiver',
      'pkg.caregiver.desc': 'Pendampingan &amp; bantuan aktivitas harian oleh caregiver terlatih.',
      'pkg.caregiver.f1': 'Bantuan kebersihan diri (mandi, toilet)',
      'pkg.caregiver.f2': 'Bantuan makan &amp; minum',
      'pkg.caregiver.f3': 'Pendampingan mobilitas &amp; aktivitas',
      'pkg.caregiver.f4': 'Menemani kontrol &amp; rutinitas harian',
      'pkg.caregiver.f5': 'Pemantauan kondisi umum',
      'pkg.caregiver.f6': 'Dukungan emosional &amp; teman cerita',

      'iv.eyebrow': 'IV Therapy',
      'iv.title': 'Kembali bugar dengan terapi IV kami',
      'iv.sub': 'Terapi IV profesional yang diantar ke hotel, vila, atau rumah Anda — ditangani langsung oleh tim medis kami.',
      'iv.book': 'Pesan Sekarang',
      'iv.hangover.title': 'Hangover Drip',
      'iv.hangover.desc': 'Pulih cepat dari malam yang berat. Kombinasi lengkap cairan, obat anti-mual, vitamin, dan oksigen untuk rehidrasi dan menyegarkan tubuh Anda kembali.',
      'iv.belly.title': 'Bali Belly Care',
      'iv.belly.desc': 'Terkena Bali Belly? Infus khusus diare wisatawan kami merehidrasi tubuh dan meredakan gejala agar Anda cepat pulih dan kembali menikmati liburan.',
      'iv.hydration.title': 'Hydration Package',
      'iv.hydration.desc': 'Kembalikan cairan yang hilang. Pilihan tepat untuk dehidrasi setelah berolahraga, perjalanan jauh, atau seharian di bawah terik matahari Bali.',
      'iv.vitamin.title': 'Vitamin Booster',
      'iv.vitamin.desc': 'Isi ulang energi dari dalam. Dosis vitamin dan nutrisi yang disesuaikan untuk menyegarkan kulit, meningkatkan energi, dan merevitalisasi kondisi tubuh secara menyeluruh.',

      'test.eyebrow': 'Kata Mereka',
      'test.title': 'Dipercaya expat &amp; wisatawan di Bali',
      'test.sub': 'Cerita nyata dari tamu dan warga yang kami rawat di seluruh pulau.',
      'test.1.quote': '"Saya kena Bali Belly parah di hari kedua liburan. Mereka datang ke vila kami di Canggu dalam sejam, pasang infus, dan malamnya saya sudah pulih. Penyelamat."',
      'test.1.role': 'Wisatawan · Canggu',
      'test.2.quote': '"Ayah saya yang lansia berkunjung ke Bali dan butuh perawatan harian. Timnya profesional, tepat waktu, dan berbahasa Inggris dengan baik. Sangat menenangkan."',
      'test.2.role': 'Expat · Sanur',
      'test.3.quote': '"Pesan vitamin drip setelah beberapa malam begadang di Seminyak. Booking lewat WhatsApp gampang, perawatnya ramah, dan besoknya saya merasa luar biasa."',
      'test.3.role': 'Wisatawan · Seminyak',

      'faq.eyebrow': 'FAQ',
      'faq.title': 'Pertanyaan yang sering diajukan',
      'faq.q1': 'Area Bali mana saja yang dilayani?',
      'faq.a1': 'Kami melayani Canggu, Seminyak, Kuta, Ubud, Sanur, Denpasar, dan sebagian besar Bali. Kami datang ke vila, hotel, atau rumah Anda — hubungi kami untuk memastikan lokasi Anda.',
      'faq.q2': 'Bagaimana cara memesan?',
      'faq.a2': 'Cukup klik tombol WhatsApp di halaman ini dan ceritakan kebutuhan Anda. Tim kami akan membantu asesmen dan menjadwalkan tenaga yang sesuai.',
      'faq.q3': 'Apakah tim Anda bersertifikat dan berbahasa Inggris?',
      'faq.a3': 'Ya. Seluruh dokter, perawat, dan terapis kami berlisensi penuh, berpengalaman, dan fasih berbahasa Inggris.',
      'faq.q4': 'Bagaimana sistem pembayarannya?',
      'faq.a4': 'Biaya transparan dan disampaikan di awal. Kami menerima tunai dan transfer bank, dengan opsi kartu sesuai permintaan.',
      'faq.q5': 'Apakah tersedia layanan 24 jam atau darurat?',
      'faq.a5': 'Kami siaga 24/7 untuk kebutuhan perawatan. Untuk kondisi gawat darurat yang mengancam nyawa, segera hubungi layanan darurat 112.',

      'cta.title': 'Butuh dokter, perawat, atau infus IV di Bali?',
      'cta.text': 'Konsultasi awal gratis. Kami datang ke vila, hotel, atau rumah Anda — hari ini juga.',
      'cta.primary': 'Chat via WhatsApp',

      'footer.tagline': 'Layanan home care medis &amp; terapi IV berbahasa Inggris, hadir ke vila, hotel, atau rumah Anda di seluruh Bali.',
      'footer.servicesTitle': 'Layanan',
      'footer.pharmaPhysio': 'Farmasi &amp; Fisioterapi',
      'footer.companyTitle': 'Perusahaan',
      'footer.contactTitle': 'Kontak',
      'footer.area': 'Melayani seluruh Bali',
      'footer.hours': 'Siaga 24 jam, setiap hari',
      'footer.copy': 'MettyCare. Seluruh hak cipta dilindungi.',
      'footer.note': 'Informasi pada halaman ini bukan pengganti nasihat medis darurat. Untuk kondisi gawat darurat, hubungi 112.',
    },
  };

  const TOGGLE_LABEL = {
    en: { open: 'Open menu', close: 'Close menu' },
    id: { open: 'Buka menu', close: 'Tutup menu' },
  };

  let currentLang = 'en';

  /* ---------- Apply language ---------- */
  const metaDesc = document.querySelector('meta[name="description"]');

  function updateWaLinks(lang) {
    document.querySelectorAll('.js-wa').forEach((a) => {
      const custom = a.getAttribute('data-wa-' + lang);
      const msg = custom || WA_MSG[lang] || WA_MSG.en;
      a.href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
    });
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'en';
    currentLang = lang;
    const dict = I18N[lang];

    document.documentElement.lang = lang;
    if (dict.__title) document.title = dict.__title;
    if (metaDesc && dict.__desc) metaDesc.setAttribute('content', dict.__desc);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    updateWaLinks(lang);

    document.querySelectorAll('.lang-switch button').forEach((b) => {
      const active = b.getAttribute('data-lang') === lang;
      b.classList.toggle('active', active);
      b.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try { localStorage.setItem('mc-lang', lang); } catch (e) { /* ignore */ }
  }

  // Init language (saved preference → else English by default)
  let initialLang = 'en';
  try {
    const saved = localStorage.getItem('mc-lang');
    if (saved === 'id' || saved === 'en') initialLang = saved;
  } catch (e) { /* ignore */ }
  applyLang(initialLang);

  document.querySelectorAll('.lang-switch button').forEach((b) => {
    b.addEventListener('click', () => applyLang(b.getAttribute('data-lang')));
  });

  /* ---------- Sticky header shadow on scroll ---------- */
  const header = document.getElementById('header');
  const onScroll = () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile navigation toggle ---------- */
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  const closeNav = () => {
    if (!nav) return;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', TOGGLE_LABEL[currentLang].open);
  };
  const openNav = () => {
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', TOGGLE_LABEL[currentLang].close);
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.contains('open') ? closeNav() : openNav();
    });
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeNav));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) closeNav();
    });
  }

  /* ---------- Scroll reveal ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('in'));
  }

  /* ---------- FAQ: keep only one item open ---------- */
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) faqItems.forEach((other) => { if (other !== item) other.open = false; });
    });
  });

  /* ---------- Footer year ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
