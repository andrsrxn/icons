import type { Icon } from './types'

export const IconSolarSystem: Icon = ({
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
      data-slot='icon-ui-solar-system'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='5.06'
        cy='5.06'
        r='5.06'
        transform='matrix(-1 0 0 1 17.06 6.94)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='1.93'
        cy='1.93'
        r='1.93'
        transform='matrix(-1 0 0 1 6.77 2.83)'
        fill='currentColor'
      />
      <circle
        opacity='.2'
        cx='1.93'
        cy='1.93'
        r='1.93'
        transform='matrix(-1 0 0 1 21.27 17.06)'
        fill='currentColor'
      />
      <circle
        cx='5.06'
        cy='5.06'
        r='5.06'
        transform='matrix(-1 0 0 1 17.06 6.94)'
        stroke='currentColor'
      />
      <circle
        cx='1.93'
        cy='1.93'
        r='1.93'
        transform='matrix(-1 0 0 1 6.77 2.83)'
        stroke='currentColor'
      />
      <circle
        cx='1.93'
        cy='1.93'
        r='1.93'
        transform='matrix(-1 0 0 1 21.27 17.06)'
        stroke='currentColor'
      />
      <path
        d='M6.62 3.45A9.2 9.2 0 0 1 12 1.83a10.17 10.17 0 0 1 8.56 15.67'
        stroke='currentColor'
      />
      <path d='M3.48 6.44a10.17 10.17 0 0 0 14.4 13.87' stroke='currentColor' />
    </svg>
  )
}
