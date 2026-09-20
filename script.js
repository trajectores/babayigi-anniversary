/* =====================================================
   SUPABASE
   ===================================================== */

const SUPABASE_URL = "https://vaaoshpaztmercyaodwe.supabase.co";

const SUPABASE_KEY = "sb_publishable_KS89ZQP20dvFne4UCFO8wA_q4iSOsYC";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
/* =====================================================
   🍓 BABAYIGI — 2ND ANNIVERSARY WEBSITE
   ===================================================== */


/* =====================================================
   🔐 SECRET CODE
   ===================================================== */

const correctCode = "21092024";


/* =====================================================
   📦 GET ELEMENTS
   ===================================================== */

const input =
    document.getElementById("secretCode");

const button =
    document.getElementById("enterButton");

const errorMessage =
    document.getElementById("errorMessage");

const secretPage =
    document.getElementById("secretPage");

const anniversaryPage =
    document.getElementById("anniversaryPage");

const wrongPopup =
    document.getElementById("wrongPopup");

const nextButton =
    document.getElementById("nextButton");

const storyPage =
    document.getElementById("storyPage");

const backButton =
    document.getElementById("backButton");

const nextMemoryButton =
    document.getElementById("nextMemoryButton");

const pageFour =
    document.getElementById("pageFour");

const backFourButton =
    document.getElementById("backFourButton");

const nextFourButton =
    document.getElementById("nextFourButton");

const heartsContainer =
    document.querySelector(".floating-hearts");


/* =====================================================
   🎵 BACKGROUND MUSIC
   ===================================================== */

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicPlayButton =
    document.getElementById("musicPlayButton");

const musicIntro =
    document.getElementById("musicIntro");

const memoriesContainer =
    document.getElementById("memoriesContainer");

const memoryPolaroids =
    document.querySelectorAll(".memory-polaroid");

const memoryNavigation =
    document.querySelector(".memory-four-navigation");


/* =====================================================
   🔐 SECRET CODE
   ===================================================== */

if (button) {

    button.addEventListener("click", function () {

        const enteredCode =
            input.value.trim();


        /* =============================================
           ❤️ KODE BENAR
           ============================================= */

        if (enteredCode === correctCode) {

            /*
               PAGE 1 → PAGE 2
            */

            secretPage.style.display =
                "none";

            anniversaryPage.style.display =
                "flex";


            /*
               Bersihkan error
            */

            errorMessage.textContent = "";

            errorMessage.classList.remove(
                "show"
            );

            wrongPopup.classList.remove(
                "show"
            );


            /*
               Kosongkan input
            */

            input.value = "";

            return;
        }


        /* =============================================
           💢 KODE SALAH
           ============================================= */

        errorMessage.textContent =
            "sALAHH, kO KM NDATAAUU, ULAANG ۹(๑`^´๑)۶ !!";


        /*
           Reset GIF animation
        */

        wrongPopup.classList.remove(
            "show"
        );

        void wrongPopup.offsetWidth;

        wrongPopup.classList.add(
            "show"
        );


        /*
           Reset error animation
        */

        errorMessage.classList.remove(
            "show"
        );

        void errorMessage.offsetWidth;

        errorMessage.classList.add(
            "show"
        );


        /*
           Kosongkan input
        */

        input.value = "";

        input.focus();


        /*
           Hilangkan setelah 3.5 detik
        */

        setTimeout(function () {

            wrongPopup.classList.remove(
                "show"
            );

            errorMessage.classList.remove(
                "show"
            );

        }, 3500);

    });

}


/* =====================================================
   ⌨️ ENTER KEYBOARD
   ===================================================== */

if (input) {

    input.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                button.click();

            }

        }
    );

}


/* =====================================================
   💗 FLOATING HEARTS
   ===================================================== */

function createHeart() {

    if (!heartsContainer) {
        return;
    }


    const heart =
        document.createElement("span");

    heart.classList.add(
        "floating-heart"
    );


    /*
       Posisi random
    */

    heart.style.left =
        Math.random() * 100 + "%";


    /*
       Ukuran random
    */

    const size =
        Math.random() * 15 + 12;

    heart.style.width =
        size + "px";

    heart.style.height =
        size + "px";


    /*
       Gerakan kiri / kanan
    */

    const moveX =
        (Math.random() * 200 - 100)
        + "px";

    heart.style.setProperty(
        "--move-x",
        moveX
    );


    /*
       Masukkan ke container
    */

    heartsContainer.appendChild(
        heart
    );


    /*
       Hapus setelah selesai
    */

    setTimeout(function () {

        heart.remove();

    }, 6000);

}


/*
   Heart muncul setiap 500ms
*/

setInterval(
    createHeart,
    500
);


/* =====================================================
   🎁 PAGE 2 → PAGE 3
   ===================================================== */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            /*
               PAGE 2 disembunyikan
            */

            anniversaryPage.style.display =
                "none";


            /*
               PAGE 3 ditampilkan
            */

            storyPage.style.display =
                "flex";


            /*
               Kembali ke posisi paling atas
            */

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   💗 PAGE 3 BACK → PAGE 2
   ===================================================== */

