// Importing a named export (must use same name)
import { greetings } from "./welcomeMessege.js";

// Importing the default export (name can be anything)
import YourUserName from "./welcomeMessege.js";

// Importing EVERYTHING as an object
import * as welcomeMessege from "./welcomeMessege.js";

// Using named export via namespace object
welcomeMessege.greetings("Haseeb", "Dar");

// Using named export directly
greetings("Basit", "Rather");

// Using default export
YourUserName("Faisal", "Harray");
