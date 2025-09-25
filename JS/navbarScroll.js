var prevScroll = window.scrollY;

window.onscroll = function() 
{
  var currentScroll = window.scrollY;

  if(prevScroll > currentScroll)
  {
    document.getElementById("navigationBar").style.top = "0";
  } 
  else 
  {
    document.getElementById("navigationBar").style.top = "-300px";
  }

  prevScroll = currentScroll;
}