document.addEventListener('DOMContentLoaded', function() {
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(accordion => {
    const head = accordion.querySelector('.accordion-head');
    const content = accordion.querySelector('.accordion-sub');
    const arrow = accordion.querySelector('.accordion-img');
    
    head.addEventListener('click', () => {
      const isOpen = accordion.classList.contains('open');
      
    
      accordions.forEach(item => {
        item.classList.remove('open');
      });
      
      if (!isOpen) {
        accordion.classList.add('open');
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.getElementById('burgerBtn');
  const popupMenu = document.getElementById('popupMenu');
  const overlay = document.getElementById('overlay');
  const headerTop = document.querySelector('.header__top');
  const body = document.body;
  

  if (!burgerBtn || !popupMenu || !overlay || !headerTop) {
    console.error('Элементы не найдены!');
    console.log({
      burgerBtn: !!burgerBtn,
      popupMenu: !!popupMenu,
      overlay: !!overlay,
      headerTop: !!headerTop
    });
    return;
  }
  

  burgerBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    
    this.classList.toggle('active');
    popupMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    headerTop.classList.toggle('active');
    body.classList.toggle('no-scroll');
    
    console.log('Меню открыто:', popupMenu.classList.contains('active'));
  });
  
 
  overlay.addEventListener('click', closeMenu);
  

  const popupLinks = document.querySelectorAll('.popup-link');
  popupLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  
 
  function closeMenu() {
    burgerBtn.classList.remove('active');
    popupMenu.classList.remove('active');
    overlay.classList.remove('active');
    headerTop.classList.remove('active');
    body.classList.remove('no-scroll');
  }
  
 
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
});