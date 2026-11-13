import type { Icon } from './types'

export const IconCdnOff: Icon = ({
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
      data-slot='icon-ui-cdn-off'
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
        d='M13.42 13.56c-.56.88-1.6 1.1-2.32 1.12-.36.02-.54.03-.7-.12s-.15-.35-.15-.76v-3.4'
        stroke='currentColor'
      />
      <path d='M12.33 9.4c.59.18 1.16.57 1.39 1.39' stroke='currentColor' />
      <path
        d='M7.85 9.5q-.52-.29-1.14-.3c-1.38 0-2.5 1.24-2.5 2.76s1.12 2.76 2.5 2.76q.62 0 1.14-.3'
        stroke='currentColor'
      />
      <path
        d='M16.13 13.04V11c0-1.07 0-1.6.24-1.65s.46.43.9 1.4l1.22 2.6c.45.97.68 1.45.91 1.4.24-.05.24-.59.24-1.65V9.23'
        stroke='currentColor'
      />
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
      <path
        d='M19.1 19.36c-1.04.19-2.42.19-4.36.19H9.26c-3.33 0-5 0-6.11-.94a4 4 0 0 1-.5-.5C1.7 17 1.7 15.33 1.7 12s0-5 .93-6.11A3.4 3.4 0 0 1 4.56 4.7'
        stroke='currentColor'
      />
      <path
        d='M8.38 4.45h6.36c3.33 0 5 0 6.11.94a4 4 0 0 1 .5.5c.94 1.11.94 2.78.94 6.11v0c0 2.64 0 4.46-.6 5.62'
        stroke='currentColor'
      />
    </svg>
  )
}
