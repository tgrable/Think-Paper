import axios from 'axios';
import ls from 'local-storage';

import PaperActions from '../actions/PaperActions';
import MillActions from '../actions/MillActions';

const cacheTime = 900000; // 15 mins

const PaperSource = {
    fetchData(callback) {
        const hasCache = this.checkCache();
        if (!hasCache) {
            axios.all([this.getMills(), this.getPapers()])
                .then(axios.spread((millRes, paperRes) => {
                    const mills = millRes.data.data.mill;
                    const papers = paperRes.data.data.paper;

                    this.updateStore(papers, mills);
                    this.updateCache(papers, mills);

                    callback();
                }));
        } else {
            callback();
        }
    },

    updateStore(papers, mills) {
        PaperActions.updatePapers(papers);
        MillActions.updateMills(mills);
    },

    updateCache(papers, mills) {
        ls.set('papers', papers);
        ls.set('mills', mills);
        ls.set('expire', new Date());
    },

    checkCache() {
        const expire = ls.get('expire');
        const papers = ls.get('papers');
        const mills = ls.get('mills');
        if (expire !== null && papers !== null && mills !== null) {
            const now = new Date();
            const diff = now - new Date(expire);
            if (diff > cacheTime) {
                // cache expired ignore it
                return false;
            } else {
                this.updateStore(papers, mills);
                return true;
            }
        } else {
            // no cache
            return false;
        }
    },

    getMills() {
        return axios.get('http://dev-pressdemo.pantheonsite.io/data/api/mill');
    },

    getPapers() {
        return axios.get('http://dev-pressdemo.pantheonsite.io/data/api/paper');
    }
}

export default PaperSource;