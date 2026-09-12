import type { Icon } from './types'

export const IconPresentation: Icon = ({
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
      data-slot='icon-ui-presentation'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <rect
        opacity='.2'
        x='4.66'
        y='14.67'
        width='12.9'
        height='15.32'
        rx='1'
        transform='rotate(-90 4.66 14.67)'
        fill='currentColor'
      />
      <path d='M12.13 17.81V15' stroke='currentColor' />
      <path d='M21.51 14.67H2.5' stroke='currentColor' />
      <path d='M21.51 1.77H2.5' stroke='currentColor' />
      <path d='M12 11.4V5.05' stroke='currentColor' />
      <path d='M4.35 14.67V1.77' stroke='currentColor' />
      <path d='M19.98 14.67V1.77' stroke='currentColor' />
      <path d='M7.94 11.4V6.62' stroke='currentColor' />
      <path d='M16.06 11.4V8.49' stroke='currentColor' />
      <path
        opacity='.2'
        d='M14.2 20.2a2.07 2.07 0 1 1-4.13 0 2.07 2.07 0 0 1 4.13 0'
        fill='currentColor'
      />
      <path
        d='M14.2 20.2a2.06 2.06 0 0 1-2.07 2.06 2.07 2.07 0 1 1 2.07-2.07'
        stroke='currentColor'
      />
    </svg>
  )
}
