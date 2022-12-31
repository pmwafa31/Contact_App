import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

contact_id:string =''
contact:any
group_id:any
group_name:any
allGroups:any[] = []

constructor(private activatedRoute:ActivatedRoute, private api:ApiService, private router:Router) {}

ngOnInit(): void {
  this.activatedRoute.params
  .subscribe((data:any)=>{
    this.contact_id = data.contactId
  })
  
  this.api.getContact(this.contact_id).subscribe((data:any)=>{
    this.contact = data
    this.group_id =data.groupId

    //api for group name
    this.api.getGroup(this.group_id).subscribe((data:any)=>{
      this.group_name = data.name
      
    })
  })

  //api to get all groups
  this.api.getAllGroup().subscribe((data:any)=>{
    this.allGroups = data
  })
}
//function to update contact
updateContact(){
  this.api.editContact(this.contact_id, this.contact)
  .subscribe((data:any)=>{
    this.router.navigateByUrl('/contacts/view/'+this.contact_id)
  })
}
}
