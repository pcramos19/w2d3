let superMario = {
  life: 100,
  posX: 0,
  posY: 0,
  moveRight: function() {
    this.posX+=20;

    if (this.posX > 500) {
        this.posX = 0
    }
  } // this == obj
};



let marioDOMEl = document.createElement("div")
marioDOMEl.className = "mario"
document.body.appendChild(marioDOMEl)

window.onkeydown = function (e) {
    debugger
    if (e.keyCode === 39) {
        superMario.moveRight();

        marioDOMEl.style.left = `${superMario.posX}px`
    }
}

