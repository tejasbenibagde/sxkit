# .sxkit

[![npm version](https://img.shields.io/npm/v/sxkit.svg)](https://www.npmjs.com/package/sxkit)

## Description

.sxkit is a versatile collection of reusable React components designed to simplify UI development. It offers a wide range of components with customizable props, empowering developers to swiftly create visually appealing and responsive user interfaces.

You can install .sxkit via npm:

```bash
    npm install sxkit
```

## Table of Contents

- [UI Components](#ui-components)
  - [Editable Button Variants ](#button)
  - [Editable Card Components](#card)

## UI Components

### Button

&gt; component for React custom buttons.

```jsx
import React from "react";
import { Button } from "sxkit";

const App = () => {
  return (
    <div>
      <Button color="blue" size="large">
        Click me
      </Button>
    </div>
  );
};

export default App;
```

&gt; Note: Button colors may vary based on the theme applied. If no theme is specified, the default theme (dark) will be used.


### Card
&gt; Component for React custom cards, including Header, Body, and Footer sub-components.

```jsx
import React from "react";
import { Card, Header, Body, Footer } from "sxkit";

const App = () => {
  return (
    <div className="app">
      <Card
        backgroundImage="https://via.placeholder.com/150"
        size="large"
        color="white"
        variant="primary"
      >
        <Header>Daily Mix</Header>
        <Body>
          <h1>Frontend Radio</h1>
          <p>Your daily dose of music</p>
        </Body>
        <Footer>Available Soon</Footer>
      </Card>
    </div>
  );
};

export default App;
```

&gt; Note: The Card component supports several props to customize its appearance:
+ `backgroundImage` : URL of the background image
+ `size` : Size of the card (`small`, `medium`, `large`)
+ `color` : Text color
+ `variant` : Variant of the card (e.g., `primary`)


**[`Back to top ⬆️`](#table-of-contents)**
