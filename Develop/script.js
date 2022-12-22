$(document).ready(function () {

  $('.saveBtn').on('click', function () {

    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, value);

    $('.notification').addClass('show');

    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);
  });

  function hourUpdater() {

    var currentHour = dayjs().hour();

    $('.time-block').each(function () {
      var hour = parseInt($(this).attr('id').split('-')[1]);

      if (hour < currentHour) {
        $(this).addClass('past');
      } else if (hour === currentHour){
        $(this).addClass('present');
      } else if (hour > currentHour) {
        $(this).addClass('future');
      }
    });
  }

  hourUpdater();

  setInterval(hourUpdater, 5000);


});
