import type { Icon } from './types'

export const IconDevicePhoneLightning: Icon = ({
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
      data-slot='icon-ui-device-phone-lightning'
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={ariaLabel}
      focusable={isLabelled ? undefined : false}
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}>
      <path
        opacity='.2'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.39 1.75c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12v8.5c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h1.22c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12v-8.5c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88zm.02 8.05a.83.83 0 0 1 1.54.5l-.1 1.06c-.06.67.3 1.3.9 1.6a1.6 1.6 0 0 1 .68 2.27l-2 3.24a.93.93 0 0 1-1.73-.58l.15-1.67a1.2 1.2 0 0 0-.83-1.24 1.2 1.2 0 0 1-.66-1.74z'
        fill='currentColor'
      />
      <path
        d='M5.39 7.75v8.5c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h1.22c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12v-8.5c0-2.83 0-4.24-.88-5.12s-2.3-.88-5.12-.88h-1.22c-2.83 0-4.24 0-5.12.88s-.88 2.3-.88 5.12'
        stroke='currentColor'
      />
      <path d='M14.56 5.16H9.44' stroke='currentColor' />
      <path
        d='m9.26 13.16 1.49-2.3c.6-.93.91-1.4 1.1-1.5a.8.8 0 0 1 1.13.45c.06.2-.03.74-.23 1.85h0c-.05.27-.08.4-.06.53q.06.42.44.62.13.07.52.12h0l.18.03c.64.1.96.16 1.14.32a.8.8 0 0 1 .26.58c0 .24-.18.51-.54 1.06h0l-1.48 2.25c-.67 1.03-1.01 1.55-1.22 1.64a.8.8 0 0 1-1.08-.42c-.08-.22.03-.83.25-2.04.05-.31.08-.47.06-.6a.8.8 0 0 0-.43-.6 2 2 0 0 0-.6-.12h0l-.08-.01c-.56-.08-.85-.12-1.01-.25a.8.8 0 0 1-.32-.68c.02-.2.17-.45.48-.93'
        stroke='currentColor'
      />
    </svg>
  )
}
