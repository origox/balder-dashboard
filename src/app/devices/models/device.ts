
//import * as firebase from 'firebase/app'



export class Device {
    deviceMetaData: {
        id: string,
        location: string,
        types: string
    }

    properties: {
        state: number,
        time: Object
    }

    constructor(id: string) {
        this.deviceMetaData.id = id;
    }

}
