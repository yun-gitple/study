var data = {
  linkTypeCode: "NOTIF",
  category: "BETTERDAY",
  sub_category: "investment"
}

console.log("data: ", data);

console.log("data stringify: ", JSON.stringify(data));

console.log("date: ", new Date(0));

const subCategory = null;
console.log("sub category: ", data[subCategory]);

if(subCategory) {
  console.log(true);
} else {
  console.log(false);
}