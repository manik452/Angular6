import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dream-test-app';
  serverElements = [{type: 'server', name: 'Testser', content: 'just test'}];
  loadedFeature = 'recipe';
  oddNumber = false;
  evenary = [ 2, 4];
  oddary = [1, 3, 5];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }


  onVavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
