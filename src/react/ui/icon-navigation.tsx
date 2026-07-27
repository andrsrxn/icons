import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTkuMTQ2IDE5LjE1OSA1LjExOSA3LjYxMWMtLjU5Mi0xLjY5OS0uODg4LTIuNTQ4LS40NDQtMi45OTIuNDQ0LS40NDQgMS4yOTMtLjE0NyAyLjk5MS40NDVMMTkuMjQ2IDkuMWMxLjA0Mi4zNjMgMS41NjMuNTQ1IDEuNTczLjg5LjAxLjM0My0uNS41NTUtMS41MTguOTc4bC01LjU2IDIuMzA5Yy0uMTkuMDc5LS4yODUuMTE4LS4zNTYuMTktLjA3LjA3LS4xMDkuMTY2LS4xODcuMzU4bC0yLjE4MSA1LjM4Yy0uNDIgMS4wMzMtLjYyOSAxLjU1LS45NzUgMS41NDEtLjM0NS0uMDA5LS41MjktLjUzNS0uODk2LTEuNTg4WiIgb3BhY2l0eT0iLjIiLz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik05LjE0NiAxOS4xNTkgNS4xMTkgNy42MTFjLS41OTItMS42OTktLjg4OC0yLjU0OC0uNDQ0LTIuOTkyLjQ0NC0uNDQ0IDEuMjkzLS4xNDcgMi45OTEuNDQ1TDE5LjI0NiA5LjFjMS4wNDIuMzYzIDEuNTYzLjU0NSAxLjU3My44OS4wMS4zNDMtLjUuNTU1LTEuNTE4Ljk3OGwtNS41NiAyLjMwOWMtLjE5LjA3OS0uMjg1LjExOC0uMzU2LjE5LS4wNy4wNy0uMTA5LjE2Ni0uMTg3LjM1OGwtMi4xODEgNS4zOGMtLjQyIDEuMDMzLS42MjkgMS41NS0uOTc1IDEuNTQxLS4zNDUtLjAwOS0uNTI5LS41MzUtLjg5Ni0xLjU4OFoiLz48L3N2Zz4=)
 */
export const IconNavigation: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-navigation'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M9.146 19.159 5.119 7.611c-.592-1.699-.888-2.548-.444-2.992.444-.444 1.293-.147 2.991.445L19.246 9.1c1.042.363 1.563.545 1.573.89.01.343-.5.555-1.518.978l-5.56 2.309c-.19.079-.285.118-.356.19-.07.07-.109.166-.187.358l-2.181 5.38c-.42 1.033-.629 1.55-.975 1.541-.345-.009-.529-.535-.896-1.588Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M9.146 19.159 5.119 7.611c-.592-1.699-.888-2.548-.444-2.992.444-.444 1.293-.147 2.991.445L19.246 9.1c1.042.363 1.563.545 1.573.89.01.343-.5.555-1.518.978l-5.56 2.309c-.19.079-.285.118-.356.19-.07.07-.109.166-.187.358l-2.181 5.38c-.42 1.033-.629 1.55-.975 1.541-.345-.009-.529-.535-.896-1.588Z'
      />
    </svg>
  )
}
