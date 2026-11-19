import type { Icon } from './types'

export const IconDegree180: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-degree-180'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <ellipse opacity='.2' cx='12' cy='13.33' rx='10.22' ry='4.88' fill='currentColor' />
      <path d='M1.78 13.33c0 2.7 4.58 4.89 10.22 4.89' stroke='currentColor' />
      <path d='M17.59 17.43c3.1-.87 4.63-2.7 4.63-4.1' stroke='currentColor' />
      <path
        d='M20.21 8.19c0 2.04-.53 3.7-2.38 3.7s-2.38-1.66-2.38-3.7.62-3.7 2.38-3.7 2.38 1.66 2.38 3.7'
        stroke='currentColor'
      />
      <path
        d='m9.83 20.94.16-.12c1.52-1.12 2.28-1.69 2.4-2.5s-.44-1.58-1.56-3.1l-.12-.16'
        stroke='currentColor'
      />
      <path
        d='m3.33 5.76.84-.54c.68-.43 1.02-.65 1.28-.5.26.14.26.54.26 1.34v5.84'
        stroke='currentColor'
      />
      <path
        d='M10.86 8.26c.94.6 1.9 1.17 1.9 2.14 0 .95-.97 1.65-1.95 1.6-.91-.05-1.7-.68-1.7-1.58 0-1.42 1.7-2.14 1.7-2.14zm0 0C9.93 7.66 9 7.04 9 5.97c0-.94.86-1.6 1.81-1.6s1.93.66 1.93 1.6c0 1.4-1.6 2.16-1.88 2.29'
        stroke='currentColor'
      />
    </svg>
  )
}
