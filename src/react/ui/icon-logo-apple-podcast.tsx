import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxnIG9wYWNpdHk9Ii4yIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAxMy4zODFhMi4wNzIgMi4wNzIgMCAxIDAgMC00LjE0NCAyLjA3MiAyLjA3MiAwIDAgMCAwIDQuMTQ0WiIvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyLjMwNyAyMC4yODhoLS42MTRhMS40IDEuNCAwIDAgMS0xLjM2LTEuMDQ2TDkuMjggMTUuMDk4YTEuMzg3IDEuMzg3IDAgMCAxIDEuMzYtMS43MTdoMi43MmExLjM4NyAxLjM4NyAwIDAgMSAxLjM2IDEuNzE3bC0xLjA1MiA0LjE0NGExLjM5OSAxLjM5OSAwIDAgMS0xLjM2IDEuMDQ2WiIvPjwvZz48cGF0aCBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTYuNjc2IDEzLjQ4M2E1LjUyNiA1LjUyNiAwIDEgMSAxMC42NDggMG0tOS45MzIgNS40MDhhOC4yODggOC4yODggMCAxIDEgOS4yMTYgMG0tMi41MzYtNy41ODJhMi4wNzIgMi4wNzIgMCAxIDEtNC4xNDQgMCAyLjA3MiAyLjA3MiAwIDAgMSA0LjE0NCAwWm0tMS43NjUgOC45OGgtLjYxNGExLjQgMS40IDAgMCAxLTEuMzYxLTEuMDQ3TDkuMjggMTUuMDk4YTEuMzg3IDEuMzg3IDAgMCAxIDEuMzYtMS43MTdoMi43MmExLjM4NyAxLjM4NyAwIDAgMSAxLjM2IDEuNzE3bC0xLjA1MiA0LjE0NGExLjM5OSAxLjM5OSAwIDAgMS0xLjM2IDEuMDQ2WiIvPjwvc3ZnPg==)
 */
export const IconLogoApplePodcast: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-logo-apple-podcast'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <g opacity='.2'>
        <path
          fill='currentColor'
          d='M12 13.381a2.072 2.072 0 1 0 0-4.144 2.072 2.072 0 0 0 0 4.144Z'
        />
        <path
          fill='currentColor'
          d='M12.307 20.288h-.614a1.4 1.4 0 0 1-1.36-1.046L9.28 15.098a1.387 1.387 0 0 1 1.36-1.717h2.72a1.387 1.387 0 0 1 1.36 1.717l-1.052 4.144a1.399 1.399 0 0 1-1.36 1.046Z'
        />
      </g>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M6.676 13.483a5.526 5.526 0 1 1 10.648 0m-9.932 5.408a8.288 8.288 0 1 1 9.216 0m-2.536-7.582a2.072 2.072 0 1 1-4.144 0 2.072 2.072 0 0 1 4.144 0Zm-1.765 8.98h-.614a1.4 1.4 0 0 1-1.361-1.047L9.28 15.098a1.387 1.387 0 0 1 1.36-1.717h2.72a1.387 1.387 0 0 1 1.36 1.717l-1.052 4.144a1.399 1.399 0 0 1-1.36 1.046Z'
      />
    </svg>
  )
}
