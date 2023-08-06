import { Component, OnInit } from '@angular/core';

import { CatalogRepositoryService } from './catalog-repository.service';
import { UserRepositoryService } from '../services/user-repository.service';
import { IClass } from './class.model';
import { FilterClassesService } from './filter-classes.service';

@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit{
  classes: IClass[] = [];
  visibleClasses: IClass[] = [];

  constructor(private catalogRepository: CatalogRepositoryService, public userRepositoryService: UserRepositoryService, private filterClassesService: FilterClassesService) { }

  ngOnInit() {
    this.catalogRepository.getCatalog()
      .subscribe((classes: IClass[]) => { this.classes = classes; this.applyFilter('') });
  }

  enroll(classToEnroll: IClass) {
    classToEnroll.processing = true;
    this.userRepositoryService.enroll(classToEnroll.classId)
      .subscribe({
        error: (err) => { console.error(err); classToEnroll.processing = false },
        complete: () => { classToEnroll.processing = false; classToEnroll.enrolled = true; },
      });
  }

  drop(classToDrop: IClass) {
    classToDrop.processing = true;
    this.userRepositoryService.drop(classToDrop.classId)
      .subscribe({
        error: (err) => { console.error(err); classToDrop.processing = false },
        complete: () => { classToDrop.processing = false; classToDrop.enrolled = false; }
      });
  }

  applyFilter(filter:string){
    this.visibleClasses = this.filterClassesService.filterClasses(filter, this.classes);
  }
}
