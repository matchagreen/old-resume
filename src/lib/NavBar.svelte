<script lang='ts'>
    import flowerImg from '../assets/flower.jpg'
    export let refs: {name: string, ref: string}[];
</script>

<nav class='navbar is-fixed-top is-dark' aria-label='main navigation'>
    <div class='navbar-brand'>
        <!-- <img src={flowerImg} alt='Flower in water.' class='navbar-img'> -->
        &nbsp;
        {#each refs as ref}
            <a class='navbar-item' href={ref.ref}>{ref.name}</a>
        {/each}
    </div>
</nav>

<style>
    /* .navbar-img {
        height: 40px;
        width: 40px;
        border-radius: 5px;
        padding-left: 10px;
        padding-right: 10px;
    } */
</style>