if (backButton) {

    backButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            /*
               PAGE 3 disembunyikan
            */

            storyPage.style.display =
                "none";


            /*
               PAGE 2 ditampilkan kembali
            */

            anniversaryPage.style.display =
                "flex";


            /*
               Kembali ke posisi paling atas
            */

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   🍓 PAGE 3 → PAGE 4
   ===================================================== */

if (nextMemoryButton) {

    nextMemoryButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            /*
               PAGE 3 disembunyikan
            */

            storyPage.style.display =
                "none";


            /*
               PAGE 4 ditampilkan
            */

            pageFour.style.display =
                "flex";


            /*
               Mulai dari bagian atas Page 4
            */

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   🎵 PAGE 4 — PLAY MUSIC
   ===================================================== */

if (musicPlayButton && backgroundMusic) {

    musicPlayButton.addEventListener(
        "click",
        async function () {

            try {

                /*
                   Mulai musik
                */

                await backgroundMusic.play();


                /*
                   Ubah tombol
                */

                musicPlayButton.textContent =
                    "PLAYING ♫";


                /*
                   Intro menghilang
                */

                musicIntro.style.opacity =
                    "0";

                musicIntro.style.transform =
                    "translateY(-15px)";


                /*
                   Tunggu animasi selesai
                */

                setTimeout(function () {

                    musicIntro.style.display =
                        "none";


                    /*
                       Tampilkan memories
                    */

                    memoriesContainer.style.display =
                        "flex";


                    /*
                       Mulai dari bagian atas
                    */

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });


                }, 600);


            } catch (error) {

                console.log(
                    "Music gagal diputar:",
                    error
                );

            }

        }
    );

}


/* =====================================================
   📸 PAGE 4 — POLAROID FADE IN
   ===================================================== */

const memoryObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );


                        /*
                           Setelah muncul,
                           observer tidak perlu
                           mengawasi lagi
                        */

                        memoryObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.2
        }

    );


memoryPolaroids.forEach(
    function (polaroid) {

        memoryObserver.observe(
            polaroid
        );

    }
);


/* =====================================================
   💗 PAGE 4 — FINAL NAVIGATION FADE IN
   ===================================================== */

const navigationObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        memoryNavigation.classList.add(
                            "visible"
                        );


                        navigationObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.5
        }

    );


if (memoryNavigation) {

    navigationObserver.observe(
        memoryNavigation
    );

}


/* =====================================================
   💗 PAGE 4 BACK → PAGE 3
   ===================================================== */

if (backFourButton) {

    backFourButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            /*
               PAGE 4 disembunyikan
            */

            pageFour.style.display =
                "none";


            /*
               PAGE 3 ditampilkan
            */

            storyPage.style.display =
                "flex";


            /*
               Kembali ke atas Page 3
            */

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}

/* =====================================================
   PAGE 5 — LITTLE THINGS ABOUT US
   ===================================================== */

const pageFive = document.getElementById("pageFive");
const nextFiveButton = document.getElementById("nextFiveButton");
const backFiveButton = document.getElementById("backFiveButton");

const pageFiveMemories = document.querySelectorAll(
    ".page-five-memory"
);

const pageFiveEnding = document.querySelector(
    ".page-five-ending"
);


/* =====================================================
   PAGE 4 → PAGE 5
   ===================================================== */

if (nextFourButton) {

    nextFourButton.addEventListener("click", function (event) {

        event.preventDefault();

        pageFour.style.display = "none";
        pageFive.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================================
   PAGE 5 MEMORY FADE IN
   ===================================================== */

const pageFiveObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                pageFiveObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.2
    }
);


pageFiveMemories.forEach(function (memory) {

    pageFiveObserver.observe(memory);

});


/* =====================================================
   PAGE 5 ENDING FADE IN
   ===================================================== */

const pageFiveEndingObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                pageFiveEndingObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.35
    }
);


if (pageFiveEnding) {

    pageFiveEndingObserver.observe(pageFiveEnding);

}


/* =====================================================
   PAGE 5 BACK → PAGE 4
   ===================================================== */

