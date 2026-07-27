import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMjc3IDE0LjU0Yy0uNTcyLS41NzItLjU3Mi0xLjQ5My0uNTcyLTMuMzM2VjcuNjE3YzAtMS44NDMgMC0yLjc2NC41NzItMy4zMzcuNTczLS41NzIgMS40OTQtLjU3MiAzLjMzNy0uNTcyaDMuNTg3YzEuODQzIDAgMi43NjQgMCAzLjMzNy41NzIuNTczLjU3My41NzMgMS40OTQuNTczIDMuMzM3djEuMTI0aC0yLjMxMmMtMS44NDMgMC0yLjc2NSAwLTMuMzM3LjU3My0uNTczLjU3Mi0uNTczIDEuNDk0LS41NzMgMy4zMzd2Mi40NjJINy42MTRjLTEuODQzIDAtMi43NjQgMC0zLjMzNy0uNTcyWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05LjQ2MiAxOS41NzRjLS41NzMtLjU3Mi0uNTczLTEuNDk0LS41NzMtMy4zMzd2LTEuMTI0aDIuMzEyYzEuODQzIDAgMi43NjQgMCAzLjMzNy0uNTcyLjU3My0uNTczLjU3My0xLjQ5NC41NzMtMy4zMzdWOC43NGgxLjI3NGMxLjg0MyAwIDIuNzY1IDAgMy4zMzcuNTczLjU3My41NzIuNTczIDEuNDk0LjU3MyAzLjMzN3YzLjU4NmMwIDEuODQzIDAgMi43NjUtLjU3MyAzLjMzNy0uNTcyLjU3My0xLjQ5NC41NzMtMy4zMzcuNTczSDEyLjhjLTEuODQzIDAtMi43NjUgMC0zLjMzNy0uNTczWiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTMuNzA1IDExLjIwNGMwIDEuODQzIDAgMi43NjQuNTcyIDMuMzM3LjU3My41NzIgMS40OTQuNTcyIDMuMzM3LjU3MmgzLjU4N2MxLjg0MyAwIDIuNzY0IDAgMy4zMzctLjU3Mi41NzMtLjU3My41NzMtMS40OTQuNTczLTMuMzM3VjcuNjE3YzAtMS44NDMgMC0yLjc2NC0uNTczLTMuMzM3LS41NzItLjU3Mi0xLjQ5NC0uNTcyLTMuMzM3LS41NzJINy42MTRjLTEuODQzIDAtMi43NjQgMC0zLjMzNy41NzItLjU3Mi41NzMtLjU3MiAxLjQ5NC0uNTcyIDMuMzM3djMuNTg3WiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTguODkgMTYuMjM3YzAgMS44NDMgMCAyLjc2NS41NzIgMy4zMzcuNTcyLjU3MyAxLjQ5NC41NzMgMy4zMzcuNTczaDMuNTg3YzEuODQzIDAgMi43NjQgMCAzLjMzNy0uNTczLjU3Mi0uNTcyLjU3Mi0xLjQ5NC41NzItMy4zMzd2LTMuNTg2YzAtMS44NDMgMC0yLjc2NS0uNTczLTMuMzM3LS41NzItLjU3My0xLjQ5NC0uNTczLTMuMzM3LS41NzNIMTIuOGMtMS44NDMgMC0yLjc2NSAwLTMuMzM3LjU3My0uNTczLjU3Mi0uNTczIDEuNDk0LS41NzMgMy4zMzd2My41ODZaIi8+PC9zdmc+)
 */
export const IconIntersect: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-intersect'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M4.277 14.54c-.572-.572-.572-1.493-.572-3.336V7.617c0-1.843 0-2.764.572-3.337.573-.572 1.494-.572 3.337-.572h3.587c1.843 0 2.764 0 3.337.572.573.573.573 1.494.573 3.337v1.124h-2.312c-1.843 0-2.765 0-3.337.573-.573.572-.573 1.494-.573 3.337v2.462H7.614c-1.843 0-2.764 0-3.337-.572Z'
          clipRule='evenodd'
        />
        <path
          fill='currentColor'
          fillRule='evenodd'
          d='M9.462 19.574c-.573-.572-.573-1.494-.573-3.337v-1.124h2.312c1.843 0 2.764 0 3.337-.572.573-.573.573-1.494.573-3.337V8.74h1.274c1.843 0 2.765 0 3.337.573.573.572.573 1.494.573 3.337v3.586c0 1.843 0 2.765-.573 3.337-.572.573-1.494.573-3.337.573H12.8c-1.843 0-2.765 0-3.337-.573Z'
          clipRule='evenodd'
        />
      </g>
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M3.705 11.204c0 1.843 0 2.764.572 3.337.573.572 1.494.572 3.337.572h3.587c1.843 0 2.764 0 3.337-.572.573-.573.573-1.494.573-3.337V7.617c0-1.843 0-2.764-.573-3.337-.572-.572-1.494-.572-3.337-.572H7.614c-1.843 0-2.764 0-3.337.572-.572.573-.572 1.494-.572 3.337v3.587Z'
      />
      <path
        stroke='currentColor'
        strokeWidth='1.5'
        d='M8.89 16.237c0 1.843 0 2.765.572 3.337.572.573 1.494.573 3.337.573h3.587c1.843 0 2.764 0 3.337-.573.572-.572.572-1.494.572-3.337v-3.586c0-1.843 0-2.765-.573-3.337-.572-.573-1.494-.573-3.337-.573H12.8c-1.843 0-2.765 0-3.337.573-.573.572-.573 1.494-.573 3.337v3.586Z'
      />
    </svg>
  )
}
