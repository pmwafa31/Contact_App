import { Component, OnInit } from '@angular/core';
import { MyContact } from 'src/models/myContacts';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  allGroups:any[] = []
  contactName:string = ''
  contact:MyContact = {} as MyContact
  constructor(private api: ApiService, private router:Router){}
  
  ngOnInit():void {
    this.api.getAllGroup().subscribe((data:any)=>{
      this.allGroups = data
    })
    }
  
  addContact(){
    this.api.addContact(this.contact).subscribe((data:any)=>{
      //navigate to admin page
      this.router.navigateByUrl('')
    })
  }
}
