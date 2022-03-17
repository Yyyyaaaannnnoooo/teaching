class Brain{
    constructor(num){
        this.lr = 0.001;
        this.len = num;//we store the lenght of the weight array in a variable
        this.weights = new Array (num);
        this.initWeights();
    }
    /**
     * initialize the weights to a random number between -1 and 1
     */
    initWeights(){
        for (let i = 0; i < this.len; i++) {
            this.weights[i] = (Math.random() * 2) - 1;
        }
    }
    /**
     * predicts an output based on the input
     * @param {Array} inputs an array of input data
     * @returns the sigmoid of the product of all inputs with the weights
     */
    predict(inputs){
        let sum = 0;
        for (let i = 0; i < this.len; i++){
            //sum = ∑ w * inputs
            sum += inputs[i] * this.weights[i];
        }
        return this.activation(sum);
    }
    /**
     * this function tunes the weight to always get the right output
     * @param {Array} inputs input data
     * @param {int} answer the correct output
     */
    train(inputs, answer){
        let guess = this.predict(inputs);
        let error = answer - guess;
        for (let i = 0; i < this.len; i++){
            // Gradient descent
            this.weights[i] += this.lr * inputs[i] * error;
        }
    }
    print(){
        console.table(this.weights);
    }
    /**
     * returns the sigmoid of a value
     * squishes a value between 0 and 1
     * @param {float} num 
     * @returns value between 0 and 1
     */
    sigmoid(num){
        return 1 / (1 + Math.exp(-num));
    }
    /**
     * @param {float} num 
     * @returns 0 if num < 0 or 1 in the other case
     */
    activation(num){
        return num > 0 ? 1 : 0;
    }
}

class Trainer{
    /**
     * a traner object with a given position and a label
     * @param {float} x value of the color
     * @param {int} a the label of our input
     */
    constructor(x, a){
        this.inputs = [];
        this.inputs[0] = x;
        this.inputs[1] = 1;//the bias
        this.answer = a;
    }
}