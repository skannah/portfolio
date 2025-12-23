
// Toggle sidebar on mobile
function toggleSidebar() {
  var panel = document.querySelector(".sidebar-inner");
  if (!panel) return;
  panel.classList.toggle("open");
}

// Optionally, close sidebar when a link is clicked (mobile)
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".sidebar-link");
  var panel = document.querySelector(".sidebar-inner");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      if (panel && panel.classList.contains("open")) {
        panel.classList.remove("open");
      }
    });
  });
});
