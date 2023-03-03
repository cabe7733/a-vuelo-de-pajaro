import { Injectable } from '@angular/core';
import { db } from "../firebase.app";
import { doc, onSnapshot,collection, query, where, getDocs, getDoc } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class ProyectService {

  constructor() { }

  async getProyectos(){
    let data:any=[];
    const querySnapshot = await getDocs(collection(db, "proyectos"));
    querySnapshot.forEach((doc) => {
      let id = doc.id
      data.push({ id,...doc.data() })
    });
    return data;
  }


  async getDocs(){
    let data:any=[];
    const querySnapshot = await getDocs(collection(db, "documentos"));
    querySnapshot.forEach((doc) => {
      let id = doc.id
      data.push({ id,...doc.data() })
    });
    return data;
  }

  async getDocsRe(){
    let data:any=[];
    const querySnapshot = await getDocs(collection(db, "re"));
    querySnapshot.forEach((doc) => {
      let id = doc.id
      data.push({ id,...doc.data() })
    });
    return data;
  }
}
