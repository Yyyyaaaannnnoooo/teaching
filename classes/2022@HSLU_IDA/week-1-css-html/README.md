# #id timeseries

> take a series of time defined actions of your day, and link them together with #id so that they are accessible in order or in disorder 😉

## Advanced exercise (group exercise)

> make a script in javascript to smoothly scroll to a specific #tag.

What to look for on the internet:

- `Window.scrollIntoView()` => https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
- used [here](https://s4ac.github.io/classes/2019FS@HGK_IXDM/unmake_all/)

## Skills:

- terminal basics
- url writing, directory listing
- css pseudo classes
- css transitions
- #id tags
- hmtl links

### Terminal basics

#### **Mac**:

> Open the Applications folder. Than open the Utilities folder. In there you can find the the Terminal application.

**commands**:

`whoami` = returns current user

`pwd` = print write directory | returns the current directory

`touch some_file.extension` = create an empty file

`cd some/directory/inside/another/directory` = change directory | move from one place to another in your machine

`ls` = list all file and directories in current directory

`mkdir directory_name` = create emty directory

`open file.extension` = open file with default application

`say something` = let your computer talk

#### **Windows**:

> Press the Start taskbar button. Select All apps on the Start menu. Scroll down the Start menu to the Windows Terminal app shown directly below. Then click Windows Terminal there to open it

> here a link to commands in windows https://www.lifewire.com/list-of-command-prompt-commands-4092302

**Commands**:

`type nul >> "file.txt"` or `copy nul "file.txt"` = create an empty file

> ref: https://www.shellhacks.com/windows-touch-command-equivalent/

`cd some/directory/inside/another/directory` = change directory | move from one place to another in your machine

`dir` = list all file and directories in current directory

`mkdir directory_name` = create emty directory

#### Exercise #1

> Create a folder with the current directory structure:

```
directory_name/
    - index.html
    - assets/
        - style.css
        - js/
            - scripts.js
```

> then link all of the files from the index.html using the link and script tag

the `style.css` file should look like this:

```css
body {
  background-color: #33f;
}
```

the `script.js` should look like this

```javascript
console.log("hello from script.js");
```

the `index.html` should look like this

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>some title</title>
    <!-- here you should link your css using the link tag -->
    <!-- here you should link the js file using the script tag -->
  </head>

  <body></body>
</html>
```

#### end of exercise

#### Exercise #2

> in the same directory as the previous exercise create a directory called data where you will create an html file for each day of the past week from last friday to yesterday, and naming them accordingly. Than in the index.html file that you created in the previous exercise link all of the days in the data folder with the a tag

each file `day_of_the_week.html` should look like this

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CHANGE THE TITLE BELOW -->
    <title>day of the week</title>
    <!-- here you should link your css using the link tag -->
    <!-- here you should link the js file using the script tag -->
  </head>

  <body>
    <h1>day of the week</h1>
  </body>
</html>
```

### css pseudo classes and transitions

> given the previous exercise create id for each a tag that links to a `day_of_the_week.html`, it should look like this:

```html
<a href="link/to/day_of_the_week.html" id="day-of-the-week">day of the week</a>
```

> then style such id according to your personal aesthetic taste. Therefore go to your `style.css` file and change it accrodingly, it should look like this:

```css
body {
  background-color: #33f;
}

a#day-of-the-week {
  /* put here some styling that ou like */
}
```

> Why are `<a>` tags colored different? can we overwrite the default? And why it changes color when it is clicked? In the `style.css` create a new field for the `a#day-of-the-week` and append `:visited`

```css
body {
  background-color: #33f;
}

a#day-of-the-week {
  /* put here some styling that ou like */
}

a#day-of-the-week:visited {
  /* put here some additional styling for when the link is visited */
}
```

Try to use the css [`transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms) property. To create the code try using this online helper: https://css-transform.moro.es/

**Hint #1**: to reset the `:visited` tags try erasing your browsing history.

**Hint #2**: try using `display: block` in your css.

#### Exercise #1

> add `:hover` in your `<a>` tag, and style in some way. Afterwards create an a field in your css file and add transition details. the `style.css` should look like this

```css
body {
  background-color: #33f;
}

a#day-of-the-week {
  /* put here some styling that ou like */
}

a#day-of-the-week:visited {
  /* put here some additional styling for when the link is visited */
}

a#day-of-the-week:hover {
  /* put here some additional styling for when the link is hovered */
}

a {
  transition: all 1s;
  /* try to play with the seconds */
}
```

#### Exrcise #2

> Instead of linking external pages, create 7 `div#day-of-the-week` inside the document. Than remove the id from the `<a>` tags and link them to the ids. The `index.html` file should look like this

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>some title</title>
    <!-- here you should link your css using the link tag -->
    <!-- here you should link the js file using the script tag -->
  </head>

  <body>
    <a href="#day-of-the-week">day of the week</a>
    <a href="#day-of-the-week">day of the week</a>
    <a href="#day-of-the-week">day of the week</a>
    <a href="#day-of-the-week">day of the week</a>
    <a href="#day-of-the-week">day of the week</a>
    <a href="#day-of-the-week">day of the week</a>
    <a href="#day-of-the-week">day of the week</a>

    <div id="day-of-the-week">
      <p>something about this day</p>
    </div>
    <div id="day-of-the-week">
      <p>something about this day</p>
    </div>
    <div id="day-of-the-week">
      <p>something about this day</p>
    </div>
    <div id="day-of-the-week">
      <p>something about this day</p>
    </div>
    <div id="day-of-the-week">
      <p>something about this day</p>
    </div>
    <div id="day-of-the-week">
      <p>something about this day</p>
    </div>
    <div id="day-of-the-week">
      <p>something about this day</p>
    </div>
  </body>
</html>
```

#### Exercise #3

> make the links into a menu using the `position: fixed` css method. Then style the divs so that they do not overlap with the menu. In this case take advantage of the `margin` or the `padding` method. For the skilled coders try to make an horizontal scroll instead of vertical one. for the coders who don't care about scroll direction try to take advatage of both scrolling directions

#### Exercise #4

> Populate the divs with data about your week. If you don't want it to be about yourself then invent it. If you don't want it to be about the week than choose another topic. The only rule is to have consistent data linked to each other.

## From 14:30 we will do a short show and tell
