const components = [
  {id: 'header', file: './components/header.html'},
  {id: 'hero', file: './components/sections/hero.html'},
  {id: 'about', file: './components/sections/about.html'},
  {id: 'services', file: './components/sections/services.html'},
  {id: 'consult', file: './components/sections/consult.html'},
  {id: 'testimonials', file: './components/sections/testimonials.html'},
  {id: 'map', file: './components/sections/map.html'},
  {id: 'footer', file: './components/footer.html'},
]

export async function loadComponent(id, file) {
  try {
    const res = await fetch(file);

    if(!res.ok) {
      throw new Error(`Erro ao carregar ${file}`);
    }

    const target = document.getElementById(id);

    if(!target) {
      throw new Error(`Elemento #${id} não encontrado`);
    }

    const html = await res.text();
    target.innerHTML = html;

  } catch (err) {
    console.log(err);
  }

}

async function loadAllComponents() {
  for (const c of components) {
    await loadComponent(c.id, c.file);
  }

  initMenu();
  readMore();
  swipeTestimonials();
}

loadAllComponents();
