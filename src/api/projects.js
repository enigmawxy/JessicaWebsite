export default {
    fetchProjects: () => new Promise( (resolve, reject) => resolve( [
        {
            id: "ExcelHub",
            name: "ExcelHub",
            subtitle: "The tool which can be used to export excel file data to database",
            description: "In the practice of manufacturing enterprises, the most widely used tool for recording data is still Excel spreadsheets. In the process of upgrading and digital transformation for manufacturing industry, historical Excel data should be stored in forms of relational database so that data can be easily managed and analyzed. However, these Excel data can be said to have different formats and data, and an effective tool is needed to smoothly migrate the data. At the same time, limited to the level of informatization and computer technology, a large number of manufacturing workers are still accustomed or willing to use Excel as a daily data entry tool, so in the process of upgrading and transformation, some data entry issues that cannot be collected by intelligent machines still need to be considered , an effective way is to keep the entry in Excel format, and after the entry is completed, it can be imported into the database through simple operations. ExcelHub can solve the data import and daily data entry of Excel files.<br/>You may say that browser application software with B/S architecture is popular now, and who still writes this kind of client software, but the actual situation is that manufacturing practitioners are very accustomed to using Excel to record data, and it can be used quickly Excel provides shortcut keys to quickly enter data, and Excel also has various practical functions, which are unmatched by browser applications. Therefore, I was fortunate to participate in the development of this tool. I am glad that this tool In practice, it has been supported and applied by enterprises, and solved the problem of data collection and standardization.",
            links: [ {url: "https://excel-pro.github.io", name: "Learn more about Excel Hub", icon: "fab fa-google-play"} ],            
            secondaryLinks: [ {url: "https://excel-pro.github.io/", name: "Learn more about Excel Hub", icon: "fas fa-external-link-alt"} ],
            labels: [ "BI","Visual Studio","C#" ],
            imgSmall: "https://github.com/enigmawxy/mandelbrot/blob/main/src/pics/Splash_small.jpg?raw=true",
            img: "https://github.com/enigmawxy/mandelbrot/blob/main/src/pics/ExcelMain.png?raw=true",
            highlight: true
        },
        {
            id: "PDDA",
            name: "PDDA",
            subtitle: "Data Analysis for appearance inspection of pre-spinning and post-spinning Ingots",
            description: "This project includes two aspects. One is the automatic external inspection of the silk ingot. By integrating the KEYENCE photoelectric sensing/detection technology, the automatic detection of various defects in the appearance of the silk ingot is realized and the machine learning algorithm is adjusted to continuously improve the detection. The second is to improve the production process through defect data analysis. Microsoft PowerBI is used in data analysis and presentation, which basically realizes the real-time requirements of detection and data analysis. You can see the operation of automatic visual inspection through Youtube video. As for data analysis, due to enterprise data security issues, it is inconvenient to show here. The display reflects the detection data conveniently and quickly, and provides reliable data support for the business decision-making of the enterprise.",
            links: [ {url: "https://www.youtube.com/watch?v=dANfwUuG1kY", name: "See it on Youtube", icon: "fab fa-google-play"} ],
            secondaryLinks: [ {url: "https://www.youtube.com/watch?v=dANfwUuG1kY", name: "See it on Youtube", icon: "fas fa-external-link-alt"} ],
            labels: [ "BI", "Power BI" ],
            imgSmall: "https://github.com/enigmawxy/mandelbrot/blob/main/src/pics/PBI.jpg?raw=true",
            img: "https://github.com/enigmawxy/mandelbrot/blob/main/src/pics/da.jpg?raw=true",
            highlight: true
        },        
        {
            id: "Mandelbrot",
            name: "Mandelbrot",
            subtitle: "Approach for Generating Mandelbrot with Numbia Library",
            description: "Occasionally learned about fractal geometry from Wikipedia and found it interesting. Here, I studied the Mandelbrot set and implemented it in Python language, and made a fractal animation, which was put on Youtube as an attempt to study fractal geometry, so as to experience the infinite charm of mathematics.",
            links: [ {url: "https://www.youtube.com/watch?v=hmhymdSot00", name: "See my mandelbrot gif animation", icon: "fab fa-google-play"} ],
            secondaryLinks: [ {url: "https://github.com/enigmawxy/mandelbrot", name: "Source Code on Github", icon: "fas fa-external-link-alt"} ],
            labels: [ "Fractal", "Python" ],
            imgSmall: "https://github.com/enigmawxy/mandelbrot/blob/main/src/pics/mandelbrot_1558865893.850097.png?raw=true",
            img: "https://github.com/enigmawxy/mandelbrot/blob/main/src/pics/2019-05-26-19_31_57.png?raw=true",
            highlight: true
        },        
        {
            id: "Neural network",
            name: "Neural network",
            subtitle: "Approximate function using BP neural network",
            description: "Backpropagation is a very important concept in neural networks. The purpose of this project is to realize an application scenario of deep learning by building neural networks - simulating mathematical functions and calculating deviations. Through this project, I have deepened my understanding of the theory and practice of neural networks.",
            links: [ {url: "https://www.youtube.com/watch?v=hmhymdSot00", name: "See my mandelbrot gif animation", icon: "fab fa-google-play"} ],
            secondaryLinks: [ {url: "https://github.com/enigmawxy/mandelbrot", name: "Source Code on Github", icon: "fas fa-external-link-alt"} ],
            labels: [ "Neural Network", "Python" ],
            imgSmall: "https://github.com/enigmawxy/mandelbrot/blob/main/src/pics/20221005_small.png?raw=true",
            img: "https://github.com/enigmawxy/mandelbrot/blob/main/src/pics/20221005_Large.png?raw=true",
            highlight: true
        }, 
        ] ) )
}