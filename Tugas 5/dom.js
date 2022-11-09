function hapusGambar(id) {
  const hapus = document.getElementById(id);
  hapus.remove();
  const count = document.getElementById("basket").children.length - 1;
  document.getElementById("count").innerHTML = count;

}

function deleteAndAdd(id, src) {
  const image = document.createElement("img");
  image.setAttribute("id", "img1");
  image.setAttribute("onclick", "hapusGambar(id)");
  image.src = `${src}`;
  document.getElementById("basket").appendChild(image);
  const count = document.getElementById("basket").children.length - 1;
  document.getElementById("count").innerHTML = count;

}

function start()
{
  var inputColor = prompt("Input your background color");
  document.body.setAttribute("style","background-color: "+ inputColor);
}

function start2()
{
  var inputColor = prompt("Input your text color");
  document.getElementById("text1").setAttribute("style","color: "+ inputColor);
}



