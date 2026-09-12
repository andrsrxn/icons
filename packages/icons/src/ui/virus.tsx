import type { Icon } from './types'

export const IconVirus: Icon = ({
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
      data-slot='icon-ui-virus'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path d='M1.44 12.01h.98' stroke='currentColor' />
      <path d='M21.33 12.03h1.1' stroke='currentColor' />
      <path d='M12 22.5v-1.25' stroke='currentColor' />
      <path d='M12 2.5v-.96' stroke='currentColor' />
      <path d='m18.62 5.32 1.1-1.1' stroke='currentColor' />
      <path d='m4.1 19.84 1.3-1.3' stroke='currentColor' />
      <path d='M5.38 5.3 3.84 3.78' stroke='currentColor' />
      <path d='m20.37 20.3-1.76-1.77' stroke='currentColor' />
      <circle
        opacity='.2'
        cx='12'
        cy='11.96'
        r='8.77'
        transform='rotate(90 12 11.96)'
        fill='currentColor'
      />
      <circle cx='12' cy='11.96' r='8.77' transform='rotate(90 12 11.96)' stroke='currentColor' />
      <path
        d='M12 16.23a.77.77 0 1 1-1.55 0 .77.77 0 0 1 1.55 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M8.55 11.77a.77.77 0 1 1-1.55 0 .77.77 0 0 1 1.55 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M15.55 10.23a.77.77 0 1 1-1.55 0 .77.77 0 0 1 1.55 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
