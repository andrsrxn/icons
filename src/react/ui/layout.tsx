import type { Icon } from './types'

export const IconLayout: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='layout'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <rect
        width='7.071'
        height='9.517'
        x='3.645'
        y='3.719'
        fill='currentColor'
        opacity='.2'
        rx='2'
      />
      <rect
        width='7.071'
        height='9.517'
        fill='currentColor'
        opacity='.2'
        rx='2'
        transform='matrix(1 0 0 -1 13.284 20.281)'
      />
      <rect
        width='7.071'
        height='4.512'
        x='3.645'
        y='15.769'
        fill='currentColor'
        opacity='.2'
        rx='1.5'
      />
      <rect
        width='7.071'
        height='4.507'
        fill='currentColor'
        opacity='.2'
        rx='1.5'
        transform='matrix(1 0 0 -1 13.284 8.226)'
      />
      <rect
        width='7.071'
        height='9.517'
        x='3.645'
        y='3.719'
        stroke='currentColor'
        strokeWidth='1.5'
        rx='2'
      />
      <rect
        width='7.071'
        height='9.517'
        stroke='currentColor'
        strokeWidth='1.5'
        rx='2'
        transform='matrix(1 0 0 -1 13.284 20.281)'
      />
      <rect
        width='7.071'
        height='4.512'
        x='3.645'
        y='15.769'
        stroke='currentColor'
        strokeWidth='1.5'
        rx='1.5'
      />
      <rect
        width='7.071'
        height='4.507'
        stroke='currentColor'
        strokeWidth='1.5'
        rx='1.5'
        transform='matrix(1 0 0 -1 13.284 8.226)'
      />
    </svg>
  )
}
