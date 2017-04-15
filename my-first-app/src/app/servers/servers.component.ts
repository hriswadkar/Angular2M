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
  displayStatus = false;
  servers = ['Testserver','Testserver2'];
  counter = 0;
  displayCount = [];

  constructor() { 
    this.counter = 0;
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Was Crated! Name is ' + this.serverName;
  }

  onAddUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onClearUserName() {
    this.userName = '';
  }

  onDisplayDetails() {
    this.displayStatus = !this.displayStatus;
    this.counter++;
    this.displayCount.push(this.counter);
  }
}
