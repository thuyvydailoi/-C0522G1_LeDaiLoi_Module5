import {Injectable} from '@angular/core';
import {IWord} from "../model/iword";

@Injectable({
  providedIn: 'root'
})

export class DictionaryService {

  dictionary: IWord[] = [{
    id: 1,
    word: 'House',
    mean: 'Ngôi nhà'
  },
    {
      id: 2,
      word: 'Cat',
      mean: 'Con mèo'
    },
    {
      id: 3,
      word: 'Dog',
      mean: 'Con chó'
    },
    {
      id: 4,
      word: 'Dragon',
      mean: 'Con rồng'
    },
    {
      id: 5,
      word: 'Crazy',
      mean: 'Điên cuồng'
    },
    {
      id: 6,
      word: 'Flower',
      mean: 'Bông hoa'
    }
  ]

  constructor() {
  }

  findById(id: number): IWord {
    return this.dictionary.find(dictionary => dictionary.id === id);
  }

  getAll() {
    return this.dictionary;
  }
}
