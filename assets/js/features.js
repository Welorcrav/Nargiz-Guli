class Features {
  constructor() {
    this.section = document.getElementById('features')
    fetch('./data.json')
      .then((res) => res.json())
      .then((allData) => this.render(allData.features))
  }

  render(feature) {
    if (!feature) return
    this.section.innerHTML = feature
      .map(
        (f) => `
      <div class="feature-item">
        <div class="feature-icon"><img src="${f.icon}"></div>
        <div class="feature-text">
          <h2>${f.title}</h2>
          <p>${f.description}</p>
        </div>
      </div>`
      )
      .join('')
  }
}
new Features()
