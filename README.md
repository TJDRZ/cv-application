# CV-Application

## TJDRZ

First real project created using React. Create-react-app used.

```

Focus on re-usable components, such as the Input component(used to create text inputs that turn into text content and back, with both submit & edit buttons, depending upon the state):
`import Input from "./Input"`
The Input component can take the following props:
-Type=''
--This will affect labeling
~
-Placeholder=''
--This will affect the text input's placeholder
~
-Pattern=''
--This will affect the form validation, such as an email pattern

The Container component is used to create a container with an Add additional list items button and maps through them to create an unordered list:
The Containter component can take the following props:
-Header=''
--This will create a header (h3) to define the list
~
-Type=''
--This will affect the text of "what" is being added on the Add button
~
-Title=''
--Takes a boolean value to determine if the centering/margin/font weight of the text/horizontal (True if you want the container header on the left as a grand header; False if you want the container header in the middle as a sub header)
~~
Rest of UI components (Header, School, Work) up for use/deletion if used as a template for things other than CV-Application
```

`save.js` created to hide all buttons on page and window.print() to allow pdf saving of CV to computer.
