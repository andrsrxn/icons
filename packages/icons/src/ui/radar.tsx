import type { Icon } from './types'

export const IconRadar: Icon = ({
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
      data-slot='icon-ui-radar'
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
      <path d='M15.8 2.43q-1.89-.76-4.05-.73a10.3 10.3 0 1 0 9.69 6.17' stroke='currentColor' />
      <path d='m13.37 10.69 6.61-7' stroke='currentColor' />
      <circle cx='12' cy='12' r='1.91' stroke='currentColor' />
      <path d='M13.02 5.89A6.2 6.2 0 1 0 18.19 12l-.02-.72' stroke='currentColor' />
    </svg>
  )
}
