import type { Icon } from './types'

export const IconHardHat: Icon = ({
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
      data-slot='icon-ui-hard-hat'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='m14.54 5.78.17.16.18.13 3.32 2.13c.28.18.43.27.53.4s.16.29.27.6l1.14 3.16c.43 1.2.65 1.8.35 2.23-.29.42-.93.43-2.2.45l-12.6.18c-1.3.02-1.95.03-2.26-.4-.3-.42-.09-1.03.34-2.26l1.15-3.31c.12-.34.18-.51.3-.65.1-.13.25-.22.56-.4l3.36-2.03a2 2 0 0 0 .4-.3c.06-.06.1-.14.2-.3.21-.35.31-.52.47-.64l.23-.13c.18-.07.38-.07.8-.07h1.42c.42 0 .63 0 .81.08s.33.22.62.52z'
        fill='currentColor'
      />
      <rect
        x='22.28'
        y='14.9'
        width='3.82'
        height='20.57'
        rx='1.5'
        transform='rotate(90 22.28 14.9)'
        stroke='currentColor'
      />
      <path
        d='m8.17 14.9 1.2-8.22c.07-.47.1-.7.18-.9A2 2 0 0 1 11 4.51c.2-.04.44-.04.91-.04s.7 0 .9.04a2 2 0 0 1 1.46 1.24c.07.2.11.42.19.88l1.36 8.27'
        stroke='currentColor'
      />
      <path
        d='M21 14.9c0-4.06-2.68-7.5-6.38-8.61M3 14.9a9 9 0 0 1 6.39-8.61'
        stroke='currentColor'
      />
    </svg>
  )
}
