function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) { }
}

function showGroup(showIdName, hideIdName) {
  document.getElementById(hideIdName).parentNode.classList.toggle('hidden')
  document.getElementById(showIdName).parentNode.classList.toggle('hidden')

}

function changeCoin(showIdName, hideIdName) {

}

function randomCoin() {
  min = Math.ceil(0);
  max = Math.floor(1);
  result = Math.floor(Math.random() * (max - min + 1)) + min
  if (result == 1) {
    document.getElementById("resultCoin").src = "../../images/500_앞.png"
  }
  else {
    document.getElementById("resultCoin").src = "../../images/500_뒤.png"
  }
  console.log("result : " + result);

}