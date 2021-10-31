<template>
    <div :class="$style['wrapper']">
        <p :class="$style['paragraph']">
            Passionate developer with the desire to create beautiful handcrafted sites that represent maintainability, high quality code, great performance and accessibility.
        </p>

        <a
            :class="$style['link']"
            href="mailto:daan@vosdewael.com"
        >
            Contact me
        </a>
    </div>
</template>

<style lang="postcss" module>
.wrapper {
    align-items: baseline;
    display: grid;
    gap: 12px;
    justify-items: start;
    margin-top: 3px;
}

.paragraph,
.link {
    font-size: 18px;
    line-height: 1.555556;
}

.paragraph {
    margin: 0;
}

.link {
    background: linear-gradient(var(--teal-100), var(--teal-100)) no-repeat 0 17px / 100% 8px;
    color: var(--gray-800);
}
</style>
