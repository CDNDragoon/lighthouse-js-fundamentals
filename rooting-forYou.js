const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3
  }
]
const metric = "redness"

function judgeVegetable(vegetables, metric) {
  for (let i = 0; i < vegetables.length; i++) {
    if ((vegetables[0][metric] > vegetables[1][metric]) && (vegetables[0][metric] > vegetables[2][metric])) {
      return vegetables[0].submitter;
    } else if ((vegetables[1][metric] > vegetables[0][metric]) && (vegetables[1][metric] > vegetables[2][metirc])) {
      return vegetables[1].submitter;
    } else if ((vegetables[2][metric] > vegetables[1][metric]) && (vegetables[2][metric] > vegetables[0][metric])) {
      return vegetables[2].submitter;
    }
  }
}

console.log(judgeVegetable(vegetables, "plumpness"));