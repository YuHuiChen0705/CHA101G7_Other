// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  // 表單無效
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }


        else {
          // 表单验证通过
          // 在此处设计弹出窗口
          event.preventDefault(); // 阻止表单提交

          Swal.fire({
            title: 'Success!',
            text: 'Your form has been submitted successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          })
            .then(function () {
              // 按下确认按钮后重定向到首页
              window.location.href = 'index.html'; 
            });

        }

        form.classList.add('was-validated')
      }, false);
    })
})();






