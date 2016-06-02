import axios from 'axios';
import MillActions from '../actions/MillActions';

const MillSource = {
    fetchData() {
        return axios.get('http://dev-pressdemo.pantheonsite.io/data/api/mill');
    }
}

export default MillSource;