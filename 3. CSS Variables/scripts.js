
const inputs = document.querySelectorAll('.settings input');


function updateHandler() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    console.log(this.name);
}

inputs.forEach(input => {
    input.addEventListener('change', updateHandler);
    input.addEventListener('mousemove', updateHandler);
})