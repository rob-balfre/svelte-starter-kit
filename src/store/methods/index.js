export default {
  increment() {
    const count = this.get('count') + 1;
    this.set({ count });
  },
  decrement() {
    const count = this.get('count') - 1;
    this.set({ count });
  }
}