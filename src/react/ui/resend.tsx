import type { Icon } from './types'

export const IconResend: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='resend'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='M14.209 17.33v-2.55a.492.492 0 0 0-.501-.495c-4.531.098-6.938 1.525-9.36 3.238-.383.272-.95-.088-.798-.532 2.48-5.77 6.59-7.826 10.165-7.998a.519.519 0 0 0 .5-.512V5.69c0-.833 1.129-1.25 1.652-.661l4.637 5.92c.324.365.324.956 0 1.32l-4.637 5.722c-.523.588-1.659.172-1.659-.66Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14.209 17.33v-2.55a.492.492 0 0 0-.501-.495c-4.531.098-6.938 1.525-9.36 3.238-.383.272-.95-.088-.798-.532 2.48-5.77 6.59-7.826 10.165-7.998a.519.519 0 0 0 .5-.512V5.69c0-.833 1.129-1.25 1.652-.661l4.637 5.92c.324.365.324.956 0 1.32l-4.637 5.722c-.523.588-1.659.172-1.659-.66Z'
      />
    </svg>
  )
}
