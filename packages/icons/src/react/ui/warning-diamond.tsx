import type { Icon } from './types'

export const IconWarningDiamond: Icon = ({
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
      data-slot='icon-ui-warning-diamond'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M9.14 3.59C10.5 2.22 11.16 1.53 12 1.53s1.51.69 2.86 2.06l2.75 2.8 2.8 2.75c1.37 1.35 2.06 2.02 2.06 2.86s-.69 1.51-2.06 2.86l-2.8 2.75-2.75 2.8c-1.35 1.37-2.02 2.06-2.86 2.06s-1.51-.69-2.86-2.06l-2.75-2.8-2.8-2.75C2.22 13.5 1.53 12.84 1.53 12s.69-1.51 2.06-2.86l2.8-2.75z'
        fill='currentColor'
      />
      <path
        d='M9.14 3.59C10.5 2.22 11.16 1.53 12 1.53s1.51.69 2.86 2.06l2.75 2.8 2.8 2.75c1.37 1.35 2.06 2.02 2.06 2.86s-.69 1.51-2.06 2.86l-2.8 2.75-2.75 2.8c-1.35 1.37-2.02 2.06-2.86 2.06s-1.51-.69-2.86-2.06l-2.75-2.8-2.8-2.75C2.22 13.5 1.53 12.84 1.53 12s.69-1.51 2.06-2.86l2.8-2.75z'
        stroke='currentColor'
      />
      <path d='M12 6.94v5.6' stroke='currentColor' />
      <path
        d='M12.58 16.47a.58.58 0 1 1-1.16 0 .58.58 0 0 1 1.16 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
