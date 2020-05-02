FueJS.makeStyle(`
  
@font-face {
    fontFamily: 'Comfortaa',
    src: 'url(Comfortaa-Regular)',
    src: 'url(./Assets/Fonts/Comfortaa-Regular.ttf) format(truetype)',
    fontWeight: 'normal',
}


body{
    display: 'flex',
    flexDirection: 'row',
    margin: '0',

}



@media screen and (min-width: 769px) { 
    
    body {
        height: '100vh',
        display: 'flex',
        flexDirection: 'row-reverse',
        margin: '0',
        padding: '0',
    }
    
     /* RIGHT SIDE */    
    
     .rightPanel {
        width: '48%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '0%',
        alignItems: 'center',
        fontFamily: 'Shabnam',
        direction: 'rtl',
        minWidth: '30%',
    }

    .box {
        
        width: '60%',
        height: '70%',
        padding: '20px',
    }
    .box div {
        margin: '10px 0px',
    }
    
    
    .text1 {
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'rgb(0, 136, 221)',
        marginBottom: '80px !important',
    }
    
    /* Input box */
    
    .input-box {
        display: 'flex',
        justifyContent: 'flex-end',
        color: 'rgb(194, 194, 194)',
    }
    input {
        fontSize: '18px',
        paddingBottom: '10px',
        fontFamily: 'Shabnam',
        border: 'transparent',
        background: 'transparent',
        borderBottom: '1px rgb(194, 194, 194) solid',
       
    }
    
    input::placeholder {
        color: 'rgb(194, 194, 194)',
    }
    
    
    
    .input {
        margin: '1rem 0',
        width: '100%',
    }
    .icon {
        position: 'absolute',
        alignSelf: 'center',
        fontSize: '1.5rem !important',
    }
    
    .button {
        boxShadow: '0 2px 2px 1px rgba(194, 194, 194, .8)',
        width: '100%',
        color: 'white',
        fontSize: '20px',
        fontFamily: 'Shabnam',
        backgroundColor: '#0093ED',
        borderColor: 'transparent',
        borderRadius: '8px',
        height: '60px',
    }

    .button:hover{
        background-color: rgb(0, 136, 221)
    }
  

    
    
    /* Left side */
    .animated {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'inherit',
        width: '52%',
        background: 'rgb(40,187,238)',
        background: 'linear-gradient(45deg, rgb(40, 159, 238) 10%, rgba(152,240,218,1) 86%)',
    }
    
    /* Radar effect */
    .radar {
        position: 'absolute',
        height: 'inherit',
        width: 'inherit',
        overflow: 'hidden',
    }
    
    .radar img {
        position: 'relative',
        height: 'inherit',
        top: '50%',
        left: '50%',
        opacity: '.4',
        transformOrigin: '0% 0%',
        animation: 'clockwise 10s linear infinite ',
    }
    
    .footer-message {
        position: 'fixed',
        alignSelf: 'flex-end',
        justifySelf: 'center',
        fontFamily: 'Comfortaa',
        color: 'white',
    }
    
    @keyframes clockwise {
        from { transform: 'rotate(0deg)     }',
        to   { transform: 'rotate(360deg)    }',
    }
    
    
    /* Faded rings effect */
    

    
        
    }
    
    @keyframes pulse {
        from {
            transform: 'scale(0)',
            opacity: '.2',
        } to { 
            transform: 'scale(1)',
            opacity: '0',
        }
    } 
    
    .ring1 {
        position: 'absolute',
        overflow: 'hidden',
        width: 'inherit',
        height: 'inherit',
        backgroundColor: 'white',
        borderRadius: '100%',
        borderColor: 'transparent',
        animation: 'pulse 7s linear infinite',
        animationDelay: '.6s',
        animationTimingFunction: 'ease',
        
    }
    
    .ring2 {
        position: 'absolute',
        width: 'inherit',
        height: 'inherit',
        backgroundColor: 'white',
        borderRadius: '100%',
        borderColor: 'transparent',
        animation: 'pulse 7s linear infinite',
        animationDelay: '1.2s',
        animationTimingFunction: 'ease',

    }
    
    .ring3 {
        position: 'absolute',
        width: 'inherit',
        height: 'inherit',
        backgroundColor: 'white',
        borderRadius: '100%',
        borderColor: 'transparent',
        animation: 'pulse 7s linear infinite',
        animationDelay: '1.8s',
        animationTimingFunction: 'ease',
    }
    
    .ring4 {
        position: 'absolute',
        width: 'inherit',
        height: 'inherit',
        backgroundColor: 'white',
        borderRadius: '100%',
        borderColor: 'transparent',
        animation: 'pulse 7s linear infinite',
        animationDelay: '2.4s',
        animationTimingFunction: 'ease',
        
    }

    .ring5 {
        position: 'absolute',
        width: 'inherit',
        height: 'inherit',
        backgroundColor: 'white',
        borderRadius: '100%',
        borderColor: 'transparent',
        animation: 'pulse 7s linear infinite',
        animationDelay: '3s',
        animationTimingFunction: 'ease',
        
    }
    
    .ring6 {
        position: 'absolute',
        width: 'inherit',
        height: 'inherit',
        backgroundColor: 'white',
        borderRadius: '100%',
        borderColor: 'transparent',
        animation: 'pulse 7s linear infinite',
        animationDelay: '3.6s',
        animationTimingFunction: 'ease',
        
    }
        
    .ring7 {
        position: 'absolute',
        width: 'inherit',
        height: 'inherit',
        backgroundColor: 'white',
        borderRadius: '100%',
        borderColor: 'transparent',
        animation: 'pulse 7s linear infinite',
        animationDelay: '4.2s',
        animationTimingFunction: 'ease',
        
    }

    
    
   
`)

document.getElementById('root').append(
    FueJS.createElement("div",
        { className: 'rightPanel' },
        [
            FueJS.createElement("div", {className:'box'},[

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
                }, 'جهت ورود به برنامه نام کاربری و رمز عبور را وارد کنید به حساب کاربری'),

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
                            placeholder: 'رمز عبور',
                            style: {
                                width: '60%'
                            }
                        }),
                        FueJS.createElement("i", { className: 'fa fa-lock icon' })
                    ]),
                ]), //inputs
                FueJS.createElement("button",{className:'button'},'ورود'),
                FueJS.createElement("div",{className:'label'},[
                    FueJS.createElement("label",{style:'fontSize: 13px'},[
                        FueJS.createElement("input",
                            {
                            type:'checkbox',
                            style: 'display: inline' 
                            },
                            'مرا به خاطر بسپار')
                    ]),
                ]), //label

            ]), //box
    ]), // right panel
    FueJS.createElement("div", {className:'animated'},[
        FueJS.createElement("div", {className:'ring1'}),
        FueJS.createElement("div", {className:'ring2'}),
        FueJS.createElement("div", {className:'ring3'}),
        FueJS.createElement("div", {className:'ring4'}),
        FueJS.createElement("div", {className:'ring5'}),
        FueJS.createElement("div", {className:'ring6'}),
        FueJS.createElement("div", {className:'ring7'}),
        FueJS.createElement("div", {className:'radar'},[
            FueJS.createElement("img", {scr:'./Assets/PNG/radar-angle.png', alt:''} )
        ]),
        FueJS.createElement("div", {className:'logo'},[
            FueJS.createElement("img", {scr:'./Assets/PNG/Logo.png', alt:'Antivirus logo'} )
        ]),
        FueJS.createElement("div", {className:'footer-message'},[
            FueJS.createElement("p",null, 'Multi Anti-Virus & Cybersecurities' )
        ]),
    ]) //animated

)//main append