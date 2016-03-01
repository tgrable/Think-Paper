import axios from 'axios';
import PaperActions from '../actions/PaperActions';

const PaperSource = {
    fetchData() {
        return axios.get('http://dev-pressdemo.pantheon.io/data/api/paper');
    }
}

export default PaperSource;