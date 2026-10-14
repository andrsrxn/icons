import type { Icon } from './types'

export const IconCosmetic: Icon = ({
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
      data-slot='icon-ui-cosmetic'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M22.46 10.25a6.28 6.28 0 1 0-12.55 0 6.28 6.28 0 0 0 12.55 0'
        fill='currentColor'
      />
      <rect
        opacity='.2'
        width='8.42'
        height='5.39'
        rx='1'
        transform='matrix(0 -1 -1 0 7.15 20.03)'
        fill='currentColor'
      />
      <path
        d='M22.46 10.25a6.28 6.28 0 1 0-12.55 0 6.28 6.28 0 0 0 12.55 0'
        stroke='currentColor'
      />
      <path d='M14.9 6.83 12.83 8.9' stroke='currentColor' />
      <path d='m18.33 7.1-5.2 5.2' stroke='currentColor' />
      <path d='M13.05 20.03h6.27' stroke='currentColor' />
      <path d='M16.18 20.03v-3.5' stroke='currentColor' />
      <rect
        width='7.98'
        height='5.39'
        rx='1.5'
        transform='matrix(0 -1 -1 0 7.15 20.03)'
        stroke='currentColor'
      />
      <path
        d='M6.06 12.05V9.3c0-.37 0-.55-.08-.72s-.22-.28-.5-.51c-1.15-.95-1.72-1.42-2.18-1.2s-.46.95-.46 2.42v2.75'
        stroke='currentColor'
      />
    </svg>
  )
}
