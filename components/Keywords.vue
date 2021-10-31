<template>
    <p :class="$style['paragraph']">
        Curious <span :class="$style['keyword']">styling</span> connoisseur, fervent <span :class="$style['keyword']">vanilla JS</span> fanboi, excited <span :class="$style['keyword']">Vue.js</span> practitioner, thorough code <span :class="$style['keyword']">linter</span>, cautious <span :class="$style['keyword']">SVG</span> optimizer.
    </p>
</template>

<style lang="postcss" scoped>
.paragraph {
    font-size: 36px;
    font-style: italic;
    font-weight: 300;
    line-height: 1.333334;
    margin: 0;
    text-align: center;

    @media (--large) {
        text-align: right;
    }
}

.keyword {
    background: linear-gradient(var(--teal-100), var(--teal-100)) no-repeat 0 30px / 100% 16px;
}
</style>
