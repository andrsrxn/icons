import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTUuNDk0IDYuNTY5YzEuMjMtMS44NiA0LjQ4Ny0yLjYyNyA1Ljg2Mi0yLjczOC0xLjMzMiAyLjA1MS0xLjg5NyA1LjgtMi4wNTggNy42NTgtLjQ1Mi0uMzk1LTEuNjc3LTEuMTc2LTIuNTA1LTEuMTQtMS4zLjA1NC0yLjQyOS43NzQtMy4xMjUgMS4xNC4wMy0uODkyLjU5NS0zLjA2IDEuODI2LTQuOTJabTEzLjAxMiAwYy0xLjIzLTEuODYtNC40ODctMi42MjctNS44NjItMi43MzggMS4zMzIgMi4wNTEgMS44OTcgNS44IDIuMDU4IDcuNjU4LjQ1Mi0uMzk1IDEuNjc3LTEuMTc2IDIuNTA1LTEuMTQgMS4zLjA1NCAyLjQyOS43NzQgMy4xMjUgMS4xNC0uMDMtLjg5Mi0uNTk2LTMuMDYtMS44MjYtNC45MloiIG9wYWNpdHk9Ii4yIi8+PHBhdGggc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0xMiAzLjgzMWM4LjMzMiAwIDguMzMyIDguMDggOC4zMzIgOC4wOHMtMS44LTEuMzQ0LTMuMTI1LTEuMzQ0Yy0xLjE1MiAwLTIuNjAzIDEuMzQ1LTIuNjAzIDEuMzQ1UzEzLjE1MiAxMC41NjYgMTIgMTAuNTY2Yy0xLjE1MiAwLTIuNjA0IDEuMzQ1LTIuNjA0IDEuMzQ1cy0xLjQ1MS0xLjM0NS0yLjYwMy0xLjM0NWMtMS4zMzUgMC0zLjEyNSAxLjM0NS0zLjEyNSAxLjM0NXMwLTguMDggOC4zMzItOC4wOFptMCAwYy0yLjAyNSAxLjY4Mi0yLjU4IDUuNDE1LTIuNjA0IDcuMDdNMTIgMy44MzJjMi4wMjUgMS42ODIgMi41OCA1LjQxNSAyLjYwNCA3LjA3bS0yLjYwNCAwdjYuODk2YzAgMi4yMTktMS4wMTQgMy4wMS0yLjYwNCAzLjAxcy0yLjYwMy0xLjEyMy0yLjYwMy0xLjk4MSIvPjwvc3ZnPg==)
 */
export const IconUmbrella: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-umbrella'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M5.494 6.569c1.23-1.86 4.487-2.627 5.862-2.738-1.332 2.051-1.897 5.8-2.058 7.658-.452-.395-1.677-1.176-2.505-1.14-1.3.054-2.429.774-3.125 1.14.03-.892.595-3.06 1.826-4.92Zm13.012 0c-1.23-1.86-4.487-2.627-5.862-2.738 1.332 2.051 1.897 5.8 2.058 7.658.452-.395 1.677-1.176 2.505-1.14 1.3.054 2.429.774 3.125 1.14-.03-.892-.596-3.06-1.826-4.92Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 3.831c8.332 0 8.332 8.08 8.332 8.08s-1.8-1.344-3.125-1.344c-1.152 0-2.603 1.345-2.603 1.345S13.152 10.566 12 10.566c-1.152 0-2.604 1.345-2.604 1.345s-1.451-1.345-2.603-1.345c-1.335 0-3.125 1.345-3.125 1.345s0-8.08 8.332-8.08Zm0 0c-2.025 1.682-2.58 5.415-2.604 7.07M12 3.832c2.025 1.682 2.58 5.415 2.604 7.07m-2.604 0v6.896c0 2.219-1.014 3.01-2.604 3.01s-2.603-1.123-2.603-1.981'
      />
    </svg>
  )
}
