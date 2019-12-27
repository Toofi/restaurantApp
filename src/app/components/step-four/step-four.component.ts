import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Food, IFood } from 'src/app/models/food';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.scss']
})
export class StepFourComponent implements OnInit {
  @Output() emitter: EventEmitter<number> = new EventEmitter<number>();

  public foodList: IFood[] = this.orderService.Food;
  public foodForm: FormGroup; //init objet de type formgroup

  public invalidFoodForm: boolean = false;

  constructor(private orderService: OrderService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initFoodForm();
  }
 
  initFoodForm() {
    this.foodForm = this.formBuilder.group({
      foodId: [this.foodList.length, Validators.required],
      foodName: ['', [Validators.required, Validators.maxLength(25)]],
      foodPrice: ['', [Validators.required, Validators.pattern('^\\d{0,6}\\.?\\d{1,2}$')]]
    })
  }
//regex pour ajouter , = ,?
  onSubmitFoodForm() {
    const formValue = this.foodForm.value; //récup les valeur du formulaire
    const foodIds: number[] = this.foodList.map(f => f.foodId);
    const newFoodItem = new Food( //crée un objet avec comme paramètre les valeurs du formulaire
      (foodIds.length > 0 ? Math.max(...foodIds) + 1 : 1),
      formValue.foodName,
      formValue.foodPrice
    );
    this.orderService.Food.push(newFoodItem); //push dans le tableau initialisé par le service
    console.log(this.foodList);
    console.log(...foodIds);
  }

  isFoodFormValid() { //ajout d'une ligne dans le tableau
    if(this.foodForm.invalid) {
      this.invalidFoodForm = true;
    } else {
      this.onSubmitFoodForm();
      this.initFoodForm();
    }
  }

  onDeleteItem(id: number) {
    const foodIndex = this.foodList.findIndex(res => res.foodId === id);
    this.foodList.splice(foodIndex, 1);
  }

  onClick(value: number) {
    this.emitter.emit(value);
  }

}
