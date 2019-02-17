import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  private joke: string;

  constructor() { }

  ngOnInit() {
    fetch('http://api.icndb.com/jokes/random/').then(
      res => res.json()
    ).then(result => this.joke = result.value.joke)
    .catch((err) => console.log(err))
  }

}
