window.addEventListener('DOMContentLoaded', function () {
    
    let wrapper = document.getElementById('.intro__content');

    let selectedTd;

    wrapper.addEventListener('FocusEvent', function(event) {
      let target = event.target;

      while (target != this) {
        if (target.tagName == 'DIV') {
          show(target);
          return;
        }
        target = target.parentNode;
      }
    )};

    function show(node) {
      if (selectedTd) {
        selectedTd.classList.remove('fade');
      }
      selectedTd = node;
      selectedTd.classList.add('show');
    }

});
