import type { Icon } from './types'

export const IconMicVocal: Icon = ({
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
      data-slot='icon-ui-mic-vocal'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m14.08 12.83-6.33 4.86c-.6.46-.9.69-1.23.69l-.14-.01c-.34-.05-.6-.31-1.14-.85s-.8-.8-.85-1.15v-.12c0-.34.22-.64.69-1.25l4.74-6.17c.68-.88 1.02-1.32 1.41-1.38a1 1 0 0 1 .54.07c.37.15.6.66 1.03 1.68l.02.06c.1.22.14.33.21.42a1 1 0 0 0 .24.24c.1.06.2.1.43.2.82.32 1.24.48 1.4.74a1 1 0 0 1 .13.86c-.1.3-.45.57-1.15 1.1'
        fill='currentColor'
      />
      <circle
        cx='16.39'
        cy='6.37'
        r='4.7'
        transform='rotate(90 16.39 6.37)'
        stroke='currentColor'
      />
      <path d='m16.3 11.13-8.55 6.56A1.9 1.9 0 0 1 5.08 15l6.55-8.53' stroke='currentColor' />
      <path
        d='M5.06 17.38c-.76.72-1.35 1.37-1.35 2.36 0 2.07 2.7 3.02 4.77 2.4 2.19-.66 2.09-2.4 4.6-2.4 1.82 0 2.75.81 2.94 2.13'
        stroke='currentColor'
      />
      <path d='M14.37 6.33c.1-.43.23-.68.52-1.03.33-.4.6-.58 1.09-.76' stroke='currentColor' />
    </svg>
  )
}
