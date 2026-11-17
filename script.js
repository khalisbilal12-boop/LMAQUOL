const pullCord = document.getElementById('pullCord');
const body = document.body;
const cardContainer = document.querySelector('.card-container');
const dashboardContainer = document.getElementById('dashboardContainer');
const cardInner = document.querySelector('.card-inner');

function playIntroMusic() {
  const audio = document.getElementById('lampAudio');
  if (audio) {
    audio.play().catch(error => {
      console.log("المتصفح منع التشغيل", error);
    });
  }
}

function stopIntroMusic() {
  const audio = document.getElementById('lampAudio');
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

if (pullCord) {
  pullCord.addEventListener('click', () => {
    pullCord.classList.add('pulled');
    setTimeout(() => { pullCord.classList.remove('pulled'); }, 200);

    const isOn = body.getAttribute('data-light') === 'on';
    
    if (isOn) {
      body.setAttribute('data-light', 'off');
      stopIntroMusic(); // هنا كتطفى المزيكا فاش تطفا البولة
    } else {
      body.setAttribute('data-light', 'on');
      playIntroMusic(); // هنا كتخدم المزيكا فاش تشعل البولة
    }

    if (isOn) {
      if (cardContainer) cardContainer.classList.remove('active-login');
      if (dashboardContainer) dashboardContainer.style.display = 'none';
    } else {
      if (cardContainer) cardContainer.classList.add('active-login');
    }
  });
}

function flipCard(toSignUp) {
  if (!cardInner) return;
  if (toSignUp) {
    cardInner.classList.add('is-flipped');
  } else {
    cardInner.classList.remove('is-flipped');
  }
}

function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

function handleLogin(event) {
    event.preventDefault();
    if (cardContainer) cardContainer.style.display = 'none';
    if (dashboardContainer) dashboardContainer.style.display = 'flex';
    setTimeout(() => selectTab(0), 50);
    stopIntroMusic(); // زيد هاد السطر هنا باش تحبس المزيكا وقت تسجيل الدخول
}

function handleFormSubmit(event, type) {
    event.preventDefault();
    if (cardContainer) cardContainer.style.display = 'none';
    if (dashboardContainer) dashboardContainer.style.display = 'flex';
    setTimeout(() => selectTab(0), 50);
    stopIntroMusic(); // وزيد حتى هنا باش تضمن بلي المزيكا تحبس فجوج حالات
}

function toggleThreeDotsMenu() {
  const menu = document.getElementById('threeDotsMenuDropdown');
  if (menu) {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
}

function openSettingsModal() {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.style.display = 'flex';
}

function closeSettingsModal() {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.style.display = 'none';
}

const i18n = {
  ar: {
    hintPull: "جر الخيط باش تشعل الضو ✨",
    welcomeTitle: "مرحباً بك في<br>منصة معقول",
    emailLabel: "البريد الإلكتروني",
    passLabel: "كلمة المرور",
    forgotLink: "نسيت كلمة المرور؟",
    loginBtn: "تسجيل الدخول",
    orDivider: "أو المتابعة عبر",
    googleBtn: "قوقل",
    appleBtn: "أبل",
    noAccount: "ليس لديك حساب؟",
    createAccount: "إنشاء حساب جديد",
    signupHeader: "انضم إلى عائلة<br>معقول اليوم",
    confirmPassLabel: "تأكيد كلمة المرور",
    signupBtn: "إنشاء الحساب",
    hasAccount: "لديك حساب بالفعل؟",
    loginSwitch: "تسجيل الدخول",
    systemActive: "النظام نشط",
    techPortalMenu: "بوابة التقنيين",
    settingsMenu: "الإعدادات",
    slogan: "الفحص باين والضمان كاين",
    onlineBadge: "متصل الآن",
    topBadge: "★ رقم 1 في المغرب",
    mainTitle: "فحصها... قبل أن تشتري، وقبل أن تتعطل",
    mainDesc: "فحص دقيق للسيارات المستعملة، إصلاح بضمان رسمي، وإغاثة فورية تصلك أينما كنت في الدار البيضاء.",
    exclusiveTag: "خدمة حصرية في الدار البيضاء",
    repairBtn: "طلب إصلاح سيارة",
    inspectBtn: "فحص سيارة مستعملة",
    stat1: "فنيين معتمدين",
    stat2: "ورشات شريكة",
    stat3: "استجابة الطوارئ",
    servicesTitle: "خدماتنا",
    srv1Title: "فحص سيارة مستعملة",
    srv1Desc: "فحص شامل ومتكامل - ابتداءً من 200 درهم",
    srv2Title: "طلب إصلاح سيارة",
    srv2Desc: "صف العطل وحدد موقعك بدقة - إغاثة سريعة",
    srv3Title: "تتبع طلبك",
    srv3Desc: "تابع حالة طلبك في الوقت الفعلي",
    successTitle: "تم تأكيد الطلب بنجاح",
    successDesc: "تم إرسال الطلب للإدارة والتقنيين.",
    trackingCodeLabel: "رمز التتبع",
    goToTrackBtn: "تتبع هذا الطلب ←",
    newOrderBtn: "طلب جديد",
    bookingHeader: "حجز الخدمة",
    inspectTab: "فحص سيارة مستعملة",
    repairTab: "طلب إصلاح سيارة",
    carInfoTitle: "1. معلومات السيارة",
    brandLabel: "نوع السيارة",
    selectBrand: "اختر الماركة",
    modelLabel: "موديل السيارة",
    yearLabel: "سنة الصنع",
    fuelLabel: "نوع الوقود",
    fuelBenzin: "بنزين",
    fuelDiesel: "ديزل",
    fuelElectric: "إلكتريك",
    fuelHybrid: "هايبريد",
    locTitle: "2. الموقع في الدار البيضاء",
    selectDistrict: "اختر الحي",
    clientInfoTitle: "3. بيانات العميل",
    photoLabel: "صور السيارة المراد فحصها (إلزامي)",
    photoAttached: "تم إرفاق صورة السيارة بنجاح",
    submitInspectBtn: "تأكيد وإرسال طلب الفحص",
    descErrorTitle: "2. وصف العطل",
    submitRepairBtn: "أرسل طلب الإصلاح والإغاثة",
    trackHeaderBadge: "التتبع المباشر",
    trackHeaderTitle: "تتبع حالة طلبك",
    pendingStatus: "قيد الانتظار",
    viewReportBtn: "تم الفحص! عرض التقرير المتكامل ←",
    nameLabelField: "الاسم:",
    phoneLabelField: "الهاتف:",
    locLabelField: "الموقع:",
    carLabelField: "السيارة:",
    techLabelField: "التقني المعين:",
    waitingTech: "في انتظار تعيين تقني...",
    smartReportHeader: "تقرير الفحص الذكي",
    approvedReportsTitle: "تقارير الفحص المعتمدة",
    healthScoreTitle: "نسبة الصحة الإجمالية (Health Score)",
    m1: "الهيكل الخارجي",
    m2: "الديكور الداخلي",
    m3: "المحرك",
    m4: "العجلات",
    m5: "المكابح",
    m6: "الكهرباء",
    techNotesLabel: "ملاحظات التقني:",
    noNotes: "لا توجد ملاحظات إضافية.",
    adminHeader: "قسم الإدارة",
    adminPassPrompt: "المرجو إدخال كلمة السر",
    adminLoginBtn: "دخول الإدارة",
    adminDashboardBadge: "لوحة الإدارة",
    tabOrders: "الطلبات",
    tabTechs: "التقنيون",
    tabShops: "المحلات",
    techCountText: "4 تقنيين معتمدين",
    onlineBadgeText: "متصل",
    offlineBadgeText: "أوفلاين",
    readyStatus: "جاهز للطلبات",
    notConnectedStatus: "غير متصل",
    navHome: "الرئيسية",
    navBook: "حجز",
    navTrack: "التتبع",
    navReport: "التقرير",
    navAdmin: "الإدارة",
    techPortalTitle: "بوابة التقنيين",
    enterCodePrompt: "ادخل الكود الخاص بك",
    enterBtn: "دخول",
    closeBtn: "إغلاق",
    connectedReady: "متصل وجاهز",
    incomingOrders: "الطلبات الواردة المتاحة:",
    settingsTitle: "إعدادات التطبيق",
    langLabel: "لغة التطبيق (Language)",
    themeLabel: "وضع العرض (Theme Mode)",
    darkMode: "مود الليل",
    lightMode: "مود النهار",
    saveCloseBtn: "حفظ وإغلاق"
  },
  fr: {
    hintPull: "Tirez la ficelle pour allumer ✨",
    welcomeTitle: "Bienvenue sur<br>la plateforme Ma39oul",
    emailLabel: "Adresse e-mail",
    passLabel: "Mot de passe",
    forgotLink: "Mot de passe oublié ?",
    loginBtn: "Se connecter",
    orDivider: "Ou continuer avec",
    googleBtn: "Google",
    appleBtn: "Apple",
    noAccount: "Vous n'avez pas de compte ?",
    createAccount: "Créer un compte",
    signupHeader: "Rejoignez la famille<br>Ma39oul aujourd'hui",
    confirmPassLabel: "Confirmer le mot de passe",
    signupBtn: "Créer le compte",
    hasAccount: "Vous avez déjà un compte ?",
    loginSwitch: "Se connecter",
    systemActive: "Système actif",
    techPortalMenu: "Portail Techniciens",
    settingsMenu: "Paramètres",
    slogan: "Inspection claire et garantie assurée",
    onlineBadge: "En ligne",
    topBadge: "★ N°1 au Maroc",
    mainTitle: "Inspectez... avant d'acheter et de tomber en panne",
    mainDesc: "Inspection précise de véhicules d'occasion, réparation officielle et assistance rapide à Casablanca.",
    exclusiveTag: "Service exclusif à Casablanca",
    repairBtn: "Demande de réparation",
    inspectBtn: "Inspection d'occasion",
    stat1: "Techniciens agréés",
    stat2: "Garages partenaires",
    stat3: "Urgence 24/7",
    servicesTitle: "Nos services",
    srv1Title: "Inspection voiture d'occasion",
    srv1Desc: "Inspection complète - à partir de 200 DH",
    srv2Title: "Demande de réparation",
    srv2Desc: "Décrivez la panne et localisez-vous",
    srv3Title: "Suivre votre demande",
    srv3Desc: "Suivez votre commande en temps réel",
    successTitle: "Demande confirmée avec succès",
    successDesc: "La demande a été envoyée à l'administration.",
    trackingCodeLabel: "Code de suivi",
    goToTrackBtn: "Suivre cette demande ←",
    newOrderBtn: "Nouvelle demande",
    bookingHeader: "Réservation",
    inspectTab: "Inspection occasion",
    repairTab: "Réparation",
    carInfoTitle: "1. Informations du véhicule",
    brandLabel: "Marque",
    selectBrand: "Choisir la marque",
    modelLabel: "Modèle",
    yearLabel: "Année",
    fuelLabel: "Type de carburant",
    fuelBenzin: "Essence",
    fuelDiesel: "Diesel",
    fuelElectric: "Électrique",
    fuelHybrid: "Hybride",
    locTitle: "2. Emplacement à Casablanca",
    selectDistrict: "Choisir le quartier",
    clientInfoTitle: "3. Informations client",
    photoLabel: "Photos du véhicule (Obligatoire)",
    photoAttached: "Photo jointe avec succès",
    submitInspectBtn: "Confirmer et envoyer l'inspection",
    descErrorTitle: "2. Description de la panne",
    submitRepairBtn: "Envoyer la demande d'assistance",
    trackHeaderBadge: "Suivi en direct",
    trackHeaderTitle: "Suivi de votre commande",
    pendingStatus: "En attente",
    viewReportBtn: "Inspection terminée ! Voir le rapport ←",
    nameLabelField: "Nom :",
    phoneLabelField: "Téléphone :",
    locLabelField: "Emplacement :",
    carLabelField: "Véhicule :",
    techLabelField: "Technicien assigné :",
    waitingTech: "En attente d'un technicien...",
    smartReportHeader: "Rapport d'inspection intelligent",
    approvedReportsTitle: "Rapports approuvés",
    healthScoreTitle: "Score de santé global",
    m1: "Carrosserie",
    m2: "Intérieur",
    m3: "Moteur",
    m4: "Roues",
    m5: "Freins",
    m6: "Électrique",
    techNotesLabel: "Notes du technicien :",
    noNotes: "Aucune note supplémentaire.",
    adminHeader: "Espace Administration",
    adminPassPrompt: "Veuillez entrer le mot de passe",
    adminLoginBtn: "Connexion Admin",
    adminDashboardBadge: "Tableau de bord Admin",
    tabOrders: "Commandes",
    tabTechs: "Techniciens",
    tabShops: "Garages",
    techCountText: "4 techniciens agréés",
    onlineBadgeText: "En ligne",
    offlineBadgeText: "Hors ligne",
    readyStatus: "Prêt",
    notConnectedStatus: "Déconnecté",
    navHome: "Accueil",
    navBook: "Réserver",
    navTrack: "Suivi",
    navReport: "Rapport",
    navAdmin: "Admin",
    techPortalTitle: "Portail Techniciens",
    enterCodePrompt: "Entrez votre code",
    enterBtn: "Entrer",
    closeBtn: "Fermer",
    connectedReady: "Connecté et prêt",
    incomingOrders: "Commandes disponibles :",
    settingsTitle: "Paramètres de l'application",
    langLabel: "Langue (Language)",
    themeLabel: "Mode d'affichage (Theme)",
    darkMode: "Mode Nuit",
    lightMode: "Mode Jour",
    saveCloseBtn: "Enregistrer et fermer"
  }
};

function setAppLanguage(lang) {
  body.setAttribute('data-lang', lang);
  const root = document.getElementById('htmlRoot');
  if (root) {
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    root.setAttribute('lang', lang);
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });

  const btnAr = document.getElementById('langBtnAr');
  const btnFr = document.getElementById('langBtnFr');
  if (lang === 'ar') {
    if (btnAr) btnAr.className = 'action-btn book-btn';
    if (btnFr) {
      btnFr.className = 'action-btn';
      btnFr.style.background = 'rgba(255,255,255,0.1)';
    }
  } else {
    if (btnFr) btnFr.className = 'action-btn book-btn';
    if (btnAr) {
      btnAr.className = 'action-btn';
      btnAr.style.background = 'rgba(255,255,255,0.1)';
    }
  }
}

function setAppTheme(theme) {
  body.setAttribute('data-theme', theme);
  const btnDark = document.getElementById('themeBtnDark');
  const btnLight = document.getElementById('themeBtnLight');
  if (theme === 'dark') {
    if (btnDark) btnDark.className = 'action-btn book-btn';
    if (btnLight) {
      btnLight.className = 'action-btn';
      btnLight.style.background = 'rgba(255,255,255,0.1)';
    }
  } else {
    if (btnLight) btnLight.className = 'action-btn book-btn';
    if (btnDark) {
      btnDark.className = 'action-btn';
      btnDark.style.background = 'rgba(255,255,255,0.1)';
    }
  }
}

function startBooking() {
  selectTab(1);
  switchServiceMode('inspection');
}

function startRepairFlow() {
  selectTab(1);
  switchServiceMode('repair');
}

let activeServiceMode = 'inspection';
let uploadedCarPhotoObj = null;

function switchServiceMode(mode) {
  activeServiceMode = mode;
  const successScr = document.getElementById('bookingSuccessScreen');
  const formWrap = document.getElementById('bookingFormWrapper');
  if (successScr) successScr.style.display = 'none';
  if (formWrap) formWrap.style.display = 'block';

  const btnInsp = document.getElementById('tabBtnInspection');
  const btnRep = document.getElementById('tabBtnRepair');
  const secInsp = document.getElementById('formInspectionSection');
  const secRep = document.getElementById('formRepairSection');

  if (mode === 'inspection') {
    if (btnInsp) btnInsp.className = 'action-btn book-btn';
    if (btnRep) {
      btnRep.className = 'action-btn';
      btnRep.style.background = 'rgba(255,255,255,0.1)';
    }
    if (secInsp) secInsp.style.display = 'block';
    if (secRep) secRep.style.display = 'none';
  } else {
    if (btnRep) {
      btnRep.className = 'action-btn book-btn';
      btnRep.style.background = '#ef4444';
    }
    if (btnInsp) {
      btnInsp.className = 'action-btn';
      btnInsp.style.background = 'rgba(255,255,255,0.1)';
    }
    if (secInsp) secInsp.style.display = 'none';
    if (secRep) secRep.style.display = 'block';
  }
}

function setFuelType(btnEl, fuelName) {
  if (!btnEl || !btnEl.parentElement) return;
  btnEl.parentElement.querySelectorAll('.fuel-btn').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
}

function previewCarPhoto(event) {
  const file = event.target.files[0];
  if (file) {
    uploadedCarPhotoObj = file;
    const preview = document.getElementById('carPhotoPreview');
    if (preview) preview.style.display = 'block';
  }
}

function getStoredOrders() {
  const data = localStorage.getItem('ma39oul_orders');
  if (data) return JSON.parse(data);
  return [{
    id: 'MA39-9821',
    name: 'بلال العمراني',
    phone: '0632723628',
    car: 'Dacia Logan (2019)',
    district: 'المعاريف، الدار البيضاء',
    serviceType: 'فحص سيارة مستعملة',
    status: 'قيد الانتظار',
    assignedTech: null,
    reportReady: false,
    techNotes: 'فحص ممتاز.'
  }];
}

function saveStoredOrders(orders) {
  localStorage.setItem('ma39oul_orders', JSON.stringify(orders));
}

let currentActiveOrderId = 'MA39-9821';

function completeOrder(mode) {
  if (mode === 'inspection' && !uploadedCarPhotoObj) {
    alert('عذراً، يجب تصوير وإرفاق صورة السيارة أولاً!');
    return;
  }

  let carVal = '', districtVal = '', nameVal = '', phoneVal = '', sType = '';

  if (mode === 'inspection') {
    const brandEl = document.getElementById('inspBrand');
    const modelEl = document.getElementById('inspModel');
    const yearEl = document.getElementById('inspYear');
    const distEl = document.getElementById('inspDistrict');
    const nameEl = document.getElementById('inspName');
    const phoneEl = document.getElementById('inspPhone');

    const brand = brandEl ? brandEl.value : 'Dacia';
    const model = modelEl ? modelEl.value : 'Logan';
    const year = yearEl ? yearEl.value : '2020';
    carVal = `${brand} ${model} (${year})`;
    districtVal = distEl ? distEl.value : 'المعاريف، الدار البيضاء';
    nameVal = nameEl ? nameEl.value : 'زبون كازا';
    phoneVal = phoneEl ? phoneEl.value : '0600000000';
    sType = 'فحص سيارة مستعملة';
  } else {
    const brandEl = document.getElementById('repBrand');
    const modelEl = document.getElementById('repModel');
    const distEl = document.getElementById('repDistrict');
    const nameEl = document.getElementById('repName');
    const phoneEl = document.getElementById('repPhone');

    const brand = brandEl ? brandEl.value : 'Renault';
    const model = modelEl ? modelEl.value : 'Clio';
    carVal = `${brand} ${model}`;
    districtVal = distEl ? distEl.value : 'أنفا، الدار البيضاء';
    nameVal = nameEl ? nameEl.value : 'زبون كازا';
    phoneVal = phoneEl ? phoneEl.value : '0600000000';
    sType = 'طلب إصلاح سيارة';
  }

  const newOrder = {
    id: 'MA39-' + Math.floor(1000 + Math.random() * 9000),
    name: nameVal,
    phone: phoneVal,
    car: carVal,
    district: districtVal,
    serviceType: sType,
    status: 'قيد الانتظار',
    assignedTech: null,
    reportReady: false,
    techNotes: ''
  };

  currentActiveOrderId = newOrder.id;
  let orders = getStoredOrders();
  orders.unshift(newOrder);
  saveStoredOrders(orders);

  const succId = document.getElementById('successOrderId');
  const trackId = document.getElementById('trackingOrderId');
  const trName = document.getElementById('trackName');
  const trPhone = document.getElementById('trackPhoneNum');
  const trDist = document.getElementById('trackDistrict');
  const trCar = document.getElementById('trackCar');

  if (succId) succId.innerText = newOrder.id;
  if (trackId) trackId.innerText = newOrder.id;
  if (trCar) trCar.innerText = newOrder.car;
  if (trDist) trDist.innerText = newOrder.district;
  if (trName) trName.innerText = newOrder.name;
  if (trPhone) trPhone.innerText = newOrder.phone;

  const formWrap = document.getElementById('bookingFormWrapper');
  const succScr = document.getElementById('bookingSuccessScreen');
  if (formWrap) formWrap.style.display = 'none';
  if (succScr) succScr.style.display = 'block';
  renderAdminOrders();
}

function resetBookingFlow() {
  uploadedCarPhotoObj = null;
  const photoPrev = document.getElementById('carPhotoPreview');
  const photoInput = document.getElementById('carPhotoInput');
  const succScr = document.getElementById('bookingSuccessScreen');
  const formWrap = document.getElementById('bookingFormWrapper');

  if (photoPrev) photoPrev.style.display = 'none';
  if (photoInput) photoInput.value = '';
  if (succScr) succScr.style.display = 'none';
  if (formWrap) formWrap.style.display = 'block';
  switchServiceMode('inspection');
}

function verifyAdminPassword() {
  const passEl = document.getElementById('adminPasswordInput');
  if (!passEl) return;
  const pass = passEl.value;
  if (pass === '2027') {
    const lockScr = document.getElementById('adminLockScreen');
    const adminCont = document.getElementById('adminDashboardContent');
    if (lockScr) lockScr.style.display = 'none';
    if (adminCont) adminCont.style.display = 'block';
    renderAdminOrders();
  } else {
    alert('كلمة السر غير صحيحة!');
    passEl.value = '';
  }
}

function renderAdminOrders() {
  const container = document.getElementById('adminOrdersListContainer');
  if (!container) return;
  const orders = getStoredOrders();

  if (orders.length === 0) {
    container.innerHTML = `<div style="padding:15px; text-align:center; color:#94a3b8; font-size:0.75rem;">لا توجد طلبات حالياً.</div>`;
    return;
  }

  let html = '';
  orders.forEach((ord, index) => {
    html += `
      <div class="admin-order-item" style="background:rgba(2,44,34,0.75); border:1px solid rgba(255,255,255,0.15); border-radius:14px; padding:10px; margin-bottom:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="background:rgba(16,185,129,0.2); color:#34d399; font-size:0.68rem; padding:2px 6px; border-radius:8px;">${ord.serviceType}</span>
          <span style="color:#fbbf24; font-weight:700; font-size:0.82rem;">${ord.id}</span>
        </div>
        <div style="font-size:0.74rem; color:#cbd5e1; display:flex; flex-direction:column; gap:2px; margin-bottom:8px;">
          <div>الاسم: <span>${ord.name}</span></div>
          <div>الهاتف: <span>${ord.phone}</span></div>
          <div>السيارة: <span>${ord.car}</span></div>
          <div>الموقع: <span>${ord.district}</span></div>
          <div>الحالة: <span style="color:#fbbf24;">${ord.status}</span></div>
          <div>التقني: <span style="color:#34d399;">${ord.assignedTech || 'لم يُعين بعد'}</span></div>
        </div>

        <label style="font-size:0.72rem; color:#a7f3d0; display:block; margin-bottom:3px;">إرسال الطلب لتقني معتمد:</label>
        <select class="dash-input" style="height:34px; font-size:0.75rem;" onchange="assignTechToOrderIndex(${index}, this.value)">
          <option value="">اختر التقني لإرسال الطلب لبوابته</option>
          <option value="سفيان الفنون" ${ord.assignedTech==='سفيان الفنون'?'selected':''}>سفيان الفنون</option>
          <option value="بلال كاميليو" ${ord.assignedTech==='بلال كاميليو'?'selected':''}>بلال كاميليو</option>
          <option value="حميد الدياغنوستيك" ${ord.assignedTech==='حميد الدياغنوستيك'?'selected':''}>حميد الدياغنوستيك</option>
          <option value="عبد القدوس" ${ord.assignedTech==='عبد القدوس'?'selected':''}>عبد القدوس</option>
        </select>
      </div>
    `;
  });
  container.innerHTML = html;
}

function assignTechToOrderIndex(index, techName) {
  let orders = getStoredOrders();
  if (orders[index]) {
    orders[index].assignedTech = techName;
    orders[index].status = `تم إرساله إلى التقني (${techName})`;
    saveStoredOrders(orders);
    alert(`تم تعيين الطلب بنجاح للتقني: ${techName}!`);
    renderAdminOrders();
  }
}

function openTechPortalModal() {
  const modal = document.getElementById('techPortalModal');
  const loginScr = document.getElementById('techLoginScreen');
  const dashScr = document.getElementById('techDashboardScreen');
  const passInp = document.getElementById('techPassInput');

  if (modal) modal.style.display = 'flex';
  if (loginScr) loginScr.style.display = 'block';
  if (dashScr) dashScr.style.display = 'none';
  if (passInp) passInp.value = '';
}

function closeTechPortalModal() {
  const modal = document.getElementById('techPortalModal');
  if (modal) modal.style.display = 'none';
}

let activeTechLoggedIn = '';

function verifyTechLogin() {
  const passInp = document.getElementById('techPassInput');
  if (!passInp) return;
  const code = passInp.value.trim();
  let techName = '';

  if (code === '111') techName = 'سفيان الفنون';
  else if (code === '222') techName = 'بلال كاميليو';
  else if (code === '333') techName = 'حميد الدياغنوستيك';
  else if (code === '444') techName = 'عبد القدوس';

  if (techName) {
    activeTechLoggedIn = techName;
    const titleEl = document.getElementById('activeTechTitle');
    const loginScr = document.getElementById('techLoginScreen');
    const dashScr = document.getElementById('techDashboardScreen');

    if (titleEl) titleEl.innerText = `التقني: ${techName} (متصل)`;
    if (loginScr) loginScr.style.display = 'none';
    if (dashScr) dashScr.style.display = 'block';
    renderTechOrdersForActiveTech();
  } else {
    alert('كود خاطئ!');
    passInp.value = '';
  }
}

function renderTechOrdersForActiveTech() {
  const container = document.getElementById('techOrdersContainer');
  if (!container) return;
  const orders = getStoredOrders();
  const myAssignedOrders = orders.filter(o => o.assignedTech === activeTechLoggedIn);

  if (myAssignedOrders.length === 0) {
    container.innerHTML = `<div style="padding:15px; text-align:center; color:#94a3b8; font-size:0.75rem;">لا توجد طلبات معينة لك حالياً.</div>`;
    return;
  }

  let html = '';
  myAssignedOrders.forEach((ord) => {
    const step = ord.techStep || 'on_way';

    html += `
      <div style="background:rgba(2,44,34,0.9); border:1px solid #10b981; border-radius:12px; padding:10px; margin-bottom:8px;">
        <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
          <span style="color:#fbbf24; font-weight:700; font-size:0.8rem;">${ord.id}</span>
          <span style="background:rgba(16,185,129,0.2); color:#34d399; font-size:0.62rem; padding:2px 6px; border-radius:6px;">${ord.serviceType}</span>
        </div>
        <div style="font-size:0.72rem; color:#cbd5e1; display:flex; flex-direction:column; gap:2px; margin-bottom:8px;">
          <div><strong>الزبون:</strong> ${ord.name} (${ord.phone})</div>
          <div><strong>السيارة:</strong> ${ord.car}</div>
          <div><strong>الموقع:</strong> ${ord.district}</div>
          <div><strong>الحالة:</strong> <span style="color:#34d399;">${ord.status}</span></div>
        </div>

        <div style="display:flex; flex-direction:column; gap:5px;">
          ${step === 'on_way' ? `
            <button onclick="techStepAction('${ord.id}', 'on_way')" class="action-btn book-btn" style="height:34px; font-size:0.75rem;">أنا في الطريق</button>
          ` : ''}

          ${step === 'inspecting' ? `
            <button onclick="techStepAction('${ord.id}', 'inspecting')" class="action-btn" style="height:34px; font-size:0.75rem; background:#fbbf24; color:#07090e;">جاري الفحص</button>
          ` : ''}

          ${step === 'finished_inspect' ? `
            <button onclick="techStepAction('${ord.id}', 'finish_inspect')" class="action-btn" style="height:34px; font-size:0.75rem; background:#38bdf8; color:#07090e;">إنهاء الفحص</button>
          ` : ''}
        </div>

        <div id="techReportSection_${ord.id}" style="display: ${step === 'report_form' ? 'block' : 'none'}; margin-top:8px; border-top:1px dashed rgba(255,255,255,0.2); padding-top:6px;">
          <h6 style="color:#fbbf24; font-size:0.75rem; margin-bottom:6px;">إعداد التقرير المتكامل:</h6>
          
          <label class="b-label" style="font-size:0.68rem;">الهيكل الخارجي (%)</label>
          <input type="range" id="extBody_${ord.id}" min="0" max="100" value="92" style="width:100%; accent-color:#fbbf24;" />

          <label class="b-label" style="font-size:0.68rem; margin-top:4px;">الديكور الداخلي (%)</label>
          <input type="range" id="intDecor_${ord.id}" min="0" max="100" value="88" style="width:100%; accent-color:#fbbf24;" />

          <label class="b-label" style="font-size:0.68rem; margin-top:4px;">المحرك (%)</label>
          <input type="range" id="eng_${ord.id}" min="0" max="100" value="90" style="width:100%; accent-color:#fbbf24;" />

          <label class="b-label" style="font-size:0.68rem; margin-top:4px;">العجلات (%)</label>
          <input type="range" id="wheels_${ord.id}" min="0" max="100" value="85" style="width:100%; accent-color:#fbbf24;" />

          <label class="b-label" style="font-size:0.68rem; margin-top:4px;">المكابح (%)</label>
          <input type="range" id="brk_${ord.id}" min="0" max="100" value="87" style="width:100%; accent-color:#fbbf24;" />

          <label class="b-label" style="font-size:0.68rem; margin-top:4px;">الكهرباء (%)</label>
          <input type="range" id="elec_${ord.id}" min="0" max="100" value="90" style="width:100%; accent-color:#fbbf24;" />

          <label class="b-label" style="font-size:0.68rem; margin-top:6px;">ملاحظات التقني (الوصف):</label>
          <textarea id="notes_${ord.id}" class="dash-input" placeholder="أدخل ملاحظاتك حول الفحص..." style="height:45px; padding-top:4px; margin-bottom:6px;"></textarea>

          <button onclick="sendFinalTechReport('${ord.id}')" class="action-btn book-btn" style="width:100%; background:#10b981; height:36px; font-size:0.75rem;">حفظ وإرسال التقرير</button>
        </div>

      </div>
    `;
  });
  container.innerHTML = html;
}

function techStepAction(orderId, action) {
  let orders = getStoredOrders();
  let ord = orders.find(o => o.id === orderId);
  if (!ord) return;

  if (action === 'on_way') {
    ord.status = 'أنا في الطريق';
    ord.techStep = 'inspecting';
  } else if (action === 'inspecting') {
    ord.status = 'جاري الفحص';
    ord.techStep = 'finished_inspect';
  } else if (action === 'finish_inspect') {
    ord.status = 'تم الفحص';
    ord.techStep = 'report_form';
    const repBox = document.getElementById('goToReportActionBox');
    if (repBox) repBox.style.display = 'block';
  }

  saveStoredOrders(orders);
  renderTechOrdersForActiveTech();
}

function sendFinalTechReport(orderId) {
  let orders = getStoredOrders();
  let ord = orders.find(o => o.id === orderId);
  if (!ord) return;

  const extB = document.getElementById(`extBody_${orderId}`);
  const intD = document.getElementById(`intDecor_${orderId}`);
  const eng = document.getElementById(`eng_${orderId}`);
  const whl = document.getElementById(`wheels_${orderId}`);
  const brk = document.getElementById(`brk_${orderId}`);
  const elc = document.getElementById(`elec_${orderId}`);
  const notes = document.getElementById(`notes_${orderId}`);

  ord.extBody = extB ? extB.value : '92';
  ord.intDecor = intD ? intD.value : '88';
  ord.engine = eng ? eng.value : '90';
  ord.wheels = whl ? whl.value : '85';
  ord.brakes = brk ? brk.value : '87';
  ord.elec = elc ? elc.value : '90';
  ord.techNotes = notes ? notes.value : 'تم الفحص بنجاح.';
  ord.reportReady = true;
  ord.status = 'تم الفحص - التقرير جاهز';
  ord.techStep = 'done';

  saveStoredOrders(orders);
  alert('تم حفظ وإرسال التقرير المتكامل للزبون بنجاح!');
  closeTechPortalModal();
}

function checkTrackingStatusUI() {
  let orders = getStoredOrders();
  let ord = orders.find(o => o.id === currentActiveOrderId) || orders[0];
  if (!ord) return;

  const techNameEl = document.getElementById('assignedTechName');
  if (techNameEl) techNameEl.innerText = ord.assignedTech || 'في انتظار تعيين تقني...';

  const repBox = document.getElementById('goToReportActionBox');
  if (repBox) {
    if (ord.reportReady) {
      repBox.style.display = 'block';
    } else {
      repBox.style.display = 'none';
    }
  }
}

const meniscusBar = document.getElementById('meniscusBar');
const liquidBead = document.getElementById('liquidBead');
const mTabs = document.querySelectorAll('.m-tab');
const tabPages = document.querySelectorAll('.tab-page');

function selectTab(index) {
  if (index < 0 || index >= mTabs.length) return;

  const targetTab = mTabs[index];
  const beadColor = targetTab.getAttribute('data-color');
  const iconColor = targetTab.getAttribute('data-icon-color');

  if (meniscusBar && liquidBead && targetTab) {
    const barRect = meniscusBar.getBoundingClientRect();
    const tabRect = targetTab.getBoundingClientRect();
    const rightOffset = barRect.right - tabRect.right + (tabRect.width / 2) - (liquidBead.offsetWidth / 2);

    liquidBead.style.transform = `translateX(${rightOffset}px)`;
    liquidBead.style.backgroundColor = beadColor;
  }

  mTabs.forEach((tab, idx) => {
    if (idx === index) {
      tab.classList.add('active');
      tab.style.setProperty('--active-icon-color', iconColor);
      tab.style.setProperty('--active-bead-color', beadColor);
    } else {
      tab.classList.remove('active');
    }
  });

  tabPages.forEach((page, idx) => {
    page.classList.toggle('active', idx === index);
  });

  if (index === 2) {
    checkTrackingStatusUI();
  }
}

mTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    selectTab(index);
    if (index === 4) {
      const lockScr = document.getElementById('adminLockScreen');
      const adminCont = document.getElementById('adminDashboardContent');
      const passInp = document.getElementById('adminPasswordInput');

      if (lockScr) lockScr.style.display = 'block';
      if (adminCont) adminCont.style.display = 'none';
      if (passInp) passInp.value = '';
    }
  });
});

