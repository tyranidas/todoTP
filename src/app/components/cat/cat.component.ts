import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  cat$: BehaviorSubject<Categorie[]> = this._catService.cat$;
 
  @Output() catSelected = new EventEmitter<Categorie>() 
constructor(private _catService :CategorieService){}



  ngOnInit(): void {
    this._catService.findAll().subscribe();
  }
  
}
