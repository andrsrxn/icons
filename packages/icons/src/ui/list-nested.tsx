import type { Icon } from './types'

export const IconListNested: Icon = ({
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
      data-slot='icon-ui-list-nested'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M21.27 6H7.6' stroke='currentColor' />
      <path d='M21.27 12h-8.69' stroke='currentColor' />
      <path d='M21.27 18h-8.69' stroke='currentColor' />
      <path
        d='M8.93 12a.66.66 0 1 1-1.33 0 .66.66 0 0 1 1.33 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M4 6a.66.66 0 1 1-1.32 0A.66.66 0 0 1 4 6'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M8.93 18a.66.66 0 1 1-1.33 0 .66.66 0 0 1 1.33 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
