/********
* setup *
*********/
let pointer = null
let pointers = []

/**
 * collect mouse
 * movements in an array
 */
let mouse_movements = [];
let max_movements = 500;

window.onload = () => {
    console.log('window loaded');
    pointer = document.querySelector('img');
    console.log(pointer);

    // save JSON data
    let save_button = document.querySelector('#save-button');
    save_button.addEventListener('click', () => {
        console.log('clicked');
        let data = JSON.stringify(mouse_movements);
        let blob = new Blob([data], { type: 'application/json' });
        let url = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'mouse_movements' + Date.now().toString() + '.json';
        a.click();
        URL.revokeObjectURL(url);
    }
    )

    // load JSON data
    let load_button = document.querySelector('#load-button');
    load_button.addEventListener('click', () => {
        console.log('clicked');
        let input = load_button.querySelector('input');
        let file = input.files[0];
        let reader = new FileReader();
        reader.onload = (event) => {
            let data = JSON.parse(event.target.result);
            mouse_movements = data;
            console.log(mouse_movements);
        }
        reader.readAsText(file);
    }
    )

}
window.onmousemove = (event) => {
    // console.log(`
    // mouse position x: ${event.clientX}
    // mouse position y: ${event.clientY}
    // `);
    let movements = {
        x: event.clientX,
        y: event.clientY
    };
    mouse_movements.push(movements);
    if (mouse_movements.length > max_movements) {
        mouse_movements.splice(0, 1);
    }

    /**
     * draw the pointers on the screen
     */

    let pointer_image = document.createElement('img')
    pointer_image.src = 'https://img.icons8.com/ios/50/000000/cursor--v1.png';
    pointer_image.style.position = 'fixed';
    pointer_image.style.left = movements.x + 'px';
    pointer_image.style.top = movements.y + 'px';
    pointer_image.style.width = '16px';
    pointer_image.style.height = 'auto';
    document.body.appendChild(pointer_image);
}

/**
 * we animate the mouse cursor
 */
let index = 0;
window.requestAnimationFrame(animate)
function animate() {

    window.requestAnimationFrame(animate)
    if (mouse_movements.length > 0) {
        pointer.style.left = mouse_movements[index].x + 'px';
        pointer.style.top = mouse_movements[index].y + 'px';
    }

    index++;
    if (index > mouse_movements.length - 1) {
        index = 0;
    }
}


