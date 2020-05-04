import AbstractComponent from './abstract-component';
import {capitalizeFirstLetter} from '../utils/common';


const FILTER_ID_PREFIX = `filter-`;

const getFilterNameById = (id) => {
  return id.substring(FILTER_ID_PREFIX.length);
};

const createFilterMarkup = (filter, isChecked) => {

  return (
    `<div class="trip-filters__filter">
      <input id="filter-${filter}" class="trip-filters__filter-input  visually-hidden" type="radio"
        name="trip-filter" value="everything"${isChecked ? ` checked` : ``}>
      <label class="trip-filters__filter-label" for="filter-everything">${capitalizeFirstLetter(filter)}</label>
    </div>`
  );
};

const getfiltersMarkup = (filters) => {
  return filters.map((filter, index) => createFilterMarkup(filter, index === 0)).join(`\n`);
};

const createFiltersTemplate = (filters) => {
  return (
    `<form class="trip-filters" action="#" method="get">
      ${getfiltersMarkup(filters)}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

export default class FiltersComponent extends AbstractComponent {
  constructor(filters) {
    super();
    this._filters = filters;
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
  }

  setFilterChangeHandler(handler) {
    this.getElement().addEventListener(`change`, (evt) => {
      const filterName = getFilterNameById(evt.target.id);
      handler(filterName);
    });
  }
}
