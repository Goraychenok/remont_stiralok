$('#form').submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        alert("Сообщение успешно отправлено");
        $("form").trigger("reset");
        event.preventDefault();
        $('.popup').fadeOut();
        $('body').removeClass('stop');
    });
    return false;
  });


  $('#form_two').submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart_two.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        alert("Сообщение успешно отправлено");
        $("form").trigger("reset");
        event.preventDefault();
        $('.modal').fadeOut();
        $('body').removeClass('stop');
    });
    return false;
  });


  $('#form_tree').submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart_three.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        alert("Сообщение успешно отправлено");
        $("form").trigger("reset");
        event.preventDefault();
    });
    return false;
  });