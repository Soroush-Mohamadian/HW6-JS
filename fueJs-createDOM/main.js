FueJS.makeStyle(`
  
@font-face {
    font-family: Shabnam;
    src: url('./Assets//Fonts/Shabnam.eot');
    src: url('./Assets//Fonts/Shabnam.woff') format('woff'),
         url('./Assets/Fonts/Shabnam.ttf') format('truetype');
    font-weight: normal;
}
  
@font-face {
    font-family: Comfortaa;
    src: url('Comfortaa-Regular');
    src: url('./Assets/Fonts/Comfortaa-Regular.ttf') format('truetype');
    font-weight: normal;
}


body{
    display: flex;
    flex-direction: row;
    margin: 0;

}

#root{
    display: flex;
    flex-direction: row-reverse;
    width: 100vw;
    height: 100vh;
}



@media screen and (min-width: 500px) { 
    
    body {
        height: 100vh;
        display: flex;
        flex-direction: row-reverse;
        margin: 0;
        padding: 0;
    }
    
     /* RIGHT SIDE */    
    
     .rightPanel {
        width: 48%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 0%;
        align-items: center;
        font-family: 'Shabnam';
        direction: rtl;
        min-width: 30%;
    }

    .box {
        
        width: 60%;
        height: 70%;
        padding: 20px;
    }
    .box div {
        margin: 10px 0px;
    }
    
    
    .text1 {
        font-weight: bold;
        font-size: 20px;
        color: rgb(0, 136, 221);
        margin-bottom: 80px !important;
    }
    
    /* Input box */
    
    .input-box {
        display: flex;
        justify-content: flex-end;
        color: rgb(194, 194, 194);
    }
    input {
        font-size: 18px;
        padding-bottom: 10px;
        font-family: 'Shabnam';
        border: transparent;
        background: transparent;
        border-bottom: 1px rgb(194, 194, 194) solid;
        outline: none;
        padding-right: .5vw;
    }

    #securityCode{
        margin-left: 40%
    }

    #keyIcon{
        padding-left: 11.5%
    }
    
    input::placeholder {
        color: rgb(194, 194, 194);
    }
    
    
    
    .input {
        margin: 1rem 0;
        width: 100%;
    }
    .icon {
        position: absolute;
        align-self: center;
        font-size: 1.5rem !important;
    }
    
    .button {
        box-shadow: 0 2px 2px 1px rgba(194, 194, 194, .8);
        width: 100%;
        color: white;
        font-size: 20px;
        font-family: 'Shabnam';
        background-color: #0093ED;
        border-color: transparent;
        border-radius: 8px;
        height: 60px;
        margin: 2vh 0vw;
    }

    .button:hover{
        background-color: rgb(0, 136, 221)
    }
  

    
    
    /* Left side */
    .animated {
        display: flex;
        justify-content: center;
        align-items: center;
        height: inherit;
        width:52%;
        background: rgb(40,187,238);
        background: linear-gradient(45deg, rgb(40, 159, 238) 10%, rgba(152,240,218,1) 86%);
    }
    
    /* Radar effect */
    .radar {
        position: absolute;
        height: inherit;
        width: inherit;
        overflow: hidden;
    }
    
    .radar img {
        position: relative;
        height: inherit;
        top: 50%;
        left: 50%;
        opacity: .4;
        transform-origin: 0% 0%;
        animation: clockwise 10s linear infinite ;
    }
    
    .footer-message {
        position: fixed;
        align-self: flex-end;
        justify-self: center;
        font-family: 'Comfortaa';
        color: white;
    }
    
    @keyframes clockwise {
        from { transform: rotate(0deg);     }
        to   { transform: rotate(360deg);    }
    }
    
    
    /* Faded rings effect */
    

    
        
    }
    
    @keyframes pulse {
        from {
            transform: scale(0);
            opacity: .2;
        } to { 
            transform: scale(1);
            opacity: 0;
        }
    } 
    
    .ring1 {
        position: absolute;
        overflow: hidden;
        width: inherit;
        height: inherit;
        background-color: white;
        border-radius: 100%;
        border-color: transparent;
        animation: pulse 7s linear infinite;
        animation-delay: .6s;
        animation-timing-function: ease;
        
    }
    
    .ring2 {
        position: absolute;
        width: inherit;
        height: inherit;
        background-color: white;
        border-radius: 100%;
        border-color: transparent;
        animation: pulse 7s linear infinite;
        animation-delay: 1.2s;
        animation-timing-function: ease;

    }
    
    .ring3 {
        position: absolute;
        width: inherit;
        height: inherit;
        background-color: white;
        border-radius: 100%;
        border-color: transparent;
        animation: pulse 7s linear infinite;
        animation-delay: 1.8s;
        animation-timing-function: ease;
    }
    
    .ring4 {
        position: absolute;
        width: inherit;
        height: inherit;
        background-color: white;
        border-radius: 100%;
        border-color: transparent;
        animation: pulse 7s linear infinite;
        animation-delay: 2.4s;
        animation-timing-function: ease;
        
    }

    .ring5 {
        position: absolute;
        width: inherit;
        height: inherit;
        background-color: white;
        border-radius: 100%;
        border-color: transparent;
        animation: pulse 7s linear infinite;
        animation-delay: 3s;
        animation-timing-function: ease;
        
    }
    
    .ring6 {
        position: absolute;
        width: inherit;
        height: inherit;
        background-color: white;
        border-radius: 100%;
        border-color: transparent;
        animation: pulse 7s linear infinite;
        animation-delay: 3.6s;
        animation-timing-function: ease;
        
    }
        
    .ring7 {
        position: absolute;
        width: inherit;
        height: inherit;
        background-color: white;
        border-radius: 100%;
        border-color: transparent;
        animation: pulse 7s linear infinite;
        animation-delay: 4.2s;
        animation-timing-function: ease;
        
    }


`)

