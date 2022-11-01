$(document).ready(function(){

  function randImg(){
    let min=1;
    let max=6;
    let selection = Math.floor(Math.random()*(max-min+1))+min;
    let img = "../resources/catpics/" + selection + ".png";
    return img;
  }

  $(".catbtn").click(function(){
     fileName = randImg();

    $(".secretimg").hide();
    $(".secretimg").attr("src", fileName);
    $(".secretimg").css("top", (Math.random() * 100) + "%");
    $(".secretimg").css("left", (Math.random() * 100) + "%");
    $(".secretimg").show();

  });

  $(".res_table > tbody > tr > td").hover(function(){
    $(this).css("background","var(--pink2)");
  },

function(){
 $(this).css("background", "");

}
);


});
