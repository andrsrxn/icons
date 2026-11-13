import type { Icon } from './types'

export const IconHouseDeviceLaptop: Icon = ({
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
      data-slot='icon-ui-house-device-laptop'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.8 17.01c-.03.76-.05 1.13.16 1.41.2.28.56.38 1.28.59l2.82.8.37.1c.1 0 .19 0 .38-.03l.42-.04c.5-.05.74-.07.94-.2.2-.12.33-.34.58-.76l.75-1.26c.14-.22.2-.34.24-.46s.04-.25.05-.52l.1-4.23c.02-.53.02-.8.15-1.01.12-.22.35-.36.8-.64l.04-.03c.24-.15.36-.23.5-.27.13-.03.27-.03.56-.03h4.12c.47 0 .7 0 .89-.07a1 1 0 0 0 .6-.73c.05-.19 0-.42-.08-.88q-.03-.22-.06-.31a1 1 0 0 0-.2-.35l-.24-.2L11 2.98c-.6-.5-.9-.76-1.27-.76-.36 0-.66.25-1.27.75L2.81 7.65c-.35.28-.52.42-.61.61-.1.2-.1.42-.12.86z'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M17.69 10.27v-.12a4 4 0 0 0-1.22-2.8l-.08-.09-1.2-1.13c-2.57-2.44-3.86-3.66-5.44-3.67H9.7c-1.57.01-2.86 1.23-5.45 3.68C3.03 7.29 2.42 7.86 2.1 8.6l-.03.05c-.31.75-.31 1.58-.31 3.25v1.9c0 1.9 0 2.84.31 3.58a4 4 0 0 0 2.14 2.14c.74.31 1.69.31 3.57.31'
        stroke='currentColor'
      />
      <path
        d='M20.75 17.53v-2.14c0-2.35 0-3.53-.73-4.26-.73-.74-1.9-.74-4.27-.74h-1.1c-2.36 0-3.54 0-4.27.74-.73.73-.73 1.9-.73 4.26v2.14'
        stroke='currentColor'
      />
      <path
        d='M9.6 17.53c-1.29 1.61-1.94 2.42-1.66 3.07l.05.12c.34.62 1.38.62 3.44.62h7.55c2.07 0 3.1 0 3.45-.6l.08-.18c.24-.65-.42-1.45-1.76-3.03'
        stroke='currentColor'
      />
      <path d='M20.75 17.53H9.65' stroke='currentColor' />
      <path
        opacity='.2'
        d='m8.93 18.36.25-.34q.38-.41.92-.49l.42-.01h9.42l.42.01q.54.08.91.48l.25.34c.38.55.57.83.64 1.05.24.79-.2 1.63-1 1.88-.2.06-.55.06-1.22.06h-9.42c-.66 0-1 0-1.21-.06a1.5 1.5 0 0 1-1-1.87c.07-.22.25-.5.62-1.05'
        fill='currentColor'
      />
    </svg>
  )
}