document.getElementById('root').append(
    FueJS.createElement("div",
        { className: 'rightPanel' },
        [
            FueJS.createElement("div", { className: 'box' }, [

                FueJS.createElement("div", { className: 'text1' }, [
                    FueJS.createElement("p", null, 'ورود')
                ]),
                FueJS.createElement("p", {
                    style: {
                        fontWeight: '700',
                        fontSize: '30px'
                    }
                }, 'ورود به حساب کاربری'),

                FueJS.createElement("p", {
                    style: {
                        fontWeight: 'lighter',
                        fontSize: '16px ',
                        color: '#9E9E9E',
                        marginTop: '-10px',
                    }
                }, 'جهت ورود به برنامه نام کاربری و رمز عبور را وارد کنید'),

                FueJS.createElement("div", { className: 'inputs' }, [
                    FueJS.createElement("div", { className: 'input-box' }, [
                        FueJS.createElement("input", {
                            className: 'input',
                            type: 'text',
                            placeholder: 'نام کاربری'
                        }),

                        FueJS.createElement("i", { className: 'fa fa-user icon' })
                    ]),

                    FueJS.createElement("div", { className: 'input-box' }, [
                        FueJS.createElement("input", {
                            className: 'input',
                            type: 'text',
                            placeholder: 'رمز عبور'
                        }),
                        FueJS.createElement("i", { className: 'fa fa-lock icon' })
                    ]),
                    FueJS.createElement("div", { className: 'input-box' }, [
                        FueJS.createElement("input", {

                            className: 'input',
                            type: 'text',
                            placeholder: 'کد امنیتی',
                            style: {
                                width: '60%',

                            },
                            id:'securityCode'
                        }),
                        FueJS.createElement("i", { className: 'fa fa-key icon',id:'keyIcon' })
                    ]),
                ]), //inputs
                FueJS.createElement("button", { className: 'button' }, 'ورود'),
                FueJS.createElement("div", { className: 'label' }, [
                    FueJS.createElement("label", { style: { fontSize: '13px' } }, [
                        FueJS.createElement("input",
                            {
                                type: 'checkbox',
                                style: { display: 'inline' },
                            }),
                        'مرا به خاطر بسپار'])
                ]), //label

            ]), //box
        ]), // right panel
    FueJS.createElement("div", { className: 'animated' }, [
        FueJS.createElement("div", { className: 'ring1' }),
        FueJS.createElement("div", { className: 'ring2' }),
        FueJS.createElement("div", { className: 'ring3' }),
        FueJS.createElement("div", { className: 'ring4' }),
        FueJS.createElement("div", { className: 'ring5' }),
        FueJS.createElement("div", { className: 'ring6' }),
        FueJS.createElement("div", { className: 'ring7' }),
        FueJS.createElement("div", { className: 'radar' }, [
            FueJS.createElement("img", { src: './Assets/PNG/radar-angle.png', alt: 'radar' })
        ]),
        FueJS.createElement("div", { className: 'logo' }, [
            FueJS.createElement("img", { src: './Assets/PNG/Logo.png', alt: 'Antivirus logo' })
        ]),
        FueJS.createElement("div", { className: 'footer-message' }, [
            FueJS.createElement("p", null, 'Multi Anti-Virus & Cybersecurities')
        ]),
    ]) //animated

)//main append