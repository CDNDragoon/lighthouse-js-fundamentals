const instructorWithLongestName = function(instructors) {
  var longest = [];
  for (let i = 0; i < instructors.length; i++) {
    if (longest.length < instructors[i].name.length) {
    longest = instructors[i].name
    }
  }
  return longest;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));