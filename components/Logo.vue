<template>
    <h1 :class="$style['h1']">Daan <span :class="$style['span']">Vos de</span> Wael</h1>
</template>

<style lang="postcss" module>
.h1 {
    font-size: 56px;
    font-weight: 400;
    line-height: 39.9766px;
    margin: 0;
    text-align: center;
    text-transform: uppercase;

    &::before {
        content: '';
        display: table;
        margin-bottom: -0.031em;
    }

    &::after {
        content: '';
        display: table;
        margin-top: 0.031em;
    }
}

.span {
    display: inline-block;
    font-weight: 200;
    padding: 9px 0;
}
</style>
