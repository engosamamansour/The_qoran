
        // Surah data
        const ALL_SURAHS = [
            {id: 1, name: "الفاتحة", name_en: "Al-Fatiha", revelation_type: "Meccan", verses_count: 7},
            {id: 2, name: "البقرة", name_en: "Al-Baqarah", revelation_type: "Medinan", verses_count: 286},
            {id: 3, name: "آل عمران", name_en: "Aal-Imran", revelation_type: "Medinan", verses_count: 200},
            {id: 4, name: "النساء", name_en: "An-Nisa", revelation_type: "Medinan", verses_count: 176},
            {id: 5, name: "المائدة", name_en: "Al-Ma'idah", revelation_type: "Medinan", verses_count: 120},
            {id: 6, name: "الأنعام", name_en: "Al-An'am", revelation_type: "Meccan", verses_count: 165},
            {id: 7, name: "الأعراف", name_en: "Al-A'raf", revelation_type: "Meccan", verses_count: 206},
            {id: 8, name: "الأنفال", name_en: "Al-Anfal", revelation_type: "Medinan", verses_count: 75},
            {id: 9, name: "التوبة", name_en: "At-Tawbah", revelation_type: "Medinan", verses_count: 129},
            {id: 10, name: "يونس", name_en: "Yunus", revelation_type: "Meccan", verses_count: 109},
            {id: 11, name: "هود", name_en: "Hud", revelation_type: "Meccan", verses_count: 123},
            {id: 12, name: "يوسف", name_en: "Yusuf", revelation_type: "Meccan", verses_count: 111},
            {id: 13, name: "الرعد", name_en: "Ar-Ra'd", revelation_type: "Medinan", verses_count: 43},
            {id: 14, name: "ابراهيم", name_en: "Ibrahim", revelation_type: "Meccan", verses_count: 52},
            {id: 15, name: "الحجر", name_en: "Al-Hijr", revelation_type: "Meccan", verses_count: 99},
            {id: 16, name: "النحل", name_en: "An-Nahl", revelation_type: "Meccan", verses_count: 128},
            {id: 17, name: "الإسراء", name_en: "Al-Isra", revelation_type: "Meccan", verses_count: 111},
            {id: 18, name: "الكهف", name_en: "Al-Kahf", revelation_type: "Meccan", verses_count: 110},
            {id: 19, name: "مريم", name_en: "Maryam", revelation_type: "Meccan", verses_count: 98},
            {id: 20, name: "طه", name_en: "Ta-Ha", revelation_type: "Meccan", verses_count: 135},
            {id: 21, name: "الأنبياء", name_en: "Al-Anbiya", revelation_type: "Meccan", verses_count: 112},
            {id: 22, name: "الحج", name_en: "Al-Hajj", revelation_type: "Medinan", verses_count: 78},
            {id: 23, name: "المؤمنون", name_en: "Al-Mu'minoon", revelation_type: "Meccan", verses_count: 118},
            {id: 24, name: "النور", name_en: "An-Noor", revelation_type: "Medinan", verses_count: 64},
            {id: 25, name: "الفرقان", name_en: "Al-Furqan", revelation_type: "Meccan", verses_count: 77},
            {id: 26, name: "الشعراء", name_en: "Ash-Shu'ara", revelation_type: "Meccan", verses_count: 227},
            {id: 27, name: "النمل", name_en: "An-Naml", revelation_type: "Meccan", verses_count: 93},
            {id: 28, name: "القصص", name_en: "Al-Qasas", revelation_type: "Meccan", verses_count: 88},
            {id: 29, name: "العنكبوت", name_en: "Al-'Ankaboot", revelation_type: "Meccan", verses_count: 69},
            {id: 30, name: "الروم", name_en: "Ar-Room", revelation_type: "Meccan", verses_count: 60},
            {id: 31, name: "لقمان", name_en: "Luqman", revelation_type: "Meccan", verses_count: 34},
            {id: 32, name: "السجدة", name_en: "As-Sajdah", revelation_type: "Meccan", verses_count: 30},
            {id: 33, name: "الأحزاب", name_en: "Al-Ahzab", revelation_type: "Medinan", verses_count: 73},
            {id: 34, name: "سبأ", name_en: "Saba", revelation_type: "Meccan", verses_count: 54},
            {id: 35, name: "فاطر", name_en: "Fatir", revelation_type: "Meccan", verses_count: 45},
            {id: 36, name: "يس", name_en: "Ya-Sin", revelation_type: "Meccan", verses_count: 83},
            {id: 37, name: "الصافات", name_en: "As-Saaffat", revelation_type: "Meccan", verses_count: 182},
            {id: 38, name: "ص", name_en: "Sad", revelation_type: "Meccan", verses_count: 88},
            {id: 39, name: "الزمر", name_en: "Az-Zumar", revelation_type: "Meccan", verses_count: 75},
            {id: 40, name: "غافر", name_en: "Ghafir", revelation_type: "Meccan", verses_count: 85},
            {id: 41, name: "فصّلت", name_en: "Fussilat", revelation_type: "Meccan", verses_count: 54},
            {id: 42, name: "الشورى", name_en: "Ash-Shura", revelation_type: "Meccan", verses_count: 53},
            {id: 43, name: "الزخرف", name_en: "Az-Zukhruf", revelation_type: "Meccan", verses_count: 89},
            {id: 44, name: "الدخان", name_en: "Ad-Dukhan", revelation_type: "Meccan", verses_count: 59},
            {id: 45, name: "الجاثية", name_en: "Al-Jathiya", revelation_type: "Meccan", verses_count: 37},
            {id: 46, name: "الأحقاف", name_en: "Al-Ahqaf", revelation_type: "Meccan", verses_count: 35},
            {id: 47, name: "محمد", name_en: "Muhammad", revelation_type: "Medinan", verses_count: 38},
            {id: 48, name: "الفتح", name_en: "Al-Fath", revelation_type: "Medinan", verses_count: 29},
            {id: 49, name: "الحجرات", name_en: "Al-Hujurat", revelation_type: "Medinan", verses_count: 18},
            {id: 50, name: "ق", name_en: "Qaf", revelation_type: "Meccan", verses_count: 45},
            {id: 51, name: "الذاريات", name_en: "Adh-Dhariyat", revelation_type: "Meccan", verses_count: 60},
            {id: 52, name: "الطور", name_en: "At-Tur", revelation_type: "Meccan", verses_count: 49},
            {id: 53, name: "النجم", name_en: "An-Najm", revelation_type: "Meccan", verses_count: 62},
            {id: 54, name: "القمر", name_en: "Al-Qamar", revelation_type: "Meccan", verses_count: 55},
            {id: 55, name: "الرحمن", name_en: "Ar-Rahman", revelation_type: "Medinan", verses_count: 78},
            {id: 56, name: "الواقعة", name_en: "Al-Waqi'ah", revelation_type: "Meccan", verses_count: 96},
            {id: 57, name: "الحديد", name_en: "Al-Hadid", revelation_type: "Medinan", verses_count: 29},
            {id: 58, name: "المجادلة", name_en: "Al-Mujadilah", revelation_type: "Medinan", verses_count: 22},
            {id: 59, name: "الحشر", name_en: "Al-Hashr", revelation_type: "Medinan", verses_count: 24},
            {id: 60, name: "الممتحنة", name_en: "Al-Mumtahanah", revelation_type: "Medinan", verses_count: 13},
            {id: 61, name: "الصف", name_en: "As-Saff", revelation_type: "Medinan", verses_count: 14},
            {id: 62, name: "الجمعة", name_en: "Al-Jumu'ah", revelation_type: "Medinan", verses_count: 11},
            {id: 63, name: "المنافقون", name_en: "Al-Munafiqoon", revelation_type: "Medinan", verses_count: 11},
            {id: 64, name: "التغابن", name_en: "At-Taghabun", revelation_type: "Medinan", verses_count: 18},
            {id: 65, name: "الطلاق", name_en: "At-Talaq", revelation_type: "Medinan", verses_count: 12},
            {id: 66, name: "التحريم", name_en: "At-Tahrim", revelation_type: "Medinan", verses_count: 12},
            {id: 67, name: "الملك", name_en: "Al-Mulk", revelation_type: "Meccan", verses_count: 30},
            {id: 68, name: "القلم", name_en: "Al-Qalam", revelation_type: "Meccan", verses_count: 52},
            {id: 69, name: "الحاقة", name_en: "Al-Haqqah", revelation_type: "Meccan", verses_count: 52},
            {id: 70, name: "المعارج", name_en: "Al-Ma'arij", revelation_type: "Meccan", verses_count: 44},
            {id: 71, name: "نوح", name_en: "Nooh", revelation_type: "Meccan", verses_count: 28},
            {id: 72, name: "الجن", name_en: "Al-Jinn", revelation_type: "Meccan", verses_count: 28},
            {id: 73, name: "المزمل", name_en: "Al-Muzzammil", revelation_type: "Meccan", verses_count: 20},
            {id: 74, name: "المدثر", name_en: "Al-Muddaththir", revelation_type: "Meccan", verses_count: 56},
            {id: 75, name: "القيامة", name_en: "Al-Qiyamah", revelation_type: "Meccan", verses_count: 40},
            {id: 76, name: "الانسان", name_en: "Al-Insan", revelation_type: "Medinan", verses_count: 31},
            {id: 77, name: "المرسلات", name_en: "Al-Mursalat", revelation_type: "Meccan", verses_count: 50},
            {id: 78, name: "النبأ", name_en: "An-Naba", revelation_type: "Meccan", verses_count: 40},
            {id: 79, name: "النازعات", name_en: "An-Nazi'at", revelation_type: "Meccan", verses_count: 46},
            {id: 80, name: "عبس", name_en: "'Abasa", revelation_type: "Meccan", verses_count: 42},
            {id: 81, name: "التكوير", name_en: "At-Takwir", revelation_type: "Meccan", verses_count: 29},
            {id: 82, name: "الإنفطار", name_en: "Al-Infitar", revelation_type: "Meccan", verses_count: 19},
            {id: 83, name: "المطففين", name_en: "Al-Mutaffifin", revelation_type: "Meccan", verses_count: 36},
            {id: 84, name: "الإنشقاق", name_en: "Al-Inshiqaq", revelation_type: "Meccan", verses_count: 25},
            {id: 85, name: "البروج", name_en: "Al-Buruj", revelation_type: "Meccan", verses_count: 22},
            {id: 86, name: "الطارق", name_en: "At-Tariq", revelation_type: "Meccan", verses_count: 17},
            {id: 87, name: "الآية", name_en: "Al-A'la", revelation_type: "Meccan", verses_count: 19},
            {id: 88, name: "الغاشية", name_en: "Al-Ghashiyah", revelation_type: "Meccan", verses_count: 26},
            {id: 89, name: "الفجر", name_en: "Al-Fajr", revelation_type: "Meccan", verses_count: 30},
            {id: 90, name: "البلد", name_en: "Al-Balad", revelation_type: "Meccan", verses_count: 20},
            {id: 91, name: "الشمس", name_en: "Ash-Shams", revelation_type: "Meccan", verses_count: 15},
            {id: 92, name: "الليل", name_en: "Al-Layl", revelation_type: "Meccan", verses_count: 21},
            {id: 93, name: "الضحى", name_en: "Ad-Duha", revelation_type: "Meccan", verses_count: 11},
            {id: 94, name: "الشرح", name_en: "Ash-Sharh", revelation_type: "Meccan", verses_count: 8},
            {id: 95, name: "التين", name_en: "At-Tin", revelation_type: "Meccan", verses_count: 8},
            {id: 96, name: "العلق", name_en: "Al-'Alaq", revelation_type: "Meccan", verses_count: 19},
            {id: 97, name: "القدر", name_en: "Al-Qadr", revelation_type: "Meccan", verses_count: 5},
            {id: 98, name: "البينة", name_en: "Al-Bayyinah", revelation_type: "Medinan", verses_count: 8},
            {id: 99, name: "الزلزلة", name_en: "Az-Zalzalah", revelation_type: "Medinan", verses_count: 8},
            {id: 100, name: "العاديات", name_en: "Al-'Adiyat", revelation_type: "Meccan", verses_count: 11},
            {id: 101, name: "القارعة", name_en: "Al-Qari'ah", revelation_type: "Meccan", verses_count: 11},
            {id: 102, name: "التكاثر", name_en: "At-Takathur", revelation_type: "Meccan", verses_count: 8},
            {id: 103, name: "العصر", name_en: "Al-'Asr", revelation_type: "Meccan", verses_count: 3},
            {id: 104, name: "الهمزة", name_en: "Al-Humazah", revelation_type: "Meccan", verses_count: 9},
            {id: 105, name: "الفيل", name_en: "Al-Fil", revelation_type: "Meccan", verses_count: 5},
            {id: 106, name: "قريش", name_en: "Quraysh", revelation_type: "Meccan", verses_count: 4},
            {id: 107, name: "الماعون", name_en: "Al-Ma'un", revelation_type: "Meccan", verses_count: 7},
            {id: 108, name: "الكوثر", name_en: "Al-Kawthar", revelation_type: "Meccan", verses_count: 3},
            {id: 109, name: "الكافرون", name_en: "Al-Kafiroon", revelation_type: "Meccan", verses_count: 6},
            {id: 110, name: "النصر", name_en: "An-Nasr", revelation_type: "Medinan", verses_count: 3},
            {id: 111, name: "المسد", name_en: "Al-Masad", revelation_type: "Meccan", verses_count: 5},
            {id: 112, name: "الإخلاص", name_en: "Al-Ikhlas", revelation_type: "Meccan", verses_count: 4},
            {id: 113, name: "الفلق", name_en: "Al-Falaq", revelation_type: "Meccan", verses_count: 5},
            {id: 114, name: "الناس", name_en: "An-Nas", revelation_type: "Meccan", verses_count: 6}
        ];

        // Main constants
        const API_BASE = 'https://mp3quran.net/api/v3';
        let selectedLanguage = 'ar'; // Default to Arabic
        let currentAudio = null;
        let currentSurahNumber = null;

        // Language-specific text
        const languageText = {
            ar: {
                siteTitle: "القرآن الكريم",
                searchSurahPlaceholder: "ابحث...",
                chooseReciterLabel: "اختر القارئ",
                noSurahsAvailable: "لا توجد سور متاحة",
                noRecitersAvailable: "لا توجد قراء متاحين",
                currentSurah: "لم يتم اختيار سورة",
                currentReciter: "لم يتم اختيار قارئ",
                playButton: "استمع",
                downloadButton: "تحميل",
                footerText1: "حقوق النشر محفوظة للمطور محمد جواد",
                footerText2: "مصنوع ب ❤",
                searchType: {
                    surah: "سورة",
                    reciter: "قارئ"
                },
                totalSurahs: "إجمالي السور",
                quickJump: "التنقل السريع",
                verses: "آيات"
            },
            en: {
                siteTitle: "The Holy Quran",
                searchSurahPlaceholder: "Search...",
                chooseReciterLabel: "Choose a reciter",
                noSurahsAvailable: "No surahs available",
                noRecitersAvailable: "No reciters available",
                currentSurah: "No surah selected",
                currentReciter: "No reciter selected",
                playButton: "Listen",
                downloadButton: "Download",
                footerText1: "Copyrights Reserved to the Creator Muhammad Gawad",
                footerText2: "Made with ❤",
                searchType: {
                    surah: "Surah",
                    reciter: "Reciter"
                },
                totalSurahs: "Total Surahs",
                quickJump: "Quick Jump",
                verses: "Verses"
            },
            ur: {
                siteTitle: "قرآن پاک",
                searchSurahPlaceholder: "تلاش کریں...",
                chooseReciterLabel: "قاری منتخب کریں",
                noSurahsAvailable: "کوئی سورت دستیاب نہیں",
                noRecitersAvailable: "کوئی قاری دستیاب نہیں",
                currentSurah: "کوئی سورت منتخب نہیں",
                currentReciter: "کوئی قاری منتخب نہیں",
                playButton: "سنو",
                downloadButton: "ڈاؤن لوڈ",
                footerText1: "حقوق اشاعت محمد جواد کے لیے محفوظ ہیں",
                footerText2: "❤ کے ساتھ بنایا گیا",
                searchType: {
                    surah: "سورت",
                    reciter: "قاری"
                },
                totalSurahs: "کل سورتیں",
                quickJump: "فوری جمپ",
                verses: "آیات"
            },
            fr: {
                siteTitle: "Le Saint Coran",
                searchSurahPlaceholder: "Rechercher...",
                chooseReciterLabel: "Choisissez un récitateur",
                noSurahsAvailable: "Aucune sourate disponible",
                noRecitersAvailable: "Aucun récitateur disponible",
                currentSurah: "Aucune sourate sélectionnée",
                currentReciter: "Aucun récitateur sélectionné",
                playButton: "Écouter",
                downloadButton: "Télécharger",
                footerText1: "Droits d'auteur réservés au créateur Muhammad Gawad",
                footerText2: "Fait avec ❤",
                searchType: {
                    surah: "Sourate",
                    reciter: "Récitateur"
                },
                totalSurahs: "Total des Sourates",
                quickJump: "Saut Rapide",
                verses: "Versets"
            }
        };

        // Extract server and path from URL
        function parseServerUrl(url) {
            try {
                // Remove trailing slashes and spaces
                url = url.trim().replace(/\/+$/, '');
                
                // Split the URL into parts
                const urlObj = new URL(url);
                const pathParts = urlObj.pathname.split('/').filter(Boolean);
                
                // Get the base server URL
                const baseServer = urlObj.origin + '/';
                
                // Get the reciter directory (last part of the path)
                const reciterDir = pathParts[pathParts.length - 1];
                
                console.log('Parsed URL:', {
                    original: url,
                    baseServer,
                    reciterDir,
                    pathParts
                });
                
                return {
                    baseServer,
                    reciterDir,
                    fullPath: pathParts.join('/')
                };
            } catch (e) {
                console.error('Error parsing URL:', e);
                return null;
            }
        }

        // Dark mode handling
        function initDarkMode() {
            const isDarkMode = localStorage.getItem('darkMode') === 'dark' || 
                (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
            
            if (isDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }

        function setupDarkMode() {
            initDarkMode();
            
            document.getElementById('darkModeToggle').addEventListener('click', () => {
                document.documentElement.classList.toggle('dark');
                localStorage.setItem('darkMode', 
                    document.documentElement.classList.contains('dark') ? 'dark' : 'light');
            });
        }

        // Loading indicator
        function toggleLoading(show) {
            document.getElementById('loading').style.display = show ? 'flex' : 'none';
        }

        // API connection test
        async function testAPIConnection() {
            try {
                const response = await fetch(`${API_BASE}/suwar`);
                if (!response.ok) {
                    throw new Error(`API test failed: ${response.status}`);
                }
                console.log('API connection successful');
            } catch (error) {
                console.error('API connection failed:', error);
                alert('Failed to connect to the API. Please check your internet connection.');
            }
        }

        // Fetch reciters
        async function fetchReciters() {
            try {
                console.log('Fetching reciters from:', `${API_BASE}/reciters`);
                const response = await fetch(`${API_BASE}/reciters`);
                const data = await response.json();
                console.log('Received reciters data:', data);

                if (!data.reciters) {
                    throw new Error('No reciters data available');
                }

                const reciterSelect = document.getElementById('reciterSelect');
                reciterSelect.innerHTML = `<option value="">${languageText[selectedLanguage].chooseReciterLabel}</option>`;

                data.reciters.forEach((reciter, index) => {
                    const option = document.createElement('option');
                    
                    // Get the most suitable moshaf
                    const moshaf = reciter.moshaf && reciter.moshaf.length > 0 ? reciter.moshaf[0] : null;
                    if (!moshaf) return; // Skip if no moshaf available
                    
                    const reciterInfo = {
                        id: reciter.id,
                        name: reciter.name,
                        server: moshaf.server,
                        surahList: moshaf.surah_list,
                        quality: moshaf.quality,
                        mediaType: moshaf.media_type,
                        rewaya: moshaf.rewaya,
                        count: moshaf.count
                    };
                    
                    console.log('Reciter info for', reciter.name, ':', reciterInfo);
                    option.value = JSON.stringify(reciterInfo);
                    
                    // Get the appropriate name based on selected language
                    let reciterName = reciter.name;
                    switch(selectedLanguage) {
                        case 'en':
                            reciterName = reciter.translated_name?.name || reciter.name;
                            break;
                        case 'ur':
                            reciterName = reciter.translated_name?.name || reciter.name;
                            break;
                        case 'fr':
                            reciterName = reciter.translated_name?.name || reciter.name;
                            break;
                    }
                    
                    option.textContent = reciterName;
                    option.className = 'fade-in';
                    option.style.animationDelay = `${index * 30}ms`;
                    reciterSelect.appendChild(option);
                });

                // Add animation to the select element
                reciterSelect.classList.add('scale-in');

            } catch (error) {
                console.error('Error fetching reciters:', error);
                const reciterSelect = document.getElementById('reciterSelect');
                reciterSelect.innerHTML = `<option value="">${languageText[selectedLanguage].noRecitersAvailable}</option>`;
            }
        }

        // Try different URL patterns for the audio file
        async function tryAudioUrls(reciterInfo, paddedSurah) {
            const surahNumber = parseInt(paddedSurah, 10);
            console.log('Trying to find audio URL for surah:', surahNumber);
            console.log('Reciter info:', reciterInfo);
            
            if (!reciterInfo.server) {
                throw new Error('معلومات السيرفر غير متوفرة');
            }

            // Ensure the server URL is properly formatted
            let serverUrl = reciterInfo.server;
            if (!serverUrl.startsWith('http')) {
                serverUrl = 'https://' + serverUrl;
            }
            if (!serverUrl.endsWith('/')) {
                serverUrl += '/';
            }

            const urlPatterns = [
                // Standard format with padded number
                `${serverUrl}${paddedSurah}.mp3`,
                // Try with rewaya if available
                ...(reciterInfo.rewaya ? [`${serverUrl}${reciterInfo.rewaya}/${paddedSurah}.mp3`] : []),
                // Try without padding
                `${serverUrl}${surahNumber}.mp3`,
                // Try with leading zeros
                `${serverUrl}00${surahNumber}.mp3`,
                // Try in numbered directory
                `${serverUrl}${paddedSurah}/${paddedSurah}.mp3`
            ].filter(url => url.startsWith('http')); // Ensure all URLs are valid

            console.log('Trying URL patterns:', urlPatterns);

            for (const url of urlPatterns) {
                try {
                    console.log('Testing URL:', url);
                    const response = await fetch(url, { method: 'HEAD' });
                    if (response.ok) {
                        console.log('Found working URL:', url);
                        return url;
                    }
                    console.log('URL not working:', url, response.status);
                } catch (error) {
                    console.warn(`Failed to access URL ${url}:`, error);
                }
            }
            
            throw new Error('الملف الصوتي غير متوفر لهذه السورة');
        }

        // Play surah
        async function playSurah(surahNumber) {
            const reciterSelect = document.getElementById('reciterSelect');
            if (!reciterSelect.value) {
                alert('الرجاء اختيار القارئ أولاً');
                return;
            }

            try {
                toggleLoading(true);
                console.log(`Starting to play surah ${surahNumber}`);
                
                const reciterInfo = JSON.parse(reciterSelect.value);
                console.log('Reciter info:', reciterInfo);
                
                // Validate reciter info
                if (!reciterInfo.server) {
                    console.error('Invalid reciter info - missing server:', reciterInfo);
                    throw new Error('معلومات القارئ غير صحيحة');
                }

                // Validate surah number
                if (surahNumber < 1 || surahNumber > 114) {
                    throw new Error('رقم السورة غير صحيح');
                }

                // Pad surah number with zeros
                const paddedSurah = surahNumber.toString().padStart(3, '0');
                
                // Construct audio URL
                const audioUrl = await tryAudioUrls(reciterInfo, paddedSurah);
                
                if (!audioUrl) {
                    throw new Error('لم يتم العثور على الملف الصوتي');
                }

                console.log('Using audio URL:', audioUrl);
                
                // Clean up existing audio
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.src = '';
                    currentAudio = null;
                }

                // Create and setup new audio
                currentAudio = new Audio(audioUrl);
                currentAudio.preload = 'auto';
                
                // Setup all audio event listeners
                setupAudioControls();
                
                // Update UI
                document.getElementById('currentSurah').textContent = `سورة ${surahNumber}`;
                document.getElementById('currentReciter').textContent = reciterInfo.name;
                
                document.getElementById('playButton').disabled = false;
                document.getElementById('downloadButton').disabled = false;
                
                // Start playback
                currentSurahNumber = surahNumber;
                await currentAudio.play();
                updatePlayButton();
                
            } catch (error) {
                console.error('Error playing surah:', error);
                alert('خطأ في تشغيل السورة: ' + error.message);
                
                // Reset UI state on error
                if (currentAudio) {
                    currentAudio.src = '';
                    currentAudio = null;
                }
                document.getElementById('playButton').disabled = true;
                document.getElementById('downloadButton').disabled = true;
                document.getElementById('currentSurah').textContent = languageText[selectedLanguage].currentSurah;
                document.getElementById('currentReciter').textContent = languageText[selectedLanguage].currentReciter;
            } finally {
                toggleLoading(false);
            }
        }

        // Audio controls setup
        function setupAudioControls() {
            const playButton = document.getElementById('playButton');
            const volumeControl = document.getElementById('volumeControl');
            const progressContainer = document.getElementById('progressContainer');
            const downloadButton = document.getElementById('downloadButton');

            // Remove existing listeners to prevent duplicates
            playButton.removeEventListener('click', togglePlay);
            volumeControl.removeEventListener('input', handleVolumeChange);
            progressContainer.removeEventListener('click', handleProgressClick);
            downloadButton.removeEventListener('click', downloadCurrentSurah);

            // Add new listeners
            playButton.addEventListener('click', togglePlay);
            volumeControl.addEventListener('input', handleVolumeChange);
            progressContainer.addEventListener('click', handleProgressClick);
            downloadButton.addEventListener('click', downloadCurrentSurah);

            if (currentAudio) {
                currentAudio.addEventListener('timeupdate', updateProgress);
                currentAudio.addEventListener('loadedmetadata', updateDuration);
                currentAudio.addEventListener('ended', handleEnded);
            }
        }

        // Volume control handler
        function handleVolumeChange(e) {
            if (currentAudio) {
                currentAudio.volume = e.target.value / 100;
            }
        }

        // Progress bar click handler
        function handleProgressClick(e) {
            if (currentAudio) {
                const container = e.currentTarget;
                const clickPosition = (e.pageX - container.offsetLeft) / container.offsetWidth;
                currentAudio.currentTime = clickPosition * currentAudio.duration;
            }
        }

        // Toggle play/pause
        function togglePlay() {
            if (!currentAudio) return;

            if (currentAudio.paused) {
                currentAudio.play().catch(error => {
                    console.error('Error playing audio:', error);
                    alert('خطأ في تشغيل الصوت: ' + error.message);
                });
            } else {
                currentAudio.pause();
            }
            updatePlayButton();
        }

        // Update play button state
        function updatePlayButton() {
            const button = document.getElementById('playButton');
            const icon = button.querySelector('i');
            if (!currentAudio || currentAudio.paused) {
                icon.className = 'fas fa-play';
            } else {
                icon.className = 'fas fa-pause';
            }
        }

        // Update progress bar
        function updateProgress() {
            const progressBar = document.getElementById('progressBar');
            const currentTimeDisplay = document.getElementById('currentTime');
            
            if (currentAudio && currentAudio.duration) {
                const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
                progressBar.style.width = `${progress}%`;
                currentTimeDisplay.textContent = formatTime(currentAudio.currentTime);
            }
        }

        // Update duration display
        function updateDuration() {
            const durationDisplay = document.getElementById('duration');
            if (currentAudio) {
                durationDisplay.textContent = formatTime(currentAudio.duration);
            }
        }

        // Handle audio ended
        function handleEnded() {
            const playButton = document.getElementById('playButton');
            playButton.querySelector('i').className = 'fas fa-play';
        }

        // Format time helper
        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        }

        // Download surah
        async function downloadCurrentSurah() {
            if (!currentAudio || !currentAudio.src) {
                alert('No surah selected for download');
                return;
            }

            try {
                toggleLoading(true);
                const response = await fetch(currentAudio.src);
                if (!response.ok) throw new Error('Download failed');
                
                const blob = await response.blob();
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = `surah-${currentSurahNumber}.mp3`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(link.href);
            } catch (error) {
                console.error('Error downloading surah:', error);
                alert('خطأ في تحميل السورة');
            } finally {
                toggleLoading(false);
            }
        }

        // Search functionality
        function setupSearch() {
            const searchInput = document.getElementById('searchInput');
            const searchTypeSelect = document.getElementById('searchType');
            const reciterSelect = document.getElementById('reciterSelect');

            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const searchType = searchTypeSelect.value;

                if (searchType === 'surah') {
                    // Search surahs
                    const surahCards = document.querySelectorAll('.surah-card');
                    surahCards.forEach(card => {
                        const surahName = card.querySelector('h3').textContent.toLowerCase();
                        const englishName = card.querySelector('p').textContent.toLowerCase();
                        
                        card.style.display = (surahName.includes(searchTerm) || englishName.includes(searchTerm)) 
                            ? '' 
                            : 'none';
                    });
                } else if (searchType === 'reciter') {
                    // Search reciters
                    const reciterOptions = Array.from(reciterSelect.options).slice(1); // Skip the first option (placeholder)
                    reciterOptions.forEach(option => {
                        const reciterName = option.textContent.toLowerCase();
                        option.style.display = reciterName.includes(searchTerm) ? '' : 'none';
                    });
                }
            });

            searchTypeSelect.addEventListener('change', () => {
                searchInput.value = '';
                searchInput.placeholder = searchTypeSelect.value === 'surah' 
                    ? languageText[selectedLanguage].searchSurahPlaceholder 
                    : languageText[selectedLanguage].searchReciterPlaceholder;
                searchInput.focus();
                
                // Show all items when switching search type
                if (searchTypeSelect.value === 'surah') {
                    document.querySelectorAll('.surah-card').forEach(card => card.style.display = '');
                } else {
                    Array.from(reciterSelect.options).forEach(option => option.style.display = '');
                }
            });
        }

        // Fetch surahs
        async function fetchSurahs() {
            try {
                toggleLoading(true);
                renderSurahs(ALL_SURAHS); // Use the predefined surahs array
            } catch (error) {
                console.error('Error rendering surahs:', error);
                document.getElementById('surahList').innerHTML = 
                    `<div class="col-span-4 text-center text-red-500">${languageText[selectedLanguage].noSurahsAvailable}</div>`;
            } finally {
                toggleLoading(false);
            }
        }

        // Render surahs
        function renderSurahs(surahs) {
            const surahList = document.getElementById('surahList');
            if (!surahList) return;
            
            surahList.innerHTML = '';

            if (!surahs || surahs.length === 0) {
                surahList.innerHTML = `<div class="col-span-4 text-center text-red-500 fade-in">${languageText[selectedLanguage].noSurahsAvailable}</div>`;
                return;
            }

            surahs.forEach((surah, index) => {
                const card = document.createElement('div');
                card.className = 'surah-card bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors hover:shadow-xl fade-in';
                card.style.animationDelay = `${index * 50}ms`;

                // Get the appropriate name based on selected language
                let surahName = surah.name;
                let surahTranslatedName = '';

                switch(selectedLanguage) {
                    case 'en':
                        surahName = surah.name_en || surah.name;
                        surahTranslatedName = surah.name;
                        break;
                    case 'ur':
                        surahName = surah.name_ur || surah.name;
                        surahTranslatedName = surah.name;
                        break;
                    case 'fr':
                        surahName = surah.name_fr || surah.name_en || surah.name;
                        surahTranslatedName = surah.name;
                        break;
                }

                const revelationType = selectedLanguage === 'ar' ? surah.revelation_type : 
                    (selectedLanguage === 'en' ? (surah.revelation_type === 'Meccan' ? 'Meccan' : 'Medinan') : surah.revelation_type);

                card.innerHTML = `
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold dark:text-white">${selectedLanguage === 'ar' ? surah.name : surahName}</h3>
                        <span class="text-gray-600 dark:text-gray-400">${surah.id}</span>
                    </div>
                    ${selectedLanguage !== 'ar' && surahTranslatedName ? 
                        `<p class="text-gray-600 dark:text-gray-400 mb-2">${surahTranslatedName}</p>` : ''}
                    <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span>${revelationType}</span>
                        <span class="mx-2">•</span>
                        <span>${surah.verses_count} ${languageText[selectedLanguage].verses}</span>
                    </div>
                    <button onclick="playSurah(${surah.id})" class="w-full bg-emerald-600 dark:bg-emerald-700 text-white py-2 px-4 rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-800 transition-colors scale-in">
                        <i class="fas fa-play"></i>
                        ${languageText[selectedLanguage].playButton}
                    </button>
                `;
                surahList.appendChild(card);
            });
        }

        // Update UI text based on selected language
        function updateUIText(language) {
            const text = languageText[language];

            // Update navigation bar text
            document.querySelector('.header-title').textContent = text.siteTitle;
            
            // Update search inputs
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.placeholder = text.searchSurahPlaceholder;
            }
            
            // Update search type options
            const searchTypeSelect = document.getElementById('searchType');
            if (searchTypeSelect) {
                searchTypeSelect.innerHTML = `
                    <option value="surah">${text.searchType.surah}</option>
                    <option value="reciter">${text.searchType.reciter}</option>
                `;
            }

            // Update reciter select
            const reciterSelect = document.getElementById('reciterSelect');
            if (reciterSelect) {
                const reciterLabel = document.querySelector('.reciter-label');
                if (reciterLabel) {
                    reciterLabel.textContent = text.chooseReciterLabel;
                }
                
                const firstOption = reciterSelect.querySelector('option[value=""]');
                if (firstOption) {
                    firstOption.textContent = text.chooseReciterLabel;
                }
            }

            // Update current playing text
            const currentSurah = document.getElementById('currentSurah');
            const currentReciter = document.getElementById('currentReciter');
            if (currentSurah && !currentSurahNumber) {
                currentSurah.textContent = text.currentSurah;
            }
            if (currentReciter && !currentSurahNumber) {
                currentReciter.textContent = text.currentReciter;
            }

            // Update download button
            const downloadButton = document.getElementById('downloadButton');
            if (downloadButton) {
                downloadButton.innerHTML = `<i class="fas fa-download ml-2"></i>${text.downloadButton}`;
            }

            // Update footer text
            const footerText1 = document.querySelector('.footer-text:first-child');
            const footerText2 = document.querySelector('.footer-text:last-child');
            if (footerText1) {
                footerText1.textContent = text.footerText1;
            }
            if (footerText2) {
                footerText2.innerHTML = text.footerText2;
            }

            // Re-render surahs to update all text
            renderSurahs(ALL_SURAHS);
        }

        // Initialize the application
        document.addEventListener('DOMContentLoaded', async () => {
            setupDarkMode();
            setupSearch();
            
            // Initialize language
            const storedLanguage = localStorage.getItem('selectedLanguage');
            if (storedLanguage) {
                selectedLanguage = storedLanguage;
                document.documentElement.lang = selectedLanguage;
                document.documentElement.dir = selectedLanguage === 'ar' || selectedLanguage === 'ur' ? 'rtl' : 'ltr';
            }
            
            // Update UI text with selected language
            updateUIText(selectedLanguage);
            
            // Fetch reciters and surahs
            await fetchReciters();
            await fetchSurahs();
            
            // Setup language switcher
            const languageSelect = document.getElementById('languageSelect');
            if (languageSelect) {
                languageSelect.value = selectedLanguage;
                languageSelect.addEventListener('change', (e) => {
                    selectedLanguage = e.target.value;
                    localStorage.setItem('selectedLanguage', selectedLanguage);
                    document.documentElement.lang = selectedLanguage;
                    document.documentElement.dir = selectedLanguage === 'ar' || selectedLanguage === 'ur' ? 'rtl' : 'ltr';
                    updateUIText(selectedLanguage);
                    renderSurahs(ALL_SURAHS);
                });
            }
        });
