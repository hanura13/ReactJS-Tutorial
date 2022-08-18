import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import firebase from '../../firebase'
import { getDatabase, ref, push, onValue } from "firebase/database";
import { type } from "@testing-library/user-event/dist/type";


export const actionUserName = () => (dispatch) =>{
    setTimeout(()=> {
        return dispatch({type: 'CHANGE_USER', value: 'Hanura Djoyo'})
    }, 2000) 
}

export const loginUserAPI= (data) => (dispatch) => {
    return new Promise((resolve, reject)=> {
        dispatch({type: 'CHANGE_LOADING', value: true})
            signInWithEmailAndPassword(data.auth, data.email, data.password)
                 .then(userCredential => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);
                const datauser = {
                    email: user.email,
                    uid: user.uid,
                    emailVerified: user.emailVerified,
                    refreshToken: user.refreshToken
                }
                // console.log(datauser)
                dispatch({type: 'CHANGE_LOADING', value: false})
                dispatch({type: 'CHANGE_ISLOGIN', value: true})
                dispatch({type: 'CHANGE_USER', value: datauser})
                resolve(datauser)
                // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    dispatch({type: 'CHANGE_LOADING', value: false})
                    dispatch({type: 'CHANGE_ISLOGIN', value: false})
                    reject(false)
                    // ..
            })
        
    })
    
}

export const registerUserAPI = (data) => (dispatch) => {

    return new Promise((resolve, reject)=>{
        dispatch({type: 'CHANGE_LOADING', value: true})
        createUserWithEmailAndPassword(data.auth, data.email, data.password)
         .then(userCredential => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        dispatch({type: 'CHANGE_LOADING', value: false})
        resolve(true)
        // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            dispatch({type: 'CHANGE_LOADING', value: false})
            reject(false)
            // ..
        })
        
    })
}

export const addDataToAPI = (data) => (dispatch) => {
    const db = getDatabase();
    push(ref(db, 'notes/' + data.userId), {
        title: data.title,
        content: data.content,
        date: data.date
      });
}

export const getDataToAPI = (userId) => (dispatch) => {
    const db = getDatabase();
    const starCountRef = ref(db, 'notes/' + userId);
    return new Promise((resolve, reject) => {
        onValue(starCountRef, (snapshot) => {
            const data = [];
            Object.keys(snapshot.val()).map(key =>{
                data.push({
                    id: key,
                    data: snapshot.val()[key]
                })
            });
            // console.log('Get Data: ',data)
            dispatch({type: 'SET_NOTES', value: data})
            resolve(snapshot.val())
            // updateStarCount(postElement, data);
        });
    })
    
}