import alt from '../alt';
import PaperActions from '../actions/PaperActions';

import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';
import find from 'lodash/find';
import kebab from 'lodash/kebabCase';
import map from 'lodash/map';
import uniq from 'lodash/uniq';
import forIn from 'lodash/forIn';

class PaperStore {
    constructor() {
        this.papers = [];
        this.viewData = [];
        this.filters = {
            category: [],
            coating: [],
            dye_pigment: []
        };

        this.bindListeners({
            handleUpdatePapers: PaperActions.UPDATE_PAPERS,
            handleFilterData: PaperActions.FILTER_DATA
        });

    }

    handleUpdatePapers(data) {
        data = sortBy(data, 'mill');
        data.forEach((item)=>{
           item.key = kebab(item.key);
        });
        this.viewData = this.papers = data;

        this._buildFilters()
    }

    handleFilterData(query) {
        console.log(query);
        if (query !== '') {
            this.viewData = filter(this.papers, (item) => {
                return item.category == query;
            });
        } else {
            this.viewData = this.papers;
        }
        console.log(this.viewData);
    }

    _buildFilters() {

        forIn(this.filters, function(value, key) {
            this.filters[key] = uniq(map(this.papers, key));
        }.bind(this));

        /*this.filters.categories = map(uniq(map(this.papers, 'category')), (item)=> {
            return {value: item, label: item}
        });

        this.filters.coating = map(uniq(map(this.papers, 'coating')), (item)=> {
            return {value: item, label: item}
        });

        this.filters.dye_pigment = map(uniq(map(this.papers, 'dye_pigment')), (item)=> {
            return {value: item, label: item}
        });*/

    }



    static getPapers(millKey) {
        return filter(this.getState().papers, (item) => {
            return item.mill == millKey;
        });
    }

    static getPaper(key) {
        const paper = find(this.getState().papers, (item) => {
            return item.key === key;
        });
        return paper;
    }
}

export default alt.createStore(PaperStore, 'PaperStore');