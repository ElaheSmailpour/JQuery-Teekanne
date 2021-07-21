// 1: Popup anzeigen:

// alternative 1:
$("input.submit").click(() => $("div.modal").show());

// alternative 2:
$("input[type='submit']").click(function(){    
    $('.modal').css('display','block');  
})

// alternative 3
$('.submit.m-2').click(displayBloco);

function displayBloco (){    
    $('.modal').css('display','block');
}

// 1: Popup schließen auf X:

// alternative 1: 
$("span.modal-close").click(() => $("div.modal").hide());

// alternative 2: 
function hideModal() {  
    $('.modal').hide();
}
$('.modal-close').click(hideModal);

// Schließen beim Klick auf dem Fenster:
$(window).click(hideModalWindow);

function hideModalWindow(event) {  
    if ($(event.target).is($(".modal"))) {    
        hideModal();  
    }
}



//andere löusung für popup
$(".submit").click(popup);
function popup(){
   
    $('.modal').css("display","block");
}
$(".modal-content").click(popupclose);
function popupclose(){
   
 $('.modal').hide();
}

// Aufgabe 2: 
// Teekanne drehen
$('.image.teapot').click(drehen);
function drehen(){  
    if( $('.image.teapot').hasClass('teapot-rotate')){    
        $('.image.teapot').removeClass('teapot-rotate')  
    } else {    
        $('.image.teapot').addClass('teapot-rotate')  
    }        
}
// // Alternative 2:
$( ".image" ).click(function() {  
    $( this ).toggleClass( "teapot-rotate" );
})

$(".image ").click(drehen);

function drehen(){    
    $('.image').toggleClass('teapot-rotate ');
};

// Aufgabe 3: 
// alternative 1:

let tea_phrases = [
    "Great tea for a cold night",
    "Rich in flavours",
    "lecker lecker lecker",
    "pures Lebenselixir",
    "Nektar der Götter"
];

$("section.selection__option > p.tea-desc").hover((event) => event.target.innerText = tea_phrases[Math.floor(Math.random() * tea_phrases.length)])

// Alternative 2
$('.tea-desc').hover(function(){  
    const arr = ['Great tea for a cold night',"Rich in flavours","tea is energy","tea gives life"];  
    const randomElement = arr[Math.floor(Math.random() * arr.length)];    
    $(this).text(randomElement)
})


// Alternative 3:
 let teeAuswahl = $('.tea-desc').toArray()

 teeAuswahl.forEach(p => {
     let alterText = p.innerText;
    $(p).mouseenter(()=>{
        $(p).text(tea_phrases[Math.floor(Math.random() * tea_phrases.length)])
        })
    $(p).mouseleave(()=> {
        $(p).text(alterText)
    })
 })








