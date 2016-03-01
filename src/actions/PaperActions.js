import alt from '../alt';
import felix from 'felix';
let cache = felix.create("pm");
import PaperSource from '../sources/PaperSource';

class PaperActions {
    updatePapers(res) {
        return res.data.data.paper;
    }

    dataFailed(errorMessage) {
        return errorMessage;
    }

    loadingPapers() {
        return;
    }

    filterData(query) {
        return query;
    }

    fetchData() {
        return (dispatch) => {
            dispatch()
            if (cache.get('papers')) {
                this.updatePapers(cache.get('papers'));
            } else {
                PaperSource.fetchData()
                    .then((res) => {
                        cache.put('papers', res.data.data.paper);
                        this.updatePapers(res.data.data.paper);
                    })
                    .catch((errorMessage) => {
                        this.dataFailed(errorMessage);
                    });
            }
        }
    }
}

export default alt.createActions(PaperActions);