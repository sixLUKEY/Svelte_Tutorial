export async function getRandomNumber(){
    // Fetch a raandom number between 0 and 100
    // ( with a delay, so that we can see it )
    // let answer;
    // let timeout;

    // function myFunction(){
    //     timeout = setTimeout(generateNumber, 3000)
    // }

    // function generateNumber(){
    //     answer = Math.random() * 1000
    // }

    const res = await fetch('/random-number');

    if ( res.ok ){
        return await console.log(res);
    } else {
        //Sometimes Api fails
        throw new Error('Request failed');
    }
}