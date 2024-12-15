$(function () {
  localStorage.setItem('sources', JSON.stringify([]));
  $(".checkbox-print").click(function () {
    let source = localStorage.getItem('sources') == null ? [] : JSON.parse(localStorage.getItem('sources'));
    let src = $(this).parent().find('img').attr('src');
    if (source.includes(src)) {
      source = source.filter(e => e != src);
    } else {
      source.push(src);
    }
    console.log(source);
    localStorage.setItem('sources', JSON.stringify(source))
  })
  $('.btn-print').click(() => {
    let source = localStorage.getItem('sources') == null ? [] : JSON.parse(localStorage.getItem('sources'));
    if (!source.length) {
      alert("画像を選択してください！");
      return;
    }
    window.open('./print.html', '_blank');
  })
});
