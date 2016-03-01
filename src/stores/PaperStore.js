import alt from '../alt';
import PaperActions from '../actions/PaperActions';
import PaperSource from '../sources/PaperSource';

import filter from 'lodash/filter';

class PaperStore {
    constructor() {
        this.papers = [];
        this.viewData = [];

        this.bindListeners({
            handleUpdatePapers: PaperActions.UPDATE_PAPERS,
            handleFilterData: PaperActions.FILTER_DATA
        });

    }

    handleUpdatePapers(data) {
        this.viewData = this.papers = data;
    }

    handleFilterData(query) {
        if (query !== '') {
            this.viewData = filter(this.papers, (item) => {
                return item.mill == query;
            });
        } else {
            this.viewData = this.papers;
        }
    }


    doFilter(query) {
        if (Object.keys(query).length) {
            this.viewData = filter(this.papers, (item) => {
                return item.mill == query.mill;
            });
        } else {
            this.viewData = this.papers;
        }
    }

    static getPapers(millKey) {
      return filter(this.getState().papers, (item) => {
            return item.mill == millKey;
        });
    }
}

export default alt.createStore(PaperStore, 'PaperStore');