import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alg-detail',
  templateUrl: './alg-detail.page.html',
  styleUrls: ['./alg-detail.page.scss'],
  standalone: false
})
export class AlgDetailPage {
  cubeId = '';
  setId = '';
  algId = '';
  algData: any;

  constructor(private route: ActivatedRoute) {
    this.cubeId = this.route.snapshot.paramMap.get('cubeId') || '';
    this.setId = this.route.snapshot.paramMap.get('setId') || '';
    this.algId = this.route.snapshot.paramMap.get('algId') || '';

    const allCubes = history.state.allCubes;

    if (allCubes?.[this.cubeId]) {
      const set = allCubes[this.cubeId].sets.find((s: any) => s.id === this.setId);
      this.algData = set?.cases.find((a: any) => a.id === this.algId);
    }
  }
}
