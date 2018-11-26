/* global $ */
import searchTemplate from './search.tpl.html';
import './Search.css';
import state from '../../state';
import List from "../list/List";
import {getApiUrl} from "../../utils";
import Loader from "../loader/Loader";

const options = [
  'All',
  'Audiobook',
  'eBook',
  'Movie',
  'Music',
  'Music Video',
  'Podcast',
  'TV Show',
  'Software'
];

class Search {
  constructor() {
    state.media = state.media || 'All';
    state.query = state.query || '';
    state.options = options;
    this.ticking = false;
    this.render();
  }

  attachEventListeners() {
    const searchInput = document.querySelector('.search-wrapper input');
    const searchOptionLink = document.querySelector('#search-options');
    searchInput.addEventListener('keyup', (e) => {
      if (!this.ticking) {
        this.rAf = window.requestAnimationFrame(this.update(e));
        this.ticking = true;
      }
    });

    searchOptionLink.addEventListener('change', (e) => {
      const el = e.target;
      state.media = el.options[el.selectedIndex].value;
      if (state.query.length > 0) {
        this.getSearchResult();
      }
    });
  }

  async getSearchResult() {
    try {
      state.status = 'loading';
      new Loader().render('search_results');
      const resp = await fetch(getApiUrl({media: state.media, query: state.query}));
      const json = await resp.json();
      state.data = {...json};
      state.status = json.resultCount ? 'init' : 'noContent';
      new List().render();
    } catch (e) {
      state.status = 'error';
    }
  }

  render() {
    const html = searchTemplate(state);
    document.querySelector('#container #main').innerHTML = html;
    document.querySelector('.search-wrapper input').value = state.query;
    this.attachEventListeners();
  }

  update = ({keyCode, target: {value: query}}) => _ => {
    state.query = query;
    if (keyCode === 13) {
      this.getSearchResult();
    }
    this.ticking = false;
  }
}

export default Search;
