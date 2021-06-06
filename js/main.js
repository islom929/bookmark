// LI va A elementlarini topib olamiz
var elsQuestionsItem = document.querySelectorAll('.faq-bottom__item');
var elsQuestionsButton = document.querySelectorAll('.faq-bottom__item--button');

// Har bir linkka quloq klikka quloq solishni buyuramiz
elsQuestionsButton.forEach(function (button) {
  button.addEventListener('click', function () {
    // Avval hamma li lardan faollik klassini olib tashlaymiz
    elsQuestionsItem.forEach(function (item) {
      item.classList.remove('faq-bottom__item--active');
    });

    // Bosilgan link ota elementiga faollik klassini qo'shamiz
    button.closest('.faq-bottom__item').classList.add('faq-bottom__item--active');
  });
});