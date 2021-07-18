
    window.addEventListener("DOMContentLoaded", function () {
        // get the form elements defined in your form HTML above
      
        var form = document.getElementById("my-form");
        // var button = document.getElementById("my-form-button");
        var status = document.getElementById("status");

        var order = document.getElementById("order");
    
  // ----------------------_show order_--------------------------------
 var products = sessionStorage.getItem("products");
 console.log(sessionStorage.getItem("products"));

  //---------------------_end of show order_------------------------------
  var bg;
  function showmsg(text="my message"){
      var L = (document.body.clientWidth -300)/2;
      window.page.style.opacity = 0.2;
      document.body.style.zIndex = 0;
      bg = document.body.style.backgroundColor;
      document.body.style.backgroundColor = "ddd";
      var strmsg = "";
      strmsg+="<div id = 'mymsg'>" + text + "<br><br>"
          + " <Button onclick = 'hideMsg();'>OK</Button> </div>";
              window.msg.innerHTML = strmsg;
      
      window.mymsg.style.left = L;
  }
  function hideMsg(){
      window.msg.innerHTML = "";
      window.page.style.opacity = 1;
      document.body.style.backgroundColor = bg;
  }

        // Success and Error functions for after the form is submitted
      
        function success() {
          form.reset();
          status.classList.add("success");
          status.innerHTML = "Thanks!";
          
        }
      
        function error() {
          status.classList.add("error");
          status.innerHTML = "Oops! There was a problem.";
        }
    
        
        // handle the form submission event
      
        form.addEventListener("submit", function (ev) {
          ev.preventDefault();
          var data = new FormData(form);
          ajax(form.method, form.action, data, success, error);
          showmsg("your order done successfully :)");
        });
    }
    );
    

      // helper function for sending an AJAX request
    
    function ajax(method, url, data, success, error) {
        console.log(sessionStorage.getItem("products")) ;
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
          } else {
            error(xhr.status, xhr.response, xhr.responseType);
          }
        };
        xhr.send(data);
      }

