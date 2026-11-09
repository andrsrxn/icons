import type { Icon } from './types'

export const IconCalendarEdit: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel?.trim())

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      data-slot='icon-ui-calendar-edit'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M3 8.7c0-1.15 0-1.73.13-2.21a4 4 0 0 1 2.9-2.91c.48-.12 1.07-.12 2.23-.12h7.47c1.16 0 1.74 0 2.22.12a4 4 0 0 1 2.9 2.9c.13.49.13 1.07.13 2.23z'
        fill='currentColor'
      />
      <path
        d='M9.96 21.43c-2.76 0-4.14 0-5.14-.65a4 4 0 0 1-1.16-1.16c-.65-1-.65-2.38-.65-5.14v-3.02C3 7.69 3 5.8 4.18 4.63S7.24 3.46 11 3.46h2.67c3.1 0 4.64 0 5.71.8a4 4 0 0 1 .78.79c.8 1.07.8 2.61.8 5.7'
        stroke='currentColor'
      />
      <path d='M7.68 1.76v3.4' stroke='currentColor' />
      <path d='M16.36 1.76v3.4' stroke='currentColor' />
      <path d='M20.56 8.7H3.83' stroke='currentColor' />
      <path
        opacity='.2'
        d='M19.73 16.6q.15.17.23.22a1 1 0 0 0 1.2 0q.08-.05.23-.22.17-.15.22-.23a1 1 0 0 0 0-1.2q-.05-.08-.22-.23l-.2-.2-.23-.22a1 1 0 0 0-1.2 0q-.08.05-.23.22-.17.15-.22.23a1 1 0 0 0 0 1.2q.05.08.22.23z'
        fill='currentColor'
      />
      <path d='m20.56 17.45-1.78-1.78' stroke='currentColor' />
      <path
        d='M13.96 21.04c-.14.65-.21.97-.04 1.17l.04.03c.19.17.51.1 1.17-.04a4 4 0 0 0 1.1-.32c.23-.13.43-.33.83-.72l4.54-4.45c.31-.31.47-.46.55-.63a1 1 0 0 0 0-.82 3 3 0 0 0-.54-.64c-.31-.3-.46-.46-.63-.54a1 1 0 0 0-.81 0 3 3 0 0 0-.64.54l-4.51 4.5c-.4.39-.59.58-.72.82l-.03.05c-.13.24-.19.51-.3 1.05'
        stroke='currentColor'
      />
    </svg>
  )
}
