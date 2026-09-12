import type { Icon } from './types'

export const IconPenNib: Icon = ({
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
      data-slot='icon-ui-pen-nib'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        width='12.59'
        height='4.23'
        rx='1'
        transform='matrix(.70506 .70915 .70595 -.70827 10.7 4.4)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='9.2'
        cy='14.88'
        r='1.8'
        transform='rotate(90 9.2 14.88)'
        fill='currentColor'
      />
      <path
        d='M12 6.73 7.9 7.88c-1.63.46-2.45.69-3.01 1.27s-.77 1.4-1.18 3.05l-1.09 4.32c-.73 2.9-1.09 4.36-.29 5.16s2.26.43 5.16-.3l4.41-1.13c1.61-.41 2.41-.61 2.98-1.16.58-.55.81-1.35 1.29-2.94l1.22-4.07'
        stroke='currentColor'
      />
      <path
        d='M21.38 11.82c.67-.67 1-1 1-1.42s-.33-.75-1-1.42L15.03 2.6c-.66-.67-1-1-1.4-1-.42 0-.75.33-1.42 1l-.33.33c-.66.67-1 1-1 1.41 0 .42.34.75 1 1.42l6.35 6.39c.66.67 1 1 1.41 1s.75-.33 1.41-1l.16-.17z'
        stroke='currentColor'
      />
      <path d='m2.72 21.25 4.88-4.9' stroke='currentColor' />
      <path d='M11.1 14.88a1.9 1.9 0 0 1-1.9 1.9 1.9 1.9 0 1 1 1.9-1.9' stroke='currentColor' />
    </svg>
  )
}
