import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTYuMzcgMTQuMjE3IDYuNTQzLTQuODIyQzE0LjMwNSA4LjM3IDE1IDcuODU3IDE1LjU1IDguMTM1Yy41NDkuMjc3LjU0OSAxLjE0MS41NDkgMi44N3Y0LjgyMmMwIC45NDMgMCAxLjQxNC0uMjkzIDEuNzA3LS4yOTMuMjkzLS43NjQuMjkzLTEuNzA3LjI5M0g3LjU1NmMtMi41MTEgMC0zLjc2NyAwLTMuOTkzLS42ODgtLjIyNi0uNjg4Ljc4NS0xLjQzMyAyLjgwNi0yLjkyMloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Im0xMS43ODcgOS44NjUtNC4xMDYgMy4wMjYtMS40MDEgMS4wMzJjLTEuNzEgMS4yNi0yLjU2NSAxLjg5LTIuNjg2IDIuNDQyYTEuNSAxLjUgMCAwIDAgLjQ3NiAxLjQ0OWMuNDI1LjM3MiAxLjQ4Ny4zNzIgMy42MS4zNzJtMC01LjI5NXY1LjI5NW0wIDBoNC4xMDdtMCAwdi04LjMybTAgOC4zMmg0LjEwN20tNC4xMDctOC4zMiA0LjEwNy0zLjAyNm0wIDExLjM0NkgxN2MxLjQxNCAwIDIuMTIxIDAgMi41Ni0uNDQuNDQtLjQzOC40NC0xLjE0Ni40NC0yLjU2VjguOTE1YzAtMS44NCAwLTIuNzYtLjQ0Ny0zLjJhMS41IDEuNSAwIDAgMC0uODE4LS40MTRjLS42Mi0uMDk4LTEuMzYuNDQ3LTIuODQxIDEuNTM5bTAgMTEuMzQ2VjYuODQiLz48L3N2Zz4=)
 */
export const IconSignalHigh: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-signal-high'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m6.37 14.217 6.543-4.822C14.305 8.37 15 7.857 15.55 8.135c.549.277.549 1.141.549 2.87v4.822c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293H7.556c-2.511 0-3.767 0-3.993-.688-.226-.688.785-1.433 2.806-2.922Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m11.787 9.865-4.106 3.026-1.401 1.032c-1.71 1.26-2.565 1.89-2.686 2.442a1.5 1.5 0 0 0 .476 1.449c.425.372 1.487.372 3.61.372m0-5.295v5.295m0 0h4.107m0 0v-8.32m0 8.32h4.107m-4.107-8.32 4.107-3.026m0 11.346H17c1.414 0 2.121 0 2.56-.44.44-.438.44-1.146.44-2.56V8.915c0-1.84 0-2.76-.447-3.2a1.5 1.5 0 0 0-.818-.414c-.62-.098-1.36.447-2.841 1.539m0 11.346V6.84'
      />
    </svg>
  )
}
