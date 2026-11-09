import type { Icon } from './types'

export const IconDeviceTabletLightning: Icon = ({
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
      data-slot='icon-ui-device-tablet-lightning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M11.77 1.7c-3.77 0-5.65 0-6.82 1.16C3.77 4.04 3.77 5.92 3.77 9.7v4.62c0 3.77 0 5.65 1.18 6.83C6.12 22.3 8 22.3 11.77 22.3h.46c3.77 0 5.65 0 6.82-1.17 1.18-1.18 1.18-3.06 1.18-6.83V9.69c0-3.77 0-5.65-1.18-6.83C17.88 1.7 16 1.7 12.23 1.7zm1.02 7.63c-.03-.6-.04-.9-.09-1.04a1 1 0 0 0-1.57-.45c-.12.1-.28.35-.62.84l-1.48 2.2c-.44.65-.66.98-.66 1.29a1 1 0 0 0 .22.6c.2.25.57.37 1.32.6l.27.08.34.12a1 1 0 0 1 .54.73l.01.36c0 .67 0 1 .06 1.17a1 1 0 0 0 1.52.48c.14-.1.33-.37.72-.91l1.47-2.06c.57-.8.86-1.2.8-1.59a1 1 0 0 0-.1-.32c-.18-.35-.64-.52-1.57-.85l-.36-.13-.29-.11a1 1 0 0 1-.51-.7c-.02-.08-.02-.15-.02-.31'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path
        d='M20.23 14.3V9.7c0-3.78 0-5.66-1.18-6.84C17.88 1.7 16 1.7 12.23 1.7h-.46c-3.77 0-5.65 0-6.82 1.17C3.77 4.04 3.77 5.92 3.77 9.7v4.62c0 3.77 0 5.65 1.18 6.83C6.12 22.3 8 22.3 11.77 22.3h.46c3.77 0 5.65 0 6.82-1.17 1.18-1.18 1.18-3.06 1.18-6.83'
        stroke='currentColor'
      />
      <path
        d='m10.56 8.33-1.72 2.65c-.46.7-.68 1.05-.63 1.36a1 1 0 0 0 .17.36c.2.25.61.3 1.44.42l.1.01c.48.07.73.1.9.23q.19.15.27.38c.07.2.02.44-.06.92-.34 1.86-.5 2.8-.28 3.08a.8.8 0 0 0 .72.29c.37-.05.89-.84 1.93-2.42h0l1.7-2.6c.52-.78.77-1.17.68-1.51l-.1-.24c-.2-.3-.65-.37-1.57-.52l-.2-.03c-.44-.07-.66-.1-.8-.22a1 1 0 0 1-.3-.42c-.06-.18-.02-.4.05-.83.31-1.74.47-2.61.27-2.89a.8.8 0 0 0-.8-.32c-.33.07-.81.81-1.77 2.3'
        stroke='currentColor'
      />
    </svg>
  )
}
