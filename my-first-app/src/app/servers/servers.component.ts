import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = 'No Server Was Created!!';
  serverName = '';
  userName = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server Was Crated! Name is ' + this.serverName;
  }

  onAddUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onClearUserName() {
    this.userName = '';
  }

}
