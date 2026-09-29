import type { Icon } from './types'

export const IconVote: Icon = ({
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
      data-slot='icon-ui-vote'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M19.53 20.8V9.2c0-2.83 0-4.25-.88-5.13-.87-.87-2.29-.87-5.12-.87h-3.06c-2.83 0-4.25 0-5.12.87-.88.88-.88 2.3-.88 5.13v11.6z'
        fill='currentColor'
      />
      <path
        d='M19.53 20.8V9.2c0-2.83 0-4.25-.88-5.13-.87-.87-2.29-.87-5.12-.87h-3.06c-2.83 0-4.25 0-5.12.87-.88.88-.88 2.3-.88 5.13v11.6'
        stroke='currentColor'
      />
      <path d='M1.68 20.8h20.64' stroke='currentColor' />
      <path
        d='m8.82 12.17.59.73c.72.91 1.09 1.37 1.57 1.37s.84-.46 1.56-1.37l2.98-3.78'
        stroke='currentColor'
      />
    </svg>
  )
}