const canvas = document.getElementById('dustCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4 - 0.1;
      this.opacity = Math.random() * 0.6 + 0.1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 215, 130, ${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < 65; i++) particles.push(new Particle());

  function animateDust() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateDust);
  }
  animateDust();
}
function playIntroMusic() {
  const audio = document.getElementById('lampAudio');
  if (audio) {
    audio.currentTime = 0;
    audio.play().catch(error => {
      console.log("المتصفح منع التشغيل التلقائي", error);
    });
  }
}
/// التحكم النهائي في الخيط، تشغيل الموسيقى، والسويتش الاحترافي مع تفعيل الكتابة
const pullCordGroup = document.getElementById("pullCordGroup");
const dynamicCordLine = document.getElementById("dynamicCordLine");
const dynamicCordKnob = document.getElementById("dynamicCordKnob");
const lampWrapperCenter = document.getElementById("lampWrapperCenter");
const lampAudio = document.getElementById("lampAudio");
const cardContainerTarget = document.querySelector(".card-container");

// إعداد الحالة الأولية: إخفاء البطاقة وتجهيزها للتفاعل
if (cardContainerTarget) {
    cardContainerTarget.style.opacity = "0";
    cardContainerTarget.style.display = "none";
    cardContainerTarget.style.transform = "translateY(40px) scale(0.95)";
    cardContainerTarget.style.transition = "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
    cardContainerTarget.style.pointerEvents = "none"; // معطلة في البداية حتى تظهر
    cardContainerTarget.style.zIndex = "99999"; // أولوية قصوى للنقر
}

