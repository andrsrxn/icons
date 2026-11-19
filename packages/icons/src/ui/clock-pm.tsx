import type { Icon } from './types'

export const IconClockPm: Icon = ({
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
      data-slot='icon-ui-clock-pm'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M16.8 21.06A10.25 10.25 0 1 0 1.89 10.43s-.15.92-.08 2.16' stroke='currentColor' />
      <path
        d='m17.1 14.73-2.71-1.8c-.87-.6-1.3-.88-1.54-1.32s-.24-.97-.24-2.02V5.7'
        stroke='currentColor'
      />
      <path
        d='M8.07 22.39v-4.74c0-.82 0-1.23.21-1.3.21-.06.44.28.89.97l.7 1.07c.22.35.34.53.5.53.17 0 .28-.18.5-.54l.63-1c.45-.7.68-1.06.9-1 .2.06.2.48.2 1.33v4.68'
        stroke='currentColor'
      />
      <path
        d='M1.75 22.39v-5c0-.47 0-.7.15-.85s.38-.15.85-.15h1.16c.9 0 1.63.77 1.63 1.72s-.73 1.72-1.63 1.72H1.78'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M1.78 12a10.22 10.22 0 1 0 20.44 0 10.22 10.22 0 0 0-20.44 0'
        fill='currentColor'
      />
    </svg>
  )
}
