import type { Icon } from './types'

export const IconRemoteController: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='icon-ui-remote-controller'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.24 1.73c2.83 0 4.25 0 5.13.88s.87 2.3.87 5.12v8.54c0 2.83 0 4.24-.87 5.12-.88.88-2.3.88-5.13.88h-2.48c-2.83 0-4.25 0-5.13-.88s-.87-2.3-.87-5.12V7.73c0-2.83 0-4.24.87-5.12.88-.88 2.3-.88 5.13-.88zm1.98 14.75a3.22 3.22 0 1 1-6.44 0 3.22 3.22 0 0 1 6.44 0'
        fill='currentColor'
      />
      <rect
        width='20.53'
        height='14.49'
        rx='3'
        transform='matrix(0 -1 -1 0 19.24 22.27)'
        stroke='currentColor'
      />
      <circle cx='12' cy='16.48' r='3.22' stroke='currentColor' />
      <path
        d='M10.24 5.77a.56.56 0 1 1-1.12 0 .56.56 0 0 1 1.12 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M10.24 9.71a.56.56 0 1 1-1.12 0 .56.56 0 0 1 1.12 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.88 5.77a.56.56 0 1 1-1.12 0 .56.56 0 0 1 1.12 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.88 9.71a.56.56 0 1 1-1.12 0 .56.56 0 0 1 1.12 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
