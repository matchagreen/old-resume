<script lang='ts'>
    export let onButtonPress: (() => void);
</script>

<div class='aboutme-contents'>
    <div class="box container">
        <h3 class="title">Hello World!</h3>
        <p class="block">My name is Alan Perez. I am a soon-to-graduate student at the University of Texas at El Paso in the field of computer science. I have experience building REST APIs, and I am interested in doing backend work and mobile development.</p>
        <button
            class="button is-primary is-outlined is-rounded"
            on:click={onButtonPress}
        >
            About me
        </button>
      </div>
</div>

<style>
    .aboutme-contents {
        height: 100vh;
        min-height: 600px;
        padding-top: 50px;
        padding-left: 30px;
        padding-right: 30px;
    }
</style>