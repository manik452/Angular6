import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './app.server.html',
  styleUrls: ['./app.server.css']
  /*//styleUrls: ['./app-server.css']*/
  // styleUrls: './node_modules/dist/css/bootstrap.css'
})


export class ServerComponent implements OnInit {
  disableButton = false;
  serverCreateStatus = 'server is not create yet';
  serverUpdate = '';
  serverCreated = false;
  serverStatus = 'offline';


  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Offline' : 'Online';
    setTimeout(() => {
      this.disableButton = true;
    }, 2000);

  }

  serverCreateRequest() {
    this.serverCreateStatus = 'server is created';
    this.serverCreated = true;
  }

  serverUpdateRequest(event: any) {
    this.serverUpdate = event.target.value;
  }

  ngOnInit(): void {
  }

  getColor() {

  }

}
