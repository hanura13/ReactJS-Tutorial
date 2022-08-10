import axios from 'axios';
import {OnlineRot, RootPath} from './Config';

const Get = (path, root) =>  {
    const promise  = new Promise((resolve, reject) => {
        axios.get(`${root ? OnlineRot : RootPath}/${path}`)
        .then((result) => {
            resolve(result.data)
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

export default Get;