let isPullingCord = false;
let startMouseY = 0;

if (pullCordGroup) {
    pullCordGroup.addEventListener("mousedown", startCordPull);
    pullCordGroup.addEventListener("touchstart", startCordPull);
}

window.addEventListener("mousemove", cordPullingMove);
window.addEventListener("touchmove", cordPullingMove);

window.addEventListener("mouseup", endCordPull);
window.addEventListener("touchend", endCordPull);

function startCordPull(e) {
    isPullingCord = true;
    startMouseY = e.clientY || (e.touches ? e.touches[0].clientY : 0);
}

function cordPullingMove(e) {
    if (!isPullingCord) return;
    let currentY = e.clientY || (e.touches ? e.touches[0].clientY : 0);
    let deltaY = currentY - startMouseY;

    let pullDistance = Math.min(Math.max(deltaY, 0), 110);
    
    if (dynamicCordLine && dynamicCordKnob) {
        dynamicCordLine.setAttribute("y2", 235 + pullDistance);
        dynamicCordKnob.setAttribute("cy", 240 + pullDistance);
    }
}

function endCordPull(e) {
    if (!isPullingCord) return;
    isPullingCord = false;

    if (dynamicCordLine && dynamicCordKnob) {
        dynamicCordLine.setAttribute("y2", 235);
        dynamicCordKnob.setAttribute("cy", 240);
    }

    // 1. تشغيل الموسيقى
    if (lampAudio) {
        lampAudio.play().catch(err => console.log("Audio play blocked:", err));
    }

    // 2. تلاشي المصباح
    if (lampWrapperCenter) {
        lampWrapperCenter.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        lampWrapperCenter.style.opacity = "0";
        lampWrapperCenter.style.transform = "translateX(-50%) translateY(-30px) scale(0.9)";
    }

    // 3. إظهار بطاقة المعلومات وتفعيل الكتابة فيها
    setTimeout(() => {
        if (lampWrapperCenter) {
            lampWrapperCenter.style.display = "none";
        }
        
        if (cardContainerTarget) {
            cardContainerTarget.style.display = "block";
            void cardContainerTarget.offsetHeight;
            
            cardContainerTarget.style.opacity = "1";
            cardContainerTarget.style.transform = "translateY(0) scale(1)";
            cardContainerTarget.style.pointerEvents = "auto"; // تفعيل الكتابة والنقر فور ظهورها
        }
    }, 400);
}

// دالة إيقاف الموسيقى فور إدخال معلومات تسجيل الدخول بنجاح
function handleLogin(event) {
    if (event) event.preventDefault();
    if (lampAudio) {
        lampAudio.pause();
        lampAudio.currentTime = 0;
    }
}