var inputs = document.querySelectorAll('input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
        document.getElementById("terminal__ilusao").innerHTML = this.value
    });
}

