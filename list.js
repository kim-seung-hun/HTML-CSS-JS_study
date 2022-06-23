let Gnb = (function () {
  function Gnb(li) {
    this.init(li);
  }
  Gnb.prototype.init = function (li) {
    if (gnb === "" || gnb === null) {
      return;
    }

    let ul = document.createElement("ul");

    gnb.appendChild(ul);

    for (let i = 0; i < li; i++) {
      document
        .querySelector("#gnb ul")
        .appendChild(document.createElement("li"));
    }
    console.log(li);
  };
  return Gnb;
})();
