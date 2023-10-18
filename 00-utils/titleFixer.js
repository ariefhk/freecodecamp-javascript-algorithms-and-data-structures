const titleFixer = (number, str) => {
    const title = str.toLowerCase().split(" ").join("-");
    const finalTitle = `${number < 10 ? `0${number}` : number}-${title}.js`;
    console.log(finalTitle);
};

// Using
titleFixer(30, "Check For Mixed Grouping of Characters");

//pergi ke pasar terus ke kelas
// pergi ke kelas
