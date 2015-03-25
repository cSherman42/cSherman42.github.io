var image = null;
window.onload = function() {
        console.log("function initialized");
        image = document.getElementById("meme");
        image.src = "http://ts1.mm.bing.net/th?        &id=HN.608049129170994523&w=300&h=300&c=0&pid=1.9&rs=0&p=0&url=http%3A%2F%2Fwww.rlsgame.org%2Fpc%2F1-pc%2F1986-shrek-forever-after-vitality.html";
        
        
    
}

function myFunk(){
if(image.src.match("forever")) {
            console.log("regex works");
            image.src = "http://ts1.mm.bing.net/th?id=HN.608037279357207284&pid=15.1";
        }
        else {
            image.src = "http://ts1.mm.bing.net/th?        &id=HN.608049129170994523&w=300&h=300&c=0&pid=1.9&rs=0&p=0&url=http%3A%2F%2Fwww.rlsgame.org%2Fpc%2F1-pc%2F1986-shrek-forever-after-vitality.html";
        }
}