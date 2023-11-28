import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import { Producto } from 'src/models/Producto';
import { ProductoService } from 'src/services/producto.service';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  products: Array<Producto>
  formularioProducto: FormGroup
  display: boolean


  constructor(private fb: FormBuilder, private pService: ProductoService){
    this.products = new Array<Producto>()
    this.display = false
    this.formularioProducto =  fb.group({
      id_product : new FormControl('', [Validators.required]),
      name : new FormControl('', [Validators.required]),
      sku : new FormControl('', [Validators.required]),
      description : new FormControl('', [Validators.required]),
      unit_price : new FormControl('', [Validators.required]),
      image_url : new FormControl('', [Validators.required]),
      units_in_stock : new FormControl('', [Validators.required]),
      date_created : new FormControl('', [Validators.required]),
      last_updated : new FormControl('', [Validators.required]),

    })
  }

  //crearProducto
  crearProducto(){
    if(this.formularioProducto.valid){
      let producto = new Producto()
        producto.id_product = this.formularioProducto.get('id_product')?.value
        producto.name = this.formularioProducto.get('name')?.value
        producto.sku = this.formularioProducto.get('sku')?.value
        producto.description = this.formularioProducto.get('description')?.value
        producto.unit_price = this.formularioProducto.get('unit_price')?.value
        producto.image_url = this.formularioProducto.get('image_url')?.value
        producto.units_in_stock = this.formularioProducto.get('units_in_stock')?.value
        producto.date_created = this.formularioProducto.get('date_created')?.value
        producto.last_updated = this.formularioProducto.get('last_updated')?.value
        this.pService.crearProducto(producto).subscribe(res => {
          this.getProducto()
          this.formularioProducto.reset()
        })
    }
  }

  //Get Producto
  getProducto(){
    this.pService.getProductos().subscribe(res =>{
      this.products = res
    })
  }

  //Eliminar Producto
  eliminarProducto(id_product: string){
    this.pService.eliminarProducto(id_product).subscribe(res =>{
      this.getProducto()
    })
  }

  //Al darle click al boton de la tabla modificar abre un modal, los datos que agreges se mostraran
  activador(producto: Producto){
    this.formularioProducto.get('id_product')?.setValue(producto.id_product)
    this.formularioProducto.get('name')?.setValue(producto.name)
    this.formularioProducto.get('sku')?.setValue(producto.sku)
    this.formularioProducto.get('description')?.setValue(producto.description)
    this.formularioProducto.get('unit_price')?.setValue(producto.unit_price)
    this.formularioProducto.get('image_url')?.setValue(producto.image_url)
    this.formularioProducto.get('units_in_stock')?.setValue(producto.units_in_stock)
    this.formularioProducto.get('date_created')?.setValue(producto.date_created)
    this.formularioProducto.get('last_updated')?.setValue(producto.last_updated)    
    this.display = !this.display
  }

  //ActualizarProducto
    actualizarProducto(){
      if(this.formularioProducto.valid){
        let producto = new Producto()
          producto.id_product = this.formularioProducto.get('id_product')?.value
          producto.name = this.formularioProducto.get('name')?.value
          producto.sku = this.formularioProducto.get('sku')?.value
          producto.description = this.formularioProducto.get('description')?.value
          producto.unit_price = this.formularioProducto.get('unit_price')?.value
          producto.image_url = this.formularioProducto.get('image_url')?.value
          producto.units_in_stock = this.formularioProducto.get('units_in_stock')?.value
          producto.date_created = this.formularioProducto.get('date_created')?.value
          producto.last_updated = this.formularioProducto.get('last_updated')?.value
          console.log(producto);
          this.pService.actualizarProducto(producto).subscribe(res => {
            this.getProducto()
            this.formularioProducto.reset() 
            this.display = !this.display
          })
      }
    }


}
