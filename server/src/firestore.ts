const { getFirestore } = require('firebase-admin/firestore');
import { initializeApp, cert } from "firebase-admin/app";

const serviceAccount = require('../service-account/schools-of-fish-e2e93d9acfe6.json');

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore()

export const getDocuments = async () => {
    const snapshot = await db.collection('notes').get();

    const notes: any[] = []

    snapshot.forEach((doc: any) => {
        notes.push(doc.data())
    });

    return notes
}

