import type { Icon } from '../types'

/**
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cmVjdCB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSd3aGl0ZScvPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEwLjM2IDguMDM4Yy4wMzcuMTQzLjA1NiAxLjM0Mi4wNTYgMS4zNDJ2OC4wMzZhMS43NzYgMS43NzYgMCAxIDEtMy41NTEgMHYtNS4xOWEzLjU1MiAzLjU1MiAwIDEgMSAzLjQ5NS00LjE4OFptMy4yODUgMGMtLjAzNy4xNDMtLjA1NyAxLjM0Mi0uMDU3IDEuMzQydjguMDM2YTEuNzc2IDEuNzc2IDAgMCAwIDMuNTUyIDB2LTUuMTlhMy41NTIgMy41NTIgMCAxIDAtMy40OTUtNC4xODhaIiBvcGFjaXR5PSIuMiIvPjxwYXRoIHN0cm9rZT0iY3VycmVudENvbG9yIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTEwLjM2IDguMDM4Yy4wMzcuMTQzLjA1NiAxLjM0Mi4wNTYgMS4zNDJ2OC4wMzZhMS43NzYgMS43NzYgMCAxIDEtMy41NTEgMHYtNS4xOWEzLjU1MiAzLjU1MiAwIDEgMSAzLjQ5NS00LjE4OFptMy4yODUgMGMtLjAzNy4xNDMtLjA1NyAxLjM0Mi0uMDU3IDEuMzQydjguMDM2YTEuNzc2IDEuNzc2IDAgMCAwIDMuNTUyIDB2LTUuMTlhMy41NTIgMy41NTIgMCAxIDAtMy40OTUtNC4xODhaIi8+PC9zdmc+)
 */
export const IconEarbuds: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='icon-earbuds'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M10.36 8.038c.037.143.056 1.342.056 1.342v8.036a1.776 1.776 0 1 1-3.551 0v-5.19a3.552 3.552 0 1 1 3.495-4.188Zm3.285 0c-.037.143-.057 1.342-.057 1.342v8.036a1.776 1.776 0 0 0 3.552 0v-5.19a3.552 3.552 0 1 0-3.495-4.188Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M10.36 8.038c.037.143.056 1.342.056 1.342v8.036a1.776 1.776 0 1 1-3.551 0v-5.19a3.552 3.552 0 1 1 3.495-4.188Zm3.285 0c-.037.143-.057 1.342-.057 1.342v8.036a1.776 1.776 0 0 0 3.552 0v-5.19a3.552 3.552 0 1 0-3.495-4.188Z'
      />
    </svg>
  )
}
