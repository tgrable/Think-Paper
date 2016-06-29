import alt from '../alt';

class MillActions {
    updateMills(mills) {
        return mills;
    }

   updateMill(key){
       return key;
   }
}

export default alt.createActions(MillActions);