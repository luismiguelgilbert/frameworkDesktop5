<template>
  <div class="grid-item">
    <slot name="content"></slot>
  </div>
</template>

<style lang="scss" scoped>

//Grayscale
$black: #1E2020;
$gray-primary: #4F5354;
$gray-medium: #606163;
$gray-medium-light: #A5A5A5;
$gray-light: #C8CED3;
$gray-lighter: #E8E8E8;
$gray-lightest: #f5f5f5;
$white: #ffffff;

// Breakpoints
$small-upper-breakpoint: 600px;
$mobile-upper-breakpoint: 960px;
$medium-upper-breakpoint: 1264px;
$large-upper-breakpoint: 1904px;

//GridCard Init

$border: solid 1px $gray-medium-light;
$selector-size: 40px;
$grid-cols: 12;

.grid-item {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  box-shadow: 0px 1px 4px 1px rgba(30, 32, 32, 0.13);
  border: $gray-lighter solid 1px;
  background-color: $white;
  border-radius: 5px;
}

@for $i from 1 through $grid-cols {
  .#{hootcol-sm}-#{$i} {
    grid-column: span #{$i};
    max-width: 100%;
  }
}

@media screen and (min-width: $small-upper-breakpoint) and (max-width: $mobile-upper-breakpoint) {
  @for $i from 1 through $grid-cols {
    .#{hootcol-md}-#{$i} {
      grid-column: span #{$i};
      max-width: 100%;
    }
  }
}

@media screen and (min-width: $mobile-upper-breakpoint) and (max-width: $medium-upper-breakpoint) {
  @for $i from 1 through $grid-cols {
    .#{hootcol-lg}-#{$i} {
      grid-column: span #{$i};
      max-width: 100%;
    }
  }
}

@media screen and (min-width: $medium-upper-breakpoint) {
  @for $i from 1 through $grid-cols {
    .#{hootcol-xl}-#{$i} {
      grid-column: span #{$i};
      max-width: 100%;
    }
  }
}

</style>
