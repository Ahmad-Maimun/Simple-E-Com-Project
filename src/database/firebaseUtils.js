import { getDatabase, onValue, push, ref, set } from "firebase/database";
import app from "./firebaseConfig";

const db = getDatabase(app);

export const getFirebaseData = (tableName) => {
    const starCountRef = ref(db, tableName);

    return new Promise((resolve, reject) => {
        try {
            onValue(starCountRef, (snapshot) => {
                const updateCategory = [];
                snapshot.forEach((item) => {
                    updateCategory.push({
                        id: item.key,
                        ...item.val()
                    })
                })
                resolve(updateCategory);
            });
        } catch (error) {
            reject(error)
        }
    })


}

export const getFirebaseDataForEdit = async (tableName) => {
    const starCountRef = ref(db, tableName);

    return new Promise((resolve, reject) => {
        try {
            onValue(starCountRef, (snapshot) => {
                resolve(snapshot.val());
            });
        } catch (error) {
            reject(error)
        }
    })
}

export const setDataToFirebase = (tableName, data) => {
    push(ref(db, tableName), data);
}

export const setDataFromFirebase = (tableName, data) => {
    set(ref(db, tableName), data);
}