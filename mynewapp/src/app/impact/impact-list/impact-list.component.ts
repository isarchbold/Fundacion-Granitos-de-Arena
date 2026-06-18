import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impact-list',
  standalone: false,
  templateUrl: './impact-list.component.html',
  styleUrl: './impact-list.component.css',
})
export class ImpactListComponent implements OnInit {

  impactedChildren = 0;
  pragmaViews = 0;
  territories = 0;
  volunteers = 0;

  ngOnInit(): void {
    this.animateValue('impactedChildren', 1000, 2000);
    this.animateValue('pragmaViews', 10000, 2000);
    this.animateValue('territories', 4, 1500);
    this.animateValue('volunteers', 100, 2000);
  }

  animateValue(
    property: keyof ImpactListComponent,
    endValue: number,
    duration: number
  ): void {

    const startValue = 0;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = endValue / totalSteps;

    let current = startValue;

    const timer = setInterval(() => {
      current += increment;

      if (current >= endValue) {
        (this[property] as number) = endValue;
        clearInterval(timer);
      } else {
        (this[property] as number) = Math.floor(current);
      }
    }, stepTime);
  }
}