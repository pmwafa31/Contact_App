import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/models/myContacts';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  
  allContacts:MyContact[]=[]
  searchKey:string=''
  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.getAllContact()
  }

  //function to get all contacts
  getAllContact(){
    this.api.getAllContacts().subscribe((data:any)=>{
      //console.log(data);
      this.allContacts = data
    })
  }

  search(event:any){
    this.searchKey = event.target.value
  }

  deleteContact(contact_id:any){
    this.api.deleteContact(contact_id).subscribe((data:any)=>{
      this.getAllContact()
    })
  }
}
