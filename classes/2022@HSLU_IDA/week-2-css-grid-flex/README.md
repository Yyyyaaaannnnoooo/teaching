# Morning Session

## Build an infographic like [this](https://www.pinterest.ch/pin/77546424806199639/) about your own food habits

### Experiment with flex

- define css variables

```css
:root {
  /* define your own variables and have a sigle place to change them */
  --red: #f33;
  --green: #3f3;
  --blue: #33f;
  --orange: #fc3;
  --yellow: #ff3;
  --purple: #c3f;
  --cyan: #3ff;
  --grey: #ccc;
  --black: #000;
  --background: #ccf;
}

.red {
  color: var(--red);
}
```

- build three boxes `<div class="box color">` inside a `<div class="container">`

```html
<div class="container">
  <div class="box color"></div>
  <div class="box color"></div>
  <div class="box color"></div>
</div>
```

- set the class container to `display: flex`

```css
.container{
    display: flex;
    /* horizontal alignment */
    justify-content:    flex-start (default)
                        flex-end
                        center
                        space-between
                        space-around
                        space-evenly

    /* vertical alignment */
    align-items:        stretch (default)
                        /* flex-start */
                        /* flex-end */
                        /* center */
                        /* baseline */

    /* direction of items */
    flex-direction:     row (default)
                        /* row-reverse */
                        /* column */
                        /* column-reverse */

}

```

- in the css define the box class

```css
.box{
    width: 150px:
    height: 150px:
    margin: 10px;
    box-shadow: var(--black) 5px 5px 10px;
}
```

- give each element a different position using `align-self`, different order using `order` and different size with `grow`

```css
.color{
    align-self
    /* override align-items */
    align-self:         stretch
                        /* flex-start */
                        /* flex-end */
                        /* center */
                        /* baseline   */
    /* override order of single items */
    order:              number


    /* how much should the div grow? */
    grow:               number
}
```

- add 6 more boxes with different colors and apply `flex-wrap` and `align content`

```css
.container{
    /* wrap? */
    flex-wrap:          nowrap (default)
                        /* wrap */
                        /* wrap-reverse */
    /* how items on multiple lines, due to wrapping, should be vertically spaced */
    align-content:      stretch (default)
                        /* flex-start */
                        /* flex-end */
                        /* center */
                        /* space-between */
                        /* space-around */
                        /* space-evenly */
    }
```

## Exercise

- search the web for food items that you eat regularly, you should collect at least 30 images
- make a new website

```
food-info/
    - index.html
    - assets/
        - style.css
        - imgs/
            - food-img-1.jpg
            - food-img-2.jpg
            - food-img-3.jpg
            - ...
```

- divide them in 5 categories, those can be defined by you: color, type, energy, etc. than define such categories as classes in the css file.

```html
<div class="container">
  <div class="food category-1">
    <div class="card food-name-1">
      <div class="title"></div>
      <div class="image">
        <img src="assets/imgs/food-img-1.jpg" alt="" />
      </div>
    </div>
    <div class="card food-name-2">
      <div class="title"></div>
      <div class="image">
        <img src="assets/imgs/food-img-1.jpg" alt="" />
      </div>
    </div>
    <div class="card food-name-3">
      <div class="title"></div>
      <div class="image">
        <img src="assets/imgs/food-img-1.jpg" alt="" />
      </div>
    </div>
  </div>
  <div class="food category-2">
    <div class="card food-name-4">
      <div class="title"></div>
      <div class="image">
        <img src="assets/imgs/food-img-1.jpg" alt="" />
      </div>
    </div>
    <div class="card food-name-5">
      <div class="title"></div>
      <div class="image">
        <img src="assets/imgs/food-img-1.jpg" alt="" />
      </div>
    </div>
    <div class="card food-name-6">
      <div class="title"></div>
      <div class="image">
        <img src="assets/imgs/food-img-1.jpg" alt="" />
      </div>
    </div>
  </div>
  <!-- ...... -->
</div>
```

- use the flex property also for the class `.card` to align the `<div>` of each food item
- use the properties `width` or `height` in combination with `flex-grow` to give hierachy to various food categories

# Afternoon Session

## Individual consultations

## Group Presentations 14 => 15
