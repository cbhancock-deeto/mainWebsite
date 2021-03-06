import tetrisImg from "../../assets/images/tetristhumbnail.PNG";
import DALimg from "../../assets/images/deliberateAbundanceThumbnail.PNG";
import punImg from "../../assets/images/pun.png";

var Projects = [
	{
		key: 3,
		url: "https://flamboyant-curran-acf969.netlify.app/",
		github:
			"https://github.com/cbhancock-deeto/pun-front-end",
		img: punImg,
		title: "The Punny API",
		description:
			"A simple front-end which pings an API that I created stocked with more that 50 jokes.  The API uses a Node.js backend that connects to a MongoDB database through Mongoose.",
	},
	{
		key: 2,
		url: "//deliberate-abundance-website.netlify.app",
		github:
			"//github.com/cbhancock-deeto/deliberate-abundance-website",
		img: DALimg,
		title: "Deliberate Abundance Website",
		description:
			"A website I was commissioned to make. This website utilizes React's Material-UI library to create a sleek and efficient end-user experience.",
	},
	{
		key: 1,
		url: "//cbhancock-deeto.github.io/tetrisGame",
		github: "//github.com/cbhancock-deeto/tetrisGame",
		img: tetrisImg,
		title: "JavaScript Tetris",
		description:
			"A project made in JavaScript, HTML, and CSS with no additional libraries or frameworks.  The purpose of this project was to familiarize myself with fundamental JavaScript principles.",
	},
];

export default Projects;
