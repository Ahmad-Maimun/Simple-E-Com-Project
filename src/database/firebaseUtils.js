import { getDatabase, onValue, push, ref } from "firebase/database";
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

export const setDataToFirebase = (tableName, data) => {
    push(ref(db, tableName), data);
}