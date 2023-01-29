import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { concatMap, delay, exhaustMap, from, mergeMap, Observable, of, switchMap } from 'rxjs';
import { SwitchMapService } from './map/switchMap.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  public clicked(): void{
    console.log('clicked');
    this.switchService.getCars();
  }


  // public result: string = 'string';
  // public form: FormGroup = new FormGroup({});

  constructor(private switchService: SwitchMapService) { }

  ngOnInit(): void {

    // this.form = new FormGroup({
    //   username: new FormControl()
    // });

    // const obsOne: Observable<string[]> = of(["first","second", "third"]);

    // const obsTwo: Observable<string[]> = of(["fourth", "fifth", "sixth"]);

    // console.log('Simple echo');
    // obsOne.subscribe(
    //   data => console.log(data)
    //   )

    // console.log('concatMap');
    // this.form.valueChanges.pipe(
    //   concatMap(formValue => of(formValue).pipe(delay(1000)))
    //   ).subscribe(
    //     data => console.log(data)
    //     )

    // console.log('switchMap');
    // this.form.valueChanges.pipe(
    //   switchMap(formValue => of(formValue).pipe(delay(1000)))
    //   ).subscribe(
    //     data => console.log(data)
    //     )

    // console.log('mergeMap');
    // this.form.valueChanges.pipe(
    //   mergeMap(formValue => of(formValue).pipe(delay(1000)))
    //   ).subscribe(
    //     data => console.log(data)
    //     )

    // console.log('exhaustMap');
    // this.form.valueChanges.pipe(
    //   exhaustMap(formValue => of(formValue).pipe(delay(1000)))
    // ).subscribe(
    //   data => console.log(data)
    // )
  }
}
