# react-transitioning

[![npm](https://img.shields.io/npm/v/react-transitioning.svg)](https://www.npmjs.com/package/react-transitioning)
[![GitHub](https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white)](https://github.com/fakundo/react-transitioning)

A simple React library that provides components for managing animations and transitions with ease. It allows seamless transitions for both individual components and groups of elements. The library is inspired by [react-transition-group](https://reactcommunity.org/react-transition-group/) and shares a similar API with a few notable differences.

## Key Features

- **Ease of Use**: Simple and intuitive API for creating animations and transitions for both components and groups of elements.
- **Modern Approach**: Built with functional components and hooks, avoiding deprecated methods like `findDOMNode`.
- **No External Dependencies**: No additional dependencies, keeping your project lightweight and reducing potential conflicts.
- **No `nodeRef` Required**: Unlike `react-transition-group`, there's no need to pass a `nodeRef` prop.
- **Flexibility**: Supports both CSS-based and inline style-based animations.
- **Lightweight**: Minimal bundle size to keep your application fast.

The library provides components that allow you to easily create custom components with animations and transitions tailored to your needs. You can integrate them into your own React components to add smooth animations and transitions with minimal effort.

```tsx
<FadeTransition in={visible}>
  <div>Fading element</div>
</FadeTransition>
```

## Installation

To install the library, run:

```bash
npm install react-transitioning
# or
yarn add react-transitioning
```

## Documentation

For more detailed information and usage examples, check out the [Docs](https://fakundo.github.io/react-transitioning/).

## Usage

### Transition Component

The `Transition` component allows you to control the mounting and unmounting of an element with transitions.

```tsx
import { Transition } from 'react-transitioning'

...

<Transition in={!hidden} appear exit={false}>
  {(transitionState) => (
    <pre>{JSON.stringify(transitionState)}</pre>
  )}
</Transition>
```

### CSSTransition Component

The `CSSTransition` component applies CSS classes based on the current transition state.

```tsx
import { CSSTransition } from 'react-transitioning'

...

<CSSTransition in={!hidden} classNames="fade">
  <div>Animated element</div>
</CSSTransition>
```

### StyleTransition Component

The `StyleTransition` component applies inline styles based on the current transition state. This is useful for customizing transitions without needing to rely on external CSS.

```tsx
import { StyleTransition } from 'react-transitioning'

...

<StyleTransition 
  in={!hidden} 
  duration={300} 
  styles={{
    enter: { opacity: 0 },
    enterActive: { opacity: 1 },
  }}
>
  <div style={{ transition: 'opacity 300ms' }}>Animated element</div>
</StyleTransition>
```

### TransitionGroup Component

The `TransitionGroup` component handles a set of elements, animating them as they are added or removed from the DOM.

```tsx
import { TransitionGroup } from 'react-transitioning'

...

<TransitionGroup duration={300}>
  {items.map((item) => (
    <CSSTransition key={item.key} classNames="fade">
      <div>{item.label}</div>
    </CSSTransition>
  ))}
</TransitionGroup>
```

### Detecting Transition End:

```tsx
<CSSTransition
  in={!hidden}
  classNames="fade"
  addEndListener={(phase, done) => {
    nodeRef.current.addEventListener('transitionend', done, { once: true, capture: false })
  }}
>
  <div ref={nodeRef}>Animated element</div>
</CSSTransition>
```
## API

### Transition Props

```ts
type TransitionProps = {
  children: React.ReactNode | ((transitionState: TransitionState, activePhase: TransitionPhase) => React.ReactNode);
  in?: boolean;
  appear?: boolean;
  enter?: boolean;
  exit?: boolean;
  duration?: number;
  alwaysMounted?: boolean;
  addEndListener?: (phase: TransitionPhase, done: () => void) => void;
  onEnter: () => void;
  onEntering: () => void;
  onEntered: () => void;
  onExit: () => void;
  onExiting: () => void;
  onExited: () => void;
}
```

The `TransitionState` passed to the children function has the following structure:

```ts
type TransitionState = {
  appear: boolean;
  appearActive: boolean;
  appearDone: boolean;
  enter: boolean;
  enterActive: boolean;
  enterDone: boolean;
  exit: boolean;
  exitActive: boolean;
  exitDone: boolean;
}
```

### CSSTransition Props

```ts
type CSSTransitionProps = Omit<TransitionProps, 'children'> & {
  children: React.ReactElement<{ className?: string }>
  classNames: string | {
    appear?: string;
    appearActive?: string;
    appearDone?: string;
    enter?: string;
    enterActive?: string;
    enterDone?: string;
    exit?: string;
    exitActive?: string;
    exitDone?: string;
  }
}
```

if `classNames` is a string, then the computed `className` will be suffixed based on the current transition state. 
For example, when `classNames` is `"fade"`, the `fade-appear-active` class will be applied during the `appearActive` phase.

If `classNames` is an object, the final `className` will be taken from that object based on the current transition state.

### StyleTransition Props

```ts
type StyleTransitionProps = Omit<TransitionProps, 'children'> & {
  children: React.ReactElement<{ style?: React.CSSProperties };
  styles: {
    appear?: object;
    appearActive?: object;
    appearDone?: object;
    enter?: object;
    enterActive?: object;
    enterDone?: object;
    exit?: object;
    exitActive?: object;
    exitDone?: object;
  }
}
```

The `styles` prop allows you to define inline styles based on the current transition state. For example, when the element enters, the `enterActive` styles will be applied.

### TransitionGroup Props

```ts
type TransitionGroupProps = {
  children: React.ReactNode;
  appear?: boolean;
  enter?: boolean;
  exit?: boolean;
  duration?: number;
}
```

## License

MIT
