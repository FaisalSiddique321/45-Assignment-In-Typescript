var name1 = "faisal siidique";
console.log("lowercase:", name1.toLowerCase());
console.log("uppercase:", name1.toUpperCase());
console.log("titlecase:", name1.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
