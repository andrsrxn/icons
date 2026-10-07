import type { Icon } from './types'

export const IconTimelineAnnotations: Icon = ({
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
      data-slot='icon-ui-timeline-annotations'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <circle
        opacity='.2'
        cx='12'
        cy='18.41'
        r='2.56'
        transform='rotate(-90 12 18.4)'
        fill='currentColor'
      />
      <circle cx='12' cy='18.41' r='2.56' transform='rotate(-90 12 18.4)' stroke='currentColor' />
      <path d='M22.26 18.4h-7.7' stroke='currentColor' />
      <path d='M9.44 18.4h-7.7' stroke='currentColor' />
      <path
        opacity='.2'
        d='M15.88 11.45c.88 0 1.32 0 1.65-.17q.4-.22.62-.62c.17-.33.17-.77.17-1.65V6.03c0-1.41 0-2.12-.44-2.56-.43-.44-1.14-.44-2.56-.44H8.68c-1.42 0-2.13 0-2.56.44s-.44 1.15-.44 2.56v2.98c0 .88 0 1.32.17 1.65q.22.4.62.62c.33.17.77.17 1.65.17.27 0 .41 0 .54.03q.15.03.31.09c.13.05.24.13.47.28l.93.6c.8.5 1.19.77 1.63.77s.84-.26 1.63-.77l.93-.6c.23-.15.34-.23.47-.28l.3-.1c.14-.02.28-.02.55-.02'
        fill='currentColor'
      />
      <path
        d='M15.61 11.45c1.14 0 1.7 0 2.1-.29q.18-.14.32-.32c.3-.4.3-.96.3-2.1V6.03c0-1.41 0-2.12-.45-2.56-.43-.44-1.14-.44-2.56-.44H8.68c-1.42 0-2.13 0-2.56.44s-.44 1.15-.44 2.56v2.68c0 1.17 0 1.75.3 2.15q.12.16.29.29c.4.3.98.3 2.15.3h.18c.36 0 .53 0 .7.04q.28.06.5.22c.15.1.27.23.51.5.56.6.84.9 1.16 1.03.34.13.73.13 1.07 0 .33-.12.61-.42 1.17-1.01l.04-.04c.25-.26.38-.4.53-.5q.22-.13.46-.2c.18-.04.36-.04.73-.04z'
        stroke='currentColor'
      />
      <path d='M9.02 5.9h5.96' stroke='currentColor' />
      <path d='M9.93 8.71h4.14' stroke='currentColor' />
    </svg>
  )
}
