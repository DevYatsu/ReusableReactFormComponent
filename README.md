# ReusableReactFormComponent
This repository contains a reusable form component built with React Hook Form and Tailwind CSS. 
The form component provides an easy and efficient way to handle form validation, user input, and form submission in React applications.

## Features
- Utilizes React Hook Form for form validation and state management.
* Integrates Tailwind CSS for styling and responsive design.
+ Supports various input types, such as text, email, password, etc.
- Customizable form fields with validation rules.
* Easy integration with existing React projects.
+ Lightweight and performant.

## Installation

To use the form component in your project, follow these steps:

### 1. Clone the repository:
`git clone https://github.com/your-username/your-repo.git`

### 2. Install the dependencies:
   
\- `cd component-dir`

\- `npm install` or `pnpm install`

### 3. Import the form component into your React application:

```typescript
import { Form } from 'component-dir';

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}
```

### 4. Add the minimal parameters for the Form to works correctly

```typescript
import { Form } from 'component-dir';

const data = [
{
  name: "inputName", // in CamelCase
  placeholder: "Enter something...",
}
];
//data is an array of all the input (represented by objects), textarea and select components

function App() {
  return (
    <div className="App">
      <Form 
          data={data} //represents the informations on the different elements in the form
          submitURL="/api/urlToPostOn" // the url the data entered in the form will be POSTed to
      />
    </div>
  );
}
```
These are the minimum requirements for the Form to work correctly.
The form will be composed of one input with the name and placeholder put in the data array.

You can check all the possbile arguments attributable to the form component in the types/form.ts file even tough we will see most of them in the next sections.

### 4. Customize the form fields and validation rules according to your requirements.

We can take a look at the possibilities regarding the customization of the form fields:

```typescript
import { Form } from 'component-dir';

const data = [
{// input name is displayed as label, it must be in camelCase: here the label will be FAMILY NAME
  name: "familyName", 
  placeholder: "Enter something...",
  type: "password", //all possible input types, default is obviously set to "text" 
  minLength: 6, //set a min length
  maxLength: {
    value: 34, //set a max length
    message: "Password cannot exceed 34 characters long" 
    //error message displayed when maxLength is not respected, you can do the same with minLength
  },
  required: true
},
{
  name: "inputName2", // name must be unique
  placeholder: "Enter something...",
  type: "number",
  min: {
    value: 0,
    message: "Number must be positive"
  },
  required: "number is required" //same as required: true, here is a way to directly set the error message
}, 
{
  element: "select",
  name: "pickAFlavour", // name of the select (unique as well)
  values: [ // the options of the select
    {value: "1", displayValue: "chocolate"}, //option with type {value: string; displayValue: string;}
    {value: "2", displayValue: "vanilla"}
  ]
}, 
{
  element: "textarea",
  name: "PostAComment",
  placeholder: "enter a comment...",
  required: true,
}, 
{//when element prop is not explicitly set to "textarea" or "select", element is an input
  name: "passwordConfirm",
  type: "password", 
  isPasswordConfirm: true 
//boolean useful in this case only to ensure the password and passwordConfirm inputs have the same value
//it will compare this input with the input NAMED "password" and only this one
} 
];

function App() {
  return (
    <div className="App">
      <Form 
          data={data} 
          submitURL="/api/urlToPostOn" 
      />
    </div>
  );
}
```

In this code are covered most of the possibilities regarding the customization of the elements composing the form.
We can now look at the customization of the parameters on the Form component.

### 5. Form Component Customization

```typescript
const data = [{name: "testInput", placeholder: "Enter some text..."}];

function App() {
  return (
    <div className="App">
      <Form 
          data={data} // (FormInputProps | FormSelectProps | FormTextAreaProps)[] 
          // you can check all the props in the types/form.ts file, 
          // though most of them are in the example above
  
          submitURL="/api/urlToPostOn" // (string) 
  
          goal="register" // ("register" | "login" | undefined)
          //may be either "register"|"login", allows some automatic customization of the form
          // still I recommand to use one of them if the form is for one of these purposes
  
          title="My Form" // (string | undefined)
          // set a customized title, the goal param also sets a title when used
  
          className="pt-5 mb-2 bg-red-500 text-orange-600 etc." // (string | undefined) 
  
          isSimpleForm={true} // (boolean | undefined)
          // default set to false, not recommended except when using textarea alone

          mistakeInstruction={"Not Registered yet? Join Now"}
          //(string|[href: string; instruction: string]|undefined)
          // instruction set at the end of the form
          // when using the goal parameter, it is automatically set
          // otherwise it's value is "" except if you set it yourself
          //you can also set an url it will redirect to with an anchor onClick
          //this URL defaults to "/" 
  
          extraData={{postUser: "DevYatsu"}} // (Record<string, any> | undefined)
          // data that will be add to form data when POST request is made

          successRedirectionURL={"/"} // (string | undefined)
          //URL on which user has to be redirected on when data is sent and responded with a status 200
          //working on the nextJS version of the component with useRouter()
          //not working on the other version because there is no way to redirect with react alone
            
          //you can implement a way to redirect with react router in the component yourself at the indicated
          //place, there is a comment indicating where to put the redirecting features

          removeRequestProps={["passwordConfirm"]}// (string[] | undefined)
          //an array of the element names that must be removed before posting the data
          //for example here passwordConfirm is removed, this way there is only the password that is sent 
          // and no passwordConfirm which may be useless
      />
    </div>
  );
}
```

### 6. Start your application:
`npm start` or `npm dev`