if (backFiveButton) {

    backFiveButton.addEventListener("click", function (event) {

        event.preventDefault();

        pageFive.style.display = "none";
        pageFour.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =====================================================
   PAGE 5 → PAGE 6
   ===================================================== */

if (nextFiveButton) {

    nextFiveButton.addEventListener("click", function (event) {

        event.preventDefault();

        pageFive.style.display = "none";

        if (pageSix) {
            pageSix.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

    });

}

/* =====================================================
   🍓 DEBUG
   ===================================================== */

console.log(
    "🍓 BABAYIGI WEBSITE AKTIF"
);

console.log(
    "Secret code:",
    correctCode
);

console.log(
    "Next button:",
    nextButton
);

console.log(
    "Back button:",
    backButton
);

console.log(
    "Next memory button:",
    nextMemoryButton
);

console.log(
    "Story page:",
    storyPage
);

console.log(
    "Page Four:",
    pageFour
);

console.log(
    "Background music:",
    backgroundMusic
);

/* =====================================================
   PAGE 6 — OUR WISHES
   ===================================================== */

const pageSix = document.getElementById("pageSix");

const wishOpening = document.getElementById("wishOpening");
const firstWishSection = document.getElementById("firstWishSection");

const firstWishInput = document.getElementById("firstWishInput");
const firstWishCounter = document.getElementById("firstWishCounter");
const sendFirstWishButton = document.getElementById("sendFirstWishButton");
const firstWishStatus = document.getElementById("firstWishStatus");

const wishPopupOverlay = document.getElementById("wishPopupOverlay");
const popupSmallTitle = document.getElementById("popupSmallTitle");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const popupGif = document.getElementById("popupGif");
const popupNextButton = document.getElementById("popupNextButton");
const popupCloseButton = document.getElementById("popupCloseButton");

const extraWishesSection = document.getElementById("extraWishesSection");

const selfWishInput = document.getElementById("selfWishInput");
const partnerWishInput = document.getElementById("partnerWishInput");
const usWishInput = document.getElementById("usWishInput");

const selfWishCounter = document.getElementById("selfWishCounter");
const partnerWishCounter = document.getElementById("partnerWishCounter");
const usWishCounter = document.getElementById("usWishCounter");

const saveAllWishesButton = document.getElementById("saveAllWishesButton");
const extraWishStatus = document.getElementById("extraWishStatus");

const unlockSection = document.getElementById("unlockSection");
const unlockSecretButton = document.getElementById("unlockSecretButton");

const codeUnlockSection = document.getElementById("codeUnlockSection");
const ourWishCode = document.getElementById("ourWishCode");
const openOurWishesButton = document.getElementById("openOurWishesButton");
const ourWishCodeError = document.getElementById("ourWishCodeError");

const ourWishesSection = document.getElementById("ourWishesSection");
const ourWishesList = document.getElementById("ourWishesList");

const pageSixEnding = document.getElementById("pageSixEnding");

const backSixButton = document.getElementById("backSixButton");
const nextSixButton = document.getElementById("nextSixButton");


/* =====================================================
   SECRET CODE
   ===================================================== */

const ANNIVERSARY_ACCESS_CODE = "21092024";


/* =====================================================
   5 WISHES FROM YOU
   ===================================================== */

const MY_SECRET_WISHES = [

    "semoga kita selalu punya alasan untuk tetap memilih satu sama lain.",

    "semoga kita terus tumbuh bersama dan saling menyayangi serta memahamiii",

    "semoga tahun-tahun berikutnya dipenuhi lebih banyak cerita dan kebahagiaann.",

    "semoga kita selalu bisa melewati hari-hari sulit dengan baikk.",

    "semogaaa kita bisa menjadi pribadi yang lebih baik, dan sama sama terus selamanyaaa"

];


/* =====================================================
   POPUP DATA
   ===================================================== */

const wishPopups = [

    {
        smallTitle: "wait... ♡",
        title: "NOOO...",
        text:
            "wish kamu belum terpenuhi...\n\n" +
            "sebenarnya...\n" +
            "tabole cuma satu wish :P",
        gif: "gifs/page6-popup1.gif",
        button: "NEXT ♡"
    },

    {
        smallTitle: "there's a little secret...",
        title: "NOT YET ♡",
        text:
            "ternyata ada sesuatu yang harus\n" +
            "kamu lakukan dulu sebelum bisa\n" +
            "melihat apa yang ada di balik halaman ini...",
        gif: "gifs/page6-popup2.gif",
        button: "NEXT ♡"
    },

    {
        smallTitle: "one more little thing...",
        title: "THREE WISHES",
        text:
            "buat 3 wish lagi:\n\n" +
            "♡ satu untuk dirimu sendiri\n" +
            "♡ satu untuk ddnusss, pacarmu yang imut sedunia\n" +
            "♡ satu untuk kita\n\n" +
            "setelah itu, mungkin...\n" +
            "ada sesuatu yang bisa kamu buka :3",
        gif: "gifs/page6-popup3.gif",
        button: "I'M READY ♡"
    }

];

let currentPopupIndex = 0;


/* =====================================================
   CHARACTER COUNTERS
   ===================================================== */

function setupCounter(input, counter) {

    if (!input || !counter) {
        return;
    }

    input.addEventListener("input", function () {

        counter.textContent = input.value.length;

    });

}

setupCounter(firstWishInput, firstWishCounter);
setupCounter(selfWishInput, selfWishCounter);
setupCounter(partnerWishInput, partnerWishCounter);
setupCounter(usWishInput, usWishCounter);


/* =====================================================
   SHOW POPUP
   ===================================================== */

function showWishPopup(index) {

    const popup = wishPopups[index];

    if (!popup) {
        return;
    }

    currentPopupIndex = index;

    popupSmallTitle.textContent = popup.smallTitle;
    popupTitle.textContent = popup.title;
    popupText.textContent = popup.text;

    popupGif.src = popup.gif;

    popupNextButton.textContent = popup.button;

    wishPopupOverlay.classList.add("active");

}


/* =====================================================
   CLOSE POPUP
   ===================================================== */

popupCloseButton.addEventListener("click", function () {

    wishPopupOverlay.classList.remove("active");

});


/* =====================================================
   NEXT POPUP
   ===================================================== */

popupNextButton.addEventListener("click", function () {

    if (currentPopupIndex < wishPopups.length - 1) {

        showWishPopup(currentPopupIndex + 1);

    } else {

        wishPopupOverlay.classList.remove("active");

        extraWishesSection.classList.add("active");

        setTimeout(function () {

            extraWishesSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 300);

    }

});


/* =====================================================
   SEND FIRST WISH
   ===================================================== */

sendFirstWishButton.addEventListener("click", async function () {

    const wishText = firstWishInput.value.trim();

    if (!wishText) {

        firstWishStatus.textContent =
            "tulis wish muuu ♡";

        firstWishInput.focus();

        return;
    }

    sendFirstWishButton.disabled = true;
    sendFirstWishButton.textContent = "SAVING... ♡";

    firstWishStatus.textContent = "";


    try {

        const { error } = await supabaseClient
            .from("anniversary_wishes")
            .insert({
                wish_text: wishText,
                wish_type: "first",
                author: "you",
                access_code: ANNIVERSARY_ACCESS_CODE
            });


        if (error) {
            throw error;
        }


        localStorage.setItem(
            "anniversary_first_wish_done",
            "true"
        );


        firstWishInput.disabled = true;

        sendFirstWishButton.style.display = "none";


        showWishPopup(0);


    } catch (error) {

        console.error(error);

        firstWishStatus.textContent =
            "hmm, ada masalah menyimpan wish-nya. coba lagi ya ♡";

        sendFirstWishButton.disabled = false;

        sendFirstWishButton.textContent =
            "SEND WISH ♡";

    }

});


/* =====================================================
   SAVE THREE EXTRA WISHES
   ===================================================== */

saveAllWishesButton.addEventListener("click", async function () {

    const selfWish = selfWishInput.value.trim();
    const partnerWish = partnerWishInput.value.trim();
    const usWish = usWishInput.value.trim();


    if (!selfWish || !partnerWish || !usWish) {

        extraWishStatus.textContent =
            "isi ketiga wish-nya dulu yaa ♡";

        return;
    }


    saveAllWishesButton.disabled = true;

    saveAllWishesButton.textContent =
        "SAVING OUR WISHES... ♡";

    extraWishStatus.textContent = "";


    try {

        const wishesToSave = [

            {
                wish_text: selfWish,
                wish_type: "self",
                author: "you",
                access_code: ANNIVERSARY_ACCESS_CODE
            },

            {
                wish_text: partnerWish,
                wish_type: "partner",
                author: "you",
                access_code: ANNIVERSARY_ACCESS_CODE
            },

            {
                wish_text: usWish,
                wish_type: "us",
                author: "you",
                access_code: ANNIVERSARY_ACCESS_CODE
            }

        ];


        const { error } = await supabaseClient
            .from("anniversary_wishes")
            .insert(wishesToSave);


        if (error) {
            throw error;
        }


        localStorage.setItem(
            "anniversary_extra_wishes_done",
            "true"
        );


        selfWishInput.disabled = true;
        partnerWishInput.disabled = true;
        usWishInput.disabled = true;


        saveAllWishesButton.style.display = "none";


        extraWishStatus.textContent =
            "saved safely ♡";


        setTimeout(function () {

            unlockSection.classList.add("active");

            unlockSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 900);


    } catch (error) {

        console.error(error);

        extraWishStatus.textContent =
            "hmm, wish-nya belum tersimpan. coba lagi ya ♡";

        saveAllWishesButton.disabled = false;

        saveAllWishesButton.textContent =
            "SAVE OUR WISHES ♡";

    }

});


/* =====================================================
   UNLOCK SECRET
   ===================================================== */

unlockSecretButton.addEventListener("click", function () {

    codeUnlockSection.classList.add("active");

    codeUnlockSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    ourWishCode.focus();

});


/* =====================================================
   OPEN OUR WISHES
   ===================================================== */

openOurWishesButton.addEventListener("click", async function () {

    const enteredCode = ourWishCode.value.trim();

    ourWishCodeError.textContent = "";


    if (!enteredCode) {

        ourWishCodeError.textContent =
            "masukkan secret code dulu ♡";

        return;
    }


    if (enteredCode !== ANNIVERSARY_ACCESS_CODE) {

        ourWishCodeError.textContent =
            "hmm... itu bukan kodenyaa :(";

        ourWishCode.value = "";

        return;
    }


    openOurWishesButton.disabled = true;

    openOurWishesButton.textContent =
        "OPENING... ♡";


    try {

        const { data, error } = await supabaseClient
            .rpc("get_anniversary_wishes", {
                p_access_code: enteredCode
            });


        if (error) {
            throw error;
        }


        renderOurWishes(data || []);


        codeUnlockSection.style.display = "none";

        ourWishesSection.classList.add("active");

        pageSixEnding.classList.add("active");


        setTimeout(function () {

            ourWishesSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 300);


        localStorage.setItem(
            "anniversary_wishes_unlocked",
            "true"
        );


    } catch (error) {

        console.error(error);

        ourWishCodeError.textContent =
            "gagal membuka wishes. coba lagi ya ♡";

        openOurWishesButton.disabled = false;

        openOurWishesButton.textContent =
            "OPEN ♡";

    }

});


/* =====================================================
   RENDER OUR WISHES
   ===================================================== */

function renderOurWishes(databaseWishes) {

    ourWishesList.innerHTML = "";


    /*
       5 wishes dari pembuat website
    */

    const myWishes = MY_SECRET_WISHES.map(function (wish) {

        return {
            wish_text: wish,
            author: "me",
            wish_type: "secret"
        };

    });


    /*
       Wishes dari pengisi
    */

    const userWishes = databaseWishes.map(function (wish) {

        return {
            wish_text: wish.wish_text,
            author: "you",
            wish_type: wish.wish_type
        };

    });


    /*
       Gabungkan semuanya
    */

    const allWishes = [
        ...myWishes,
        ...userWishes
    ];


    /*
       Acak urutan supaya terasa seperti
       kumpulan wishes kalian.
    */

    const shuffledWishes = [...allWishes].sort(
        () => Math.random() - 0.5
    );


    shuffledWishes.forEach(function (wish, index) {

        const card = document.createElement("div");

        card.className = "our-wish-card";

        const label = document.createElement("div");

        label.className = "our-wish-label";

        label.textContent =
            wish.author === "me"
                ? "♡ from me"
                : "♡ from you";


        const number = document.createElement("div");

        number.className = "our-wish-number";

        number.textContent =
            String(index + 1).padStart(2, "0");


        const text = document.createElement("p");

        text.className = "our-wish-text";

        text.textContent = wish.wish_text;


        card.appendChild(label);
        card.appendChild(number);
        card.appendChild(text);


        ourWishesList.appendChild(card);

    });

}


/* =====================================================
   ENTER KEY FOR SECRET CODE
   ===================================================== */

ourWishCode.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        openOurWishesButton.click();

    }

});


/* =====================================================
   PAGE 6 BACK
   ===================================================== */

backSixButton.addEventListener("click", function () {

    pageSix.style.display = "none";

    const pageFive = document.getElementById("pageFive");

    if (pageFive) {

        pageFive.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

});


/* =====================================================
   PAGE 6 NEXT
   ===================================================== */

nextSixButton.addEventListener("click", function () {

    const pageSeven = document.getElementById("pageSeven");

    if (pageSeven) {

        pageSix.style.display = "none";

        pageSeven.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        console.log("Page 7 belum dibuat.");

    }

});

/* =====================================================
   PAGE 7 — OUR LITTLE PLANS
   ===================================================== */


/* =====================================================
   ELEMENTS
   ===================================================== */

const pageSeven =
    document.getElementById("pageSeven");

const planDateInput =
    document.getElementById("planDateInput");

const planTryInput =
    document.getElementById("planTryInput");

const planFoodInput =
    document.getElementById("planFoodInput");

const planTravelInput =
    document.getElementById("planTravelInput");

const planSillyInput =
    document.getElementById("planSillyInput");


const planDateCounter =
    document.getElementById("planDateCounter");

const planTryCounter =
    document.getElementById("planTryCounter");

const planFoodCounter =
    document.getElementById("planFoodCounter");

const planTravelCounter =
    document.getElementById("planTravelCounter");

const planSillyCounter =
    document.getElementById("planSillyCounter");


const savePlansButton =
    document.getElementById("savePlansButton");

const plansStatus =
    document.getElementById("plansStatus");

const plansSaveSection =
    document.querySelector(".plans-save-section");

const plansTransition =
    document.getElementById("plansTransition");

const revealPlansButton =
    document.getElementById("revealPlansButton");

const ourPlannerSection =
    document.getElementById("ourPlannerSection");

const plansList =
    document.getElementById("plansList");

const missionSection =
    document.getElementById("missionSection");

const pickPlanButton =
    document.getElementById("pickPlanButton");

const missionResult =
    document.getElementById("missionResult");

const missionPlanText =
    document.getElementById("missionPlanText");

const missionPlanCategory =
    document.getElementById("missionPlanCategory");

const pageSevenEnding =
    document.getElementById("pageSevenEnding");

const backSevenButton =
    document.getElementById("backSevenButton");

const nextSevenButton =
    document.getElementById("nextSevenButton");

const finalLoveButton =
    document.getElementById("finalLoveButton");


/* =====================================================
   ACCESS CODE
   ===================================================== */

const PLANS_ACCESS_CODE =
    "21092024";


/* =====================================================
   MY FIVE SECRET PLANS
   ===================================================== */

const MY_SECRET_PLANS = [

    {
        plan_text:
            "AK INGIN KT KATOKEAAAAAAAAAAAAN",
        plan_type:
            "date",
        author:
            "me"
    },

    {
        plan_text:
            "AK INGIN MASAK MASAK BARENGGG :(((",
        plan_type:
            "try",
        author:
            "me"
    },

    {
        plan_text:
            "akuu inginn mamam all u can eat masamaa atau review sasimi mentah... hii",
        plan_type:
            "food",
        author:
            "me"
    },

    {
        plan_text:
            "ak ingin ke namu sama sama ueueueue",
        plan_type:
            "travel",
        author:
            "me"
    },

    {
        plan_text:
            "aku pngen main timezone, atau ngga main game yg monitornya dr hp tu loo yg prna km kirim",
        plan_type:
            "silly",
        author:
            "me"
    }

];


/* =====================================================
   CHARACTER COUNTERS
   ===================================================== */

function setupPlanCounter(input, counter) {

    if (!input || !counter) {
        return;
    }

    input.addEventListener(
        "input",
        function () {

            counter.textContent =
                input.value.length;

        }
    );

}


setupPlanCounter(
    planDateInput,
    planDateCounter
);

setupPlanCounter(
    planTryInput,
    planTryCounter
);

setupPlanCounter(
    planFoodInput,
    planFoodCounter
);

setupPlanCounter(
    planTravelInput,
    planTravelCounter
);

setupPlanCounter(
    planSillyInput,
    planSillyCounter
);


/* =====================================================
   PLAN CARD OBSERVER
   ===================================================== */

const planCardObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        planCardObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.18
        }

    );


function observePlanCards() {

    const cards =
        document.querySelectorAll(
            ".plan-card"
        );

    cards.forEach(
        function (card) {

            planCardObserver.observe(
                card
            );

        }
    );

}


/* =====================================================
   SAVE SECTION OBSERVER
   ===================================================== */

const saveSectionObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        saveSectionObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.25
        }

    );


if (plansSaveSection) {

    saveSectionObserver.observe(
        plansSaveSection
    );

}


/* =====================================================
   SAVE FIVE PLANS
   ===================================================== */

if (savePlansButton) {

    savePlansButton.addEventListener(
        "click",
        async function () {

            const datePlan =
                planDateInput.value.trim();

            const tryPlan =
                planTryInput.value.trim();

            const foodPlan =
                planFoodInput.value.trim();

            const travelPlan =
                planTravelInput.value.trim();

            const sillyPlan =
                planSillyInput.value.trim();


            /* =========================================
               CHECK EMPTY
               ========================================= */

            if (
                !datePlan ||
                !tryPlan ||
                !foodPlan ||
                !travelPlan ||
                !sillyPlan
            ) {

                plansStatus.textContent =
                    "isi lima plan-nya dulu yaa ♡";

                return;

            }


            savePlansButton.disabled =
                true;

            savePlansButton.textContent =
                "SAVING OUR PLANS... ♡";

            plansStatus.textContent =
                "";


            try {

                const plansToSave = [

                    {
                        plan_text:
                            datePlan,

                        plan_type:
                            "date",

                        author:
                            "you",

                        access_code:
                            PLANS_ACCESS_CODE
                    },

                    {
                        plan_text:
                            tryPlan,

                        plan_type:
                            "try",

                        author:
                            "you",

                        access_code:
                            PLANS_ACCESS_CODE
                    },

                    {
                        plan_text:
                            foodPlan,

                        plan_type:
                            "food",

                        author:
                            "you",

                        access_code:
                            PLANS_ACCESS_CODE
                    },

                    {
                        plan_text:
                            travelPlan,

                        plan_type:
                            "travel",

                        author:
                            "you",

                        access_code:
                            PLANS_ACCESS_CODE
                    },

                    {
                        plan_text:
                            sillyPlan,

                        plan_type:
                            "silly",

                        author:
                            "you",

                        access_code:
                            PLANS_ACCESS_CODE
                    }

                ];


                const { error } =
                    await supabaseClient
                        .from(
                            "anniversary_plans"
                        )
                        .insert(
                            plansToSave
                        );


                if (error) {

                    throw error;

                }


                localStorage.setItem(
                    "anniversary_plans_done",
                    "true"
                );


                /* =====================================
                   DISABLE INPUTS
                   ===================================== */

                planDateInput.disabled =
                    true;

                planTryInput.disabled =
                    true;

                planFoodInput.disabled =
                    true;

                planTravelInput.disabled =
                    true;

                planSillyInput.disabled =
                    true;


                savePlansButton.style.display =
                    "none";


                plansStatus.textContent =
                    "saved safely ♡";


                /* =====================================
                   MAGICAL TRANSITION
                   ===================================== */

                setTimeout(
                    function () {

                        document
                            .querySelectorAll(
                                ".plan-card"
                            )
                            .forEach(
                                function (card) {

                                    card.style.opacity =
                                        "0";

                                    card.style.transform =
                                        "scale(.92) rotate(0deg)";

                                }
                            );


                        plansSaveSection.style.opacity =
                            "0";


                        setTimeout(
                            function () {

                                plansSaveSection.style.display =
                                    "none";

                                plansTransition.classList.add(
                                    "active"
                                );

                                plansTransition.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });

                            },
                            500
                        );

                    },
                    800
                );


            } catch (error) {

                console.error(error);

                plansStatus.textContent =
                    "hmm, plan-nya belum tersimpan. coba lagi ya ♡";

                savePlansButton.disabled =
                    false;

                savePlansButton.textContent =
                    "SAVE OUR PLANS ♡";

            }

        }
    );

}


