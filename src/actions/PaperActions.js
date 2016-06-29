import alt from '../alt';

class PaperActions {
    updatePapers(papers) {
        return papers;
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
}

export default alt.createActions(PaperActions);