(function (d) {
    var config = {
            kitId: "gjg5sil",
            scriptTimeout: 3000,
            async: true,
        },
        h = d.documentElement,
        t = setTimeout(function () {
            h.className =
                h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
    h.className += " wf-loading";
    tk.src = "https://use.typekit.net/" + config.kitId + ".js";
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || (a && a != "complete" && a != "loaded")) return;
        f = true;
        clearTimeout(t);
        try {
            Typekit.load(config);
        } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s);
})(document);

(function (d) {
    var config = {
            kitId: "gjg5sil",
            scriptTimeout: 3000,
            async: true,
        },
        h = d.documentElement,
        t = setTimeout(function () {
            h.className =
                h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
    h.className += " wf-loading";
    tk.src = "https://use.typekit.net/" + config.kitId + ".js";
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
        a = this.readyState;
        if (f || (a && a != "complete" && a != "loaded")) return;
        f = true;
        clearTimeout(t);
        try {
            Typekit.load(config);
        } catch (e) {}
    };
    s.parentNode.insertBefore(tk, s);
})(document);

// ハンバーガーメニュー
$(function () {
    // ページが読み込まれた時にメニューを閉じる
    $(".sp_btn").removeClass("open");
    $(".sp_nav").hide();

    // クリックイベントを追加
    $(".sp_btn, .sp_nav li").on("click", function () {
        $(".sp_btn").toggleClass("open");
        $(".sp_nav").fadeToggle();
    });
});

// コンセプトのアニメーション
$(window).scroll(function () {
    $(".fadein").each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();

        if (scroll > elemPos - windowHeight + 150) {
            $(this).addClass("scrollin");
        }
    });
});
