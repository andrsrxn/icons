import type { Icon } from './types'

export const IconWheat: Icon = ({
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
      data-slot='icon-ui-wheat'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M14.78 2.83a6.7 6.7 0 0 1 3.69-1.03c.94 0 1.42-.01 2.02.78s.48 1.23.24 2.1c-.3 1.08-.9 2.3-2.1 3.3-1.9 1.56-4.03.9-4.96-.24-.86-1.03-1.04-3.5 1.1-4.9'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M6.53 7.68c-.16-1.2.11-2.3.5-3.2.36-.82.54-1.24 1.55-1.45 1.02-.21 1.33.08 1.96.67.7.66 1.38 1.58 1.7 2.84.53 2.15-.84 3.63-2.13 3.96-1.18.3-3.26-.52-3.58-2.82'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M3.92 13.75a5.6 5.6 0 0 1-.35-2.89c.11-.87.17-1.3 1.12-1.78s1.32-.28 2.04.14a5.4 5.4 0 0 1 2.11 2.1c1.01 1.83.13 3.52-.97 4.13-1 .56-3.1.33-3.95-1.7'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M14.7 8.79c1.1.04 2.05.44 2.8.92.75.47 1.13.7 1.16 1.77.03 1.06-.3 1.3-.99 1.8a5.5 5.5 0 0 1-2.84 1.04c-2.11.15-3.28-1.38-3.37-2.64-.09-1.15 1.02-2.98 3.23-2.9'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M12.75 13.82a5.5 5.5 0 0 1 2.09 1.92c.47.72.71 1.09.29 2.08-.42.98-.83 1.06-1.64 1.2a5.3 5.3 0 0 1-2.9-.24c-1.92-.74-2.33-2.57-1.9-3.73.4-1.06 2.13-2.22 4.06-1.23'
        fill='currentColor'
      />
      <path
        d='M14.78 2.83a7.3 7.3 0 0 1 4.96-.95c.54.08.81.11 1.06.43s.22.59.17 1.12a6.7 6.7 0 0 1-2.34 4.55c-1.9 1.56-4.03.9-4.96-.24-.86-1.03-1.04-3.5 1.1-4.9'
        stroke='currentColor'
      />
      <path
        d='M6.53 7.68a6.5 6.5 0 0 1 1.1-4.32c.29-.45.43-.68.84-.77.4-.1.62.05 1.07.33a6 6 0 0 1 2.7 3.62c.53 2.15-.84 3.63-2.13 3.96-1.18.3-3.26-.52-3.58-2.82'
        stroke='currentColor'
      />
      <path
        d='M3.92 13.75a6 6 0 0 1-.08-4.14c.16-.5.24-.76.6-.96.38-.19.63-.1 1.12.05a5.7 5.7 0 0 1 3.28 2.62c1.01 1.83.13 3.52-.97 4.13-1 .56-3.1.33-3.95-1.7'
        stroke='currentColor'
      />
      <path
        d='M14.7 8.79c1.68.06 3.01.96 3.82 1.7.4.35.6.53.62.95s-.16.6-.51.99c-.74.79-2 1.77-3.8 1.9-2.11.14-3.28-1.39-3.37-2.65-.09-1.15 1.02-2.98 3.23-2.9'
        stroke='currentColor'
      />
      <path
        d='M12.75 13.82a6 6 0 0 1 2.69 3.04c.21.5.32.74.15 1.13-.16.39-.4.48-.88.68a5.6 5.6 0 0 1-4.11.1c-1.93-.73-2.34-2.56-1.9-3.72.4-1.06 2.12-2.22 4.05-1.23'
        stroke='currentColor'
      />
      <path d='M13.84 8.12c-3.03 2.09-6.78 8.18-6.78 14.13' stroke='currentColor' />
      <path d='M10.98 13.02a4.2 4.2 0 0 0-1.63-2.19' stroke='currentColor' />
    </svg>
  )
}
