 import path from "path";
const __dirname = path.resolve();

// Show home page
export const home = (req, res) => {
    res.sendFile(__dirname + "/source/pages/home.html");
}

// Show today's date
export const getTodaysDate = (req, res) => {
    let date = new Date();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
    res.json({
        today: `${month}/${day}/${year}`
    });
}

// Get month names
export const getMonthNames = (req, res) => {
    res.json({
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
    });
}

// Get list of peopleI
export const getPeople = (req, res) => {
    res.json([
        {
            FirstName: 'Yann',
            LastName: 'Mulonda',
            Title: 'Software Engineer',
            LinkedIn: 'https://www.linkedin.com/in/yannmjl/',
        },
        {
            FirstName: 'Bernard',
            LastName: 'Ng',
            Title: 'Software Developer',
            LinkedIn: 'https://www.linkedin.com/in/bernard-ngandu/',
        },
        {
            FirstName: 'Clerc',
            LastName: 'Kapema',
            Title: 'Web Developer',
            LinkedIn: 'https://www.linkedin.com/in/clerc-ngonga-b1253b174/',
        },
        {
            FirstName: 'Gloire',
            LastName: 'Kafwalubi',
            Title: 'Web Developer',
            LinkedIn: 'https://www.linkedin.com/in/gloire-kafwalubi-3152871a0/',
        }
    ])
}
