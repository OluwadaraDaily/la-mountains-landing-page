document.addEventListener("DOMContentLoaded", function() {
  var tabs = document.querySelectorAll(".tab-item");
  var scheduleMain = document.querySelector(".schedule-main");
  var footer = document.querySelector(".footer");

  tabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
      tabs.forEach(function(tab) {
        tab.classList.remove("active");
      });
      this.classList.add("active");
      footer.classList.toggle("active")
      scheduleMain.classList.toggle("active");
    });
  });
});