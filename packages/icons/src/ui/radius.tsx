import type { Icon } from './types'

export const IconRadius: Icon = ({
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
      data-slot='icon-ui-radius'
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
      <path d='M13.72 12h5.01' stroke='currentColor' />
      <path
        d='m17.08 14.46.34-.34c1-1 1.5-1.5 1.5-2.12s-.5-1.12-1.5-2.12l-.34-.34'
        stroke='currentColor'
      />
      <circle cx='12' cy='12' r='1.72' stroke='currentColor' />
    </svg>
  )
}
