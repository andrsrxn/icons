import type { Icon } from './types'

export const IconHeadsetOff: Icon = ({
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
      data-slot='icon-ui-headset-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
      <path
        d='M12.78 22.34h.18c3.78 0 5.66 0 6.83-1.17q.27-.27.47-.6m.7-6.28v3.11'
        stroke='currentColor'
      />
      <path
        d='M20.96 14.58v-4.7c0-5.16-4.54-8.22-9-8.22-1.71 0-3.44.45-4.9 1.3'
        stroke='currentColor'
      />
      <path d='M2.99 14.58v-4.7a7.7 7.7 0 0 1 1.73-4.95' stroke='currentColor' />
      <path
        opacity='.2'
        d='M8 18.58c.24 0 .36 0 .46-.02a1 1 0 0 0 .78-.78c.02-.1.02-.21.02-.45v-5.67c0-.24 0-.36-.02-.46a1 1 0 0 0-.78-.78c-.1-.02-.22-.02-.45-.02H6.92a4 4 0 0 0-3.93 3.93v.32a4 4 0 0 0 4.1 3.93z'
        fill='currentColor'
      />
      <path
        d='M2.99 14.5v.5a4 4 0 0 0 4.29 3.77h.65a1.5 1.5 0 0 0 1.32-1.33l.01-.38v-5.53a1.5 1.5 0 0 0-1.33-1.33H6.76A4 4 0 0 0 3 13.98z'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M16.64 18.38h.16a4 4 0 0 0 3.93-3.92v-.33a4 4 0 0 0-3.93-3.93h-1.09c-.24 0-.35 0-.45.02a1 1 0 0 0-.78.78c-.02.1-.02.22-.02.46v5.67c0 .24 0 .36.02.45.08.4.38.7.78.78.1.02.21.02.45.02z'
        fill='currentColor'
      />
      <path
        d='M20.27 16.66c.27-.37.66-1.28.69-1.85v-1.03A4 4 0 0 0 17.19 10h-1.16a1.5 1.5 0 0 0-1.29 1.12'
        stroke='currentColor'
      />
      <path
        d='M14.7 14.77v2.48c.08.7.63 1.25 1.33 1.32l.37.01h.79a4 4 0 0 0 .88-.15'
        stroke='currentColor'
      />
    </svg>
  )
}
