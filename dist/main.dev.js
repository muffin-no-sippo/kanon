"use strict";

function header() {
  $.ajax({
    url: "header.html",
    // 読み込むHTMLファイル
    cache: false,
    success: function success(html) {
      document.write(html);
    }
  });
}