/* =====================================================
   REVEAL OUR PLANS
   ===================================================== */

if (revealPlansButton) {

    revealPlansButton.addEventListener(
        "click",
        async function () {

            revealPlansButton.disabled =
                true;

            revealPlansButton.textContent =
                "OPENING... ✦";


            try {

                const { data, error } =
                    await supabaseClient
                        .rpc(
                            "get_anniversary_plans",
                            {
                                p_access_code:
                                    PLANS_ACCESS_CODE
                            }
                        );


                if (error) {

                    throw error;

                }


                renderOurPlans(
                    data || []
                );


plansTransition.classList.add(
    "active"
);

ourPlannerSection.classList.add(
    "active"
);

setTimeout(function () {
    plansTransition.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}, 100);

                setTimeout(
                    function () {

                        ourPlannerSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    },
                    300
                );


            } catch (error) {

                console.error(error);

                revealPlansButton.disabled =
                    false;

                revealPlansButton.textContent =
                    "TRY AGAIN ♡";

            }

        }
    );

}


/* =====================================================
   RENDER ALL PLANS
   ===================================================== */

let allOurPlans = [];


function renderOurPlans(
    databasePlans
) {

    plansList.innerHTML = "";


    const userPlans =
        databasePlans.map(
            function (plan) {

                return {

                    plan_text:
                        plan.plan_text,

                    plan_type:
                        plan.plan_type,

                    author:
                        "you"

                };

            }
        );


    const myPlans =
        MY_SECRET_PLANS.map(
            function (plan) {

                return {

                    plan_text:
                        plan.plan_text,

                    plan_type:
                        plan.plan_type,

                    author:
                        "me"

                };

            }
        );


    allOurPlans = [
        ...myPlans,
        ...userPlans
    ];


    const shuffledPlans =
        [...allOurPlans].sort(
            function () {

                return Math.random() - 0.5;

            }
        );


    shuffledPlans.forEach(
        function (plan, index) {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "planner-card";


            const label =
                document.createElement(
                    "span"
                );

            label.className =
                "planner-card-label";


            const categoryNames = {

                date:
                    "DATE",

                try:
                    "TRY SOMETHING",

                food:
                    "FOOD",

                travel:
                    "ADVENTURE",

                silly:
                    "SILLY"

            };


            label.textContent =
                categoryNames[
                    plan.plan_type
                ] || "PLAN";


            const number =
                document.createElement(
                    "span"
                );

            number.className =
                "planner-card-number";

            number.textContent =
                String(index + 1)
                    .padStart(2, "0");


            const author =
                document.createElement(
                    "div"
                );

            author.className =
                "planner-card-author";

            author.textContent =
                plan.author === "me"
                    ? "♡ from me"
                    : "♡ from you";


            const text =
                document.createElement(
                    "p"
                );

            text.className =
                "planner-card-text";

            text.textContent =
                plan.plan_text;


            card.appendChild(
                label
            );

            card.appendChild(
                number
            );

            card.appendChild(
                author
            );

            card.appendChild(
                text
            );


            plansList.appendChild(
                card
            );

        }
    );


    /* =============================================
       OBSERVE NEW CARDS
       ============================================= */

    const newCards =
        document.querySelectorAll(
            ".planner-card"
        );


    newCards.forEach(
        function (card) {

            planCardObserver.observe(
                card
            );

        }
    );


    /* =============================================
       MISSION OBSERVER
       ============================================= */

    const missionObserver =
        new IntersectionObserver(

            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            missionObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.2
            }

        );


    missionObserver.observe(
        missionSection
    );

}


