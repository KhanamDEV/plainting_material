$(function () {
  localStorage.setItem('sources', JSON.stringify([]));

  $('.btn-print').click(() => {
    let imgs = [];
    $('.form-check-input:checkbox:checked').each((index, e) => {
      imgs.push($(e).parent().parent().find('img').attr('src'))
    });
    if (!imgs.length) {
      alert("画像を選択してください！");
      return;
    }
    localStorage.setItem('sources', JSON.stringify(imgs))
    Swal.fire({
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
       window.open('./print.html', '_blank');
    });
  })
});
