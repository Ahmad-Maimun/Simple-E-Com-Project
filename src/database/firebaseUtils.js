import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import app from "./firebaseConfig"; // Import Firebase app from your config

// Initialize Firebase Database
export const db = getDatabase(app);

// Fetch data from Firebase (returns a Promise)
export const getFirebaseData = (tableName) => {
    const starCountRef = ref(db, tableName);

    return new Promise((resolve, reject) => {
        try {
            onValue(
                starCountRef,
                (snapshot) => {
                    const updatedData = [];
                    snapshot.forEach((item) => {
                        updatedData.push({
                            id: item.key,
                            ...item.val(),
                        });
                    });
                    resolve(updatedData);
                },
                (error) => {
                    reject(error);
                }
            );
        } catch (error) {
            reject(error);
        }
    });
};

// Fetch a specific record by its ID for editing
export const getFirebaseDataForEdit = (tableName, id) => {
    return new Promise((resolve, reject) => {
        try {
            onValue(ref(db, `${tableName}/${id}`), (snapshot) => {
                resolve(snapshot.val());
            });
        } catch (error) {
            reject(error);
        }
    });
};


// Add data to Firebase
export const setDataToFirebase = (tableName, data) => {
    push(ref(db, tableName), data);
};

// Update data in Firebase
export const setDataFromFirebase = (tableName, data) => {
    set(ref(db, tableName), data);
};

// Delete data from Firebase
export const deleteDataFromFirebase = (tableName) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(remove(ref(db, tableName)));
        } catch (error) {
            reject(error);
        }
    });
};

// Create user profile in Firebase
export const createUserProfile = async (data) => {
    const { name, role, id } = data;

    return set(ref(db, "userProfile/" + id), {
        name,
        role,
    });
};

// Fetch user profile from Firebase
export const getProfile = (id) => {
    return new Promise((resolve, reject) => {
        try {
            onValue(ref(db, "userProfile/" + id), (snapshot) => {
                resolve(snapshot.val());
            });
        } catch (error) {
            reject(error);
        }
    });
};