/* =====================================================
   PICK ONE FOR US
   ===================================================== */

if (pickPlanButton) {

    pickPlanButton.addEventListener(
        "click",
        function () {

            if (
                !allOurPlans.length
            ) {

                return;

            }


            pickPlanButton.disabled =
                true;

            pickPlanButton.textContent =
                "CHOOSING... ✦";


            missionResult.classList.remove(
                "active"
            );


            /* =====================================
               FAKE SHUFFLE
               ===================================== */

            let shuffleCount = 0;

            const shuffleInterval =
                setInterval(
                    function () {

                        const randomPlan =
                            allOurPlans[
                                Math.floor(
                                    Math.random()
                                    *
                                    allOurPlans.length
                                )
                            ];


                        missionPlanText.textContent =
                            randomPlan.plan_text;


                        shuffleCount++;


                        if (
                            shuffleCount >= 12
                        ) {

                            clearInterval(
                                shuffleInterval
                            );


                            const finalPlan =
                                allOurPlans[
                                    Math.floor(
                                        Math.random()
                                        *
                                        allOurPlans.length
                                    )
                                ];


                            missionPlanText.textContent =
                                finalPlan.plan_text;


                            const categoryNames = {

                                date:
                                    "DATE ♡",

                                try:
                                    "TRY SOMETHING NEW ✦",

                                food:
                                    "FOOD ♡",

                                travel:
                                    "ADVENTURE ✈",

                                silly:
                                    "SILLY LITTLE THING :3"

                            };


                            missionPlanCategory.textContent =
                                categoryNames[
                                    finalPlan.plan_type
                                ] || "OUR PLAN ♡";


                            missionResult.classList.add(
                                "active"
                            );


                            pickPlanButton.textContent =
                                "PICK AGAIN ✦";

                            pickPlanButton.disabled =
                                false;


                            setTimeout(
                                function () {

                                    missionResult.scrollIntoView({
                                        behavior:
                                            "smooth",
                                        block:
                                            "center"
                                    });

                                },
                                250
                            );

                        }

                    },
                    110
                );

        }
    );

}



