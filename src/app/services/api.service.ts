import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyContact } from 'src/models/myContacts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string = 'http://localhost:3000/contacts'
  constructor(private http :HttpClient) { }

  //funtion to get all contacts
  getAllContacts():Observable<MyContact>{
    return this.http.get(this.baseUrl)
  }

  //function to get a particular contact
  getContact(contact_id:string){
    return this.http.get(`${this.baseUrl}/${contact_id}`)
  }

  //function to get paraticular group name
  getGroup(group_id:string){
    return this.http.get('http://localhost:3000/groups/'+group_id)
  }

  //function toget all group name
  getAllGroup(){
    return this.http.get('http://localhost:3000/groups')
  }

  //function to add contact to server
  addContact(contactBody:any){
    return this.http.post(this.baseUrl, contactBody)
  }

  //function to delete a contact
  deleteContact(contact_id:any){
    return this.http.delete(`${this.baseUrl}/${contact_id}`)
  }

  //function to update a contact
  editContact(contact_id:any,contact_body:any){
    return this.http.put(`${this.baseUrl}/${contact_id}`,contact_body)
  }
}
