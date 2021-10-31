<template>
    <main :class="$style['main']">
        <header :class="$style['header']">
            <Logo />
            <Intro />
        </header>

        <footer :class="$style['footer']">
            <Keywords />
        </footer>
    </main>
</template>

<style lang="postcss" module>
.main {
    align-content: center;
    background-color: var(--teal-50);
    display: grid;
    min-height: calc(100vh - 32px);
    min-width: calc(100vw - 32px);

    @media (--large) {
        align-content: initial;
        grid-template-columns: 384px 1fr;
    }
}

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
