import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
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

// Add Data
export const setDataToFirebase = (tableName, data) => {
    push(ref(db, tableName), data);
}

// Update Data
export const setDataFromFirebase = (tableName, data) => {
    set(ref(db, tableName), data);
}

// Delete Data From Firebase
export const deleteDataFromFirebase = (tableName) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(remove(ref(db, tableName)));
        } catch (error) {
            reject(error);
        }
    });
};


// ************** User Profile **************

export const createUserProfile = async (data) => {
    const { name, role, id } = data;

    set(ref(db, "userProfile/" + id), {
        name,
        role
    });
};

export const getProfile = async (id) => {


    try {
        return new Promise((resolve, reject) => {
            onValue(ref(db, "userProfile/" + id), (snapshot) => {
                resolve(snapshot.val());
            });
        })
    } catch (error) {
        reject(error);
    }


}