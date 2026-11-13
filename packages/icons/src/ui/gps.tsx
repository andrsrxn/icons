import type { Icon } from './types'

export const IconGps: Icon = ({
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
      data-slot='icon-ui-gps'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M22.4 12c0-3.14 0-4.71-.84-5.8a4 4 0 0 0-.73-.71c-1.08-.84-2.65-.84-5.79-.84H8.96c-3.14 0-4.71 0-5.8.84a4 4 0 0 0-.72.72c-.83 1.08-.83 2.65-.83 5.79s0 4.71.83 5.8a4 4 0 0 0 .73.71c1.08.84 2.65.84 5.79.84h6.08c3.14 0 4.71 0 5.8-.84a4 4 0 0 0 .72-.72c.83-1.08.83-2.65.83-5.79'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M8.96 19.35h6.08c3.14 0 4.71 0 5.8-.84a4 4 0 0 0 .72-.72c.83-1.08.83-2.65.83-5.79v0c0-3.14 0-4.71-.83-5.8a4 4 0 0 0-.73-.71c-1.08-.84-2.65-.84-5.79-.84H8.96c-3.14 0-4.71 0-5.8.84a4 4 0 0 0-.72.72c-.83 1.08-.83 2.65-.83 5.79v0c0 3.14 0 4.71.83 5.8a4 4 0 0 0 .73.71c1.08.84 2.65.84 5.79.84'
        stroke='currentColor'
      />
      <path
        d='M19.42 10.1c-.3-.27-.84-.67-1.61-.67s-1.62.43-1.62 1.34c0 1.95 3.23.4 3.23 2.37 0 .93-.82 1.43-1.61 1.43s-1.32-.25-1.69-.8'
        stroke='currentColor'
      />
      <path
        d='M8.18 9.71a2.57 2.57 0 1 0-.4 4.74c.26-.08.39-.12.57-.33l.1-.14c.15-.24.15-.45.15-.87 0-.4 0-.61-.12-.75l-.07-.07c-.14-.11-.34-.11-.75-.11h-.43'
        stroke='currentColor'
      />
      <path
        d='M10.8 14.57v-4.14c0-.47 0-.7.15-.85s.39-.15.86-.15h.85c.77 0 1.39.66 1.39 1.47s-.62 1.47-1.39 1.47h-1.83'
        stroke='currentColor'
      />
    </svg>
  )
}
