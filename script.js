document.querySelectorAll('.card-wrapper').forEach(function(el) {
  el.addEventListener('focusin', function() {
    el.setAttribute('data-active', 'true');
  });
  el.addEventListener('focusout', function() {
    el.removeAttribute('data-active');
  });
});

