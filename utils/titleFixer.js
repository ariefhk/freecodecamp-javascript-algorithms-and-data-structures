const titleFixer = (number, str) => {
    const title = str.toLowerCase().split(" ").join("-");
    const finalTitle = `${number < 10 ? `0${number}` : number}-${title}.js`;
    console.log(finalTitle);
};

// Using
titleFixer(110, "Use the Conditional Ternary Operator");

//pergi ke pasar terus ke kelas
// pergi ke kelas
