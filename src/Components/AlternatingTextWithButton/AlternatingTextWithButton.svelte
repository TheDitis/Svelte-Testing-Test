<script lang="ts">
    export let index: number = 0;
    const options: string[] = ['no click', 'HI!', 'stop!'];

    const onClick = () => {
        index = (index + 1) % options.length;
    }
</script>


<button on:click={onClick}>next</button>
<p>{options[index]}</p>