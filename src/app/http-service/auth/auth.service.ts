import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { BehaviorSubject, Subject, takeUntil } from "rxjs";

type LoginType = 'IN' | 'OUT'

@Injectable()
export class AuthService implements OnInit, OnDestroy{
  private loginState$: BehaviorSubject<LoginType> = new BehaviorSubject<LoginType>('OUT');
  private unsubscribe$: Subject<boolean> = new Subject();

  public isLoggedIn: boolean = false;

  ngOnInit(): void{
    this.loginState$.pipe(takeUntil(this.unsubscribe$)).subscribe((loginState: LoginType) => this.isLoggedIn = loginState === 'IN')
    this.unsubscribe$.next(true);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.complete();
  }
}
