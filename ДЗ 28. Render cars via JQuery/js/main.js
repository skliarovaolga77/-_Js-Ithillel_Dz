let mySlides = document.querySelector('.mySlides'),
    colorPicker = document.querySelector('.color-picker');

class Car{  
	constructor(){
		this.image = 'img/black.jpg';
    this.info = this.getInfo();
	}

	async getInfo(){
		let request = await fetch('json/car.json'),
			response = await request.json();
			this.setInfo(response);
	}

  async setInfo(data){
		this.info = {};
		for(let key in data){
			this.info[key] = data[key];
		}

		this.renderInfo();
	}

	async renderInfo(){
		for(let key in this.info){
       console.log(this.info[key]);
      mySlides.innerHTML = `<img src="img/black.jpg" alt="tesla black">
                              <div class="text">Solid Black</div>
                             `;
      colorPicker.innerHTML += `<span class="dot ${key}"></span>`;
	  }

    let dot = document.querySelectorAll('.dot');
    dot.forEach((item)=>{
       item.addEventListener('click',this.colorCar);
    });

  }

  colorCar(){
    
      mySlides.innerHTML = `<img src="https://raw.githubusercontent.com/brightestsirius/tesla/master/cars/midnight.jpg" alt="tesla black">
                              <div class="text">Solid Black</div>
                             `;
    
  }


}

let Tesla = new Car();