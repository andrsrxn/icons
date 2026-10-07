import type { Icon } from './types'

export const IconEasing: Icon = ({
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
      data-slot='icon-ui-easing'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        d='M20.45 4.28c-5.76 0-7.49 4.47-8.44 7.73-.96 3.25-2.86 7.48-8.45 7.72'
        stroke='currentColor'
      />
      <circle
        opacity='.2'
        cx='4.31'
        cy='4.28'
        r='1.78'
        transform='rotate(-90 4.31 4.28)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='1.78'
        cy='1.78'
        r='1.78'
        transform='matrix(0 -1 -1 0 21.91 21.52)'
        fill='currentColor'
      />
      <circle
        cx='4.31'
        cy='4.28'
        r='1.78'
        transform='rotate(-90 4.31 4.28)'
        stroke='currentColor'
      />
      <circle
        cx='1.78'
        cy='1.78'
        r='1.78'
        transform='matrix(0 -1 -1 0 21.91 21.52)'
        stroke='currentColor'
      />
      <path d='M8.4 4.28H6.1' stroke='currentColor' />
      <path d='M13.43 19.73H12' stroke='currentColor' />
      <path d='M13.17 4.28h-1.62' stroke='currentColor' />
      <path d='M18.34 19.73h-2.31' stroke='currentColor' />
    </svg>
  )
}
