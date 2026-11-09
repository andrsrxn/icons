import type { Icon } from './types'

export const IconBriefcase: Icon = ({
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
      data-slot='icon-ui-briefcase'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.76 10.78h20.48v4.41c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88H7.76c-2.83 0-4.24 0-5.12-.88s-.88-2.29-.88-5.12z'
        fill='currentColor'
      />
      <path
        d='M8.76 21.2h6.48c3.3 0 4.95 0 5.97-1.03 1.03-1.03 1.03-2.68 1.03-5.98V14c0-3.3 0-4.95-1.03-5.97C20.2 7 18.54 7 15.24 7H8.76C5.46 7 3.81 7 2.8 8.03 1.76 9.05 1.76 10.7 1.76 14v.2c0 3.3 0 4.94 1.03 5.97 1.02 1.02 2.67 1.02 5.97 1.02'
        stroke='currentColor'
      />
      <path
        d='m6 7 .83-1.4c.57-.96.86-1.44 1.32-1.7s1.01-.26 2.12-.26h3.5c1.13 0 1.7 0 2.16.27s.75.76 1.3 1.75L18 7'
        stroke='currentColor'
      />
      <path d='M22 11H2' stroke='currentColor' />
    </svg>
  )
}
