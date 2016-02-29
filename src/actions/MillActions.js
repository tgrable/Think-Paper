import alt from '../alt';
import MillSource from '../sources/MillSource';

class MillActions {
    updateMills(mills) {
        return mills;
    }

    dataFailed(errorMessage) {
        return errorMessage;
    }

    loadingMills() {
        return;
    }

    fetchData() {
        return (dispatch) => {
            dispatch()
            MillSource.fetchData()
                .then((res) => {
                   this.updateMills(res.data.data.mill);
                })
                .catch((errorMessage) => {
                   this.dataFailed(errorMessage);
                });
        }
    }
}

export default alt.createActions(MillActions);