import type { Icon } from './types'

export const IconThermometerLightning: Icon = ({
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
      data-slot='icon-ui-thermometer-lightning'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='M14.29 14.72a4.03 4.03 0 1 0 4.34 0' stroke='currentColor' />
      <path
        d='M18.57 14.62V3.8a2 2 0 0 0-1.92-1.92h-.37a2 2 0 0 0-1.92 1.92v10.81'
        stroke='currentColor'
      />
      <path
        d='M16.96 18.03a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0'
        fill='currentColor'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='m4.1 10.13 2.73-3.77c.91-1.25 1.36-1.88 1.72-1.73s.27.9.09 2.44l-.15 1.2c-.06.53-.1.79.06.95.15.17.4.17.93.17h.42c.84 0 1.26 0 1.4.27s-.1.62-.58 1.3l-2.63 3.77c-.91 1.31-1.37 1.97-1.73 1.83-.37-.14-.27-.94-.08-2.53l.15-1.19c.06-.52.1-.78-.06-.95-.15-.17-.41-.17-.94-.17h-.52c-.86 0-1.29 0-1.43-.27s.12-.62.62-1.32'
        fill='currentColor'
      />
      <path
        d='M6.83 6.36 4.1 10.13c-.5.7-.76 1.05-.62 1.32s.57.27 1.43.27h.52c.53 0 .8 0 .94.17.15.17.12.43.06.95l-.15 1.2c-.2 1.58-.29 2.38.08 2.52.36.14.82-.52 1.73-1.83l2.63-3.77c.48-.68.72-1.03.58-1.3s-.56-.27-1.4-.27h-.42c-.52 0-.78 0-.93-.17-.15-.16-.12-.42-.06-.95l.15-1.2c.18-1.54.27-2.3-.09-2.44s-.8.48-1.72 1.73'
        stroke='currentColor'
      />
      <path
        opacity='.2'
        d='M14.44 14.24V3.86a2.02 2.02 0 0 1 4.04 0v10.38s1.75 1.91 1.75 3.56c0 2.08-1.68 4.36-3.77 4.36s-3.77-2.28-3.77-4.36c0-1.65 1.75-3.56 1.75-3.56'
        fill='currentColor'
      />
    </svg>
  )
}
