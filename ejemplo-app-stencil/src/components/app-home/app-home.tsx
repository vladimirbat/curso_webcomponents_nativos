import { Component, Element, h } from '@stencil/core';
import { ModalUtil } from '../modal-util/modal-util';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  modal: HTMLModalUtilElement;

  abrirModal(){
    this.modal.mostrar();
  }
  
  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
        <modal-util ref={(elem)=> this.modal = elem }>
          <span slot="slot-titulo">Ventana Emergente</span>
          <div slot="slot-contenido">email: <input type="text"/></div>
        </modal-util>
        <button onClick={()=>{this.abrirModal()}}>Abrir modal</button>
      </div>
    );
  }
}
