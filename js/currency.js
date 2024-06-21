document.addEventListener("DOMContentLoaded", function () {
  /* Custom select design */
  let currency = document.querySelector(".currency");
  let currencyBtn = document.createElement("button");
  currencyBtn.classList.add("currency__btn", "btn-reset");
  // currencyBtn.setAttribute("tabindex", "0");
  currency.appendChild(currencyBtn);

  let currencyList = document.createElement("ul");
  currencyList.classList.add("currency__list");
  currency.appendChild(currencyList);

  let selectOptions = document.querySelectorAll(".currency select option");
  selectOptions.forEach(function (option) {
    let listItem = document.createElement("li");
    let span = document.createElement("span");
    span.setAttribute("value", option.value);
    span.setAttribute("tabindex", "0");
    span.style.backgroundImage = option.style.backgroundImage;
    span.textContent = option.text;
    listItem.appendChild(span);
    currencyList.appendChild(listItem);
  });

  let selectedOption = document.querySelector(".currency select").value;
  let selectedSpan = document.querySelector(
    `.currency__list span[value="${selectedOption}"]`
  );
  let currencyBtnContent = document.createElement("span");
  currencyBtnContent.style.backgroundImage = selectedSpan.style.backgroundImage;
  currencyBtnContent.textContent = selectedSpan.textContent;
  currencyBtn.appendChild(currencyBtnContent);

  let currencyLink = document.createElement("a");
  currencyLink.classList.add("currency__link");
  currencyBtn.appendChild(currencyLink);

  let currencyListSpans = document.querySelectorAll(
    ".currency .currency__list span"
  );
  currencyListSpans.forEach(function (span) {
    function handleClick() {
      let ddText = span.textContent;
      let ddImg = span.style.backgroundImage;
      let ddVal = span.getAttribute("value");
      currencyBtnContent.style.backgroundImage = ddImg;
      currencyBtnContent.textContent = ddText;
      currencyListSpans.forEach(function (s) {
        s.parentElement.classList.remove("active");
      });
      span.parentElement.classList.add("active");
      document.querySelector(".currency select[name=options]").value = ddVal;
      document
        .querySelectorAll(".currency .currency__list li")
        .forEach(function (li) {
          li.style.display = "none";
        });
    }

    function handleKeyPress(event) {
      // Проверяем, является ли нажатая клавиша Enter
      if (event.keyCode === 13 || event.which === 13) {
        handleClick();
      }
    }

    // Добавляем обработчик события клика
    span.addEventListener("click", handleClick);

    // Добавляем обработчик события нажатия клавиши Enter
    span.addEventListener("keypress", handleKeyPress);
  });

  currencyBtn.addEventListener("click", function () {
    document
      .querySelectorAll(".currency .currency__list li")
      .forEach(function (li) {
        li.style.display = "block";
      });
  });

  currencyBtn.addEventListener("keypress", function () {
    document
      .querySelectorAll(".currency .currency__list li")
      .forEach(function (li) {
        li.style.display = "block";
      });
  });
});