/* =====================================================
   PAGE 7 BACK → PAGE 6
   ===================================================== */

if (backSevenButton) {

    backSevenButton.addEventListener(
        "click",
        function () {

            pageSeven.style.display =
                "none";

            pageSix.style.display =
                "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}




/* =====================================================
   START PAGE 7 OBSERVERS
   ===================================================== */

if (pageSeven) {

    observePlanCards();

}

/* =====================================================
   PAGE 8 — THE LAST LITTLE THING
   ===================================================== */

(function () {

    /* -------------------------------------------------
       ELEMENTS
       ------------------------------------------------- */

    const pageSeven = document.getElementById("pageSeven");
    const pageEight = document.getElementById("pageEight");

    const nextSevenButton =
        document.getElementById("nextSevenButton");

    const backEightButton =
        document.getElementById("backEightButton");

    const questionSection =
        document.getElementById("oneLastQuestion");

    const memoryInput =
        document.getElementById("memoryQuestionInput");

    const memoryCounter =
        document.getElementById("memoryQuestionCounter");

    const saveMemoryButton =
        document.getElementById("saveMemoryButton");

    const memoryStatus =
        document.getElementById("memoryQuestionStatus");

    const memorySavedSection =
        document.getElementById("memorySavedSection");

    const continueToLetterButton =
        document.getElementById("continueToLetterButton");

    const specialSayangSection =
        document.getElementById("specialSayangSection");

    const letterIntro =
        document.getElementById("letterIntro");

    const readLetterButton =
        document.getElementById("readLetterButton");

    const endingSection =
        document.getElementById("pageEightEnding");

    const finalLoveButton =
        document.getElementById("finalLoveButton");


    /* -------------------------------------------------
       IMPORTANT:
       PAGE 8 MUST BE HIDDEN WHEN WEBSITE STARTS
       ------------------------------------------------- */

    if (pageEight) {

        pageEight.classList.remove("page-eight-active");

        pageEight.style.display = "none";

    }


    /* -------------------------------------------------
       SMALL HELPER
       ------------------------------------------------- */

    function reveal(element, extraClass) {

        if (!element) return;

        element.classList.add(extraClass || "p8-visible");

    }


    function scrollTopSmooth() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    /* =================================================
       PAGE 7 → PAGE 8
       ================================================= */

    if (nextSevenButton) {

        nextSevenButton.addEventListener("click", function () {

            if (!pageSeven || !pageEight) return;


            /* Hide Page 7 */

            pageSeven.style.display = "none";


            /* Show Page 8 */

            pageEight.style.display = "block";

            pageEight.classList.add("page-eight-active");


            /* Reset Page 8 */

            if (questionSection) {
                questionSection.classList.add("p8-visible");
            }


            if (memorySavedSection) {
                memorySavedSection.classList.remove("p8-show");
                memorySavedSection.classList.remove("p8-visible");
            }


            if (specialSayangSection) {
                specialSayangSection.classList.remove("p8-show");
                specialSayangSection.classList.remove("p8-visible");
            }


            if (letterIntro) {
                letterIntro.classList.remove("p8-show");
                letterIntro.classList.remove("p8-visible");
            }


            if (endingSection) {
                endingSection.classList.remove("p8-show");
                endingSection.classList.remove("p8-visible");
            }


            scrollTopSmooth();

        });

    }


    /* =================================================
       PAGE 8 → PAGE 7
       ================================================= */

    if (backEightButton) {

        backEightButton.addEventListener("click", function () {

            if (!pageSeven || !pageEight) return;


            pageEight.classList.remove("page-eight-active");

            pageEight.style.display = "none";


            pageSeven.style.display = "block";


            scrollTopSmooth();

        });

    }


    /* =================================================
       MEMORY CHARACTER COUNTER
       ================================================= */

    if (memoryInput && memoryCounter) {

        function updateMemoryCounter() {

            memoryCounter.textContent =
                memoryInput.value.length;

        }


        memoryInput.addEventListener(
            "input",
            updateMemoryCounter
        );


        updateMemoryCounter();

    }


    /* =================================================
       SAVE MEMORY
       ================================================= */

    if (saveMemoryButton) {

        saveMemoryButton.addEventListener(
            "click",
            async function () {

                const memory =
                    memoryInput
                        ? memoryInput.value.trim()
                        : "";


                /* Empty */

                if (!memory) {

                    if (memoryStatus) {

                        memoryStatus.textContent =
                            "tulis dulu memory kamu... ♡";

                    }

                    if (memoryInput) {
                        memoryInput.focus();
                    }

                    return;

                }


                /* Too long */

                if (memory.length > 2000) {

                    if (memoryStatus) {

                        memoryStatus.textContent =
                            "memory-nya kepanjangan :3";

                    }

                    return;

                }


                /* Loading */

                saveMemoryButton.disabled = true;

                saveMemoryButton.textContent =
                    "SAVING... ♡";


                if (memoryStatus) {

                    memoryStatus.textContent =
                        "i'll keep this one safe...";

                }


                try {

                    /*
                     * Gunakan Supabase client yang sudah
                     * dibuat di bagian atas file:
                     * const supabaseClient = window.supabase.createClient(...)
                     */

                    if (
                        typeof supabaseClient === "undefined"
                    ) {

                        throw new Error(
                            "Supabase client belum tersedia."
                        );

                    }


                    /* ---------------------------------
                       SAVE TO DATABASE
                       --------------------------------- */

                    const {
                        error
                    } = await supabaseClient
                        .from("anniversary_memories")
                        .insert({

                            memory_text: memory,

                            author: "you",

                            access_code: "21092024"

                        });


                    if (error) {

                        throw error;

                    }


                    /* ---------------------------------
                       SUCCESS
                       --------------------------------- */

                    if (memoryStatus) {

                        memoryStatus.textContent =
                            "saved... and i'm keeping it ♡";

                    }


                    saveMemoryButton.textContent =
                        "SAVED ♡";


                    /*
                     * Hide question after short delay
                     */

                    setTimeout(function () {

                        if (questionSection) {

                            questionSection.style.display =
                                "none";

                        }


                        /*
                         * Show memory saved section
                         */

                        if (memorySavedSection) {

                            memorySavedSection.classList.add(
                                "p8-show"
                            );

                            setTimeout(function () {

                                memorySavedSection.classList.add(
                                    "p8-visible"
                                );

                            }, 80);

                        }


                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });

                    }, 900);


                } catch (error) {

                    console.error(
                        "Page 8 memory error:",
                        error
                    );


                    if (memoryStatus) {

                        memoryStatus.textContent =
                            "hmm... belum tersimpan. coba lagi ya ♡";

                    }


                    saveMemoryButton.disabled =
                        false;

                    saveMemoryButton.textContent =
                        "SAVE MY MEMORY ♡";

                }

            }
        );

    }


    /* =================================================
       MEMORY SAVED → SPECIAL SAYANG
       ================================================= */

    if (continueToLetterButton) {

        continueToLetterButton.addEventListener(
            "click",
            function () {

                if (memorySavedSection) {

                    memorySavedSection.classList.remove(
                        "p8-visible"
                    );

                }


                setTimeout(function () {

                    if (memorySavedSection) {

                        memorySavedSection.style.display =
                            "none";

                    }


                    if (specialSayangSection) {

                        specialSayangSection.classList.add(
                            "p8-show"
                        );


                        setTimeout(function () {

                            specialSayangSection.classList.add(
                                "p8-visible"
                            );

                        }, 80);

                    }


                    /*
                     * Show READ MY LETTER button
                     */

                    if (letterIntro) {

                        letterIntro.classList.add(
                            "p8-show"
                        );

                        setTimeout(function () {

                            letterIntro.classList.add(
                                "p8-visible"
                            );

                        }, 80);

                    }


                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }, 500);

            }
        );

    }


    /* =================================================
       READ MY LETTER
       ================================================= */

    if (readLetterButton) {

        readLetterButton.addEventListener(
            "click",
            function () {

                if (specialSayangSection) {

                    specialSayangSection.classList.remove(
                        "p8-visible"
                    );

                }


                if (letterIntro) {

                    letterIntro.classList.remove(
                        "p8-visible"
                    );

                }


                setTimeout(function () {

                    if (specialSayangSection) {

                        specialSayangSection.style.display =
                            "none";

                    }


                    if (letterIntro) {

                        letterIntro.style.display =
                            "none";

                    }


                    if (endingSection) {

                        endingSection.classList.add(
                            "p8-show"
                        );


                        setTimeout(function () {

                            endingSection.classList.add(
                                "p8-visible"
                            );

                        }, 100);

                    }


                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }, 450);

            }
        );

    }


    /* =================================================
       FINAL LOVE BUTTON
       ================================================= */

    if (finalLoveButton) {

        finalLoveButton.addEventListener(
            "click",
            function () {

                finalLoveButton.textContent =
                    "I LOVE YOUUU ♡";


                finalLoveButton.style.transform =
                    "scale(1.08)";


                setTimeout(function () {

                    finalLoveButton.style.transform =
                        "scale(1)";

                }, 300);

            }
        );

    }


})();