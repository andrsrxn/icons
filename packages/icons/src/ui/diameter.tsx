import type { Icon } from './types'

export const IconDiameter: Icon = ({
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
      data-slot='icon-ui-diameter'
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
        d='M1.7 12a10.3 10.3 0 1 0 20.6 0 10.3 10.3 0 0 0-20.6 0m12.39 0a2.09 2.09 0 1 1-4.18 0 2.09 2.09 0 0 1 4.18 0'
        fill='currentColor'
      />
      <circle cx='12' cy='12' r='10.3' transform='rotate(90 12 12)' stroke='currentColor' />
      <path d='M10.28 12h-5.5' stroke='currentColor' />
      <path
        d='m7.04 15-.88-.88c-1-1-1.5-1.5-1.5-2.12s.5-1.12 1.5-2.12L7.04 9'
        stroke='currentColor'
      />
      <circle cx='12' cy='12' r='1.72' stroke='currentColor' />
      <path d='M13.72 12h5.5' stroke='currentColor' />
      <path
        d='m16.96 15 .88-.88c1-1 1.5-1.5 1.5-2.12s-.5-1.12-1.5-2.12L16.96 9'
        stroke='currentColor'
      />
    </svg>
  )
}
