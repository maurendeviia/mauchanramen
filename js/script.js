function allmenu(){
    $.getJSON('data/ramen.json ', function (data) {
        let menu = data.menu;
        $.each(menu, function (i, data) {
            $('#menu_ramen').append('<div class="col-md-4"><div class="card mb-3"><img src=' + data.gambar + ' class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp.' + data.harga + ',-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        });
    });
}
allmenu();
$('.nav-link').on('click', function () {
    $('#menu_ramen').html('');
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    if (kategori == 'All Menu'){
        allmenu();
        return;
    }

    $.getJSON('data/ramen.json ', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><img src=' + data.gambar + ' class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp.' + data.harga + ',-</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });
        $('#menu_ramen').html(content);
    });
});