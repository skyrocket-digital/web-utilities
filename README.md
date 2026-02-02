# Copyright Year Script

This script finds elements marked with `sr-copyright="container"` and
replaces their inner HTML with the current year. It runs on DOM ready
and stores each instance on `window.skyscripts`.

## Behavior

- On initialization, each target element gets its content set to the
  current year (e.g. `2026`).
- Elements are identified with the attribute `sr-copyright="container"`.
- Instances are stored in `window.skyscripts` for optional inspection.

## Usage

Add the attribute to any element where you want the year inserted:

```html
<span sr-copyright="container"></span>
```

Include the script on the page. It will run automatically after the DOM
is ready.

## Example

```html
<footer>
  <span sr-copyright="container"></span> Ocean.org
</footer>
```


