const mockTabData = [
  {
    name: 'Tab1',
    title: 'I am tab1',
    body: 'Ipsum lorem I am tab1 woof block of text so that It looks like something',
    img: ''
  },
  {
    name: 'Tab2',
    title: 'I am tab2',
    body: 'Anothe block of text for a differ ent tab woohoo. Ipsum lorem caecilius cicero pater doler ipsum ',
    img: ''
  },
  {
    name: 'Tab3',
    title: 'I am Tab3',
    body: 'More and more words so that the words are words to be read here we are hello oh hello what okay bye',
    img: ''
  },
  {
    name: 'Tab4',
    title: 'I am tab4',
    body: 'Anothe block of text for a differ ent tab woohoo. Ipsum lorem caecilius cicero pater doler ipsum ',
    img: ''
  }
]

const renderTabs = (tabData) => {
  const tabs = tabData.map(tab => renderTab(tab))
  
  renderTabContent(tabData[0], tabs[0])
}

const renderTab = (tab) => {
  const tabsList = document.querySelector('.tabs-list')
  const newTab = document.createElement('li')
  newTab.setAttribute('class', 'accordion-tab')
  newTab.innerHTML = tab.name 

  newTab.addEventListener('click', () => renderTabContent(tab, newTab))
  tabsList.appendChild(newTab)
  
  return newTab
}

const renderTabContent = (data, current) => {
  const tabTitle = document.querySelector('.tab-title')
  const tabText = document.querySelector('.tab-text')

  tabTitle.innerHTML = data.title
  tabText.innerHTML = data.body

  clearActiveTabs()
  current.setAttribute('class', 'accordion-tab active')
}

const clearActiveTabs = () => {
  const tabs = [...document.querySelectorAll('.accordion-tab')]
  tabs.map(tab => tab.setAttribute('class', 'accordion-tab'))
}

const toggleMobileNav = event => {
  event.preventDefault()
  const headerNav = document.querySelector('.header-nav')

  if ([...headerNav.classList].includes('hidden')) {
    headerNav.setAttribute('class', 'header-nav')
  } else {
    headerNav.setAttribute('class', 'header-nav hidden')
  }
}

document.onload = renderTabs(mockTabData)
