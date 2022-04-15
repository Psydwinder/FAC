// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
// import { analytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";

// Add Firebase products that you want to use
// import { auth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import * as firestore from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyANKUAL39lAQ1L5qkALmJvDO8mOScSFyvI",
  authDomain: "dodgeme-d5604.firebaseapp.com",
  projectId: "dodgeme-d5604",
  storageBucket: "dodgeme-d5604.appspot.com",
  messagingSenderId: "195120080302",
  appId: "1:195120080302:web:f82edc0abb1761e173d43f",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = firestore.getFirestore(app);

export { app, db, firestore };

// export {
//   jh as AbstractUserDataWriter,
//   qc as Bytes,
//   Ac as CACHE_SIZE_UNLIMITED,
//   _c as CollectionReference,
//   fc as DocumentReference,
//   Th as DocumentSnapshot,
//   Lc as FieldPath,
//   Gc as FieldValue,
//   Rc as Firestore,
//   Q as FirestoreError,
//   Kc as GeoPoint,
//   Ec as LoadBundleTask,
//   dc as Query,
//   Vh as QueryConstraint,
//   Eh as QueryDocumentSnapshot,
//   Ah as QuerySnapshot,
//   Ih as SnapshotMetadata,
//   at as Timestamp,
//   fl as Transaction,
//   Hh as WriteBatch,
//   vt as _DatabaseId,
//   xt as _DocumentKey,
//   et as _EmptyAppCheckTokenProvider,
//   z as _EmptyAuthCredentialsProvider,
//   mt as _FieldPath,
//   uc as _cast,
//   q as _debugAssert,
//   yt as _isBase64Available,
//   $ as _logWarn,
//   Il as _setIndexConfiguration,
//   sc as _validateIsNotUsedTogether,
//   ul as addDoc,
//   gl as arrayRemove,
//   ml as arrayUnion,
//   xc as clearIndexedDbPersistence,
//   wc as collection,
//   mc as collectionGroup,
//   lc as connectFirestoreEmulator,
//   ol as deleteDoc,
//   _l as deleteField,
//   Mc as disableNetwork,
//   gc as doc,
//   Uc as documentId,
//   Sc as enableIndexedDbPersistence,
//   Dc as enableMultiTabIndexedDbPersistence,
//   kc as enableNetwork,
//   Uh as endAt,
//   Lh as endBefore,
//   Vc as ensureFirestoreConfigured,
//   hl as executeWrite,
//   Yh as getDoc,
//   Zh as getDocFromCache,
//   tl as getDocFromServer,
//   el as getDocs,
//   nl as getDocsFromCache,
//   sl as getDocsFromServer,
//   Pc as getFirestore,
//   yl as increment,
//   bc as initializeFirestore,
//   kh as limit,
//   Mh as limitToLast,
//   Fc as loadBundle,
//   $c as namedQuery,
//   al as onSnapshot,
//   cl as onSnapshotsInSync,
//   xh as orderBy,
//   vh as query,
//   pc as queryEqual,
//   yc as refEqual,
//   dl as runTransaction,
//   wl as serverTimestamp,
//   il as setDoc,
//   M as setLogLevel,
//   bh as snapshotEqual,
//   $h as startAfter,
//   Fh as startAt,
//   Oc as terminate,
//   rl as updateDoc,
//   Nc as waitForPendingWrites,
//   Dh as where,
//   pl as writeBatch,
// };
