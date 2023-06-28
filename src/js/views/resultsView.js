import View from "./View.js";

class ResultView extends View {
  _parentElement = document.querySelector(".results");

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview() {
    return `
  <li class="preview">
  <a class="preview__link" href="#23456">
    <figure class="preview__fig">
      <img src="src/img/test-1.jpg" alt="Test" />
    </figure>
    <div class="preview__data">
      <h4 class="preview__name">Pasta with Tomato Cream ...</h4>
      <p class="preview__publisher">The Pioneer Woman</p>
    </div>
  </a>
</li>
  `;
  }
}

export default new ResultView();
