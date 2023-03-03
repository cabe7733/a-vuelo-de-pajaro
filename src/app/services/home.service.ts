import { Injectable } from '@angular/core';
import { db } from "../firebase.app";
import { doc, onSnapshot,collection, query, where, getDocs, getDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  async getPreguntasFrecuentes(){
    let data:any=[];
    const querySnapshot = await getDocs(collection(db, "preguntas_frecuentes"));
    querySnapshot.forEach((doc) => {
      let id = doc.id
      data.push({ id,...doc.data() })
    });
    return data;
  }
}
