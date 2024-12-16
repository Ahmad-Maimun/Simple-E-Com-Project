import { getDatabase, onValue, ref } from "firebase/database";
import app from "./firebaseConfig";

const db = getDatabase(app);

export const getFirebaseData = () => {
    const starCountRef = ref(db, "Categories");

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