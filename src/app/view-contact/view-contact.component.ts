import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyContact } from 'src/models/myContacts';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{
contact_id:string =''
contact_detail:any
group_id:any
group_name:any

constructor(private activatedRoute:ActivatedRoute, private api:ApiService) {}

ngOnInit(): void {
  this.activatedRoute.params
  .subscribe((data:any)=>{
    this.contact_id = data.contactId
  })
  
  this.api.getContact(this.contact_id).subscribe((data:any)=>{
    this.contact_detail = data
    this.group_id =data.groupId

    //api for group name
    this.api.getGroup(this.group_id).subscribe((data:any)=>{
      this.group_name = data.name
      
    })
  })

}
}
