<footer>

    <div class="left-footer desktop-view">
        <h1 class="logo"><img src="./intentio-logo.svg" alt="intentio-logo"></h1>
        <div class="copyright">© 2022 Intentio. All Rights Reserved.</div>
    </div>
    <div class="right-footer">
        <div class="information">
            <div id="one-liner">
                <!-- <p class="footer-text">Made with</p>
                <img src="./icons/cafe.svg" class="cafe" alt="cafe icon">
                <p class="footer-text">and a hint of procrastination by <span class="rainbow">Gil</span></p> -->
                <p>Made with ☕ and a hint of procrastination by <span class="rainbow">Gil</span></p>
            </div>
            <p></p>
            <p class="second-p">Have suggestions, comments, or questions? Reach out!</p>
        </div>
        &nbsp;
        <div class="socials">
            <img src="./icons/logo-linkedin.svg" alt="linkedin logo">
            <!-- <img src="./icons/logo-behance.svg" alt="behance logo"> -->
            <img src="./icons/mail.svg" alt="mail icon">
        </div>
    </div> 
    <div class="left-footer mobile-view">
        <h1 class="logo"><img src="./intentio-logo.svg" alt="intentio-logo"></h1>
        <div class="copyright">© 2022 Intentio. All Rights Reserved.</div>
    </div>
</footer>

<style lang="scss">

    footer {
        margin-inline: auto;
        padding-bottom: 40px;
        padding-top: 36px;
		padding-inline: 40px;
        max-width: 948px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        margin-top: 0;
        padding-top: 0.2rem;
    } 

    img {
        max-width: 147px;
    }

    .copyright {
        // Sofia Pro Regular
        font-family: 'Sofia Pro', "Satoshi", sans-serif;
        font-size: 0.9rem;
        font-weight: 500;
        color: #8A826F;
        display: inline-block;
        margin-bottom: 12px;
    }

    .right-footer {

        p {
            // Sofia Pro Regular
            font-family: 'Sofia Pro', "Satoshi", sans-serif;
            font-size: 0.9rem;
            font-weight: 500;
            margin:0;
            text-align: end;
        }

        .second-p {
            margin-top: 0.5rem;
        }

        .information {
            line-height: 1rem;

            #one-liner {
                display: flex;
                align-items: center;
                gap: 4px;
                justify-content: end;
            }
        }

        .socials {
            display: flex;
            gap: 16px;
            align-items: center;
            justify-content: end;

            img {
                width: 24px;
                height: 24px;
            }
        }
    }
    
    // .cafe {
    //     width: 20px;
    //     height: 20px;
    // }

    .mobile-view {
        display: none;
    }

    .rainbow {
        animation: color-change 5s infinite;
        font-weight: bold;
    }

    @keyframes color-change {
        0% {color:#9A6547;}
        25% {color: #30bd6f}
        50% {color: #8C64FF;}
        75% {color: #BE4949}
        100% {color:#9A6547;}
    }

    @media screen and (max-width: 730px) {

        footer {
            display: block;
            margin-inline: auto;
            padding-bottom: 40px;
            padding-top: 3rem;
            padding-inline: 40px;
            max-width: 948px;
            justify-content: center;
            text-align: center;
        }

        img {
            max-width: 147px;
        }

        .copyright {
            // Sofia Pro Regular
            font-family: 'Sofia Pro', "Satoshi", sans-serif;
            font-size: 1rem;
            font-weight: 500;
            color: #8A826F;
            display: inline-block;
            margin-top: auto;
        }

        .desktop-view {
            display: none;
        }

        .mobile-view {
            margin-top: 3rem;
            display: block;
        }

        .right-footer {

            p {
                text-align: center;
                font-size: 1rem;
            }

            .second-p {
                margin-top: 0.8rem;
            }

            .information {
                line-height: 1.7rem;

                #one-liner {
                    justify-content: center;
                }
            }
            

            .socials {
                margin-top: 0.5rem;
                gap: 1.5rem;
                justify-content: center;
                align-items: center;

                img {
                    width: 2rem;
                    height: 2rem;
                }
            }
        }
    }

</style>