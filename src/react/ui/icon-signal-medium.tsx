import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTYuMzkzIDE0LjIwOCAyLjQ5LTEuODM0YzEuMzkxLTEuMDI2IDIuMDg4LTEuNTM5IDIuNjM3LTEuMjYyLjU0OS4yNzguNTQ5IDEuMTQzLjU0OSAyLjg3MnYxLjgzNGMwIC45NDMgMCAxLjQxNS0uMjkzIDEuNzA3LS4yOTMuMjkzLS43NjUuMjkzLTEuNzA3LjI5M2gtMi40OWMtMi41MTEgMC0zLjc2NyAwLTMuOTkzLS42ODgtLjIyNi0uNjg3Ljc4NS0xLjQzMiAyLjgwNy0yLjkyMloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im03LjY5NiAxMi44ODktMS4zOTkgMS4wM2MtMS43MDQgMS4yNTYtMi41NTYgMS44ODQtMi42NzggMi40MzNhMS41IDEuNSAwIDAgMCAuNDc4IDEuNDU2Yy40MjQuMzcgMS40ODIuMzcgMy42LjM3bTAtNS4yOXY1LjI5bTguMjAyLTExLjMzMy00LjEwMSAzLjAyMi00LjEwMiAzLjAyMm0wIDUuMjg4aDQuMTAxbTAgMHYtOC4zMW0wIDguMzFIMTUuOW0wIDBIMTdjMS40MTQgMCAyLjEyMSAwIDIuNTYtLjQ0LjQ0LS40MzguNDQtMS4xNDYuNDQtMi41NnYtNi4yNmMwLTEuODM0IDAtMi43NS0uNDQ0LTMuMTkxYTEuNSAxLjUgMCAwIDAtLjgyNS0uNDE3Yy0uNjE4LS4wOTYtMS4zNTYuNDQ4LTIuODMyIDEuNTM2bTAgMTEuMzMyVjYuODQ1Ii8+PC9zdmc+)
 */
export const IconSignalMedium: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-signal-medium'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m6.393 14.208 2.49-1.834c1.391-1.026 2.088-1.539 2.637-1.262.549.278.549 1.143.549 2.872v1.834c0 .943 0 1.415-.293 1.707-.293.293-.765.293-1.707.293h-2.49c-2.511 0-3.767 0-3.993-.688-.226-.687.785-1.432 2.807-2.922Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m7.696 12.889-1.399 1.03c-1.704 1.256-2.556 1.884-2.678 2.433a1.5 1.5 0 0 0 .478 1.456c.424.37 1.482.37 3.6.37m0-5.29v5.29m8.202-11.333-4.101 3.022-4.102 3.022m0 5.288h4.101m0 0v-8.31m0 8.31H15.9m0 0H17c1.414 0 2.121 0 2.56-.44.44-.438.44-1.146.44-2.56v-6.26c0-1.834 0-2.75-.444-3.191a1.5 1.5 0 0 0-.825-.417c-.618-.096-1.356.448-2.832 1.536m0 11.332V6.845'
      />
    </svg>
  )
}
