// user-list.ts
import { Component, OnInit, inject, signal } from '@angular/core';
import {UserApi } from '../../services/user.api';
import {User} from '../../models/user.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.html'
})
export class UserList implements OnInit {
  private userApi = inject(UserApi);

  users = signal<User[]>([]);
  isLoading = signal(false);
  isDeleting = signal<string | null>(null);
  errorMessage = signal<string | null>(null);

  async ngOnInit() {
    await this.loadUsers();
  }

  async loadUsers() {
    this.isLoading.set(true);
    try {
      const users = await this.userApi.getUsers();
      this.users.set(users);
    } catch (error) {
      this.errorMessage.set((error as Error).message);
    } finally {
      this.isLoading.set(false);
    }
  }

  async deleteUser(userId: string) {
    this.isDeleting.set(userId);
    try {
      await this.userApi.deleteUser(userId);
      this.users.update(users => users.filter(u => u.id !== userId));
    } catch (error) {
      this.errorMessage.set((error as Error).message);
    } finally {
      this.isDeleting.set(null);
    }
  }
}
