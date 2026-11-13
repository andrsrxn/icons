import type { Icon } from './types'

export const IconGlobeCursor: Icon = ({
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
      data-slot='icon-ui-globe-cursor'
      className={`icon-ui ${className ?? ''}`.trim()}
      {...props}
      role={isLabelled ? 'img' : undefined}
      aria-hidden={isLabelled ? undefined : true}
      aria-label={isLabelled ? ariaLabel : undefined}
      focusable={false}>
      <path
        opacity='.2'
        d='M1.78 12a10.22 10.22 0 0 0 13.77 9.59l-1.88-5.92 1.05-.94 6.37 1.94A10.22 10.22 0 1 0 1.78 12'
        fillRule='evenodd'
        clipRule='evenodd'
        fill='currentColor'
      />
      <path d='M22.3 12a10.3 10.3 0 1 0-11.23 10.27' stroke='currentColor' />
      <path
        d='M16.37 12c0-5.7-1.96-10.3-4.37-10.3S7.63 6.3 7.63 12c0 4.77 1.56 9.03 3.42 10.2'
        stroke='currentColor'
      />
      <path d='M1.7 12h20.6' stroke='currentColor' />
      <path
        d='m14.6 18.13.84 2.56c.3.94.46 1.4.67 1.58a1 1 0 0 0 1.28.04c.21-.17.39-.63.75-1.55.13-.34.2-.52.3-.67a2 2 0 0 1 .65-.66c.15-.1.32-.16.67-.3h0c.93-.36 1.4-.55 1.57-.76a1 1 0 0 0-.04-1.28c-.18-.2-.66-.36-1.61-.66l-2.57-.83c-1.64-.53-2.46-.79-2.89-.35-.43.43-.16 1.25.38 2.88'
        stroke='currentColor'
      />
    </svg>
  )
}
