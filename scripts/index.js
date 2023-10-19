// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardContainer = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardData, deletFunc) {

  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;
  deleteButton.addEventListener('click', deletFunc);

  return cardElement;
};

function renderCard(card, container) {
  const cardElement = createCard(card, deleteCard);
  container.append(cardElement);
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
  const givenCard = evt.target;
  givenCard.closest('.places__item').remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((cards) => {
  renderCard(cards, cardContainer);
});
