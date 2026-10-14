import type { Icon } from './types'

export const IconSpeechToFilm: Icon = ({
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
      data-slot='icon-ui-speech-to-film'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M12.44 9.58h8.49a1 1 0 0 0 .96-.96v-.33a3 3 0 0 0-2.9-2.9h-6.55z'
        fill='currentColor'
      />
      <path
        opacity='.2'
        d='M12.44 14.42h8.5a1 1 0 0 1 .95 1.05v.29a3 3 0 0 1-2.87 2.87h-6.58z'
        fill='currentColor'
      />
      <path d='M12.26 2.82v18.36' stroke='currentColor' />
      <path
        d='M12.36 5.4h3.75c2.82 0 4.24 0 5.12.87.88.88.88 2.3.88 5.13v1.2c0 2.83 0 4.25-.88 5.13s-2.3.87-5.12.87h-3.75'
        stroke='currentColor'
      />
      <path d='M8.7 9.15v6.76' stroke='currentColor' />
      <path d='M1.9 9.15v6.76' stroke='currentColor' />
      <path d='M5.3 6.63v11.8' stroke='currentColor' />
      <path d='M21.89 14.42h-9.53' stroke='currentColor' />
      <path d='M21.89 9.58h-9.53' stroke='currentColor' />
      <path d='M16.86 14.42v4.18' stroke='currentColor' />
      <path d='M16.86 5.4v4.18' stroke='currentColor' />
    </svg>
  )
}
