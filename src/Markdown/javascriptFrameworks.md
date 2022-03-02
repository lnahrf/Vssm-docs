# Using Vssm with React/Vue

While it's definitely possible to use Vssm with React/Preact/Vue, it was not designed to be used with a robust framework, and therefore will not trigger component renders by default (it might be a good thing, I'm not sure yet).

A possible workaround is to set the local component's state when catching the Vssm event. It will force the specific component to re-render on Vssm changes, and is still a relatively simple approach.
