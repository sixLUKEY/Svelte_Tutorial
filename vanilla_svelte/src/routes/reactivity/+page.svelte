<script>
    let count =  0;
    let color = '';
    let numbers = [1, 2, 3, 4];
    //? Reactive Values
    $: doubled = count * 2;

    $: console.log(`the count is ${ count }`)

    $: if ( count >= 10 ){
        color = 'red'
    }

    let limit = 10;
    function increment(){
        while( count < limit )
            return count += 1;
    }

    function addNumber(){
        numbers = [...numbers, numbers.length + 1];
    }

    $: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0)
</script>

<button on:click={increment}>
    Clicked { count }
    { count === 1 ? 'time' : 'times' }
</button>

<p style="color: { color };">{ count } doubled is { doubled }</p>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
    Add a number
</button>