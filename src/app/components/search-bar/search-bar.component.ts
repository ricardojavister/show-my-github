import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { Repository } from '../../interfaces/repository';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent implements OnInit {
  form!: FormGroup;
  currentUser!: User;
  repos!:Repository[];
  constructor(private fb: FormBuilder, private userService: UserService){

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      searchText: [null, Validators.required],
    });
  }

  search(){
    const searchText = this.form.value.searchText;
    this.userService.getUserName(searchText).subscribe(data=>{
      this.currentUser = data;
    });
  }

  showRepos(){
    const searchText = this.form.value.searchText;
    this.userService.getRepos(searchText).subscribe(data=>{
      this.repos = data;
    });
  }
}
