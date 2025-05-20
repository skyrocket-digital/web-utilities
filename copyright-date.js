class CopyrightYear {
  construction(_yearContainer) {
    this.yearContainer = _yearContainer;
    this.init();
  }

  init() {
    if (!this.yearContainer) return;
    const today = new Date();
    let year = d.getFullYear();
    
    this.yearContainer.innerHTML = year;
  }
}

const initializeCopyrightYear = () => {
    window.skyscripts = window.skyscripts || [];
    const triggers = document.querySelectorAll('[sr-copyright="container"]');
    triggers.forEach(trigger => {
        let instance = new CopyrightYear(trigger);
        window.skyscripts.push({'CopyrightYear': instance});
    });
}

if (/complete|interactive|loaded/.test(document.readyState)) {
    initializeCopyrightYear();
} else {
    window.addEventListener('DOMContentLoaded', initializeCopyrightYear);
}
