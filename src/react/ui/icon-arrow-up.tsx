import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTUuMDM0IDkuNjUzYS43NS43NSAwIDAgMCAxLjA2MiAxLjA2bC0uNTMxLS41My0uNTMxLS41M1ptNC4xMzEtMy4wNzgtLjUzLS41My41My41M1ptNS42Ni0uMDAzLS41My41My41My0uNTNabTMuMDggNC4xNDFhLjc1Ljc1IDAgMCAwIDEuMDYtMS4wNmwtLjUzLjUzLS41My41M1ptLTUuOTExLTYuMTQydi0uNzUuNzVabS43NTYgMGEuNzUuNzUgMCAwIDAtMS41IDBoMS41Wm0tMS41IDE1LjAyMmEuNzUuNzUgMCAwIDAgMS41IDBoLTEuNVptLTUuNjg1LTkuNDEuNTMuNTMgMy42LTMuNjA4LS41My0uNTMtLjUzLS41My0zLjYwMSAzLjYwOC41My41M1ptOS4yNi0zLjYxLS41My41MyAzLjYxIDMuNjEuNTMtLjUzLjUzLS41My0zLjYxLTMuNjEtLjUzLjUzWm0tNS42Ni4wMDIuNTMuNTNjLjY4Mi0uNjgzIDEuMTQxLTEuMTQgMS41MjktMS40MzcuMzctLjI4My41ODYtLjM0Ny43Ny0uMzQ3di0xLjVjLS42NDUgMC0xLjE3Ny4yNy0xLjY4MS42NTYtLjQ4Ni4zNzEtMS4wMjcuOTE2LTEuNjc5IDEuNTY5bC41MzEuNTNabTUuNjYtLjAwMy41My0uNTNjLS42NTItLjY1Mi0xLjE5NC0xLjE5Ni0xLjY4LTEuNTY3LS41MDQtLjM4NS0xLjAzNy0uNjU0LTEuNjgyLS42NTR2Ljc1bC4wMDEuNzVjLjE4NSAwIC40LjA2NC43Ny4zNDYuMzg5LjI5Ni44NDguNzUzIDEuNTMgMS40MzZsLjUzLS41M1pNMTIgNC41NzFoLS43NXYxNS4wMjJoMS41VjQuNTdIMTJaIi8+PC9zdmc+)
 */
export const IconArrowUp: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-arrow-up'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M5.034 9.653a.75.75 0 0 0 1.062 1.06l-.531-.53-.531-.53Zm4.131-3.078-.53-.53.53.53Zm5.66-.003-.53.53.53-.53Zm3.08 4.141a.75.75 0 0 0 1.06-1.06l-.53.53-.53.53Zm-5.911-6.142v-.75.75Zm.756 0a.75.75 0 0 0-1.5 0h1.5Zm-1.5 15.022a.75.75 0 0 0 1.5 0h-1.5Zm-5.685-9.41.53.53 3.6-3.608-.53-.53-.53-.53-3.601 3.608.53.53Zm9.26-3.61-.53.53 3.61 3.61.53-.53.53-.53-3.61-3.61-.53.53Zm-5.66.002.53.53c.682-.683 1.141-1.14 1.529-1.437.37-.283.586-.347.77-.347v-1.5c-.645 0-1.177.27-1.681.656-.486.371-1.027.916-1.679 1.569l.531.53Zm5.66-.003.53-.53c-.652-.652-1.194-1.196-1.68-1.567-.504-.385-1.037-.654-1.682-.654v.75l.001.75c.185 0 .4.064.77.346.389.296.848.753 1.53 1.436l.53-.53ZM12 4.571h-.75v15.022h1.5V4.57H12Z'
      />
    </svg>
  )
}
