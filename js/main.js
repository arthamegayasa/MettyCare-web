/* ============================================================
   MettyCare — interactions + bilingual (ID/EN) i18n
   ============================================================ */
(function () {
  'use strict';

  /* ---------- WhatsApp config ---------- */
  const WA_NUMBER = '6285857846808';
  const WA_MSG = {
    id: 'Halo MettyCare, saya ingin berkonsultasi tentang layanan homecare.',
    en: 'Hello MettyCare, I would like to ask about your home care services.',
  };

  /* ---------- Translations ---------- */
  const I18N = {
    id: {
      __title: 'MettyCare — Layanan Homecare Terpadu di Rumah Anda',
      __desc: 'MettyCare menghadirkan perawatan profesional ke rumah Anda: dokter, perawat, ahli gizi, caregiver, farmasi, dan fisioterapi. Tenaga bersertifikat, siaga 24 jam.',

      'nav.services': 'Layanan',
      'nav.why': 'Keunggulan',
      'nav.how': 'Cara Kerja',
      'nav.testimonials': 'Testimoni',
      'nav.faq': 'FAQ',
      'nav.cta': 'Hubungi Kami',

      'hero.eyebrow': 'Layanan Homecare Terpadu',
      'hero.title': 'Perawatan terbaik untuk keluarga, di kenyamanan <span class="text-grad">rumah Anda</span>',
      'hero.lead': 'MettyCare menghadirkan tim medis lengkap langsung ke rumah — dokter, perawat, ahli gizi, caregiver, farmasi, hingga fisioterapi. Profesional, hangat, dan siaga setiap saat.',
      'hero.ctaPrimary': 'Konsultasi via WhatsApp',
      'hero.ctaSecondary': 'Lihat Layanan',
      'hero.trust1': 'Tenaga bersertifikat',
      'hero.trust2': 'Siaga 24 jam',
      'hero.trust3': 'Datang ke rumah',
      'hero.badgeLabel': 'Rating keluarga',
      'hero.chip': 'Tim sedang bertugas',

      'stats.1': 'Keluarga terlayani',
      'stats.2': 'Tenaga medis &amp; caregiver',
      'stats.3': 'Siaga setiap saat',
      'stats.4': 'Rating kepuasan',

      'services.eyebrow': 'Layanan Kami',
      'services.title': 'Satu tim, semua kebutuhan perawatan',
      'services.sub': 'Dari pemeriksaan dokter sampai pendampingan harian — semua tenaga profesional MettyCare datang langsung ke rumah Anda.',
      'service.doctor.title': 'Dokter',
      'service.doctor.text': 'Kunjungan dan konsultasi dokter umum maupun spesialis langsung di rumah, termasuk tindak lanjut pengobatan.',
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
      'services.more': '<strong>&amp; layanan lainnya</strong> — pemeriksaan lab di rumah, penyewaan alat kesehatan, perawatan luka khusus, dan kebutuhan lain sesuai kondisi keluarga Anda.',

      'why.eyebrow': 'Kenapa MettyCare',
      'why.title': 'Perawatan profesional dengan sentuhan yang tulus',
      'why.sub': 'Kami memadukan standar medis yang ketat dengan kehangatan personal, agar keluarga Anda merasa aman dan nyaman di rumah sendiri.',
      'why.float': 'Dirawat seperti<br><strong>keluarga sendiri</strong>',
      'why.f1.title': 'Tenaga profesional bersertifikat',
      'why.f1.text': 'Setiap dokter, perawat, dan terapis terverifikasi lisensi dan pengalamannya.',
      'why.f2.title': 'Perawatan personal di rumah',
      'why.f2.text': 'Rencana perawatan disesuaikan dengan kondisi dan kebutuhan tiap pasien.',
      'why.f3.title': 'Tim multidisiplin lengkap',
      'why.f3.text': 'Dari dokter sampai ahli gizi dan farmasi — terkoordinasi dalam satu layanan.',
      'why.f4.title': 'Harga transparan &amp; fleksibel',
      'why.f4.text': 'Biaya jelas di awal tanpa kejutan, dengan paket yang bisa disesuaikan.',

      'how.eyebrow': 'Cara Kerja',
      'how.title': 'Mulai layanan dalam 4 langkah mudah',
      'how.sub': 'Tanpa ribet. Cukup hubungi kami, sisanya tim MettyCare yang urus.',
      'how.s1.title': 'Hubungi &amp; Konsultasi',
      'how.s1.text': 'Ceritakan kebutuhan keluarga Anda lewat WhatsApp. Konsultasi awal gratis.',
      'how.s2.title': 'Asesmen Kebutuhan',
      'how.s2.text': 'Tim kami menilai kondisi pasien dan menyusun rencana perawatan yang tepat.',
      'how.s3.title': 'Penjadwalan Tenaga',
      'how.s3.text': 'Dokter, perawat, atau caregiver yang sesuai dijadwalkan untuk datang.',
      'how.s4.title': 'Perawatan di Rumah',
      'how.s4.text': 'Layanan dilakukan dengan standar profesional dan dipantau secara berkala.',

      'test.eyebrow': 'Kata Mereka',
      'test.title': 'Dipercaya keluarga Indonesia',
      'test.sub': 'Cerita nyata dari keluarga yang merawat orang tercinta bersama MettyCare.',
      'test.1.quote': '"Perawatnya sabar dan telaten merawat ibu saya yang stroke. Komunikasinya enak, laporannya rutin. Sangat membantu kami sekeluarga."',
      'test.1.role': 'Putri pasien · Denpasar',
      'test.2.quote': '"Ayah butuh fisioterapi rutin pasca operasi. MettyCare datang tepat waktu dan profesional. Pemulihannya jauh lebih cepat dari perkiraan."',
      'test.2.role': 'Anak pasien · Sanur',
      'test.3.quote': '"Praktis banget bisa konsultasi dokter dan tebus obat tanpa keluar rumah. Cocok untuk merawat orang tua yang sulit bepergian."',
      'test.3.role': 'Keluarga pasien · Ubud',

      'faq.eyebrow': 'FAQ',
      'faq.title': 'Pertanyaan yang sering diajukan',
      'faq.q1': 'Area mana saja yang dilayani MettyCare?',
      'faq.a1': 'Saat ini kami melayani Denpasar dan sekitarnya di Bali. Hubungi kami via WhatsApp untuk memastikan ketersediaan layanan di lokasi Anda.',
      'faq.q2': 'Bagaimana cara memesan layanan?',
      'faq.a2': 'Cukup klik tombol WhatsApp di halaman ini dan ceritakan kebutuhan Anda. Tim kami akan membantu asesmen dan menjadwalkan tenaga yang sesuai.',
      'faq.q3': 'Apakah tenaga medisnya bersertifikat?',
      'faq.a3': 'Ya. Seluruh dokter, perawat, ahli gizi, dan terapis kami terverifikasi lisensi dan pengalamannya sebelum bergabung dengan MettyCare.',
      'faq.q4': 'Bagaimana sistem pembayaran dan biayanya?',
      'faq.a4': 'Biaya bersifat transparan dan disampaikan di awal sesuai layanan yang dipilih. Tersedia paket per kunjungan maupun paket perawatan berkala.',
      'faq.q5': 'Apakah tersedia layanan darurat atau 24 jam?',
      'faq.a5': 'Kami siaga 24/7 untuk kebutuhan perawatan. Untuk kondisi gawat darurat yang mengancam nyawa, segera hubungi layanan gawat darurat 119.',

      'cta.title': 'Siap memberikan perawatan terbaik untuk keluarga Anda?',
      'cta.text': 'Konsultasi awal gratis. Tim MettyCare siap membantu hari ini juga.',
      'cta.primary': 'Chat via WhatsApp',

      'footer.tagline': 'Layanan homecare terpadu yang menghadirkan perawatan profesional dan hangat langsung ke rumah Anda.',
      'footer.servicesTitle': 'Layanan',
      'footer.pharmaPhysio': 'Farmasi &amp; Fisioterapi',
      'footer.companyTitle': 'Perusahaan',
      'footer.contactTitle': 'Kontak',
      'footer.hours': 'Siaga 24 jam, setiap hari',
      'footer.copy': 'MettyCare. Seluruh hak cipta dilindungi.',
      'footer.note': 'Informasi pada halaman ini bukan pengganti nasihat medis darurat. Untuk kondisi gawat darurat, hubungi 119.',
    },

    en: {
      __title: 'MettyCare — Complete Home Care Services at Your Doorstep',
      __desc: 'MettyCare brings professional care to your home: doctors, nurses, nutritionists, caregivers, pharmacy, and physiotherapy. Certified staff, available 24/7.',

      'nav.services': 'Services',
      'nav.why': 'Why Us',
      'nav.how': 'How It Works',
      'nav.testimonials': 'Testimonials',
      'nav.faq': 'FAQ',
      'nav.cta': 'Contact Us',

      'hero.eyebrow': 'Complete Home Care Service',
      'hero.title': 'The best care for your family, in the comfort of <span class="text-grad">your own home</span>',
      'hero.lead': 'MettyCare brings a complete medical team right to your home — doctors, nurses, nutritionists, caregivers, pharmacy, and physiotherapy. Professional, warm, and always on standby.',
      'hero.ctaPrimary': 'Consult via WhatsApp',
      'hero.ctaSecondary': 'View Services',
      'hero.trust1': 'Certified staff',
      'hero.trust2': 'Available 24/7',
      'hero.trust3': 'We come to you',
      'hero.badgeLabel': 'Family rating',
      'hero.chip': 'Team on duty',

      'stats.1': 'Families served',
      'stats.2': 'Medical staff &amp; caregivers',
      'stats.3': 'Always on standby',
      'stats.4': 'Satisfaction rating',

      'services.eyebrow': 'Our Services',
      'services.title': 'One team, every care need',
      'services.sub': 'From doctor visits to daily companionship — every MettyCare professional comes straight to your home.',
      'service.doctor.title': 'Doctor',
      'service.doctor.text': 'Home visits and consultations with general practitioners and specialists, including treatment follow-ups.',
      'service.nurse.title': 'Nurse',
      'service.nurse.text': 'Medical and nursing procedures: IV lines, wound care, catheters, injections, and vital-sign monitoring.',
      'service.nutrition.title': 'Nutritionist',
      'service.nutrition.text': 'Nutrition assessments and personalized meal plans for recovery, the elderly, and special conditions.',
      'service.caregiver.title': 'Caregiver',
      'service.caregiver.text': 'Daily assistance for the elderly and patients: personal hygiene, mobility, meals, and emotional support.',
      'service.pharmacy.title': 'Pharmacy',
      'service.pharmacy.text': 'Medication delivery, prescription management, and guidance so therapy stays on track.',
      'service.physio.title': 'Physiotherapy',
      'service.physio.text': 'Recovery therapy after surgery, stroke, and injury to restore mobility and strength.',
      'services.more': '<strong>&amp; more services</strong> — home lab tests, medical equipment rental, specialized wound care, and other needs based on your family’s condition.',

      'why.eyebrow': 'Why MettyCare',
      'why.title': 'Professional care with a genuine personal touch',
      'why.sub': 'We combine strict medical standards with personal warmth, so your family feels safe and comfortable at home.',
      'why.float': 'Cared for like<br><strong>your own family</strong>',
      'why.f1.title': 'Certified professionals',
      'why.f1.text': 'Every doctor, nurse, and therapist is verified for license and experience.',
      'why.f2.title': 'Personalized home care',
      'why.f2.text': 'Care plans tailored to each patient’s condition and needs.',
      'why.f3.title': 'Complete multidisciplinary team',
      'why.f3.text': 'From doctors to nutritionists and pharmacy — coordinated in one service.',
      'why.f4.title': 'Transparent &amp; flexible pricing',
      'why.f4.text': 'Clear costs upfront with no surprises, and packages you can adjust.',

      'how.eyebrow': 'How It Works',
      'how.title': 'Get started in 4 easy steps',
      'how.sub': 'No hassle. Just reach out — the MettyCare team handles the rest.',
      'how.s1.title': 'Contact &amp; Consult',
      'how.s1.text': 'Tell us what your family needs via WhatsApp. The first consultation is free.',
      'how.s2.title': 'Needs Assessment',
      'how.s2.text': 'Our team assesses the patient’s condition and builds the right care plan.',
      'how.s3.title': 'Staff Scheduling',
      'how.s3.text': 'The right doctor, nurse, or caregiver is scheduled to visit.',
      'how.s4.title': 'Care at Home',
      'how.s4.text': 'Care is delivered to professional standards and monitored regularly.',

      'test.eyebrow': 'What They Say',
      'test.title': 'Trusted by Indonesian families',
      'test.sub': 'Real stories from families caring for their loved ones with MettyCare.',
      'test.1.quote': '"The nurse was patient and attentive caring for my mother after her stroke. Great communication and regular updates. It helped our whole family so much."',
      'test.1.role': 'Patient’s daughter · Denpasar',
      'test.2.quote': '"Dad needed regular physiotherapy after surgery. MettyCare arrived on time and professional. His recovery was far faster than we expected."',
      'test.2.role': 'Patient’s son · Sanur',
      'test.3.quote': '"So practical to consult a doctor and get medicine without leaving home. Perfect for caring for elderly parents who find it hard to travel."',
      'test.3.role': 'Patient’s family · Ubud',

      'faq.eyebrow': 'FAQ',
      'faq.title': 'Frequently asked questions',
      'faq.q1': 'Which areas does MettyCare serve?',
      'faq.a1': 'We currently serve Denpasar and the surrounding areas in Bali. Contact us via WhatsApp to confirm availability in your location.',
      'faq.q2': 'How do I book a service?',
      'faq.a2': 'Just tap the WhatsApp button on this page and tell us what you need. Our team will help with the assessment and schedule the right staff.',
      'faq.q3': 'Are your medical staff certified?',
      'faq.a3': 'Yes. All our doctors, nurses, nutritionists, and therapists are verified for license and experience before joining MettyCare.',
      'faq.q4': 'How do payment and pricing work?',
      'faq.a4': 'Costs are transparent and shared upfront based on the service you choose. Per-visit and recurring care packages are available.',
      'faq.q5': 'Is there an emergency or 24-hour service?',
      'faq.a5': 'We are on standby 24/7 for care needs. For life-threatening emergencies, please call the emergency line 119 immediately.',

      'cta.title': 'Ready to give your family the best care?',
      'cta.text': 'Free initial consultation. The MettyCare team is ready to help today.',
      'cta.primary': 'Chat via WhatsApp',

      'footer.tagline': 'Integrated home care services bringing professional, warm care straight to your home.',
      'footer.servicesTitle': 'Services',
      'footer.pharmaPhysio': 'Pharmacy &amp; Physiotherapy',
      'footer.companyTitle': 'Company',
      'footer.contactTitle': 'Contact',
      'footer.hours': 'Available 24 hours, every day',
      'footer.copy': 'MettyCare. All rights reserved.',
      'footer.note': 'Information on this page is not a substitute for emergency medical advice. In an emergency, call 119.',
    },
  };

  const TOGGLE_LABEL = {
    id: { open: 'Buka menu', close: 'Tutup menu' },
    en: { open: 'Open menu', close: 'Close menu' },
  };

  let currentLang = 'id';

  /* ---------- Apply language ---------- */
  const metaDesc = document.querySelector('meta[name="description"]');

  function updateWaLinks(lang) {
    const url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(WA_MSG[lang] || WA_MSG.id);
    document.querySelectorAll('.js-wa').forEach((a) => { a.href = url; });
  }

  function applyLang(lang) {
    if (!I18N[lang]) lang = 'id';
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

  // Init language (saved preference → else Indonesian)
  let initialLang = 'id';
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
