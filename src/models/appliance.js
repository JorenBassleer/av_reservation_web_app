export default class Appliance {
  constructor(data = []) {
    this.$collection = [];

    if (data.length) this.record(data);
  }

  record(data) {
    this.$collection.push(...data);
  }

  all() { }

  find() { }

  update() { }
}
