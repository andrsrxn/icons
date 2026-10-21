import type { Icon } from './types'

export const IconTulip: Icon = ({
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
      data-slot='icon-ui-tulip'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12.42 18.77c.9-3.26 3.7-4.13 5.12-4.36.36-.05.54-.08.73.05s.2.3.22.64c.06.94-.02 2.54-1.13 3.7-1.12 1.2-3.1 1.12-4.24.96-.4-.06-.6-.1-.73-.27-.12-.17-.07-.35.03-.72'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M9.4 3.5c2.17-3.46 4.48-1.25 5.25-.33.13.15.19.23.2.36.02.14-.03.22-.11.38-.24.45-.75 1.28-1.8 2.39-1.33 1.39-2.95-.97-3.54-1.97-.12-.2-.17-.29-.17-.41 0-.13.06-.22.18-.41'
        fill='currentColor'
      />
      <path d='M9.26 3.83A2.8 2.8 0 0 1 12 1.7c1.32 0 2.44.9 2.73 2.12' stroke='currentColor' />
      <path d='M12 22.33V11.51' stroke='currentColor' />
      <path
        d='M17.54 14.41c-1.42.23-4.22 1.1-5.12 4.36-.1.37-.15.55-.03.72.13.18.33.2.73.27 1.14.16 3.12.23 4.24-.96a5 5 0 0 0 1.13-3.7c-.03-.34-.04-.51-.22-.64-.19-.13-.37-.1-.73-.05'
        stroke='currentColor'
      />
      <path
        d='M11.99 11.47s2.8 1.52 5.07-1.44c1.63-2.13 1.48-5.12 1.26-6.65-.06-.43-.1-.65-.33-.77s-.44-.02-.86.16a10.5 10.5 0 0 0-5.76 5.91'
        stroke='currentColor'
      />
      <path
        d='M11.99 11.47s-2.47 1.45-4.74-1.51C5.63 7.85 5.69 4.92 5.86 3.4c.05-.44.08-.66.3-.78.24-.12.45-.04.88.14a10 10 0 0 1 5.03 4.43'
        stroke='currentColor'
      />
    </svg>
  )
}
