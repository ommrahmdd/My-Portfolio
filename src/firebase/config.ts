import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCXvC3kAauWvc8rHiCfucQ1OvZrTYJfVkM",
  authDomain: "portfolio-ed005.firebaseapp.com",
  projectId: "portfolio-ed005",
  storageBucket: "portfolio-ed005.appspot.com",
  messagingSenderId: "782280070246",
  appId: "1:782280070246:web:117da4384833e22ecb89a7",
};
let app = initializeApp(firebaseConfig);
let db = getFirestore(app);

// HANDLE: get all projects
export let getProjects = async () => {
  let docsRef = getDocs(collection(db, "projects"));
  let projects = (await docsRef).docs.map((proj) => ({
    projectID: proj.id,
    ...proj.data(),
  }));
  return projects;
};
