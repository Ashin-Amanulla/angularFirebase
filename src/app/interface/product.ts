export interface Product {
    id: string,
    name: string,
    desc: string
}


//Interface defines what kind of data the program is expecting . we can say in typescript , interface describe the 'type' 
//of function or object or data we are processing.
//Here we define Product as something that have a id, name and desc with String types using interface , so that if somehow
//the data we are sending or recieving has unwanted data or wrong type, this interface will catch it as error.
