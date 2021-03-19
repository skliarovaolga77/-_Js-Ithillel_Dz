let slideshowContainer = document.querySelector('.slideshow-container'),
    colorPicker = document.querySelector('.color-picker');

class Car {
  constructor() {
    this.image = `<img src="https://raw.githubusercontent.com/brightestsirius/tesla/master/cars/blue.jpg" alt="tesla black">
                  <div class="text">Solid Black</div>`;
    this.info = this.getInfo();
  }

  async getInfo() {
    let request = await fetch('json/car.json'),
      response = await request.json();
    this.setInfo(response);
  }

  async setInfo(data) {
    this.info = {};
    for (let key in data) {
      this.info[key] = data[key];
    }

    this.renderInfo();
  }

  async renderInfo() {
    for (let key in this.info) {
      // console.log(key);
      //  console.log(this.info[key]);
      slideshowContainer.innerHTML = ` <div class="mySlides">
                                        <img src="https://raw.githubusercontent.com/brightestsirius/tesla/master/cars/black.jpg" alt="tesla black">
                                        <div class="text">Black</div>
                                      </div>
                                    `;
      colorPicker.innerHTML += `<span class="dot ${key}" data-color="${key}"></span>`;
    }

    let dot = document.querySelectorAll('.dot');
    dot.forEach((item) => {
      item.addEventListener('click', this.colorCar);
    });

  }

  colorCar() {
    // console.log(this);
    // console.log(this.dataset.color );
    if (this.dataset.color == 'solid-black') {
      this.dataset.color = 'black';
    } else if (this.dataset.color == 'midnight-silver') {
      this.dataset.color = 'midnight';
    } else if (this.dataset.color == 'obsidian-black') {
      this.dataset.color = 'black-obs';
    } else if (this.dataset.color == 'deep-blue') {
      this.dataset.color = 'blue';
    } else if (this.dataset.color == 'orange') {
      this.dataset.color = 'very-orange';
    } else if (this.dataset.color == 'yellow') {
      this.dataset.color = 'brilliant-yellow';
    }



    let selectedColor = this.dataset.color;
    slideshowContainer.innerHTML = `
                                      <div class="mySlides">
                                        <img src="https://raw.githubusercontent.com/brightestsirius/tesla/master/cars/${selectedColor}.jpg" alt="tesla black">
                                        <div class="text">${(selectedColor[0].toUpperCase() + selectedColor.slice(1))}</div>
                                      </div>
                                    `;
  }

}

let Tesla = new Car();