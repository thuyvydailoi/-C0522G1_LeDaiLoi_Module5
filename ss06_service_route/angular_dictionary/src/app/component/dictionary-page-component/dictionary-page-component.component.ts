import {Component, OnInit} from '@angular/core';
import {IWord} from "../../model/iword";
import {DictionaryService} from "../../service/dictionary-service.service";

@Component({
  selector: 'app-dictionary-page-component',
  templateUrl: './dictionary-page-component.component.html',
  styleUrls: ['./dictionary-page-component.component.css']
})
export class DictionaryPageComponentComponent implements OnInit {
  words: IWord[] = [];

  constructor(private dictionaryService: DictionaryService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.words = this.dictionaryService.getAll();
  }
}
