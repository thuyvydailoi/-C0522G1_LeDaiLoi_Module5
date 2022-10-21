import { Component, OnInit } from '@angular/core';
import {IWord} from "../../model/iword";
import {DictionaryService} from "../../service/dictionary-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail-component',
  templateUrl: './dictionary-detail-component.component.html',
  styleUrls: ['./dictionary-detail-component.component.css']
})
export class DictionaryDetailComponentComponent implements OnInit {
  words: IWord;
  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.words = this.dictionaryService.findById(id);
  }

}
