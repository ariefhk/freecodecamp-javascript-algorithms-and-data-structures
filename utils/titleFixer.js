const titleFixer = (number, str) => {
    const title = str.toLowerCase().split(" ").join("-");
    const finalTitle = `${number < 10 ? `0${number}` : number}-${title}.js`;
    console.log(finalTitle);
};

// Using
titleFixer(10, "Use Destructuring Assignment to Assign Variables from Objects");

//pergi ke pasar terus ke kelas
// pergi ke kelas
