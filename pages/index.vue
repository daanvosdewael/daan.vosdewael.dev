<template>
    <div>
        <header :class="$style['header']">
            <Logo />
            <Intro />
        </header>

        <footer :class="$style['footer']">
            <Keywords />
        </footer>
    </div>
</template>

<style lang="postcss" module>
.header {
    align-content: start;
    display: grid;
    gap: 56px;
    margin: 49px 32px 32px;

    @media (--large) {
        grid-area: 1;
    }
}

.footer {
    margin: 0 32px 32px;

    @media (--large) {
        align-self: end;
        grid-area: 1 / 2;
        justify-self: end;
        margin: 0 32px 37px;
        max-width: 600px;
    }
}
</style>
