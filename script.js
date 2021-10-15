var app = new Vue({
  el: "#app",
  watch: {
    persons(value) {
      if (value === "") {
        console.log(value);
        this.personsLessThanZero = false;
        return;
      }
      if (isNaN(value)) {
        return;
      }
      this.personsLessThanZero = value <= 0;
    },
  },
  data: {
    bill: "",
    persons: "",
    percentage: 0,
    customPercentage: "",
    amount: 0,
    total: 0,
    personsLessThanZero: false,
  },
  methods: {
    calc() {
      if (
        isNaN(this.bill) ||
        isNaN(this.percentage) ||
        isNaN(this.percentage) ||
        isNaN(this.customPercentage)
      ) {
        this.amount = 0;
        this.total = 0;
        return;
      }

      if (this.customPercentage > 0 && this.customPercentage !== "") {
        this.percentage = this.customPercentage / 100;
      }

      if (this.bill > 0 && this.percentage > 0 && this.persons > 0) {
        this.amount =
          ((this.bill || 0) / (this.persons || 1)) * this.percentage;
        this.total = (this.bill || 0) / (this.persons || 1) + this.amount;
      } else {
        this.amount = 0;
        this.total = 0;
      }
    },

    changePrecntage(pct) {
      this.percentage = pct;
      this.customPercentage = "";
      this.calc();
    },
    reset() {
      this.bill = "";
      this.persons = "";
      this.percentage = "";
      this.customPercentage = "";
      this.amount = 0;
      this.total = 0;
    },
  },
});