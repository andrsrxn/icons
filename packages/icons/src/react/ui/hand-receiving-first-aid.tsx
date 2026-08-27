import type { Icon } from './types'

export const IconHandReceivingFirstAid: Icon = ({
  size = 24,
  strokeWidth = 1.5,
  className,
  title,
  'aria-label': ariaLabel,
  ...props
}) => {
  const isLabelled = Boolean(ariaLabel || title)

  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      strokeLinecap='round'
      strokeLinejoin='round'
      data-slot='ui-icon-hand-receiving-first-aid'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable='false'
      className={`ui-icon ${className ?? ''}`}
      {...props}>
      {title ? <title>{title}</title> : null}
      <rect opacity='.2' x='2.77' y='13.58' width='3.81' height='7.51' rx='1' fill='currentColor' />
      <path
        opacity='.2'
        d='M16.83 9.55v-.1q0-.37.02-.5a1 1 0 0 1 .75-.75c.11-.03.25-.03.52-.03.26 0 .4 0 .5-.03a1 1 0 0 0 .76-.74c.02-.12.02-.25.02-.52v-.51c0-.27 0-.4-.02-.52a1 1 0 0 0-.75-.75c-.11-.02-.25-.02-.51-.02-.27 0-.4 0-.52-.03a1 1 0 0 1-.75-.75c-.02-.1-.02-.24-.02-.51s0-.4-.03-.52a1 1 0 0 0-.75-.74c-.1-.03-.24-.03-.51-.03h-.52c-.27 0-.4 0-.51.03a1 1 0 0 0-.75.74c-.03.12-.03.25-.03.52s0 .4-.02.51a1 1 0 0 1-.75.75c-.11.03-.25.03-.52.03q-.37 0-.5.02a1 1 0 0 0-.76.75c-.02.11-.02.25-.02.52v.51c0 .27 0 .4.02.52a1 1 0 0 0 .75.74c.11.03.25.03.52.03q.37 0 .5.03a1 1 0 0 1 .76.75q.02.13.02.5v.1c0 .35 0 .53.05.67a1 1 0 0 0 .66.66c.14.05.32.05.67.05h.34c.35 0 .53 0 .67-.05a1 1 0 0 0 .66-.66c.05-.14.05-.32.05-.67'
        fill='currentColor'
      />
      <path
        d='M6.58 19.83s1.1.86 2.66 1.22c3.14.71 4.74.52 7.52-.44 2.02-.69 3.62-2.55 4.43-3.66.38-.52.38-1.2.04-1.76a1.88 1.88 0 0 0-2.81-.42c-.98.83-2.26 1.84-3.53 2.56-.74.43-2.27.34-3.73.34m3.73-.34c.6-1.48.43-2.67-.23-2.9a11 11 0 0 0-3.82-.6c-3.56 0-4.26.83-4.26.83'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <rect
        x='2.77'
        y='13.58'
        width='3.81'
        height='7.51'
        rx='1'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
      <path
        d='M16.83 9.38V8.17h1.03c.5 0 .76 0 .96-.09a1 1 0 0 0 .5-.5c.08-.2.08-.45.08-.96 0-.5 0-.76-.09-.96a1 1 0 0 0-.49-.5c-.2-.08-.45-.08-.96-.08h-1.03V4.05c0-.51 0-.77-.1-.97a1 1 0 0 0-.49-.49c-.2-.09-.45-.09-.96-.09-.5 0-.76 0-.96.09a1 1 0 0 0-.5.5c-.09.2-.09.45-.09.96v1.03H12.7c-.5 0-.76 0-.96.09a1 1 0 0 0-.5.5c-.08.19-.08.44-.08.95s0 .77.09.97q.16.33.49.49c.2.09.45.09.96.09h1.03v1.21c0 .5 0 .76.1.96q.15.34.49.5c.2.09.45.09.96.09s.77 0 .96-.1a1 1 0 0 0 .5-.49c.09-.2.09-.45.09-.96'
        stroke='currentColor'
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
