import type { Icon } from './types'

export const IconShovel: Icon = ({
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
      data-slot='icon-ui-shovel'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M4.09 12.28c.54-.7.8-1.05 1.26-1.08.45-.02.8.32 1.48 1l2.53 2.54 2.54 2.53c.68.68 1.02 1.03 1 1.48-.04.45-.39.72-1.09 1.26-4.06 3.13-7.53 2.16-8.73 1.67a1 1 0 0 1-.41-.25c-.14-.14-.18-.23-.26-.41-.5-1.2-1.5-4.64 1.68-8.74'
        fill='currentColor'
      />
      <path d='M16.94 7.17 7.4 16.7' stroke='currentColor' />
      <path
        d='M17.18 2.31c.3-.35.44-.52.66-.53.22 0 .39.16.73.5l1.62 1.63 1.62 1.62c.34.34.51.5.5.73 0 .22-.18.36-.52.65-1.59 1.34-3.24 1.87-4.86.25-1.61-1.61-1.09-3.27.25-4.85'
        stroke='currentColor'
      />
      <path
        d='M4.09 12.28c.54-.7.8-1.05 1.26-1.08.45-.02.8.32 1.48 1l2.53 2.54 2.54 2.53c.68.68 1.02 1.03 1 1.48-.04.45-.39.72-1.09 1.26-4.06 3.13-7.53 2.16-8.73 1.67a1 1 0 0 1-.41-.25c-.14-.14-.18-.23-.26-.41-.5-1.2-1.5-4.64 1.68-8.74'
        stroke='currentColor'
      />
    </svg>
  )
}
