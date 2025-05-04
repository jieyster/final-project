export function loadPage(pageName) {
    $.get(`pages/${pageName}.html`, (data) => {
        $("#app").html(data);
    }).fail(function () {
        console.error("Failed to load page:" + pageName);
    });
}