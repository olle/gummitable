import "./gummitable.css";

(function () {
  document.querySelectorAll('[data-is="gummitable"').forEach(($table) => {
    $table.classList.add("gummitable");

    var labels = [];
    var max = 0;
    $table.querySelectorAll("thead > tr > th").forEach(($th) => {
      labels.push($th.textContent);
      max = Math.max(max, $th.textContent.length);
    });

    $table.querySelectorAll("tbody > tr").forEach(($tr) => {
      $tr.querySelectorAll("td").forEach(($td, i) => {
        $td.classList.add("gummilabel");
        $td.dataset.gummilabel = labels[i] || "";
      });
    });

    var style = document.createElement("style");
    style.innerHTML = `.gummilabel:before { min-width: ${max}ch; }`;
    document.getElementsByTagName("body")[0].appendChild(style);
  });
})();
