const titleFixer = (number, str) => {
    const title = str.toLowerCase().split(" ").join("-");
    const finalTitle = `${number < 10 ? `0${number}` : number}-${title}.js`;
    console.log(finalTitle);
};

// Using
titleFixer(70, "Comparisons with the Logical Or Operator");

//pergi ke pasar terus ke kelas
// pergi ke kelas
