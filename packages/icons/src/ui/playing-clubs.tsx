import type { Icon } from './types'

export const IconPlayingClubs: Icon = ({
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
      data-slot='icon-ui-playing-clubs'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M16.74 5.91c0 3.62 7.19 5.3 3.56 9.7-1.76 2.14-4.13 1.86-5.95 1.39-.56-.15 1.18 3.11.7 4.61-.4 1.23-3.25.74-3.25.74s-3 .62-3.32-.6c-.4-1.51 1.68-4.93 1.05-4.78-2.41.56-5.67.94-6.4-2.13C1 10.96 7.1 8.98 7.1 5.9c0-2.38 2.16-4.3 4.82-4.3s4.82 1.92 4.82 4.3'
        fill='currentColor'
      />
      <path d='M17 8.17V6.2c0-2.47-2.23-4.48-5-4.48s-5 2-5 4.48v1.97' stroke='currentColor' />
      <path
        d='M10.34 17.43a.67.67 0 0 0 .26-.98.84.84 0 0 0-1.07-.28l.4.63zM7.4 8.8a.67.67 0 0 0 .26-.98.84.84 0 0 0-1.07-.28l.4.63zm2.54 8-.4-.63c-2.1 1.07-4.5.5-5.62-1.25l-.67.35-.66.34c1.64 2.54 5.05 3.22 7.75 1.82zm-6.69-1.53.67-.35c-1.14-1.76-.49-4.07 1.57-5.14l-.4-.63-.41-.63c-2.73 1.41-3.72 4.57-2.1 7.1zM5.1 9.15l.4.63 1.9-.98-.4-.63-.41-.63-1.91.98z'
        fill='currentColor'
      />
      <path
        d='m10 16.78-1.07 2.76c-.48 1.23-.72 1.85-.42 2.28.3.44.96.44 2.28.44h2.28c1.34 0 2 0 2.3-.44s.06-1.06-.44-2.3l-1.09-2.74'
        stroke='currentColor'
      />
      <path
        d='M13.54 17.46a.67.67 0 0 1-.26-.97.84.84 0 0 1 1.08-.29l-.41.63zM16.6 8.8a.67.67 0 0 1-.26-.98.84.84 0 0 1 1.07-.28l-.4.63zm-2.65 8.03.4-.63c2.09 1.07 4.6.47 5.73-1.28l.67.35.66.34c-1.64 2.54-5.16 3.25-7.87 1.85zm6.8-1.56-.67-.35c1.14-1.76.49-4.07-1.57-5.14l.4-.63.41-.63c2.73 1.41 3.72 4.57 2.1 7.1zM18.9 9.15l-.4.63-1.91-.98.4-.63.41-.63 1.91.98z'
        fill='currentColor'
      />
    </svg>
  )
}
