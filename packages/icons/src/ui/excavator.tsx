import type { Icon } from './types'

export const IconExcavator: Icon = ({
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
      data-slot='icon-ui-excavator'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='m5.02 10.04-.6.01a2.5 2.5 0 0 0-1.24.5c-.12.1-.23.2-.45.42-.26.26-.4.39-.5.53A2.5 2.5 0 0 0 1.7 13c0 .17.02.35.07.72l.27 2.06a2.5 2.5 0 0 0 2.52 2.16l7.2-.15a2.3 2.3 0 0 0 2.25-2.3v-2.94a2.5 2.5 0 0 0-.9-1.8l-.2-.16-.15-.1a2.5 2.5 0 0 0-1.34-.45z'
        fill='currentColor'
      />
      <path
        d='M12.35 10.24h-6.8c-1.22 0-1.83 0-2.31.21a2.5 2.5 0 0 0-1.3 1.3c-.2.47-.2 1.08-.2 2.3s0 1.82.2 2.3a2.5 2.5 0 0 0 1.3 1.3c.48.2 1.09.2 2.3.2h3c2.55 0 3.82 0 4.67-.72l.32-.32c.72-.84.72-2.12.72-4.66 0-.85 0-1.28-.24-1.56l-.1-.1c-.29-.25-.71-.25-1.56-.25'
        stroke='currentColor'
      />
      <path
        d='M4.73 9.75V6.79c0-1 0-1.49.18-1.88A2 2 0 0 1 5.92 3.9c.39-.17.89-.17 1.88-.17s1.47 0 1.9.13a3 3 0 0 1 1.33.84c.3.34.51.78.93 1.67l2 4.24'
        stroke='currentColor'
      />
      <path
        d='m13.12 7.62 6.19-3.06c1.3-.64 1.94-.96 2.41-.67.47.3.47 1.02.47 2.46v6.13m0 0V15c0 1.59 0 2.38-.42 2.92a2 2 0 0 1-.35.35c-.54.42-1.33.42-2.91.42-.83 0-1.24 0-1.4-.22l-.06-.17c-.06-.26.22-.56.78-1.16z'
        stroke='currentColor'
      />
      <path d='m14.44 10.77 7.75-3.88' stroke='currentColor' />
      <path
        d='M2.08 19.32c0-.8.65-1.47 1.47-1.47h8.9c.8 0 1.46.66 1.46 1.47v0c0 .82-.65 1.47-1.47 1.47h-8.9c-.8 0-1.46-.65-1.46-1.47'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m14.3 6.9 6.3-3.2.07-.03a1 1 0 0 1 1.07.14l.05.05a1 1 0 0 1 .36.82v.07l-.11 1.18c-.05.5-.07.76-.2.97-.14.2-.37.33-.81.58l-4.92 2.78c-.78.44-1.17.66-1.54.57l-.15-.04c-.36-.14-.55-.54-.95-1.34-.38-.75-.57-1.13-.48-1.49l.05-.14c.14-.34.51-.53 1.27-.92'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='m17.32 17.48 1.82-1.84c1.05-1.06 1.58-1.6 2.04-1.57a1 1 0 0 1 .6.26c.34.3.33 1.06.3 2.56-.01.28-.02.43-.06.56l-.08.2c-.07.12-.17.22-.38.42l-.07.07a2 2 0 0 1-.61.5c-.18.07-.37.07-.76.07h-2.29a.72.72 0 0 1-.51-1.23'
        fill='currentColor'
      />
    </svg>
  )
}
