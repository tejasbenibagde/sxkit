# .sxkit

[![npm version](https://img.shields.io/npm/v/sxkit.svg)](https://www.npmjs.com/package/sxkit)

## Description

.sxkit is a versatile collection of reusable React components designed to simplify UI development. It offers a wide range of components with customizable props, empowering developers to swiftly create visually appealing and responsive user interfaces.

You can install SXKit via npm:

```bash
    npm install sxkit
```

## Table of Contents

- [UI Components](#ui-components)
  - [Editable Button Variants ](#button)

## UI Components

### Button

&gt; component for React custom buttons.

```jsx
import React from "react";
import { Button, Card, Input } from "sxkit";

const App = () => {
  return (
    <div>
      <Button color="blue" size="large">
        Click me
      </Button>
      <Card title="Example Card">
        <p>This is an example card component.</p>
      </Card>
      <Input type="text" placeholder="Enter your name" />
    </div>
  );
};

export default App;
```

**[`Back to top ⬆️`](#table-of-contents)**
