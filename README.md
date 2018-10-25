## Styled components

##### Cons

1. Have to eject create-react-app in order to use  babel-plugin-styled-components, a highly recommended supplement to the base styled-components library. This plugin makes it easier to debug styles by appending the file / component name to the classes in the dom.
2. May make onboarding more complex. Learning curve for new hires.
3. Tight coupling with react. Hard to transport styles to non-react projects.
4. Fairly new technology, could be unforeseen issues.
5. We lose css instant hot reloading, as each css change is not a javascript change.

---

##### Pros

1. Use the same basic css structure between react / react-native projects
2. Can use props / component state to determine css rules directly, instead of using stateful classes ex. .is-active
3. CSS variables can be interchangeable with js variables. ex. Define color variables in js and they can be used in react components as well as css styles.
4. Results in very clean components that are named semantically 
    1. `<StyledComponent modified />` instead of `<div className=“styledcomponent modified” />`
5. Styles encapsulation - no more global component styles.
6. No need to think of unique classnames for all components.
7. I'm confident we can accomplish everything that our current system can, with a slight learning curve.
