import alt from '../alt';
import MillSource from '../sources/MillSource';

class MillActions {
    updateMills(res) {
        return res.data.data.mill;
    }

   updateMill(key){
       return key;
   }

    /*fetchData() {
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
    }*/
}

export default alt.createActions(MillActions);