import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/post';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private dataService: DataService) {}

  displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  dataSource = new PostDataSource(this.dataService);
}

export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Post[]> {
    return this.dataService.getData();
  }

  disconnect() {}
}
