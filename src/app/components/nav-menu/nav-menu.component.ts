import { Component, Input } from '@angular/core';
import { CurrentNode, NavigationNode } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-nav-menu',
  template: `
  <app-nav-item *ngFor="let node of filteredNodes" [node]="node" [selectedNodes]="currentNode?.nodes" [isWide]="isWide">
  </app-nav-item>`
})
export class NavMenuComponent {
  @Input() currentNode: CurrentNode | undefined;
  @Input() isWide = false;
  @Input() nodes: NavigationNode[];
  get filteredNodes() { return this.nodes ? this.nodes.filter(n => !n.hidden) : []; }
}
