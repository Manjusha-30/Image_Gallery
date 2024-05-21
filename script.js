function enlargeImage(imageUrl){
    var enlargedImage=document.getElementById("enlarged-image");
    var img=document.getElementById("enlarged-img");
    img.src=imageUrl;
    enlargedImage.style.display="flex";
}

var enlargedImage = document.getElementById("enlarged-image");
enlargedImage.addEventListener("click",function(){
    this.style.display="none";
});