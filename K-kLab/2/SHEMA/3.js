$(document).ready(function(){

    setTimeout(function(){
        $('body').hide().fadeIn(1000);
        $('link[rel=stylesheet]').remove();
        $('head').append('<link rel="stylesheet" href="22.css">');
        $('head').append('<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css"/>');      
    }, 2750);

    setTimeout(function(){
        AOS.refresh();        
    }, 3000);


    // hover effect on windows
    function listenHoverPicture(){
    $(".project-image").on("mouseover", function(){
        $(this).parent().find('.links').css('opacity', '1');
        $(this).parent().find('img').css('mix-blend-mode', 'overlay');
    });

    $(".project-image").on("mouseleave", function(){
        $(this).parent().find('.links').css('opacity', '0');
        $(this).parent().find('img').css('mix-blend-mode', 'normal');
    });

    $(".links").on("mouseover", function(){
        $(this).parent().find('.links').css('opacity', '1');
        $(this).parent().find('img').css('mix-blend-mode', 'overlay');
    });

    $(".links").on("mouseleave", function(){
        $(this).parent().find('img').css('mix-blend-mode', 'normal');
    });
    }

    listenHoverPicture();

    $(window).on('resize', function(){
        if($(window).width() < 1200){
        $(".links").unbind()
        $(".project-image").unbind();
        $(".links").css('opacity', '1');
        $(".project-image").css('mix-blend-mode', 'normal');
        }
        else{
            $(".links").css('opacity', '0');
            listenHoverPicture();
        }
    });


    // invalid form check
    function validField(fieldId, fieldType, eventType){
        let field = $(`#${fieldId}`).val();
        if(fieldId !== 'email'){
            if(field.length === 0){
                $(`.${fieldId}`).find(`${fieldType}`).removeClass("valid");
                if(eventType === "submit"){
                    $(`.${fieldId}`).find("p").css("opacity","1");
                    $(`.${fieldId}`).find(".invalid-icon").css("opacity","1");
                    $(`.${fieldId}`).find(`${fieldType}`).addClass("invalid");
                }                
            }
            else{
                $(`.${fieldId}`).find("p").css("opacity","0");
                $(`.${fieldId}`).find(".invalid-icon").css("opacity","0");
                $(`.${fieldId}`).find(`${fieldType}`).removeClass("invalid");
                $(`.${fieldId}`).find(`${fieldType}`).addClass("valid");
            }
        }
        else{
            let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            if(field.length === 0){
                $(`.${fieldId}`).find(`${fieldType}`).removeClass("valid");
                $(`.${fieldId}`).find(`${fieldType}`).removeClass("invalid");
                $(`.${fieldId}`).find("p").css("opacity","0");
                $(`.${fieldId}`).find(".invalid-icon").css("opacity","0");
                if(eventType === "submit"){
                    $(`.${fieldId}`).find("p").css("opacity","1");
                    $(`.${fieldId}`).find(".invalid-icon").css("opacity","1");
                    $(`.${fieldId}`).find(`${fieldType}`).addClass("invalid");
                }                
            }
            else{
                if(!field.match(emailRegex)){
                    $(`.${fieldId}`).find(`${fieldType}`).removeClass("valid");
                    $(`.${fieldId}`).find("p").css("opacity","1");
                    $(`.${fieldId}`).find(".invalid-icon").css("opacity","1");
                    $(`.${fieldId}`).find(`${fieldType}`).addClass("invalid");
                }
                else{
                    $(`.${fieldId}`).find("p").css("opacity","0");
                    $(`.${fieldId}`).find(".invalid-icon").css("opacity","0");
                    $(`.${fieldId}`).find(`${fieldType}`).removeClass("invalid");
                    $(`.${fieldId}`).find(`${fieldType}`).addClass("valid");
                }
            }
        }
    }

    // invalid form on click
    $(".submit").click(function (){
        validField("name", "input", "submit");
        validField("email", "input", "submit");
        validField("message", "textarea", "submit");
    });

    $("#name").on('keyup',function (){
        validField("name", "input", "input");
    });

    $("#email").on('keyup',function (){
        validField("email", "input", "input");
    });

    $("#message").on('keyup',function (){
        validField("message", "textarea", "input");
    });

    
});