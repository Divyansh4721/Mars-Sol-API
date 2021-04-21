$('#getimage').click(function () {
  console.log(2);
  if($("#sol").val()>1000){
    alert('sol is greter than 1000');
  }
  else{
    let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+$("#sol").val()+"&page="+$("#page").val()+"&api_key=v1lEm9QgFvOVlwHKW5xQCnWXxDzwFWDAa6tkZh7B";
    let body='<div id="back"><input id="sol" placeholder="Enter sol (max. 1000)"><input id="page" placeholder="Enter page number to display"><div id="button"><span id="getimage">Get Images</span></div></div>';
    $('body')[0].innerHTML=body;
    console.log(1);
    $.get(url,function(coding){
      for (let i = 0; i < coding.photos.length; i++) {
        $('body').append('<img src="'+coding.photos[i].img_src+'" id="image1">');
      }
      if(coding.photos.length==0){
        alert("No photos on this page.");
      }
    });
  }
});
