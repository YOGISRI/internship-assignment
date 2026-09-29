document.addEventListener("DOMContentLoaded", function () {

    /*
    ================================================
    MOBILE MENU
    ================================================
    */

    const mobileButton =
        document.getElementById("mobileButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    const mobileClose =
        document.getElementById("mobileClose");


    if (mobileButton && mobileMenu) {

        mobileButton.addEventListener("click", function () {

            mobileMenu.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    }


    if (mobileClose && mobileMenu) {

        mobileClose.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

            document.body.style.overflow = "";

        });

    }


    /*
    Close mobile menu when
    a menu link is clicked.
    */

    const mobileLinks =
        document.querySelectorAll(
            ".mobile-menu a"
        );


    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("active");

            document.body.style.overflow = "";

        });

    });


    /*
    ================================================
    CLOSE MOBILE MENU WITH ESCAPE
    ================================================
    */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            if (mobileMenu) {

                mobileMenu.classList.remove("active");

                document.body.style.overflow = "";

            }

        }

    });


    /*
    ================================================
    DROPDOWN NAVIGATION
    ================================================
    */

    const dropdownButtons =
        document.querySelectorAll(
            ".nav-dropdown > button"
        );


    dropdownButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const parent =
                button.parentElement;

            const dropdown =
                parent.querySelector(
                    ".dropdown-menu"
                );


            /*
            Close all other dropdowns.
            */

            document
                .querySelectorAll(".dropdown-menu.open")
                .forEach(function (menu) {

                    if (menu !== dropdown) {

                        menu.classList.remove("open");

                    }

                });


            /*
            Toggle selected dropdown.
            */

            if (dropdown) {

                dropdown.classList.toggle("open");

            }

        });

    });


    /*
    ================================================
    CLOSE DROPDOWN WHEN CLICKING OUTSIDE
    ================================================
    */

    document.addEventListener("click", function (event) {

        if (
            !event.target.closest(".nav-dropdown")
        ) {

            document
                .querySelectorAll(".dropdown-menu.open")
                .forEach(function (menu) {

                    menu.classList.remove("open");

                });

        }

    });


    /*
    ================================================
    SMOOTH SCROLL
    ================================================
    */

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(targetId);


            if (!target) {

                return;

            }


            event.preventDefault();


            const header =
                document.querySelector(".header");


            const headerHeight =
                header
                    ? header.offsetHeight
                    : 0;


            const position =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;


            window.scrollTo({

                top: position,

                behavior: "smooth"

            });

        });

    });

});