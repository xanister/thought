import Aperture from "aperture";
import Biosphere from "biosphere";
import Carriage from "carriage";

class ThoughtBasicExample {
  constructor() {
    // Aperture draws the view
    this.aperture = new Aperture();

    // Biosphere runs the world, notify aperture when the view changes
    this.biosphere = new Biosphere();
    this.biosphere.addPlayer("example-player", {
      clientHeight: this.aperture.height,
      clientWidth: this.aperture.width,
      onViewUpdate: view => this.aperture.setItems(view)
    });

    // Carriage collects input from the user, notify biosphere with new user input
    this.carriage = new Carriage({
      onInputUpdate: res => this.biosphere.setInput("example-player", res)
    });
  }
}

new BiosphereBasicExample();