import type { Icon } from './types'

export const IconPrinterOff: Icon = ({
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
      data-slot='icon-ui-printer-off'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path d='m2.74 2.74 18.52 18.52' stroke='currentColor' />
      <path
        opacity='.2'
        d='M2.08 13.32c0-3.08 0-4.62.8-5.69a4 4 0 0 1 .8-.8c1.06-.8 2.6-.8 5.68-.8h5.28c3.08 0 4.62 0 5.69.8q.45.35.8.8c.8 1.07.8 2.6.8 5.69v2.94a2.52 2.52 0 0 1-5 .47v-.05a2.6 2.6 0 0 0-2.53-2.1H9.49c-1.24 0-2.3.89-2.53 2.1l-.01.1a2.46 2.46 0 0 1-4.87-.46z'
        fill='currentColor'
      />
      <path
        d='M9.85 6.04h5.7c2.7 0 4.04 0 4.98.7q.4.3.7.7c.7.93.7 2.27.7 4.97v1.93c0 .87 0 2.3-.24 2.91M6.47 18.78c-.83 0-1.25 0-1.59-.07a3.5 3.5 0 0 1-2.73-2.73c-.07-.35-.07-.76-.07-1.6v-1.97c0-2.7 0-4.04.7-4.98q.3-.4.7-.7c.58-.43 1.33-.6 2.48-.66'
        stroke='currentColor'
      />
      <path
        d='m17.16 17.22.06.37c.37 2.17.56 3.26-.04 3.97s-1.7.71-3.9.71H10.6c-2.16 0-3.24 0-3.83-.7-.6-.68-.45-1.75-.13-3.88.24-1.63.36-2.45.92-2.93.56-.49 1.39-.49 3.04-.49h3.47'
        stroke='currentColor'
      />
      <path
        d='m17.22 6.04-.3-1.23c-.37-1.45-.56-2.18-1.1-2.6s-1.29-.42-2.78-.42H9.69c-.34 0-.51 0-.66.02A2 2 0 0 0 7.5 2.98c-.06.14-.1.3-.2.63'
        stroke='currentColor'
      />
      <path
        d='M18.48 10.06a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0'
        fill='currentColor'
        stroke='currentColor'
      />
    </svg>
  )
}
