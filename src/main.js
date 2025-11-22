// COLLAPSE
const allCollapseItems = [...document.querySelectorAll('[data-collapse]')];

allCollapseItems.forEach(item => {
  item.addEventListener('click', () => {
    const btn = item.querySelector('[data-collapse-btn]');
    const title = item.querySelector('[data-collapse-title]');
    const content = item.querySelector('[data-collapse-content]');

    const isActive = item.dataset.collapseActive === ''

    // allCollapseItems.forEach(i => {
    //   i.removeAttribute('data-collapse-active')
    // })


    if (isActive) {
      item.removeAttribute('data-collapse-active')

      item.classList.remove(...['bg-white', 'text-[#391400]'])
      item.classList.add(...['text-white'])

      btn.textContent = '▼'

      title.classList.remove(...['text-[#391400]'])
      title.classList.add(...['text-white'])

      content.classList.add(...['hidden'])
    } else {
      item.setAttribute('data-collapse-active', '')

      item.classList.remove(...['text-white'])
      item.classList.add(...['bg-white', 'text-[#391400]'])

      btn.textContent = '▲'

      title.classList.remove(...['text-white'])
      title.classList.add(...['text-[#391400]'])

      content.classList.remove(...['hidden'])
    }
  })
})