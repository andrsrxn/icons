import type { Icon } from './types'

export const IconSignalHigh: Icon = ({ size = 24, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      data-slot='signal-high'
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
