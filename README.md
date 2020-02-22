<input type="text" id="txt" value="ABC"/> <----- value is attribute

document.getElementById('txt').value = "PQR"; <----- valie is property

PROPERTY BINDING
<input type="text" id="txt" [value]="<PUBLIC-PROPRTY-FROM-COMPONENT>"/>
e.g. [href], [disbale], [checked], etc

HTML DOM Attribute
JSOM Property System

EVENT BINDING
<input type="button" (click)="<PUBLI-METHOD-FROM-COMPONENT>"/>

TWO-WAY BINDING = PROEPRTY BINDING + EVENT BINDING
<input type="text" id="txt" [(ngModel)]="<PUBLIC-PROPRTY-FROM-COMPONENT>"/>

ngModel --> Listen Default Event of the DOM Element e.g. keyup for input text
--> Raise 'ngOnChanges' event on UI --> Read the value of property bind to element
--> notify the value to Component --> Component will update itself
--> Component will update all properties depending on propety being updated
--> Component will notify updated value back to UI

Interpolation aka expression aka READ-ONLY ONE TIME BINDING
{{<PUBLIC-PROPRTY-FROM-COMPONENT>}}

---

3 Types of Directives

1. Component Directive
   - Each Component is directive, it is autonomous
   - It can be rusable e.g. Custom Control
2. Structural Directive
   - Add/Remove DOM based on loops or conditions
   - \*ngFor --> Execute For loop on collection
   - \*ngIf --> executes if condition
   - \*ngSwitch-ngSwitchCase
3. Attribute Directive
   - Applied as DOM Element attributes for setting its behavior
   - ngModel

# ==========================================================================================

1. Angular Forms
   1. Template Forms aka Standard HTML Forms with ngModel Databinding
      1. <form></form> and ngModel for TwoWay binding
   2. ReactiveForms aka Data-Driven-Forms aka Model-Forms
      1. Tightly Couples the Model class with the HTML template
         1. The FormGroup, the FormControlCollection
         2. FormControlConollection conatins FormControl and its maps with the public property from the Model class
         3. <fromGroup-instance> = new FormGroup({<Key>: new FormControl(<Model-Property>, <Validatros>)});
            1. The '<key>' is bound to editable-elements in HTML form using 'formControlName' property
               1. <input type="text" formControlName="<key>">
               2.  when formControlName changes the Model-Property bound to it will be changed
               3.  Suggestions aka recommendations
                   1.  <key> name should be ssame as Model Property name
               4.  The formControlName uses 'value' property to update the Model property
        1.  The FormControl class is derived from AbstractControl class
            1.  AbstractCOntrol represents an UI element on HTML Page
   
2. Services
3. Routing
4. Directives
