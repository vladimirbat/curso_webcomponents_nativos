import { Component, Host, h, Method, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'modal-util',
  styleUrl: 'modal-util.css',
  shadow: true,
})
export class ModalUtil {

  @Event({
    eventName: 'cerrado',
    composed: true,
    cancelable: true,
    bubbles: true,
  }) 
  cerradoEmmiter: EventEmitter<number>;
  @State()
  visible:boolean =false;


  @Method()
  mostrar(){
    this.visible = true;
  }
  cerrar() {
    console.log('--- cerrrar ---');
    const cancelled = !this.cerradoEmmiter.emit(Math.ceil(100*Math.random()));
    if(!cancelled){
        this.visible = false;
    }
  }

  getModal(){
    return (
      <div class="full">
            <div class="modal">
                <div class="titulo">
                    <slot name="slot-titulo">Titulo por defecto</slot>
                </div>
                <div class="contenido">
                    <slot name="slot-contenido">Contenido por defecto</slot>
                    <button onClick={()=> this.cerrar()}>Aceptar</button>
                </div>
            </div>
        </div>
    );
  }
  render() {
    return (
      <Host>
        {this.visible ? this.getModal() : null}
      </Host>
    );
  }

}
