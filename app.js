import { profaneBucket } from "./dictionary.js";

/**
 * Accepts one argument(string)
 * This happens to be your profane sentence or word
 * 
 *  @param text(string) required */

export default class ProfMod{
    constructor(text = ''){
        this.text = text;
    }

    #dictionary = profaneBucket;

    #detectedWords = [];


    /**
     * Scans the text to verify if it contains profane words
     * @returns boolean - TRUE | FALSE
     */
    test(){
    if(!this.text){
        console.error("No text detected");
        return 
    }

    if(typeof this.text !== 'string'){
        console.error("Non-string detected. Requires a string");

        return
        
    }


    let scan = this.text.toLocaleLowerCase().replace(/[.,?:;!@]/g, '').split(' ');

    if(scan.some(item => this.#dictionary.includes(item))){
        let filters = this.#dictionary.filter(item => scan.includes(item));

        this.#detectedWords.push(filters);
        return true;
    }

    return false
    // return lower
}

/**
 * Returns array of all profane words found in the text
 * @returns array[]
 */
show(){
    this.test();
    return this.#detectedWords.flat();
}

/**
 * Replaces all profane words with "***" 
 * @returns string
 */
sanitize(){
    this.test();
    let scan = this.text.toLocaleLowerCase().replace(/[.,?:;!@]/g, '').split(' ');

     let sentence = this.text.split(' ');

    let build = [];
   
        for(let i = 0; i<scan.length; i++){
            
            if(this.#detectedWords.flat().includes(scan[i])){
               sentence[i] = '***';
            }
            
            build.push(sentence[i]);
        }

    return build.join(' ');

}


}




// const msg = 'Fuck,,,, me harder. I need this ass'

// const eg = new ProfMod(msg);

// const result = eg.sanitize();

// console.log(result);


