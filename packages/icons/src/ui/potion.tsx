import type { Icon } from './types'

export const IconPotion: Icon = ({
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
      data-slot='icon-ui-potion'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12 22.31c-3.9 0-6.95-3.22-6.95-6.17l3.41-.63 3.54.45 3.4 1.37 3.67-1.82c0 3.76-3.16 6.8-7.07 6.8'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='3.29'
        height='5.56'
        rx='1.5'
        transform='matrix(0 -1 -1 0 14.78 5.03)'
        fill='currentColor'
      />
      <circle cx='12' cy='15.24' r='7.07' transform='rotate(90 12 15.24)' stroke='currentColor' />
      <path
        d='M14.31 12.16a.47.47 0 1 1 0 .93.47.47 0 0 1 0-.93'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        d='M14.78 5.03v-.5c0-1.21 0-1.81-.32-2.22l-.25-.24c-.4-.33-1-.33-2.21-.33-1.2 0-1.8 0-2.21.33l-.25.24c-.32.4-.32 1-.32 2.21v.5'
        stroke='currentColor'
      />
      <path d='M14.78 5.03v3.14' stroke='currentColor' />
      <path d='M7.81 5.03h8.38' stroke='currentColor' />
      <path d='M9.22 5.03v3.14' stroke='currentColor' />
      <path
        d='M5.32 16.51c.53-.46 2-1.27 4-1.27s4.38 1.63 6.33 1.63 2.84-.88 3.22-1.36'
        stroke='currentColor'
      />
    </svg>
  )
}
