const titleFixer = (number, str) => {
    const title = str.toLowerCase().split(" ").join("-");
    const finalTitle = `${number < 10 ? `0${number}` : number}-${title}.js`;
    console.log(finalTitle);
};

// Using
titleFixer(50, "Passing Values to Functions with Arguments");
