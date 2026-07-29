import type { Icon } from '../types'

export const IconSignalFull: Icon = ({ size, className, ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      width={size ?? 'var(--ui-icon-size, 24)'}
      height={size ?? 'var(--ui-icon-size, 24)'}
      data-slot='signal-full'
      aria-hidden='true'
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      <path
        fill='currentColor'
        d='m6.353 14.223 10.46-7.708c1.393-1.026 2.089-1.539 2.638-1.261C20 5.53 20 6.396 20 8.125v7.708c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293H7.54c-2.512 0-3.768 0-3.994-.688-.226-.688.785-1.432 2.807-2.922Z'
        opacity='.2'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='m7.67 12.893-1.402 1.033c-1.715 1.263-2.572 1.895-2.692 2.448a1.5 1.5 0 0 0 .475 1.445c.425.373 1.49.373 3.619.373m0-5.3v5.3m0-5.3 4.11-3.028m-4.11 8.328h4.11m0 0V9.864m0 8.328h4.11m-4.11-8.328 4.11-3.028m0 11.356H17c1.414 0 2.121 0 2.56-.439.44-.44.44-1.146.44-2.56v-6.28c0-1.844 0-2.766-.448-3.207a1.5 1.5 0 0 0-.815-.411c-.62-.1-1.363.447-2.847 1.54m0 11.357V6.836'
      />
    </svg>
  )
}
