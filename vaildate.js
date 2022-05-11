module.exports.Vaildate = class  {
  rules!;

  constructor() {
    this.rules = [];
  }

  addRule(rule) {
    if(this.rules.indexOf(rule)  === -1 && !this.rules.find(i => i.name === rule.name)) {
      this.rules.push(rule);
    }
  }

  addRules(rules) {
    this.rules = this.rules.concat(rules);
  }

  remove(name) {
    if(!name) {
      return;
    }
    const index = this.rules.findIndex(i => i.name === name);
    this.rules.splice(index, 1);
  }

  clean() {
    this.rules = [];
  }

  check() {
    for(let i = 0; i<this.rules.length;i++) {
      if(!this.rules[i].rule) {
        this.rules[i].handle();
        return false;
      }
    }
    return true;
  }
};