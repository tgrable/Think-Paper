import alt from '../alt';
import MillActions from '../actions/MillActions';

import find from 'lodash/find';

class MillStore {
    constructor() {
        this.mills = [];
        this.currentMill = {};

        this.bindListeners({
            handleUpdateMills: MillActions.UPDATE_MILLS,
            handleUpdateMill: MillActions.UPDATE_MILL
        });

    }

    handleUpdateMills(mills) {
        this.mills = mills;
    }

    handleUpdateMill(key) {
        this.currentMill = find(this.mills, (item) => {
            return item.key === key;
        });
    }

    static getMill(key) {
        let mill = find(this.getState().mills, (item) => {
            console.log(item.key);
            return item.key === key;
        });
        return mill;
    }
}

export default alt.createStore(MillStore, 'MillStore');

/*
 {
     "title": "Domtar",
     "key": "domtar--mill",
     "logo": "http:\/\/5bab5f0a6ad1b1cb2cfe-3715edbc6858fa8ff881a264069b8978.r88.cf1.rackcdn.com\/images-assets\/logo-grid-domtar@2x.png",
     "banners": [
         "http:\/\/5bab5f0a6ad1b1cb2cfe-3715edbc6858fa8ff881a264069b8978.r88.cf1.rackcdn.com\/images-assets\/Picture145.png",
         "http:\/\/5bab5f0a6ad1b1cb2cfe-3715edbc6858fa8ff881a264069b8978.r88.cf1.rackcdn.com\/images-assets\/delivers.png",
         "http:\/\/5bab5f0a6ad1b1cb2cfe-3715edbc6858fa8ff881a264069b8978.r88.cf1.rackcdn.com\/images-assets\/Jburg.png",
         "http:\/\/5bab5f0a6ad1b1cb2cfe-3715edbc6858fa8ff881a264069b8978.r88.cf1.rackcdn.com\/images-assets\/Paper 34.png",
         "http:\/\/5bab5f0a6ad1b1cb2cfe-3715edbc6858fa8ff881a264069b8978.r88.cf1.rackcdn.com\/images-assets\/Paper bc.png"
     ],
     "description": "Domtar is the largest integrated marketer and manufacturer of uncoated freesheet paper in North America and second largest in the world. We have 10 pulp and paper mills (eight in the United States and two in Canada), with an annual paper production capacity of approximately 3.4 million tons of uncoated freesheet paper. Our paper manufacturing operations are supported by 15 converting and distribution operations including a network of 12 plants located offsite of our paper making operations. Also, we have forms manufacturing operations at three offsite converting and distribution operations. Approximately 79% of our paper production capacity is in the U.S. and the remaining 21% is located in Canada.",
     "website": "http:\/\/www.domtar.com\/",
     "phone": "877-877-4685",
     "address": "100 Kingsley Park Drive\r\nFort Mill (SC) United-States\r\n29715-6476",
     "videos": [
     "media-and-solutions-lab--video"
    ],
    "papers": [
         "cougar-digital--paper",
         "cougar-digital-choice-supersmooth--paper",
         "cougar-digital-nat-txt-sm--paper",
         "domtar-copy-160-smooth--paper",
         "earthchoice-color-tag---paper",
         "earthchoice-digital-book--paper",
         "earthchoice-tradebook,-vellum--paper",
         "huskey-offset-160-smooth--paper",
         "husky-offset-smooth--paper",
         "laser-form-bond-mocr--paper",
         "lynx--paper",
         "lynx-digital--paper",
         "lynx-digital-card-stock-cover--paper",
         "lynx-opaque-digital--paper",
         "lynx-ultra-smooth-cover--paper"
     ]
 },
 */