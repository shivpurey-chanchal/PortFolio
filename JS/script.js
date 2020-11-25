function toggle(target) {
  let information = document.getElementsByClassName("information");
  let targ = document.getElementById(target);
  var isVis = targ.style.display == "block";

  for (let i = 0; i < information.length; i++) {
    const element = information[i];
    information[i].style.display = "none";
  }
  targ.style.display = isVis ? "none" : "block";
  return false;
}
