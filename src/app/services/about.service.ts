import { Injectable } from '@angular/core';
import { db } from "../firebase.app";
import { doc, onSnapshot,collection, query, where, getDocs, getDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  async getTeam(){
    let data:any=[];
    const querySnapshot = await getDocs(collection(db, "equipo"));
    querySnapshot.forEach((doc) => {
      let id = doc.id
      data.push({ id,...doc.data() })
    });
    return data;
  }

  async getTeamDesc(){
    let data:any;
    const docRef = doc(db, "des_equipo", "0NZS58ZX6SOrmTqoH8ET");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      data = {...docSnap.data()};
    } else {
      data = {...docSnap.data()};
      console.log("No such document!");
    }
    return data;
  }

  async getVisionMision(){
    let data:any=[];
    const querySnapshot = await getDocs(collection(db, "visionymision"));
    querySnapshot.forEach((doc) => {
      let id = doc.id
      data.push({ id,...doc.data() })
    });
    return data;
  }

}
