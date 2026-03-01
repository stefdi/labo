document.addEventListener("DOMContentLoaded", function () {
  var foldBtns = document.getElementsByClassName("fold-button");
  console.log("fold buttons found:", foldBtns.length);

  function findParentPost(el) {
    while (el && el !== document) {
      if (el.classList && el.classList.contains("one-post")) return el;
      el = el.parentNode;
    }
    return null;
  }

  for (var i = 0; i < foldBtns.length; i++) {
    foldBtns[i].addEventListener("click", function (e) {
      console.log("clicked!", e.target);

      var post = findParentPost(e.target);
      console.log("parent post:", post);

      if (!post) return;

      post.classList.toggle("folded");
      e.target.innerHTML = post.classList.contains("folded") ? "развернуть" : "свернуть";
    });
  }
});
