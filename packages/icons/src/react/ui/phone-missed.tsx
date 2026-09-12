import type { Icon } from './types'

export const IconPhoneMissed: Icon = ({
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
      data-slot='icon-ui-phone-missed'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        d='M11.36 14.9h1.3c.74 0 1.1 0 1.41.1a2 2 0 0 1 1.04.81c.18.28.27.63.45 1.34.14.54.21.82.34 1.05a2 2 0 0 0 .75.75c.22.13.5.2 1.04.34l2.01.54c.9.24 1.35.36 1.7.15.37-.2.49-.65.74-1.55l.18-.66c.14-.51.21-.76.17-1.15-.04-.4-.13-.55-.3-.86-.89-1.62-3.45-4.67-10.17-4.67-6.7 0-9.28 3.04-10.17 4.66-.18.32-.26.47-.3.87-.05.39.02.64.16 1.16l.19.66c.25.9.37 1.34.73 1.54s.8.09 1.7-.15l2.03-.54c.54-.14.8-.21 1.03-.34a2 2 0 0 0 .77-.77c.12-.23.19-.5.33-1.03.17-.7.26-1.05.43-1.32A2 2 0 0 1 9.98 15c.3-.1.67-.1 1.38-.1'
        fill='currentColor'
      />
      <path
        d='M11.36 14.9h1.3c.74 0 1.1 0 1.41.1a2 2 0 0 1 1.04.81c.18.28.27.63.45 1.34.14.54.21.82.34 1.05a2 2 0 0 0 .75.75c.22.13.5.2 1.04.34l2.01.54c.9.24 1.35.36 1.7.15.37-.2.49-.65.74-1.55l.18-.66c.14-.51.21-.76.17-1.15-.04-.4-.13-.55-.3-.86-.89-1.62-3.45-4.67-10.17-4.67-6.7 0-9.28 3.04-10.17 4.66-.18.32-.26.47-.3.87-.05.39.02.64.16 1.16l.19.66c.25.9.37 1.34.73 1.54s.8.09 1.7-.15l2.03-.54c.54-.14.8-.21 1.03-.34a2 2 0 0 0 .77-.77c.12-.23.19-.5.33-1.03h0c.17-.7.26-1.05.43-1.32A2 2 0 0 1 9.98 15c.3-.1.67-.1 1.38-.1'
        stroke='currentColor'
      />
      <path
        d='m7.3 3.83 1.94 1.95c1.33 1.33 2 2 2.83 2s1.5-.67 2.83-2l1.94-1.95'
        stroke='currentColor'
      />
      <path
        d='M6.4 6.55c0-1.51 0-2.27.38-2.8a2 2 0 0 1 .43-.43c.53-.38 1.29-.38 2.8-.38'
        stroke='currentColor'
      />
    </svg>
  )
}
