function background(){
  var inputColor=prompt("Enter Background Color");
  document.body.setAttribute("style","background-color: "+ inputColor);
}
function text(){
  var textColor = prompt("Enter Text Color");
  document.getElementById("text1").setAttribute("style","color: "+textColor);
}

  function hapus(id) {
    const hapus = document.getElementById(id);
    hapus.remove();
    const count = document.getElementById("basket").children.length - 1;
    document.getElementById("count").innerHTML = count;
  }
  
  function deleteAndAdd(id, src) {
    const count = document.getElementById("basket").children.length - 0;
    const image = document.createElement("img");
    image.setAttribute("id", count);
    image.setAttribute("onclick", "hapus(id)");
    image.src = `${src}`;
    document.getElementById("basket").appendChild(image);
    document.getElementById("count").innerHTML = count;
  }
