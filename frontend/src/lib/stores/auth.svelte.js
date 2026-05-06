class AuthStore {
  user = $state(null);

  get isAuthenticated() {
    return this.user !== null;
  }

  login(user) {
    this.user = user;
  }

  logout() {
    this.user = null;
  }
}

export const auth = new AuthStore();
