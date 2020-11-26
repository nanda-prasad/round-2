import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { GodbtechserviceService } from 'src/app/godbtechservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData: any ;
  displayedColumns: string[] = ['id', 'first_name', 'last_name','email'];
  constructor(private service: GodbtechserviceService) { }

  ngOnInit() {
    this.getUSer();
  }
  getUSer(){
    this.service.getUserData().subscribe(res=>{
      debugger
      let data : any = res;
      this.userData = new MatTableDataSource(data.data);
    })
  }
  logout(){
    this.service.logout();
  }

}
