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
               2. when formControlName changes the Model-Property bound to it will be changed
               3. Suggestions aka recommendations
                  1. <key> name should be ssame as Model Property name
               4. The formControlName uses 'value' property to update the Model property
      1. The FormControl class is derived from AbstractControl class
         1. AbstractCOntrol represents an UI element on HTML Page
   3. Valiadation Methods
      1. Using Validators class
         1. Static methods for Data Validations on Model Properties mapped/linked with FormControl
            1. Static method in Validators class
               1. required(AbstractControl) / requiredTrue(AbstractControl)
               2. minLength(number) / maxLength(number)
               3. pattern(RegEx as string)
            1. If a method accepts an AbstractControl, then call method as callback e.g. Validators.required
            1. Each method will return 'null' if value is valid else return invalid values as 'required', 'pattern', 'minlength', 'maxlength'
      1. <formGroup>.controls.<formControlName>.dirty
         1. The element is changed
      1. !<formGroup>.controls.<formControlName>.valid
         1. Element is invalid data
      1. <formGroup>.controls.<formControlName>.errors.<error-return-type>
         1. 'required', 'pattern', 'minlength', 'maxlength'
      1. To apply validation rule use
         1. Validators.compose([array of validation rules])

2. Services
   1. Utilities for containing heavy-load logic that can be shared across components
      1. E.g.
         1. Http Calls
            1. @angular/common/http
               1. HttpClientModule class --> Platform for Http Calls
                  1. HttpClient class
                     1. get<T>()/post<T>()/put<T>()/delete<T>() methods
                        1. T is the response expected from Http Calls
                     2. All these methods returns Observable<T>
                        1. Observable, is a store that contains response from Http and the data from Observable is streamed to component
                     3. get()/post()/put()/delete()
                        1. first input paramter as the URL
                        2. post()/put()
                           1. accept body parameter as JSON
                        3. third parameter is 'options?' optional
                           1. options = { headers: new HttpHeaders()}
                           2. HttpHeaders
                              1. Content-Type as application/json for post and put request
                              2. Authorization for secure calls
                                 1. Authorization: 'basic username:password'
                                 2. Authorizaton: 'bearer <TOKEN>'
         1. Heavy Data operations e.g. conditional sort, reverse, filter arrays / collections
   2. Service class is decorated with @Injectable() decorator
      1. @Injectable({providedIn: 'root' })
         1. root:-> bu default regisreted in AppModule or root of tyhe current angular application
      2. Register Service in 'provoiders:[]' array of @NgModule
   3. Use services to comunicate across components
3. Component Communications
   1. Component has parent child relationship
      1. Child component can have public get/set property decorated with @Input() decorator
         1. @Input is imported from @angular/core
      2. The @Input decorated property can be used for property binding [<PROPERTYT-NAME>]
      3. Child component can emit data to parent using EventEmitter<T> object from @angular/core. Here T is the Payload aka parameter type to be emitted to parent component
      4. The EventEmitter declaration must be decorated @Output() decorator, the EventEmitter can be used by parent for Event Binding (<EventEmittertype>)
4. Routing
5. Directives
