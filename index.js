document.getElementById('serverless-contact-form').addEventListener('submit', sendDataToLambda);

function sendDataToLambda(e) {
    e.preventDefault();
    var formEmail = document.querySelector('#email').value;
    var formSubject = document.querySelector('#subject').value;
    var formMessage = document.querySelector('#message').value;
    var endpoint = 'https://5xoj21h9ok.execute-api.us-east-1.amazonaws.com/prod/send-email-lambda';
    var body = {
        email: formEmail,
        subject: formSubject,
        message: formMessage
    }

    fetch(endpoint, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if(response.ok){
          document.getElementById('sentmsg').textContent = 'Email has been sent. Thank you!'
          document.getElementById('serverless-contact-form').reset();
        } else {
          document.getElementById('sentmsg').textContent = 'Error'
          throw Error (`Request rejected with status ${res.status}`)
        }
      })
      .catch(err => console.error(err));
}

var animateHTML = function() {
    var elems;
    var windowHeight;
    function init() {
      elems = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
      checkPosition();
      addEventHandlers();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elems.length; i++) {
        var positionFromTop = elems[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elems[i].className = elems[i].className.replace(
            'hidden',
            'fade-on-scroll'
          );
        }
      }
    }
    return {
      init: init
    };
  };
  animateHTML().init();