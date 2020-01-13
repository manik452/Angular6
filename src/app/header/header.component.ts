import {Component, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {Response} from '@angular/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorageService: DataStorageService) {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  saveRecipes() {
    this.dataStorageService.putStorage()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  fetchRecipes() {
    this.dataStorageService.getRecipes();
  }
}
