import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTE4Ljk2NiAxNC41NGEuNzUuNzUgMCAwIDAtMS4wNjItMS4wNmwuNTMxLjUzLjUzMS41M1ptLTQuMTMxIDMuMDc3LjUzLjUzLS41My0uNTNabS01LjY2LjAwMy0uNTMuNTMuNTMtLjUzWm0tMy4wOC00LjE0YS43NS43NSAwIDAgMC0xLjA2IDEuMDZsLjUzLS41My41My0uNTNabTUuOTExIDYuMTQydi43NS0uNzVabS0uMDA2IDAtLjAwMy43NS4wMDMtLjc1Wk0xMi43NSA0LjZhLjc1Ljc1IDAgMCAwLTEuNSAwaDEuNVptNS42ODUgOS40MS0uNTMtLjUzLTMuNiAzLjYwOC41My41My41My41MyAzLjYwMS0zLjYwOC0uNTMtLjUzWm0tOS4yNiAzLjYxLjUzLS41My0zLjYxLTMuNjEtLjUzLjUzLS41My41MyAzLjYxIDMuNjEuNTMtLjUzWm01LjY2LS4wMDMtLjUzLS41M2MtLjY4Mi42ODMtMS4xNDEgMS4xNDEtMS41MyAxLjQzOC0uMzcuMjgzLS41ODUuMzQ3LS43Ny4zNDdsLjAwMS43NXYuNzVjLjY0NSAwIDEuMTc3LS4yNyAxLjY4LS42NTYuNDg3LS4zNzIgMS4wMjgtLjkxNiAxLjY4LTEuNTY5bC0uNTMxLS41M1ptLTUuNjYuMDAzLS41My41M2MuNjUuNjUxIDEuMTkxIDEuMTk0IDEuNjc3IDEuNTY1LjUwMi4zODQgMS4wMzMuNjU0IDEuNjc1LjY1N2wuMDAzLS43NS4wMDMtLjc1Yy0uMTg0LS4wMDEtLjQtLjA2Ni0uNzctLjM0OS0uMzg4LS4yOTYtLjg0Ny0uNzUzLTEuNTI3LTEuNDMzbC0uNTMuNTNaTTEyIDE5LjYyMmwtLjAwMi43NWguMDA4di0xLjVoLS4wMDRsLS4wMDIuNzVabTAgMGguNzVWNC42aC0xLjV2MTUuMDIySDEyWiIvPjwvc3ZnPg==)
 */
export const IconArrowDown: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-arrow-down'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M18.966 14.54a.75.75 0 0 0-1.062-1.06l.531.53.531.53Zm-4.131 3.077.53.53-.53-.53Zm-5.66.003-.53.53.53-.53Zm-3.08-4.14a.75.75 0 0 0-1.06 1.06l.53-.53.53-.53Zm5.911 6.142v.75-.75Zm-.006 0-.003.75.003-.75ZM12.75 4.6a.75.75 0 0 0-1.5 0h1.5Zm5.685 9.41-.53-.53-3.6 3.608.53.53.53.53 3.601-3.608-.53-.53Zm-9.26 3.61.53-.53-3.61-3.61-.53.53-.53.53 3.61 3.61.53-.53Zm5.66-.003-.53-.53c-.682.683-1.141 1.141-1.53 1.438-.37.283-.585.347-.77.347l.001.75v.75c.645 0 1.177-.27 1.68-.656.487-.372 1.028-.916 1.68-1.569l-.531-.53Zm-5.66.003-.53.53c.65.651 1.191 1.194 1.677 1.565.502.384 1.033.654 1.675.657l.003-.75.003-.75c-.184-.001-.4-.066-.77-.349-.388-.296-.847-.753-1.527-1.433l-.53.53ZM12 19.622l-.002.75h.008v-1.5h-.004l-.002.75Zm0 0h.75V4.6h-1.5v15.022H12Z'
      />
    </svg>
  )
}
