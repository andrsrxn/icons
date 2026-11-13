import type { Icon } from './types'

export const IconCdn: Icon = ({
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
      data-slot='icon-ui-cdn'
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
        d='M10.25 13.8v-3.67c0-.41 0-.62.16-.76.15-.15.33-.14.69-.13 1.05.05 2.73.47 2.73 2.72s-1.68 2.68-2.73 2.72c-.36.02-.54.03-.7-.12s-.15-.35-.15-.76'
        stroke='currentColor'
      />
      <path
        d='M7.85 9.5q-.52-.29-1.14-.3c-1.38 0-2.5 1.24-2.5 2.76s1.12 2.76 2.5 2.76q.62 0 1.14-.3'
        stroke='currentColor'
      />
      <path
        d='M16.13 14.67V11c0-1.07 0-1.6.24-1.65s.46.43.9 1.4l1.22 2.6c.45.97.68 1.45.91 1.4.24-.05.24-.59.24-1.65V9.23'
        stroke='currentColor'
      />
    </svg>
  )
}
